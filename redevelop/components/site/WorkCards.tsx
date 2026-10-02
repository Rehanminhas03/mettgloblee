import Link from 'next/link';
import { Reveal } from '@/components/home/Reveal';
import type { CardTone, WorkCard } from '@/lib/caseStudies';

const TONE: Record<
  CardTone,
  {
    card: string;
    top: string;
    brand: string;
    copy: string;
    value: string;
    small: string;
  }
> = {
  dark: {
    card: 'bg-ink text-white border-[#26231e]',
    top: 'text-[#bdb6a9]',
    brand: 'text-gold2',
    copy: 'text-[#b9b4aa]',
    value: 'text-gold2',
    small: 'text-[#aaa59b]',
  },
  light: {
    card: 'bg-white text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    value: 'text-gold',
    small: 'text-muted',
  },
  cream: {
    card: 'bg-[linear-gradient(145deg,#f7f1e5,#fff)] text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    value: 'text-gold',
    small: 'text-muted',
  },
};

/** `.case-card` — the homepage case-study card, used site-wide. */
export function WorkCardItem({ item, num }: { item: WorkCard; num: number }) {
  const tone = TONE[item.tone];
  const hasMetrics = Boolean(item.metrics?.length);
  const external = Boolean(item.href?.startsWith('http'));

  const className = `max-b620:rounded-3xl max-b620:p-[26px] relative flex h-full flex-col overflow-hidden rounded-[30px] border p-[34px] short:p-6 after:absolute after:top-[-100px] after:right-[-120px] after:h-[280px] after:w-[280px] after:rounded-full after:border after:border-[rgba(184,137,45,.24)] after:shadow-[0_0_0_48px_rgba(184,137,45,.035)] after:content-[''] ${
    hasMetrics ? 'min-h-[380px] short:min-h-0' : 'min-h-[260px]'
  } ${
    item.href
      ? 'transition-[transform,box-shadow,border-color] duration-[.25s] hover:-translate-y-[5px] hover:border-[#c8af7e] hover:shadow-[0_28px_70px_rgba(38,29,13,.12)]'
      : ''
  } ${tone.card}`;

  const body = (
    <>
      <div
        className={`relative z-[1] flex items-center justify-between gap-4 text-[9px] font-black tracking-[.15em] ${tone.top}`}
      >
        <span>{item.sector}</span>
        <b className="grid h-9 w-9 flex-none place-items-center rounded-full border border-current text-[10px]">
          {String(num).padStart(2, '0')}
        </b>
      </div>

      <div
        className={`relative z-[1] text-xs font-black tracking-[.18em] ${tone.brand} ${
          hasMetrics ? 'short:mt-5 mt-9' : 'mt-auto pt-12'
        }`}
      >
        {item.brand}
      </div>

      <h3 className="short:text-[24px] relative z-[1] mt-[14px] mb-3 max-w-[700px] text-[clamp(24px,2vw,34px)] leading-[1.02] tracking-[-.045em]">
        {item.title}
      </h3>
      {item.copy ? (
        <p
          className={`relative z-[1] m-0 max-w-[680px] text-[15px] leading-[1.65] ${tone.copy}`}
        >
          {item.copy}
        </p>
      ) : null}

      {!hasMetrics && item.tags?.length ? (
        <ul className="short:pt-4 relative z-[1] m-0 flex list-none flex-wrap gap-2 p-0 pt-6">
          {item.tags.map(tag => (
            <li
              key={tag}
              className={`rounded-full border border-[rgba(184,137,45,.34)] px-3 py-[5px] text-[10px] font-bold tracking-[.08em] uppercase ${tone.small}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {hasMetrics ? (
        <div className="max-b620:grid-cols-2 max-b620:[&>div:last-child]:col-span-full short:pt-4 relative z-[1] mt-auto grid grid-cols-3 gap-[10px] pt-6">
          {item.metrics!.map(metric => (
            <div
              key={metric.label}
              className="border-t border-[rgba(184,137,45,.34)] pt-[14px]"
            >
              <strong
                className={`block text-[30px] leading-none tracking-[-.04em] ${tone.value}`}
              >
                {metric.value}
              </strong>
              <small
                className={`mt-[6px] block text-[9px] tracking-[.11em] uppercase ${tone.small}`}
              >
                {metric.label}
              </small>
            </div>
          ))}
        </div>
      ) : null}

      {item.href && item.linkLabel ? (
        <span className="short:mt-3 relative z-[1] mt-5 text-[11px] font-black tracking-[.05em]">
          {item.linkLabel} {external ? '↗' : '→'}
        </span>
      ) : null}
    </>
  );

  if (item.href && external) {
    return (
      <a href={item.href} target="_blank" rel="noopener" className={className}>
        {body}
      </a>
    );
  }

  return item.href ? (
    <Link href={item.href} className={className}>
      {body}
    </Link>
  ) : (
    <article className={className}>{body}</article>
  );
}

/**
 * Card grid, three-up by default. At two columns a trailing odd card spans the
 * full row, so the grid never ends with a gap. Pass `cols={2}` for sets that
 * divide evenly into pairs.
 */
export function WorkCardGrid({
  items,
  cols = 3,
}: {
  items: WorkCard[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`max-b1100:grid-cols-2 max-b1100:[&>*:last-child:nth-child(odd)]:col-span-full max-b900:grid-cols-1 grid gap-[18px] ${
        cols === 2
          ? 'grid-cols-[repeat(2,minmax(0,1fr))]'
          : 'grid-cols-[repeat(3,minmax(0,1fr))]'
      }`}
    >
      {items.map((item, index) => (
        <Reveal key={item.brand} className="h-full">
          <WorkCardItem item={item} num={index + 1} />
        </Reveal>
      ))}
    </div>
  );
}
