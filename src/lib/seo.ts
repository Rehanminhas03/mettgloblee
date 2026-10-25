import { CASE_NAMES } from './caseNames';
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
    title: 'Mett Global | Digital Marketing & Software, Islamabad',
    description:
      'Digital marketing, web and software development, AI automation and e-commerce operations from Islamabad, Pakistan. Explore Mett Global services and client work.',
  },
  '/services': {
    title: 'Digital Marketing, Web, AI & E-Commerce Services | Mett Global',
    description:
      'Explore Mett Global services: Digital Marketing & Growth, Web & Software Development, AI Automation & Content, and E-Commerce & Supply Chain.',
  },
  '/about': {
    title: 'About Mett Global | Founder-Led Growth & Operations',
    description:
      'Mett Global was founded in 2025 and is based in Islamabad, Pakistan: a founder-led team connecting growth, eCommerce, technology and operations.',
  },
  '/blog': {
    title: 'Mett Global Insights | eCommerce, AI & Supply Chain',
    description:
      'Practical guides and current briefs on eCommerce operations, marketing, AI automation, websites, sales and supply chain.',
  },
  '/contact': {
    title: 'Contact Mett Global | Start a Business Project',
    description:
      'Tell Mett Global what is blocking growth, eCommerce, technology, marketing or operations and start a focused project discussion.',
  },
  '/appointment': {
    title: 'Book a Strategy Meeting | Mett Global',
    description:
      'Choose a preferred date and time to discuss your business constraint with Mett Global online or in person.',
  },
  '/portfolio': {
    title: 'Mett Global Portfolio | Local & International Work',
    description:
      'Selected Mett Global clients and projects across growth, eCommerce, web, AI automation and operations, in Pakistan and internationally.',
  },
  '/case-studies': {
    title: 'Mett Global Case Studies | Growth & Operations',
    description:
      'Review Mett Global case studies across automotive marketing, lead generation, digital systems and measurable showroom outcomes.',
  },
  '/privacy': {
    title: 'Privacy Policy & Data Use | Mett Global',
    description:
      'Read how Mett Global handles website enquiries, analytics, communications and personal information.',
  },
  '/terms': {
    title: 'Website Terms of Use | Mett Global',
    description:
      'Read the terms governing use of the Mett Global website, enquiries, content, links and service discussions.',
  },
  '/sitemap': {
    title: 'Mett Global Sitemap | All Website Pages',
    description:
      'Browse the public Mett Global website, including services, case studies, insights, legal pages and contact routes.',
  },

  /* ---- Service pages ---- */
  '/digital-marketing-growth': {
    title: 'Digital Marketing Agency & SEO in Islamabad | Mett Global',
    description:
      'Premier digital marketing agency in Islamabad, Pakistan. Performance marketing, Google Ads, Meta Ads, social media, local SEO, creative and analytics built for measurable growth.',
  },
  '/web-software-development': {
    title: 'Web & Custom Software Development Company, Islamabad | Mett Global',
    description:
      'Web & software development agency in Islamabad: high-speed websites, online stores, custom CRMs, dealership ERPs, and secure web applications built around your business.',
  },
  '/ai-automation-content': {
    title: 'AI Automation & Content Workflows Agency, Pakistan | Mett Global',
    description:
      'AI Automation & Content from Mett Global: workflow automation, AI assistants, document and data processing, lead and CRM automation, and on-brand AI content.',
  },
  '/ecommerce-supply-chain': {
    title: 'Amazon FBA & E-Commerce Supply Chain Services (USA, UK, EU, Canada) | Mett Global',
    description:
      'End-to-end multi-channel e-commerce supply chain management: Amazon FBA reimbursement, courier & 3PL claims recovery, marketplace operations across USA, UK, EU, and Canada.',
  },

  /* ---- Case studies ---- */
  '/portfolio/csm-ittehad': {
    title: CASE_NAMES['csm-ittehad'].metaTitle,
    description:
      'Electric vehicle (EV) dealership marketing in Islamabad: Meta ad acquisition, automated CRM lead capture, and 112 showroom visits for Capital Smart Motors (CSM Ittehad).',
  },
  '/portfolio/hyundai-islamabad': {
    title: CASE_NAMES['hyundai-islamabad'].metaTitle,
    description:
      'Automotive dealership growth in Islamabad: 3 managed social channels, connected lead funnel, digital journeys, and showroom visits for Hyundai Islamabad.',
  },
  '/portfolio/jetour-ittehad': {
    title: CASE_NAMES['jetour-ittehad'].metaTitle,
    description:
      'Automotive dealership marketing in Islamabad: 1,000+ verified leads, Meta Ads campaigns, CRM lead automation, 5+ billboards, and showroom activations for Jetour Ittehad.',
  },

  /* ---- Current platform & policy updates ---- */
  '/update-amazon-fba-fees-2026': {
    title: 'Amazon FBA Fees 2026: Operator Brief | Mett Global',
    description:
      'Understand Amazon’s 2026 US FBA fee changes, SKU-level margins, packaging, inbound costs and inventory actions.',
  },
  '/update-eu-ai-act-transparency-2026': {
    title: 'EU AI Act Transparency Rules 2026 | Mett Global Blog',
    description:
      'A practical business brief on EU AI Act transparency obligations applying from August 2, 2026 for interactive and generative AI systems.',
  },
  '/update-google-ads-consent-2026': {
    title: 'Google Ads Consent Requirements in 2026 | Mett Global Blog',
    description:
      'A practical 2026 checklist for Google Ads consent requirements affecting EEA traffic, measurement, personalization and remarketing.',
  },
  '/update-eu-ics2-2026': {
    title: 'EU ICS2 in 2026 | Mett Global Blog',
    description:
      'A practical supply-chain brief on the EU Import Control System 2, ENS data quality and all-mode transport requirements in 2026.',
  },
  '/update-google-search-2026': {
    title: 'Google Search Technical Basics in 2026 | Mett Global Blog',
    description:
      'A current 2026 technical SEO brief based on Google Search documentation covering crawlability, indexing, security, performance and accessibility.',
  },

  /* ---- Insight guides ---- */
  '/insight-amazon-fba-inbound-claims': {
    title: 'Amazon FBA Inbound Shipment Loss & Recovery Guide | Mett Global',
    description:
      'How 7-figure Amazon brands audit and recover lost inbound shipments, warehouse carrier shortages, and dock discrepancies before the 18-month lookback window closes.',
  },
  '/insight-amazon-fba-fee-audit': {
    title: 'Amazon FBA Weight & Dimension Fee Audit Guide | Mett Global',
    description:
      'How to audit historical Cubiscan measurement errors, dispute misclassified size tiers, and recover compounding fee overcharges within the 90-day dispute window.',
  },
  '/insight-manual-amazon-reimbursement-vs-bots': {
    title: 'Manual vs Automated Amazon Reimbursements | Mett Global',
    description:
      'Why automated bots get claims denied and accounts throttled, and how human forensic auditing recovers maximum capital under 100% Amazon ToS compliance.',
  },
  '/insight-amazon-fba-lost-damaged-inventory': {
    title: 'Amazon FBA Lost & Damaged Inventory Guide | Mett Global',
    description:
      'How 7-figure brands reconcile warehouse damage, uncredited lost items, and missing customer returns before Amazon 18-month dispute deadline.',
  },
  '/insight-ecommerce-operations': {
    title: 'eCommerce Operations After the Click | Mett Global Blog',
    description:
      'A practical guide to operational leaks behind eCommerce growth: inventory, fulfillment, returns, marketplace health and reporting.',
  },
  '/insight-conversion-audit': {
    title: 'Website Conversion Audit | Mett Global Blog',
    description:
      'A practical conversion-audit framework covering message clarity, trust, mobile friction, CTAs and lead capture.',
  },
  '/insight-ai-automation': {
    title: 'Practical AI Automation | Mett Global Blog',
    description:
      'How to identify AI automation opportunities in repetitive business workflows without automating broken processes.',
  },
  '/insight-growth-system': {
    title: 'Ads, Offers and Landing Pages | Mett Global Blog',
    description:
      'Diagnose the acquisition chain from audience and creative through offer, landing page and follow-up before increasing ad spend.',
  },
  '/insight-supply-chain-control': {
    title: 'Inventory Accuracy Is a System | Mett Global Blog',
    description:
      'A practical supply-chain guide to receiving, location control, stock adjustments, cycle counts and inventory exception ownership.',
  },
  '/insight-lead-generation-system': {
    title: 'Build a Prospecting System | Mett Global Blog',
    description:
      'A practical lead-generation guide covering ICP definition, buying signals, qualification, CRM hygiene, personalized outreach and follow-up.',
  },
  '/insight-ai-video-brief': {
    title: 'The AI Video Brief | Mett Global Blog',
    description:
      'A practical briefing framework for AI-assisted video covering audience, objective, hook, proof, structure, visual direction and human review.',
  },
  '/insight-utm-governance': {
    title: 'UTMs That Survive Reporting | Mett Global Blog',
    description:
      'A practical UTM governance system for consistent campaign naming, cleaner reporting and fewer attribution surprises.',
  },
  '/insight-product-feed-health': {
    title: 'The Product Feed Is Part of the Storefront | Mett Global Blog',
    description:
      'A practical Merchant Center product-feed health check for stable IDs, accurate titles, strong images, price parity and better eligibility.',
  },
  '/insight-landed-cost-model': {
    title: 'Landed Cost Before Launch | Mett Global Blog',
    description:
      'A practical landed-cost model for cross-border launches, including origin charges, freight, duty, destination fees and returns risk.',
  },
  '/insight-3pl-scorecard': {
    title: 'The 3PL Scorecard | Mett Global Blog',
    description:
      'How to compare 3PL and warehouse partners using service reliability, inventory control, systems, cost transparency and resilience.',
  },
  '/insight-erp-for-growing-businesses': {
    title: 'When a Growing Business Needs Its Own ERP | Mett Global Blog',
    description:
      'A practical guide to recognising when spreadsheets stop working, how to map the customer journey, and what a custom ERP should track.',
  },
  '/insight-booking-app-partner-portal': {
    title: 'Booking Apps & Partner Portals Guide | Mett Global Blog',
    description:
      'What an on-demand service business needs beyond the customer app: slot booking, rider assignment, an owner admin portal and partner portals.',
  },
  '/insight-digital-outdoor-marketing': {
    title: 'Digital and Outdoor Marketing Together | Mett Global Blog',
    description:
      'How Instagram, short video, billboards and posters can work as one system, with a clear next step and honest measurement.',
  },
  '/insight-amazon-inbound-placement-fees': {
    title: 'Amazon Inbound Placement Fees & Lost Inventory Guide | Mett Global',
    description:
      'How US Amazon brands audit inbound placement fee economics, identify receiving dock shortages, and recover uncredited inventory within the 18-month window.',
  },
  '/insight-custom-portals-vs-saas': {
    title: 'Custom Portals vs. SaaS for US Logistics & Service Firms | Mett Global',
    description:
      'Why growing US 3PLs and service operators hit the SaaS ceiling, and how custom portal engineering cuts operating costs, eliminates per-seat fees, and scales.',
  },
  '/insight-b2b-lead-generation-apollo-stack': {
    title: 'B2B Lead Generation Without Ad Waste (Apollo Stack) | Mett Global',
    description:
      'How US B2B enterprises replace $90 CPC Google Ads with reverse IP visitor identification, multi-threaded Apollo enrichment, and high-deliverability outbound.',
  },
  '/insight-amazon-awd-vs-3pl': {
    title: 'Amazon AWD vs. Private 3PL: Cost & Control Matrix | Mett Global',
    description:
      'How US 7-to-8 figure brand owners balance Amazon AWD placement fee waivers against 3PL multi-channel flexibility, inventory sovereignty, and stockout defense.',
  },
  '/insight-nextjs-vs-no-code-portals': {
    title: 'Why Next.js Beats Airtable & Softr for B2B Client Portals | Mett Global',
    description:
      'Why scaling US logistics and service companies hit the no-code wall, and how custom Next.js engineering delivers sub-second speed and zero seat licensing.',
  },

  /* ---- Utility pages ---- */
  '/404': {
    title: 'Page Not Found | Mett Global',
    description:
      'The requested Mett Global page could not be found. Return to the homepage or explore our services and case studies.',
  },
} as const satisfies Record<string, PageSeo>;

