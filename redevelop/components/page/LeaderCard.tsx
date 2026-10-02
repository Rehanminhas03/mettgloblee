import Image from 'next/image';
import { WaIcon } from '@/components/home/WaIcon';

export type Leader = {
  role: string;
  name: string;
  copy: string;
  email: string;
  /** Headshot in `/public`, e.g. `/team/hammad.jpg`. Initials show until set. */
  photo?: string;
  /** International format without `+`, e.g. `18328580716`. */
  whatsapp?: string;
  phone?: { href: string; label: string };
};

const initials = (name: string) =>
  name
    .split(' ')
    .filter(part => part.length > 2)
    .map(part => part[0])
    .slice(0, 2)
    .join('');

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
 * Leadership profile card: portrait, name and title, short bio, contacts.
 *
 * Each card spans four rows of its parent grid and adopts them via subgrid,
 * so portraits, names, bios and contact lists line up across cards even when
 * a name wraps or one card has more contact options.
 */
export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="border-line row-span-4 grid grid-rows-subgrid gap-0 overflow-hidden rounded-[24px] border bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(184,137,45,.45)] hover:shadow-[0_24px_60px_rgba(38,29,13,.10)]">
      {/* Portrait */}
      <div className="relative aspect-[5/4] max-h-[420px] w-full overflow-hidden bg-[linear-gradient(160deg,#f4ecdc,#e6d9bf)]">
        {leader.photo ? (
          <Image
            src={leader.photo}
            alt={`${leader.name}, ${leader.role}`}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="absolute aspect-square h-[64%] rounded-full border border-[rgba(184,137,45,.25)]" />
            <span className="text-gold font-serif text-[clamp(64px,7vw,92px)] leading-none tracking-[-.02em]">
              {initials(leader.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name and title */}
      <div className="px-7 pt-7">
        <h3 className="m-0 text-[26px] leading-[1.1] tracking-[-.03em]">
          {leader.name}
        </h3>
        <p className="text-gold mt-2 mb-0 text-[11px] font-black tracking-[.14em] uppercase">
          {leader.role}
        </p>
      </div>

      {/* Bio */}
      <p className="text-muted m-0 px-7 pt-4 pb-6 text-[15px] leading-[1.65]">
        {leader.copy}
      </p>

      {/* Contacts */}
      <ul className="border-line mx-7 mb-7 grid list-none content-start gap-3 border-t p-0 pt-5">
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
    </article>
  );
}
