import Link from 'next/link';
import { caseStudies, caseStudyPath } from '@/content/operations-case-studies';
import { JourneyScroll } from './JourneyScroll.client';
import styles from './case-studies.module.css';

/**
 * Six-stop vertical reading path for the portfolio's International section.
 * Each stop is a compact two-column card: the headline figure on the left, the
 * story on the right. The headline link and the text link are siblings, never
 * nested. The spine fill is the only enhancement (see JourneyScroll).
 */
/** Card tones in a fixed rhythm: ink, cream, light, then repeat. */
const TONES = [styles.toneDark, styles.toneCream, styles.toneLight];

export function OperationsJourney() {
  return (
    <div className={styles.scope}>
      <h3 className={styles.journeyHeading}>
        E-commerce and supply chain operations
      </h3>
      <JourneyScroll className={styles.journey}>
        {caseStudies.map(study => (
          <li key={study.slug}>
            <span
              className={styles.milestone}
              aria-hidden="true"
              data-milestone
            >
              {String(study.order).padStart(2, '0')}
            </span>
            <div
              className={`${styles.journeyStop} ${TONES[(study.order - 1) % TONES.length]}`}
            >
              <div className={styles.journeyFigure}>
                <p className={styles.journeyMetric}>{study.hero.display}</p>
                <p className={styles.small}>{study.hero.label}</p>
              </div>
              <div className={styles.journeyBody}>
                <p className={styles.eyebrow}>{study.category}</p>
                <p className={styles.journeyClient}>
                  {study.projectType} · {study.client}
                </p>
                <h4>
                  <Link href={caseStudyPath(study.slug)}>{study.headline}</Link>
                </h4>
                <p className={styles.journeySummary}>{study.summary}</p>
                <ul className={styles.chips}>
                  {study.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link
                  className={styles.textLink}
                  href={caseStudyPath(study.slug)}
                  aria-label={`${study.journeyCta}: ${study.title}`}
                >
                  {study.journeyCta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </JourneyScroll>
    </div>
  );
}