export type PagePath = keyof typeof PAGE_SEO;

/**
 * Builds the `Metadata` for a route, mirroring the tags the Vite plugin
 * injected: canonical, Open Graph, Twitter card and the shared social image.
 */
export function pageMetadata(path: PagePath): Metadata {
  return routeMetadata(path, PAGE_SEO[path]);
}

/**
 * Same tags as `pageMetadata`, for routes whose copy lives outside
 * `PAGE_SEO` (the portfolio and operations case-study detail pages). The
 * shared social image is kept, and the title is used as written so the brand
 * is never appended twice.
 */
export function routeMetadata(
  path: string,
  { title, description }: PageSeo,
): Metadata {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mett Global',
      type:
        path.startsWith('/insight-') || path.startsWith('/update-')
          ? 'article'
          : 'website',
      locale: 'en_PK',
      images: [
        {
          url: `${SITE_URL}/social-card.png`,
          width: 1200,
          height: 630,
          alt: 'Mett Global, digital marketing, technology and operations',
        },
      ],
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
      '@id': `${SITE_URL}/#organization`,
      name: 'Mett Global',
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
          '@id': `${SITE_URL}/#organization`,
          name: 'Mett Global',
          url: `${SITE_URL}/`,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Mett Global',
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
    isPartOf: { '@type': 'WebSite', name: 'Mett Global', url: `${SITE_URL}/` },
    about: { '@id': `${SITE_URL}/#organization` },
  };
}

