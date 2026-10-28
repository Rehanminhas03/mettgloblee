'use client';

/* ------------------------------------------------------------------ *
 * Bespoke CSS / SVG Mini-Dashboard Graphics for Every Single Card
 * Each graphic is unique to its specific topic, hardware-accelerated,
 * lightweight, and responsive.
 * ------------------------------------------------------------------ */

/* 1. Amazon Placement Fees */
export function PlacementFeeCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          FEE SPLIT MODEL
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">BREAKEVEN</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">SINGLE FC FEE</span>
            <span className="text-base font-black text-emerald-400">$0.24 / unit</span>
          </div>
          <div className="rounded-lg border border-rose-500/30 bg-rose-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">4-SPLIT RISK</span>
            <span className="text-base font-black text-rose-400">~1.8% Loss</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Net Cash Recovery</span>
        <span className="font-bold text-emerald-400">Active Policy Windows</span>
      </div>
    </div>
  );
}

/* Inbound Receiving Claims & Carrier Shortages */
export function InboundClaimsCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
          DOCK RECEIVING LEDGER
        </span>
        <span className="rounded bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 text-rose-300 font-bold">
          VARIANCE Δ -380
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-amber-500/30 bg-amber-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">CARRIER BOL</span>
            <span className="text-base font-black text-amber-300">2,400 UNITS</span>
          </div>
          <div className="rounded-lg border border-rose-500/30 bg-rose-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">AMAZON DOCK</span>
            <span className="text-base font-black text-rose-400">2,020 UNITS</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Dispute Dossier</span>
        <span className="font-bold text-emerald-400">FC Stamped POD Match</span>
      </div>
    </div>
  );
}

/* 2. Cubiscan Fee Audit */
export function CubiscanCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          CUBISCAN LASER SCAN
        </span>
        <span className="rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 text-[9px] font-bold">
          90-DAY WINDOW
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#3b3425] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">DIMENSIONS (L×W×H)</div>
            <div className="text-white font-bold text-xs mt-0.5">12.2″ × 8.1″ × 4.4″</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-rose-400 font-bold">OVERSIZE ERROR</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">-$1.42 Overcharge</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Size Tier Audit</span>
        <span className="font-bold text-p-gold">Fee Surcharge Reversal</span>
      </div>
    </div>
  );
}

/* 3. Manual Forensics vs Bots */
export function BotVsHumanCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          AMAZON TOS COMPLIANCE
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">0% SCRAPING</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-rose-500/30 bg-rose-950/30 p-2">
            <span className="text-[9px] text-rose-300 font-bold block">BOT SCRAPING</span>
            <span className="text-[11px] font-bold text-rose-400 mt-1 block">429 Throttled</span>
          </div>
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-2">
            <span className="text-[9px] text-emerald-300 font-bold block">HUMAN AUDIT</span>
            <span className="text-[11px] font-bold text-emerald-400 mt-1 block">100% Approved</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Case Safety</span>
        <span className="font-bold text-emerald-400">Zero Account Risk</span>
      </div>
    </div>
  );
}

/* 4. Lost & Damaged Inventory */
export function LostDamagedCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          LEDGER EVENT AUDIT
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">EVENT CODES</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#3b3425] bg-[#14120e] p-2.5 space-y-1.5 font-mono text-xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-rose-400 font-bold">CODE 05: FC Damaged</span>
            <span className="text-white">-36 Units</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-amber-400 font-bold">CODE 11: Disposal Defect</span>
            <span className="text-white">-18 Units</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Reconciliation Status</span>
        <span className="font-bold text-emerald-400">Discrepancy Overturned</span>
      </div>
    </div>
  );
}

/* 5. Amazon AWD vs 3PL */
export function AwdVs3plCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          AWD VS PRIVATE 3PL
        </span>
        <span className="rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold">
          70/30 HYBRID
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-[#383329] bg-[#161410] p-2">
            <span className="text-[9px] text-[#8a857b] block">AWD STORAGE</span>
            <span className="text-sm font-black text-white">$0.48 / cu ft</span>
          </div>
          <div className="rounded-lg border border-[#383329] bg-[#161410] p-2">
            <span className="text-[9px] text-[#8a857b] block">3PL DISPATCH</span>
            <span className="text-sm font-black text-emerald-400">Same-Day EDI</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Omnichannel Coverage</span>
        <span className="font-bold text-p-gold">Stockout Defense</span>
      </div>
    </div>
  );
}

