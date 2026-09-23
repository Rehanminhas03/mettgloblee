import Link from 'next/link';
import { CurrentYear } from './CurrentYear';

const COMPANY = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '#partners', label: 'Partners' },
  { href: '#team', label: 'Core team' },
  { href: '#faq', label: 'FAQ' },
  { href: '#reviews', label: 'Reviews' },
  { href: '/appointment', label: 'Book a meeting' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/sitemap', label: 'Sitemap' },
];

const SOCIAL_BADGE =
  'grid h-[30px] w-[30px] place-items-center rounded-full border border-line bg-white font-black';

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/company/mett-global/',
    label: 'LinkedIn',
    aria: 'MettGlobal on LinkedIn',
    badge: (
      <span className={`${SOCIAL_BADGE} !bg-[#0a66c2] text-white`}>in</span>
    ),
  },
  {
    href: 'https://www.facebook.com/share/1ETMXRB1Ls/?mibextid=wwXIfr',
    label: 'Facebook',
    aria: 'MettGlobal on Facebook',
    badge: (
      <span className={`${SOCIAL_BADGE} !bg-[#1877f2] text-xl text-white`}>
        f
      </span>
    ),
  },
  {
    href: 'https://www.instagram.com/mettglobal.pk',
    label: 'Instagram',
    aria: 'MettGlobal on Instagram',
    badge: (
      <span
        className={`${SOCIAL_BADGE} !bg-[linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)] text-white`}
      >
        ◎
      </span>
    ),
  },
  {
    href: 'https://x.com/mettglobal',
    label: 'X',
    aria: 'MettGlobal on X',
    badge: <span className={`${SOCIAL_BADGE} !bg-black text-white`}>𝕏</span>,
  },
  {
    href: 'https://www.mettglobal.com',
    label: 'Website',
    aria: 'MettGlobal website',
    badge: (
      <span className={SOCIAL_BADGE}>
        <i
          aria-hidden="true"
          className="font-dm text-gold text-xs font-black tracking-[-.04em] not-italic"
        >
          M
        </i>
      </span>
    ),
  },
];

export function HomeFooter() {
  return (
    <footer className="px-pad max-b900:grid-cols-2 max-b900:px-7 max-b900:pb-6 max-b900:pt-[55px] max-b560:grid-cols-1 grid grid-cols-[1.2fr_.5fr_.8fr] gap-[60px] bg-[#f4f0e8] pt-[70px] pb-7">
      <div className="max-b900:col-span-full max-b560:col-auto">
        <Link href="#home" className="flex items-center gap-3">
          <span className="relative block h-[34px] w-[34px]">
            <i className="absolute top-[3px] left-0 h-[9px] w-[9px] rounded-full bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
            <b className="absolute top-px left-4 h-[31px] w-3 rotate-[35deg] rounded-[10px] bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
          </span>
          <span className="flex flex-col">
            <strong className="text-2xl leading-none tracking-[-.04em]">
              Mett Global
            </strong>
            <small className="mt-[5px] text-[8px] tracking-[.06em]">
              The Art of Digital Excellence
            </small>
          </span>
        </Link>
        <p className="text-muted mt-[25px] max-w-[430px] leading-[1.7]">
          Strategy, creative, technology and operations brought together for
          practical business outcomes.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-gold m-0 mb-3 text-[10px] tracking-[.18em] uppercase">
          Company
        </h4>
        {COMPANY.map(link => (
          <Link key={link.href} href={link.href} className="text-sm">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-gold m-0 mb-3 text-[10px] tracking-[.18em] uppercase">
          Connect
        </h4>
        <div className="max-b560:grid-cols-1 grid grid-cols-2 gap-[9px]">
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

      <div className="border-line text-muted max-b560:flex-col max-b560:gap-[10px] col-span-full mt-5 flex justify-between border-t pt-[22px] text-[9px] tracking-[.16em]">
        <span>
          © <CurrentYear /> METTGLOBAL
        </span>
        <span>ISLAMABAD · PAKISTAN · GLOBAL DELIVERY</span>
      </div>
    </footer>
  );
}
