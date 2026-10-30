'use client';

import { useState } from 'react';

type Dimension = 'latency' | 'security' | 'cost';

export function ArchitectureComparisonWidget() {
  const [activeTab, setActiveTab] = useState<Dimension>('latency');

  return (
    <div className="my-10 overflow-hidden rounded-[26px] border border-p-gold/50 bg-[#0e0d0b] p-6 sm:p-8 text-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#2b271f] pb-5">
        <div>
          <span className="rounded-full bg-p-gold/20 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-p-gold uppercase whitespace-nowrap shrink-0 [overflow-wrap:normal]">
            Architectural Teardown
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
            Custom Next.js + PostgreSQL vs. No-Code (Airtable / SaaS)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-p-gold2 uppercase tracking-wider">
            Enterprise Benchmark
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="my-6 flex flex-wrap gap-2">
        {[
          { id: 'latency', label: '1. Latency & Rate Limits' },
          { id: 'security', label: '2. Multi-Tenant Security (RBAC)' },
          { id: 'cost', label: '3. 3-Year Cost of Ownership' },
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as Dimension)}
            className={`rounded-full px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-p-gold text-black shadow-lg ring-2 ring-p-gold/60'
                : 'border border-[#342f24] bg-[#1a1712] text-[#c4beb1] hover:text-white hover:border-p-gold/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on Active Tab */}
      <div className="rounded-2xl border border-[#2b271f] bg-[#161410] p-6">
        {activeTab === 'latency' && (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-[#c4beb1]">Airtable + Softr / Zapier Multi-Hop:</span>
                <span className="text-rose-400 font-mono">8,400 ms (Throttles at 5 req/sec)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-[#29251c] overflow-hidden">
                <div className="h-full rounded-full bg-rose-500 w-[92%]" />
              </div>
              <p className="mt-2 text-xs text-[#9c9689]">
                Visual builders require multiple API webhook rounds. When 50 active drivers or clients ping simultaneously, rate limit triggers 429 freezes.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-[#c4beb1]">Custom Next.js Server Components + Edge Cache:</span>
                <span className="text-emerald-400 font-mono">42 ms (Unlimited Concurrent Scale)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-[#29251c] overflow-hidden">
                <div className="h-full rounded-full bg-emerald-400 w-[8%]" />
              </div>
              <p className="mt-2 text-xs text-[#9c9689]">
                Server-side rendered SQL queries stream cached UI directly to the user. Sub-second dispatch response times guaranteed.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-5">
              <span className="text-[10px] font-black text-rose-300 uppercase tracking-wider">
                Visual Builders / Airtable
              </span>
              <h4 className="mt-2 text-base font-bold text-white">Client-Side Filter Vulnerability</h4>
              <p className="mt-2 text-xs leading-[1.6] text-[#bdae9c]">
                Records are filtered in the client browser. Any user inspecting browser network headers can extract competitors' private shipments, pricing formulas, and driver phone numbers.
              </p>
              <span className="mt-4 inline-block text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded">
                High SOC-2 & Legal Exposure
              </span>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
              <span className="text-[10px] font-black text-emerald-300 uppercase tracking-wider">
                Next.js + PostgreSQL
              </span>
              <h4 className="mt-2 text-base font-bold text-white">Database Row-Level Security (RLS)</h4>
              <p className="mt-2 text-xs leading-[1.6] text-[#bdae9c]">
                Security is enforced at the database engine level. Client A can mathematically never receive unauthenticated records belonging to Client B.
              </p>
              <span className="mt-4 inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                Enterprise B2B & HIPAA Compliant
              </span>
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#3b3425] bg-[#1a1712] p-5">
                <span className="text-[10px] font-black text-[#8a857b] uppercase">3-Year Commercial SaaS / Airtable Stack</span>
                <div className="mt-2 text-3xl font-black text-rose-400">$184,000+</div>
                <div className="mt-1 text-xs text-[#a8a397]">
                  40 office seats ($120/mo) + 80 mobile users ($35/mo) + Zapier enterprise tasks = $5,100/mo forever.
                </div>
              </div>

              <div className="rounded-xl border border-p-gold/50 bg-[#1c1912] p-5">
                <span className="text-[10px] font-black text-p-gold2 uppercase">3-Year Custom Next.js Platform</span>
                <div className="mt-2 text-3xl font-black text-emerald-400">$36,000 total</div>
                <div className="mt-1 text-xs text-[#a8a397]">
                  One-time engineering build + zero per-seat fees + $90/mo edge cloud infrastructure. Full IP ownership.
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/30 p-3 text-center text-xs font-bold text-emerald-200">
              Net Savings Over 3 Years: <span className="text-white font-extrabold">$148,000+</span> converted into balance-sheet equity.
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <span className="text-[11px] font-semibold text-[#8f8a7e]">
          Demonstrated in live production: Luxury O’Hare Limo (Chicago) and Enterprise Dealership ERP.
        </span>
      </div>
    </div>
  );
}
