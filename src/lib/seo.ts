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
    title: 'MettGlobal | Digital Marketing, Software, AI & E-Commerce',
    description:
      'MettGlobal is an Islamabad, Pakistan company that builds, grows and automates businesses worldwide: digital marketing, web and software, AI automation and e-commerce.',
  },
  '/services': {
    title: 'Digital Marketing, Web, AI & E-Commerce Services | MettGlobal',
    description:
      'Explore MettGlobal services: Digital Marketing & Growth, Web & Software Development, AI Automation & Content, and E-Commerce & Supply Chain.',
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
  '/portfolio': {
    title: 'MettGlobal Portfolio | Local & International Work',
    description:
      'Selected MettGlobal clients and projects across growth, eCommerce, web, AI automation and operations, in Pakistan and internationally.',
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
  '/digital-marketing-growth': {
    title: 'Digital Marketing & Growth | MettGlobal',
    description:
      'Digital Marketing & Growth from MettGlobal: performance marketing, Meta and Google Ads, social media, SEO, creative and analytics built for measurable growth.',
  },
  '/web-software-development': {
    title: 'Web & Software Development, Custom CRM | MettGlobal',
    description:
      'Web & Software Development from MettGlobal: websites, online stores, custom CRMs, web applications, integrations and hosting built around how your business works.',
  },
  '/ai-automation-content': {
    title: 'AI Automation & Content | MettGlobal',
    description:
      'AI Automation & Content from MettGlobal: workflow automation, AI assistants, document and data processing, lead and CRM automation, and on-brand AI content.',
  },
  '/ecommerce-supply-chain': {
    title: 'E-Commerce & Supply Chain Management | MettGlobal',
    description:
      'E-Commerce & Supply Chain from MettGlobal: marketplace management, inventory, sourcing, 3PL and logistics, claims and reimbursement recovery, and reporting.',
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
  '/insight-erp-for-growing-businesses': {
    title: 'When a Growing Business Needs Its Own ERP | MettGlobal Blog',
    description:
      'A practical guide to recognising when spreadsheets stop working, how to map the customer journey, and what a custom ERP should track.',
  },
  '/insight-booking-app-partner-portal': {
    title: 'Booking Apps & Partner Portals Guide | MettGlobal Blog',
    description:
      'What an on-demand service business needs beyond the customer app: slot booking, rider assignment, an owner admin portal and partner portals.',
  },
  '/insight-digital-outdoor-marketing': {
    title: 'Digital and Outdoor Marketing Together | MettGlobal Blog',
    description:
      'How Instagram, short video, billboards and posters can work as one system, with a clear next step and honest measurement.',
  },

  /* ---- Utility pages ---- */
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

/** The service routes that also receive `Service` JSON-LD. */
export const SERVICE_PATHS = [
  '/digital-marketing-growth',
  '/web-software-development',
  '/ai-automation-content',
  '/ecommerce-supply-chain',
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

/**
 * Article + BreadcrumbList structured data for the blog guides and briefs.
 * Headline and description come from `PAGE_SEO`, so they always match the
 * page's title and meta description.
 */
export function articleJsonLd(path: PagePath) {
  const { title, description } = PAGE_SEO[path];
  const url = `${SITE_URL}${path}`;
  const headline = title.split('|')[0].trim();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline,
        description,
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}/social-card.png`,
        inLanguage: 'en',
        author: {
          '@type': 'Organization',
          name: 'MettGlobal',
          url: `${SITE_URL}/`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'MettGlobal',
          url: `${SITE_URL}/`,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-512.png` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          { '@type': 'ListItem', position: 3, name: headline, item: url },
        ],
      },
    ],
  };
}

type WebPageType = 'WebPage' | 'CollectionPage' | 'ContactPage' | 'AboutPage';

/**
 * Typed `WebPage` structured data tying a page to the site and the
 * organization. Title and description come from `PAGE_SEO`.
 */
export function pageJsonLd(path: PagePath, type: WebPageType = 'WebPage') {
  const { title, description } = PAGE_SEO[path];
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title.split('|')[0].trim(),
    description,
    inLanguage: 'en',
    dateModified: '2026-10-06',
    isPartOf: { '@type': 'WebSite', name: 'MettGlobal', url: `${SITE_URL}/` },
    about: { '@id': `${SITE_URL}/#organization` },
  };
}

/** `Article` structured data for a case study (no blog breadcrumb). */
export function caseStudyJsonLd(path: PagePath) {
  const { title, description } = PAGE_SEO[path];
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title.split('|')[0].trim(),
    description,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}/social-card.png`,
    inLanguage: 'en',
    dateModified: '2026-10-06',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}