/* 6. 3PL Scorecard */
export function ScorecardCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          3PL SLA AUDIT
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">SCORECARD</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 space-y-1.5 font-mono text-xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#8a857b]">Pick & Pack Accuracy:</span>
            <span className="text-emerald-400 font-bold">99.85%</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#8a857b]">Dock-to-Stock SLA:</span>
            <span className="text-white font-bold">&lt; 24 Hours</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Warehouse Resilience</span>
        <span className="font-bold text-emerald-400">Class A Certified</span>
      </div>
    </div>
  );
}

/* 7. Landed Cost Model */
export function LandedCostCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CROSS-BORDER MARGIN
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">WATERFALL</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="flex items-center justify-between gap-1 text-[9px] font-mono">
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 text-center flex-1">
            <span className="text-[#8a857b] block">FOB</span>
            <span className="text-white font-bold">$12.00</span>
          </div>
          <span className="text-p-gold">+</span>
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 text-center flex-1">
            <span className="text-[#8a857b] block">FREIGHT</span>
            <span className="text-white font-bold">$2.40</span>
          </div>
          <span className="text-p-gold">+</span>
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 text-center flex-1">
            <span className="text-[#8a857b] block">DUTY</span>
            <span className="text-white font-bold">$1.10</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Target Gross Margin</span>
        <span className="font-bold text-emerald-400">32.4% Net Protected</span>
      </div>
    </div>
  );
}

/* 8. Inventory Accuracy */
export function InventoryControlCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CYCLE COUNT SYSTEM
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">WMS AUDIT</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">PHYSICAL BIN SCAN</div>
            <div className="text-white font-bold text-xs mt-0.5">Bin D-42: 450 Units</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-emerald-400 font-bold">WMS VARIANCE</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">Δ 0 (100% Match)</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Discrepancy Exception</span>
        <span className="font-bold text-emerald-400">Single Operator Owner</span>
      </div>
    </div>
  );
}

/* 9. E-Commerce Operations */
export function EcommerceOpsCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          POST-CLICK CHAIN
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">FULFILLMENT</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="flex items-center justify-between text-[9px] font-mono gap-1 text-center">
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">ORDER</span>
            <span className="text-white font-bold">Instant</span>
          </div>
          <span className="text-p-gold">→</span>
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">PICK/PACK</span>
            <span className="text-emerald-400 font-bold">&lt; 2h</span>
          </div>
          <span className="text-p-gold">→</span>
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">DISPATCH</span>
            <span className="text-p-gold font-bold">Same-Day</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Customer Return Rate</span>
        <span className="font-bold text-emerald-400">&lt; 1.2% Controlled</span>
      </div>
    </div>
  );
}

/* 10. Custom Portals vs SaaS */
export function CustomPortalsCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          SAAS SEAT ELIMINATION
        </span>
        <span className="rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold">
          BALANCE SHEET ASSET
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-rose-500/30 bg-rose-950/20 p-2">
            <span className="text-[9px] text-[#8a857b] block">COMMERCIAL SAAS</span>
            <span className="text-sm font-black text-rose-400">+$64k / yr fees</span>
          </div>
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2">
            <span className="text-[9px] text-[#8a857b] block">CUSTOM PORTAL</span>
            <span className="text-sm font-black text-emerald-400">$0 / seat tax</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Source Code Ownership</span>
        <span className="font-bold text-emerald-400">100% Proprietary IP</span>
      </div>
    </div>
  );
}

