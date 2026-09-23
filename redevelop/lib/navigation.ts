/**
 * Header and footer link sets.
 *
 * The original site varied these per page, so each set is named after where it
 * is used rather than being collapsed into one shared nav.
 */

export type NavLink = { href: string; label: string };
export type NavCta = NavLink & { current?: boolean };

/* ---- Header ---- */

export const MAIN_NAV: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

/** Service detail pages drop "About" from the header. */
export const SERVICE_NAV: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

/** Case-study pages add "Case Studies". */
export const CASE_NAV: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const BOOK_CTA: NavCta = {
  href: '/appointment',
  label: 'Book a meeting',
};

export const PROJECT_CTA: NavCta = {
  href: '/contact',
  label: 'Start a project',
};

/* ---- Footer ---- */

export const CASE_FOOTER: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
];

/** Used by the service detail pages that link back to the full service list. */
export const SERVICE_FOOTER: NavLink[] = [
  { href: '/services', label: 'All services' },
  { href: '/blog', label: 'Blog' },
  { href: '/', label: 'Home' },
];

export const STANDARD_FOOTER: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

/** Footer note used on the pages that carry the delivery line. */
export const GLOBAL_FOOTER_NOTE =
  '© MettGlobal · Islamabad, Pakistan · International delivery';
