import { FORM_AJAX_ENDPOINT, SITE_URL } from './site';
import {
  contactErrors,
  checkedPhone,
  type ContactFieldErrors,
} from './contact-validation';
import {
  DURATIONS,
  MEETING_TYPES,
  TOPICS,
} from '@/components/page/scheduler/constants';

const LIMIT = 16384;
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const FIELD_LIMITS: Record<string, number> = {
  name: 100,
  email: 254,
  company: 120,
  phone: 30,
  service: 150,
  message: 3000,
  meeting_context: 3000,
  visitor_timezone: 100,
  preferred_date: 10,
  preferred_time: 5,
  preferred_start: 30,
  meeting_type: 40,
  duration: 20,
  topic: 150,
};

/** No recipient, subject, CC, webhook or redirect can be supplied by visitors. */
export async function handleEnquiry(
  request: Request,
  forward: typeof fetch = fetch,
) {
  const reply = (
    outcome: string,
    requestId = '',
    status = 200,
    diagnostic?: {
      reason?: string;
      providerStatus?: number;
      code?: string;
      fieldErrors?: ContactFieldErrors;
    },
  ) =>
    Response.json(
      { outcome, requestId, ...diagnostic },
      { status, headers: { 'Cache-Control': 'no-store' } },
    );
  const origin = request.headers.get('origin');
  // Next can normalize request.url to localhost behind its server/proxy.
  // The browser's Origin must match the actual public Host, including its port.
  const host = request.headers.get('host') || new URL(request.url).host;
  try {
    if (
      !origin ||
      !['http:', 'https:'].includes(new URL(origin).protocol) ||
      new URL(origin).host !== host
    )
      return reply('rejected', '', 403);
  } catch {
    return reply('rejected', '', 403);
  }
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return reply('rejected', '', 415);
  // Bound streamed bodies too, rather than trusting Content-Length.
  let raw = '';
  const reader = request.body?.getReader();
  if (!reader) return reply('rejected', '', 400);
  const decoder = new TextDecoder();
  let bytes = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      bytes += part.value.byteLength;
      if (bytes > LIMIT) {
        await reader.cancel();
        return reply('rejected', '', 413);
      }
      raw += decoder.decode(part.value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return reply('rejected', '', 400);
  }
  let input: Record<string, unknown>;
  try {
    input = JSON.parse(raw);
    if (!input || typeof input !== 'object' || Array.isArray(input))
      return reply('rejected', '', 400);
  } catch {
    return reply('rejected', '', 400);
  }
  const requestId =
    typeof input.request_id === 'string' ? input.request_id : '';
  if (!UUID.test(requestId)) return reply('rejected', '', 400);
  const fields: Record<string, string> = {};
  for (const [key, max] of Object.entries(FIELD_LIMITS)) {
    if (input[key] === undefined) continue;
    if (typeof input[key] !== 'string' || input[key].length > max)
      return reply('rejected', requestId, 400);
    if ((key === 'email' || key === 'phone') && /[\r\n]/.test(input[key]))
      return reply('rejected', requestId, 400, {
        fieldErrors: {
          [key]: `Check your ${key === 'email' ? 'email address' : 'phone number'}. Remove line breaks.`,
        },
      });
    fields[key] = input[key].trim();
  }
  if (!fields.name || /[\r\n]/.test(fields.name))
    return reply('rejected', requestId, 400);
  const meeting = input._subject === 'New Mett Global meeting request';
  const fieldErrors = contactErrors(fields.email || '', fields.phone);
  if (meeting && !fields.phone) fieldErrors.phone = 'Enter your phone number.';
  if (Object.keys(fieldErrors).length)
    return reply('rejected', requestId, 400, { fieldErrors });
  if (fields.phone) fields.phone = checkedPhone(fields.phone).number;
  if (meeting) {
    const start = Date.parse(fields.preferred_start || '');
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(fields.preferred_date || '') ||
      !/^([01]\d|2[0-3]):00$/.test(fields.preferred_time || '') ||
      !Number.isFinite(start) ||
      start <= Date.now() ||
      start > Date.now() + 61 * 86400000 ||
      !MEETING_TYPES.some(x => x.value === fields.meeting_type) ||
      !DURATIONS.some(x => x.value === fields.duration) ||
      !TOPICS.some(x => x.value === fields.topic)
    )
      return reply('rejected', requestId, 400);
  } else if (!fields.message) return reply('rejected', requestId, 400);
  // Match the provider's honeypot behavior without forwarding spam.
  if (input._honey) return reply('accepted', requestId);
  const payload = {
    ...fields,
    ...(meeting
      ? {
          office_time:
            new Intl.DateTimeFormat('en-GB', {
              timeZone: 'Asia/Karachi',
              dateStyle: 'full',
              timeStyle: 'short',
            }).format(new Date(fields.preferred_start)) + ' (Asia/Karachi)',
        }
      : {}),
    request_id: requestId,
    _subject: meeting
      ? 'New Mett Global meeting request'
      : 'New Mett Global website enquiry',
    _template: 'table',
    _captcha: 'false',
    _url: SITE_URL + (meeting ? '/appointment' : '/contact'),
  };
  try {
    const response = await forward(FORM_AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: SITE_URL,
        Referer: payload._url,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
      redirect: 'error',
    });
    let data;
    try {
      data = await response.json();
    } catch {
      return reply('unconfirmed', requestId, 502, {
        reason: 'provider-invalid-response',
        providerStatus: response.status,
      });
    }
    if (response.ok && (data?.success === true || data?.success === 'true'))
      return reply('accepted', requestId);
    if (response.ok && (data?.success === false || data?.success === 'false'))
      return reply('rejected', requestId, 422);
    return reply('unconfirmed', requestId, 502, {
      reason: 'provider-unconfirmed',
      providerStatus: response.status,
    });
  } catch (error) {
    const failure = error as {
      name?: string;
      cause?: { code?: string; message?: string };
    };
    const code =
      failure?.cause?.message === 'unexpected redirect'
        ? 'UPSTREAM_REDIRECT'
        : failure?.cause?.code;
    // The provider may have sent the email before its response was lost.
    // Only bounded error categories are returned; never messages, URLs or PII.
    return reply('unconfirmed', requestId, 504, {
      reason:
        failure?.name === 'TimeoutError' || failure?.name === 'AbortError'
          ? 'provider-timeout'
          : 'provider-network',
      ...(code && /^[A-Z0-9_]{1,64}$/.test(code) ? { code } : {}),
    });
  }
}
