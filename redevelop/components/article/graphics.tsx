/* ------------------------------------------------------------------ *
 * Article hero graphics (`.graphic` and its `.data-graphic` variants).
 * All are pure CSS — no images were used in the original either.
 * ------------------------------------------------------------------ */

const GRAPHIC_BASE =
  'mb-[70px] min-h-[170px] rounded-[26px] p-[35px] text-white max-b650:p-[25px]';

/** `.graphic` — the chip-and-rule strip used by the eight field guides. */
export function ChipGraphic({ steps }: { steps: string[] }) {
  return (
    <div
      className={`${GRAPHIC_BASE} max-b650:justify-start flex flex-wrap items-center justify-center gap-[13px] bg-[#111]`}
    >
      {steps.map((step, index) => (
        <span key={step} className="contents">
          <span className="rounded-[99px] border border-[#403b31] px-[14px] py-3 text-[11px] font-extrabold tracking-[.12em]">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <i className="bg-p-gold max-b650:w-4 h-px w-[35px]" />
          ) : null}
        </span>
      ))}
    </div>
  );
}

/** `.policy-graphic` — three stat panels, used by the five policy updates. */
export function PolicyGraphic({
  facts,
}: {
  facts: { label: string; value: string; note: React.ReactNode }[];
}) {
  return (
    <div
      className={`${GRAPHIC_BASE} max-b700:grid-cols-1 grid min-h-[320px] grid-cols-3 gap-px overflow-hidden bg-[radial-gradient(circle_at_82%_15%,rgba(223,186,100,.25),transparent_24%),linear-gradient(145deg,#0a0a09,#292316)] !p-px`}
    >
      {facts.map(fact => (
        <div
          key={fact.label}
          className="flex min-h-[155px] flex-col justify-end bg-[rgba(15,15,13,.92)] p-[30px]"
        >
          <small className="text-p-gold2 text-[9px] font-black tracking-[.16em]">
            {fact.label}
          </small>
          <strong className="my-[10px] text-[clamp(30px,4vw,55px)] leading-[.95] tracking-[-.055em]">
            {fact.value}
          </strong>
          <span className="text-[11px] leading-[1.5] text-[#aaa69d]">
            {fact.note}
          </span>
        </div>
      ))}
    </div>
  );
}

/** `.data-graphic` shell — dark panel with a title row. */
function DataGraphic({
  label,
  heading,
  className = '',
  ariaLabel,
  children,
}: {
  label: string;
  heading: string;
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`mb-[70px] min-h-[170px] overflow-hidden rounded-[26px] p-[30px] text-white ${
        className ||
        'bg-[radial-gradient(circle_at_90%_0%,rgba(223,186,100,.16),transparent_30%),#11110f]'
      }`}
    >
      <div className="max-b480:block mb-[25px] flex items-end justify-between gap-5">
        <span className="text-p-gold2 text-[9px] font-black tracking-[.16em]">
          {label}
        </span>
        <strong className="max-b480:mt-[10px] max-b480:text-left max-w-[340px] text-right text-xl leading-[1.05] tracking-[-.035em]">
          {heading}
        </strong>
      </div>
      {children}
    </div>
  );
}

const CELL =
  'flex flex-col justify-between border p-[14px] max-b700:min-h-[110px]';

/** `.utm-flow` */
export function UtmGraphic({
  fields,
}: {
  fields: { param: string; value: string; note: string; accent?: boolean }[];
}) {
  return (
    <DataGraphic
      label="CAMPAIGN URL"
      heading="One naming contract. Cleaner reporting."
      ariaLabel="UTM naming architecture showing source, medium, campaign, content and term as separate reporting controls"
    >
      <div className="max-b700:grid-cols-2 max-b480:grid-cols-1 grid grid-cols-5 gap-[7px]">
        {fields.map(field => (
          <div
            key={field.param}
            className={`${CELL} min-h-[135px] px-[14px] py-[17px] ${
              field.accent
                ? 'border-p-gold bg-[rgba(201,152,44,.14)]'
                : 'border-[#413b30] bg-white/[.03]'
            }`}
          >
            <b className="text-[9px] tracking-[.08em] [overflow-wrap:anywhere] text-[#aaa69d]">
              {field.param}
            </b>
            <strong className="text-[15px] leading-[1.1] [overflow-wrap:anywhere] text-white">
              {field.value}
            </strong>
            <small className="text-[10px] leading-[1.35] text-[#77736b]">
              {field.note}
            </small>
          </div>
        ))}
      </div>
    </DataGraphic>
  );
}

/** `.feed-grid` */
export function FeedGraphic({
  cells,
}: {
  cells: { num: string; title: string; note: string; accent?: boolean }[];
}) {
  return (
    <DataGraphic
      label="FEED HEALTH / FIVE CONTROL POINTS"
      heading="Eligibility is a data-quality problem."
      ariaLabel="Five product feed control points: stable identity, truthful title, product-only description, crawlable image, and price and availability parity"
    >
      <div className="max-b700:grid-cols-2 max-b480:grid-cols-1 grid grid-cols-5 gap-[7px]">
        {cells.map(cell => (
          <div
            key={cell.num}
            className={`${CELL} min-h-[150px] px-[14px] py-[18px] ${
              cell.accent
                ? 'border-p-gold bg-[rgba(201,152,44,.14)]'
                : 'border-[#413b30] bg-white/[.03]'
            }`}
          >
            <i className="text-p-gold2 text-[11px] font-black not-italic">
              {cell.num}
            </i>
            <b className="text-base leading-[1.05]">{cell.title}</b>
            <span className="text-[11px] leading-[1.4] text-[#aaa69d]">
              {cell.note}
            </span>
          </div>
        ))}
      </div>
    </DataGraphic>
  );
}

