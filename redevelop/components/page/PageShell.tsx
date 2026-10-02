import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SkipLink } from './SkipLink';

/**
 * Wrapper for every page built on page.css: skip link, the site header,
 * `<main>` landmark and the site footer.
 *
 * `data-surface="page"` tells the root layout which background to paint behind
 * overscroll, replacing that stylesheet's own `body` rule.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div data-surface="page" className="text-p-ink">
      <SkipLink />
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
