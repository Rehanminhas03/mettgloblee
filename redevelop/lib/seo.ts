import type { Metadata } from 'next';
import { SITE_URL } from './site';

/**
 * Final production title/description for every route.
 *
 * The old build resolved these in two steps: a hard-coded `seoByPath` map in
 * `vite.config.ts` won, and any page not listed there kept the `<title>` and
 * `<meta name="description">` written in its own HTML file. Both steps are
 * already resolved here, so each entry is what actually shipped.
 */
export type PageSeo = { title: string; description: string };

export const PAGE_SEO = {
  '/': {
    title: 'MettGlobal | Growth, eCommerce, AI & Operations',
    description:
      'MettGlobal helps ambitious businesses improve eCommerce, marketing, websites, AI automation, supply chain and sales operations.',
  },
  '/services': {
    title: 'eCommerce, Web, AI & Operations Services | MettGlobal',
    description:
      'Explore MettGlobal services for eCommerce operations, websites, AI automation, marketing, supply chain, sales systems and audits.',
  },
  '/about': {
    title: 'About MettGlobal | Founder-Led Growth & Operations',
    description:
      'Meet MettGlobal, a Pakistan-based, globally focused team connecting growth, eCommerce, technology and operations.',
  },
  '/blog': {
    title: 'MettGlobal Insights | eCommerce, AI & Supply Chain',
    description:
      'Practical guides and current briefs on eCommerce operations, marketing, AI automation, websites, sales and supply chain.',
  },
  '/contact': {
    title: 'Contact MettGlobal | Start a Business Project',
    description:
      'Tell MettGlobal what is blocking growth, eCommerce, technology, marketing or operations and start a focused project discussion.',
  },
  '/appointment': {
    title: 'Book a Strategy Meeting | MettGlobal',
    description:
      'Choose a preferred date and time to discuss your business constraint with MettGlobal online or in person.',
  },
  '/case-studies': {
    title: 'MettGlobal Case Studies | Growth & Operations',
    description:
      'Review MettGlobal case studies across automotive marketing, lead generation, digital systems and measurable showroom outcomes.',
  },
  '/privacy': {
    title: 'Privacy Policy & Data Use | MettGlobal',
    description:
      'Read how MettGlobal handles website enquiries, analytics, communications and personal information.',
  },
  '/terms': {
    title: 'Website Terms of Use | MettGlobal',
    description:
      'Read the terms governing use of the MettGlobal website, enquiries, content, links and service discussions.',
  },
  '/sitemap': {
    title: 'MettGlobal Sitemap | All Website Pages',
    description:
      'Browse the public MettGlobal website, including services, case studies, insights, legal pages and contact routes.',
  },

  /* ---- Service pages ---- */
  '/ecommerce-growth': {
    title: 'eCommerce Operations & Amazon Management | MettGlobal',
    description:
      'Improve marketplace operations, catalog health, inventory, replenishment, fulfillment, claims and eCommerce growth.',
  },
  '/web-development': {
    title: 'Website Design & Conversion Development | MettGlobal',
    description:
      'Build faster, clearer websites and landing pages with responsive UX, conversion paths, analytics and technical SEO foundations.',
  },
  '/ai-automation': {
    title: 'AI Automation Services for Growing Businesses | MettGlobal',
    description:
      'Map repetitive workflows and implement practical AI automation for lead handling, operations, reporting and internal processes.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing & Creative Services | MettGlobal',
    description:
      'Connect paid media, creative, offers, landing pages and follow-up into a more measurable customer acquisition system.',
  },
  '/operations-supply-chain': {
    title: 'Supply Chain & 3PL Operations Support | MettGlobal',
    description:
      'Strengthen inventory, replenishment, warehouse, 3PL, sourcing, freight and operational reporting across growing businesses.',
  },
  '/lead-generation-sales': {
    title: 'Lead Generation & Sales Systems | MettGlobal',
    description:
      'Build better prospecting, qualification, CRM, outreach and follow-up systems for a more disciplined commercial pipeline.',
  },
  '/ai-content-production': {
    title: 'AI Video & Content Production | MettGlobal',
    description:
      'Produce useful AI-assisted video and content with stronger briefs, creative direction, brand consistency and human review.',
  },
  '/audits-diagnostics': {
    title: 'Website, SEO & Operations Audits | MettGlobal',
    description:
      'Find the constraint with evidence-led audits across websites, funnels, eCommerce, SEO, performance, workflows and operations.',
  },

  /* ---- Case studies ---- */
  '/case-study-csm-ittehad': {
    title: 'CSM Ittehad Case Study | MettGlobal',
    description:
      'A MettGlobal case study on EV marketing, lead generation, automation and showroom visits for CSM Ittehad Islamabad.',
  },
  '/case-study-hyundai-islamabad': {
    title: 'Hyundai Islamabad Case Study | MettGlobal',
    description:
      'A MettGlobal case study on content, customer journeys, lead handling and local growth infrastructure for Hyundai Islamabad.',
  },
  '/case-study-jetour-ittehad': {
    title: 'Jetour Ittehad Case Study | MettGlobal',
    description:
      'A MettGlobal case study on Meta lead generation, automation, outdoor visibility and showroom growth for Jetour Ittehad.',
  },

  /* ---- Current platform & policy updates ---- */
  '/update-amazon-fba-fees-2026': {
    title: 'Amazon FBA Fees 2026: Operator Brief | MettGlobal',
    description:
      'Understand Amazon’s 2026 US FBA fee changes, SKU-level margins, packaging, inbound costs and inventory actions.',
  },
  '/update-eu-ai-act-transparency-2026': {
    title: 'EU AI Act Transparency Rules 2026 | MettGlobal Blog',
    description:
      'A practical business brief on EU AI Act transparency obligations applying from August 2, 2026 for interactive and generative AI systems.',
  },
  '/update-google-ads-consent-2026': {
    title: 'Google Ads Consent Requirements in 2026 | MettGlobal Blog',
    description:
      'A practical 2026 checklist for Google Ads consent requirements affecting EEA traffic, measurement, personalization and remarketing.',
  },
  '/update-eu-ics2-2026': {
    title: 'EU ICS2 in 2026 | MettGlobal Blog',
    description:
      'A practical supply-chain brief on the EU Import Control System 2, ENS data quality and all-mode transport requirements in 2026.',
  },
  '/update-google-search-2026': {
    title: 'Google Search Technical Basics in 2026 | MettGlobal Blog',
    description:
      'A current 2026 technical SEO brief based on Google Search documentation covering crawlability, indexing, security, performance and accessibility.',
  },

  /* ---- Insight guides ---- */
  '/insight-ecommerce-operations': {
    title: 'eCommerce Operations After the Click | MettGlobal Blog',
    description:
      'A practical guide to operational leaks behind eCommerce growth: inventory, fulfillment, returns, marketplace health and reporting.',
  },
  '/insight-conversion-audit': {
    title: 'Website Conversion Audit | MettGlobal Blog',
    description:
      'A practical conversion-audit framework covering message clarity, trust, mobile friction, CTAs and lead capture.',
  },
  '/insight-ai-automation': {
    title: 'Practical AI Automation | MettGlobal Blog',
    description:
      'How to identify AI automation opportunities in repetitive business workflows without automating broken processes.',
  },
  '/insight-growth-system': {
    title: 'Ads, Offers and Landing Pages | MettGlobal Blog',
    description:
      'Diagnose the acquisition chain from audience and creative through offer, landing page and follow-up before increasing ad spend.',
  },
  '/insight-supply-chain-control': {
    title: 'Inventory Accuracy Is a System | MettGlobal Blog',
    description:
      'A practical supply-chain guide to receiving, location control, stock adjustments, cycle counts and inventory exception ownership.',
  },
  '/insight-lead-generation-system': {
    title: 'Build a Prospecting System | MettGlobal Blog',
    description:
      'A practical lead-generation guide covering ICP definition, buying signals, qualification, CRM hygiene, personalized outreach and follow-up.',
  },
  '/insight-ai-video-brief': {
    title: 'The AI Video Brief | MettGlobal Blog',
    description:
      'A practical briefing framework for AI-assisted video covering audience, objective, hook, proof, structure, visual direction and human review.',
  },
  '/insight-audit-framework': {
    title: 'How to Run an Actionable Business Audit | MettGlobal Blog',
    description:
      'A practical audit framework covering evidence, severity, business impact, ownership, prioritization and measurable next steps.',
  },
  '/insight-utm-governance': {
    title: 'UTMs That Survive Reporting | MettGlobal Blog',
    description:
      'A practical UTM governance system for consistent campaign naming, cleaner reporting and fewer attribution surprises.',
  },
  '/insight-product-feed-health': {
    title: 'The Product Feed Is Part of the Storefront | MettGlobal Blog',
    description:
      'A practical Merchant Center product-feed health check for stable IDs, accurate titles, strong images, price parity and better eligibility.',
  },
  '/insight-landed-cost-model': {
    title: 'Landed Cost Before Launch | MettGlobal Blog',
    description:
      'A practical landed-cost model for cross-border launches, including origin charges, freight, duty, destination fees and returns risk.',
  },
  '/insight-3pl-scorecard': {
    title: 'The 3PL Scorecard | MettGlobal Blog',
    description:
      'How to compare 3PL and warehouse partners using service reliability, inventory control, systems, cost transparency and resilience.',
  },
  '/insight-digital-product-passport': {
    title: 'Digital Product Passports | MettGlobal Guide',
    description:
      'Prepare product identity, materials, evidence, ownership, access and version-control data for Digital Product Passport requirements.',
  },

  /* ---- Utility pages ---- */
  '/contact-success': {
    title: 'Message Received | MettGlobal',
    description:
      'Your MettGlobal enquiry has been received. We will review the details and respond by email.',
  },
  '/404': {
    title: 'Page Not Found | MettGlobal',
    description:
      'The requested MettGlobal page could not be found. Return to the homepage or explore our services and case studies.',
  },
} as const satisfies Record<string, PageSeo>;

