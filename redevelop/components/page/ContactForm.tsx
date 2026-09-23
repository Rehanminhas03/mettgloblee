import { FORM_ENDPOINT, FORM_SUCCESS_URL } from '@/lib/site';

const SERVICES = [
  'Not sure yet',
  'eCommerce',
  'Web Development',
  'AI Automation',
  'Digital Marketing',
  'Supply Chain / Operations',
  'Lead Generation / Sales Systems',
  'AI Video / Content',
  'Audit / Diagnostic',
];

const LABEL =
  'grid gap-[7px] text-[10px] font-black uppercase tracking-[.11em]';
const FIELD =
  'w-full rounded-[13px] border border-p-line bg-white p-[14px] font-[inherit] text-[length:inherit] text-p-ink';

/**
 * `.contact-form` from page.css, posting to the same FormSubmit endpoint as
 * the original site (honeypot, captcha and success redirect included).
 */
export function ContactForm() {
  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      className="max-b620:grid-cols-1 mt-[35px] grid grid-cols-2 gap-3"
    >
      <input type="hidden" name="_next" value={FORM_SUCCESS_URL} />
      <input
        type="hidden"
        name="_subject"
        value="New MettGlobal website enquiry"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <label className={LABEL}>
        Name
        <input name="name" autoComplete="name" required className={FIELD} />
      </label>
      <label className={LABEL}>
        Company
        <input name="company" autoComplete="organization" className={FIELD} />
      </label>
      <label className={LABEL}>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        Service
        <select name="service" className={FIELD}>
          {SERVICES.map(service => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className={`${LABEL} max-b620:col-span-1 col-span-full`}>
        What are you trying to improve?
        <textarea
          name="message"
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
    </form>
  );
}
