import Link from 'next/link';
import { homeProofItems } from '@/content/home-proof';
import { MiniVisual } from './MiniVisual';
import { ProofCarousel } from './ProofCarousel.client';
import styles from './case-studies.module.css';

/**
 * Homepage results band: six compact cards, each with a graphic that shows
 * what the result is about, the figure with its unit, and a small-caps label.
 * The cards are server-rendered links. `data-natural` opts the band out of the
 * homepage's full-screen section sizing.
 */
export function ResultsStrip() {
  return (
    <section
      data-natural
      className={`${styles.scope} ${styles.proof}`}
      aria-labelledby="operations-proof-heading"
    >
      <div className={`${styles.container} ${styles.proofContainer}`}>
        <h2 id="operations-proof-heading">
          Selected results across our services
        </h2>
        <p className={styles.proofIntro}>
          Marketing, websites, CRM and software, and e&#8209;commerce
          operations. Explore the work behind each result.
        </p>

        <ProofCarousel count={homeProofItems.length}>
          {homeProofItems.map(item => (
            <li key={item.href} className={styles.proofCard}>
              <Link
                href={item.href}
                aria-label={`${item.accessible}. View case study.`}
              >
                <span className={styles.proofTag}>{item.service}</span>
                <MiniVisual kind={item.visual} className={styles.proofMini} />
                <span className={styles.proofStat} aria-hidden="true">
                  <span className={styles.proofValue}>{item.value}</span>
                  {item.unit ? (
                    <span className={styles.proofUnit}>{item.unit}</span>
                  ) : null}
                </span>
                <span className={styles.proofLabel}>{item.label}</span>
                <span className={styles.proofCta} aria-hidden="true">
                  View case study
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    focusable="false"
                  >
                    <path
                      d="M2 8h11M9 4l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ProofCarousel>

        <p className={styles.proofNote}>
          Figures are documented results or project scope. Showroom visits are
          client-reported; the ERP is in development.
        </p>
      </div>
    </section>
  );
}
