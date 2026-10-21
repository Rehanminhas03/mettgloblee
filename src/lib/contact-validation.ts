import { parsePhoneNumberFromString } from 'libphonenumber-js/max';

export type ContactFieldErrors = Partial<Record<'email' | 'phone', string>>;

export function emailError(value: string): string {
  const email = value.trim();
  if (!email) return 'Enter your email address.';
  const parts = email.split('@');
  const [local, domain = ''] = parts;
  const labels = domain.split('.');
  if (
    email.length > 254 ||
    parts.length !== 2 ||
    !local ||
    local.length > 64 ||
    !/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local) ||
    local.startsWith('.') ||
    local.endsWith('.') ||
    local.includes('..') ||
    domain.length > 253 ||
    labels.length < 2 ||
    labels.some(
      label => !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label),
    ) ||
    !/^(?:[A-Za-z]{2,63}|xn--[A-Za-z0-9-]{2,59})$/.test(labels.at(-1) || '')
  )
    return 'Check your email address. Use a format such as name@example.com.';
  return '';
}

export function checkedPhone(value: string): { error: string; number: string } {
  const raw = value.trim();
  if (!raw) return { error: '', number: '' };
  const error =
    'Check your phone number. Include the country code, for example +1 713 555 0123 or +92 313 426 2282.';
  if (raw.length > 30 || /[\r\n]/.test(raw) || !/^\+?[0-9()\s.-]+$/.test(raw))
    return { error, number: '' };
  let compact = raw.replace(/[()\s.-]/g, '');
  if (compact.startsWith('00')) compact = '+' + compact.slice(2);
  if (/^92\d{10}$/.test(compact)) compact = '+' + compact;
  // Do not guess the country of an unprefixed overseas number.
  if (!compact.startsWith('+') && !compact.startsWith('0'))
    return { error, number: '' };
  // compact contains only an optional leading + and digits; no text can be extracted.
  const parsed = parsePhoneNumberFromString(compact, 'PK');
  return parsed?.isValid()
    ? { error: '', number: parsed.number }
    : { error, number: '' };
}

export function contactErrors(email: string, phone = ''): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const emailMessage = emailError(email);
  const phoneMessage = checkedPhone(phone).error;
  if (emailMessage) errors.email = emailMessage;
  if (phoneMessage) errors.phone = phoneMessage;
  return errors;
}
