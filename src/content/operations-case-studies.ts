import 'server-only';
import type { CaseStudy } from '@/components/case-studies/types';
import { CASE_NAMES } from '@/lib/caseNames';
import type { WorkCard } from '@/lib/caseStudies';

/**
 * The six e-commerce and supply chain operations studies. This is the ONLY
 * source for their copy, metrics and metadata. It is server-only: client
 * components receive rendered children or explicit scalar attributes, never a
 * record. `editorialNotes` is internal and is stripped before export.
 *
 * Names, subtitles and meta titles come from `lib/caseNames` (item 4A of the
 * fix document). Do not change case-study copy except as that document gives it.
 */
type InternalStudy = CaseStudy & { editorialNotes: string };

const internalStudies: InternalStudy[] = [
  {
    slug: 'claims-recovery',
    order: 1,
    category: 'Claims and reimbursements',
    client: 'A leading global brand',
    projectType: 'Confidential client work',
    scope: 'Canada, Germany, the EU, the UK and the US',
    title: CASE_NAMES['claims-recovery'].name,
    subtitle: CASE_NAMES['claims-recovery'].subtitle,
    headline: 'More than £50,000 recovered through documented follow-up.',
    summary:
      'Courier and marketplace claims handled across 20+ courier and 3PL partners, with more than £50,000 recovered in one year.',
    hero: {
      display: '>£50,000',
      secondaryDisplay: '($65,000+ USD)',
      accessible:
        'More than fifty thousand pounds, over sixty-five thousand US dollars recovered in one year',
      label: 'Recovered in one year',
      context:
        'Courier, 3PL and marketplace claims, including previously denied cases.',
      value: 50000,
      prefix: '>£',
      suffix: '',
      kind: 'result',
      qualifier:
        'Courier claims with P2P, FedEx, UPS, USPS, eShipper and more, plus Amazon, Walmart and Wish reimbursements, including previously denied cases.',
    },
    deck: 'For a leading global brand, we filed, followed up and challenged lost-parcel, damage and marketplace claims across 20+ courier and 3PL partners in Canada, Germany, the wider EU, the UK and the US, recovering more than £50,000 in one year.',
    problemHeading: 'Different providers. Different claims processes.',
    problem:
      'Claims were spread across P2P, FedEx, UPS, USPS, eShipper and other couriers, alongside Amazon, Walmart and Wish. Each provider required different documentation, query formats and filing deadlines. Denied claims needed further investigation and a clear response within the relevant challenge window.',
    approachHeading:
      'Evidence prepared. Deadlines tracked. Decisions challenged.',
    approach:
      'We checked tracking histories, reviewed courier reports and assembled the documents required for each case. We filed claims in the appropriate format, monitored query and follow-up windows, and responded to requests for further information. Where claims were denied, we reviewed the decision and challenged it with supporting evidence. The scope covered courier loss and damage, Amazon FBA reimbursement and other marketplace claims, including follow-through on outstanding Wish claims.',
    resultHeading: 'More than £50,000 recovered in one year',
    result:
      'The claims work recovered more than £50,000 in one year, including recoveries on previously denied cases. The work depended on understanding each provider’s process, meeting its deadlines and continuing the follow-up until a decision was reached.',
    closing: 'A denied claim still deserves a documented review.',
    auditOffer: {
      eyebrow: 'Zero-Risk Historical Recovery',
      heading: 'Request a Free 18-Month Claims & Reimbursement Audit',
      body: 'Amazon FBA, Walmart WFS, and major carriers strictly limit how far back you can dispute missing inventory. We conduct a thorough, human-verified historical audit across your last 18 months of shipment manifests, warehouse damage logs, and denied cases on a 100% contingency basis. If we recover nothing, it costs you $0.',
      ctaLabel: 'Claim Your 18-Month Audit',
      ctaHref: '/appointment',
      badge: 'Contingency Only · No Win, No Fee',
    },
    tags: [
      'Courier claims',
      'FBA reimbursement',
      'Denied claims',
      'Claim filing deadlines',
    ],
    cta: 'Discuss claims recovery',
    seo: {
      title: CASE_NAMES['claims-recovery'].metaTitle,
      description:
        'More than £50,000 recovered in one year across 20+ couriers and 3PL partners in USA, UK, EU, and Canada, including Amazon FBA reimbursements and denied courier claims.',
      primary: 'courier claims recovery',
      secondary: [
        'Amazon FBA reimbursement service',
        'denied courier claims',
        'marketplace reimbursement recovery',
      ],
    },
    visual: {
      type: 'recovery',
      heading: 'The claims recovery process',
      labels: [
        'Tracking checks',
        'Evidence and filing',
        'Follow-up and challenge',
        'Recovery',
      ],
      caption:
        'Claims workflow illustration: tracking checks, evidence, filing and follow-up. More than £50,000 recovered in one year.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote:
      'Client name and identifying details are withheld to respect confidentiality.',
    editorialNotes:
      'The recovery is a combined amount above £50,000 in one year. No provider split or time series was supplied. Keep the process graphic illustrative and retain the greater-than meaning. The later full-context handoff explicitly approves 20+ couriers and 3PLs as a public claims proof point. This supplements the morning brief and does not reinstate the superseded eight-page structure.',
    supportingStats: [
      {
        display: '20+',
        label: 'Courier and 3PL partners across the claims work',
      },
    ],
    handled: [
      'Lost and damaged parcel claims',
      'Tracking histories and courier reports',
      'Evidence preparation',
      'Query and filing windows',
      'Denied-claim challenges',
      'Amazon FBA reimbursements',
      'Walmart reimbursements',
      'Outstanding Wish claims',
    ],
    faqs: [
      {
        question: 'What is the 18-Month Historical Claims Audit?',
        answer:
          'Our 18-month historical audit reconciles your past year and a half of logistics tracking, carrier shortage reports, Amazon warehouse damages, and fee misclassifications. It operates strictly on a contingency basis: no upfront retainers or hidden costs. We only get paid when cash or inventory credits are successfully returned to your account.',
      },
      {
        question: 'What did the claims recovery work cover?',
        answer:
          'Lost-parcel and damage claims with P2P, FedEx, UPS, USPS, eShipper, Royal Mail, Evri, GLS and other courier and 3PL partners (20+ in total), alongside Amazon FBA, Walmart WFS and Wish reimbursements. More than £50,000 was recovered in one year, including previously denied claims.',
      },
      {
        question: 'Were previously denied claims included?',
        answer:
          'Yes. The recovered amount included previously denied cases. We reviewed decisions, assembled supporting evidence and followed the relevant challenge process. Recovery depends on the evidence and the provider’s rules.',
      },
    ],
    relatedSlugs: [
      'courier-3pl-management',
      'multichannel-ecommerce-operations',
    ],
    // Courier names are taken from the source docs for this engagement.
    // Do NOT add DHL, DPD or Parcelforce: they are not part of this case.
    couriers: [
      'P2P',
      'FedEx',
      'UPS',
      'USPS',
      'eShipper',
      'Royal Mail',
      'Evri',
      'GLS',
    ],
    scopeSections: [
      {
        id: 'courier-claims',
        eyebrow: 'Part 1',
        title: 'Logistics and courier claims',
        intro:
          'Lost and damaged parcel claims across 20+ courier and 3PL partners, shipping across Canada, Germany, the wider EU, the UK and the US.',
        points: [
          'Checked tracking histories and courier reports for every lost or damaged parcel.',
          'Matched proof of delivery and supporting documents to each case before filing.',
          "Filed in each courier's required format and tracked every query and filing window.",
          'Wrote formal disputes on denied claims and escalated them with carrier account managers.',
          'Audited carrier service levels and resolved the escalations that followed.',
        ],
      },
      {
        id: 'marketplace-reimbursements',
        eyebrow: 'Part 2',
        title: 'Marketplace reimbursements: Amazon, Walmart and Wish',
        intro:
          'Reimbursement claims on the marketplaces, including money recovered on claims that were first denied.',
        points: [
          'Amazon FBA: lost, damaged and unreceived inventory, and returns that never came back.',
          'Walmart WFS: inventory lost, damaged or received short in Walmart fulfilment centres.',
          'Wish: follow-through on outstanding claims until a decision was reached.',
          'Denied claims: decisions reviewed, evidence rebuilt and challenged within each challenge window, with recoveries on previously denied cases included in the total.',
        ],
      },
    ],
  },
  {
    slug: 'remote-warehouse-management',
    order: 2,
    category: 'Warehouse operations',
    client: 'A leading global brand',
    projectType: 'Confidential client work',
    scope: 'US warehouse operations; payroll across Canada, Germany and the US',
    title: CASE_NAMES['remote-warehouse-management'].name,
    subtitle: CASE_NAMES['remote-warehouse-management'].subtitle,
    headline: 'A complete US warehouse, managed remotely above 95% accuracy.',
    summary:
      'Remote warehouse oversight with on-site management, inventory reconciliation and inventory and fulfilment accuracy each above 95%.',
    hero: {
      display: '>95%',
      accessible:
        'Inventory accuracy and order fulfilment accuracy above ninety-five percent',
      label: 'Inventory and order fulfilment',
      unit: 'accuracy',
      context: 'Each measure stayed above 95% under remote management.',
      value: 95,
      prefix: '>',
      suffix: '%',
      kind: 'result',
      qualifier:
        'Inventory accuracy and order fulfilment accuracy each above 95%.',
    },
    deck: "We run a leading global brand's US warehouse remotely with the on-site team, from container receiving and inventory systems to people and fulfilment, with inventory and order fulfilment accuracy each above 95%.",
    problemHeading: 'One warehouse. Many connected responsibilities.',
    problem:
      'Container release, receiving, stock locations, system records and order fulfilment all needed coordinated management. The operation also required oversight of warehouse supplies, people, payroll and OSHA and safety compliance requirements.',
    approachHeading: 'From container release to available inventory',
    approach:
      'We coordinated re-racking and restructuring, procured supplies and managed container receiving. We worked with brokers on customs brokerage, container release and HS codes, then handled racking, inventory reconciliation and stock activation across Microsoft Dynamics, Linnworks and an in-house WMS. Remote management worked with the on-site team on daily responsibilities, people management and safety requirements. The wider scope included payroll for three warehouses across Canada, Germany and the US.',
    extras: [
      {
        heading: 'Payroll and workforce across three countries',
        body: 'We manage warehouse payroll for teams in the US, Canada and Germany, coordinate staffing, training and performance management, and write and maintain the standard operating procedures (SOPs) the teams work to.',
      },
    ],
    resultHeading: 'Above 95% accuracy across inventory and fulfilment',
    result:
      "Inventory accuracy and order fulfilment accuracy were each above 95%. Returns were kept low. The work brought inbound receiving, stock records, warehouse organisation and fulfilment under coordinated remote oversight with on-site management. The US warehouse has been managed remotely since 2023, as part of the brand's network across the US, UK, Canada and Germany.",
    closing:
      'Clear stock records and clear responsibilities support the warehouse behind every order.',
    auditOffer: {
      eyebrow: 'Operations & 3PL Review',
      heading: 'Request a 3PL & Warehouse Inventory Accuracy Audit',
      body: 'Identify receiving discrepancies, warehouse shrinkage, and stock record errors before they trigger costly stockouts or customer refunds. We evaluate your current WMS, SOPs, and inventory controls to recommend immediate accuracy improvements.',
      ctaLabel: 'Book a Warehouse Audit',
      ctaHref: '/appointment',
      badge: 'Operator Diagnostic',
    },
    tags: [
      'Inventory reconciliation',
      'WMS',
      'Customs brokerage',
      'Remote management',
    ],
    cta: 'Discuss warehouse operations',
    seo: {
      title: CASE_NAMES['remote-warehouse-management'].metaTitle,
      description:
        'Remote US warehouse management with inventory and fulfilment accuracy above 95%, WMS reconciliation, container receiving and on-site coordination.',
      primary: 'remote warehouse management',
      secondary: [
        'US warehouse operations management',
        'inventory reconciliation',
        'warehouse fulfilment accuracy',
      ],
    },
    visual: {
      type: 'accuracy',
      heading: 'Inventory and fulfilment accuracy',
      labels: ['Inventory accuracy', 'Order fulfilment accuracy'],
      caption:
        'Inventory accuracy and order fulfilment accuracy were each above 95%. Threshold illustration.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote:
      'Client name and identifying details are withheld to respect confidentiality.',
    editorialNotes:
      'Both accuracy measures are above 95%; no exact percentages, baseline or measurement period were supplied. Returns remain qualitative. Do not present safety work as a certification or legal assurance.',
    handled: [
      'Container receiving and release',
      'Customs brokerage and HS codes',
      'Re-racking and warehouse restructuring',
      'Inventory reconciliation and activation',
      'Microsoft Dynamics',
      'Linnworks and an in-house WMS',
      'Warehouse supplies',
      'On-site team coordination',
      'Payroll across three countries',
      'OSHA and safety requirements',
      'Shift schedules and headcount planning',
      'Team performance management',
      'Receiving to dispatch against agreed SLAs',
      'Vendor negotiation',
      'Bills of lading and packing-list checks',
      'Freight and container intake coordination',
    ],
    faqs: [
      {
        question: 'How was the warehouse managed remotely?',
        answer:
          'Remote management worked with the on-site team on receiving, stock locations, inventory systems, supplies, people and fulfilment. Microsoft Dynamics, Linnworks and an in-house WMS were used in the operation.',
      },
      {
        question: 'What does the above 95% result measure?',
        answer:
          'Inventory accuracy and order fulfilment accuracy were each above 95%. Returns were kept low; no numerical returns rate is stated.',
      },
    ],
    relatedSlugs: ['multichannel-ecommerce-operations', 'claims-recovery'],
  },
  {
    slug: 'procurement-sourcing',
    order: 3,
    category: 'Procurement and sourcing',
    client: 'A confidential client',
    projectType: 'Confidential client work',
    scope: 'Faisalabad project; sourcing work in Pakistan and China',
    title: CASE_NAMES['procurement-sourcing'].name,
    subtitle: CASE_NAMES['procurement-sourcing'].subtitle,
    headline: 'Sourcing and manufacturing connected to the sales operation.',
    summary:
      'A Faisalabad clothing manufacturing setup, B2B bulk sales and Amazon account management, supported by sourcing work in Pakistan and China.',
    hero: {
      display: '2',
      accessible: 'Two sourcing countries, Pakistan and China',
      label: 'Pakistan and China',
      unit: 'sourcing countries',
      context: 'Faisalabad manufacturing, Sialkot textiles and China sourcing.',
      value: 2,
      prefix: '',
      suffix: '',
      kind: 'scope',
      qualifier:
        'Pakistan and China, with textile sourcing capability in Faisalabad and Sialkot.',
    },
    deck: 'For a confidential client in Faisalabad, we set up small-scale clothing manufacturing with custom printing, then connected it to B2B bulk sales and a fully managed Amazon account, with supplements sourced from Pakistan and China.',
    problemHeading: 'The product needed an operation around it',
    problem:
      'The client needed more than a supplier contact. Clothing production, custom printing and bulk sales required practical setup and management. The Amazon work also involved supplements, where listing restrictions required careful documentation and follow-up.',
    approachHeading: 'Manufacturing setup, sourcing and marketplace execution',
    approach:
      'We set up a small manufacturing system for hoodies and T-shirts, including custom manufacturing and T-shirt printing, and managed B2B bulk orders. We launched and managed a complete Amazon account and sourced supplements from Pakistan and China. When supplements listings were blocked, we prepared the required documentation and handled the reinstatement process. Our wider sourcing capability includes Sialkot and Faisalabad’s textile industries, alongside China.',
    resultHeading: 'From manufacturing setup to documented reinstatements',
    result:
      'The work covered manufacturing setup, custom printing, B2B bulk sales and Amazon account operations. Each blocked supplements listing encountered during this work was reinstated with supporting documentation.',
    closing:
      'Sourcing works best when the supplier, product requirements and sales channel are understood together.',
    tags: [
      'Pakistan and China sourcing',
      'Custom printing',
      'B2B bulk orders',
      'Listing reinstatement',
    ],
    cta: 'Discuss sourcing and procurement',
    seo: {
      title: CASE_NAMES['procurement-sourcing'].metaTitle,
      description:
        'A Faisalabad manufacturing setup, custom clothing and B2B sales, plus Pakistan and China sourcing and documented Amazon listing reinstatement.',
      primary: 'Pakistan and China sourcing',
      secondary: [
        'Faisalabad clothing sourcing',
        'Sialkot sourcing services',
        'custom T-shirt manufacturing',
        'Amazon listing reinstatement',
      ],
    },
    visual: {
      type: 'sourcing',
      heading: 'From sourcing to sales operations',
      labels: [
        'Pakistan: Faisalabad and Sialkot',
        'China',
        'Manufacturing and procurement',
        'B2B and Amazon operations',
      ],
      caption:
        'Pakistan and China sourcing scope. Faisalabad manufacturing setup; Sialkot sourcing capability.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote:
      'Client name and identifying details are withheld to respect confidentiality.',
    editorialNotes:
      'Two countries describe sourcing scope, not savings. Distinguish the proven Faisalabad manufacturing work from wider Sialkot capability. Reinstatement history is not a future approval guarantee.',
    handled: [
      'Faisalabad manufacturing setup',
      'Hoodies and T-shirts',
      'Custom printing',
      'Pakistan and China sourcing',
      'B2B bulk sales',
      'Amazon account launch and management',
      'Supplements sourcing',
      'Documentation for listing reinstatement',
    ],
    faqs: [
      {
        question: 'What was built for the Faisalabad client?',
        answer:
          'A mini manufacturing setup for hoodies, T-shirts and custom printing, alongside B2B bulk sales and the launch and management of an Amazon account in the supplements category.',
      },
      {
        question: 'How were deactivated Amazon listings handled?',
        answer:
          'We prepared the required documentation and followed the reinstatement process. The listings described in this project were reinstated. Future cases depend on their own evidence and Amazon’s requirements.',
      },
    ],
    relatedSlugs: [
      'multichannel-ecommerce-operations',
      'courier-3pl-management',
    ],
  },
  {
    slug: 'courier-3pl-management',
    order: 4,
    category: 'Courier and 3PL management',
    client: 'Confidential clients',
    projectType: 'Confidential client work',
    scope:
      'Courier selection, onboarding, shipment management and invoice auditing',
    title: CASE_NAMES['courier-3pl-management'].name,
    subtitle: CASE_NAMES['courier-3pl-management'].subtitle,
    headline: 'From carrier selection to invoice correction.',
    summary:
      '3PL sourcing, courier testing and shipment management, followed by invoice checks against agreed rate cards.',
    hero: {
      display: 'End to end',
      accessible:
        'Courier and 3PL management from provider selection to invoice correction',
      label: 'Courier and 3PL management',
      context:
        'Rate comparison, testing, onboarding, shipments and invoice audits.',
      value: null,
      prefix: '',
      suffix: '',
      kind: 'coverage',
      qualifier:
        'Rate comparison, testing, onboarding, shipment management and invoice auditing.',
    },
    deck: 'We choose and test the right couriers and 3PLs, manage the shipments, and check every invoice against the agreed rate card for overcharges and undercharges.',
    problemHeading: 'The quoted rate was only the beginning',
    problem:
      'Clients needed providers suited to different shipping requirements. A competitive rate card still needed comparison with direct courier options, service testing before commitment and invoice checks once shipments had moved.',
    approachHeading: 'Compare the service. Test the operation. Check the bill.',
    approach:
      'We sourced 3PLs, obtained rate cards and compared them with direct courier rates. We tested couriers before commitment, handled onboarding and managed shipments and volumes across different 3PL uses. When invoices arrived, we checked them against the agreed rates, investigated both overcharges and undercharges, and worked with providers to correct discrepancies. Claims experience across multiple regions informed the follow-up and understanding of provider processes. We negotiated shipping rates, managed cross-border line-haul and courier dispatch across UK and European routes, and kept daily dispatch cut-offs.',
    resultHeading: 'Selection, shipment management and billing control',
    result:
      'The work covered the full operating cycle: provider selection, service testing, onboarding, shipment management and invoice correction. Identified billing issues were resolved with the relevant provider, with both overcharges and undercharges included in the review.',
    closing:
      'The service needs to work in practice, and the invoice needs to match the agreement.',
    tags: [
      '3PL management',
      'Carrier comparison',
      'Rate cards',
      'Invoice auditing',
    ],
    cta: 'Discuss courier and 3PL management',
    seo: {
      title: CASE_NAMES['courier-3pl-management'].metaTitle,
      description:
        'Courier and 3PL selection, rate card comparison, test shipments and invoice auditing for overcharges and undercharges across client operations.',
      primary: 'courier invoice auditing',
      secondary: [
        '3PL management services',
        'courier rate card comparison',
        'parcel invoice audit',
        'courier overcharges',
      ],
    },
    visual: {
      type: 'invoice',
      heading: 'The courier management cycle',
      labels: [
        'Compare rate cards',
        'Test and onboard',
        'Manage shipments',
        'Audit invoice',
        'Resolve overcharges and undercharges',
      ],
      caption:
        'Illustrative rate-card and invoice review: compare rates, check charges and correct overcharges and undercharges.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote:
      'Client name and identifying details are withheld to respect confidentiality.',
    editorialNotes:
      'End to end describes the stated provider-to-invoice scope. It is not a numerical performance result. Do not invent invoice savings, error rates or shipment quantities.',
    handled: [
      '3PL sourcing',
      'Rate-card comparison',
      'Direct courier comparison',
      'Carrier testing and onboarding',
      'Shipment and volume management',
      'Invoice auditing',
      'Overcharge investigation',
      'Undercharge investigation and correction',
      'Negotiated shipping rates',
      'Cross-border line-haul',
      'Daily dispatch cut-offs',
      'Carrier service-level audits',
    ],
    faqs: [
      {
        question: 'How were couriers and 3PLs selected?',
        answer:
          'We sourced providers, obtained rate cards, compared them with direct courier options and tested couriers before commitment. Different providers were used for different shipping requirements.',
      },
      {
        question: 'What did the invoice review check?',
        answer:
          'Invoices were checked against agreed rates. Both overcharges and undercharges were investigated, with identified discrepancies taken to the relevant provider for correction.',
      },
    ],
    relatedSlugs: ['claims-recovery', 'remote-warehouse-management'],
  },
  {
    slug: 'multichannel-ecommerce-operations',
    order: 5,
    category: 'Multichannel commerce and inventory',
    client: 'Confidential clients',
    projectType: 'Confidential client work',
    scope:
      'Amazon USA, UK, Canada, UAE, Germany, Italy, France and Spain; Walmart, Shopify, eBay, Magento and Wish',
    title: CASE_NAMES['multichannel-ecommerce-operations'].name,
    subtitle: CASE_NAMES['multichannel-ecommerce-operations'].subtitle,
    headline: 'Eight Amazon marketplaces. The operations behind every listing.',
    summary:
      'Marketplace management, inventory activation, listing support and reporting across Amazon, Walmart, Shopify, eBay, Magento and Wish.',
    hero: {
      display: '8',
      accessible: 'Eight Amazon marketplaces across six sales channels',
      label: 'Across 6 sales channels',
      unit: 'Amazon marketplaces',
      context: 'USA, UK, Canada, UAE, Germany, Italy, France and Spain.',
      value: 8,
      prefix: '',
      suffix: '',
      kind: 'scope',
      qualifier:
        'USA, UK, Canada, UAE, Germany, Italy, France and Spain, across 6 sales channels: Amazon, Walmart, Shopify, eBay, Magento and Wish.',
    },
    deck: 'Inventory activation, listing support and reporting across Amazon USA, UK, Canada, UAE, Germany, Italy, France and Spain, plus Walmart, Shopify, eBay, Magento and Wish, using Linnworks and Microsoft Dynamics.',
    problemHeading: 'More channels meant more operational detail',
    problem:
      'Inventory had to become available on the right channels, listing issues needed attention and teams needed usable information from their marketplace and stock systems. Managing each storefront required an understanding of the operation behind it.',
    approachHeading: 'Inventory, listings and reporting handled together',
    approach:
      'We managed inventory activation across channels, resolved listing issues and worked with Linnworks, Microsoft Dynamics and other market tools. Linnworks work included operational tasks, reports and queries across its available functions. We also pulled Amazon reports, marketing reports and other operational reporting to support day-to-day management across the channel mix. We synced catalogue, stock and orders across Walmart WFS, Shopify, eBay, Magento and Wish.',
    extras: [
      {
        heading: 'Inventory systems kept in line',
        body: 'We run cycle counts, FIFO/FEFO, bin setup, warehouse layouts and pick paths, match system quantities with physical counts across Linnworks, Microsoft Dynamics 365 and the WMS, and build automated Excel reports on inventory turnover, shift productivity and carrier SLAs.',
      },
    ],
    resultHeading: 'Hands-on coverage across marketplaces and systems',
    result:
      'The work covered eight Amazon marketplaces across six sales channels, with practical execution across inventory activation, listing support, software queries and reporting. If your platform is not listed, we adapt fast. New marketplaces are new rulebooks, and we know how to read them.',
    closing: 'Every channel needs reliable work behind the listing.',
    auditOffer: {
      eyebrow: 'Marketplace Operations Review',
      heading: 'Request a Multi-Marketplace Catalog & Margin Audit',
      body: 'Identify inventory synchronization leaks, buy-box suppression, and fee discrepancies across Amazon (US, UK, CA, EU), Walmart, and Shopify. We audit your multi-channel stock feeds and catalog health to protect your bottom line.',
      ctaLabel: 'Request Marketplace Audit',
      ctaHref: '/appointment',
      badge: 'Channel Diagnostic',
    },
    tags: [
      'Multichannel inventory',
      'Linnworks',
      'Microsoft Dynamics',
      'Marketplace reporting',
    ],
    cta: 'Discuss your marketplace operations',
    seo: {
      title: CASE_NAMES['multichannel-ecommerce-operations'].metaTitle,
      description:
        'Operations across eight Amazon marketplaces and six sales channels, including Walmart, Shopify, eBay, Magento and Wish, with Linnworks, Microsoft Dynamics, listing support and reporting.',
      primary: 'multichannel inventory management',
      secondary: [
        'Linnworks inventory management',
        'Amazon marketplace management',
        'e-commerce operations services',
        'Microsoft Dynamics inventory',
      ],
    },
    visual: {
      type: 'channels',
      heading: 'The channels and systems in scope',
      // The first 13 are sales channels; the last two are the systems used.
      labels: [
        'Amazon USA',
        'Amazon UK',
        'Amazon Canada',
        'Amazon UAE',
        'Amazon Germany',
        'Amazon Italy',
        'Amazon France',
        'Amazon Spain',
        'Walmart',
        'Shopify',
        'eBay',
        'Magento',
        'Wish',
        'Linnworks',
        'Microsoft Dynamics',
      ],
      caption:
        'Eight Amazon marketplaces, five more sales channels and the operational systems used in the work.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote:
      'Client name and identifying details are withheld to respect confidentiality.',
    editorialNotes:
      'Eight counts Amazon marketplaces; Walmart, Shopify, eBay, Magento and Wish are five more named channels (six sales channels with Amazon). Do not claim simultaneous operation, native integrations or real-time synchronization.',
    handled: [
      'Eight Amazon marketplaces',
      'Walmart, Shopify, eBay, Magento and Wish',
      'Inventory activation',
      'Listing issue resolution',
      'Linnworks operations, reports and queries',
      'Microsoft Dynamics',
      'Amazon reports',
      'Marketing and operational reports',
      'FBA replenishment, FNSKU labels and shipments',
      'Stranded inventory and IPI management',
      'FBA, FBM and Walmart WFS fulfilment',
      'Discrepancy audits and FBA reimbursement',
      'Top-Rated eBay seller accounts',
    ],
    faqs: [
      {
        question: 'Which marketplaces were in scope?',
        answer:
          'Amazon USA, UK, Canada, UAE, Germany, Italy, France and Spain, alongside Walmart, Shopify, eBay, Magento and Wish. That is eight Amazon marketplaces across six sales channels.',
      },
      {
        question:
          'What work was carried out in Linnworks and Microsoft Dynamics?',
        answer:
          'The scope included inventory activation, listing support, operational tasks, reports and queries in Linnworks, Microsoft Dynamics and marketplace tools. Amazon and marketing reports also supported day-to-day management.',
      },
    ],
    relatedSlugs: ['remote-warehouse-management', 'etsy-in-house-launch'],
  },
  {
    slug: 'etsy-in-house-launch',
    order: 6,
    category: 'Etsy shop launch',
    client: 'Mett Global in-house project',
    projectType: 'In-house project',
    scope:
      'Etsy shop setup, 64 listings, ads, account management and quality checks',
    title: CASE_NAMES['etsy-in-house-launch'].name,
    subtitle: CASE_NAMES['etsy-in-house-launch'].subtitle,
    headline: '64 listings published. First sale in two days.',
    summary:
      'An in-house Etsy launch covering shop setup, listing management, Etsy ads and quality checks, with the first sale received in two days.',
    hero: {
      display: '2 days',
      accessible: 'First sale in two days in an in-house Etsy project',
      label: 'In-house Etsy launch',
      unit: 'to first sale',
      context:
        "All 64 listings live within 2 days, each scoring 90/100 or above in Mavya's review.",
      value: 2,
      prefix: '',
      suffix: ' days',
      kind: 'result',
      qualifier:
        '64 listings published. All 64 scored 90/100 or above in Mavya’s third-party review.',
    },
    deck: 'Our own Etsy project: we set up the shop, published 64 keyword-researched listings, ran Etsy Ads and quality checks, and received the first sale within two days.',
    problemHeading: 'Build the shop and run the operation',
    problem:
      'The aim was hands-on experience with a working Etsy shop: creating the account, publishing a catalogue and managing the details of listings, ads and quality checks.',
    approachHeading: 'A 64-listing catalogue, managed directly',
    approach:
      'We configured the shop, published 64 listings and built out keyword-researched titles, tags, buyer-facing descriptions and preview images. The catalogue combined digital products with print-on-demand items connected through Printify. We handled Etsy Ads, launch offers, account management and listing quality checks. All 64 listings scored 90 out of 100 or above in Mavya’s third-party listing review. The shop launched in October 2026 with no listings, reviews or history, in time for Halloween; 48 of the 64 listings were for the Halloween range.',
    resultHeading: 'The first sale arrived in two days',
    result:
      'The shop received its first sale in two days, with 91 visits and one order recorded in the reported launch window. All 64 listings scored 90/100 or above; the ten-listing sample documented in the portfolio averaged 95.6/100. Six to seven listings also appeared on Etsy’s second results page during the project. All 64 listings were live within two days of opening the shop.',
    closing:
      'A practical launch, with the operating work carried out in-house.',
    tags: [
      'In-house project',
      'Etsy ads',
      '64 listings',
      'Listing quality checks',
    ],
    cta: 'Discuss Etsy shop management',
    seo: {
      title: CASE_NAMES['etsy-in-house-launch'].metaTitle,
      description:
        'An in-house Etsy shop launch with 64 listings and a first sale in two days, covering Etsy ads, account management and listing quality checks.',
      primary: 'Etsy shop launch case study',
      secondary: [
        'Etsy shop management',
        'Etsy listing optimisation',
        'Etsy ads management',
      ],
    },
    visual: {
      type: 'etsy',
      heading: 'The Etsy launch milestones',
      labels: ['Shop created', '64 listings published', 'First sale in 2 days'],
      caption:
        '64 tiles represent the 64 published listings, all scoring 90/100 or above in Mavya’s third-party review. The first sale arrived in two days. Search positions refer to observations during the project.',
    },
    journeyCta: 'Read the case study',
    confidentialityNote: '',
    editorialNotes:
      'The user explicitly confirms that all 64 listings scored 90/100 or above. The supplied portfolio names Mavya as the third-party review tool and documents ten sample scores: five at 100, three at 92 and two at 90, averaging 95.6/100. Attribute the all-64 result to the user-confirmed project, not to independent access to Mavya. Do not describe these as official Etsy scores or say the ten-listing average applies to all 64. The dashboard screenshot supports 91 visits and one order; its two-day interpretation is source-reported. Six-to-seven second-page listings are a project-period observation from the handoff, not a current or guaranteed rank. The product-count breakdown sums to 65, so retain the confirmed total of 64 without that breakdown. Avoid date-specific claims, personal attribution and private account-status history.',
    supportingStats: [
      { display: '64', label: 'Listings published' },
      {
        display: '90+/100',
        label: 'Mavya review score across all 64 listings',
      },
      { display: '91', label: 'Visits in the reported launch window' },
      { display: '1', label: 'Orders in the reported launch window' },
      {
        display: '6–7',
        label:
          'Listings observed on Etsy’s second results page during the project',
      },
    ],
    handled: [
      'In-house Etsy shop setup',
      '64 published listings',
      'Keyword-researched titles and tags',
      'Buyer-facing descriptions and preview images',
      'Digital products and Printify items',
      'Etsy Ads and launch offers',
      'Account management',
      'Mavya listing reviews',
      'Shop policies and payments',
      '13 tags per listing',
      'Etsy Ads on 100% of listings from day one',
      'Automated buyer offers',
      '48 Halloween listings',
      '64 listings live in 2 days',
    ],
    images: [
      {
        src: '/images/etsy/etsy-catalog-halloween.png',
        alt: 'Halloween range listings in the Mett Global Etsy shop, with ads on',
        caption: 'Halloween range, ads on.',
        width: 363,
        height: 832,
      },
      {
        src: '/images/etsy/etsy-catalog-evergreen.png',
        alt: 'Evergreen range listings in the Mett Global Etsy shop, with ads on',
        caption: 'Evergreen range, ads on.',
        width: 364,
        height: 812,
      },
    ],
    faqs: [
      {
        question: 'Was this a client project?',
        answer:
          'No. This was Mett Global’s in-house Etsy project. We set up and managed the shop directly, published 64 listings and received the first sale in two days.',
      },
      {
        question: 'Who awarded the listing scores?',
        answer:
          'Mavya, a third-party review tool. All 64 listings scored 90/100 or above in the project review. The ten documented sample listings averaged 95.6/100. These are not official Etsy scores, and the sample average does not describe all 64 listings.',
      },
    ],
    relatedSlugs: ['multichannel-ecommerce-operations', 'procurement-sourcing'],
  },
];

/* ---- Validation: fail the build on an incomplete or inconsistent record ---- */

const slugs = new Set(internalStudies.map(study => study.slug));
if (internalStudies.length !== 6 || slugs.size !== 6) {
  throw new Error('Expected six case studies with unique slugs');
}
internalStudies.forEach((study, index) => {
  if (
    study.order !== index + 1 ||
    !study.title ||
    !study.subtitle ||
    !study.seo.description ||
    !study.hero.qualifier ||
    !study.hero.context
  ) {
    throw new Error(`Incomplete case study at position ${index + 1}`);
  }
  if (
    study.relatedSlugs.length !== 2 ||
    new Set(study.relatedSlugs).size !== 2 ||
    study.relatedSlugs.some(slug => slug === study.slug || !slugs.has(slug))
  ) {
    throw new Error(`Invalid related studies for ${study.slug}`);
  }
  // Five of the six are confidential client work; the Etsy project is in-house.
  if (
    study.faqs.length < 2 ||
    !study.handled.length ||
    (index < 5 && !study.confidentialityNote)
  ) {
    throw new Error(
      `Missing scope, questions or confidentiality for ${study.slug}`,
    );
  }
});

/** Public records. Internal notes are stripped even from the server export. */
export const caseStudies: CaseStudy[] = internalStudies.map(
  ({ editorialNotes, ...publicStudy }) => {
    void editorialNotes;
    return publicStudy;
  },
);

export const getCaseStudy = (slug: string) =>
  caseStudies.find(study => study.slug === slug);

export const caseStudyPath = (slug: string) => `/portfolio/${slug}`;

/** Cards for the existing /case-studies listing pattern. */
const CARD_TONES: WorkCard['tone'][] = ['dark', 'light', 'cream'];

export const caseStudyCards: WorkCard[] = caseStudies.map((study, index) => ({
  tone: CARD_TONES[index % CARD_TONES.length],
  sector: study.projectType.toUpperCase(),
  brand: study.category.toUpperCase(),
  title: study.title,
  subtitle: study.subtitle,
  copy: study.summary,
  metrics: [{ value: study.hero.display, label: study.hero.label }],
  href: caseStudyPath(study.slug),
  linkLabel: study.journeyCta,
}));
