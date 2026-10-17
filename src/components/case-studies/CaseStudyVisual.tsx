import type { CaseStudy } from './types';
import styles from './case-studies.module.css';

/**
 * Server-rendered figures. Labels and supported facts are readable HTML, so
 * nothing depends on JavaScript. The SVGs are decorative (aria-hidden, no
 * reusable IDs); their meaning is carried by the labels and the caption.
 */

function ProcessLabels({ labels }: { labels: string[] }) {
  return (
    <ol className={styles.processLabels}>
      {labels.map((label, index) => (
        <li key={label}>
          <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          {label}
        </li>
      ))}
    </ol>
  );
}

/** A rising process path. It does NOT plot money over time. */
function Recovery({ study }: { study: CaseStudy }) {
  return (
    <>
      <svg
        viewBox="0 0 400 150"
        className={styles.processPath}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M18 125 C75 125 85 98 130 98 S200 60 255 60 S315 20 382 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          data-cs-draw
        />
        {[
          [18, 125],
          [130, 98],
          [255, 60],
          [382, 20],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="5" fill="currentColor" />
        ))}
      </svg>
      <ProcessLabels labels={study.visual.labels} />
    </>
  );
}

/** Both tracks stop at the known 95% threshold; they never imply a final value. */
function Accuracy({ study }: { study: CaseStudy }) {
  return (
    <div className={styles.accuracyRows}>
      {study.visual.labels.map(label => (
        <div key={label}>
          <p className={styles.trackLabel}>
            <span>{label}</span>
            <strong>&gt;95%</strong>
          </p>
          <div className={styles.track} aria-hidden="true">
            <span data-cs-reveal />
          </div>
        </div>
      ))}
      <p className={styles.small}>
        95% threshold shown; each reported measure was above it.
      </p>
    </div>
  );
}

function Sourcing({ study }: { study: CaseStudy }) {
  return (
    <>
      <div className={styles.originGrid}>
        {study.visual.labels.slice(0, 2).map(label => (
          <p key={label}>{label}</p>
        ))}
      </div>
      <svg
        viewBox="0 0 400 70"
        className={styles.connector}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M90 5 V20 Q90 30 110 30 H190 Q200 30 200 42 V65 M310 5 V20 Q310 30 290 30 H210 Q200 30 200 42"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          data-cs-draw
        />
      </svg>
      <ul className={styles.labelList}>
        {study.visual.labels.slice(2).map(label => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </>
  );
}

/** A generic rate-card and invoice comparison. No client record, no amounts. */
function Invoice({ study }: { study: CaseStudy }) {
  return (
    <>
      <div className={styles.invoiceCompare}>
        <div>
          <p className={styles.eyebrow}>Rate card</p>
          <p>Agreed rates and service terms</p>
        </div>
        <div>
          <p className={styles.eyebrow}>Invoice</p>
          <p>Shipment charges to review</p>
        </div>
      </div>
      <div className={styles.correctionLabels}>
        <span>Overcharges</span>
        <span>Undercharges</span>
      </div>
      <ProcessLabels labels={study.visual.labels} />
    </>
  );
}

/** Coverage only: it never claims the channels share one synchronised inventory. */
function Channels({ study }: { study: CaseStudy }) {
  return (
    <>
      <p className={styles.small}>Sales channels in scope</p>
      <ul className={styles.channelGrid}>
        {study.visual.labels.slice(0, 10).map(label => (
          <li key={label}>{label}</li>
        ))}
      </ul>
      <p className={styles.small}>Operational systems used</p>
      <ul className={styles.labelList}>
        {study.visual.labels.slice(10).map(label => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </>
  );
}

/** Exactly 64 tiles, one per listing. Not listing thumbnails, not sales data. */
function Etsy({ study }: { study: CaseStudy }) {
  return (
    <>
      <div
        className={styles.etsyGrid}
        role="img"
        aria-label="64 published Etsy listings, all scoring 90 out of 100 or above in Mavya’s third-party review"
      >
        {Array.from({ length: 64 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            data-cs-tile
            data-cs-row={Math.floor(index / 8)}
          />
        ))}
      </div>
      <p className={styles.score}>
        90+/100 in Mavya’s third-party review across all 64 listings
      </p>
      <ProcessLabels labels={study.visual.labels} />
    </>
  );
}

const GRAPHICS = {
  recovery: Recovery,
  accuracy: Accuracy,
  sourcing: Sourcing,
  invoice: Invoice,
  channels: Channels,
  etsy: Etsy,
};

export function CaseStudyVisual({ study }: { study: CaseStudy }) {
  const Graphic = GRAPHICS[study.visual.type];
  return (
    <figure className={styles.figure}>
      <p className={styles.eyebrow}>The work in view</p>
      <p className={styles.figureHeading}>{study.visual.heading}</p>
      <div className={styles.graphic}>
        <Graphic study={study} />
      </div>
      {study.supportingStats?.length ? (
        <dl className={styles.supportingStats}>
          {study.supportingStats.map(stat => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.display}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <figcaption>{study.visual.caption}</figcaption>
    </figure>
  );
}