const CASE_STUDY_METRIC_FAQS: Record<
  string,
  Array<{ question: string; answer: string }>
> = {
  '/portfolio/jetour-ittehad': [
    {
      question:
        'What were the results of the Jetour Ittehad digital marketing launch in Islamabad?',
      answer:
        'Mett Global generated over 1,000 verified leads, 50+ confirmed vehicle bookings, and drove over 30% of leads to the showroom visit stage or beyond using Meta Ads, CRM lead automation, and outdoor billboard campaigns.',
    },
    {
      question:
        'How does Mett Global manage automotive dealership marketing in Islamabad?',
      answer:
        'We build connected dealership acquisition funnels combining Meta reel and feed ads, automated lead routing into CRM/sheets, instant sales team notifications, and local showroom activations.',
    },
    {
      question:
        'Which marketing channels were used for Jetour Ittehad in Islamabad?',
      answer:
        'Meta advertising (Instagram Reels and Facebook), automated lead capture forms, Google Sheets/CRM integration, 5-6 billboard placements across Islamabad, and 7 on-ground brand activations.',
    },
  ],
  '/portfolio/hyundai-islamabad': [
    {
      question:
        'What automotive marketing services were provided for Hyundai Islamabad?',
      answer:
        'Mett Global managed 3 social channels, designed a connected digital lead funnel, handled showroom visit attribution, and synchronized outdoor visibility with digital marketing campaigns.',
    },
    {
      question:
        'How does Mett Global increase footfall and test-drive bookings for car dealerships?',
      answer:
        'By connecting localized social content and Meta ad campaigns directly to lead-handling workflows, follow-up automation, and measurable showroom visit tracking.',
    },
  ],
  '/portfolio/csm-ittehad': [
    {
      question:
        'How did Capital Smart Motors (CSM Ittehad) generate showroom visits for electric vehicles in Islamabad?',
      answer:
        'Mett Global launched the EV brand presence, ran Meta acquisition campaigns generating ~400 client-reported leads, and converted 112 verified showroom visits at a ~28% lead-to-visit rate.',
    },
    {
      question:
        'What was the lead-to-visit conversion rate for CSM Ittehad EV showroom?',
      answer:
        'CSM Ittehad achieved an estimated 28% lead-to-visit conversion rate, resulting in 112 documented showroom visits from approximately 400 digital leads.',
    },
  ],
};

/** Structured data for a case study with Article, location, and FAQPage nodes for AI engines. */
export function caseStudyJsonLd(path: PagePath) {
  const { title, description } = PAGE_SEO[path];
  const url = `${SITE_URL}${path}`;
  const headline = title.split('|')[0].trim();
  const faqs = CASE_STUDY_METRIC_FAQS[path];

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline,
      description,
      url,
      mainEntityOfPage: url,
      image: `${SITE_URL}/social-card.png`,
      inLanguage: 'en',
      contentLocation: {
        '@type': 'City',
        name: 'Islamabad',
        containedInPlace: {
          '@type': 'Country',
          name: 'Pakistan',
        },
      },
      about: [
        'Automotive Dealership Marketing',
        'Lead Generation',
        'Meta Ads',
        'Showroom Footfall',
      ],
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
