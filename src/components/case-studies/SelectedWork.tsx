import Link from 'next/link';
import { selectedWorkItems } from '@/content/home-proof';
import { InView } from './InView.client';
import { MiniVisual } from './MiniVisual';
import styles from './case-studies.module.css';

/** Homepage "Selected work": three international engagements, between services and partners. */
export function SelectedWork() {
  return (
    <section
      id="selected-work"
      data-natural
      className={`${styles.scope} ${styles.work}`}
      aria-labelledby="selected-work-heading"
    >
      <div className={styles.container}>
        <p className={styles.workEyebrow}>International work</p>
        <h2 id="selected-work-heading">Selected work</h2>
        <p className={styles.workIntro}>
          Three engagements, with the result each one delivered.
        </p>
        <InView>
          <ul className={styles.workGrid}>
            {selectedWorkItems.map(item => (
              <li key={item.href} className={styles.workCard}>
                <Link
                  href={item.href}
                  aria-label={`${item.accessible}. View case study.`}
                >
                  <span className={styles.workVisual}>
                    <MiniVisual
                      kind={item.visual}
                      className={styles.workMini}
                    />
                  </span>
                  <span className={styles.workTag}>{item.service}</span>
                  <span className={styles.workStat} aria-hidden="true">
                    <span className={styles.workValue}>{item.value}</span>
                    {item.unit ? (
                      <span className={styles.workUnit}>{item.unit}</span>
                    ) : null}
                  </span>
                  <span className={styles.workLabel}>{item.label}</span>
                  <span className={styles.workLine}>{item.line}</span>
                  <span className={styles.workCta} aria-hidden="true">
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
          </ul>
        </InView>
        <Link href="/portfolio#international" className={styles.workAll}>
          See all international work
        </Link>
      </div>
    </section>
  );
}
