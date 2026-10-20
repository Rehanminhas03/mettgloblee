import { Reveal } from '@/components/home/Reveal';
import { CARD_TITLE, CardTop, TONES, ToneCard } from '@/components/ui/ToneCard';
import type { WorkCard } from '@/lib/caseStudies';
import { CASE_NAMES } from '@/lib/caseNames';
import { CardVisual } from '@/components/case-studies/CardVisual';
import { CardArtwork } from '@/components/case-studies/CardArtwork.client';
import { CaseStudyArrow } from '@/components/case-studies/CaseStudyArrow';
import { InViewList } from '@/components/case-studies/InViewList.client';
import styles from '@/components/case-studies/case-studies.module.css';

/** `.case-card`, the homepage case-study card, used site-wide. */
export function WorkCardItem({
  item,
  num,
  titleAs: Title = 'h3',
}: {
  item: WorkCard;
  num: number;
  /** Heading level for the card title, so it can sit under a subsection H3. */
  titleAs?: 'h3' | 'h4';
}) {
  const tone = TONES[item.tone];
  const hasMetrics = Boolean(item.metrics?.length);
  const slug = item.href?.startsWith('/portfolio/')
    ? item.href.split('/').pop()
    : undefined;
  const name = slug ? CASE_NAMES[slug] : undefined;

  if (slug && name && item.href) {
    return (
      <a
        href={item.href}
        data-study-card
        className={`${styles.csCard} ${styles.studyRow} ${item.tone === 'dark' ? styles.toneDark : styles.toneLight}`}
      >
        <CardArtwork>
          <CardVisual slug={slug} />
        </CardArtwork>
        <div className={styles.studyCopy}>
          <p className={styles.eyebrow}>{item.sector}</p>
          <p className={styles.studyBrand}>{item.brand}</p>
          <Title>{name.name}</Title>
          <p className={styles.cardSubtitle}>{name.subtitle}</p>
          {item.copy ? (
            <p className={styles.studySummary}>{item.copy}</p>
          ) : null}
          {item.tags?.length ? (
            <ul className={styles.chips}>
              {item.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          {item.metrics?.length ? (
            <dl className={styles.cardMetrics}>
              {item.metrics.map(metric => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <span className={styles.proofCta}>
            View case study <CaseStudyArrow />
          </span>
        </div>
      </a>
    );
  }

  const body = (
    <>
      <CardTop
        tone={item.tone}
        label={item.sector}
        num={String(num).padStart(2, '0')}
      />
      {slug && name ? (
        <div className={styles.portfolioVisual}>
          <CardVisual slug={slug} />
        </div>
      ) : null}

      <div
        className={`short:mt-5 relative z-[1] mt-9 text-xs font-black tracking-[.18em] ${tone.brand}`}
      >
        {item.brand}
      </div>

      <Title className={`${CARD_TITLE} mt-[14px] mb-3 max-w-[700px]`}>
        {name?.name ?? item.title}
      </Title>
      {name ? (
        <p className={`${styles.cardSubtitle} ${tone.copy}`}>{name.subtitle}</p>
      ) : null}
      {item.copy ? (
        <p
          className={`relative z-[1] m-0 max-w-[680px] text-[15px] leading-[1.65] ${tone.copy}`}
        >
          {item.copy}
        </p>
      ) : null}

      {!hasMetrics && item.tags?.length ? (
        <ul className="short:pt-4 relative z-[1] m-0 mt-auto flex list-none flex-wrap gap-2 p-0 pt-6">
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
          {name ? 'View case study' : item.linkLabel} <CaseStudyArrow />
        </span>
      ) : null}
    </>
  );

  return (
    <ToneCard
      tone={item.tone}
      href={item.href}
      className={`${hasMetrics ? 'short:min-h-0 min-h-[380px]' : 'min-h-[260px]'} ${item.href ? styles.csCard : ''} ${item.tone === 'dark' ? styles.portfolioDark : styles.portfolioLight}`}
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
  titleAs,
}: {
  items: WorkCard[];
  cols?: 2 | 3;
  titleAs?: 'h3' | 'h4';
}) {
  return (
    <InViewList className={`${styles.cardScope} ${styles.studyList}`}>
      {items.map((item, index) => (
        <li key={item.href ?? item.brand} className="h-full min-w-0">
          <Reveal className="h-full">
            <WorkCardItem item={item} num={index + 1} titleAs={titleAs} />
          </Reveal>
        </li>
      ))}
    </InViewList>
  );
}
