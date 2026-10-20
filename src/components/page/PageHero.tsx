import { CardArtwork } from '@/components/case-studies/CardArtwork.client';
import { CardVisual } from '@/components/case-studies/CardVisual';
import styles from '@/components/case-studies/case-studies.module.css';

/**
 * `.hero` from page.css, kicker, oversized headline and lede.
 *
 * Headlines contain a `<span>` accent in the source markup, so `title` is a
 * node rather than a string. `actions` renders the second `.hero p` that some
 * pages use to hold buttons.
 */
export function PageHero({
  kicker,
  title,
  subtitle,
  visualSlug,
  compact = false,
  actions,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  visualSlug?: string;
  compact?: boolean;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const paragraph =
    'my-[1em] max-w-[780px] text-[18px] leading-[1.75] text-p-muted max-b620:text-[16px]';

  return (
    <section
      className={`${styles.cardScope} ${visualSlug ? styles.projectHero : ''} ${compact ? styles.collectionHero : ''} max-b620:px-6 max-b620:pt-10 max-b620:pb-8 max-w-[1320px] px-[8vw] pt-16 pb-12`}
    >
      <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
        {kicker}
      </span>
      <div className={visualSlug ? styles.detailPageHeroGrid : undefined}>
        {visualSlug ? (
          <CardArtwork>
            <CardVisual slug={visualSlug} />
          </CardArtwork>
        ) : null}
        <div>
          <h1 className="mt-6 mb-[34px] text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-.045em]">
            {title}
          </h1>
          {subtitle ? (
            <p className="case-study-subtitle text-p-muted">{subtitle}</p>
          ) : null}
          {children ? <p className={paragraph}>{children}</p> : null}
          {actions ? <p className={paragraph}>{actions}</p> : null}
        </div>
      </div>
    </section>
  );
}

/** `.hero h1 span`, the gold second line. */
export function HeroAccent({ children }: { children: React.ReactNode }) {
  return <span className="text-p-gold">{children}</span>;
}
