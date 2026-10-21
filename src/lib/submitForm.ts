import type { ContactFieldErrors } from './contact-validation';

export type SubmissionOutcome =
  'accepted' | 'rejected' | 'unconfirmed' | 'offline';
export type SubmissionResult = {
  outcome: SubmissionOutcome;
  requestId: string;
  fieldErrors?: ContactFieldErrors;
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
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, request_id: requestId }),
      });
      const result = (await response.json()) as Partial<SubmissionResult>;
      const outcome =
        result.requestId === requestId &&
        (result.outcome === 'rejected' ||
          (response.ok && result.outcome === 'accepted'))
          ? result.outcome
          : 'unconfirmed';
      const fieldErrors: ContactFieldErrors = {};
      if (outcome === 'rejected' && result.fieldErrors) {
        for (const key of ['email', 'phone'] as const) {
          const message = result.fieldErrors[key];
          if (typeof message === 'string' && message.length <= 200)
            fieldErrors[key] = message;
        }
      }
      return {
        outcome,
        requestId,
        ...(Object.keys(fieldErrors).length ? { fieldErrors } : {}),
      };
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
