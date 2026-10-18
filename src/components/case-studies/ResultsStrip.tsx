import Link from 'next/link';
import { homeProofItems } from '@/content/home-proof';
import { MiniVisual } from './MiniVisual';
import { ProofCarousel } from './ProofCarousel.client';
import styles from './case-studies.module.css';

/**
 * Homepage results band: a carousel of small cards, each with a graphic that
 * shows what the result is about, the figure, and its label. The cards are
 * server-rendered links. `data-natural` opts the band out of the homepage's
 * full-screen section sizing.
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
          Marketing, websites, CRM and software, and e-commerce operations.
          Explore the work behind each result.
        </p>

        <ProofCarousel>
          {homeProofItems.map(item => (
            <li key={item.href + item.display} className={styles.proofCard}>
              <Link
                href={item.href}
                aria-label={`${item.accessible}. Read the case study.`}
              >
                <span className={styles.proofTag}>{item.service}</span>
                <MiniVisual kind={item.visual} className={styles.proofMini} />
                <span className={styles.proofValue} aria-hidden="true">
                  {item.display}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ProofCarousel>

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
