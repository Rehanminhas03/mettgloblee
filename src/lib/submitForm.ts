import { FORM_AJAX_ENDPOINT } from './site';

/**
 * Sends a form to FormSubmit in the background, so the visitor stays on the
 * site instead of being taken to FormSubmit's confirmation or captcha page.
 * Resolves `true` only when FormSubmit confirms the message was accepted.
 */
export async function submitForm(form: HTMLFormElement): Promise<boolean> {
  const data: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string') data[key] = value;
  });

  try {
    const response = await fetch(FORM_AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return false;
    const result = (await response.json()) as { success?: string | boolean };
    return result.success === true || result.success === 'true';
  } catch {
    return false;
  }
}
