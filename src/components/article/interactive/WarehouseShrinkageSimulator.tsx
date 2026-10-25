'use client';

import { useId, useState } from 'react';

export function WarehouseShrinkageSimulator() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(30000);
  const [unitValue, setUnitValue] = useState<number>(40);
  const [damageRate, setDamageRate] = useState<number>(0.6); // Codes E & M
  const [transferLossRate, setTransferLossRate] = useState<number>(0.4); // Codes D & P
  const [unreturnedRate, setUnreturnedRate] = useState<number>(1.2); // Customer refund not returned in 45 days

  const unitsSliderId = useId();
  const valueSliderId = useId();

  // Calculations
  const damagedUnitsMonth = Math.round(monthlyUnits * (damageRate / 100));
  const transferLossUnitsMonth = Math.round(monthlyUnits * (transferLossRate / 100));
  const unreturnedUnitsMonth = Math.round(monthlyUnits * (unreturnedRate / 100));

  const totalMonthlyUnitsLost = damagedUnitsMonth + transferLossUnitsMonth + unreturnedUnitsMonth;
  const monthlyCashBleed = totalMonthlyUnitsLost * unitValue;
  const annualCashBleed = monthlyCashBleed * 12;

  // Uncredited gap (Amazon fails to auto-reimburse approx 28% of eligible units)
  const uncreditedRate = 0.28;
  const annualUncreditedLoss = Math.round(annualCashBleed * uncreditedRate);

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 text-p-gold border border-p-gold/40 px-3 py-1 text-[10px] font-black tracking-[0.16em] uppercase">
            Interactive FC Ledger Audit
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Warehouse Shrinkage & Customer Return Reconciliation
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-[#a39e93]">Inventory Adjustment Reason Codes</span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl bg-[#161410] p-5 border border-[#2b271f]">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={unitsSliderId}>Monthly Shipped Units</label>
            <span className="text-p-gold font-extrabold">{monthlyUnits.toLocaleString()} units/mo</span>
          </div>
          <input
            id={unitsSliderId}
            type="range"
            min={5000}
            max={150000}
            step={5000}
            value={monthlyUnits}
            onChange={e => setMonthlyUnits(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="text-[10px] text-[#8e897e] mt-1 font-mono">Gross units fulfilled via Amazon FBA</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-[#ded8cb] mb-1">
            <label htmlFor={valueSliderId}>Average Unit Selling / Replacement Price</label>
            <span className="text-p-gold font-extrabold">${unitValue}</span>
          </div>
          <input
            id={valueSliderId}
            type="range"
            min={15}
            max={150}
            step={5}
            value={unitValue}
            onChange={e => setUnitValue(Number(e.target.value))}
            className="w-full accent-[#dfba64] cursor-pointer"
          />
          <div className="text-[10px] text-[#8e897e] mt-1 font-mono">Amazon net fair market compensation basis</div>
        </div>
      </div>

      {/* Discrepancy Channels Grid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Channel 1 */}
        <div className="rounded-2xl border border-[#2b271f] bg-[#14120e] p-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="rounded bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 text-[9px] font-bold text-rose-300">
              CODES E & M
            </span>
            <span className="text-p-gold font-bold">{damageRate}% rate</span>
          </div>
          <div className="mt-2 text-sm font-bold text-white">FC Conveyor & Racking Damage</div>
          <p className="text-[11px] text-[#8e897e] mt-1">Crushed by forklifts, water damage, or damaged by FC robotics.</p>
          <div className="mt-3 flex items-baseline justify-between border-t border-white/5 pt-2">
            <span className="text-[10px] text-[#a39e93]">Monthly units:</span>
            <span className="font-mono font-bold text-white">{damagedUnitsMonth} units (${(damagedUnitsMonth * unitValue).toLocaleString()})</span>
          </div>
        </div>

        {/* Channel 2 */}
        <div className="rounded-2xl border border-[#2b271f] bg-[#14120e] p-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="rounded bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 text-[9px] font-bold text-amber-300">
              CODES D & P
            </span>
            <span className="text-p-gold font-bold">{transferLossRate}% rate</span>
          </div>
          <div className="mt-2 text-sm font-bold text-white">Inter-FC Transfer Misplacement</div>
          <p className="text-[11px] text-[#8e897e] mt-1">Units transferred between cross-docks that never arrive at destination.</p>
          <div className="mt-3 flex items-baseline justify-between border-t border-white/5 pt-2">
            <span className="text-[10px] text-[#a39e93]">Monthly units:</span>
            <span className="font-mono font-bold text-white">{transferLossUnitsMonth} units (${(transferLossUnitsMonth * unitValue).toLocaleString()})</span>
          </div>
        </div>

        {/* Channel 3 */}
        <div className="rounded-2xl border border-[#2b271f] bg-[#14120e] p-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="rounded bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 text-[9px] font-bold text-blue-300">
              RETURN SLA
            </span>
            <span className="text-p-gold font-bold">{unreturnedRate}% rate</span>
          </div>
          <div className="mt-2 text-sm font-bold text-white">45-Day Unreturned Refunds</div>
          <p className="text-[11px] text-[#8e897e] mt-1">Customer refunded from seller funds but item never returned to Amazon.</p>
          <div className="mt-3 flex items-baseline justify-between border-t border-white/5 pt-2">
            <span className="text-[10px] text-[#a39e93]">Monthly units:</span>
            <span className="font-mono font-bold text-white">{unreturnedUnitsMonth} units (${(unreturnedUnitsMonth * unitValue).toLocaleString()})</span>
          </div>
        </div>
      </div>

      {/* Output Summary Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-4">
          <div className="text-[10px] font-mono tracking-wider text-[#a39e93] uppercase">Monthly Shrinkage</div>
          <div className="mt-1 text-2xl font-black text-rose-400 font-mono">
            {totalMonthlyUnitsLost.toLocaleString()} units
          </div>
          <div className="text-[10px] text-[#77736b] mt-0.5">${monthlyCashBleed.toLocaleString()} / month</div>
        </div>

        <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-4">
          <div className="text-[10px] font-mono tracking-wider text-[#a39e93] uppercase">Annual Gross Shrinkage</div>
          <div className="mt-1 text-2xl font-black text-white font-mono">
            ${annualCashBleed.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#77736b] mt-0.5">Total inventory written off</div>
        </div>

        <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-4">
          <div className="text-[10px] font-mono tracking-wider text-amber-300 uppercase font-bold">Uncredited System Bleed</div>
          <div className="mt-1 text-2xl font-black text-amber-400 font-mono">
            ${annualUncreditedLoss.toLocaleString()}
          </div>
          <div className="text-[10px] text-amber-300 mt-0.5">~28% missed by auto-refunds</div>
        </div>

        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-4">
          <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">Annual Recovery Claim</div>
          <div className="mt-1 text-2xl font-black text-emerald-400 font-mono">
            ${annualUncreditedLoss.toLocaleString()}
          </div>
          <div className="text-[10px] text-emerald-300 mt-0.5">Recoverable via manual ledger audit</div>
        </div>
      </div>
    </div>
  );
}
