/**
 * Site-wide header and footer link sets.
 *
 * Every page renders the same `SiteHeader` and `SiteFooter` from these lists.
 * Both carry real pages only — no homepage `#section` jumps — with legal links
 * kept to the footer's bottom bar.
 */

import { SERVICES } from './services';

export type NavLink = { href: string; label: string };

/* ---- Header ---- */

export const HEADER_NAV: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const HEADER_CTA: NavLink = {
  href: '/appointment',
  label: 'Book a meeting',
};

export const WHATSAPP_URL =
  'https://wa.me/923046551553?text=Hi%20MettGlobal%2C%20I%27d%20like%20to%20discuss%20a%20project.';

/* ---- Footer ---- */

export const FOOTER_NAV: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/appointment', label: 'Book a meeting' },
];

/** Legal and utility links, shown small in the footer's bottom bar. */
export const LEGAL_NAV: NavLink[] = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/sitemap', label: 'Sitemap' },
];

const SERVICE_PAGES: string[] = SERVICES.map(service => service.href);

/**
 * Whether a header link should read as the current section. Detail pages
 * light up their parent: services, case studies, and blog guides/briefs.
 */
export function isCurrent(href: string, pathname: string) {
  if (href.includes('#')) return false;
  if (pathname === href) return true;
  switch (href) {
    case '/services':
      return SERVICE_PAGES.includes(pathname);
    case '/portfolio':
      return (
        pathname === '/case-studies' || pathname.startsWith('/case-study-')
      );
    case '/blog':
      return (
        pathname.startsWith('/insight-') || pathname.startsWith('/update-')
      );
    default:
      return false;
  }
}
