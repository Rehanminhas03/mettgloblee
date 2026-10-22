import { FORM_AJAX_ENDPOINT } from './site';

export type SubmissionOutcome =
  'accepted' | 'rejected' | 'unconfirmed' | 'offline';
export type SubmissionResult = {
  outcome: SubmissionOutcome;
  requestId: string;
};

/** A timeout means unknown receipt, never proof that a message was not sent. */
export async function submitForm(
  form: HTMLFormElement,
  requestId: string,
): Promise<SubmissionResult> {
  if (navigator.onLine === false) return { outcome: 'offline', requestId };
  const data: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string') data[key] = value;
  });
  // Restore the original browser-to-FormSubmit delivery path. No SMTP account
  // or hosting relay is involved. Keep the reference in the delivered email.
  data.request_id = requestId;
  if (
    data._subject === 'New Mett Global meeting request' &&
    data.preferred_start
  ) {
    const start = new Date(data.preferred_start);
    if (Number.isFinite(start.getTime()))
      data.office_time =
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Karachi',
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(start) + ' (Asia/Karachi)';
  }

  const controller = new AbortController();
  let timeout: number;
  const deadline = new Promise<SubmissionResult>(resolve => {
    timeout = window.setTimeout(() => {
      resolve({ outcome: 'unconfirmed', requestId });
      controller.abort();
    }, 25000);
  });
  const send = async (): Promise<SubmissionResult> => {
    try {
      const response = await fetch(FORM_AJAX_ENDPOINT, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { success?: string | boolean };
      const outcome =
        response.ok && (result.success === true || result.success === 'true')
          ? 'accepted'
          : response.ok &&
              (result.success === false || result.success === 'false')
            ? 'rejected'
            : 'unconfirmed';
      return { outcome, requestId };
    } catch {
      return { outcome: 'unconfirmed', requestId };
    }
  };
  try {
    // Settle the UI even if a browser/network layer fails to honor abort.
    return await Promise.race([send(), deadline]);
  } finally {
    window.clearTimeout(timeout!);
  }
}
