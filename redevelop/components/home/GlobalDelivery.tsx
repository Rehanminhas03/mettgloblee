import { Reveal } from './Reveal';

/** `.global` — copy beside the abstract delivery map. */
export function GlobalDelivery() {
  return (
    <section className="bg-ink px-pad max-b900:min-h-0 max-b900:grid-cols-1 max-b900:gap-8 max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] grid min-h-[700px] grid-cols-[.8fr_1.2fr] items-center gap-[60px] overflow-hidden py-[110px] text-white">
      <Reveal>
        <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
          09 / GLOBAL DELIVERY
        </div>
        <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.065em]">
          Built in Pakistan.
          <br />
          <span className="text-gold font-serif font-normal">
            Designed to work anywhere.
          </span>
        </h2>
        <p className="max-w-[650px] text-[18px] leading-[1.75] text-[#a6a299]">
          Remote-first collaboration, international eCommerce experience and a
          U.S. business-development presence allow MettGlobal to work across
          time zones without losing direct access to the people doing the work.
        </p>
      </Reveal>

      {/* .map-art — three nested circles with two glowing routes */}
      <div
        aria-hidden="true"
        className="max-b900:h-[360px] relative h-[520px] rounded-full border border-[#2d2b27] bg-[radial-gradient(circle_at_center,rgba(184,137,45,0.1),transparent_60%)] before:absolute before:inset-[12%] before:rounded-full before:border before:border-[#282620] before:content-[''] after:absolute after:inset-[27%] after:rounded-full after:border after:border-[#282620] after:content-['']"
      >
        <div className="absolute top-1/2 left-[20%] h-px w-[70%] origin-left -rotate-[20deg] bg-[linear-gradient(90deg,transparent,var(--color-gold2),transparent)]" />
        <div className="absolute top-[40%] left-[35%] h-px w-[55%] origin-left rotate-[28deg] bg-[linear-gradient(90deg,transparent,var(--color-gold2),transparent)]" />

        <div className="bg-gold2 absolute top-[56%] left-[58%] h-3 w-3 rounded-full shadow-[0_0_0_8px_rgba(224,188,104,0.08),0_0_30px_var(--color-gold)]" />
        <div className="bg-gold2 absolute top-[35%] left-[22%] h-3 w-3 rounded-full shadow-[0_0_0_8px_rgba(224,188,104,0.08),0_0_30px_var(--color-gold)]" />
        <div className="bg-gold2 absolute top-[26%] right-[18%] h-3 w-3 rounded-full shadow-[0_0_0_8px_rgba(224,188,104,0.08),0_0_30px_var(--color-gold)]" />

        <span className="absolute top-[59%] left-[61%] text-[9px] tracking-[.16em] text-[#aaa]">
          PAKISTAN
        </span>
        <span className="absolute top-[30%] left-[13%] text-[9px] tracking-[.16em] text-[#aaa]">
          USA
        </span>
        <span className="absolute top-[20%] right-[8%] text-[9px] tracking-[.16em] text-[#aaa]">
          GLOBAL
        </span>
      </div>
    </section>
  );
}
