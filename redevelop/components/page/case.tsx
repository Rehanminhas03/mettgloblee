import Link from 'next/link';

/* ------------------------------------------------------------------ *
 * Case-study building blocks (the `.case-*` rules in page.css).
 * ------------------------------------------------------------------ */

export type CaseTone = 'dark' | 'light' | 'csm';

const HERO_TONE = {
  dark: 'bg-[radial-gradient(circle_at_80%_20%,rgba(224,188,104,.12),transparent_28%),#0b0b0a] text-white',
  light:
    'bg-[radial-gradient(circle_at_82%_18%,rgba(184,137,45,.12),transparent_27%),#f7f1e5] text-p-ink',
  csm: 'bg-[radial-gradient(circle_at_82%_20%,rgba(224,188,104,.13),transparent_28%),linear-gradient(145deg,#10100f,#201a10)] text-white',
} as const;

/** `.case-hero` — breadcrumb, headline, summary panel and the KPI strip. */
export function CaseHero({
  tone,
  crumb,
  kicker,
  titleTop,
  titleAccent,
  lede,
  panelLabel,
  panelValue,
  panelCopy,
  kpis,
}: {
  tone: CaseTone;
  crumb: string;
  kicker: string;
  titleTop: string;
  titleAccent: string;
  lede: React.ReactNode;
  panelLabel: string;
  panelValue: string;
  panelCopy: React.ReactNode;
  kpis: { value: string; label: string }[];
}) {
  const light = tone === 'light';

  return (
    <section
      className={`px-casepad max-b620:px-6 max-b620:pt-12 overflow-hidden pt-[76px] ${HERO_TONE[tone]}`}
    >
      <div
        className={`mb-[42px] flex items-center gap-[9px] text-[10px] tracking-[.12em] uppercase ${
          tone === 'dark' ? 'text-[#9f9a90]' : light ? 'text-p-muted' : ''
        }`}
      >
        <Link href="/case-studies">Case Studies</Link>
        <span>/</span>
        <b className="text-p-gold">{crumb}</b>
      </div>

      <div className="max-b1000:grid-cols-1 max-b620:gap-[34px] grid grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] items-end gap-[62px] pb-[54px]">
        <div>
          <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
            {kicker}
          </span>
          <h1 className="mt-[10px] mb-[22px] text-[clamp(52px,7vw,106px)] leading-[.9] tracking-[-.075em]">
            {titleTop}
            <br />
            <span className={light ? 'text-p-gold' : 'text-p-gold2'}>
              {titleAccent}
            </span>
          </h1>
          <p
            className={`my-[1em] max-w-[800px] text-[17px] leading-[1.75] ${
              tone === 'dark' ? 'text-[#aaa59c]' : light ? 'text-p-muted' : ''
            }`}
          >
            {lede}
          </p>
        </div>

        <aside
          className={`rounded-3xl border p-[26px] ${
            light ? 'border-p-line bg-white' : 'border-[#343029] bg-[#151513]'
          }`}
        >
          <small className="text-p-gold text-[9px] font-black tracking-[.15em]">
            {panelLabel}
          </small>
          <strong className="my-3 block text-[28px] tracking-[-.035em]">
            {panelValue}
          </strong>
          <p
            className={`m-0 text-xs leading-[1.65] ${
              light ? 'text-p-muted' : 'text-[#9f9a90]'
            }`}
          >
            {panelCopy}
          </p>
        </aside>
      </div>

      {/* .case-kpi-strip — bleeds to the section edges */}
      <div
        className={`-mx-casepad px-casepad max-b1000:grid-cols-2 max-b620:-mx-6 max-b620:px-6 grid grid-cols-4 border-t ${
          light ? 'border-t-[#d8ccb8]' : 'border-t-[#28251f]'
        }`}
      >
        {kpis.map((kpi, index) => (
          <div
            key={kpi.label}
            className={`max-b620:pb-6 max-b620:pr-[14px] max-b620:pt-[22px] border-r pt-[30px] pr-6 pb-[34px] ${
              index === 0 ? '' : 'max-b620:pl-[14px] pl-6'
            } ${index === kpis.length - 1 ? 'border-r-0' : ''} ${
              index === 1 ? 'max-b1000:border-r-0' : ''
            } ${index < 2 ? 'max-b1000:border-b' : ''} ${
              light
                ? 'max-b1000:border-b-[#d8ccb8] border-r-[#d8ccb8]'
                : 'max-b1000:border-b-[#28251f] border-r-[#28251f]'
            }`}
          >
            <strong
              className={`max-b620:text-[32px] block text-[42px] leading-none tracking-[-.05em] ${
                light ? 'text-p-gold' : 'text-p-gold2'
              }`}
            >
              {kpi.value}
            </strong>
            <span
              className={`mt-2 block text-[9px] tracking-[.12em] uppercase ${
                light ? 'text-p-muted' : 'text-[#aaa59b]'
              }`}
            >
              {kpi.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** `.case-challenge-grid` */
export function ChallengeGrid({
  items,
}: {
  items: { label: string; title: string; copy: string }[];
}) {
  return (
    <div className="max-b1000:grid-cols-2 max-b620:grid-cols-1 grid grid-cols-4 gap-[14px]">
      {items.map(item => (
        <article
          key={item.label}
          className="border-p-line min-h-[240px] rounded-[22px] border bg-white p-6"
        >
          <small className="text-p-gold font-black tracking-[.13em]">
            {item.label}
          </small>
          <h3 className="mt-6 mb-[10px] text-[23px] tracking-[-.035em]">
            {item.title}
          </h3>
          <p className="text-p-muted m-0 leading-[1.65]">{item.copy}</p>
        </article>
      ))}
    </div>
  );
}

/** `.case-data-grid` */
export function DataGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-b1000:grid-cols-1 grid grid-cols-2 gap-4">
      {children}
    </div>
  );
}

const CARD = 'rounded-3xl border border-[#34312a] bg-[#151513] p-7';
const HEAD =
  'flex justify-between gap-5 text-[9px] font-black tracking-[.14em] text-[#8f8a81]';

/** `.case-chart-card` */
export function ChartCard({
  label,
  note,
  heading,
  children,
}: {
  label: string;
  note: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <article className={CARD}>
      <div className={HEAD}>
        <span>{label}</span>
        <b className="text-p-gold2">{note}</b>
      </div>
      <h3 className="mt-[22px] mb-6 text-[27px] tracking-[-.04em]">
        {heading}
      </h3>
      {children}
    </article>
  );
}

/** `.split-bar` + `.split-legend` */
export function SplitBar({
  primaryWidth,
  secondaryWidth,
  primaryLabel,
  secondaryLabel,
  platform,
}: {
  primaryWidth: string;
  secondaryWidth: string;
  primaryLabel: string;
  secondaryLabel: string;
  platform?: boolean;
}) {
  return (
    <>
      <div className="flex h-[15px] overflow-hidden rounded-full bg-[#2a2823]">
        <i
          style={{ width: primaryWidth }}
          className={
            platform
              ? 'bg-[linear-gradient(90deg,#e0bc68,#9f7425)]'
              : 'bg-[linear-gradient(90deg,var(--color-p-gold),var(--color-p-gold2))]'
          }
        />
        <b
          style={{ width: secondaryWidth }}
          className={platform ? 'bg-[#5b5548]' : 'bg-[#4c473d]'}
        />
      </div>
      <div className="mt-[14px] flex flex-wrap justify-between gap-3 text-[10px] text-[#aaa59b]">
        <span>
          <i className="bg-p-gold2 mr-[6px] inline-block h-[7px] w-[7px] rounded-full" />
          {primaryLabel}
        </span>
        <span>
          <i className="mr-[6px] inline-block h-[7px] w-[7px] rounded-full bg-[#5b5548]" />
          {secondaryLabel}
        </span>
      </div>
    </>
  );
}

/** `.pipeline-card` */
export function PipelineCard({
  label,
  note,
  rows,
}: {
  label: string;
  note: string;
  rows: { stage: string; width: string; value: string }[];
}) {
  return (
    <div className={`${CARD} mt-4`}>
      <div className={HEAD}>
        <span>{label}</span>
        <b className="text-p-gold2">{note}</b>
      </div>
      {rows.map(row => (
        <div
          key={row.stage}
          className="max-b1000:grid-cols-[150px_1fr_100px] max-b620:grid-cols-1 grid grid-cols-[180px_1fr_110px] items-center gap-[18px] py-[9px] text-[11px] text-[#c5c0b6]"
        >
          <span>{row.stage}</span>
          <div className="h-2 overflow-hidden rounded-full bg-[#282621]">
            <i
              style={{ width: row.width }}
              className="block h-full rounded-[inherit] bg-[linear-gradient(90deg,var(--color-p-gold),var(--color-p-gold2))]"
            />
          </div>
          <b className="max-b620:text-left text-right text-[10px] text-white">
            {row.value}
          </b>
        </div>
      ))}
    </div>
  );
}

/** `.case-data-note` */
export function DataNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-[18px] mb-0 text-[10px] leading-[1.65] text-[#8f8a81]">
      {children}
    </p>
  );
}

/** `.workflow` — five numbered steps. `dark` maps to `.hyundai-flow`. */
export function Workflow({
  steps,
  dark,
}: {
  steps: { num: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className="max-b1000:grid-cols-1 grid grid-cols-4 items-center gap-3">
      {steps.map(step => (
        <div
          key={step.num}
          className={`flex min-h-[130px] flex-col justify-between rounded-[20px] border p-5 ${
            dark
              ? 'border-[#363229] bg-[#171715] text-white'
              : 'border-p-line bg-white'
          }`}
        >
          <b className="text-p-gold text-[11px]">{step.num}</b>
          <span className="leading-[1.35] font-black">{step.label}</span>
        </div>
      ))}
    </div>
  );
}

/** `.case-proof-grid` */
export function ProofGrid({
  items,
  dark,
}: {
  items: { label: string; figure: string; title: string; copy: string }[];
  dark?: boolean;
}) {
  return (
    <div className="max-b1000:grid-cols-1 mt-5 grid grid-cols-3 gap-[14px]">
      {items.map(item => (
        <article
          key={item.label}
          className={`rounded-[22px] border p-[25px] ${
            dark
              ? 'border-[#34312a] bg-[#151513]'
              : 'border-p-line bg-[#f7f2e8]'
          }`}
        >
          <small className="text-p-gold font-black tracking-[.14em]">
            {item.label}
          </small>
          <strong
            className={`mt-[18px] mb-[5px] block text-[48px] leading-none tracking-[-.06em] ${
              dark ? 'text-p-gold2' : 'text-p-gold'
            }`}
          >
            {item.figure}
          </strong>
          <h3 className="my-2 text-[21px]">{item.title}</h3>
          <p
            className={`m-0 leading-[1.65] ${
              dark ? 'text-[#9e998f]' : 'text-p-muted'
            }`}
          >
            {item.copy}
          </p>
        </article>
      ))}
    </div>
  );
}

/** `.evidence-stack` */
export function EvidenceStack({
  items,
}: {
  items: {
    label: string;
    title: string;
    copy: React.ReactNode;
    href?: string;
    linkLabel?: string;
  }[];
}) {
  return (
    <div className="max-b1000:grid-cols-1 grid grid-cols-2 gap-4">
      {items.map(item => (
        <article
          key={item.title}
          className="border-p-line rounded-3xl border bg-white p-7"
        >
          <span className="text-p-gold text-[9px] font-black tracking-[.14em]">
            {item.label}
          </span>
          <h3 className="mt-[18px] mb-[10px] text-[28px] tracking-[-.04em]">
            {item.title}
          </h3>
          <p className="text-p-muted my-[1em] leading-[1.7]">{item.copy}</p>
          {item.href && item.linkLabel ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-block text-[11px] font-black"
            >
              {item.linkLabel}
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/** `.case-integrity-section` + `.integrity-card` */
export function IntegrityCard({
  label,
  heading,
  children,
}: {
  label: string;
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="max-b620:px-6 px-[8vw] pt-10 pb-[90px]">
      <div className="bg-p-ink relative overflow-hidden rounded-[28px] p-[clamp(28px,5vw,58px)] text-white after:absolute after:top-[-120px] after:right-[-120px] after:h-[310px] after:w-[310px] after:rounded-full after:border after:border-[rgba(224,188,104,.2)] after:content-['']">
        <span className="text-p-gold2 text-[9px] font-black tracking-[.16em]">
          {label}
        </span>
        <h2 className="my-[18px] max-w-[950px] text-[clamp(36px,5vw,66px)] leading-[.98] tracking-[-.055em]">
          {heading}
        </h2>
        <p className="relative z-[1] my-[1em] max-w-[900px] leading-[1.75] text-[#aaa59b]">
          {children}
        </p>
      </div>
    </section>
  );
}

/** `.conversion-donut` — a 28% conic wedge with a punched-out centre. */
export function ConversionDonut({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="relative mx-auto mt-[22px] mb-2 grid h-[210px] w-[210px] place-items-center rounded-full bg-[conic-gradient(var(--color-p-gold2)_0_28%,#2c2923_28%_100%)] after:absolute after:inset-[22px] after:rounded-full after:bg-[#151513] after:content-['']">
      <div className="relative z-[1] text-center">
        <strong className="text-p-gold2 block text-[48px] leading-none tracking-[-.06em]">
          {value}
        </strong>
        <span className="mt-[6px] block text-[9px] tracking-[.12em] text-[#aaa59b] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

/** `.funnel-mini` */
export function FunnelMini({
  stages,
}: {
  stages: { label: string; value: string; pending?: boolean }[];
}) {
  return (
    <div className="mt-6 grid gap-[10px]">
      {stages.map((stage, index) => (
        <div key={stage.label} className="contents">
          <div
            className={`flex items-center justify-between rounded-[15px] border bg-[#1a1916] px-[18px] py-4 ${
              stage.pending
                ? 'border-dashed border-[#353128]'
                : 'border-[#353128]'
            }`}
          >
            <span className="text-[11px] text-[#aaa59b]">{stage.label}</span>
            <b
              className={`tracking-[-.04em] ${
                stage.pending
                  ? 'text-p-gold2 text-[17px]'
                  : 'text-2xl text-white'
              }`}
            >
              {stage.value}
            </b>
          </div>
          {index < stages.length - 1 ? (
            <i className="h-[18px] w-[2px] justify-self-center bg-[linear-gradient(var(--color-p-gold2),var(--color-p-gold))]" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