/* 11. Next.js vs No-Code */
export function NextJsVsNoCodeCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          FULL-STACK ARCHITECTURE
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">SQL RLS</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 space-y-1 font-mono text-xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-rose-400 font-bold">Airtable API Limit:</span>
            <span className="text-rose-300">5 req/sec (Crashes)</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-emerald-400 font-bold">Next.js Edge Cluster:</span>
            <span className="text-emerald-300">&lt; 42ms Uncapped</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Enterprise Security</span>
        <span className="font-bold text-emerald-400">Zero-Trust Multitenant</span>
      </div>
    </div>
  );
}

/* 12. ERP for Growing Businesses */
export function ErpCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CUSTOM ERP SPINE
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">CENTRAL DB</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono">
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">FINANCE</span>
            <span className="text-white font-bold">GL Sync</span>
          </div>
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">DISPATCH</span>
            <span className="text-emerald-400 font-bold">Live GPS</span>
          </div>
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">PORTAL</span>
            <span className="text-p-gold font-bold">RBAC</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Spreadsheet Elimination</span>
        <span className="font-bold text-emerald-400">Single Source of Truth</span>
      </div>
    </div>
  );
}

/* 13. Booking Apps & Portals */
export function BookingAppCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          ON-DEMAND DISPATCH
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">TELEMETRY</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">CUSTOMER APP</div>
            <div className="text-white font-bold text-xs mt-0.5">Instant Slot Book</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-p-gold font-bold">DRIVER CONSOLE</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">&lt; 3s Auto-Assign</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Partner Portals</span>
        <span className="font-bold text-p-gold2">Segregated by Region</span>
      </div>
    </div>
  );
}

/* 14. B2B Apollo Lead Gen */
export function ApolloStackCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          INTENT PIXEL RADAR
        </span>
        <span className="rounded bg-p-gold/20 text-p-gold border border-p-gold/30 px-2 py-0.5 text-[9px] font-bold">
          ZERO AD WASTE
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="flex items-center justify-between text-[9px] font-mono gap-1 text-center">
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">VISITOR IP</span>
            <span className="text-white font-bold">Anonymous</span>
          </div>
          <span className="text-p-gold font-bold">→</span>
          <div className="rounded border border-p-gold/40 bg-[#1c1811] p-1.5 flex-1">
            <span className="text-p-gold block">APOLLO</span>
            <span className="text-white font-bold">$20M Co.</span>
          </div>
          <span className="text-p-gold font-bold">→</span>
          <div className="rounded border border-emerald-500/40 bg-emerald-950/30 p-1.5 flex-1">
            <span className="text-emerald-400 block">MEETING</span>
            <span className="text-emerald-300 font-bold">3-Thread</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>$90 CPC Search Ads</span>
        <span className="font-bold text-emerald-400">Replaced with ABM</span>
      </div>
    </div>
  );
}

/* 15. Lead Gen System */
export function LeadGenSystemCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          PROSPECTING SIGNALS
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">3-TIER MATRIX</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 space-y-1 font-mono text-xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#8a857b]">Tier 1: Technographic Intent</span>
            <span className="text-emerald-400 font-bold">High Urgency</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#8a857b]">Tier 2: Leadership Hiring</span>
            <span className="text-p-gold font-bold">90-Day Mandate</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Outbound Efficiency</span>
        <span className="font-bold text-emerald-400">System Before Headcount</span>
      </div>
    </div>
  );
}

/* 16. Growth System */
export function GrowthSystemCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          ACQUISITION AUDIT
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">BLENDED CAC</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-[#383329] bg-[#161410] p-2">
            <span className="text-[9px] text-[#8a857b] block">OFFER CONTINUITY</span>
            <span className="text-sm font-bold text-white">Ad-to-Page 100%</span>
          </div>
          <div className="rounded-lg border border-[#383329] bg-[#161410] p-2">
            <span className="text-[9px] text-[#8a857b] block">RESPONSE SLA</span>
            <span className="text-sm font-bold text-emerald-400">&lt; 5 Minutes</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Media Spend Health</span>
        <span className="font-bold text-p-gold">Chain Diagnostics</span>
      </div>
    </div>
  );
}

