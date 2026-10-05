import Link from 'next/link';

/**
 * The site's one card style: rounded, bordered, with a soft gold ring in the
 * corner. Three tones (dark, light, cream) are used in a fixed rhythm across
 * the homepage, portfolio, case studies and leadership cards, so every card
 * shares the same radius, padding, hover and type scale.
 */
export type Tone = 'dark' | 'light' | 'cream';

export const TONES: Record<
  Tone,
  {
    card: string;
    top: string;
    brand: string;
    copy: string;
    rule: string;
    cta: string;
    tick: string;
    value: string;
    small: string;
  }
> = {
  dark: {
    card: 'bg-ink text-white border-[#26231e]',
    top: 'text-[#bdb6a9]',
    brand: 'text-gold2',
    copy: 'text-[#b9b4aa]',
    rule: 'border-[rgba(184,137,45,.34)]',
    cta: 'text-gold2',
    tick: 'before:text-gold2',
    value: 'text-gold2',
    small: 'text-[#aaa59b]',
  },
  light: {
    card: 'bg-white text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    rule: 'border-[rgba(184,137,45,.34)]',
    cta: 'text-gold',
    tick: 'before:text-gold',
    value: 'text-gold',
    small: 'text-muted',
  },
  cream: {
    card: 'bg-[linear-gradient(145deg,#f7f1e5,#fff)] text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    rule: 'border-[rgba(184,137,45,.34)]',
    cta: 'text-gold',
    tick: 'before:text-gold',
    value: 'text-gold',
    small: 'text-muted',
  },
};

const SHELL =
  "max-b620:rounded-3xl max-b620:p-[26px] short:p-6 relative flex h-full flex-col overflow-hidden rounded-[30px] border p-8 after:absolute after:top-[-100px] after:right-[-120px] after:h-[280px] after:w-[280px] after:rounded-full after:border after:border-[rgba(184,137,45,.24)] after:shadow-[0_0_0_48px_rgba(184,137,45,.035)] after:content-['']";

const INTERACTIVE =
  'group transition-[transform,box-shadow,border-color] duration-[.25s] hover:-translate-y-[5px] hover:border-[#c8af7e] hover:shadow-[0_28px_70px_rgba(38,29,13,.12)]';

/** Card title: one size for every card on the site. */
export const CARD_TITLE =
  'relative z-[1] m-0 text-[clamp(24px,2.2vw,36px)] leading-[1.05] tracking-[-.045em]';

/** Card body copy. */
export const CARD_COPY = 'relative z-[1] m-0 text-[15px] leading-[1.65]';

export function ToneCard({
  tone,
  href,
  className = '',
  children,
}: {
  tone: Tone;
  /** Internal path or full `https://` URL (opens in a new tab). No href renders a static card. */
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = `${SHELL} ${href ? INTERACTIVE : ''} ${TONES[tone].card} ${className}`;

  if (!href) return <article className={classes}>{children}</article>;
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Top line of a card: an upper-case label and a numbered circle. */
export function CardTop({
  tone,
  label,
  num,
}: {
  tone: Tone;
  label: string;
  num: string;
}) {
  return (
    <div
      className={`relative z-[1] flex items-center justify-between gap-4 text-[10px] font-black tracking-[.15em] ${TONES[tone].top}`}
    >
      <span>{label}</span>
      <b className="grid h-10 w-10 flex-none place-items-center rounded-full border border-current text-[11px]">
        {num}
      </b>
    </div>
  );
}

/** A short list of ticked points. */
export function TickList({
  tone,
  items,
  className = '',
}: {
  tone: Tone;
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`relative z-[1] m-0 grid list-none gap-2.5 p-0 ${className}`}
    >
      {items.map(item => (
        <li
          key={item}
          className={`relative pl-5 text-[14px] leading-[1.4] before:absolute before:left-0 before:content-['✓'] ${TONES[tone].tick}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** The card's call to action, pinned to the bottom. */
export function CardCta({
  tone,
  children,
}: {
  tone: Tone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`relative z-[1] mt-auto pt-6 text-[13px] font-black tracking-[.05em] ${TONES[tone].cta}`}
    >
      {children}{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1">
        →
      </span>
    </span>
  );
}
