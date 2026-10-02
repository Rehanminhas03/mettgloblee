'use client';

import { useId, useState } from 'react';
import { Reveal } from './Reveal';

const FAQS = [
  {
    q: 'What does MettGlobal actually do?',
    a: 'Four things: eCommerce and supply chain operations, performance marketing and social media, web and software development (including custom CRMs), and AI automation and content. We combine them around a defined business problem.',
  },
  {
    q: 'Can you recover Amazon FBA, Walmart WFS and courier claims?',
    a: 'Yes. We file and follow up Amazon FBA reimbursement claims for lost, damaged and returned inventory, Walmart WFS reimbursements, courier and logistics claims for lost or damaged shipments, and audit courier invoices to recover overcharges.',
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
 * Accordion list. Each answer animates open by transitioning its grid row from
 * `0fr` to `1fr`, which slides to the content's natural height without
 * measuring it. One question is open at a time; the marker rotates `+` → `×`.
 */
function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-[#cfc6b5]">
      {FAQS.map((faq, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={faq.q} className="border-b border-[#cfc6b5]">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group hover:text-gold short:py-3 flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-[15px] text-left text-[clamp(16px,1.35vw,19px)] font-extrabold tracking-[-.015em] text-inherit transition-colors duration-300"
              >
                {faq.q}
                <span
                  aria-hidden="true"
                  className={`text-gold grid h-8 w-8 flex-none place-items-center rounded-full border border-[rgba(184,137,45,.35)] text-[22px] leading-none font-normal transition-[transform,background-color] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                    isOpen ? 'rotate-45 bg-[rgba(184,137,45,.1)]' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`text-muted m-0 max-w-[850px] pr-[50px] pb-[18px] text-[15px] leading-[1.7] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${
                    isOpen ? 'translate-y-0' : '-translate-y-2'
                  }`}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** `.faq` — heading on the left, animated accordion on the right. */
export function Faq() {
  return (
    <section
      id="faq"
      className="min-h-view px-pad max-b700:px-6 max-b700:py-[68px] short:py-8 flex flex-col justify-center bg-[#eee8dd] py-14"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        04 / FREQUENTLY ASKED QUESTIONS
      </div>

      <div className="max-b900:grid-cols-1 max-b900:gap-8 mt-4 grid grid-cols-[.75fr_1.25fr] items-start gap-[70px]">
        <Reveal className="max-b900:static sticky top-[120px]">
          <h2 className="short:text-[40px] m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
            Clear answers.
            <br />
            <span className="text-gold">Before the first call.</span>
          </h2>
          <p className="text-muted mt-5 mb-0 leading-[1.75]">
            What clients usually want to know about scope, delivery, meetings,
            collaboration and how MettGlobal works.
          </p>
        </Reveal>

        <FaqList />
      </div>
    </section>
  );
}
