import { HomeButton } from './Button';
import { Reveal } from './Reveal';
import { WorkCardGrid } from '@/components/site/WorkCards';
import { CASE_STUDIES } from '@/lib/caseStudies';

/** `.case-studies-home` — the three-card proof band. */
export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="min-h-view border-line px-pad max-b620:px-6 max-b620:py-[60px] short:py-7 flex flex-col justify-center border-y bg-[linear-gradient(180deg,#f6f1e7_0%,#fbfaf6_100%)] py-11"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        02 / CASE STUDIES
      </div>

      <Reveal className="max-b900:grid-cols-1 short:mt-1 short:mb-4 mt-3 mb-7 grid grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] items-end gap-[54px]">
        <div>
          <h2 className="short:text-[40px] m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
            Work you can
            <br />
            <span className="text-gold">trace to evidence.</span>
          </h2>
        </div>
        <div>
          <p className="text-muted m-0 mb-5 max-w-[620px] leading-[1.75]">
            We publish what we can substantiate. Explore how MettGlobal connects
            strategy, creative, digital systems, automation and on-ground
            execution around real client problems.
          </p>
          <HomeButton href="/portfolio" variant="ghost">
            View full portfolio
          </HomeButton>
        </div>
      </Reveal>

      <WorkCardGrid items={CASE_STUDIES} />
    </section>
  );
}
