/**
 * The four service lines. Everything service-related reads from here: the
 * homepage grid, `/services`, each service page, the contact form options,
 * navigation highlighting and the sitemap.
 */

export type ServiceDetail = {
  heading: string;
  copy: string;
  items: string[];
};

export type Service = {
  num: string;
  href: ServicePath;
  title: string;
  /** One line for cards. */
  summary: string;
  /** Four headline inclusions for cards. */
  highlights: string[];
  /** Option label in the contact form. */
  formLabel: string;
  hero: { kicker: string; title: string; accent: string; copy: string };
  sideHeading: string;
  details: ServiceDetail[];
  band: { heading: string; copy: string; cta: string };
};

export type ServicePath =
  | '/ecommerce-supply-chain'
  | '/performance-marketing'
  | '/software-development'
  | '/ai-automation';

export const SERVICES: Service[] = [
  {
    num: '01',
    href: '/ecommerce-supply-chain',
    title: 'eCommerce & Supply Chain',
    summary:
      'Marketplace and store operations connected to the inventory, sourcing, logistics and claims recovery behind them.',
    highlights: [
      'Amazon, Walmart, Shopify & more',
      'Inventory, sourcing & 3PL',
      'Amazon FBA & Walmart WFS claims',
      'Courier claims & overcharge recovery',
    ],
    formLabel: 'eCommerce & Supply Chain',
    hero: {
      kicker: 'SERVICE / ECOMMERCE & SUPPLY CHAIN',
      title: 'Sell more.',
      accent: 'Run it cleaner.',
      copy: 'Growth breaks when listings, stock, suppliers and fulfillment are managed in separate silos. We run the storefront and the operation behind it as one system.',
    },
    sideHeading: 'From the listing to the warehouse.',
    details: [
      {
        heading: 'Marketplace & store management',
        copy: 'Day-to-day execution across the channels you sell on, from account health to the listing that converts.',
        items: [
          'Amazon Seller & Vendor Central',
          'Walmart Marketplace & WFS',
          'Shopify, WooCommerce, eBay, Etsy & TikTok Shop',
          'Listings, SEO, A+ content & storefronts',
          'Pricing, promotions & marketplace ads',
          'Account health & policy issues',
        ],
      },
      {
        heading: 'Claims & reimbursement recovery',
        copy: 'Money leaks through lost and damaged inventory, unreimbursed returns and courier overbilling. We build evidence-backed cases, file them and follow each one through to payment.',
        items: [
          'Amazon FBA reimbursement claims',
          'Lost, damaged & misplaced FBA inventory',
          'FBA customer-return & refund reimbursements',
          'Walmart WFS reimbursement claims',
          'Logistics & courier claims management',
          'Courier invoice audits & overcharge recovery',
          'Freight & 3PL billing disputes',
          'Return-reason analysis',
        ],
      },
      {
        heading: 'Inventory & replenishment',
        copy: 'Accurate available-to-sell stock and replenishment routines that prevent stockouts before they become a marketing problem.',
        items: [
          'Demand forecasting',
          'FBA, FBM & WFS shipment planning',
          'Stock risk & reorder alerts',
          'Inventory reconciliation',
        ],
      },
      {
        heading: 'Sourcing & supplier management',
        copy: 'Finding and managing the right suppliers, with the full landed cost visible before cash is committed.',
        items: [
          'Supplier sourcing in China & Pakistan',
          'Vendor comparison & negotiation support',
          'Samples & quality-check coordination',
          'Landed cost modelling',
        ],
      },
      {
        heading: 'Warehouse, 3PL & logistics',
        copy: 'Operating routines for inbound, outbound and carriers, with clear ownership when something goes wrong.',
        items: [
          'Warehouse & 3PL coordination',
          'Freight & route analysis',
          'Carrier performance review',
          'Customs & compliance updates',
        ],
      },
      {
        heading: 'Reporting & SOPs',
        copy: 'Dashboards that surface exceptions, and documented processes that keep working after handover.',
        items: [
          'Stock, order & claims dashboards',
          'Standard operating procedures',
          'Weekly operating reviews',
        ],
      },
    ],
    band: {
      heading: 'Commerce is a system.',
      copy: 'We can review the chain from listing and demand through stock, suppliers, fulfillment, returns and unrecovered claims.',
      cta: 'Request an eCommerce review',
    },
  },
  {
    num: '02',
    href: '/performance-marketing',
    title: 'Performance Marketing & Social Media',
    summary:
      'Paid ads and social media management built to turn attention into leads and customers.',
    highlights: [
      'Meta (Facebook & Instagram) ads',
      'Social media management',
      'Ad creatives & short-form video',
      'Lead generation funnels',
    ],
    formLabel: 'Performance Marketing & Social Media',
    hero: {
      kicker: 'SERVICE / PERFORMANCE MARKETING & SOCIAL MEDIA',
      title: 'Turn attention',
      accent: 'into customers.',
      copy: 'Campaigns, content and social channels managed as one acquisition system — measured by the leads and sales they produce, not by likes.',
    },
    sideHeading: 'Ads, social and creative under one plan.',
    details: [
      {
        heading: 'Paid advertising',
        copy: 'Campaign structure, audiences, budgets and testing treated as connected decisions, with retargeting built in.',
        items: [
          'Meta ads (Facebook & Instagram)',
          'TikTok ads',
          'Google Ads — Search, YouTube & Performance Max',
          'LinkedIn ads for B2B',
          'Retargeting & lookalike audiences',
        ],
      },
      {
        heading: 'Social media management',
        copy: 'Your brand channels planned, published and looked after every week, so they stay active and on-message.',
        items: [
          'Social strategy & content calendars',
          'Posting & scheduling',
          'Comment, DM & community management',
          'Facebook, Instagram, TikTok, LinkedIn & YouTube',
        ],
      },
      {
        heading: 'Creative & content',
        copy: 'Ads and posts built around a clear customer problem and a single next action.',
        items: [
          'Ad creatives & graphic design',
          'Reels & short-form video',
          'Ad copy & captions',
          'UGC-style content',
        ],
      },
      {
        heading: 'Lead generation & funnels',
        copy: 'The landing page, form and follow-up are part of acquisition — fast response turns clicks into conversations.',
        items: [
          'Lead-form & WhatsApp campaigns',
          'Landing pages that match the ad',
          'Lead qualification & CRM handoff',
          'Follow-up sequences',
        ],
      },
      {
        heading: 'Tracking & reporting',
        copy: 'Measurement set up correctly first, so decisions are based on data you can trust.',
        items: [
          'Meta Pixel & Conversions API',
          'GA4, UTM & consent setup',
          'Monthly performance reports',
          'Cost per lead & acquisition tracking',
        ],
      },
      {
        heading: 'Organic & local visibility',
        copy: 'The free channels that support paid spend and help local customers find and trust you.',
        items: [
          'Google Business Profile management',
          'Review generation',
          'Organic social growth',
        ],
      },
    ],
    band: {
      heading: 'Better acquisition starts upstream.',
      copy: 'We review the offer, creative, audience, landing page and follow-up together before increasing spend.',
      cta: 'Plan a campaign',
    },
  },
  {
    num: '03',
    href: '/software-development',
    title: 'Web & Software Development',
    summary:
      'Websites, online stores, CRMs and custom business software built around how you actually work.',
    highlights: [
      'Websites & landing pages',
      'Custom CRM development',
      'Web apps, portals & dashboards',
      'Integrations & APIs',
    ],
    formLabel: 'Web & Software Development',
    hero: {
      kicker: 'SERVICE / WEB & SOFTWARE DEVELOPMENT',
      title: 'Software that',
      accent: 'runs the business.',
      copy: 'From the website customers see to the CRM and tools your team uses every day — designed, built and maintained by one team.',
    },
    sideHeading: 'Built for customers and for your team.',
    details: [
      {
        heading: 'Websites & landing pages',
        copy: 'Fast, clear websites that explain what you do and make the next step obvious on every device.',
        items: [
          'Corporate & business websites',
          'Campaign landing pages',
          'Responsive, accessible design',
          'Technical SEO & analytics',
        ],
      },
      {
        heading: 'eCommerce stores',
        copy: 'Online stores set up to sell, with payments, catalogue and fulfillment connected from day one.',
        items: [
          'Shopify & WooCommerce stores',
          'Custom storefronts',
          'Payment gateways — Stripe, JazzCash, Easypaisa',
          'Product catalogue & order workflows',
        ],
      },
      {
        heading: 'CRM development & setup',
        copy: 'A CRM shaped around your sales process — built custom, or an existing platform configured properly.',
        items: [
          'Custom CRM development',
          'HubSpot, Zoho & Salesforce setup',
          'Pipelines, stages & lead capture',
          'WhatsApp & email integration',
          'Roles, permissions & reporting',
        ],
      },
      {
        heading: 'Custom web applications',
        copy: 'Internal tools and client-facing portals that replace spreadsheets and manual handoffs.',
        items: [
          'Client & vendor portals',
          'Dashboards & admin panels',
          'Booking, inventory & order systems',
          'Internal business tools',
        ],
      },
      {
        heading: 'Integrations & APIs',
        copy: 'Connecting the systems you already use so data moves without copy-and-paste.',
        items: [
          'CRM, ERP & accounting integrations',
          'Marketplace & payment APIs',
          'WhatsApp Business API',
          'Data sync & webhooks',
        ],
      },
      {
        heading: 'Maintenance, hosting & security',
        copy: 'Ongoing care so the software stays fast, secure and up to date after launch.',
        items: [
          'Hosting & deployment',
          'Backups & updates',
          'Security hardening',
          'Performance monitoring & support',
        ],
      },
    ],
    band: {
      heading: 'Build trust. Reduce friction.',
      copy: 'Tell us what you need to build — a website, a CRM or an internal tool — and we will scope it with you.',
      cta: 'Discuss a build',
    },
  },
  {
    num: '04',
    href: '/ai-automation',
    title: 'AI Automation & Content',
    summary:
      'Practical AI that removes repetitive work and produces on-brand content at scale.',
    highlights: [
      'Workflow automation',
      'AI chatbots & WhatsApp assistants',
      'AI video & image content',
      'Human review built in',
    ],
    formLabel: 'AI Automation & Content',
    hero: {
      kicker: 'SERVICE / AI AUTOMATION & CONTENT',
      title: 'Automate the busywork.',
      accent: 'Scale the content.',
      copy: 'AI built around real workflows and real brand standards — with human checkpoints, so it reaches production instead of staying a demo.',
    },
    sideHeading: 'Useful AI, not experiments.',
    details: [
      {
        heading: 'Workflow automation',
        copy: 'Map the process first — trigger, inputs, decisions, owner and exceptions — then automate the parts that repeat.',
        items: [
          'Process mapping',
          'n8n, Make & Zapier automations',
          'Lead routing & CRM updates',
          'Automated reports & notifications',
        ],
      },
      {
        heading: 'AI chatbots & assistants',
        copy: 'Assistants that answer, qualify and route — and hand over to a person when they should.',
        items: [
          'Website chatbots',
          'WhatsApp assistants',
          'Lead qualification bots',
          'Internal knowledge assistants',
        ],
      },
      {
        heading: 'Document & data processing',
        copy: 'Turning invoices, forms and emails into structured data your systems can use.',
        items: [
          'Data extraction from documents',
          'Email & ticket classification',
          'Summaries & first-pass drafts',
        ],
      },
      {
        heading: 'AI content creation',
        copy: 'AI-assisted production for faster content — briefed properly so it does not look generic.',
        items: [
          'AI video ads & explainers',
          'Product photos & visuals',
          'Voiceovers & scripts',
          'Social content at scale',
        ],
      },
      {
        heading: 'Brand consistency & review',
        copy: 'Prompts, references and review rules so every output feels like your brand — and is checked before it goes live.',
        items: [
          'Brand prompt libraries',
          'Claim & quality checks',
          'Platform-fit review',
        ],
      },
      {
        heading: 'Governance & training',
        copy: 'Using AI responsibly and making sure your team can run it after handover.',
        items: [
          'Data privacy & access controls',
          'AI disclosure & labelling',
          'Team training',
          'Time-saved measurement',
        ],
      },
    ],
    band: {
      heading: 'Automate work. Not confusion.',
      copy: 'We start by mapping one workflow or content process and measuring what changes.',
      cta: 'Find what to automate',
    },
  },
];

export function getService(href: ServicePath): Service {
  const service = SERVICES.find(entry => entry.href === href);
  if (!service) throw new Error(`Unknown service: ${href}`);
  return service;
}

/**
 * Retired service URLs and where they now live. Used for permanent redirects
 * so old links and search results keep working.
 */
export const RETIRED_SERVICE_REDIRECTS: { from: string; to: string }[] = [
  { from: '/ecommerce-growth', to: '/ecommerce-supply-chain' },
  { from: '/operations-supply-chain', to: '/ecommerce-supply-chain' },
  { from: '/digital-marketing', to: '/performance-marketing' },
  { from: '/lead-generation-sales', to: '/performance-marketing' },
  { from: '/web-development', to: '/software-development' },
  { from: '/ai-content-production', to: '/ai-automation' },
  { from: '/audits-diagnostics', to: '/services' },
];
