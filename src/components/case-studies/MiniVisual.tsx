import styles from './case-studies.module.css';

/**
 * Small decorative graphics for the homepage results cards and the portfolio
 * journey. They are schematic: they illustrate what a result is about and never
 * plot, size or imply a value. The figure and its qualifiers are always the
 * real text next to them. Every graphic is aria-hidden.
 *
 * Paths use `pathLength={1}` so one CSS rule can draw any of them. In their
 * base state everything is fully drawn and visible; the animation classes
 * (`draw`, `grow`, `tile`) only act once a parent turns enhancement on.
 */
export type MiniKind =
  | 'rise'
  | 'ring'
  | 'funnel'
  | 'pin'
  | 'apps'
  | 'portals'
  | 'sixdots'
  | 'calendar'
  | 'bars'
  | 'origins'
  | 'compare'
  | 'channels'
  | 'tiles';

const draw = styles.draw;

function Shape({ kind }: { kind: MiniKind }) {
  switch (kind) {
    /* A rising process path, not a plot of money over time. */
    case 'rise':
      return (
        <>
          <path
            className={draw}
            pathLength={1}
            d="M8 54 C30 54 36 36 58 36 S88 16 112 8"
          />
          {[
            [8, 54],
            [58, 36],
            [88, 22],
            [112, 8],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="3.5" className={styles.fill} />
          ))}
        </>
      );
    /* A ring stopped at the 95% threshold. */
    case 'ring':
      return (
        <>
          <circle cx="60" cy="32" r="24" className={styles.track} />
          <circle
            cx="60"
            cy="32"
            r="24"
            pathLength={1}
            className={`${draw} ${styles.arc}`}
            transform="rotate(-90 60 32)"
          />
        </>
      );
    /* Leads narrowing to visits and bookings; schematic, not to scale. */
    case 'funnel':
      return (
        <>
          <rect
            x="10"
            y="6"
            width="100"
            height="12"
            rx="6"
            className={styles.fillSoft}
          />
          <rect
            x="25"
            y="26"
            width="70"
            height="12"
            rx="6"
            className={styles.fillMid}
          />
          <rect
            x="40"
            y="46"
            width="40"
            height="12"
            rx="6"
            className={styles.fill}
          />
        </>
      );
    case 'pin':
      return (
        <>
          <path
            className={draw}
            pathLength={1}
            d="M60 6c-12 0-20 9-20 19 0 14 20 33 20 33s20-19 20-33c0-10-8-19-20-19z"
          />
          <circle cx="60" cy="25" r="7" className={styles.fill} />
        </>
      );
    /* Two store apps (phones) and two portals (windows). */
    case 'apps':
      return (
        <>
          <rect
            x="8"
            y="10"
            width="18"
            height="40"
            rx="4"
            className={styles.outline}
          />
          <rect
            x="32"
            y="10"
            width="18"
            height="40"
            rx="4"
            className={styles.outline}
          />
          <rect
            x="58"
            y="8"
            width="54"
            height="22"
            rx="4"
            className={styles.outline}
          />
          <rect
            x="58"
            y="36"
            width="54"
            height="22"
            rx="4"
            className={styles.outline}
          />
          <path d="M58 15h54M58 43h54" className={styles.outline} />
        </>
      );
    /* Six role portals. */
    case 'portals':
      return (
        <>
          {[0, 1, 2].flatMap(col =>
            [0, 1].map(row => (
              <rect
                key={`${col}-${row}`}
                x={12 + col * 36}
                y={8 + row * 28}
                width="30"
                height="22"
                rx="5"
                className={
                  row === 0 && col === 0 ? styles.fill : styles.outline
                }
              />
            )),
          )}
        </>
      );
    /* Six marketplaces. */
    case 'sixdots':
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map(index => (
            <circle
              key={index}
              cx={14 + index * 18.4}
              cy="32"
              r="8"
              className={styles.fill}
            />
          ))}
          <path d="M14 32h92" className={styles.outline} />
        </>
      );
    /* Two days to the first sale. */
    case 'calendar':
      return (
        <>
          <rect
            x="22"
            y="8"
            width="76"
            height="50"
            rx="6"
            className={styles.outline}
          />
          <path d="M22 22h76M40 4v8M80 4v8" className={styles.outline} />
          {[0, 1, 2, 3, 4].map(col => (
            <rect
              key={col}
              x={30 + col * 13.5}
              y="30"
              width="9"
              height="9"
              rx="2"
              className={col < 2 ? styles.fill : styles.fillSoft}
            />
          ))}
        </>
      );
    /* Two accuracy measures, each stopping at the 95% threshold. */
    case 'bars':
      return (
        <>
          {[14, 40].map(y => (
            <g key={y}>
              <rect
                x="6"
                y={y}
                width="108"
                height="10"
                rx="5"
                className={styles.barTrack}
              />
              <rect
                x="6"
                y={y}
                width="102.6"
                height="10"
                rx="5"
                className={`${styles.fill} ${styles.grow}`}
              />
            </g>
          ))}
        </>
      );
    /* Two sourcing origins feeding one operation. */
    case 'origins':
      return (
        <>
          <circle cx="12" cy="14" r="6" className={styles.fill} />
          <circle cx="12" cy="50" r="6" className={styles.fill} />
          <path className={draw} pathLength={1} d="M18 16 C40 16 40 32 60 32" />
          <path className={draw} pathLength={1} d="M18 48 C40 48 40 32 60 32" />
          <circle cx="60" cy="32" r="6" className={styles.outline} />
          <path className={draw} pathLength={1} d="M66 32 H106" />
          <circle cx="110" cy="32" r="5" className={styles.fill} />
        </>
      );
    /* A generic rate card checked against an invoice. */
    case 'compare':
      return (
        <>
          <rect
            x="6"
            y="6"
            width="42"
            height="52"
            rx="5"
            className={styles.outline}
          />
          <rect
            x="72"
            y="6"
            width="42"
            height="52"
            rx="5"
            className={styles.outline}
          />
          <path
            d="M14 18h26M14 28h26M14 38h18M80 18h26M80 28h26M80 38h18"
            className={styles.outline}
          />
          <path className={draw} pathLength={1} d="M54 32h12M62 27l5 5-5 5" />
        </>
      );
    /* Six Amazon markets plus four other channels (coverage, not integration). */
    case 'channels':
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map(index => (
            <circle
              key={index}
              cx={14 + index * 18.4}
              cy="20"
              r="6.5"
              className={styles.fill}
            />
          ))}
          {[0, 1, 2, 3].map(index => (
            <circle
              key={index}
              cx={32 + index * 18.4}
              cy="46"
              r="6.5"
              className={styles.outline}
            />
          ))}
        </>
      );
    /* Exactly 64 tiles, one per listing. */
    case 'tiles':
      return (
        <>
          {Array.from({ length: 64 }, (_, index) => {
            const row = Math.floor(index / 8);
            const col = index % 8;
            return (
              <rect
                key={index}
                x={3.6 + col * 14.2}
                y={3 + row * 7.5}
                width="11.8"
                height="5.6"
                rx="1.4"
                className={styles.tile}
                style={{ '--row': row } as React.CSSProperties}
              />
            );
          })}
        </>
      );
  }
}

export function MiniVisual({
  kind,
  className,
}: {
  kind: MiniKind;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 64"
      aria-hidden="true"
      focusable="false"
      className={`${styles.mini} ${className ?? ''}`}
    >
      <Shape kind={kind} />
    </svg>
  );
}