/* 17. Conversion Audit */
export function ConversionAuditCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          WEBSITE CRO AUDIT
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">FRICTION CHECK</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">ABOVE-THE-FOLD PROOF</div>
            <div className="text-white font-bold text-xs mt-0.5">Clarity Score 98%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-emerald-400 font-bold">MOBILE FORM</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">&lt; 3.2s Completion</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Ad Continuity</span>
        <span className="font-bold text-emerald-400">Zero Message Drop</span>
      </div>
    </div>
  );
}

/* 18. UTM Governance */
export function UtmCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          UTM TAXONOMY SYSTEM
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">ATTRIBUTION</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2 space-y-1 font-mono text-[10px]">
          <div className="text-[#a8a397] truncate">
            <span className="text-p-gold">source=</span>meta · <span className="text-p-gold">medium=</span>paid_social
          </div>
          <div className="text-[#a8a397] truncate">
            <span className="text-p-gold">campaign=</span>us_b2b_logistics · <span className="text-emerald-400">100% CLEAN</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Reporting Integrity</span>
        <span className="font-bold text-emerald-400">Attribution Verified</span>
      </div>
    </div>
  );
}

/* 19. Product Feed Health */
export function ProductFeedCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          MERCHANT CENTER FEED
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">CATALOG</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">SKU APPROVAL RATE</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">99.8% Active</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-[#8a857b]">PRICE PARITY</div>
            <div className="text-white font-bold text-xs mt-0.5">Automated Sync</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Feed Diagnostics</span>
        <span className="font-bold text-emerald-400">Zero Disapprovals</span>
      </div>
    </div>
  );
}

/* 20. Digital & Outdoor Marketing */
export function DigitalOutdoorCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          OMNICHANNEL SYNERGY
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">SHOWROOM</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="flex items-center justify-between text-[9px] font-mono gap-1 text-center">
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">META REELS</span>
            <span className="text-white font-bold">Impression</span>
          </div>
          <span className="text-p-gold">+</span>
          <div className="rounded border border-[#383329] bg-[#14120e] p-1.5 flex-1">
            <span className="text-[#8a857b] block">BILLBOARD</span>
            <span className="text-white font-bold">Awareness</span>
          </div>
          <span className="text-p-gold">=</span>
          <div className="rounded border border-emerald-500/40 bg-emerald-950/30 p-1.5 flex-1">
            <span className="text-emerald-400 block">VISIT</span>
            <span className="text-emerald-300 font-bold">Attributed</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Offline Attribution</span>
        <span className="font-bold text-emerald-400">Connected Funnel</span>
      </div>
    </div>
  );
}

/* 21. AI Automation Workflows */
export function AiWorkflowCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          MULTIMODAL OCR AI
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">AUTOMATION</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2.5 flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-[9px] text-[#8a857b]">BOL INVOICE PARSING</div>
            <div className="text-white font-bold text-xs mt-0.5">SKU Match: 100%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-emerald-400 font-bold">PROCESSING TIME</div>
            <div className="text-emerald-400 font-bold text-xs mt-0.5">&lt; 1.4 Seconds</div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Manual Data Entry</span>
        <span className="font-bold text-emerald-400">Zero Error Rate</span>
      </div>
    </div>
  );
}

/* 22. AI Video Brief */
export function AiVideoCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          VIDEO STORYBOARD
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">CONTENT</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono">
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-p-gold block">0-3s</span>
            <span className="text-white font-bold">Visual Hook</span>
          </div>
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-p-gold block">4-15s</span>
            <span className="text-white font-bold">Pain Proof</span>
          </div>
          <div className="rounded border border-emerald-500/40 bg-emerald-950/20 p-1.5">
            <span className="text-emerald-400 block">16-30s</span>
            <span className="text-emerald-300 font-bold">Direct CTA</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Editorial Control</span>
        <span className="font-bold text-emerald-400">Human Reviewed</span>
      </div>
    </div>
  );
}

