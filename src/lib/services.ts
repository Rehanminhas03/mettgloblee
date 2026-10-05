/**
 * The four service lines. Everything service-related reads from here: the
 * homepage grid, `/services`, each service page, the contact form options,
 * navigation highlighting and the sitemap.
 *
 * Order matters: it is the order shown on the homepage, `/services`, the
 * hero and the contact form.
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
  /** One or two lines for cards. */
  summary: string;
  /** A single concise line for the compact homepage cards. */
  short: string;
  /** Four key points for the homepage cards; the page shows everything. */
  cardPoints: string[];
  /**
   * Eight headline inclusions for cards. The first four fill the left column
   * and the last four the right column.
   */
  highlights: string[];
  /** Option label in the contact form. */
  formLabel: string;
  hero: { kicker: string; title: string; accent: string; copy: string };
  sideHeading: string;
  details: ServiceDetail[];
  band: { heading: string; copy: string; cta: string };
};

export type ServicePath =
  | '/digital-marketing-growth'
  | '/web-software-development'
  | '/ai-automation-content'
  | '/ecommerce-supply-chain';

export const SERVICES: Service[] = [
  {
    num: '01',
    href: '/digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    short: 'Strategy, creative, media and analytics for measurable growth.',
    cardPoints: [
      'Performance Marketing',
      'Social Media Management',
      'SEO & Local Visibility',
      'Analytics & Conversion',
    ],
    summary:
      'We combine strategy, creative, paid media, social, SEO, and analytics to build brands and generate measurable growth.',
    highlights: [
      'Performance Marketing',
      'Meta & Google Ads',
      'Social Media Management',
      'Content & Creative Strategy',
      'Lead Generation & Funnels',
      'SEO & Local Visibility',
      'Brand & Media Marketing',
      'Analytics & Conversion Optimization',
    ],
    formLabel: 'Digital Marketing & Growth',
    hero: {
      kicker: 'SERVICE / DIGITAL MARKETING & GROWTH',
      title: 'Turn attention',
      accent: 'into growth.',
      copy: 'Strategy, creative, paid media, social, SEO and analytics managed as one growth system — measured by the leads and sales it produces, not by likes.',
    },
    sideHeading: 'Strategy, media and measurement under one plan.',
    details: [
      {
        heading: 'Performance marketing',
        copy: 'Campaign structure, audiences, budgets and testing treated as connected decisions, with retargeting built in.',
        items: [
          'Meta Ads',
          'Google Ads',
          'Paid Media',
          'Lead Generation',
          'Retargeting',
          'Campaign Optimization',
        ],
      },
      {
        heading: 'Social media marketing',
        copy: 'Your brand channels planned, published and looked after every week, so they stay active and on-message.',
        items: [
          'Instagram',
          'Facebook',
          'LinkedIn',
          'TikTok',
          'Content Strategy',
          'Community Management',
        ],
      },
      {
        heading: 'SEO & search',
        copy: 'The free channels that support paid spend and help customers find and trust you when they search.',
        items: [
          'Technical SEO',
          'On-Page SEO',
          'Local SEO',
          'Google Business Profile',
          'Search Visibility',
          'SEO Content',
        ],
      },
      {
        heading: 'Branding & creative',
        copy: 'A clear brand and creative direction, so every campaign looks and sounds like one business.',
        items: [
          'Brand Strategy',
          'Campaign Concepts',
          'Creative Direction',
          'Social Media Creatives',
          'Copywriting',
          'Photography & Video Direction',
        ],
      },
      {
        heading: 'Media & outdoor marketing',
        copy: 'Offline visibility that supports digital campaigns, from outdoor placements to on-the-ground activations.',
        items: [
          'Outdoor Advertising',
          'OOH Campaigns',
          'Events',
          'Activations',
          'Print & Standee Campaigns',
        ],
      },
      {
        heading: 'Analytics & CRO',
        copy: 'Measurement set up correctly first, so decisions are based on data you can trust and every page works harder.',
        items: [
          'Conversion Tracking',
          'Marketing Analytics',
          'Reporting',
          'Funnel Analysis',
          'Conversion Optimization',
          'Performance Insights',
        ],
      },
      {
        heading: 'CRM & lead management',
        copy: 'The form, routing and follow-up are part of acquisition — fast response turns clicks into conversations.',
        items: [
          'Lead Capture',
          'Lead Routing',
          'CRM Integration',
          'Lead Nurturing',
          'Automated Follow-ups',
        ],
      },
    ],
    band: {
      heading: 'Better growth starts upstream.',
      copy: 'We review the offer, creative, audience, landing page and follow-up together before increasing spend.',
      cta: 'Plan a campaign',
    },
  },
  {
    num: '02',
    href: '/web-software-development',
    title: 'Web & Software Development',
    short: 'Websites, stores, CRMs and custom business software.',
    cardPoints: [
      'Websites & Landing Pages',
      'E-Commerce Stores',
      'CRM Development',
      'Custom Web Applications',
    ],
    summary:
      'Websites, online stores, CRMs, and custom business software built around how your business actually works.',
    highlights: [
      'Websites & Landing Pages',
      'E-Commerce Stores',
      'CRM Development & Setup',
      'UI/UX Design',
      'Custom Web Applications',
      'Business Software',
      'Integrations & APIs',
      'Maintenance, Hosting & Security',
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
        heading: 'Web development',
        copy: 'Fast, clear websites that explain what you do and make the next step obvious on every device.',
        items: [
          'Business Websites',
          'Corporate Websites',
          'Landing Pages',
          'High-Converting Websites',
        ],
      },
      {
        heading: 'E-commerce development',
        copy: 'Online stores set up to sell, with payments, catalogue and fulfillment connected from day one.',
        items: [
          'Online Stores',
          'E-Commerce Platforms',
          'Product & Catalog Systems',
          'Checkout Integrations',
        ],
      },
      {
        heading: 'Custom software',
        copy: 'Internal tools and client-facing applications that replace spreadsheets and manual handoffs.',
        items: [
          'Custom Web Applications',
          'Internal Business Tools',
          'Business Dashboards',
          'Workflow Systems',
        ],
      },
      {
        heading: 'CRM development',
        copy: 'A CRM shaped around your sales process — built custom, or an existing platform configured properly.',
        items: [
          'Custom CRM',
          'CRM Setup',
          'Sales Pipelines',
          'Customer Management',
        ],
      },
      {
        heading: 'UI/UX',
        copy: 'Interfaces designed around how people actually use them, so the product is easy to learn and easy to buy from.',
        items: [
          'User Experience Design',
          'Interface Design',
          'Conversion-Focused Design',
          'Responsive Design',
        ],
      },
      {
        heading: 'Integrations',
        copy: 'Connecting the systems you already use so data moves without copy-and-paste.',
        items: [
          'APIs',
          'Third-Party Integrations',
          'Payment Gateways',
          'CRM Integrations',
          'Marketing Integrations',
        ],
      },
      {
        heading: 'Infrastructure',
        copy: 'Ongoing care so the software stays fast, secure and up to date after launch.',
        items: [
          'Hosting',
          'Website Maintenance',
          'Security',
          'Performance Optimization',
          'Technical Support',
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
    num: '03',
    href: '/ai-automation-content',
    title: 'AI Automation & Content',
    short: 'Practical AI that removes repetitive work and scales content.',
    cardPoints: [
      'Workflow Automation',
      'AI Chatbots & Assistants',
      'AI Content Creation',
      'Lead & CRM Automation',
    ],
    summary:
      'Practical AI that removes repetitive work, automates workflows, and produces on-brand content at scale.',
    highlights: [
      'Workflow Automation',
      'AI Chatbots & Assistants',
      'AI Content Creation',
      'Document & Data Processing',
      'Lead & CRM Automation',
      'AI-Powered Workflows',
      'Automated Reporting',
      'Brand Consistency & Governance',
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
        heading: 'AI workflow automation',
        copy: 'Map the process first — trigger, inputs, decisions, owner and exceptions — then automate the parts that repeat.',
        items: [
          'Workflow Automation',
          'Repetitive Task Automation',
          'Business Process Automation',
          'AI-Powered Workflows',
        ],
      },
      {
        heading: 'AI agents & assistants',
        copy: 'Assistants that answer, qualify and route — and hand over to a person when they should.',
        items: [
          'AI Assistants',
          'AI Agents',
          'Customer Support Automation',
          'Internal Knowledge Assistants',
        ],
      },
      {
        heading: 'AI content',
        copy: 'AI-assisted production for faster content — briefed properly, reviewed by people and kept on-brand.',
        items: [
          'Social Media Content',
          'Marketing Copy',
          'Product Content',
          'On-Brand Content Generation',
          'Content Repurposing',
        ],
      },
      {
        heading: 'Document & data processing',
        copy: 'Turning invoices, forms and emails into structured data your systems can use.',
        items: [
          'Document Processing',
          'Data Extraction',
          'Data Classification',
          'AI-Powered Information Processing',
          'Automated Reporting',
        ],
      },
      {
        heading: 'Lead & CRM automation',
        copy: 'Every enquiry qualified, routed and followed up quickly, with your CRM kept up to date automatically.',
        items: [
          'Lead Qualification',
          'Automated Follow-Ups',
          'Lead Routing',
          'CRM Workflows',
          'Customer Communication',
        ],
      },
    ],
    band: {
      heading: 'Automate work. Not confusion.',
      copy: 'We start by mapping one workflow or content process and measuring what changes.',
      cta: 'Find what to automate',
    },
  },
  {
    num: '04',
    href: '/ecommerce-supply-chain',
    title: 'E-Commerce & Supply Chain',
    short: 'Commerce operations from marketplace to supply and claims.',
    cardPoints: [
      'Marketplace Management',
      'Sourcing & Procurement',
      'Claims & Recovery',
      'Warehouse, 3PL & Logistics',
    ],
    summary:
      'End-to-end commerce operations covering marketplace management, sourcing, supply, claims recovery, and performance reporting.',
    highlights: [
      'Marketplace & Store Management',
      'Inventory & Order Management',
      'Sourcing & Procurement',
      'Supply Management',
      'Claims & Reimbursement Recovery',
      'Warehouse, 3PL & Logistics',
      'Operations & SOPs',
      'Reporting & Performance Analytics',
    ],
    formLabel: 'E-Commerce & Supply Chain',
    hero: {
      kicker: 'SERVICE / E-COMMERCE & SUPPLY CHAIN',
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
          'Marketplace Management',
          'Amazon Operations',
          'Online Store Management',
          'Product & Catalog Management',
        ],
      },
      {
        heading: 'Inventory & operations',
        copy: 'Accurate available-to-sell stock and routines that prevent stockouts before they become a marketing problem.',
        items: [
          'Inventory Management',
          'Order Management',
          'Fulfillment',
          'Operations Management',
        ],
      },
      {
        heading: 'Sourcing & supply',
        copy: 'Finding and managing the right suppliers, with the full landed cost visible before cash is committed.',
        items: [
          'Product Sourcing',
          'Supplier Management',
          'Procurement',
          'Supply Management',
        ],
      },
      {
        heading: 'Claims & reimbursement',
        copy: 'Money leaks through lost and damaged inventory, unreimbursed returns and courier overbilling. We build evidence-backed cases, file them and follow each one through to payment.',
        items: [
          'Marketplace Claims',
          'Reimbursement Recovery',
          'Account Reconciliation',
          'Revenue Recovery',
        ],
      },
      {
        heading: 'Logistics',
        copy: 'Operating routines for inbound, outbound and carriers, with clear ownership when something goes wrong.',
        items: [
          'Warehouse Operations',
          '3PL Coordination',
          'Shipping & Logistics',
          'Fulfillment Support',
        ],
      },
      {
        heading: 'Reporting',
        copy: 'Dashboards that surface exceptions, and documented processes that keep working after handover.',
        items: [
          'Sales Reporting',
          'Inventory Reporting',
          'Performance Analytics',
          'Operational Dashboards',
          'SOP Development',
        ],
      },
    ],
    band: {
      heading: 'Commerce is a system.',
      copy: 'We can review the chain from listing and demand through stock, suppliers, fulfillment, returns and unrecovered claims.',
      cta: 'Request an e-commerce review',
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
 * so old links and search results keep working. Every target is a current
 * route, so a visitor never goes through two redirects.
 */
export const RETIRED_SERVICE_REDIRECTS: { from: string; to: string }[] = [
  { from: '/ecommerce-growth', to: '/ecommerce-supply-chain' },
  { from: '/operations-supply-chain', to: '/ecommerce-supply-chain' },
  { from: '/digital-marketing', to: '/digital-marketing-growth' },
  { from: '/lead-generation-sales', to: '/digital-marketing-growth' },
  { from: '/performance-marketing', to: '/digital-marketing-growth' },
  { from: '/web-development', to: '/web-software-development' },
  { from: '/software-development', to: '/web-software-development' },
  { from: '/ai-content-production', to: '/ai-automation-content' },
  { from: '/ai-automation', to: '/ai-automation-content' },
  { from: '/audits-diagnostics', to: '/services' },
  { from: '/contact-success', to: '/contact' },
  { from: '/insight-audit-framework', to: '/blog' },
  { from: '/insight-digital-product-passport', to: '/blog' },
];
