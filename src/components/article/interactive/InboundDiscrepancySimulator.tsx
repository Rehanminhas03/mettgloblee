'use client';

import { useId, useState } from 'react';

export function InboundDiscrepancySimulator() {
  const [annualUnits, setAnnualUnits] = useState<number>(120000);
  const [unitValue, setUnitValue] = useState<number>(45);
  const [discrepancyRate, setDiscrepancyRate] = useState<number>(1.8);

  // Evidence Checklist toggles
  const [hasBol, setHasBol] = useState<boolean>(true);
  const [hasInvoice, setHasInvoice] = useState<boolean>(true);
  const [hasPackingList, setHasPackingList] = useState<boolean>(true);
  const [hasAppointment, setHasAppointment] = useState<boolean>(true);

  const unitsSliderId = useId();
  const valueSliderId = useId();
  const rateSliderId = useId();

  // Calculations
  const missingUnitsYear = Math.round(annualUnits * (discrepancyRate / 100));
  const missingUnitsLookback = missingUnitsYear; // Annualized eligible discrepancy pool
  const annualLoss = missingUnitsYear * unitValue;
  const lookbackLoss = missingUnitsLookback * unitValue;

  // Win probability score
  let winRate = 10; // Baseline bot claim without documents
  if (hasBol) winRate += 35;
  if (hasInvoice) winRate += 25;
  if (hasPackingList) winRate += 15;
  if (hasAppointment) winRate += 10;

  const estimatedRecovery = Math.round(lookbackLoss * (winRate / 100));

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 text-p-gold border border-p-gold/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Interactive Claims Audit
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Inbound Receiving Discrepancy & Capital Recovery Calculator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">Carrier Dossier Verification</span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={unitsSliderId}>Annual Inbound Units</label>
            <span className="text-p-gold font-extrabold">{annualUnits.toLocaleString()} units</span>
          </div>
          <input
            id={unitsSliderId}
            type="range"
            min={20000}
            max={500000}
            step={10000}
            value={annualUnits}
            onChange={e => setAnnualUnits(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="text-[10px] text-[#8e897e] mt-1 font-mono">FBA gross volume delivered to FCs</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={valueSliderId}>Average Unit Value</label>
            <span className="text-p-gold font-extrabold">${unitValue}</span>
          </div>
          <input
            id={valueSliderId}
            type="range"
            min={15}
            max={200}
            step={5}
            value={unitValue}
            onChange={e => setUnitValue(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="text-[10px] text-[#8e897e] mt-1 font-mono">Amazon fair replacement value</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={rateSliderId}>Dock Shortage Rate</label>
            <span className="text-p-gold font-extrabold">{discrepancyRate.toFixed(1)}%</span>
          </div>
          <input
            id={rateSliderId}
            type="range"
            min={0.5}
            max={4.0}
            step={0.1}
            value={discrepancyRate}
            onChange={e => setDiscrepancyRate(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="text-[10px] text-[#8e897e] mt-1 font-mono">Industry average: 1.2% – 2.8%</div>
        </div>
      </div>

      {/* Dossier Checklist Matrix */}
      <div className="my-6 rounded-2xl bg-[#13110d] p-5 border border-[#2b271f]">
        <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ded8cb]">
            Evidence Dossier Preparation Level
          </span>
          <span className="text-xs font-mono text-p-gold font-bold">
            Approval Probability: <span className={winRate >= 80 ? 'text-emerald-400 font-extrabold' : 'text-amber-400 font-extrabold'}>{winRate}%</span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            type="button"
            onClick={() => setHasBol(!hasBol)}
            className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all cursor-pointer ${
              hasBol
                ? 'border-emerald-500/50 bg-emerald-950/20 text-white'
                : 'border-[#2c2820] bg-[#1a1712] text-[#8e897e]'
            }`}
          >
            <span className={`text-base leading-none ${hasBol ? 'text-emerald-400' : 'text-[#555]'}`}>
              {hasBol ? '✓' : '○'}
            </span>
            <div>
              <div className="text-xs font-bold">FC Stamped BOL / POD</div>
              <div className="text-[10px] text-[#a39e93] leading-tight mt-0.5">Signed freight bill with Amazon stamp</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setHasInvoice(!hasInvoice)}
            className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all cursor-pointer ${
              hasInvoice
                ? 'border-emerald-500/50 bg-emerald-950/20 text-white'
                : 'border-[#2c2820] bg-[#1a1712] text-[#8e897e]'
            }`}
          >
            <span className={`text-base leading-none ${hasInvoice ? 'text-emerald-400' : 'text-[#555]'}`}>
              {hasInvoice ? '✓' : '○'}
            </span>
            <div>
              <div className="text-xs font-bold">Commercial PO Invoice</div>
              <div className="text-[10px] text-[#a39e93] leading-tight mt-0.5">Itemized invoice + cleared wire receipt</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setHasPackingList(!hasPackingList)}
            className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all cursor-pointer ${
              hasPackingList
                ? 'border-emerald-500/50 bg-emerald-950/20 text-white'
                : 'border-[#2c2820] bg-[#1a1712] text-[#8e897e]'
            }`}
          >
            <span className={`text-base leading-none ${hasPackingList ? 'text-emerald-400' : 'text-[#555]'}`}>
              {hasPackingList ? '✓' : '○'}
            </span>
            <div>
              <div className="text-xs font-bold">Carton Packing List</div>
              <div className="text-[10px] text-[#a39e93] leading-tight mt-0.5">SKU level pallet/box weight counts</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setHasAppointment(!hasAppointment)}
            className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all cursor-pointer ${
              hasAppointment
                ? 'border-emerald-500/50 bg-emerald-950/20 text-white'
                : 'border-[#2c2820] bg-[#1a1712] text-[#8e897e]'
            }`}
          >
            <span className={`text-base leading-none ${hasAppointment ? 'text-emerald-400' : 'text-[#555]'}`}>
              {hasAppointment ? '✓' : '○'}
            </span>
            <div>
              <div className="text-xs font-bold">Amazon ISA Appointment</div>
              <div className="text-[10px] text-[#a39e93] leading-tight mt-0.5">Carrier Central appointment reference</div>
            </div>
          </button>
        </div>
      </div>

      {/* Output Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-4">
          <div className="text-[10px] font-mono tracking-wider text-[#a39e93] uppercase">Annual Unscanned Units</div>
          <div className="mt-1 text-2xl font-black text-rose-400 font-mono">
            {missingUnitsYear.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#77736b] mt-0.5">Lost on dock annually</div>
        </div>

        <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-4">
          <div className="text-[10px] font-mono tracking-wider text-[#a39e93] uppercase">Annual Discrepancy Loss</div>
          <div className="mt-1 text-2xl font-black text-rose-400 font-mono">
            ${annualLoss.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#77736b] mt-0.5">Uncredited capital bleed</div>
        </div>

        <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-4">
          <div className="text-[10px] font-mono tracking-wider text-[#a39e93] uppercase">Eligible Discrepancy Pool</div>
          <div className="mt-1 text-2xl font-black text-white font-mono">
            ${lookbackLoss.toLocaleString()}
          </div>
          <div className="text-[10px] text-p-gold mt-0.5">Active dispute window</div>
        </div>

        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-4">
          <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">Projected Net Recovery</div>
          <div className="mt-1 text-2xl font-black text-emerald-400 font-mono">
            ${estimatedRecovery.toLocaleString()}
          </div>
          <div className="text-[10px] text-emerald-300 mt-0.5">Direct to Seller balance</div>
        </div>
      </div>

      {/* Urgency note */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-[#14120e] px-4 py-3 border border-white/5 text-xs text-[#a39e93]">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">⚠️ Strict Window Notice:</span>
          <span>Amazon claims reconciliation closes after category-specific windows (60–90 days). Once closed, missing units are written off permanently.</span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-p-gold font-bold">Contingency Recovery Model</span>
      </div>
    </div>
  );
}