/* 23. FBA Fee Shifts 2026 */
export function FbaFeeShiftCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          AMAZON FEE REVISION
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">2026 MANDATE</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-3xl font-black text-rose-400 font-mono tracking-tight">+$0.08</div>
        <div className="text-[10px] text-[#c4beb1] mt-1 font-mono uppercase tracking-wider">
          Avg. Standard FBA Fulfillment Increase
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Unit Economic Impact</span>
        <span className="font-bold text-p-gold">Recalculation Required</span>
      </div>
    </div>
  );
}

/* 24. EU AI Act */
export function EuAiActCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          EU AI REGULATION
        </span>
        <span className="rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-bold">
          LIVE COMPLIANCE
        </span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-3xl font-black text-white font-mono tracking-tight">02 AUG</div>
        <div className="text-[10px] text-[#c4beb1] mt-1 font-mono uppercase tracking-wider">
          Article 50 Transparency & Synthetic Watermark
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Audit Status</span>
        <span className="font-bold text-emerald-400">100% Disclosure Certified</span>
      </div>
    </div>
  );
}

/* 25. Google Ads Consent Mode v2 */
export function ConsentModeCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CONSENT MODE V2
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">EEA SIGNALS</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="rounded-xl border border-[#383329] bg-[#14120e] p-2 space-y-1 font-mono text-[10px]">
          <div className="flex justify-between">
            <span className="text-[#a8a397]">ad_storage:</span>
            <span className="text-emerald-400 font-bold">GRANTED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a8a397]">analytics_storage:</span>
            <span className="text-emerald-400 font-bold">GRANTED</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Measurement Loss</span>
        <span className="font-bold text-emerald-400">0% Modeled Retention</span>
      </div>
    </div>
  );
}

/* 26. EU ICS2 Customs */
export function Ics2CardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CUSTOMS PRE-ARRIVAL
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">ALL MODES</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">ENS DATA COMPLETE</div>
        <div className="text-[10px] text-[#c4beb1] mt-1 font-mono uppercase tracking-wider">
          Air · Sea · Road · Rail Pre-Clearance
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Customs Red Hold Risk</span>
        <span className="font-bold text-emerald-400">Zero Inbound Delay</span>
      </div>
    </div>
  );
}

/* 27. Google Search 2026 */
export function GoogleSearchCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="text-p-gold2 font-bold uppercase tracking-wider">
          CORE WEB VITALS
        </span>
        <span className="rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold">
          PASSED
        </span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono">
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">LCP</span>
            <span className="text-emerald-400 font-bold">1.1s</span>
          </div>
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">INP</span>
            <span className="text-emerald-400 font-bold">34ms</span>
          </div>
          <div className="rounded border border-[#383329] bg-[#161410] p-1.5">
            <span className="text-[#8a857b] block">CLS</span>
            <span className="text-emerald-400 font-bold">0.01</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Index & Crawlability</span>
        <span className="font-bold text-emerald-400">100% Eligible</span>
      </div>
    </div>
  );
}

/* Case Study 1: Claims Recovery */
export function ClaimsCaseStudyGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="rounded-full bg-p-gold/25 border border-p-gold/50 px-2.5 py-0.5 text-[9px] font-black tracking-widest text-p-gold uppercase">
          LIVE AUDIT RECOVERY
        </span>
        <span className="text-emerald-400 font-bold font-mono">USA / UK / EU</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">$50,000+ Recovered</div>
        <div className="text-[10px] text-[#ded8cb] mt-1 line-clamp-1">
          Forensic Carrier BOL & Inventory Ledger Reimbursement
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Dispute Settlement</span>
        <span className="font-bold text-emerald-400">Cash Deposited</span>
      </div>
    </div>
  );
}

/* Case Study 2: Luxury O'Hare Limo */
export function LimoCaseStudyGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="rounded-full bg-p-gold/25 border border-p-gold/50 px-2.5 py-0.5 text-[9px] font-black tracking-widest text-p-gold uppercase">
          CHICAGO FLEET ENGINE
        </span>
        <span className="text-emerald-400 font-bold font-mono">SUB-SECOND</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">30% Overhead Cut</div>
        <div className="text-[10px] text-[#ded8cb] mt-1 line-clamp-1">
          Real-Time Chauffeur Telemetry & O’Hare Flight Sync
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Dispatch Operations</span>
        <span className="font-bold text-p-gold2">Automated Fleet</span>
      </div>
    </div>
  );
}

