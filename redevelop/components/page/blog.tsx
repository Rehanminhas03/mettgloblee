import Link from 'next/link';

/* ------------------------------------------------------------------ *
 * Blog index cards: `.update-card` / `.policy-art` and
 * `.blog-card` / `.blog-art`, with their per-topic artwork gradients.
 * ------------------------------------------------------------------ */

/** `.policy-art.<variant>` backgrounds. */
const POLICY_ART = {
  amazon:
    'bg-[radial-gradient(circle_at_70%_18%,rgba(223,186,100,.2),transparent_28%),#0b0b0a]',
  'ai-act': 'bg-[linear-gradient(145deg,#15120b,#71541b)]',
  consent:
    'bg-[radial-gradient(circle_at_30%_20%,rgba(223,186,100,.18),transparent_30%),#11110f]',
  ics: 'bg-[linear-gradient(155deg,#090908,#3d3423)]',
  search:
    'bg-[radial-gradient(circle_at_70%_20%,rgba(223,186,100,.22),transparent_24%),#13110d]',
} as const;

export type PolicyArt = keyof typeof POLICY_ART;

export function UpdateCard({
  art,
  artLabel,
  artFigure,
  artNote,
  category,
  title,
  copy,
  href,
  linkLabel,
}: {
  art: PolicyArt;
  artLabel: string;
  artFigure: string;
  artNote: React.ReactNode;
  category: string;
  title: React.ReactNode;
  copy: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="border-p-line max-b620:grid-cols-1 grid min-h-[310px] grid-cols-[.88fr_1.12fr] overflow-hidden rounded-[28px] border bg-white">
      {/* .policy-art — two concentric outlined circles bleed off the corner */}
      <div
        className={`max-b620:min-h-[240px] relative flex min-h-full flex-col justify-end overflow-hidden p-7 text-white ${POLICY_ART[art]} before:absolute before:top-[-65px] before:right-[-80px] before:h-[200px] before:w-[200px] before:rounded-full before:border before:border-[rgba(223,186,100,.34)] before:content-[''] after:absolute after:top-[-18px] after:right-[-25px] after:h-[105px] after:w-[105px] after:rounded-full after:border after:border-[rgba(223,186,100,.34)] after:content-['']`}
      >
        <span className="text-p-gold2 relative z-[1] mb-auto text-[9px] font-black tracking-[.17em]">
          {artLabel}
        </span>
        <strong className="relative z-[1] text-[clamp(38px,4vw,66px)] leading-[.9] tracking-[-.06em]">
          {artFigure}
        </strong>
        <small className="relative z-[1] mt-[10px] text-[10px] leading-[1.45] tracking-[.08em] text-[#c4beb1] uppercase">
          {artNote}
        </small>
      </div>

      <div className="flex flex-col p-[27px]">
        <small className="text-p-gold text-[9px] font-black tracking-[.14em]">
          {category}
        </small>
        <h2 className="mt-[15px] mb-3 text-2xl leading-[1.08] tracking-[-.04em]">
          {title}
        </h2>
        <p className="text-p-muted mt-0 mb-[18px] leading-[1.65]">{copy}</p>
        <Link href={href} className="mt-auto text-[11px] font-black">
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}

/** `.blog-art` and its `.blog-art.<variant>` overrides. */
const BLOG_ART = {
  default:
    'bg-[radial-gradient(circle_at_75%_20%,rgba(222,186,100,.35),transparent_25%),linear-gradient(145deg,#0c0c0b,#292317)]',
  web: 'bg-[linear-gradient(145deg,#10100f,#4a3b1d)]',
  ai: 'bg-[radial-gradient(circle_at_25%_20%,rgba(202,152,44,.25),transparent_28%),#111]',
  growth: 'bg-[linear-gradient(135deg,#ae7f20,#171510)]',
  supply: 'bg-[linear-gradient(145deg,#0b0b0a,#2b2a24)]',
  cyber:
    'bg-[radial-gradient(circle_at_70%_35%,rgba(223,186,100,.2),transparent_24%),linear-gradient(135deg,#050505,#20201d)]',
  sales: 'bg-[linear-gradient(150deg,#1b1811,#6e5220)]',
  video:
    'bg-[radial-gradient(circle_at_50%_50%,rgba(223,186,100,.22),transparent_30%),#0a0a09]',
  audit: 'bg-[linear-gradient(135deg,#0d0d0c,#3b3120)]',
  measurement:
    'bg-[linear-gradient(145deg,#11110f_0_42%,#6f5421_42%_49%,#191710_49%)]',
  catalog:
    'bg-[radial-gradient(circle_at_68%_30%,rgba(223,186,100,.3),transparent_20%),linear-gradient(145deg,#0b0b0a,#3b3223)]',
  landed:
    'bg-[linear-gradient(160deg,#dfba64_0_18%,#a8833c_18%_39%,#5e4a2b_39%_62%,#242018_62%)]',
  scorecard: 'bg-[linear-gradient(135deg,#10100f,#51401f)]',
  passport:
    'bg-[radial-gradient(circle_at_50%_48%,rgba(223,186,100,.35),transparent_17%),linear-gradient(145deg,#0b0b0a,#262117)]',
} as const;

export type BlogArt = keyof typeof BLOG_ART;

export function BlogCard({
  art = 'default',
  num,
  topic,
  readTime,
  title,
  copy,
  href,
  linkLabel,
  dark,
}: {
  art?: BlogArt;
  num: string;
  topic: string;
  readTime: string;
  title: string;
  copy: string;
  href: string;
  linkLabel: string;
  dark?: boolean;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[28px] border ${
        dark ? 'border-[#34312b] bg-[#11110f]' : 'border-p-line bg-white'
      }`}
    >
      {/* .blog-art — the outlined circle sits off the top-right corner */}
      <div
        className={`relative flex min-h-[230px] flex-col justify-between overflow-hidden p-[26px] text-white ${BLOG_ART[art]} after:absolute after:top-[-45px] after:right-[-45px] after:h-[170px] after:w-[170px] after:rounded-full after:border after:border-[rgba(223,186,100,.45)] after:shadow-[0_0_0_35px_rgba(223,186,100,.04)] after:content-['']`}
      >
        <span className="text-p-gold2 z-[1] text-[64px] font-extrabold">
          {num}
        </span>
        <b className="z-[1] text-[10px] tracking-[.16em]">{topic}</b>
      </div>

      <div className="flex flex-1 flex-col p-[26px]">
        <small className="text-p-gold text-[10px] font-black tracking-[.14em]">
          {readTime}
        </small>
        <h2
          className={`my-[0.83em] text-[25px] leading-[1.08] tracking-[-.04em] ${
            dark ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
        <p
          className={`my-[1em] leading-[1.7] ${
            dark ? 'text-[#aaa69d]' : 'text-p-muted'
          }`}
        >
          {copy}
        </p>
        <Link
          href={href}
          className={`mt-auto pt-4 text-xs font-black ${
            dark ? 'text-p-gold2' : ''
          }`}
        >
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}

/** `.blog-grid` */
export function BlogGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-b1050:grid-cols-2 max-b700:grid-cols-1 grid grid-cols-3 gap-[18px]">
      {children}
    </div>
  );
}

/** `.update-grid` */
export function UpdateGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-b1100:grid-cols-1 grid grid-cols-2 gap-[18px]">
      {children}
    </div>
  );
}
