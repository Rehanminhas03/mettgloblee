import { emailError, checkedPhone } from './contact-validation';

/** Native validation also triggers each contact input's accessible inline error. */
export function validateContactForm(form: HTMLFormElement): boolean {
  for (const name of ['email', 'phone'] as const) {
    const input = form.elements.namedItem(name);
    if (!(input instanceof HTMLInputElement) || input.disabled) continue;
    input.setCustomValidity(
      name === 'email'
        ? emailError(input.value)
        : input.required && !input.value.trim()
          ? 'Enter your phone number.'
          : checkedPhone(input.value).error,
    );
  }
  const valid = form.checkValidity();
  if (!valid) form.reportValidity();
  return valid;
}
