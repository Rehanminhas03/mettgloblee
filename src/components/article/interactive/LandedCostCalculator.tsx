'use client';

import { useId, useState } from 'react';

export function LandedCostCalculator() {
  const [fobCost, setFobCost] = useState<number>(14.5);
  const [freightPerUnit, setFreightPerUnit] = useState<number>(2.8);
  const [dutyRate, setDutyRate] = useState<number>(0.075); // 7.5% customs duty
  const [fbaFee, setFbaFee] = useState<number>(5.65);
  const [retailPrice, setRetailPrice] = useState<number>(42);
  const sliderId = useId();

  // Calculations
  const dutyAmount = fobCost * dutyRate;
  const landedDlvCost = fobCost + freightPerUnit + dutyAmount + fbaFee;
  const grossProfit = retailPrice - landedDlvCost;
  const grossMargin = (grossProfit / retailPrice) * 100;

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 text-p-gold border border-p-gold/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Interactive Cross-Border Model
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            True Landed Cost & Net Margin Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">Full Landed Cost Engine</span>
        </div>
      </div>

      {/* Simulator Inputs */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <span>FOB Factory Unit Cost</span>
            <span className="text-p-gold font-extrabold">${fobCost.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={5}
            max={50}
            step={0.5}
            value={fobCost}
            onChange={e => setFobCost(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <span>Ocean / Air Freight per Unit</span>
            <span className="text-p-gold font-extrabold">${freightPerUnit.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={15}
            step={0.2}
            value={freightPerUnit}
            onChange={e => setFreightPerUnit(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={sliderId}>Target Retail Selling Price</label>
            <span className="text-emerald-400 font-extrabold">${retailPrice.toFixed(2)}</span>
          </div>
          <input
            id={sliderId}
            type="range"
            min={20}
            max={120}
            step={1}
            value={retailPrice}
            onChange={e => setRetailPrice(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
        </div>
      </div>

      {/* Waterfall Breakdown Output */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-3">
          <span className="text-[9px] text-[#8a857b] uppercase block">US Customs Duty</span>
          <span className="text-base font-bold text-white mt-1 block">${dutyAmount.toFixed(2)}</span>
        </div>
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-3">
          <span className="text-[9px] text-[#8a857b] uppercase block">FBA Fulfillment</span>
          <span className="text-base font-bold text-white mt-1 block">${fbaFee.toFixed(2)}</span>
        </div>
        <div className="rounded-xl border border-p-gold/40 bg-[#1c1811] p-3">
          <span className="text-[9px] text-p-gold uppercase block">True Landed Cost</span>
          <span className="text-lg font-black text-white mt-1 block">${landedDlvCost.toFixed(2)}</span>
        </div>
        <div className={`rounded-xl border p-3 ${
          grossMargin >= 30
            ? 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300'
            : 'border-rose-500/40 bg-rose-950/30 text-rose-300'
        }`}>
          <span className="text-[9px] uppercase block">Net Margin %</span>
          <span className="text-lg font-black mt-1 block">{grossMargin.toFixed(1)}%</span>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-[#161410] p-4 text-xs text-[#c4beb1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span>Target Benchmark: Healthy cross-border operations mandate a minimum <strong>30% Net Margin</strong> post-landed cost.</span>
        <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] text-white whitespace-nowrap shrink-0 [overflow-wrap:normal]">
          {grossMargin >= 30 ? '✓ Margin Protected' : '⚠ Margin Compression Alert'}
        </span>
      </div>
    </div>
  );
}
