import {
  emailError,
  checkedPhone,
  type ContactFieldErrors,
} from './contact-validation';

/** Native validation also triggers each contact input's accessible inline error. */
export function validateContactForm(form: HTMLFormElement): boolean {
  for (const name of ['email', 'phone'] as const) {
    const input = form.elements.namedItem(name);
    if (!(input instanceof HTMLInputElement) || input.disabled) continue;
    input.setCustomValidity(
      name === 'email'
        ? emailError(input.value)
        : checkedPhone(input.value).error,
    );
  }
  const valid = form.checkValidity();
  if (!valid) form.reportValidity();
  return valid;
}

export function showContactErrors(
  form: HTMLFormElement,
  errors: ContactFieldErrors,
) {
  for (const name of ['email', 'phone'] as const) {
    const input = form.elements.namedItem(name);
    if (!(input instanceof HTMLInputElement) || !errors[name]) continue;
    input.setCustomValidity(errors[name]);
    input.checkValidity();
  }
}
