import { Reveal } from './Reveal';

/**
 * `.logo-wall` — five partner tiles on a six-column grid, so the last two
 * centre themselves under the first three (3 + 2 layout).
 */
const TILE =
  "relative flex min-w-0 flex-col items-center justify-center gap-[14px] overflow-hidden rounded-3xl border border-[rgba(224,188,104,.22)] bg-[#0b0b0a] px-6 py-[42px] text-center text-[27px] font-black leading-none tracking-[-.03em] text-[#d7d3c9] transition-[transform,background,color,box-shadow] duration-[.45s] hover:-translate-y-1 hover:bg-[#11110f] hover:text-gold2 hover:shadow-[inset_0_0_0_1px_rgba(224,188,104,.18),0_24px_70px_rgba(0,0,0,.28)] before:pointer-events-none before:absolute before:inset-px before:bg-[radial-gradient(circle_at_50%_120%,rgba(224,188,104,.16),transparent_58%)] before:opacity-0 before:transition-opacity before:duration-[.45s] before:content-[''] hover:before:opacity-100 max-b700:min-h-[170px] max-b560:px-5 max-b560:py-[34px]";

const NAME =
  'block max-w-full text-[clamp(26px,2.6vw,42px)] font-[750] leading-[1.08] [overflow-wrap:anywhere] max-b560:text-[34px]';
const SUB =
  'm-0 block min-h-[14px] max-w-[220px] text-[10px] leading-[1.2] tracking-[.3em]';

export function Partners() {
  return (
    <section
      id="partners"
      className="px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] bg-[radial-gradient(circle_at_10%_15%,rgba(184,137,45,.09),transparent_24%),radial-gradient(circle_at_90%_75%,rgba(224,188,104,.055),transparent_28%),#070706] py-[110px] text-white"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        04 / SELECTED SERVICE PARTNERS
      </div>

      <Reveal className="max-b900:block mt-[50px] mb-[70px] flex items-end justify-between gap-[50px]">
        <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.065em] [text-wrap:balance]">
          Experience around brands
          <br />
          <span className="text-gold2">people already know.</span>
        </h2>
        <p className="max-w-[650px] text-[18px] leading-[1.75] text-[#9c988f]">
          Selected organizations represented in MettGlobal&rsquo;s published
          service-partner portfolio.
        </p>
      </Reveal>

      <div className="max-b700:grid-cols-1 grid grid-cols-[repeat(6,minmax(0,1fr))] gap-[14px]">
        <div
          className={`${TILE} max-b700:col-span-full col-span-2 min-h-[220px]`}
        >
          <strong className={`${NAME} tracking-[.025em]`}>ITTEHAD STEEL</strong>
          <small className={SUB}>INDUSTRIAL PARTNER</small>
        </div>

        <div
          className={`${TILE} max-b700:col-span-full col-span-2 min-h-[220px]`}
        >
          <strong className={`${NAME} tracking-[-.035em]`}>HYUNDAI</strong>
          <small className={SUB}>ISLAMABAD</small>
        </div>

        {/* .csm — the roundel sits beside the wordmark rather than above it */}
        <div
          className={`${TILE} max-b700:col-span-full col-span-2 min-h-[220px] flex-row gap-[18px]`}
        >
          <b className="flex-none rounded-full border-2 border-current p-[9px] text-[13px]">
            CSM
          </b>
          <span className="text-[11px] leading-[1.15]">
            CAPITAL SMART
            <br />
            MOTORS
          </span>
        </div>

        <div
          className={`${TILE} max-b700:col-span-full max-b700:col-start-auto col-span-2 col-start-2 min-h-[220px] tracking-[.08em]`}
        >
          <strong className={`${NAME} tracking-[.07em]`}>JETOUR ITTEHAD</strong>
          <small className={SUB}>DRIVE YOUR FUTURE</small>
        </div>

        <div
          className={`${TILE} max-b700:col-span-full max-b700:col-start-auto col-span-2 col-start-4 min-h-[220px]`}
        >
          <strong
            className={`${NAME} text-center text-[clamp(22px,2vw,34px)] tracking-[-.02em]`}
          >
            MYTRACKEE PAKISTAN
          </strong>
          <small className={`${SUB} max-w-[190px] text-center leading-[1.45]`}>
            GPS LOCATION &amp; VEHICLE TRACKING PLATFORM
          </small>
        </div>
      </div>

      <p className="mt-5 text-[11px] text-[#77736b]">
        Partner references are presented as service relationships/portfolio
        references, not as claims of endorsement.
      </p>
    </section>
  );
}
