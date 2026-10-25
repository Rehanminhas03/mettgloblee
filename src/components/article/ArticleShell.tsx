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
