import { CASE_NAMES } from './caseNames';
import type { Metadata } from 'next';
import { SITE_URL } from './site';
import { SERVICE_GUIDANCE } from './service-guidance';

/**
 * Single source of truth for page titles and meta descriptions across the site.
 * Keeps `<title>`, `<meta name="description">`, Open Graph, Twitter card and
 * JSON-LD schema perfectly in sync.
 *
 * Rules (from ANTIGRAVITY_MASTER_SAFE.txt):
 *  - Every title strictly under 60 characters, keyword first, mentioning USA & Pakistan where it fits
 *  - Every description under 155 characters, clear, one main keyword
 *  - No em dashes or en dashes anywhere
 *  - Do not open any title or description with the 50,000 pound figure
 */
export type PageSeo = { title: string; description: string };

export const PAGE_SEO = {
  '/': {
    title: 'Digital Marketing, Software & Ecommerce | Mett Global',
    description:
      'Mett Global helps businesses in the USA and Pakistan grow with digital marketing, custom software, AI automation and ecommerce operations.',
  },
  '/services': {
    title: 'Marketing, Software, AI & Ecommerce Services | Mett Global',
    description:
      'Four connected capabilities from our Islamabad HQ for US and Pakistani businesses: digital marketing, custom software, AI automation and supply chain.',
  },
  '/about': {
    title:
      'About Mett Global | Islamabad Headquarters & U.S. Business Representation',
    description:
      'Headquartered in Islamabad with U.S. business representation. Mett Global is led by Hammad Ayub, Muhammad Ahmad Aamir and Usman Rafiq.',
  },
  '/blog': {
    title: 'Mett Global Blog | Amazon FBA, ERP, AI & Growth Guides',
    description:
      'Operator guides for US 7 to 8 figure Amazon brands, 3PL operators and enterprise teams on FBA fee recovery, custom ERPs, AI and growth.',
  },
  '/contact': {
    title: 'Contact Mett Global | Pakistan & USA',
    description:
      'Start a project with Mett Global. Contact our Islamabad HQ (+92 313 426 2282) or US Business Development Director Usman Rafiq (+1 832-858-0716).',
  },
  '/appointment': {
    title: 'Book a Strategy Call | Mett Global',
    description:
      'Schedule an online strategy call in your local time zone, or request a focused project discussion with Mett Global.',
  },
  '/portfolio': {
    title: 'Mett Global Portfolio | Pakistan & USA Case Studies',
    description:
      'Explore verified case studies: Jetour and Hyundai growth systems in Islamabad, US warehouse operations, FBA claims recovery, and SEO in Texas and Illinois.',
  },
  '/case-studies': {
    title: 'Mett Global Case Studies | Growth & Operations',
    description:
      'Review verified client case studies across automotive marketing in Islamabad, US warehouse operations, Amazon FBA fee recovery, and custom software.',
  },
  '/privacy': {
    title: 'Privacy Policy & Data Use | Mett Global',
    description:
      'Read how Mett Global handles website inquiries, analytics, communications and personal information.',
  },
  '/terms': {
    title: 'Website Terms of Use | Mett Global',
    description:
      'Read the terms governing use of the Mett Global website, inquiries, content, links and service discussions.',
  },
  '/sitemap': {
    title: 'Mett Global Sitemap | All Website Pages',
    description:
      'A directory of every public page, service line, insight guide and verified case study published on Mett Global.',
  },

  /* ---- Service pages ---- */
  '/digital-marketing-growth': {
    title: 'Meta Ads & Digital Marketing Agency | Mett Global',
    description:
      'Full-funnel digital marketing, Meta and Google Ads, SEO, and CRM automation for growing businesses in the USA and Pakistan.',
  },
  '/web-software-development': {
    title: 'Web Apps, ERP & Software Development | Mett Global',
    description:
      'We build high-converting websites, custom Next.js B2B portals, multi-showroom dealership ERPs, and mobile apps for US and Pakistani businesses.',
  },
  '/ai-automation-content': {
    title: 'AI Automation, Chatbots & CRM | Mett Global',
    description:
      'Remove repetitive manual work with custom AI workflow automation, intelligent chatbots, document extraction, and automated CRM lead routing.',
  },
  '/ecommerce-supply-chain': {
    title: 'Amazon FBA Claims & Ecommerce Ops | Mett Global',
    description:
      'Amazon FBA and Walmart claims recovery, 3PL audits and remote US warehouse operations for ecommerce brands in the USA and worldwide.',
  },

  /* ---- Case studies ---- */
  '/portfolio/csm-ittehad': {
    title: CASE_NAMES['csm-ittehad'].metaTitle,
    description:
      'Electric vehicle dealership marketing in Islamabad: Meta ads, automated CRM lead capture, and 112 showroom visits for Capital Smart Motors.',
  },
  '/portfolio/hyundai-islamabad': {
    title: CASE_NAMES['hyundai-islamabad'].metaTitle,
    description:
      'Automotive dealership growth in Islamabad: 3 managed social channels, connected lead funnel, digital journeys, and showroom visits for Hyundai.',
  },
  '/portfolio/jetour-ittehad': {
    title: CASE_NAMES['jetour-ittehad'].metaTitle,
    description:
      'Automotive dealership marketing in Islamabad: 1,000+ verified leads, Meta Ads campaigns, CRM lead automation, and showroom activations for Jetour.',
  },

  /* ---- Current platform & policy updates ---- */
  '/update-amazon-fba-fees-2026': {
    title: 'Amazon FBA Fees 2026: Operator Brief | Mett Global',
    description:
      'Understand Amazon 2026 US FBA fee changes, SKU-level margins, packaging, inbound costs and inventory actions.',
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

  /* ---- Existing Insight guides ---- */
  '/insight-amazon-fba-inbound-claims': {
    title: 'Amazon FBA Inbound Shipment Loss Guide | Mett Global',
    description:
      'How 7-figure Amazon brands audit and recover lost inbound shipments, carrier shortages, and dock discrepancies before dispute windows close.',
  },
  '/insight-amazon-fba-fee-audit': {
    title: 'Amazon FBA Weight & Dimension Fee Audit | Mett Global',
    description:
      'How to audit historical Cubiscan measurement errors, dispute misclassified size tiers, and recover fee overcharges within the 90-day dispute window.',
  },
  '/insight-manual-amazon-reimbursement-vs-bots': {
    title: 'Manual vs Automated Amazon Reimbursements | Mett Global',
    description:
      'Where reimbursement software helps, where claims still need a person, and what Amazon\'s policy says about premature or high volume requests.',
  },
  '/insight-amazon-fba-lost-damaged-inventory': {
    title: 'Amazon FBA Lost & Damaged Inventory Guide | Mett Global',
    description:
      'How to read FBA Inventory Ledger codes and file lost, damaged, and customer return claims inside Amazon\'s current windows for each case type.',
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
    title: 'Product Feed Health for Storefronts | Mett Global Blog',
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
    title: 'When a Growing Business Needs an ERP | Mett Global Blog',
    description:
      'A practical guide to recognizing when spreadsheets stop working, how to map the customer journey, and what a custom ERP should track.',
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
    title: 'Amazon Inbound Placement Fees Guide | Mett Global',
    description:
      'How US Amazon brands audit inbound placement fees, identify receiving dock shortages, and recover inventory within dispute windows.',
  },
  '/insight-custom-portals-vs-saas': {
    title: 'Custom Portals vs SaaS for Logistics | Mett Global',
    description:
      'Why growing US 3PLs and service operators hit the SaaS ceiling, and how custom portal engineering cuts operating costs, eliminates per-seat fees, and scales.',
  },
  '/insight-b2b-lead-generation-apollo-stack': {
    title: 'B2B Lead Gen with Apollo Stack | Mett Global',
    description:
      'How US B2B enterprises replace high CPC ads with reverse IP visitor identification, multi-threaded Apollo enrichment, and high-deliverability outbound.',
  },
  '/insight-amazon-awd-vs-3pl': {
    title: 'Amazon AWD vs Private 3PL Cost Guide | Mett Global',
    description:
      'How US 7-to-8 figure brand owners balance Amazon AWD placement fee waivers against 3PL multi-channel flexibility, inventory sovereignty, and stockout defense.',
  },
  '/insight-nextjs-vs-no-code-portals': {
    title: 'Next.js vs No-Code for B2B Portals | Mett Global',
    description:
      'Why scaling US logistics and service companies hit the no-code wall, and how custom Next.js engineering delivers sub-second speed and zero seat licensing.',
  },
  '/insight-dealership-lead-engine': {
    title: 'Auto Dealership Lead Engine Guide | Mett Global',
    description:
      'How automotive dealerships convert Meta ads into verified showroom visits using fast response, automated CRM routing, and attribution.',
  },
  '/insight-healthcare-clinic-local-seo': {
    title: 'Healthcare & Clinic Local SEO Guide | Mett Global',
    description:
      'How private medical practices and dental clinics capture patient search queries and drive booked appointments through local SEO and focused funnels.',
  },

  /* ---- 10 New Insight guides (Part 4A and 4B) ---- */
  '/insight-meta-ads-agency-ecommerce': {
    title: 'Meta Ads Agency for Ecommerce Brands | Mett Global',
    description:
      'What ecommerce brands should expect from a Meta ads agency, covering testing, creative structure, attribution, and scaling ad spend profitably.',
  },
  '/insight-amazon-fba-reimbursement-service': {
    title: 'Amazon FBA Reimbursement Service | Mett Global',
    description:
      'How manual claims recovery audits lost, damaged, and fee overcharge records without risky automated scrapers.',
  },
  '/insight-outsourced-ecommerce-operations': {
    title: 'Outsourced Ecommerce Operations | Mett Global',
    description:
      'How US marketplace sellers scale catalog management, inventory tracking, order fulfillment, and multi-channel operations.',
  },
  '/insight-dealership-erp-software': {
    title: 'Custom Dealership ERP vs Software | Mett Global',
    description:
      'Why auto dealerships replace off-the-shelf software with custom ERPs connecting inventory, CRM leads, and multi-showroom reporting.',
  },
  '/insight-ai-automation-agency-small-business': {
    title: 'AI Automation Agency for Business | Mett Global',
    description:
      'Practical starting points for small businesses to automate repetitive tasks: lead routing, customer support chatbots, and invoice processing.',
  },
  '/insight-digital-marketing-agency-islamabad': {
    title: 'Digital Marketing Agency Islamabad | Mett Global',
    description:
      'How car dealerships and local businesses in Islamabad use Meta ads, outdoor media, and CRM automation to drive showroom footfall and sales.',
  },
  '/insight-software-development-company-pakistan': {
    title: 'Software Development Company Pakistan | Mett Global',
    description:
      'How Pakistan software teams build custom ERPs, client portals, and Next.js web applications for growing companies in Pakistan and the USA.',
  },
  '/insight-walmart-wfs-reimbursement-claim': {
    title: 'Walmart WFS Reimbursement: Lost Claims | Mett Global',
    description:
      'How to file a Walmart WFS reimbursement claim for lost inbound inventory: the 10 to 50 day window, required documents, and steps in Seller Center.',
  },
  '/insight-walmart-wfs-returns-reimbursement': {
    title: 'Walmart WFS Return Dispute Guide | Mett Global',
    description:
      'WFS return not received or not reimbursed? Learn Walmart\'s return dispute windows, what proof to send, and what Walmart will not reimburse.',
  },
  '/insight-meta-lead-ads-lead-quality': {
    title: 'Meta Lead Ads: Higher Intent Leads | Mett Global',
    description:
      'Getting junk leads from Meta lead ads? Use the Higher Intent form, qualifying questions, fast follow up, and CRM feedback to get leads who answer.',
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
 * Builds the `Metadata` for a route: canonical, Open Graph, Twitter card and the shared social image.
 */
export function pageMetadata(path: PagePath): Metadata {
  return routeMetadata(path, PAGE_SEO[path]);
}

/**
 * Same tags as `pageMetadata`, for routes whose copy lives outside `PAGE_SEO`.
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
      locale: 'en_US',
      alternateLocale: ['en_PK'],
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
 * BreadcrumbList JSON-LD, injected on every page except the homepage.
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
  const url = `${SITE_URL}${path}`;
  const name = title.split('|')[0].trim();
  const guidance = SERVICE_GUIDANCE[path];

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name,
      description,
      url,
      provider: {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Mett Global',
        url: `${SITE_URL}/`,
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Pakistan' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'European Union' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
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
          name: 'Services',
          item: `${SITE_URL}/services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name,
          item: url,
        },
      ],
    },
  ];

  if (guidance?.questions && guidance.questions.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: guidance.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Article JSON-LD for analytical guides and technical briefs.
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
        '@id': `${url}#article`,
        headline,
        description,
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}/social-card.png`,
        inLanguage: 'en',
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
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

/**
 * BlogPosting structured data for authored insight articles (Part 4 and Part 5).
 * Complies with Google and schema.org BlogPosting specification.
 */
export function blogPostingJsonLd(
  path: PagePath,
  author: { name: string; jobTitle?: string },
  datePublished = '2026-10-30',
  faqs?: Array<{ question: string; answer: string }>,
) {
  const { title, description } = PAGE_SEO[path];
  const url = `${SITE_URL}${path}`;
  const headline = title.split('|')[0].trim();
  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline,
      description,
      url,
      mainEntityOfPage: url,
      datePublished,
      dateModified: '2026-10-30',
      image: `${SITE_URL}/social-card.png`,
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
        worksFor: {
          '@id': `${SITE_URL}/#organization`,
        },
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

type WebPageType = 'WebPage' | 'CollectionPage' | 'ContactPage' | 'AboutPage';

/**
 * Typed `WebPage` structured data tying a page to the site and the organization.
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
