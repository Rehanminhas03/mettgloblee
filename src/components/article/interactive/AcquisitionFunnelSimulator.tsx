'use client';

import { useId, useState } from 'react';

export function AcquisitionFunnelSimulator() {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [cpc, setCpc] = useState<number>(3.2);
  const [cvr, setCvr] = useState<number>(3.5); // 3.5% landing page conversion
  const [fastFollowUp, setFastFollowUp] = useState<boolean>(true); // < 5 min follow-up
  const sliderId = useId();

  // Calculations
  const clicks = Math.floor(adSpend / cpc);
  const leads = Math.floor(clicks * (cvr / 100));
  const closeRate = fastFollowUp ? 0.35 : 0.12; // 35% with <5min SLA vs 12% with delayed follow-up
  const customers = Math.floor(leads * closeRate);
  const blendedCac = customers > 0 ? Math.round(adSpend / customers) : 0;
  const avgDealValue = 2400;
  const pipelineRevenue = customers * avgDealValue;

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 text-p-gold border border-p-gold/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase">
            Interactive Funnel Audit
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Acquisition Chain & Blended CAC Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">Full Chain Diagnostic</span>
        </div>
      </div>

      {/* Simulator Inputs */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={sliderId}>Monthly Paid Media Spend</label>
            <span className="text-p-gold font-extrabold">${adSpend.toLocaleString()}</span>
          </div>
          <input
            id={sliderId}
            type="range"
            min={3000}
            max={50000}
            step={1000}
            value={adSpend}
            onChange={e => setAdSpend(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <span>Landing Page Conversion Rate</span>
            <span className="text-p-gold font-extrabold">{cvr.toFixed(1)}% CVR</span>
          </div>
          <input
            type="range"
            min={1.0}
            max={8.0}
            step={0.5}
            value={cvr}
            onChange={e => setCvr(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-2">
            <span>Sales Follow-Up SLA</span>
            <span className={`font-extrabold ${fastFollowUp ? 'text-emerald-400' : 'text-rose-400'}`}>
              {fastFollowUp ? '< 5 Minutes' : '> 30 Minutes'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFastFollowUp(true)}
              className={`rounded-lg py-1.5 text-xs font-bold transition-all cursor-pointer ${
                fastFollowUp
                  ? 'bg-emerald-500 text-black shadow-md font-black'
                  : 'border border-[#383329] bg-[#211e18] text-[#c4beb1]'
              }`}
            >
              ⚡ Instant &lt; 5m
            </button>
            <button
              type="button"
              onClick={() => setFastFollowUp(false)}
              className={`rounded-lg py-1.5 text-xs font-bold transition-all cursor-pointer ${
                !fastFollowUp
                  ? 'bg-rose-500 text-black shadow-md font-black'
                  : 'border border-[#383329] bg-[#211e18] text-[#c4beb1]'
              }`}
            >
              ⏳ Delayed &gt; 30m
            </button>
          </div>
        </div>
      </div>

      {/* Funnel Flow Metric Outputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-3">
          <span className="text-[9px] text-[#8a857b] uppercase block">Traffic Clicks</span>
          <span className="text-base font-bold text-white mt-1 block">{clicks.toLocaleString()}</span>
        </div>
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-3">
          <span className="text-[9px] text-[#8a857b] uppercase block">Verified Leads</span>
          <span className="text-base font-bold text-white mt-1 block">{leads.toLocaleString()}</span>
        </div>
        <div className="rounded-xl border border-p-gold/40 bg-[#1c1811] p-3">
          <span className="text-[9px] text-p-gold uppercase block">Blended CAC</span>
          <span className="text-xl font-black text-emerald-400 mt-1 block">${blendedCac}</span>
        </div>
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-emerald-300">
          <span className="text-[9px] uppercase block">Closed Revenue</span>
          <span className="text-xl font-black mt-1 block">${pipelineRevenue.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-[#161410] p-4 text-xs text-[#c4beb1] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>
          <strong>Key Audit Finding:</strong> Delayed follow-up (&gt; 30 mins) increases Blended CAC by{' '}
          <strong className="text-rose-400">nearly 300%</strong> even with high-performing ads.
        </span>
        <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 font-mono text-[10px] uppercase shrink-0 text-center">
          {fastFollowUp ? '✓ Optimal SLA' : '⚠ SLA Revenue Decay'}
        </span>
      </div>
    </div>
  );
}
