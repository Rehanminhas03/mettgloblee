'use client';

import { useId, useState } from 'react';

export function PlacementFeeSimulator() {
  const [units, setUnits] = useState<number>(10000);
  const [itemValue, setItemValue] = useState<number>(35);
  const sliderId = useId();

  // Calculations
  const consignmentValue = units * itemValue;

  // Single Destination (Minimal Split)
  const singlePlacementFeePerUnit = 0.24; // Average standard size
  const singlePlacementCost = units * singlePlacementFeePerUnit;
  const singleDockShortageRate = 0.002; // 0.2% minor discrepancy
  const singleShortageCost = consignmentValue * singleDockShortageRate;
  const singleTotalCost = singlePlacementCost + singleShortageCost;

  // Multi-Destination Split (4+ FCs)
  const splitPlacementFee = 0; // Waived / zero fee
  const splitFreightSurcharge = units * 0.16; // Extra LTL multi-stop carrier expense
  const splitDockShortageRate = 0.018; // 1.8% average cross-dock discrepancy
  const splitShortageCost = consignmentValue * splitDockShortageRate;
  const splitTotalCost = splitPlacementFee + splitFreightSurcharge + splitShortageCost;

  const netSavings = splitTotalCost - singleTotalCost;
  const isSingleBetter = netSavings > 0;

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0f0e0c] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-p-gold uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Interactive Financial Model
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Placement Fee vs. Split Discrepancy Calculator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-[#a39e93]">Live 2026 Simulation</span>
        </div>
      </div>

      {/* Controls */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl bg-[#171511] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-2">
            <label htmlFor={sliderId}>Inbound Consignment Size</label>
            <span className="text-p-gold font-extrabold">{units.toLocaleString()} Units</span>
          </div>
          <input
            id={sliderId}
            type="range"
            min={2000}
            max={50000}
            step={1000}
            value={units}
            onChange={e => setUnits(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#787267] mt-1 font-mono">
            <span>2,000 units</span>
            <span>25,000</span>
            <span>50,000 units</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-2">
            <span>Average Retail Unit Value</span>
            <span className="text-p-gold font-extrabold">${itemValue}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[15, 25, 35, 65].map(val => (
              <button
                key={val}
                type="button"
                onClick={() => setItemValue(val)}
                className={`rounded-lg py-1.5 text-xs font-black transition-all cursor-pointer ${
                  itemValue === val
                    ? 'bg-p-gold text-black shadow-md'
                    : 'border border-[#383329] bg-[#211e18] text-[#c4beb1] hover:text-white'
                }`}
              >
                ${val}
              </button>
            ))}
          </div>
          <div className="text-[10px] text-[#787267] mt-2 font-mono">
            Consignment Total: ${(consignmentValue).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Option A: Single Destination */}
        <div className="rounded-2xl border border-[#3b3424] bg-[#14120e] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#ded8cb] tracking-wider uppercase">
                Option A: Single-FC Inbound
              </span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white">Amazon Route</span>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#a8a398]">
                <span>Placement Fee ($0.24/unit):</span>
                <span className="font-bold text-white">${singlePlacementCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-[#a8a398]">
                <span>Dock Shortage Risk (0.2%):</span>
                <span className="font-bold text-white">${singleShortageCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>
          <div className="mt-5 border-t border-[#29251d] pt-3 flex items-center justify-between">
            <span className="text-xs font-bold text-[#c4beb1]">Total Inbound Risk:</span>
            <span className="text-xl font-black text-white">
              ${singleTotalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        {/* Option B: 4+ FC Multi-Split */}
        <div className="rounded-2xl border border-rose-500/30 bg-[#16110f] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#ded8cb] tracking-wider uppercase">
                Option B: 4+ Regional Split
              </span>
              <span className="rounded bg-rose-500/20 text-rose-300 px-2 py-0.5 text-[10px]">Fee Waived</span>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#a8a398]">
                <span>Placement Fee:</span>
                <span className="font-bold text-emerald-400">$0 (Waived)</span>
              </div>
              <div className="flex justify-between text-[#a8a398]">
                <span>LTL Multi-Stop Freight Surcharge:</span>
                <span className="font-bold text-white">+${splitFreightSurcharge.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-[#a8a398]">
                <span>Dock Shortage Risk (~1.8%):</span>
                <span className="font-bold text-rose-400">+${splitShortageCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>
          <div className="mt-5 border-t border-[#29251d] pt-3 flex items-center justify-between">
            <span className="text-xs font-bold text-[#c4beb1]">Total Inbound Risk:</span>
            <span className="text-xl font-black text-rose-300">
              ${splitTotalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>
      </div>

      {/* Strategic Outcome Banner */}
      <div className={`mt-6 rounded-2xl p-4 sm:p-5 border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isSingleBetter
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
          : 'bg-amber-950/40 border-amber-500/40 text-amber-100'
      }`}>
        <div>
          <span className="text-[10px] font-black tracking-widest uppercase">Forensic Recommendation</span>
          <div className="text-base sm:text-lg font-bold">
            {isSingleBetter ? (
              <>Pay Amazon Single-FC Fee: Saves <span className="text-emerald-400 font-extrabold">${netSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> in avoided dock shortages.</>
            ) : (
              <>Split Route Breakeven: Multi-destination is viable on low-ticket commodities.</>
            )}
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold text-white text-center shrink-0 whitespace-nowrap [overflow-wrap:normal]">
          {isSingleBetter ? 'Single-FC Outperforms' : 'Evaluate Freight Density'}
        </span>
      </div>
    </div>
  );
}
