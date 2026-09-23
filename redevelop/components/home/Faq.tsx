import { Reveal } from './Reveal';

const FAQS = [
  {
    q: 'What does MettGlobal actually do?',
    a: 'We connect growth, eCommerce, web development, AI automation, digital marketing, supply chain, sales systems and content production around a defined business problem.',
  },
  {
    q: 'How does an engagement usually start?',
    a: 'We begin with the constraint: what is not working, what outcome matters and what evidence is available. From there we recommend an audit, project, retainer or embedded-support model.',
  },
  {
    q: 'Do you work with businesses outside Pakistan?',
    a: 'Yes. MettGlobal is Pakistan-based with international delivery and a U.S. business-development presence. Remote collaboration is built into the operating model.',
  },
  {
    q: 'Can MettGlobal work alongside our existing team or agency?',
    a: 'Yes. We can own a defined workstream, fill a specialist gap or work as embedded support without replacing an existing internal team or partner.',
  },
  {
    q: 'Can we start with an audit before committing to a larger project?',
    a: 'Yes. A focused diagnostic engagement can review a website, funnel, eCommerce operation, workflow or technical area and produce prioritized recommendations before implementation.',
  },
  {
    q: 'How can I book a meeting?',
    a: 'Use the meeting page to choose an online or in-person session, select a preferred date from the calendar and pick a time slot. The request is sent to contact@mettglobal.com and the team confirms availability by email.',
  },
  {
    q: 'How do you measure success?',
    a: 'Measures depend on the work: leads, conversion, response time, inventory accuracy, fulfillment health, process time saved, technical quality or another agreed KPI. We define the measurement before execution.',
  },
  {
    q: 'Do you guarantee rankings, revenue or campaign results?',
    a: 'No responsible provider can guarantee outcomes controlled by markets, platforms or customer behavior. We commit to clear scope, disciplined execution, transparent reporting and agreed performance measures.',
  },
];

/**
 * `.faq` — native `<details>` accordions. The `+` / `−` marker is drawn with
 * `::after`, and the default disclosure triangle is hidden in globals.css.
 */
export function Faq() {
  return (
    <section
      id="faq"
      className="px-pad max-b700:px-6 max-b700:py-[68px] bg-[#eee8dd] py-[100px]"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        10 / FREQUENTLY ASKED QUESTIONS
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-6 my-12 grid grid-cols-[1fr_.7fr] items-end gap-[70px]">
        <h2 className="m-0 text-[clamp(46px,5.5vw,78px)] leading-[.95] tracking-[-.05em]">
          Clear answers.
          <br />
          <span className="text-gold">Before the first call.</span>
        </h2>
        <p className="text-muted leading-[1.75]">
          What clients usually want to know about scope, delivery, meetings,
          collaboration and how MettGlobal works.
        </p>
      </Reveal>

      <div className="border-t border-[#cfc6b5]">
        {FAQS.map(faq => (
          <details key={faq.q} className="group border-b border-[#cfc6b5] p-0">
            <summary className="after:text-gold max-b700:pr-[42px] relative cursor-pointer list-none py-6 pr-12 pl-0 text-[clamp(19px,2vw,27px)] font-extrabold tracking-[-.025em] after:absolute after:top-5 after:right-2 after:text-[30px] after:font-normal after:content-['+'] group-open:after:content-['−']">
              {faq.q}
            </summary>
            <p className="text-muted m-0 max-w-[850px] pr-[50px] pb-[26px] pl-0 leading-[1.75]">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
