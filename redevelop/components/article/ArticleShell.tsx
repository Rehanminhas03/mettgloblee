import Link from 'next/link';
import { SkipLink } from '@/components/page/SkipLink';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';

/* ------------------------------------------------------------------ *
 * Shell for the insight guides and policy updates (article.css).
 * ------------------------------------------------------------------ */

export function ArticleShell({
  back,
  title,
  dek,
  meta,
  graphic,
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
  endHeading: string;
  endHref: string;
  endLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div data-surface="article" className="text-p-ink">
      <SkipLink />
      <SiteHeader />

      <main
        id="main-content"
        className="max-b650:px-[22px] max-b650:py-[65px] mx-auto max-w-[1040px] px-[30px] py-[90px]"
      >
        <Link
          href="/blog"
          className="text-p-gold text-[10px] font-extrabold tracking-[.18em]"
        >
          {back}
        </Link>

        <h1 className="mt-[25px] mb-7 text-[clamp(38px,4.6vw,64px)] leading-[1.04] tracking-[-.045em]">
          {title}
        </h1>

        <p className="text-a-muted max-b650:text-[17px] my-[1em] max-w-[780px] text-xl leading-[1.7]">
          {dek}
        </p>

        <div className="border-a-line mt-[34px] mb-[60px] border-t pt-[18px] text-[10px] font-extrabold tracking-[.14em]">
          {meta}
        </div>

        {graphic}

        <article className="mx-auto max-w-[760px]">{children}</article>

        {/* .end */}
        <section className="max-b650:flex-col max-b650:items-start mx-auto mt-[90px] flex max-w-[760px] items-center justify-between gap-5 rounded-3xl bg-[#111] p-[35px] text-white">
          <b>{endHeading}</b>
          <Link
            href={endHref}
            className="bg-p-gold rounded-[99px] px-[17px] py-[13px] text-[11px] font-extrabold"
          >
            {endLabel}
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
