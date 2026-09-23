import { Reveal } from './Reveal';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Outcome before output',
    copy: 'We start with the commercial or operational problem — not a menu of deliverables.',
  },
  {
    num: '02',
    title: 'Specialists, not generalists',
    copy: 'Work is routed to people who understand the channel, platform or operating problem.',
  },
  {
    num: '03',
    title: 'Built for handoff',
    copy: 'Clear systems, documentation and ownership so the work survives beyond launch day.',
  },
];

/** `.manifesto` + `.principles` */
export function Manifesto() {
  return (
    <section className="bg-paper px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] py-[110px]">
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        01 / THE METTGLOBAL MODEL
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-8 my-[55px] mb-20 grid grid-cols-[1.1fr_.9fr] items-end gap-[70px]">
        <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.065em]">
          Not another agency.
          <br />
          <span className="text-gold font-serif font-normal">
            An execution partner.
          </span>
        </h2>
        <p className="text-muted max-w-[650px] text-[18px] leading-[1.75]">
          Growth rarely breaks because a business lacks ideas. It breaks between
          marketing, systems, operations and execution. We connect those pieces.
          The result is a team that can diagnose the bottleneck, design the
          solution and stay close enough to make it work.
        </p>
      </Reveal>

      <div className="border-line max-b900:grid-cols-1 grid grid-cols-3 border-y">
        {PRINCIPLES.map((principle, index) => (
          <article
            key={principle.num}
            className={`max-b900:border-b max-b900:border-line max-b900:border-r-0 px-[34px] py-9 ${
              index === PRINCIPLES.length - 1
                ? 'border-0'
                : 'border-line border-r'
            }`}
          >
            <b className="text-gold text-[11px] tracking-[.18em]">
              {principle.num}
            </b>
            <h3 className="mt-11 mb-[14px] text-[23px]">{principle.title}</h3>
            <p className="text-muted leading-[1.7]">{principle.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
