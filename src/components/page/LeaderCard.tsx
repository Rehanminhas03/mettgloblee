import { WaIcon } from '@/components/home/WaIcon';
import { CARD_TITLE, ToneCard } from '@/components/ui/ToneCard';

export type Leader = {
  role: string;
  name: string;
  copy: string;
  email: string;
  /** International format without `+`, e.g. `18328580716`. */
  whatsapp?: string;
  phone?: { href: string; label: string };
};

const CONTACT =
  'group/contact text-ink hover:text-gold flex items-center gap-3 text-sm font-semibold transition-colors duration-200';
const CONTACT_ICON =
  'border-line group-hover/contact:border-gold grid h-8 w-8 flex-none place-items-center rounded-full border bg-white transition-colors duration-200';

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6.6 3.5h2.6l1.5 4.2-2 1.4a12 12 0 0 0 6.2 6.2l1.4-2 4.2 1.5v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

/**
 * Leadership profile card: initials monogram, name and title, a short bio and
 * contacts. No photographs or monograms — the shared cream `ToneCard`.
 */
export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <ToneCard tone="cream">
      <p className="text-gold relative z-[1] mt-0 mb-0 text-[11px] font-black tracking-[.14em] uppercase">
        {leader.role}
      </p>
      <h3 className={`${CARD_TITLE} mt-2`}>{leader.name}</h3>

      <p className="text-muted relative z-[1] m-0 flex-1 pt-4 pb-6 text-[15px] leading-[1.65]">
        {leader.copy}
      </p>

      <ul className="border-line relative z-[1] m-0 grid list-none content-start gap-3 border-t p-0 pt-5">
        <li>
          <a href={`mailto:${leader.email}`} className={CONTACT}>
            <span className={CONTACT_ICON}>
              <MailIcon />
            </span>
            {leader.email}
          </a>
        </li>
        {leader.phone ? (
          <li>
            <a href={leader.phone.href} className={CONTACT}>
              <span className={CONTACT_ICON}>
                <PhoneIcon />
              </span>
              {leader.phone.label}
            </a>
          </li>
        ) : null}
        {leader.whatsapp ? (
          <li>
            <a
              href={`https://wa.me/${leader.whatsapp}`}
              target="_blank"
              rel="noopener"
              aria-label={`WhatsApp ${leader.name}`}
              className={CONTACT}
            >
              <span className={CONTACT_ICON}>
                <WaIcon className="!h-[18px] !w-[18px]" />
              </span>
              WhatsApp
            </a>
          </li>
        ) : null}
      </ul>
    </ToneCard>
  );
}
