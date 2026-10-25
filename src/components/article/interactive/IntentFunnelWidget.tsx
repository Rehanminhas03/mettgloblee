'use client';

import { useState } from 'react';

export function IntentFunnelWidget() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stage: 'Step 1: Anonymous IP Signal',
      title: 'US Corporate Visitor Lands on Site',
      stat: '97% Bounce Anonymously',
      desc: 'An enterprise decision-maker at a $25M Chicago logistics firm visits your service pages, reviews pricing, and leaves without submitting a web form.',
      tech: 'Apollo / 6sense Reverse-IP Script',
    },
    {
      stage: 'Step 2: Account De-Anonymization',
      title: 'Domain & Corporate Identification',
      stat: '< 60 Seconds',
      desc: 'The visitor IP resolves to the exact company name, headquarters, employee headcount (85 employees), and intent score based on browsing depth.',
      tech: 'Global Corporate Registry Matching',
    },
    {
      stage: 'Step 3: Multi-Thread Pod Enrichment',
      title: 'Enriching 3 Key Stakeholders',
      stat: '3 Contacts Identified',
      desc: 'Instead of contacting a single person, the system enriches the VP of Operations (workflow pain), CFO (software cost ROI), and Managing Director.',
      tech: 'Verified Corporate Inboxes & Direct Dials',
    },
    {
      stage: 'Step 4: High-Deliverability Diagnostic Outbound',
      title: 'Low-Friction Diagnostic Audit Sent',
      stat: '100% Inbox Placement',
      desc: 'Secondary domain mailboxes with calibrated SPF/DKIM/DMARC deliver a tailored plain-text message offering a complimentary operational audit.',
      tech: 'Custom Tracking CNAMEs & Human Warmup',
    },
    {
      stage: 'Step 5: Qualified Enterprise Meeting',
      title: 'Strategy Consultation Booked',
      stat: 'Zero Ad Waste',
      desc: 'The prospect accepts the diagnostic audit on their terms, booking directly into your calendar without spending $90 per click on Google Search Ads.',
      tech: 'Mett Global Strategic Meeting Engine',
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0c] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-p-gold uppercase">
            Operational Blueprint
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            The 5-Stage Intent-to-Pipeline Funnel
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-[#8a857b]">Click Any Step to Inspect</span>
      </div>

      {/* Interactive Step Timeline */}
      <div className="my-6 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`rounded-xl p-3 text-left border transition-all cursor-pointer ${
                isActive
                  ? 'border-p-gold bg-[#1e1b14] shadow-md ring-1 ring-p-gold'
                  : 'border-[#26231c] bg-[#14120e] hover:border-p-gold/40'
              }`}
            >
              <span className="text-[9px] font-black text-p-gold2 block">{`0${idx + 1}`}</span>
              <span className="text-[11px] font-bold text-white block mt-1 leading-tight">{s.stage.split(':')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="rounded-2xl border border-[#2b271f] bg-[#16130f] p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#24211a] pb-4">
          <div>
            <span className="text-[10px] font-extrabold text-p-gold tracking-widest uppercase">{current.stage}</span>
            <h4 className="text-xl font-bold text-white mt-1">{current.title}</h4>
          </div>
          <div className="rounded-xl border border-p-gold/30 bg-[#1c1912] px-4 py-2 text-right">
            <span className="text-[9px] text-[#8a857b] uppercase block">Benchmark</span>
            <span className="text-base font-black text-emerald-400">{current.stat}</span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-[1.7] text-[#c4beb1]">{current.desc}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-[#8a857b]">
          <span className="font-bold text-white">Technology Stack:</span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-p-gold2">{current.tech}</span>
        </div>
      </div>
    </div>
  );
}
