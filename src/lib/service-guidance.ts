import type { ServicePath } from './services';

export type GuidanceLink = {
  href: string;
  title: string;
  copy: string;
  badge?: string;
};

export type Guidance = {
  questions: { question: string; answer: string }[];
  links: GuidanceLink[];
  secondarySection?: {
    heading: string;
    links: GuidanceLink[];
  };
};

/** Buyer questions and relevant published work, without unsupported promises. */
export const SERVICE_GUIDANCE: Record<ServicePath, Guidance> = {
  '/digital-marketing-growth': {
    questions: [
      {
        question: 'What does Mett Global manage in a growth engagement?',
        answer:
          'The scope can connect campaign strategy, Meta and Google Ads, social content, SEO, landing pages, lead handling and reporting. Start with the business problem, then agree which channels and deliverables are needed.',
      },
      {
        question: 'How is marketing performance measured?',
        answer:
          'Measure enquiries, qualified leads, conversions and sales where reliable tracking is available. Case-study figures identify their scope and distinguish documented outcomes from client-reported results.',
      },
      {
        question: 'Can marketing connect to our existing CRM and sales team?',
        answer:
          'Yes. Lead routing, follow-up workflows, CRM integration and reporting are part of the available scope, so campaign enquiries can continue into a sales process.',
      },
    ],
    links: [
      {
        href: '/portfolio/jetour-ittehad',
        title: 'The 1,000-Lead Launch',
        copy: 'Brand launch, Meta acquisition, automated CRM lead routing, outdoor visibility, and live activations working as one system.',
        badge: 'Enterprise Meta Ads + CRM Funnel · Scales for U.S. & Global Brands',
      },
      {
        href: '/portfolio/hyundai-islamabad',
        title: 'The Connected Showroom',
        copy: 'Content, digital journey, lead handling, outdoor visibility, and activation planning built around measurable showroom outcomes.',
        badge: 'Omnichannel Acquisition · Adaptable to Global Retail & Automotive',
      },
      {
        href: '/portfolio/csm-ittehad',
        title: '112 Showroom Visits',
        copy: 'EV brand foundation, Meta acquisition, lead automation, and local visibility built around a measurable visit funnel.',
        badge: 'EV & High-Ticket Lead Funnel · Proven Conversion Framework',
      },
    ],
    secondarySection: {
      heading: 'U.S. Search & Booking Funnels',
      links: [
        {
          href: '/portfolio/serenada-mental-health',
          title: 'Serenada Mental Health',
          copy: 'Patient-first website and ongoing SEO turning Texas care searches into appointment requests.',
          badge: 'Mental Health · Texas, USA',
        },
        {
          href: '/portfolio/prospect-smile',
          title: 'Prospect Smile',
          copy: 'Modern dental website and local SEO converting Illinois clinic searches into booked visits.',
          badge: 'Dental Care · Illinois, USA',
        },
        {
          href: '/portfolio/luxury-ohare-limo',
          title: "Luxury O'Hare Limo",
          copy: 'Website and search optimization converting Chicago airport and corporate travel searches into chauffeur bookings.',
          badge: 'Luxury Transport · Chicago, USA',
        },
      ],
    },
  },
  '/web-software-development': {
    questions: [
      {
        question: 'Do you build websites as well as custom business software?',
        answer:
          'Yes. The service covers business websites, landing pages, online stores, custom CRMs, web applications and integrations. The right scope depends on the customer journey and the work your team needs the system to support.',
      },
      {
        question: 'Can one project connect a website, apps and admin portals?',
        answer:
          'Yes. SFYKEA is a published example covering a website, iOS and Android apps, and admin and partner portals. Each project is scoped around its users, permissions and workflows.',
      },
      {
        question: 'Can software be designed for different roles in a business?',
        answer:
          'Yes. Role-based access, approvals and reporting can give each team member the tools they need. The dealership ERP case study shows this approach across sales, accounts, service and leadership; that project is in development.',
      },
    ],
    links: [
      {
        href: '/portfolio/sfykea',
        title: 'Car Care, On Demand',
        copy: 'A website, mobile apps and the portals behind a car-care operation.',
      },
      {
        href: '/portfolio/mowing',
        title: 'The Crew Scheduler',
        copy: 'Field-operations software for recurring routes and daily crew schedules.',
      },
      {
        href: '/portfolio/dealership-erp',
        title: 'One System, Three Showrooms',
        copy: 'A dealership ERP with role-based portals, currently in development.',
      },
    ],
  },
  '/ai-automation-content': {
    questions: [
      {
        question: 'Which tasks can this service help automate?',
        answer:
          'The available scope includes lead and CRM workflows, document and data processing, chatbots, assistants and content production. Begin with a repeatable task, the systems involved and a clear way to check the output.',
      },
      {
        question: 'Should every task use AI?',
        answer:
          'No. A rules-based workflow or a direct integration can be a better fit for predictable work. Use AI where interpreting language or generating draft content adds value, and keep human review where accuracy matters.',
      },
      {
        question: 'Can automation connect to an existing website or CRM?',
        answer:
          'Website, CRM and system integration work is available alongside automation. The scope needs to account for access permissions, the information being processed and what happens when a workflow needs human attention.',
      },
    ],
    links: [
      {
        href: '/insight-ai-automation',
        title: 'Where automation earns its place',
        copy: 'A practical guide to choosing useful business workflows.',
      },
      {
        href: '/insight-lead-generation-system',
        title: 'Connect enquiries to follow-up',
        copy: 'How lead capture, routing and sales handoffs fit together.',
      },
      {
        href: '/web-software-development',
        title: 'Build the connected system',
        copy: 'Explore the websites, CRMs and integrations that support automation.',
      },
    ],
  },
  '/ecommerce-supply-chain': {
    questions: [
      {
        question:
          'What is the 18-Month Historical Claims & Reimbursement Audit?',
        answer:
          'We review up to 18 months of historical inventory reports, inbound carrier manifests, warehouse damage logs, and customer returns across Amazon FBA, Walmart WFS, and 20+ couriers. The audit operates on a 100% contingency basis (no recovery = no fee): we only earn a percentage of funds successfully credited to your account. If zero funds are recovered, you pay zero.',
      },
      {
        question: 'Which sales channels can Mett Global support?',
        answer:
          'Published multichannel work covers Amazon, Walmart, Shopify, eBay, Magento and Wish, including eight Amazon marketplaces. The Etsy launch is a separate Mett Global in-house project.',
      },
      {
        question: 'Can you review denied courier or marketplace claims?',
        answer:
          'The claims work includes reviewing denied decisions, rebuilding evidence and challenging them within the relevant provider windows. Eligibility and recovery depend on the evidence and each provider’s rules; recovery is not guaranteed.',
      },
      {
        question: 'Which logistics and e-commerce claims can you handle?',
        answer:
          'We support logistics and courier claims for lost or damaged parcels, plus e-commerce channel claims such as Amazon FBA and Walmart WFS inventory reimbursements and outstanding Wish claims. We review tracking, inventory and supporting records, file eligible cases and follow up within each provider’s deadlines. The published claims case study documents more than £50,000 ($65,000+ USD) recovered in one year; it is a past result, not a promise of recovery.',
      },
      {
        question: 'Does the service include warehouse and supplier operations?',
        answer:
          'Yes. Scope can include sourcing, procurement, courier and 3PL coordination, inventory, warehouse oversight and reporting. Published studies describe manufacturing and sourcing in Pakistan and China, and remote US warehouse management.',
      },
    ],
    links: [
      {
        href: '/portfolio/claims-recovery',
        title: 'The £50,000 Recovery',
        copy: 'Documented courier and marketplace claims, including denied cases.',
      },
      {
        href: '/portfolio/remote-warehouse-management',
        title: 'The Remote Warehouse',
        copy: 'Remote warehouse oversight with inventory and fulfilment controls.',
      },
      {
        href: '/portfolio/multichannel-ecommerce-operations',
        title: 'Eight Markets, One Operation',
        copy: 'Marketplace listings, inventory and reporting across sales channels.',
      },
    ],
  },
};
