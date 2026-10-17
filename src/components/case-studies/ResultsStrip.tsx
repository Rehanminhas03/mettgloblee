import Link from 'next/link';
import { homeProofItems } from '@/content/home-proof';
import styles from './case-studies.module.css';

/**
 * Static homepage proof band: eight equal links across marketing, software and
 * e-commerce, final values only. `data-natural` opts it out of the homepage's
 * full-screen section sizing.
 */
export function ResultsStrip() {
  return (
    <section
      data-natural
      className={`${styles.scope} ${styles.proof}`}
      aria-labelledby="operations-proof-heading"
    >
      <div className={styles.container}>
        <h2 id="operations-proof-heading">
          Selected results across our services
        </h2>
        <p>
          Marketing, websites, CRM and software, and e-commerce operations.
          Explore the work behind each result.
        </p>
        <ul className={styles.proofGrid}>
          {homeProofItems.map(item => (
            <li key={item.href + item.display}>
              <Link
                href={item.href}
                aria-label={`${item.accessible}. Read the case study.`}
              >
                <span className={styles.proofTag}>{item.service}</span>
                <span className={styles.proofValue} aria-hidden="true">
                  {item.display}
                </span>
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.proofNote}>
          Figures describe documented campaign results or project scope. The
          showroom-visit figure is client-reported, the ERP is in development,
          the marketplace figure describes operating scope, and the Etsy figure
          is from an in-house project.
        </p>
      </div>
    </section>
  );
}