export type PagePath = keyof typeof PAGE_SEO;

/**
 * Builds the `Metadata` for a route, mirroring the tags the Vite plugin
 * injected: canonical, Open Graph, Twitter card and the shared social image.
 */
export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = PAGE_SEO[path];
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'MettGlobal',
      type: 'website',
      locale: 'en_PK',
      images: [{ url: `${SITE_URL}/social-card.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/social-card.png`],
    },
  };
}

/**
 * BreadcrumbList JSON-LD, injected on every page except the homepage by the
 * old build. The label is the title up to the first `|`.
 */
export function breadcrumbJsonLd(path: PagePath) {
  if (path === '/') return null;
  const name = PAGE_SEO[path].title.split('|')[0].trim();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The eight service routes that also received `Service` JSON-LD. */
export const SERVICE_PATHS = [
  '/ecommerce-growth',
  '/web-development',
  '/ai-automation',
  '/digital-marketing',
  '/operations-supply-chain',
  '/lead-generation-sales',
  '/ai-content-production',
  '/audits-diagnostics',
] as const;

export function serviceJsonLd(path: (typeof SERVICE_PATHS)[number]) {
  const { title, description } = PAGE_SEO[path];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title.split('|')[0].trim(),
    provider: {
      '@type': 'Organization',
      name: 'MettGlobal',
      url: `${SITE_URL}/`,
    },
    areaServed: 'Worldwide',
    url: `${SITE_URL}${path}`,
    description,
  };
}
