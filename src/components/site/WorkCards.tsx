import { Reveal } from '@/components/home/Reveal';
import { CARD_TITLE, CardTop, TONES, ToneCard } from '@/components/ui/ToneCard';
import type { WorkCard } from '@/lib/caseStudies';

/** `.case-card` — the homepage case-study card, used site-wide. */
export function WorkCardItem({ item, num }: { item: WorkCard; num: number }) {
  const tone = TONES[item.tone];
  const hasMetrics = Boolean(item.metrics?.length);
  const external = Boolean(item.href?.startsWith('http'));

  const body = (
    <>
      <CardTop
        tone={item.tone}
        label={item.sector}
        num={String(num).padStart(2, '0')}
      />

      <div
        className={`relative z-[1] text-xs font-black tracking-[.18em] ${tone.brand} ${
          hasMetrics ? 'short:mt-5 mt-9' : 'mt-auto pt-12'
        }`}
      >
        {item.brand}
      </div>

      <h3 className={`${CARD_TITLE} mt-[14px] mb-3 max-w-[700px]`}>
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

  return (
    <ToneCard
      tone={item.tone}
      href={item.href}
      className={hasMetrics ? 'short:min-h-0 min-h-[380px]' : 'min-h-[260px]'}
    >
      {body}
    </ToneCard>
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
