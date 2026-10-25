'use client';

import { useState } from 'react';

type ModelType = 'awd' | '3pl' | 'hybrid';

export function AwdVs3plMatrixWidget() {
  const [selectedModel, setSelectedModel] = useState<ModelType>('hybrid');

  const models = {
    awd: {
      name: '100% Amazon AWD',
      badge: 'Aggressive Fee Discount',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      storageCost: '$0.48 / cu ft',
      storageScore: 'Lowest storage rate for slow-turn inventory',
      placementWaiver: '100% Waived into FBA',
      replenishmentTime: '14 - 28 Days',
      multiChannel: 'Restricted (High wholesale surcharges)',
      qcInspection: 'None (Automated cross-dock only)',
      riskLevel: 'High stockout risk during viral spikes',
    },
    '3pl': {
      name: '100% Independent 3PL',
      badge: 'Full Omnichannel Control',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      storageCost: '$0.65 - $0.95 / cu ft',
      storageScore: 'Higher monthly storage carrying cost',
      placementWaiver: 'Subject to standard FBA inbound fees',
      replenishmentTime: '24 - 48 Hours',
      multiChannel: 'Full EDI (Walmart, Target, Shopify DTC)',
      qcInspection: 'Complete carton relabeling & barcode audit',
      riskLevel: 'Zero stockout risk, but incurs placement fees',
    },
    hybrid: {
      name: 'Mett Global 70/30 Hybrid Model',
      badge: 'Recommended 2026 Strategy',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      storageCost: 'Blended ~$0.53 / cu ft',
      storageScore: 'Optimized bulk buffer + agile reserve',
      placementWaiver: 'Waived on 70% high-velocity volume',
      replenishmentTime: 'Same-Day Emergency Injection',
      multiChannel: 'Full multi-channel capability via 3PL reserve',
      qcInspection: '3PL pre-inspection prior to AWD induction',
      riskLevel: 'Minimal Risk: Maximum fee savings + stockout hedge',
    },
  };

  const current = models[selectedModel];

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0d0c0a] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-p-gold uppercase">
            Interactive Decision Matrix
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            AWD vs. 3PL Operational Evaluation
          </h3>
        </div>
        <span className="text-[11px] font-bold text-[#8a857b] uppercase">Select Model to Compare</span>
      </div>

      {/* Model Selection Buttons */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(Object.keys(models) as ModelType[]).map(key => {
          const m = models[key];
          const isSelected = selectedModel === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedModel(key)}
              className={`rounded-2xl p-4 text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'border-p-gold bg-[#1c1811] shadow-lg ring-1 ring-p-gold'
                  : 'border-[#26231c] bg-[#14120f] hover:border-p-gold/40'
              }`}
            >
              <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[9px] font-extrabold uppercase ${m.badgeColor}`}>
                {m.badge}
              </span>
              <div className="mt-2 text-sm font-extrabold text-white">{m.name}</div>
            </button>
          );
        })}
      </div>

      {/* Detail Metrics Card */}
      <div className="rounded-2xl border border-[#2b271f] bg-[#16130f] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-b sm:border-b-0 sm:border-r border-[#26231c] pr-4 pb-4 sm:pb-0">
            <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider">Base Storage Cost</span>
            <div className="mt-1 text-2xl font-black text-white">{current.storageCost}</div>
            <p className="mt-1 text-xs text-[#a39e93]">{current.storageScore}</p>
          </div>

          <div className="border-b lg:border-b-0 lg:border-r border-[#26231c] pr-4 pb-4 lg:pb-0">
            <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider">Replenishment Lead Time</span>
            <div className={`mt-1 text-2xl font-black ${selectedModel === 'awd' ? 'text-rose-400' : 'text-emerald-400'}`}>
              {current.replenishmentTime}
            </div>
            <p className="mt-1 text-xs text-[#a39e93]">{current.riskLevel}</p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider">Placement Fee Waiver</span>
            <div className="mt-1 text-2xl font-black text-p-gold2">{current.placementWaiver}</div>
            <p className="mt-1 text-xs text-[#a39e93]">{current.multiChannel}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-[#26231c] pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c4beb1] gap-2">
          <span>
            <strong>Quality Control & Barcode Inspection:</strong> {current.qcInspection}
          </span>
          <span className="font-bold text-p-gold">
            Recommendation: {selectedModel === 'hybrid' ? 'Highest EBITDA Margin' : 'Review Allocation'}
          </span>
        </div>
      </div>
    </div>
  );
}
