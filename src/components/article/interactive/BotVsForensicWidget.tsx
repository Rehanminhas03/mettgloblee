'use client';

import { useId, useState } from 'react';

export function BotVsForensicWidget() {
  const [discrepancyPool, setDiscrepancyPool] = useState<number>(65000);
  const sliderId = useId();

  const botRecoveryRate = 0.22; // 22% bot win rate
  const forensicRecoveryRate = 0.91; // 91% forensic dossier win rate

  const botRecovered = Math.round(discrepancyPool * botRecoveryRate);
  const forensicRecovered = Math.round(discrepancyPool * forensicRecoveryRate);
  const deltaCash = forensicRecovered - botRecovered;

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 text-p-gold border border-p-gold/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Comparative Discrepancy Audit
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Automated Scraper Bot vs. Forensic Human Reconciliation
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">Amazon ToS Compliance</span>
        </div>
      </div>

      {/* Discrepancy Pool Slider */}
      <div className="my-6 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
          <label htmlFor={sliderId}>Estimated Discrepancy Pool (Active Policy Windows)</label>
          <span className="text-p-gold font-extrabold text-base">${discrepancyPool.toLocaleString()}</span>
        </div>
        <input
          id={sliderId}
          type="range"
          min={10000}
          max={250000}
          step={5000}
          value={discrepancyPool}
          onChange={e => setDiscrepancyPool(Number(e.target.value))}
          className="w-full accent-[#dfba64] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#8e897e] mt-1 font-mono">
          <span>$10,000 (Emerging Brand)</span>
          <span>$250,000+ (High-Volume Enterprise)</span>
        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Automated Bot */}
        <div className="rounded-2xl border border-rose-900/30 bg-[#161212] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-rose-900/20">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                Automated Bot Scraper
              </span>
              <span className="rounded bg-rose-950/80 border border-rose-700/50 px-2 py-0.5 text-[9px] font-black text-rose-300">
                HIGH THRESHOLD RISK
              </span>
            </div>

            <div className="my-4">
              <div className="text-[10px] text-[#9b948a] uppercase font-mono">Realized Recovery (22% Win Rate)</div>
              <div className="text-3xl font-black text-rose-400 font-mono tracking-tight mt-1">
                ${botRecovered.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#a39e93] mt-0.5">
                Leaves ${(discrepancyPool - botRecovered).toLocaleString()} uncollected on the table
              </div>
            </div>

            <ul className="space-y-2 text-xs text-[#c4beb1] border-t border-white/5 pt-3">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span><strong>No Stamped BOLs:</strong> Cannot contact freight dispatchers for signed bills of lading.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span><strong>Zero Invoice Proof:</strong> Fails when Amazon requires cleared wire verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span><strong>Instant Surrender:</strong> Auto-closes upon receiving first automated denial template.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-black">✕</span>
                <span><strong>Account Flagging:</strong> High-velocity ticket scraping risks SP-API throttling.</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-xl bg-rose-950/30 border border-rose-900/30 p-3 text-[11px] text-rose-300">
            ⚠️ Automated scrapers surrender on high-dollar LTL freight claims where proof is mandatory.
          </div>
        </div>

        {/* Right: Forensic Human Reconciliation */}
        <div className="rounded-2xl border border-emerald-500/50 bg-[#0d1612] p-5 flex flex-col justify-between shadow-lg shadow-emerald-950/20">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-emerald-800/30">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Mett Global Forensic Audit
              </span>
              <span className="rounded bg-emerald-950/80 border border-emerald-600/50 px-2 py-0.5 text-[9px] font-black text-emerald-300">
                100% TOS COMPLIANT
              </span>
            </div>

            <div className="my-4">
              <div className="text-[10px] text-[#8ea89a] uppercase font-mono">Realized Recovery (91% Win Rate)</div>
              <div className="text-3xl font-black text-emerald-400 font-mono tracking-tight mt-1">
                ${forensicRecovered.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-300 mt-0.5 font-bold">
                +${deltaCash.toLocaleString()} additional cash recovered vs. bot software
              </div>
            </div>

            <ul className="space-y-2 text-xs text-[#ded8cb] border-t border-white/5 pt-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-black">✓</span>
                <span><strong>Carrier Stamped Proof:</strong> Direct carrier retrieval of stamped BOLs and PRO numbers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-black">✓</span>
                <span><strong>Itemized PO Matching:</strong> Matched manufacturer commercial invoices and bank wire trails.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-black">✓</span>
                <span><strong>Multi-Tier Escalation:</strong> Human case managers review FC dock receiving logs on appeal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-black">✓</span>
                <span><strong>Zero Account Risk:</strong> Strictly manual case management in full compliance with Amazon ToS.</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 p-3 text-[11px] text-emerald-200">
            🛡️ Performance Contingency: Zero upfront fee. Mett Global operates on contingency—fees apply exclusively upon confirmed cash recovery.
          </div>
        </div>
      </div>
    </div>
  );
}
