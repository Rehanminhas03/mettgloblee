import * as nodemailer from 'nodemailer';
import { emailError } from './contact-validation';

export type DeliveryResult = {
  outcome: 'accepted' | 'rejected' | 'unconfirmed';
  reason?: string;
};
export type EnquirySender = (
  payload: Record<string, string>,
) => Promise<DeliveryResult>;

const RECIPIENT = 'contact@mettglobal.com';
const LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone / WhatsApp',
  company: 'Company',
  service: 'Service',
  message: 'Project brief',
  meeting_context: 'Preparation notes',
  preferred_date: 'Preferred date',
  preferred_time: 'Preferred time',
  preferred_start: 'Start (UTC)',
  visitor_timezone: 'Visitor time zone',
  office_time: 'Office time',
  meeting_type: 'Meeting type',
  duration: 'Duration',
  topic: 'Topic',
  request_id: 'Submission reference',
};

/** Secrets stay on the server. No visitor-supplied sender or recipient is used. */
export async function sendSmtpEnquiry(
  payload: Record<string, string>,
  env: NodeJS.ProcessEnv = process.env,
  createTransport = nodemailer.createTransport,
): Promise<DeliveryResult> {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASSWORD;
  const port = Number(env.SMTP_PORT || '465');
  if (
    !host ||
    !/^[a-z0-9.-]+$/i.test(host) ||
    !user ||
    emailError(user) ||
    !pass ||
    ![465, 587].includes(port)
  )
    return { outcome: 'rejected', reason: 'mail-configuration' };

  const transport = createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 12000,
    tls: { minVersion: 'TLSv1.2', rejectUnauthorized: true },
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const sent = transport
      .sendMail({
        from: { name: 'Mett Global website', address: user },
        to: RECIPIENT,
        replyTo: payload.email,
        subject: payload._subject,
        messageId: `<${payload.request_id}@mettglobal.com>`,
        headers: { 'X-Mett-Submission-Reference': payload.request_id },
        text: Object.entries(LABELS)
          .filter(([key]) => payload[key])
          .map(([key, label]) => `${label}: ${payload[key]}`)
          .join('\n\n'),
      })
      .then(info => ({
        outcome: info.accepted?.some(
          address => String(address).toLowerCase() === RECIPIENT,
        )
          ? ('accepted' as const)
          : ('unconfirmed' as const),
      }));
    const deadline = new Promise<DeliveryResult>(resolve => {
      timer = setTimeout(() => {
        resolve({ outcome: 'unconfirmed', reason: 'mail-timeout' });
        transport.close();
      }, 18000);
    });
    return await Promise.race([sent, deadline]);
  } catch (error) {
    const failure = error as {
      code?: string;
      command?: string;
      responseCode?: number;
    };
    // A failed login or explicit permanent refusal cannot be mistaken for delivery.
    // A dropped connection after DATA remains uncertain; never retry automatically.
    const refused =
      failure.code === 'EAUTH' ||
      (typeof failure.responseCode === 'number' &&
        failure.responseCode >= 500 &&
        failure.responseCode < 600);
    return {
      outcome: refused ? 'rejected' : 'unconfirmed',
      reason: refused ? 'mail-refused' : 'mail-network',
    };
  } finally {
    if (timer) clearTimeout(timer);
    transport.close();
  }
}
