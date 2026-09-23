import Link from 'next/link';
import { Reveal } from './Reveal';
import { WaIcon } from './WaIcon';
import { FORM_ENDPOINT, FORM_SUCCESS_URL } from '@/lib/site';

const SERVICES = [
  'eCommerce & Marketplaces',
  'Paid Ads, Social & Marketing',
  'AI Automation & Content',
  'Website Development',
  'Audits',
  'Logistics & Supply Chain',
  'Sales Support',
  'Other / Multi-service',
];

const ROW =
  'relative my-[6px] grid grid-cols-[.52fr_minmax(0,1fr)_auto] items-center gap-5 rounded-[18px] border-b border-[rgba(224,188,104,.22)] px-[22px] py-[30px] transition-[background,padding,border-color] duration-300 hover:bg-[rgba(224,188,104,.06)] hover:pl-[30px] max-b560:grid-cols-[1fr_auto] max-b560:gap-[10px] max-b560:px-0 max-b560:py-[21px]';
const ROW_LABEL =
  'text-[10px] font-bold uppercase tracking-[.14em] text-[#d5c8aa]';
const ROW_VALUE =
  'text-[clamp(18px,1.6vw,26px)] font-bold leading-[1.15] tracking-[-.025em] text-white transition-colors duration-300 [overflow-wrap:anywhere] group-hover:text-gold2 max-b560:col-start-1 max-b560:text-[clamp(17px,4.9vw,22px)] max-b560:leading-[1.2]';
const DOT =
  "relative block h-3 w-3 rounded-full border border-[rgba(224,188,104,.7)] transition-[transform,background,box-shadow] duration-[.35s] after:absolute after:inset-0 after:m-auto after:h-1 after:w-1 after:rounded-full after:bg-gold2 after:content-[''] group-hover:scale-[1.35] group-hover:bg-[rgba(224,188,104,.12)] group-hover:shadow-[0_0_0_8px_rgba(224,188,104,.06)] max-b560:col-start-2 max-b560:row-[1/3] max-b560:self-center";

const LABEL =
  'grid gap-[7px] text-[10px] uppercase tracking-[.12em] text-[#d5c8aa]';
const FIELD =
  'w-full rounded-[13px] border border-[rgba(224,188,104,.22)] bg-ink p-[14px] font-[inherit] text-white outline-none focus:border-gold2 focus:shadow-[0_0_0_3px_rgba(224,188,104,.08)]';

/** `.contact` — direct contact rows, the enquiry form and the U.S. line. */
export function Contact() {
  return (
    <section
      id="contact"
      className="px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] border-t border-[rgba(224,188,104,.18)] bg-[radial-gradient(circle_at_86%_10%,rgba(184,137,45,.17),transparent_28%),#090908] py-[110px] text-white"
    >
      <div className="max-b900:grid-cols-1 max-b900:gap-8 grid grid-cols-[1.1fr_.6fr] items-end gap-[70px]">
        <Reveal>
          <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
            11 / START A CONVERSATION
          </div>
          <h2 className="max-b560:text-[49px] max-w-[1120px] font-sans text-[clamp(38px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-.04em]">
            Bring us the problem.
            <br />
            <span className="text-gold2 font-semibold tracking-[-.035em]">
              We map the next move.
            </span>
          </h2>
        </Reveal>
        <p className="max-w-[650px] text-[18px] leading-[1.75] text-[#aaa69d]">
          Tell us what is slowing growth, creating operational friction or
          taking too much manual effort. We&rsquo;ll route the conversation to
          the right people.
        </p>
      </div>

      {/* .contact-actions */}
      <div className="mt-[70px] border-t border-[rgba(224,188,104,.22)]">
        <a
          href="https://wa.me/923046551553?text=Hi%20MettGlobal%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener"
          className={`group ${ROW}`}
        >
          <span
            className={`${ROW_LABEL} max-b560:gap-2 inline-flex items-center gap-[10px]`}
          >
            <WaIcon />
            WhatsApp MettGlobal
          </span>
          <b className={ROW_VALUE}>+92 304 6551553</b>
          <i aria-hidden="true" className={DOT} />
        </a>

        <a href="tel:+923046551553" className={`group ${ROW}`}>
          <span className={ROW_LABEL}>Call</span>
          <b className={ROW_VALUE}>+92 304 6551553</b>
          <i aria-hidden="true" className={DOT} />
        </a>

        <Link href="/appointment" className={`group ${ROW}`}>
          <span className={ROW_LABEL}>Book a meeting</span>
          <b className={ROW_VALUE}>Choose a date &amp; time</b>
          <i aria-hidden="true" className={DOT} />
        </Link>

        <a href="mailto:contact@mettglobal.com" className={`group ${ROW}`}>
          <span className={ROW_LABEL}>Email</span>
          <b className={ROW_VALUE}>contact@mettglobal.com</b>
          <i aria-hidden="true" className={DOT} />
        </a>
      </div>

      {/* .contact-form-wrap */}
      <div className="max-b760:grid-cols-1 mt-[70px] grid grid-cols-[.65fr_1.35fr] gap-[60px] rounded-[28px] border border-[rgba(224,188,104,.25)] bg-white/[.035] p-[42px]">
        <div>
          <span className="text-gold2 text-[10px] font-black tracking-[.16em]">
            PROJECT ENQUIRY
          </span>
          <h3 className="my-[10px] text-[36px]">Tell us what you need.</h3>
          <p className="leading-[1.7] text-[#aaa69d]">
            Send the brief directly to MettGlobal. The form is routed to{' '}
            <strong>contact@mettglobal.com</strong>.
          </p>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="max-b760:grid-cols-1 grid grid-cols-2 gap-[14px]"
        >
          <input type="hidden" name="_next" value={FORM_SUCCESS_URL} />
          <input
            type="hidden"
            name="_subject"
            value="New MettGlobal website enquiry"
          />
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
            <input name="name" required autoComplete="name" className={FIELD} />
          </label>
          <label className={LABEL}>
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={FIELD}
            />
          </label>
          <label className={LABEL}>
            Company
            <input
              name="company"
              autoComplete="organization"
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
          <label className={`${LABEL} max-b760:col-span-1 col-span-full`}>
            Project brief
            <textarea
              name="message"
              required
              placeholder="Tell us the problem, current setup and desired outcome."
              className={`${FIELD} min-h-[140px] resize-y`}
            />
          </label>
          <button
            type="submit"
            className="bg-gold max-b760:col-span-1 col-span-full cursor-pointer rounded-full border-0 px-5 py-[15px] font-black text-white"
          >
            Send enquiry
          </button>
        </form>
      </div>

      {/* .us-contact */}
      <div className="max-b560:flex-col max-b560:items-start mt-[35px] flex items-center gap-[22px] text-[13px]">
        <span className="text-[10px] tracking-[.16em]">
          DIRECTOR, U.S. BUSINESS DEVELOPMENT · U.S. REPRESENTATIVE
        </span>
        <strong>Usman Rafiq</strong>
        <a
          href="https://wa.me/18328580716?text=Hi%20Usman%2C%20I%27d%20like%20to%20discuss%20MettGlobal%20services."
          target="_blank"
          rel="noopener"
          className="underline"
        >
          WhatsApp
        </a>
        <a href="tel:+18328580716" className="underline">
          Call +1 (832) 858-0716
        </a>
        <a href="mailto:usman@mettglobal.com" className="underline">
          usman@mettglobal.com
        </a>
      </div>
    </section>
  );
}
