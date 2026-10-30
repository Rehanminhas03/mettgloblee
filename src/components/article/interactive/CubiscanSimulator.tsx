'use client';

import { useId, useState } from 'react';

export function CubiscanSimulator() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(3500);
  const [feeDelta, setFeeDelta] = useState<number>(1.42); // Average fee overcharge per unit
  const sliderId = useId();

  // 90-day lookback window (3 months of orders)
  const totalUnitsInWindow = monthlyUnits * 3;
  const totalOvercharge = totalUnitsInWindow * feeDelta;

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-amber-500/40 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Interactive Fee Reversal Model
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Cubiscan Size-Tier Overcharge Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">90-Day Statutory Lookback</span>
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-2">
            <label htmlFor={sliderId}>Monthly FBA Order Volume</label>
            <span className="text-p-gold font-extrabold">{monthlyUnits.toLocaleString()} Orders / Mo</span>
          </div>
          <input
            id={sliderId}
            type="range"
            min={1000}
            max={20000}
            step={500}
            value={monthlyUnits}
            onChange={e => setMonthlyUnits(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#787267] mt-1 font-mono">
            <span>1,000 orders</span>
            <span>10,000</span>
            <span>20,000 orders</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-2">
            <span>Reclassified Tier Fee Surcharge</span>
            <span className="text-amber-400 font-extrabold">+${feeDelta.toFixed(2)} / unit</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Minor (+$0.85)', val: 0.85 },
              { label: 'Standard (+$1.42)', val: 1.42 },
              { label: 'Oversize (+$2.65)', val: 2.65 },
            ].map(tier => (
              <button
                key={tier.val}
                type="button"
                onClick={() => setFeeDelta(tier.val)}
                className={`rounded-lg py-2 px-1 text-[11px] font-black transition-all cursor-pointer text-center whitespace-nowrap [overflow-wrap:normal] ${
                  feeDelta === tier.val
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'border border-[#383329] bg-[#211e18] text-[#c4beb1] hover:text-white'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Output */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-4 text-center">
          <span className="text-[10px] text-[#8a857b] block uppercase">Orders in 90-Day Window</span>
          <span className="text-xl font-black text-white mt-1 block">{totalUnitsInWindow.toLocaleString()} Units</span>
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 text-center">
          <span className="text-[10px] text-rose-300 block uppercase">Monthly Profit Drain</span>
          <span className="text-xl font-black text-rose-400 mt-1 block">
            -${(monthlyUnits * feeDelta).toLocaleString(undefined, { maximumFractionDigits: 0 })} / mo
          </span>
        </div>
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-center">
          <span className="text-[10px] text-emerald-300 block uppercase">Recoverable Cash Reimbursement</span>
          <span className="text-2xl font-black text-emerald-400 mt-1 block">
            +${totalOvercharge.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-[#161410] p-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c4beb1] gap-3">
        <span>
          <strong>Amazon 90-Day Policy Rule:</strong> Discrepancies older than 90 days are permanently locked and cannot be claimed.
        </span>
        <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 font-bold text-[10px] uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
          Zero Bot Risk · Human Verified
        </span>
      </div>
    </div>
  );
}
