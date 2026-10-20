import Link from 'next/link';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import { MotionSettingsButton } from '@/components/MotionSettingsButton';
import { CurrentYear } from '@/components/home/CurrentYear';
import { FOOTER_NAV, LEGAL_NAV } from '@/lib/navigation';
import { SERVICES } from '@/lib/services';
import {
  ADDRESS_LINE,
  MAPS_URL,
  BUSINESS_PROFILE_URL,
  SOCIAL_URLS,
} from '@/lib/site';
import { SiteLogo } from './SiteLogo';

const SOCIAL_BADGE =
  'grid h-[28px] w-[28px] flex-none place-items-center rounded-full border border-line bg-white';

const SOCIALS = [
  {
    href: BUSINESS_PROFILE_URL,
    label: 'Google Business Profile',
    aria: 'Mett Global on Google',
    badge: (
      <span className={SOCIAL_BADGE}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[15px] w-[15px]"
        >
          <path
            fill="#4285f4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.75 3.28-8.09Z"
          />
          <path
            fill="#34a853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.06-3.72 1.06-2.87 0-5.3-1.94-6.17-4.54H2.18v2.83A11 11 0 0 0 12 23Z"
          />
          <path
            fill="#fbbc05"
            d="M5.83 14.1a6.6 6.6 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.86l3.65-2.83Z"
          />
          <path
            fill="#ea4335"
            d="M12 5.36c1.62 0 3.06.56 4.21 1.64l3.16-3.16A10.55 10.55 0 0 0 12 1a11 11 0 0 0-9.82 6.07L5.83 9.9C6.7 7.3 9.13 5.36 12 5.36Z"
          />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.linkedin,
    label: 'LinkedIn',
    aria: 'Mett Global on LinkedIn',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-[#0a66c2] text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[13px] w-[13px]"
          fill="currentColor"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.75H3V9.75Zm6.5 0h3.83v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v6.08h-4v-5.39c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85v5.48h-4V9.75Z" />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.facebook,
    label: 'Facebook',
    aria: 'Mett Global on Facebook',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-[#1877f2] text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[14px] w-[14px]"
          fill="currentColor"
        >
          <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.92.26-1.55 1.58-1.55h1.68V3.9c-.29-.04-1.29-.13-2.45-.13-2.43 0-4.09 1.48-4.09 4.2v2.33H7.5v3.2h2.72v8h3.28Z" />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.instagram,
    label: 'Instagram',
    aria: 'Mett Global on Instagram',
    badge: (
      <span
        className={`${SOCIAL_BADGE} border-0 !bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] text-white`}
      >
        {/* Instagram glyph: rounded camera body, lens and flash dot */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[15px] w-[15px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle
            cx="17.4"
            cy="6.6"
            r="1.1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.tiktok,
    label: 'TikTok',
    aria: 'Mett Global on TikTok',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-black text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[14px] w-[14px]"
          fill="currentColor"
        >
          <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.77.12V9.7a5.7 5.7 0 1 0 4.93 5.65V9.1a7.4 7.4 0 0 0 4.3 1.38V7.4a4.3 4.3 0 0 1-3.2-1.6Z" />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.youtube,
    label: 'YouTube',
    aria: 'Mett Global on YouTube',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-[#ff0000] text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[15px] w-[15px]"
          fill="currentColor"
        >
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.pinterest,
    label: 'Pinterest',
    aria: 'Mett Global on Pinterest',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-[#e60023] text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[15px] w-[15px]"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.19-.78 1.25-5.3 1.25-5.3s-.32-.64-.32-1.59c0-1.49.86-2.6 1.94-2.6.91 0 1.35.69 1.35 1.51 0 .92-.59 2.3-.89 3.58-.25 1.07.54 1.94 1.59 1.94 1.91 0 3.38-2.01 3.38-4.92 0-2.57-1.85-4.37-4.49-4.37-3.06 0-4.86 2.3-4.86 4.67 0 .93.36 1.92.8 2.46.09.11.1.2.07.31-.08.34-.26 1.07-.3 1.22-.05.2-.16.24-.37.15-1.38-.64-2.24-2.66-2.24-4.28 0-3.48 2.53-6.68 7.29-6.68 3.83 0 6.8 2.73 6.8 6.37 0 3.8-2.4 6.86-5.72 6.86-1.12 0-2.17-.58-2.53-1.27l-.69 2.57c-.25.96-.92 2.16-1.38 2.9A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      </span>
    ),
  },
  {
    href: SOCIAL_URLS.x,
    label: 'X',
    aria: 'Mett Global on X',
    badge: (
      <span className={`${SOCIAL_BADGE} border-0 !bg-black text-white`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[12px] w-[12px]"
          fill="currentColor"
        >
          <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />
        </svg>
      </span>
    ),
  },
];

/** `.footer`, the homepage footer, used on every page. */
export function SiteFooter() {
  return (
    <footer className="text-ink px-pad max-b900:grid-cols-2 max-b900:gap-x-8 max-b900:gap-y-10 max-b900:px-7 max-b900:pt-14 max-b900:pb-6 max-b560:grid-cols-1 grid grid-cols-[1.5fr_1fr_.8fr_.8fr] gap-x-[48px] gap-y-12 bg-[#f4f0e8] pt-16 pb-7">
      <div className="max-b900:col-span-full max-b560:col-auto">
        <SiteLogo />
        <p className="text-muted mt-5 mb-0 max-w-[380px] text-sm leading-[1.7]">
          Strategy, creative, technology and operations brought together for
          practical business outcomes.
        </p>
        <address className="text-muted mt-4 max-w-[380px] text-sm leading-[1.7] not-italic">
          {ADDRESS_LINE}
          <br />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener"
            className="text-gold font-semibold hover:underline"
          >
            Get directions
          </a>
        </address>
        <p className="mt-4 mb-0 text-sm leading-[1.9] font-semibold">
          <a
            href="mailto:contact@mettglobal.com"
            className="hover:text-gold block transition-colors"
          >
            contact@mettglobal.com
          </a>
          <a
            href="tel:+923046551553"
            className="hover:text-gold block transition-colors"
          >
            +92 304 6551553
          </a>
        </p>
      </div>

      <nav aria-label="Footer services">
        <h2 className="text-gold m-0 mb-5 text-[10px] tracking-[.18em] uppercase">
          Services
        </h2>
        <div className="grid gap-3">
          {SERVICES.map(service => (
            <Link
              key={service.href}
              href={service.href}
              className="hover:text-gold text-sm transition-colors"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </nav>

      <nav aria-label="Footer">
        <h2 className="text-gold m-0 mb-5 text-[10px] tracking-[.18em] uppercase">
          Company
        </h2>
        <div className="grid gap-3">
          {FOOTER_NAV.filter(link => link.href !== '/services').map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div>
        <h2 className="text-gold m-0 mb-5 text-[10px] tracking-[.18em] uppercase">
          Connect
        </h2>
        <div className="grid gap-3">
          {SOCIALS.map(social => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener"
              aria-label={social.aria}
              className="flex items-center gap-[10px] text-[13px]"
            >
              {social.badge}
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-line text-muted max-b560:flex-col max-b560:gap-2 col-span-full flex items-center justify-between gap-6 border-t pt-6 text-[9px] tracking-[.16em]">
        <span>
          © <CurrentYear /> METT GLOBAL
        </span>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_NAV.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <CookieSettingsButton className="hover:text-ink cursor-pointer border-0 bg-transparent p-0 tracking-[inherit] text-inherit uppercase transition-colors" />
          <MotionSettingsButton className="hover:text-ink cursor-pointer border-0 bg-transparent p-0 tracking-[inherit] text-inherit uppercase transition-colors" />
        </nav>
        <span>ISLAMABAD · PAKISTAN · GLOBAL DELIVERY</span>
      </div>
    </footer>
  );
}