/** `.landed-graphic` — a proportional cost stack. */
export function LandedGraphic({
  parts,
  totalLabel,
  total,
}: {
  parts: {
    key: string;
    grow: string;
    bg: string;
    text?: string;
    amount: string;
    label: string;
  }[];
  totalLabel: string;
  total: string;
}) {
  return (
    <DataGraphic
      label="ILLUSTRATIVE COST STACK / USD PER UNIT"
      heading="Margin is decided before the product arrives."
      className="bg-[linear-gradient(145deg,#0d0d0b,#282117)]"
      ariaLabel="Illustrative landed cost stack showing unit cost, origin charges, freight and insurance, duty and tax, destination fees, and returns reserve"
    >
      <div className="max-b700:min-h-[175px] max-b480:min-h-[250px] flex min-h-[145px] items-stretch gap-[3px]">
        {parts.map(part => (
          <div
            key={part.key}
            style={{ flexGrow: Number(part.grow), flexBasis: 0 }}
            className={`max-b700:px-[7px] max-b700:py-3 flex min-w-0 flex-col justify-between px-[10px] py-[15px] ${part.bg} ${
              part.text ?? ''
            }`}
          >
            <strong className="max-b480:text-[18px] text-[clamp(18px,3vw,29px)] tracking-[-.05em]">
              {part.amount}
            </strong>
            <small
              className={`max-b700:text-[8px] text-[9px] leading-[1.2] font-black ${
                part.text ? 'text-[#ddd4c5]' : 'text-[rgba(17,17,15,.78)]'
              }`}
            >
              {part.label}
            </small>
          </div>
        ))}
      </div>
      <div className="mt-[14px] flex justify-between gap-5 border-t border-[#5d513d] pt-[14px] text-[11px] text-[#aaa69d]">
        <span>{totalLabel}</span>
        <strong className="text-p-gold2 text-lg">{total}</strong>
      </div>
    </DataGraphic>
  );
}

/** `.score-rows` — the weighted 3PL scorecard. */
export function ScorecardGraphic({
  rows,
  note,
}: {
  rows: { name: string; weight: string; fill: string; detail: string }[];
  note: string;
}) {
  return (
    <DataGraphic
      label="ILLUSTRATIVE WEIGHTED SCORECARD"
      heading="Choose the partner that protects the promise."
      ariaLabel="Illustrative 3PL scorecard with weighted categories for reliability, inventory control, systems, cost transparency and resilience"
    >
      <div className="grid gap-[9px]">
        {rows.map(row => (
          <div
            key={row.name}
            className="max-b700:grid-cols-[1fr_.35fr_1.15fr] max-b480:grid-cols-[1fr_.35fr] grid grid-cols-[1.05fr_.35fr_1.35fr_1.1fr] items-center gap-[10px]"
          >
            <b className="text-xs">{row.name}</b>
            <span className="text-p-gold2 text-[11px] font-black">
              {row.weight}
            </span>
            <div className="max-b480:col-span-full h-2 overflow-hidden bg-[#37332b]">
              <i
                style={{ width: row.fill }}
                className="block h-full bg-[linear-gradient(90deg,var(--color-p-gold),var(--color-p-gold2))]"
              />
            </div>
            <small className="max-b700:col-span-full text-[10px] text-[#aaa69d]">
              {row.detail}
            </small>
          </div>
        ))}
      </div>
      <div className="mt-5 text-[10px] text-[#77736b]">{note}</div>
    </DataGraphic>
  );
}

/** `.passport-map` — the DPP lifecycle diagram. */
export function PassportGraphic({
  nodes,
}: {
  nodes: { label: string; lines: [string, string] }[];
}) {
  return (
    <DataGraphic
      label="DPP DATA LIFECYCLE"
      heading="One product identity. Several trusted views."
      className="bg-[radial-gradient(circle_at_50%_45%,rgba(201,152,44,.2),transparent_22%),#11110f]"
      ariaLabel="Digital Product Passport data lifecycle from design and supplier evidence through product use, repair and end of life"
    >
      <div className="max-b700:grid-cols-2 max-b480:grid-cols-1 grid grid-cols-4 items-stretch gap-[9px]">
        <div className="border-p-gold max-b480:col-auto col-span-full flex h-[90px] w-[150px] flex-col items-center justify-center justify-self-center rounded-[50%] border bg-[#201b12]">
          <strong className="text-p-gold2 text-[27px] tracking-[-.05em]">
            DPP
          </strong>
          <span className="text-center text-[10px] leading-[1.15] text-[#aaa69d]">
            product
            <br />
            identity
          </span>
        </div>
        {nodes.map(node => (
          <div
            key={node.label}
            className="flex min-h-[110px] flex-col justify-between border border-[#413b30] bg-white/[.03] px-[13px] py-4"
          >
            <b className="text-p-gold2 text-[9px] tracking-[.1em]">
              {node.label}
            </b>
            <span className="text-[13px] leading-[1.25] text-[#aaa69d]">
              {node.lines[0]}
              <br />
              {node.lines[1]}
            </span>
          </div>
        ))}
      </div>
    </DataGraphic>
  );
}
