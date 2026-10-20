import Link from 'next/link';
import { caseStudyPath, getCaseStudy } from '@/content/operations-case-studies';
import { CardVisual } from './CardVisual';
import { CardArtwork } from './CardArtwork.client';
import { CaseStudyArrow } from './CaseStudyArrow';
import type { CaseStudy } from './types';
import styles from './case-studies.module.css';

export function RelatedCaseStudies({ study }: { study: CaseStudy }) {
  return (
    <section className={styles.related} aria-labelledby="related-heading">
      <h2 id="related-heading">Related case studies</h2>
      <ul>
        {study.relatedSlugs.map(slug => {
          const related = getCaseStudy(slug);
          if (!related) return null;
          return (
            <li key={slug}>
              <Link
                href={caseStudyPath(slug)}
                className={`${styles.csCard} ${styles.relatedRow}`}
              >
                <CardArtwork>
                  <CardVisual slug={slug} />
                </CardArtwork>
                <div className={styles.studyCopy}>
                  <p className={styles.eyebrow}>{related.projectType}</p>
                  <h3>{related.title}</h3>
                  <p className={styles.cardSubtitle}>{related.subtitle}</p>
                  <p>{related.summary}</p>
                  <span className={styles.proofCta}>
                    View case study <CaseStudyArrow />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
