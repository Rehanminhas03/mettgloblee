import Link from 'next/link';
import type { CaseStudy } from './types';
import { ScrollTilt } from '@/components/ui/scroll-tilt';
import { MotionGate } from './MotionGate.client';
import { CaseStudyVisual } from './CaseStudyVisual';
import styles from './case-studies.module.css';

/** Ink hero: one H1, the supported result and the case's single figure. */
export function CaseStudyHero({ study }: { study: CaseStudy }) {
  // A threshold is never animated as an inferred improvement from zero, and a
  // qualitative coverage hero has no number to animate.
  const canCount =
    study.hero.value !== null &&
    study.hero.kind !== 'coverage' &&
    study.visual.type !== 'accuracy';

  return (
    <section className={styles.hero} aria-labelledby="case-study-title">
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li aria-current="page">{study.title}</li>
          </ol>
        </nav>

        <p className={styles.eyebrow}>{study.category}</p>
        <p className={styles.projectType}>{study.projectType}</p>
        <h1 id="case-study-title">{study.title}</h1>
        <p className={styles.deck}>{study.deck}</p>

        <dl className={styles.clientDetails}>
          <div>
            <dt>Client</dt>
            <dd>{study.client}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{study.scope}</dd>
          </div>
        </dl>
        {study.confidentialityNote ? (
          <p className={styles.confidentiality}>{study.confidentialityNote}</p>
        ) : null}

        <ScrollTilt>
          <MotionGate className={styles.resultPanel}>
            <div className={styles.resultText}>
              <p
                className={
                  study.hero.kind === 'coverage'
                    ? styles.coverageMetric
                    : styles.metric
                }
              >
                <span className={styles.srOnly}>{study.hero.accessible}</span>
                <span className={styles.numberBox} aria-hidden="true">
                  <span className={styles.numberReserve}>
                    {study.hero.display}
                  </span>
                  <span
                    className={styles.numberValue}
                    data-cs-number={canCount ? '' : undefined}
                    data-cs-target={canCount ? study.hero.value! : undefined}
                    data-cs-prefix={study.hero.prefix}
                    data-cs-suffix={study.hero.suffix}
                  >
                    {study.hero.display}
                  </span>
                </span>
              </p>
              <p className={styles.metricLabel}>{study.hero.label}</p>
              <p className={styles.qualifier}>{study.hero.qualifier}</p>
            </div>
            <CaseStudyVisual study={study} />
          </MotionGate>
        </ScrollTilt>
      </div>
    </section>
  );
}
