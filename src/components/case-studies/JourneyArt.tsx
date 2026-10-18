import type { FigureKind } from './types';
import styles from './journey-art.module.css';

/**
 * Left-hand artwork for each international case-study stop. No text and no
 * figures: each scene shows what the work actually is (money coming back,
 * a warehouse, two sourcing countries feeding one flow, invoices being
 * matched, many marketplaces on one hub, a catalogue filling in). The motion
 * is transform, opacity and dash offsets only, runs on a slow loop, and stops
 * entirely for visitors who ask for reduced motion. `--i` staggers children.
 */
const idx = (i: number) => ({ '--i': i }) as React.CSSProperties;

function Recovery() {
  const tops = [116, 102, 90, 74, 56, 36];
  return (
    <>
      <path className={styles.soft} d="M14 140H186" />
      {tops.map((top, i) => (
        <rect
          key={top}
          className={`${styles.faint} ${styles.rise}`}
          style={idx(i)}
          x={24 + i * 26}
          y={top}
          width="16"
          height={140 - top}
          rx="3"
        />
      ))}
      <path
        className={`${styles.line} ${styles.draw}`}
        pathLength={1}
        d="M32 108 L58 94 L84 82 L110 66 L136 48 L162 28"
      />
      <circle
        className={`${styles.solid} ${styles.pulse}`}
        cx="162"
        cy="28"
        r="4.5"
      />
      {/* a parcel whose value comes back as a coin */}
      <rect
        className={styles.line}
        x="16"
        y="14"
        width="30"
        height="24"
        rx="4"
      />
      <path className={styles.line} d="M16 24H46M31 14V24" />
      <path
        className={`${styles.line} ${styles.flow}`}
        d="M52 26 C70 12 96 12 112 22"
      />
      <circle className={styles.line} cx="126" cy="26" r="9" />
      <circle
        className={`${styles.solid} ${styles.pulse}`}
        cx="126"
        cy="26"
        r="3.2"
      />
    </>
  );
}

function Warehouse() {
  return (
    <>
      <path className={styles.line} d="M18 72 L100 28 L182 72" />
      <path className={styles.line} d="M30 68V140H170V68" />
      <path className={styles.line} d="M84 140V102H116V140" />
      {[
        [40, 92],
        [40, 114],
        [124, 92],
        [124, 114],
      ].map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <path className={styles.soft} d={`M${x} ${y}H${x + 36}`} />
          <rect
            className={`${styles.solid} ${styles.bob}`}
            style={idx(i)}
            x={x + 6}
            y={y - 12}
            width="11"
            height="11"
            rx="2"
          />
          <rect
            className={`${styles.faint} ${styles.bob}`}
            style={idx(i + 2)}
            x={x + 21}
            y={y - 9}
            width="9"
            height="8"
            rx="2"
          />
        </g>
      ))}
      {/* the accuracy gauge stops short of a full circle */}
      <circle className={styles.softThick} cx="100" cy="62" r="15" />
      <circle
        className={`${styles.line} ${styles.draw} ${styles.arc}`}
        pathLength={1}
        cx="100"
        cy="62"
        r="15"
        transform="rotate(-90 100 62)"
      />
      <path className={styles.line} d="M93 62 L98 67 L108 56" />
      {/* a parcel passing the dispatch door */}
      <rect
        className={`${styles.solid} ${styles.slide}`}
        x="0"
        y="130"
        width="12"
        height="9"
        rx="2"
      />
      <rect
        className={`${styles.faint} ${styles.slide} ${styles.slideLate}`}
        x="0"
        y="130"
        width="12"
        height="9"
        rx="2"
      />
    </>
  );
}

