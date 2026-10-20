import Link from 'next/link';
import { caseStudies, caseStudyPath } from '@/content/operations-case-studies';
import { JourneyScroll } from './JourneyScroll.client';
import { CardVisual } from './CardVisual';
import { CardArtwork } from './CardArtwork.client';
import { CaseStudyArrow } from './CaseStudyArrow';
import styles from './case-studies.module.css';

/**
 * Six-stop vertical reading path for the portfolio's International section.
 * Each stop is a compact two-column card: the headline figure on the left, the
 * story on the right. The headline link and the text link are siblings, never
 * nested. The spine fill is the only enhancement (see JourneyScroll).
 */
/** Card tones in a fixed rhythm: ink, cream, light, then repeat. */
const TONES = [styles.toneDark, styles.toneCream, styles.toneLight];

/** The small graphic under each stop's figure, by the study's figure type. */
export function OperationsJourney() {
  return (
    <div className={`${styles.scope} ${styles.journeyScope}`}>
      <h3 className={styles.journeyHeading}>
        E&#8209;commerce and supply chain operations
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
            <Link
              href={caseStudyPath(study.slug)}
              data-study-card
              className={`${styles.csCard} ${styles.journeyStop} ${styles.studyRow} ${TONES[(study.order - 1) % TONES.length]}`}
            >
              <CardArtwork>
                <CardVisual slug={study.slug} />
              </CardArtwork>
              <div className={`${styles.journeyBody} ${styles.studyCopy}`}>
                <p className={styles.eyebrow}>{study.category}</p>
                <p className={styles.journeyClient}>
                  {study.projectType} · {study.client}
                </p>
                <h4>{study.title}</h4>
                <p className={styles.cardSubtitle}>{study.subtitle}</p>
                <p className={styles.journeySummary}>{study.summary}</p>
                <p className={styles.studyResult}>
                  {study.hero.display} {study.hero.unit} · {study.hero.label}
                </p>
                <ul className={styles.chips}>
                  {study.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className={styles.proofCta}>
                  View case study <CaseStudyArrow />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </JourneyScroll>
    </div>
  );
}
