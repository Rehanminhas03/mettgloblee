import Link from 'next/link';
import { SkipLink } from '@/components/page/SkipLink';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { ArticleReadingProgress } from './ArticleReadingProgress';

/* ------------------------------------------------------------------ *
 * Shell for the insight guides and policy updates (article.css).
 * ------------------------------------------------------------------ */

export function ArticleShell({
  back,
  title,
  dek,
  meta,
  graphic,
  verifiedBadge = 'Verified 2026 Framework',
  endHeading,
  endHref,
  endLabel,
  children,
}: {
  back: string;
  title: string;
  dek: React.ReactNode;
  meta: string;
  graphic: React.ReactNode;
  verifiedBadge?: string;
  endHeading: string;
  endHref: string;
  endLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div data-surface="article" className="text-p-ink relative">
      <ArticleReadingProgress />
      <SkipLink />
      <SiteHeader />

      <main
        id="main-content"
        className="max-b650:px-[22px] max-b650:py-[65px] mx-auto max-w-[1040px] px-[30px] py-[90px]"
      >
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-p-gold text-[10px] font-extrabold tracking-[.18em] transition-transform duration-200 hover:-translate-x-1"
        >
          <span>←</span>
          <span>{back}</span>
        </Link>

        <h1 className="mt-[25px] mb-7 text-[clamp(38px,4.6vw,64px)] leading-[1.04] tracking-[-.045em] font-extrabold text-[#11110f]">
          {title}
        </h1>

        <p className="text-a-muted max-b650:text-[17px] my-[1em] max-w-[780px] text-xl leading-[1.7]">
          {dek}
        </p>

        {/* Timeless Trust & Authority Metadata Bar (Dates Removed) */}
        <div className="border-a-line mt-[34px] mb-[50px] border-t border-b py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-[#11110f]">
                By{' '}
                <Link href="/about" className="font-bold underline underline-offset-4 text-p-gold hover:text-black">
                  Mett Global Editorial & Engineering Board
                </Link>
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-[#6d685f] font-medium">
                Field Guide & Operating Framework
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-[#6d685f] font-medium">
                Peer-Reviewed Practitioner Series
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                ✓ {verifiedBadge}
              </span>
              <span className="rounded-full bg-[#f3efe6] border border-a-line px-2.5 py-0.5 text-[10px] font-bold text-[#5c574e] tracking-wider uppercase">
                {meta.split('·').pop()?.trim() || '5 MIN READ'}
              </span>
            </div>
          </div>
        </div>

        {graphic}

        <article className="mx-auto max-w-[760px] [overflow-wrap:anywhere]">
          {children}
        </article>

        {/* Connected Service Practice Areas */}
        <section
          aria-labelledby="related-services-heading"
          className="mx-auto mt-16 max-w-[760px] rounded-3xl border border-p-line bg-[#fbf9f4] p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black tracking-[.18em] text-p-gold uppercase">
                Mett Global Practice Areas
              </span>
              <h2
                id="related-services-heading"
                className="mt-1 text-xl font-bold tracking-tight text-[#11110f]"
              >
                Connected Capabilities for U.S. & Enterprise Brands
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-p-gold hover:underline"
            >
              All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href="/ecommerce-supply-chain"
              className="group rounded-2xl border border-p-line bg-white p-5 transition-all hover:border-p-gold hover:shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-wider text-p-gold uppercase">
                Operations & Claims
              </span>
              <h3 className="mt-1 text-base font-bold text-[#11110f] group-hover:text-p-gold transition-colors">
                Amazon FBA & Supply Chain
              </h3>
              <p className="mt-1.5 mb-0 text-xs leading-relaxed text-p-muted">
                Forensic FBA & courier claims recovery, 3PL audits, and remote warehouse operations.
              </p>
            </Link>

            <Link
              href="/digital-marketing-growth"
              className="group rounded-2xl border border-p-line bg-white p-5 transition-all hover:border-p-gold hover:shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-wider text-p-gold uppercase">
                Acquisition & SEO
              </span>
              <h3 className="mt-1 text-base font-bold text-[#11110f] group-hover:text-p-gold transition-colors">
                Digital Marketing & Growth
              </h3>
              <p className="mt-1.5 mb-0 text-xs leading-relaxed text-p-muted">
                Meta/Google ads, technical & local SEO funnels, and automated CRM lead routing.
              </p>
            </Link>

            <Link
              href="/ai-automation-content"
              className="group rounded-2xl border border-p-line bg-white p-5 transition-all hover:border-p-gold hover:shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-wider text-p-gold uppercase">
                Efficiency & Workflows
              </span>
              <h3 className="mt-1 text-base font-bold text-[#11110f] group-hover:text-p-gold transition-colors">
                AI Automation & Content
              </h3>
              <p className="mt-1.5 mb-0 text-xs leading-relaxed text-p-muted">
                Custom workflow automation, intelligent chatbots, and document/invoice data extraction.
              </p>
            </Link>

            <Link
              href="/web-software-development"
              className="group rounded-2xl border border-p-line bg-white p-5 transition-all hover:border-p-gold hover:shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-wider text-p-gold uppercase">
                Platforms & ERPs
              </span>
              <h3 className="mt-1 text-base font-bold text-[#11110f] group-hover:text-p-gold transition-colors">
                Web & Software Development
              </h3>
              <p className="mt-1.5 mb-0 text-xs leading-relaxed text-p-muted">
                High-converting websites, custom B2B portals, dealership ERPs, and mobile applications.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA End Section */}
        <section className="max-b650:flex-col max-b650:items-start mx-auto mt-[90px] flex max-w-[760px] items-center justify-between gap-5 rounded-3xl bg-[#111] p-[35px] text-white shadow-xl border border-[#2b271f]">
          <div>
            <span className="text-[10px] font-black tracking-widest text-p-gold2 uppercase block mb-1">
              Next Operational Step
            </span>
            <b className="text-lg sm:text-xl font-bold text-white block">{endHeading}</b>
          </div>
          <Link
            href={endHref}
            className="bg-p-gold hover:bg-[#e8cb7d] text-black rounded-[99px] px-[22px] py-[13px] text-xs font-black whitespace-nowrap transition-transform duration-200 hover:scale-[1.02]"
          >
            {endLabel}
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