function Sourcing() {
  return (
    <>
      {/* two origins feed one flow that reaches the sales side */}
      <circle className={styles.ping} cx="34" cy="38" r="10" />
      <circle className={styles.line} cx="34" cy="38" r="10" />
      <circle className={styles.solid} cx="34" cy="38" r="3.4" />
      <circle
        className={`${styles.ping} ${styles.pingLate}`}
        cx="34"
        cy="122"
        r="10"
      />
      <circle className={styles.line} cx="34" cy="122" r="10" />
      <circle className={styles.solid} cx="34" cy="122" r="3.4" />
      <path
        className={`${styles.line} ${styles.flow}`}
        d="M46 40 C84 40 76 80 98 80"
      />
      <path
        className={`${styles.line} ${styles.flow} ${styles.flowLate}`}
        d="M46 120 C84 120 76 80 98 80"
      />
      <rect
        className={styles.line}
        x="98"
        y="64"
        width="30"
        height="32"
        rx="5"
      />
      <path className={styles.line} d="M98 76H128M113 64V76" />
      <path className={styles.faint} d="M104 84H122V92H104z" />
      <path className={`${styles.line} ${styles.flow}`} d="M132 80 H164" />
      <rect
        className={`${styles.faint} ${styles.bob}`}
        style={idx(0)}
        x="166"
        y="62"
        width="22"
        height="18"
        rx="3"
      />
      <rect
        className={`${styles.solid} ${styles.bob}`}
        style={idx(1)}
        x="166"
        y="84"
        width="22"
        height="18"
        rx="3"
      />
    </>
  );
}

function Invoice() {
  return (
    <>
      {[16, 112].map((x, d) => (
        <g key={x}>
          <rect
            className={styles.line}
            x={x}
            y="18"
            width="72"
            height="104"
            rx="7"
          />
          {[40, 58, 76, 94].map((y, i) => (
            <path
              key={y}
              className={`${styles.line} ${styles.draw} ${styles.lineIn}`}
              style={idx(i + d)}
              pathLength={1}
              d={`M${x + 12} ${y}H${x + (i % 2 ? 48 : 60)}`}
            />
          ))}
        </g>
      ))}
      <circle className={styles.line} cx="100" cy="70" r="10" />
      <path
        className={`${styles.line} ${styles.draw}`}
        pathLength={1}
        d="M95 70 L99 74 L106 66"
      />
      <rect
        className={`${styles.faint} ${styles.scan}`}
        x="12"
        y="18"
        width="176"
        height="8"
        rx="4"
      />
      {/* a courier van crossing the foot of the scene */}
      <path className={styles.soft} d="M12 146H188" />
      <g className={styles.drive}>
        <rect
          className={styles.solid}
          x="0"
          y="132"
          width="18"
          height="11"
          rx="2"
        />
        <path className={styles.solid} d="M18 136H25L29 141V143H18z" />
        <circle className={styles.wheel} cx="6" cy="145" r="3" />
        <circle className={styles.wheel} cx="23" cy="145" r="3" />
      </g>
    </>
  );
}

function Channels() {
  const sats = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4 - Math.PI / 2;
    return { x: 100 + Math.cos(a) * 58, y: 80 + Math.sin(a) * 58 };
  });
  return (
    <>
      <circle className={styles.softThick} cx="100" cy="80" r="58" />
      <g className={styles.orbit}>
        {sats.map((s, i) => (
          <g key={i}>
            <path
              className={`${styles.line} ${styles.flow}`}
              style={idx(i)}
              d={`M100 80 L${s.x.toFixed(1)} ${s.y.toFixed(1)}`}
            />
            <circle
              className={`${styles.nodeFill} ${styles.pulse}`}
              style={idx(i)}
              cx={s.x.toFixed(1)}
              cy={s.y.toFixed(1)}
              r="8"
            />
          </g>
        ))}
      </g>
      <circle className={styles.hub} cx="100" cy="80" r="17" />
      <circle className={styles.line} cx="100" cy="80" r="17" />
      <circle
        className={`${styles.solid} ${styles.pulse}`}
        cx="100"
        cy="80"
        r="6"
      />
    </>
  );
}

function Etsy() {
  return (
    <>
      {Array.from({ length: 64 }, (_, i) => (
        <rect
          key={i}
          className={`${styles.tileCell} ${i === 0 ? styles.firstSale : ''}`}
          style={idx(i)}
          x={33 + (i % 8) * 17}
          y={14 + Math.floor(i / 8) * 17}
          width="14"
          height="14"
          rx="3"
        />
      ))}
    </>
  );
}

const SCENES: Record<FigureKind, () => React.JSX.Element> = {
  recovery: Recovery,
  accuracy: Warehouse,
  sourcing: Sourcing,
  invoice: Invoice,
  channels: Channels,
  etsy: Etsy,
};

export function JourneyArt({ kind }: { kind: FigureKind }) {
  const Scene = SCENES[kind];
  return (
    <svg
      className={styles.art}
      viewBox="0 0 200 160"
      aria-hidden="true"
      focusable="false"
    >
      <Scene />
    </svg>
  );
}
