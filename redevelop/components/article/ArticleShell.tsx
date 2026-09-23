import Link from 'next/link';

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
  footerNote = 'Practical thinking for digital businesses',
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
  /** The policy briefs each carry their own footer line. */
  footerNote?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-surface="article" className="text-p-ink">
      <a
        href="#main-content"
        className="bg-p-ink fixed top-3 left-[18px] z-[100] -translate-y-[180%] rounded-full px-4 py-[11px] text-white transition-transform duration-200 focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="border-a-line max-b650:items-start max-b650:px-[22px] flex min-h-[88px] items-center justify-between gap-[25px] border-b px-[6vw] py-4">
        <Link href="/">
          <b className="block text-xl">Mett Global</b>
          <small className="max-b650:hidden text-[9px]">
            The Art of Digital Excellence
          </small>
        </Link>
        <nav className="max-b650:flex-wrap max-b650:justify-end flex gap-5 text-xs font-extrabold">
          <Link href="/blog">All Blog Guides</Link>
          <Link href="/appointment">Book a meeting</Link>
        </nav>
      </header>

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

        <h1 className="mt-[25px] mb-7 text-[clamp(46px,7vw,88px)] leading-[.96] tracking-[-.065em]">
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

      <footer className="bg-[#0a0a09] px-[6vw] py-[30px] text-[10px] text-[#888]">
        © MettGlobal · {footerNote}
      </footer>
    </div>
  );
}
