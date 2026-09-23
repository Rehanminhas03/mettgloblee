import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { SkipLink } from './SkipLink';
import type { NavCta, NavLink } from '@/lib/navigation';

/**
 * Wrapper for every page built on page.css: skip link, sticky header, `<main>`
 * landmark and footer.
 *
 * `data-surface="page"` tells the root layout which background to paint behind
 * overscroll, replacing that stylesheet's own `body` rule.
 */
export function PageShell({
  children,
  navLinks,
  navCta,
  footerNote,
  footerLinks,
}: {
  children: React.ReactNode;
  navLinks?: NavLink[];
  navCta?: NavCta;
  footerNote?: string;
  footerLinks: NavLink[];
}) {
  return (
    <div data-surface="page" className="text-p-ink">
      <SkipLink />
      <PageHeader links={navLinks} cta={navCta} />
      <main id="main-content">{children}</main>
      <PageFooter note={footerNote} links={footerLinks} />
    </div>
  );
}
