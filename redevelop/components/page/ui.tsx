import Link from 'next/link';

/* ------------------------------------------------------------------ *
 * Shared primitives from page.css, expressed as Tailwind utilities.
 * ------------------------------------------------------------------ */

/**
 * `.btn`, `.btn.dark`, `.btn.gold`.
 *
 * `mailto:` and off-site destinations render as plain anchors; everything else
 * goes through `next/link` so internal navigation stays client-side.
 */
export function Btn({
  href,
  variant = 'plain',
  children,
}: {
  href: string;
  variant?: 'plain' | 'dark' | 'gold';
  children: React.ReactNode;
}) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-[15px] text-xs font-extrabold ${
    {
      plain: 'border border-p-line',
      dark: 'border border-p-ink bg-p-ink text-white',
      gold: 'border border-p-gold bg-p-gold text-white',
    }[variant]
  }`;

  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** `.section` — the standard content band. `dark` maps to `.section.dark`. */
export function Section({
  dark,
  className = '',
  children,
}: {
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`max-b620:px-6 px-[8vw] py-[90px] ${
        dark ? 'bg-p-dark text-white' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
}

/** `.section-head` — headline plus supporting paragraph. */
export function SectionHead({
  heading,
  dark,
  children,
}: {
  heading: React.ReactNode;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="max-b900:grid-cols-1 mb-[45px] grid grid-cols-[1fr_.7fr] items-end gap-[60px]">
      <h2 className="m-0 text-[clamp(40px,5.5vw,76px)] leading-[.95] tracking-[-.055em]">
        {heading}
      </h2>
      <p
        className={`my-[1em] leading-[1.75] ${
          dark ? 'text-[#aaa69d]' : 'text-p-muted'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/** `.grid` — the three-column card grid. */
export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-b900:grid-cols-2 max-b620:grid-cols-1 grid grid-cols-3 gap-4">
      {children}
    </div>
  );
}

/** `.card` — bordered card with a pinned link at the bottom. */
export function Card({
  label,
  title,
  copy,
  linkHref,
  linkLabel,
  dark,
}: {
  label: string;
  title: string;
  copy: string;
  linkHref?: string;
  linkLabel?: string;
  dark?: boolean;
}) {
  const isMail = linkHref?.startsWith('mailto:');
  return (
    <article
      className={`flex min-h-[260px] flex-col rounded-3xl p-7 ${
        dark
          ? 'border border-[#302d27] bg-[#11110f]'
          : 'border-p-line border bg-white/[.62]'
      }`}
    >
      <small className="text-p-gold text-[10px] font-black tracking-[.16em]">
        {label}
      </small>
      <h3 className="mt-[18px] mb-[14px] text-[28px] leading-[1.05] tracking-[-.04em]">
        {title}
      </h3>
      <p
        className={`my-[1em] leading-[1.7] ${
          dark ? 'text-[#aaa69d]' : 'text-p-muted'
        }`}
      >
        {copy}
      </p>
      {linkHref && linkLabel ? (
        isMail ? (
          <a href={linkHref} className="text-p-gold mt-auto text-xs font-black">
            {linkLabel}
          </a>
        ) : (
          <Link
            href={linkHref}
            className="text-p-gold mt-auto text-xs font-black"
          >
            {linkLabel}
          </Link>
        )
      ) : null}
    </article>
  );
}

/** `.list` — the name / role roster on the dark About band. */
export function RosterList({
  people,
}: {
  people: { name: string; role: string }[];
}) {
  return (
    <div className="grid gap-3">
      {people.map(person => (
        <div key={person.name} className="border-t border-[#37342e] py-[18px]">
          <strong className="block text-xl">{person.name}</strong>
          <span className="text-[13px] text-[#aaa69d]">{person.role}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * `.process` — the numbered four-step band. `dark` applies the
 * `.case-method .process article` treatment used on the case-study index.
 */
export function ProcessGrid({
  steps,
  dark,
}: {
  steps: { num: string; title: string; copy: string }[];
  dark?: boolean;
}) {
  return (
    <div className="max-b900:grid-cols-2 max-b620:grid-cols-1 grid grid-cols-4 gap-3">
      {steps.map(step => (
        <article
          key={step.num}
          className={`rounded-[22px] border p-[26px] ${
            dark ? 'border-[#37332b] bg-[#181816]' : 'border-p-line'
          }`}
        >
          <b className="text-p-gold">{step.num}</b>
          <h3 className="my-[1em] text-2xl">{step.title}</h3>
          <p className="text-p-muted my-[1em] leading-[1.65]">{step.copy}</p>
        </article>
      ))}
    </div>
  );
}
