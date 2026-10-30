'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { BlogArt, PolicyArt } from '@/components/page/blog';
import {
  AiVideoCardGraphic,
  AiWorkflowCardGraphic,
  AiAutomationSmallBizCardGraphic,
  AmazonFbaReimbursementCardGraphic,
  ApolloStackCardGraphic,
  AwdVs3plCardGraphic,
  BookingAppCardGraphic,
  BotVsHumanCardGraphic,
  ConsentModeCardGraphic,
  ConversionAuditCardGraphic,
  CoreWebVitalsGraphic,
  CubiscanCardGraphic,
  CustomPortalsCardGraphic,
  DealershipErpSoftwareCardGraphic,
  DealershipLeadEngineCardGraphic,
  DigitalMarketingIslamabadCardGraphic,
  DigitalOutdoorCardGraphic,
  EcommerceOpsCardGraphic,
  ErpCardGraphic,
  EuAiActCardGraphic,
  FbaFeeShiftCardGraphic,
  FeedDiagnosticGraphic,
  GrowthSystemCardGraphic,
  HealthcareLocalSeoCardGraphic,
  Ics2CardGraphic,
  InboundClaimsCardGraphic,
  InventoryControlCardGraphic,
  LandedCostCardGraphic,
  LeadGenSystemCardGraphic,
  LostDamagedCardGraphic,
  MetaAdsAgencyEcommerceCardGraphic,
  MetaLeadAdsQualityCardGraphic,
  NextJsVsNoCodeCardGraphic,
  OutsourcedEcommerceOpsCardGraphic,
  PlacementFeeCardGraphic,
  ScorecardCardGraphic,
  SoftwareDevelopmentPakistanCardGraphic,
  UtmCardGraphic,
  WalmartWfsClaimCardGraphic,
  WalmartWfsReturnsCardGraphic,
} from './CardGraphics';

export type InsightItem = {
  id: string;
  type: 'guide' | 'brief';
  category: 'amazon' | 'software' | 'growth' | 'ai' | 'briefs';
  categoryLabel: string;
  art?: BlogArt;
  policyArt?: PolicyArt;
  artFigure?: string;
  artNote?: string;
  readTime: string;
  title: string;
  copy: string;
  href: string;
  targetAudience?: string;
  keyTakeaways?: string[];
  featured?: boolean;
};

