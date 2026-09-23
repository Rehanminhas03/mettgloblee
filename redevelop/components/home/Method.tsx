import { HomeButton } from './Button';
import { Reveal } from './Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Diagnose',
    copy: 'We review the business, channel, funnel or operation and identify the constraint that matters most.',
  },
  {
    num: '02',
    title: 'Design',
    copy: 'We define scope, priorities, ownership, success measures and the execution path.',
  },
  {
    num: '03',
    title: 'Execute',
    copy: 'The relevant specialists build, launch, manage or optimize the agreed work.',
  },
  {
    num: '04',
    title: 'Measure',
    copy: 'KPIs are tied to the engagement: leads, conversion, speed, inventory health, operational time saved or other agreed measures.',
  },
  {
    num: '05',
    title: 'Improve',
    copy: 'We use what the data and operating reality show to prioritize the next iteration.',
  },
];

/** `.method` — sticky intro beside the numbered delivery steps. */
export function Method() {
  return (
    <section className="bg-paper px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] py-[110px]">
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        06 / HOW WE WORK
      </div>

      <div className="max-b900:grid-cols-1 max-b900:gap-8 mt-[55px] grid grid-cols-[.8fr_1.2fr] gap-[100px]">
        <Reveal className="max-b900:static sticky top-[150px] h-max">
          <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,5vw,78px)] leading-[.92] tracking-[-.065em]">
            Clarity before complexity.
          </h2>
          <p className="text-muted text-[18px] leading-[1.7]">
            Every engagement starts with the problem and ends with a usable
            system.
          </p>
          <HomeButton href="#contact" variant="gold">
            Talk to the team
          </HomeButton>
        </Reveal>

        <div className="border-line border-t">
          {STEPS.map(step => (
            <article
              key={step.num}
              className="border-line grid grid-cols-[70px_1fr] gap-5 border-b py-10"
            >
              <b className="text-gold text-xs">{step.num}</b>
              <div>
                <h3 className="mt-0 mb-[10px] text-[34px]">{step.title}</h3>
                <p className="text-muted m-0 leading-[1.7]">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
