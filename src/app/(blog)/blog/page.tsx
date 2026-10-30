import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Section } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { BlogExplorer, type InsightItem } from '@/components/blog/BlogExplorer';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/blog');

const ALL_INSIGHTS: InsightItem[] = [
  /* ------------------------------------------------------------- */
  /* 1. E-COMMERCE & SUPPLY CHAIN                                   */
  /* ------------------------------------------------------------- */
  {
    id: 'walmart-wfs-reimbursement-claim',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'WALMART WFS & INBOUND CLAIMS · 2026 GUIDE',
    art: 'supply',
    readTime: '4 MIN READ',
    title: 'Walmart WFS Reimbursement: File a Lost Inventory Claim',
    copy: 'How to file a Walmart WFS reimbursement claim for lost inbound inventory: the 10 to 50 day window, required documents, and steps in Seller Center.',
    href: '/insight-walmart-wfs-reimbursement-claim',
    targetAudience: 'Walmart Marketplace Sellers, Omnichannel Brands & Operations Heads',
    keyTakeaways: [
      'Understanding the strict 10 to 50 day filing window after fulfillment center delivery.',
      'Required proof for Walmart Preferred Carriers vs. independent freight carriers.',
      'Step-by-step dispute submission in Seller Center and settlement report reconciliation.',
    ],
  },
  {
    id: 'walmart-wfs-returns-reimbursement',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'WALMART WFS & RETURNS · 2026 GUIDE',
    art: 'supply',
    readTime: '4 MIN READ',
    title: 'WFS Returns Not Received? Walmart Return Dispute Guide',
    copy: 'WFS return not received or not reimbursed? Learn Walmart\'s return dispute windows, what proof to send, and what Walmart will not reimburse.',
    href: '/insight-walmart-wfs-returns-reimbursement',
    targetAudience: 'Walmart Sellers, Marketplace Directors & Inventory Managers',
    keyTakeaways: [
      'Dispute windows for unprocessed returns (90 days) and return-to-seller items (45 days).',
      'Critical photo documentation requirements before package contents are moved.',
      'Non-reimbursable return exceptions and setting up a monthly returns audit routine.',
    ],
  },
  {
    id: 'amazon-fba-reimbursement-service',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'AMAZON CLAIMS & FORENSICS · 2026 GUIDE',
    art: 'supply',
    readTime: '4 MIN READ',
    title: 'Amazon FBA Reimbursement Service: How Claims Recovery Works',
    copy: 'How manual claims recovery audits lost, damaged, and fee overcharge records without risky automated scrapers.',
    href: '/insight-amazon-fba-reimbursement-service',
    targetAudience: 'Amazon Brand Owners, CFOs & Operations Heads',
    keyTakeaways: [
      'Reconciling inbound receiving shortages, warehouse damages, and customer returns.',
      'Strict category-specific dispute windows: 60 days for warehouse losses, 60 to 90 days for inbound shipments.',
      'Why manual evidence dossiers overturn automated template denials.',
    ],
  },
  {
    id: 'outsourced-ecommerce-operations',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'MARKETPLACE OPERATIONS · 2026 GUIDE',
    art: 'growth',
    readTime: '4 MIN READ',
    title: 'Outsourced Ecommerce Operations for US Amazon and Walmart Sellers',
    copy: 'How US marketplace sellers scale catalog management, inventory tracking, order fulfillment, and multi-channel operations.',
    href: '/insight-outsourced-ecommerce-operations',
    targetAudience: 'Multichannel Marketplace Brands ($1M to $15M GMV)',
    keyTakeaways: [
      'Managing catalog attributes, inventory synchronization, and buy-box health across Amazon and Walmart.',
      'Remote warehouse management maintaining >95% inventory and order fulfillment accuracy.',
      'Freight invoice auditing and carrier overcharge prevention.',
    ],
  },
  {
    id: 'amazon-inbound-placement-fees',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'E-COMMERCE & SUPPLY CHAIN · 2026 GUIDE',
    art: 'supply',
    readTime: '5 MIN READ',
    title: 'Amazon Inbound Placement Fees & Lost Inventory: The 2026 US Brand Guide',
    copy: 'How 7-to-8 figure US Amazon brands audit inbound placement fee economics, identify receiving dock shortages, and recover uncredited inventory within active policy dispute windows.',
    href: '/insight-amazon-inbound-placement-fees',
    targetAudience: 'US Amazon Brands ($2M to $20M GMV), CFOs & Supply Chain Directors',
    keyTakeaways: [
      'Single-destination placement fees ($0.12 to $0.34/unit) vs. multi-destination split freight breakeven formula.',
      'How multi-destination splits increase dock discrepancy shrinkage by ~1.8% of consignment value.',
      'The 4-point evidence dossier required to overturn receiving shortages before category-specific deadlines expire.',
    ],
    featured: true,
  },
  {
    id: 'amazon-awd-vs-3pl',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'SUPPLY CHAIN & WAREHOUSING',
    art: 'supply',
    readTime: '5 MIN READ',
    title: 'Amazon AWD vs. Private 3PL: The 2026 Cost & Control Matrix',
    copy: 'How US 7-to-8 figure brand owners balance Amazon AWD placement fee waivers against 3PL multi-channel flexibility, inventory sovereignty, and emergency stockout defense.',
    href: '/insight-amazon-awd-vs-3pl',
    targetAudience: 'E-Commerce Directors, Importers, Omnichannel Brands',
  },
  {
    id: 'amazon-fba-inbound-claims',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'AMAZON CLAIMS & FREIGHT',
    art: 'supply',
    readTime: '4 MIN READ',
    title: 'The Amazon FBA Inbound Shipment Loss Guide: How Brands Recover Lost Inventory & Carrier Shortages',
    copy: 'How 7-figure brands compile carrier proof, overturn receiving shortages, and recover capital before category-specific dispute windows close.',
    href: '/insight-amazon-fba-inbound-claims',
    targetAudience: 'Amazon Brand Operators & Operations Leads',
  },
  {
    id: 'amazon-fba-fee-audit',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'AMAZON CLAIMS & FBA FEES',
    art: 'growth',
    readTime: '4 MIN READ',
    title: 'Amazon FBA Weight & Dimension Fee Audit: Reverse Cubiscan Errors & Recover Excess Charges',
    copy: 'How brands audit historical Cubiscan measurement errors, dispute misclassified size tiers, and recover compounding fee overcharges before the 90-day window closes.',
    href: '/insight-amazon-fba-fee-audit',
    targetAudience: 'CFOs, Brand Financial Controllers',
  },
  {
    id: 'manual-amazon-reimbursement-vs-bots',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'CLAIMS FORENSICS & TOS',
    art: 'sales',
    readTime: '4 MIN READ',
    title: 'Manual Forensic Auditing vs. Automated Bots: Why Software Alone Fails Amazon Claims',
    copy: 'Why automated scrapers trigger case throttling and denied claims, and how human forensic case management recovers maximum capital safely.',
    href: '/insight-manual-amazon-reimbursement-vs-bots',
    targetAudience: 'Brand Principals, Risk & Compliance Managers',
  },
  {
    id: 'amazon-fba-lost-damaged-inventory',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'WAREHOUSE RECONCILIATION',
    art: 'supply',
    readTime: '4 MIN READ',
    title: 'Amazon FBA Lost & Damaged Inventory Guide: Reconcile Warehouse Ledger Discrepancies',
    copy: 'How enterprise brands audit warehouse damage reason codes, missing customer returns, and uncredited FC write-offs within Amazon’s 60-day dispute window.',
    href: '/insight-amazon-fba-lost-damaged-inventory',
    targetAudience: 'Supply Chain Auditors & Inventory Controllers',
  },
  {
    id: '3pl-scorecard',
    type: 'guide',
    category: 'amazon',
    categoryLabel: '3PL SELECTION',
    art: 'scorecard',
    readTime: '4 MIN READ',
    title: 'The 3PL Scorecard: Compare Warehouses Beyond Pick Fees',
    copy: 'Use reliability, inventory control, systems, cost transparency, and operational resilience to evaluate third-party logistics partners.',
    href: '/insight-3pl-scorecard',
    targetAudience: 'Logistics Managers & Supply Chain Directors',
  },
  {
    id: 'landed-cost-model',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'CROSS-BORDER OPERATIONS',
    art: 'landed',
    readTime: '4 MIN READ',
    title: 'Landed Cost Before Launch: The Margin Model Operators Should Use',
    copy: 'Make freight, duty, destination charges, and returns risk visible before committing capital to cross-border inventory production.',
    href: '/insight-landed-cost-model',
    targetAudience: 'Founders, CFOs, Product Line Managers',
  },
  {
    id: 'supply-chain-control',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'INVENTORY ACCURACY',
    art: 'supply',
    readTime: '3 MIN READ',
    title: 'Inventory Accuracy Is a System, Not a Stock Count',
    copy: 'Control receiving, adjustments, locations, cycle counts, and exception ownership across physical warehouse operations.',
    href: '/insight-supply-chain-control',
    targetAudience: 'Warehouse Supervisors & Operations Leads',
  },
  {
    id: 'ecommerce-operations',
    type: 'guide',
    category: 'amazon',
    categoryLabel: 'ECOMMERCE OPERATIONS',
    art: 'growth',
    readTime: '3 MIN READ',
    title: 'The eCommerce Growth Leak Most Teams Miss: Operations After the Click',
    copy: 'Inventory accuracy, replenishment timing, order routing handoffs, customer returns, and marketplace account health.',
    href: '/insight-ecommerce-operations',
    targetAudience: 'E-Commerce Founders & Brand Operators',
  },

  /* ------------------------------------------------------------- */
  /* 2. CUSTOM SOFTWARE & PORTALS                                   */
  /* ------------------------------------------------------------- */
  {
    id: 'dealership-erp-software',
    type: 'guide',
    category: 'software',
    categoryLabel: 'AUTOMOTIVE ERP & SYSTEMS · 2026 GUIDE',
    art: 'web',
    readTime: '5 MIN READ',
    title: 'Custom Dealership ERP vs Off the Shelf Software',
    copy: 'Why auto dealerships replace off-the-shelf software with custom ERPs connecting inventory, CRM leads, and multi-showroom reporting in one place.',
    href: '/insight-dealership-erp-software',
    targetAudience: 'Automotive Dealership Principals, GMs & Multi-Rooftop Directors',
    keyTakeaways: [
      'Eliminating recurring per-seat software licensing taxes across multi-showroom operations.',
      'Live cross-showroom inventory lookups, reserve holds, and trade-in workflows.',
      'Direct webhook integration from digital ad leads to showroom sales consultants.',
    ],
  },
  {
    id: 'software-development-company-pakistan',
    type: 'guide',
    category: 'software',
    categoryLabel: 'FULL-STACK SOFTWARE · 2026 GUIDE',
    art: 'web',
    readTime: '5 MIN READ',
    title: 'Custom Software Development Company in Pakistan: ERP and Web Apps',
    copy: 'How Pakistan software teams build custom ERPs, client portals, and Next.js web applications for growing companies in Pakistan and the USA.',
    href: '/insight-software-development-company-pakistan',
    targetAudience: 'Founders, CTOs & Operations Innovators in Pakistan and the USA',
    keyTakeaways: [
      'Custom ERP, CRM, and Next.js web applications engineered for high reliability.',
      'Timezone-aligned collaboration between Islamabad headquarters and U.S. business representation.',
      '100% intellectual property ownership with zero recurring per-seat licensing.',
    ],
  },
  {
    id: 'custom-portals-vs-saas',
    type: 'guide',
    category: 'software',
    categoryLabel: 'SOFTWARE ARCHITECTURE · 2026 GUIDE',
    art: 'web',
    readTime: '5 MIN READ',
    title: 'Custom Portals vs. Off-the-Shelf SaaS: How US Mid-Market Logistics & Service Firms Scale',
    copy: 'Why growing US 3PLs, freight brokers, and field service operators hit the SaaS ceiling, and how custom portal engineering cuts operating costs, eliminates per-seat licensing, and secures enterprise clients.',
    href: '/insight-custom-portals-vs-saas',
    targetAudience: 'US Fleet Operators, Logistics Brokers & Field Service CEOs',
  },
  {
    id: 'nextjs-vs-no-code-portals',
    type: 'guide',
    category: 'software',
    categoryLabel: 'FULL-STACK ENGINEERING',
    art: 'web',
    readTime: '5 MIN READ',
    title: 'Why Next.js + PostgreSQL Beats Airtable + Softr for B2B Client Portals',
    copy: 'Why scaling US logistics and service companies hit the no-code wall, and how custom Next.js engineering delivers sub-second speed, zero-trust security, and zero recurring seat licensing.',
    href: '/insight-nextjs-vs-no-code-portals',
    targetAudience: 'CTOs, Engineering Leads & Operations Innovators',
  },
  {
    id: 'erp-for-growing-businesses',
    type: 'guide',
    category: 'software',
    categoryLabel: 'ENTERPRISE ERP SYSTEMS',
    art: 'web',
    readTime: '4 MIN READ',
    title: 'When a Growing Business Needs Its Own ERP, and What It Should Track',
    copy: 'Map the customer journey, build the operational spine first, and give every department role-based access without per-seat software taxes.',
    href: '/insight-erp-for-growing-businesses',
    targetAudience: 'Managing Directors & Operations Heads ($3M to $25M)',
  },
  {
    id: 'booking-app-partner-portal',
    type: 'guide',
    category: 'software',
    categoryLabel: 'APPS & PARTNER PORTALS',
    art: 'sales',
    readTime: '4 MIN READ',
    title: 'Booking Apps and Partner Portals: What an On-Demand Service Needs',
    copy: 'Slot booking, rider assignment, an owner admin portal, and partner logins segregated by geographic territory.',
    href: '/insight-booking-app-partner-portal',
    targetAudience: 'Service Platform Founders & Dispatch Managers',
  },

  /* ------------------------------------------------------------- */
  /* 3. DIGITAL MARKETING & GROWTH                                 */
  /* ------------------------------------------------------------- */
  {
    id: 'meta-lead-ads-lead-quality',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'PERFORMANCE LEAD GEN · 2026 GUIDE',
    art: 'growth',
    readTime: '4 MIN READ',
    title: 'Meta Lead Ads Higher Intent: Fix Low Quality Leads',
    copy: 'Getting junk leads from Meta lead ads? Use the Higher Intent form, qualifying questions, fast follow up, and CRM feedback to get leads who answer.',
    href: '/insight-meta-lead-ads-lead-quality',
    targetAudience: 'B2B Marketers, Dealership Operators, Clinic Heads & Lead Gen Teams',
    keyTakeaways: [
      'Switching from More Volume to Higher Intent forms with review confirmation screens.',
      'Adding qualifying multiple-choice questions to filter high-intent prospects.',
      'Connecting CRM via Conversions API to optimize for qualified leads instead of cheap volume.',
    ],
  },
  {
    id: 'meta-ads-agency-ecommerce',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'PERFORMANCE MEDIA · 2026 GUIDE',
    art: 'growth',
    readTime: '4 MIN READ',
    title: 'Meta Ads Agency for Ecommerce Brands: What to Expect',
    copy: 'What ecommerce brands should expect from a Meta ads agency: creative testing, campaign structure, attribution, and scaling ad spend profitably.',
    href: '/insight-meta-ads-agency-ecommerce',
    targetAudience: 'E-Commerce Brand Founders, CMOs & Performance Marketers',
    keyTakeaways: [
      'Prospecting and retargeting campaign architecture with clean audience exclusions.',
      'Weekly creative iteration testing Reels, carousels, and problem-led video hooks.',
      'Conversions API (CAPI) and server-side tracking for reliable attribution.',
    ],
  },
  {
    id: 'digital-marketing-agency-islamabad',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'DEALERSHIP MARKETING · ISLAMABAD',
    art: 'growth',
    readTime: '5 MIN READ',
    title: 'Digital Marketing Agency in Islamabad: How We Grow Car Dealerships',
    copy: 'How car dealerships and local businesses in Islamabad use Meta ads, outdoor media, and CRM automation to drive showroom footfall and sales.',
    href: '/insight-digital-marketing-agency-islamabad',
    targetAudience: 'Automotive Dealership Owners & Business Leaders in Islamabad',
    keyTakeaways: [
      'Localized Meta Reels and video walkarounds producing over 1,000 verified leads.',
      'Sub-5-minute lead response protocols with automated WhatsApp confirmations.',
      'Synchronized outdoor billboards and on-ground showroom activations.',
    ],
  },
  {
    id: 'growth-system',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'PERFORMANCE MARKETING & CRO',
    art: 'growth',
    readTime: '5 MIN READ',
    title: 'Why Better Ads Cannot Rescue a Weak Offer and Landing Page: The 2026 Acquisition Audit',
    copy: 'Acquisition is a chain. Media spend earns attention, but the offer structure, landing page message match, and sales follow-up velocity determine whether that attention becomes profitable revenue.',
    href: '/insight-growth-system',
    targetAudience: 'Growth Marketers & Performance Teams',
  },
  {
    id: 'conversion-audit',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'WEBSITE CRO & FUNNELS',
    art: 'audit',
    readTime: '3 MIN READ',
    title: 'A Practical Website Conversion Audit Before You Spend More on Ads',
    copy: 'Message clarity, social proof hierarchy, mobile friction elimination, and ad-to-page message continuity.',
    href: '/insight-conversion-audit',
    targetAudience: 'Digital Marketers & Store Owners',
  },
  {
    id: 'utm-governance',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'CAMPAIGN MEASUREMENT',
    art: 'measurement',
    readTime: '4 MIN READ',
    title: 'UTMs That Survive Reporting: A Practical Campaign Naming System',
    copy: 'Build a naming convention contract that keeps source, medium, campaign, and creative data usable across multi-channel attribution.',
    href: '/insight-utm-governance',
    targetAudience: 'Analytics Leads & Media Buyers',
  },
  {
    id: 'product-feed-health',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'PRODUCT DATA & GMC',
    art: 'catalog',
    readTime: '4 MIN READ',
    title: 'The Product Feed Is Part of the Storefront',
    copy: 'Audit product IDs, titles, structured images, variants, price parity, and availability before scaling media spend.',
    href: '/insight-product-feed-health',
    targetAudience: 'Catalog Managers & Performance Leads',
  },
  {
    id: 'digital-outdoor-marketing',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'OMNICHANNEL MARKETING',
    art: 'growth',
    readTime: '3 MIN READ',
    title: 'Instagram, Billboards and the Showroom: Make Them Work Together',
    copy: 'One consistent message across digital reels, posters, and outdoor billboards with a clear next step and honest footfall attribution.',
    href: '/insight-digital-outdoor-marketing',
    targetAudience: 'Brand Marketers & Retail Network Directors',
  },
  {
    id: 'b2b-lead-generation-apollo-stack',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'INFORMATIONAL GUIDE · DEMAND GEN',
    art: 'sales',
    readTime: '5 MIN READ',
    title: 'B2B Outbound Architecture: Intent Signals, Data Enrichment & Deliverability',
    copy: 'An informational operational overview for founders and operators on how commercial intent pixels, data enrichment, and email infrastructure function.',
    href: '/insight-b2b-lead-generation-apollo-stack',
    targetAudience: 'Founders & Revenue Operations Leads',
  },
  {
    id: 'lead-generation-system',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'INFORMATIONAL GUIDE · PROSPECTING',
    art: 'sales',
    readTime: '5 MIN READ',
    title: 'Structuring a Prospecting System: Targeting, Intent & CRM Hand-Offs',
    copy: 'An informational playbook on aligning lead qualification criteria, response time SLAs, and CRM pipeline hygiene to prevent revenue leaks.',
    href: '/insight-lead-generation-system',
    targetAudience: 'Operations Leads & Sales Leadership',
  },
  {
    id: 'dealership-lead-engine',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'AUTOMOTIVE GROWTH & CRM · 2026 GUIDE',
    art: 'growth',
    readTime: '6 MIN READ',
    title: 'Automotive Dealership Lead Engine: From Meta & Google Ads to Verified Showroom Footfall',
    copy: 'How automotive dealerships and multi-rooftop groups connect ad spend to automated CRM webhook ingestion, sub-5-minute speed-to-lead, and verified showroom visits.',
    href: '/insight-dealership-lead-engine',
    targetAudience: 'Automotive GMs, Dealership Marketing Directors & Sales Heads',
    keyTakeaways: [
      'Why responding within 5 minutes increases vehicle lead connection rates by 21x compared to waiting 30 minutes.',
      'Automated CRM webhook routing, instant WhatsApp/SMS buyer confirmations, and sales rep round-robin dispatch.',
      'Showroom walk-in attribution: Closing the loop between digital clicks and physical test-drive sign-ins.',
    ],
  },
  {
    id: 'healthcare-clinic-local-seo',
    type: 'guide',
    category: 'growth',
    categoryLabel: 'HEALTHCARE & LOCAL SEO · 2026 GUIDE',
    art: 'growth',
    readTime: '6 MIN READ',
    title: 'Healthcare & Dental Clinic Local SEO: How Private Practices Capture High-Intent Patient Demand',
    copy: 'The local search architecture for private medical, dental, and psychiatric practices: Google Business Profile 3-mile clusters, condition-specific geo-landing pages, and HIPAA-compliant intake funnels.',
    href: '/insight-healthcare-clinic-local-seo',
    targetAudience: 'Clinic Owners, Medical Directors & Dental Practice Managers',
    keyTakeaways: [
      'The 3-mile Google Business Profile pack engine: Category clusters, symptom-keyword review velocity, and citation alignment.',
      'Condition-specific geo-landing pages with medical schema vs. high-bounce generic homepages.',
      'HIPAA-compliant analytics: Server-side tracking, call attribution without PHI capture, and ethical review governance.',
    ],
  },

  /* ------------------------------------------------------------- */
  /* 4. AI AUTOMATION & CONTENT                                    */
  /* ------------------------------------------------------------- */
  {
    id: 'ai-automation-agency-small-business',
    type: 'guide',
    category: 'ai',
    categoryLabel: 'WORKFLOW AUTOMATION · 2026 GUIDE',
    art: 'ai',
    readTime: '4 MIN READ',
    title: 'AI Automation Agency for Small Businesses: Where to Start',
    copy: 'A practical guide for small businesses to start AI automation: lead routing, customer support chatbots, and invoice document processing.',
    href: '/insight-ai-automation-agency-small-business',
    targetAudience: 'Small Business Owners, Managing Directors & Operations Leads',
    keyTakeaways: [
      'Automating high-friction manual data entry between forms, spreadsheets, and CRMs.',
      'Document and invoice OCR data extraction into accounting ledgers.',
      'Customer support triage chatbots with human-in-the-loop exception handling.',
    ],
  },
  {
    id: 'ai-automation',
    type: 'guide',
    category: 'ai',
    categoryLabel: 'WORKFLOW AUTOMATION',
    art: 'ai',
    readTime: '3 MIN READ',
    title: 'Where AI Automation Actually Saves Time in a Growing Business',
    copy: 'Workflow mapping, deterministic tasks, document OCR extraction, exception handling, and ROI measurement.',
    href: '/insight-ai-automation',
    targetAudience: 'Operations Leaders & Business Owners',
  },
  {
    id: 'ai-video-brief',
    type: 'guide',
    category: 'ai',
    categoryLabel: 'AI CONTENT & VIDEO',
    art: 'video',
    readTime: '3 MIN READ',
    title: 'The Brief That Makes AI Video Useful Instead of Generic',
    copy: 'Audience definition, promise hook, proof demonstration, visual narrative direction, and human editorial review.',
    href: '/insight-ai-video-brief',
    targetAudience: 'Creative Directors & Content Producers',
  },

  /* ------------------------------------------------------------- */
  /* 5. REGULATORY & PLATFORM BRIEFS                                */
  /* ------------------------------------------------------------- */
  {
    id: 'update-amazon-fba-fees-2026',
    type: 'brief',
    category: 'briefs',
    categoryLabel: 'ECOMMERCE · PLATFORM UPDATE',
    art: 'supply',
    artFigure: '+$0.08',
    artNote: 'Average FBA fee increase per unit',
    readTime: '3 MIN READ',
    title: 'Amazon’s 2026 US FBA Fee Changes: What Operators Should Recalculate',
    copy: 'Effective dates, unit economics, packaging redesigns, inbound routing choices, and inventory-health actions.',
    href: '/update-amazon-fba-fees-2026',
  },
  {
    id: 'update-eu-ai-act-transparency-2026',
    type: 'brief',
    category: 'briefs',
    categoryLabel: 'AI · REGULATORY UPDATE',
    art: 'ai',
    artFigure: '02 AUG',
    artNote: '2026 transparency rules apply',
    readTime: '3 MIN READ',
    title: 'EU AI Act Transparency Rules Are Now Live: What AI Teams Should Know',
    copy: 'User disclosure, synthetic-content marking, deepfake labeling, and operating compliance audits.',
    href: '/update-eu-ai-act-transparency-2026',
  },
  {
    id: 'update-google-ads-consent-2026',
    type: 'brief',
    category: 'briefs',
    categoryLabel: 'MARKETING · PRIVACY POLICY',
    art: 'growth',
    artFigure: 'EEA',
    artNote: 'Consent signals affect measurement',
    readTime: '3 MIN READ',
    title: 'Google Ads Consent Requirements in 2026: A Practical EEA Checklist',
    copy: 'Consent banners, consent signals, tags, measurement preservation, and remarketing compliance.',
    href: '/update-google-ads-consent-2026',
  },
  {
    id: 'update-eu-ics2-2026',
    type: 'brief',
    category: 'briefs',
    categoryLabel: 'SUPPLY CHAIN · COMPLIANCE',
    art: 'supply',
    artFigure: 'ALL MODES',
    artNote: 'Air · Sea · Road · Rail',
    readTime: '3 MIN READ',
    title: 'ICS2 in 2026: Why Complete ENS Data Is Now an Operating Requirement',
    copy: 'Data quality, filing responsibility, and shipment-readiness for commercial goods entering the European Union.',
    href: '/update-eu-ics2-2026',
  },
  {
    id: 'update-google-search-2026',
    type: 'brief',
    category: 'briefs',
    categoryLabel: 'WEB · SEARCH COMPLIANCE',
    art: 'web',
    artFigure: '2026',
    artNote: 'Crawl · Index · Core Vitals',
    readTime: '3 MIN READ',
    title: 'Google Search in 2026: The Technical Basics That Still Decide Rankings',
    copy: 'Crawlability, indexing integrity, secure HTTPS delivery, mobile speed, accessibility, and Core Web Vitals.',
    href: '/update-google-search-2026',
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/blog')} />
      <JsonLd data={pageJsonLd('/blog', 'CollectionPage')} />

      <PageHero
        kicker="METT GLOBAL / INSIGHTS & KNOWLEDGE HUB"
        title={
          <>
            Proven frameworks.
            <br />
            <HeroAccent>Uncompromising execution.</HeroAccent>
          </>
        }
      >
        We do not publish generic content or theoretical speculation. Our field guides,
        platform briefs, and technical teardowns are battle-tested operational frameworks
        derived directly from our four core service practices: E-Commerce & Supply Chain,
        Web & Software Development, Digital Marketing & Growth, and AI Automation & Content.
      </PageHero>

      <Section>
        <BlogExplorer items={ALL_INSIGHTS} />
      </Section>

      <ContactBand
        heading={
          <>
            Read the insight.
            <br />
            Then put the system to work in your business.
          </>
        }
        copy="Whether you are auditing uncredited Amazon FBA inventory losses, engineering custom web platforms and ERP portals, or scaling high-converting performance marketing campaigns, our team translates operating strategy into measurable commercial results."
        ctaHref="/appointment"
        ctaLabel="Book a Strategy Consultation"
      />
    </PageShell>
  );
}