const CATEGORIES = [
  { id: 'all', label: 'All Insights' },
  { id: 'amazon', label: 'E-Commerce & Supply Chain' },
  { id: 'software', label: 'Web & Software Development' },
  { id: 'growth', label: 'Digital Marketing & Growth' },
  { id: 'ai', label: 'AI Automation & Content' },
  { id: 'briefs', label: 'Platform & Policy Briefs' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const BLOG_ART_STYLES: Record<string, string> = {
  default:
    'bg-[radial-gradient(circle_at_75%_20%,rgba(222,186,100,.35),transparent_25%),linear-gradient(145deg,#0c0c0b,#292317)]',
  web: 'bg-[linear-gradient(145deg,#10100f,#4a3b1d)]',
  ai: 'bg-[#111] bg-[image:radial-gradient(circle_at_25%_20%,rgba(202,152,44,.25),transparent_28%)]',
  growth: 'bg-[linear-gradient(135deg,#ae7f20,#171510)]',
  supply: 'bg-[linear-gradient(145deg,#0b0b0a,#2b2a24)]',
  cyber:
    'bg-[radial-gradient(circle_at_70%_35%,rgba(223,186,100,.2),transparent_24%),linear-gradient(135deg,#050505,#20201d)]',
  sales: 'bg-[linear-gradient(150deg,#1b1811,#6e5220)]',
  video:
    'bg-[#0a0a09] bg-[image:radial-gradient(circle_at_50%_50%,rgba(223,186,100,.22),transparent_30%)]',
  audit: 'bg-[linear-gradient(135deg,#0d0d0c,#3b3120)]',
  measurement:
    'bg-[linear-gradient(145deg,#11110f_0_42%,#6f5421_42%_49%,#191710_49%)]',
  catalog:
    'bg-[radial-gradient(circle_at_68%_30%,rgba(223,186,100,.3),transparent_20%),linear-gradient(145deg,#0b0b0a,#3b3223)]',
  landed:
    'bg-[linear-gradient(160deg,#dfba64_0_18%,#a8833c_18%_39%,#5e4a2b_39%_62%,#242018_62%)]',
  scorecard: 'bg-[linear-gradient(135deg,#10100f,#51401f)]',
  passport:
    'bg-[radial-gradient(circle_at_50%_48%,rgba(223,186,100,.35),transparent_17%),linear-gradient(145deg,#0b0b0a,#262117)]',
};

function renderCardTopGraphic(item: InsightItem) {
  switch (item.id) {
    // Amazon & Supply Chain
    case 'walmart-wfs-reimbursement-claim':
      return <WalmartWfsClaimCardGraphic />;
    case 'walmart-wfs-returns-reimbursement':
      return <WalmartWfsReturnsCardGraphic />;
    case 'amazon-fba-reimbursement-service':
      return <AmazonFbaReimbursementCardGraphic />;
    case 'outsourced-ecommerce-operations':
      return <OutsourcedEcommerceOpsCardGraphic />;
    case 'amazon-inbound-placement-fees':
      return <PlacementFeeCardGraphic />;
    case 'amazon-fba-fee-audit':
      return <CubiscanCardGraphic />;
    case 'manual-amazon-reimbursement-vs-bots':
      return <BotVsHumanCardGraphic />;
    case 'amazon-fba-lost-damaged-inventory':
      return <LostDamagedCardGraphic />;
    case 'amazon-awd-vs-3pl':
      return <AwdVs3plCardGraphic />;
    case '3pl-scorecard':
      return <ScorecardCardGraphic />;
    case 'landed-cost-model':
      return <LandedCostCardGraphic />;
    case 'supply-chain-control':
      return <InventoryControlCardGraphic />;
    case 'ecommerce-operations':
      return <EcommerceOpsCardGraphic />;
    case 'amazon-fba-inbound-claims':
      return <InboundClaimsCardGraphic />;

    // Custom Software & Portals
    case 'dealership-erp-software':
      return <DealershipErpSoftwareCardGraphic />;
    case 'software-development-company-pakistan':
      return <SoftwareDevelopmentPakistanCardGraphic />;
    case 'custom-portals-vs-saas':
      return <CustomPortalsCardGraphic />;
    case 'nextjs-vs-no-code-portals':
      return <NextJsVsNoCodeCardGraphic />;
    case 'erp-for-growing-businesses':
      return <ErpCardGraphic />;
    case 'booking-app-partner-portal':
      return <BookingAppCardGraphic />;

    // Digital Marketing & Growth
    case 'digital-marketing-agency-islamabad':
      return <DigitalMarketingIslamabadCardGraphic />;
    case 'meta-ads-agency-ecommerce':
      return <MetaAdsAgencyEcommerceCardGraphic />;
    case 'meta-lead-ads-lead-quality':
      return <MetaLeadAdsQualityCardGraphic />;
    case 'growth-system':
      return <GrowthSystemCardGraphic />;
    case 'conversion-audit':
      return <ConversionAuditCardGraphic />;
    case 'utm-governance':
      return <UtmCardGraphic />;
    case 'product-feed-health':
      return <FeedDiagnosticGraphic />;
    case 'digital-outdoor-marketing':
      return <DigitalOutdoorCardGraphic />;
    case 'b2b-lead-generation-apollo-stack':
      return <ApolloStackCardGraphic />;
    case 'lead-generation-system':
      return <LeadGenSystemCardGraphic />;
    case 'dealership-lead-engine':
      return <DealershipLeadEngineCardGraphic />;
    case 'healthcare-clinic-local-seo':
      return <HealthcareLocalSeoCardGraphic />;

    // AI Automation & Workflows
    case 'ai-automation-agency-small-business':
      return <AiAutomationSmallBizCardGraphic />;
    case 'ai-automation':
      return <AiWorkflowCardGraphic />;
    case 'ai-video-brief':
      return <AiVideoCardGraphic />;

    // Regulatory & Platform Briefs
    case 'update-amazon-fba-fees-2026':
      return <FbaFeeShiftCardGraphic />;
    case 'update-eu-ai-act-transparency-2026':
      return <EuAiActCardGraphic />;
    case 'update-google-ads-consent-2026':
      return <ConsentModeCardGraphic />;
    case 'update-eu-ics2-2026':
      return <Ics2CardGraphic />;
    case 'update-google-search-2026':
      return <CoreWebVitalsGraphic />;

    default:
      return <PlacementFeeCardGraphic />;
  }
}

export function BlogExplorer({ items }: { items: InsightItem[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: items.length };
    items.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  // Featured flagship item
  const featuredItem = useMemo(() => {
    return items.find(i => i.featured) || items[0];
  }, [items]);

  // Filter items based on active category & search query
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCopy = item.copy.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesAudience = item.targetAudience?.toLowerCase().includes(query) ?? false;
        return matchesTitle || matchesCopy || matchesCategory || matchesAudience;
      }
      return true;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* 1. FEATURED FLAGSHIP SPOTLIGHT (Entire Box is Clickable) */}
      {/* ========================================================= */}
      {featuredItem && activeCategory === 'all' && searchQuery.trim() === '' && (
        <Link
          href={featuredItem.href}
          className="group block mb-14 overflow-hidden rounded-[32px] border border-[#34312b] bg-[#11110f] text-white shadow-2xl transition-all duration-500 hover:border-p-gold/80 hover:shadow-[0_20px_60px_rgba(223,186,100,0.18)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-p-gold"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_.75fr]">
            <div className="flex flex-col p-8 sm:p-12 z-[1]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-p-gold/20 border border-p-gold/40 px-3.5 py-1 text-[10px] font-black tracking-[0.16em] text-p-gold uppercase">
                  ⭐ Flagship Operator Guide
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-gray-300">
                  {featuredItem.readTime}
                </span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                  ✓ Verified 2026 Framework
                </span>
              </div>

              <h2 className="mt-5 mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white group-hover:text-p-gold2 transition-colors duration-300">
                {featuredItem.title}
              </h2>

              <p className="mb-6 text-sm sm:text-base leading-[1.7] text-[#c4beb1]">
                {featuredItem.copy}
              </p>

              {featuredItem.keyTakeaways && (
                <div className="mb-8 space-y-2.5 rounded-2xl border border-[#2b271f] bg-[#171511] p-5 shadow-inner">
                  <span className="text-[10px] font-black tracking-[0.15em] text-p-gold2 uppercase">
                    Forensic Operator Takeaways:
                  </span>
                  <ul className="space-y-2 text-xs leading-[1.6] text-[#ded8cb]">
                    {featuredItem.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-0.5 text-p-gold font-bold">✦</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#262420]">
                <div className="inline-flex items-center gap-2 rounded-full bg-p-gold px-8 py-3.5 text-xs font-black text-black transition-all duration-300 group-hover:bg-[#ebd085] group-hover:scale-[1.02]">
                  <span>Read Full 2026 Field Guide</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </div>
                {featuredItem.targetAudience && (
                  <span className="text-[11px] font-semibold text-[#8a857b]">
                    Target: {featuredItem.targetAudience.split(',')[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Graphic Badge Column */}
            <div
              className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden p-8 sm:p-12 ${
                BLOG_ART_STYLES[featuredItem.art || 'supply']
              } border-t lg:border-t-0 lg:border-l border-[#262420] transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
            >
              <div className="z-[1] flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.18em] text-p-gold uppercase">
                  {featuredItem.categoryLabel}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold tracking-wider uppercase text-gray-200">
                  USD LEDGER AUDIT
                </span>
              </div>

              <div className="z-[1] my-auto py-6">
                <div className="text-[clamp(42px,4.5vw,64px)] font-black tracking-[-0.05em] text-white">
                  18-Mo.
                </div>
                <div className="mt-1 text-xs font-bold tracking-[0.12em] text-[#c4beb1] uppercase">
                  Statutory FBA Lookback Window
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-[#a19d94]">Interactive Simulator Inside</span>
                </div>
              </div>

              <div className="z-[1] border-t border-white/10 pt-4 text-[11px] text-[#a19d94]">
                Mett Global Supply Chain & Claims Forensic Practice
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* ========================================================= */}
      {/* 2. CATEGORY TABS & SEARCH CONTROLS                        */}
      {/* ========================================================= */}
      <div className="mb-10 space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills with Live Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-p-ink text-white shadow-lg ring-2 ring-p-gold scale-[1.02]'
                      : 'border border-p-line bg-white text-[#514d46] hover:border-p-gold/60 hover:text-black hover:bg-[#fbfaf6]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive ? 'bg-p-gold text-black font-extrabold' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input with Smooth Focus Animation */}
          <div className="relative min-w-[260px] max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. FBA, Next.js, Apollo)..."
              className="w-full rounded-full border border-p-line bg-white px-4 py-2.5 text-xs text-black placeholder:text-[#8a857b] transition-all duration-200 focus:border-p-gold focus:outline-none focus:ring-2 focus:ring-p-gold/30 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8a857b] hover:text-black cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between border-b border-p-line pb-3 text-xs text-[#6e685f]">
          <span>
            Displaying <strong>{filteredItems.length}</strong>{' '}
            {filteredItems.length === 1 ? 'verified operational insight' : 'verified operational insights'}
            {activeCategory !== 'all' && (
              <> in <strong>{CATEGORIES.find(c => c.id === activeCategory)?.label}</strong></>
            )}
          </span>
          {(activeCategory !== 'all' || searchQuery !== '') && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="font-bold text-p-gold underline hover:text-black cursor-pointer transition-colors"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. MAIN INSIGHTS & CASE STUDY GRID (Entire Card Clickable)*/}
      {/* ========================================================= */}
      {filteredItems.length === 0 ? (
        <div className="rounded-[28px] border border-p-line bg-white p-16 text-center shadow-sm">
          <div className="text-3xl">🔍</div>
          <h3 className="mt-3 text-lg font-bold">No insights matching your query</h3>
          <p className="mt-1 text-xs text-p-muted">
            Try adjusting your search keywords or resetting your category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-p-ink px-6 py-2.5 text-xs font-bold text-white hover:bg-black transition-colors cursor-pointer"
          >
            Show All Insights
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => {
            const isBrief = item.type === 'brief';

            /* POLICY & REGULATORY BRIEFS (Entire Card is Clickable Link) */
            if (isBrief) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col overflow-hidden rounded-[28px] border border-p-line bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-p-gold/80 hover:shadow-[0_20px_45px_rgba(223,186,100,0.18)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-p-gold"
                >
                  {/* Top Graphic Dashboard */}
                  <div
                    className={`relative min-h-[180px] h-[180px] p-6 text-white ${
                      BLOG_ART_STYLES[item.art || 'default']
                    } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
                  >
                    {renderCardTopGraphic(item)}
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between mb-2 text-[10px]">
                      <span className="font-black tracking-[0.14em] text-p-gold uppercase">
                        {item.categoryLabel}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-bold text-gray-700 tracking-wider">
                        {item.readTime}
                      </span>
                    </div>

                    <div className="h-5 flex items-center mb-2.5">
                      <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider line-clamp-1">
                        Mandate: Global Regulatory Policy Update
                      </span>
                    </div>

                    <h3 className="mb-3 min-h-[52px] text-xl font-bold leading-[1.28] tracking-[-0.03em] text-[#11110f] group-hover:text-p-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mb-6 min-h-[60px] text-xs leading-[1.65] text-p-muted line-clamp-3">
                      {item.copy}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-black text-black group-hover:text-p-gold transition-colors">
                        <span>Read Current Brief</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                      </span>
                      <span className="text-[10px] text-[#8a857b] font-mono">2026 Mandate</span>
                    </div>
                  </div>
                </Link>
              );
            }

            /* STANDARD OPERATOR FIELD GUIDES (Entire Card is Clickable Link) */
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-[28px] border border-p-line bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-p-gold/80 hover:shadow-[0_20px_45px_rgba(223,186,100,0.18)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-p-gold"
              >
                {/* Top Graphic Dashboard */}
                <div
                  className={`relative min-h-[180px] h-[180px] p-6 text-white ${
                    BLOG_ART_STYLES[item.art || 'default']
                  } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
                >
                  {renderCardTopGraphic(item)}
                </div>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2 text-[10px]">
                    <span className="font-black tracking-[0.14em] text-p-gold uppercase">
                      {item.categoryLabel}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-bold text-gray-700 tracking-wider">
                      {item.readTime}
                    </span>
                  </div>

                  <div className="h-5 flex items-center mb-2.5">
                    <span className="text-[10px] font-bold text-[#8a857b] uppercase tracking-wider line-clamp-1">
                      {item.targetAudience ? `For: ${item.targetAudience.split(',')[0]}` : 'Scope: Technical Operating Guide'}
                    </span>
                  </div>

                  <h3 className="mb-3 min-h-[52px] text-xl font-bold leading-[1.28] tracking-[-0.03em] text-[#11110f] group-hover:text-p-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mb-6 min-h-[60px] text-xs leading-[1.65] text-p-muted line-clamp-3">
                    {item.copy}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-black group-hover:text-p-gold transition-colors">
                      <span>Read Operator Guide</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      Verified
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
