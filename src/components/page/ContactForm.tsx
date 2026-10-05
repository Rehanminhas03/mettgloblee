import { SERVICES } from '@/lib/services';
import { AjaxForm } from './AjaxForm';

const SERVICE_OPTIONS = [
  'Not sure yet',
  ...SERVICES.map(service => service.formLabel),
];

const LABEL =
  'grid gap-[7px] text-[10px] font-black uppercase tracking-[.11em]';
const FIELD =
  'w-full rounded-[13px] border border-p-line bg-white p-[14px] font-[inherit] text-[length:inherit] text-p-ink';

/**
 * `.contact-form` from page.css. Submits to the same FormSubmit inbox in the
 * background and shows a thank-you message in place (honeypot included).
 */
export function ContactForm() {
  return (
    <AjaxForm className="max-b620:grid-cols-1 mt-[35px] grid grid-cols-2 gap-3">
      <input
        type="hidden"
        name="_subject"
        value="New MettGlobal website enquiry"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <label className={LABEL}>
        Name
        <input
          name="name"
          maxLength={100}
          autoComplete="name"
          required
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        Company
        <input
          name="company"
          maxLength={120}
          autoComplete="organization"
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        Email
        <input
          type="email"
          name="email"
          maxLength={254}
          autoComplete="email"
          required
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        Service
        <select name="service" className={FIELD}>
          {SERVICE_OPTIONS.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className={`${LABEL} max-b620:col-span-1 col-span-full`}>
        What are you trying to improve?
        <textarea
          name="message"
          maxLength={3000}
          required
          minLength={20}
          className={`${FIELD} min-h-[140px] resize-y`}
        />
      </label>
      <button
        type="submit"
        className="bg-p-ink max-b620:col-span-1 col-span-full cursor-pointer rounded-full border-0 p-[15px] font-black text-white"
      >
        Send project enquiry
      </button>
    </AjaxForm>
  );
}
