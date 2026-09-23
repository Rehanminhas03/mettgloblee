/**
 * `.hero` from page.css — kicker, oversized headline and lede.
 *
 * Headlines contain a `<span>` accent in the source markup, so `title` is a
 * node rather than a string. `actions` renders the second `.hero p` that some
 * pages use to hold buttons.
 */
export function PageHero({
  kicker,
  title,
  actions,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const paragraph =
    'my-[1em] max-w-[780px] text-[18px] leading-[1.75] text-p-muted max-b620:text-[16px]';

  return (
    <section className="max-b620:px-6 max-w-[1320px] px-[8vw] pt-[110px] pb-[90px]">
      <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
        {kicker}
      </span>
      <h1 className="mt-6 mb-[34px] text-[clamp(52px,8vw,110px)] leading-[.9] tracking-[-.07em]">
        {title}
      </h1>
      {children ? <p className={paragraph}>{children}</p> : null}
      {actions ? <p className={paragraph}>{actions}</p> : null}
    </section>
  );
}

/** `.hero h1 span` — the gold second line. */
export function HeroAccent({ children }: { children: React.ReactNode }) {
  return <span className="text-p-gold">{children}</span>;
}
