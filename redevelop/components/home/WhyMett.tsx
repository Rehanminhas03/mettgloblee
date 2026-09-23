import { Reveal } from './Reveal';

const REASONS = [
  {
    num: '01',
    title: 'Founder-led direction',
    copy: 'Commercial decisions, positioning and priorities stay close to MettGlobal leadership instead of disappearing into layers of account management.',
  },
  {
    num: '02',
    title: 'One connected team',
    copy: 'Growth, commerce, web, AI, creative, sales and operations can work as one system when the engagement requires it.',
  },
  {
    num: '03',
    title: 'Built around the constraint',
    copy: 'We start with the business problem and assemble the right capability mix instead of forcing every client into the same package.',
  },
  {
    num: '04',
    title: 'Proof over theatre',
    copy: 'We separate verified work from ambition, define useful KPIs and avoid performance claims we cannot substantiate.',
  },
];

const ENGAGEMENTS = [
  {
    label: 'AUDIT',
    copy: 'Focused diagnosis, opportunity map and prioritized recommendations.',
  },
  {
    label: 'PROJECT',
    copy: 'Defined build, campaign, launch, migration or operational improvement.',
  },
  {
    label: 'RETAINER',
    copy: 'Ongoing execution, optimization, reporting and growth support.',
  },
  {
    label: 'EMBEDDED SUPPORT',
    copy: 'Specialist capacity integrated into an existing client team or workflow.',
  },
];

/** `.why-mett` — reasons grid plus the engagement-model panel. */
export function WhyMett() {
  return (
    <section className="px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] relative overflow-hidden bg-[#f0ede5] py-[110px] before:pointer-events-none before:absolute before:top-[-220px] before:right-[-220px] before:h-[540px] before:w-[540px] before:rounded-full before:border before:border-[rgba(184,137,45,.18)] before:shadow-[0_0_0_70px_rgba(184,137,45,.025),0_0_0_140px_rgba(184,137,45,.018)] before:content-['']">
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        05 / WHY METTGLOBAL
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b560:mb-10 max-b560:mt-9 max-b560:gap-6 relative z-[1] mt-[55px] mb-[60px] grid grid-cols-[1.25fr_.75fr] items-end gap-[60px]">
        <h2 className="m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.055em]">
          Senior attention.
          <br />
          <span className="text-gold">Connected execution.</span>
        </h2>
        <p className="text-muted max-w-[560px] leading-[1.75]">
          Leading international agencies make their difference obvious before
          asking for a brief. Ours is simple: commercial ownership stays close
          to the founders while specialist delivery flexes around the problem.
        </p>
      </Reveal>

      <div className="max-b900:grid-cols-2 max-b560:grid-cols-1 relative z-[1] grid grid-cols-4 border-y border-[#cfc7b8]">
        {REASONS.map((reason, index) => (
          <Reveal
            key={reason.num}
            as="article"
            className={`max-b560:min-h-[230px] max-b560:border-r-0 flex min-h-[310px] flex-col border-r border-[#cfc7b8] px-7 py-8 transition-[transform,background] duration-[.35s] hover:-translate-y-[5px] hover:bg-white/50 ${
              index === REASONS.length - 1 ? 'border-r-0' : ''
            } ${index === 1 ? 'max-b900:border-r-0' : ''}`}
          >
            <b className="text-gold text-[11px] tracking-[.18em]">
              {reason.num}
            </b>
            <h3 className="mt-auto mb-[14px] text-[27px] tracking-[-.035em]">
              {reason.title}
            </h3>
            <p className="text-muted text-sm leading-[1.65]">{reason.copy}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:p-[34px] max-b560:gap-8 max-b560:rounded-[22px] max-b560:p-[26px] relative z-[1] mt-[70px] grid grid-cols-[.7fr_1.3fr] gap-[60px] rounded-[30px] bg-black p-12 text-white shadow-[0_35px_100px_rgba(25,20,10,.14)]">
        <div>
          <span className="text-gold2 text-[10px] font-extrabold tracking-[.2em]">
            WAYS TO WORK WITH US
          </span>
          <h3 className="mt-[18px] mb-0 max-w-[430px] text-[clamp(30px,3.6vw,52px)] leading-none tracking-[-.045em]">
            Start at the size the problem deserves.
          </h3>
        </div>
        <div className="max-b560:grid-cols-1 grid grid-cols-2 border-t border-l border-[#34332f]">
          {ENGAGEMENTS.map(option => (
            <article
              key={option.label}
              className="border-r border-b border-[#34332f] p-6"
            >
              <b className="text-gold2 text-[11px] tracking-[.16em]">
                {option.label}
              </b>
              <p className="mt-[10px] mb-0 text-[13px] leading-[1.55] text-[#aaa69d]">
                {option.copy}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
