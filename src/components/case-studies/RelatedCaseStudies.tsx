import Link from 'next/link';
import { caseStudyPath, getCaseStudy } from '@/content/operations-case-studies';
import type { CaseStudy } from './types';
import styles from './case-studies.module.css';

/** Two related links, resolved from the same server-owned records. */
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
              <Link href={caseStudyPath(slug)}>
                <span className={styles.eyebrow}>{related.projectType}</span>
                <h3>{related.title}</h3>
                <p>{related.summary}</p>
                <span>
                  Read the case study <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