/* Case Study 3: Sfykea Mobile Car Care */
export function SfykeaCaseStudyGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="rounded-full bg-p-gold/25 border border-p-gold/50 px-2.5 py-0.5 text-[9px] font-black tracking-widest text-p-gold uppercase">
          ON-DEMAND PLATFORM
        </span>
        <span className="text-emerald-400 font-bold font-mono">DISPATCH ACTIVE</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">On-Demand Dispatch</div>
        <div className="text-[10px] text-[#ded8cb] mt-1 line-clamp-1">
          Customer Booking App & Technician Geolocation Console
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Service Scale</span>
        <span className="font-bold text-emerald-400">100% Automated Bookings</span>
      </div>
    </div>
  );
}

/* Case Study 4: Jetour Ittehad */
export function JetourCaseStudyGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="rounded-full bg-p-gold/25 border border-p-gold/50 px-2.5 py-0.5 text-[9px] font-black tracking-widest text-p-gold uppercase">
          AUTOMOTIVE LAUNCH
        </span>
        <span className="text-emerald-400 font-bold font-mono">META CRM FUNNEL</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">1,000+ Leads · 50+ Bookings</div>
        <div className="text-[10px] text-[#ded8cb] mt-1 line-clamp-1">
          Meta Video Ads & Instant Showroom Lead Automation
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Conversion Rate</span>
        <span className="font-bold text-emerald-400">30%+ Showroom Footfall</span>
      </div>
    </div>
  );
}

/* Case Study 5: CSM Ittehad */
export function CsmCaseStudyGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="rounded-full bg-p-gold/25 border border-p-gold/50 px-2.5 py-0.5 text-[9px] font-black tracking-widest text-p-gold uppercase">
          EV DEALERSHIP FUNNEL
        </span>
        <span className="text-emerald-400 font-bold font-mono">SHOWROOM VISITS</span>
      </div>
      <div className="relative z-[1] my-auto py-1">
        <div className="text-2xl font-black text-white font-mono tracking-tight">112 Showroom Visits</div>
        <div className="text-[10px] text-[#ded8cb] mt-1 line-clamp-1">
          Electric Vehicle Meta Acquisition & Lead Routing
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Customer Acquisition</span>
        <span className="font-bold text-emerald-400">$1.20 Cost Per Lead</span>
      </div>
    </div>
  );
}

/* Dealership Lead Engine */
export function DealershipLeadEngineCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          SPEED-TO-LEAD &lt; 3 MIN
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">AUTO CRM</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">METRO LEADS</span>
            <span className="text-base font-black text-emerald-400">1,000+ Verified</span>
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">SHOWROOM RATIO</span>
            <span className="text-base font-black text-amber-400">21x Faster Connect</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>Meta Ads · CRM Ingestion</span>
        <span className="font-bold text-emerald-400">Physical Footfall</span>
      </div>
    </div>
  );
}

/* Healthcare & Clinic Local SEO */
export function HealthcareLocalSeoCardGraphic() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#dfba64_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="relative z-[1] flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 text-p-gold2 font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          LOCAL 3-PACK RANKING
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-300">HIPAA INTAKE</span>
      </div>
      <div className="relative z-[1] my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">PATIENT QUERIES</span>
            <span className="text-base font-black text-cyan-400">High-Intent Geo</span>
          </div>
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-2">
            <span className="text-[9px] text-[#a8a397] block">BOOKING FUNNEL</span>
            <span className="text-base font-black text-emerald-400">Zero-PHI Leak</span>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-[#c4beb1]">
        <span>TX & IL Clinic Proof</span>
        <span className="font-bold text-emerald-400">Top 3 Google Pack</span>
      </div>
    </div>
  );
}

// Aliases for BlogExplorer imports
export const FeedDiagnosticGraphic = ProductFeedCardGraphic;
export const CoreWebVitalsGraphic = GoogleSearchCardGraphic;

