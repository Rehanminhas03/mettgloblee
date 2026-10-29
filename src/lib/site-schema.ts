import { SITE_URL, SOCIAL_PROFILES, MAPS_URL } from './site';
import { LEADERSHIP } from './leadership';

/* Structured data carried over verbatim from index.html. */
export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Mett Global',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
};

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Mett Global',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-512.png`,
  description:
    'Headquartered in Islamabad with U.S. business representation, Mett Global builds growth systems, custom software, AI automation & e-commerce ops for Pakistan & U.S. brands.',
  foundingDate: '2025',
  email: 'contact@mettglobal.com',
  telephone: '+92-313-426-2282',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@mettglobal.com',
      telephone: '+92-313-426-2282',
      areaServed: ['PK', 'Global'],
      availableLanguage: ['English', 'Urdu'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      name: 'Usman Rafiq (Director, U.S. Business Development)',
      email: 'usman@mettglobal.com',
      telephone: '+1-832-858-0716',
      areaServed: 'US',
      availableLanguage: ['English', 'Urdu'],
    },
  ],
  slogan: 'The Art of Digital Excellence',
  areaServed: ['US', 'PK', 'GB', 'CA', 'EU'],
  knowsAbout: [
    'Digital marketing agency Islamabad',
    'Amazon FBA reimbursement service',
    'Courier and 3PL claims recovery',
    'Automotive and car dealership marketing',
    'Multichannel e-commerce operations',
    'Performance marketing and Meta Ads',
    'Web development and Next.js applications',
    'Custom CRM and dealership ERP software',
    'Healthcare and medical clinic SEO',
    'AI automation workflows and LLMs',
    'Supply chain and warehouse management',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mett Global Core Services',
    itemListElement: [
      /* 1. Paid media and social media */
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing & Growth Agency',
          description:
            'Performance marketing, Meta and Google Ads, SEO, creative production, and full-funnel digital marketing for high-growth businesses and dealerships in the USA and Pakistan.',
          serviceType: 'Digital Marketing Agency',
          areaServed: ['United States', 'Pakistan', 'Worldwide'],
        },
      },
      /* 2. Ecommerce and marketplace operations (Amazon and Walmart claims) */
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amazon FBA Reimbursement & Multi-Channel Logistics Claims',
          description:
            'Auditing and recovering lost parcel, damaged inventory, and marketplace claims across FedEx, UPS, USPS, Amazon FBA, Walmart WFS in USA, UK, EU, and Canada. Over £50,000 recovered in one year for a leading global brand.',
          serviceType: 'Amazon FBA Reimbursement',
          areaServed: [
            'United States',
            'United Kingdom',
            'Canada',
            'European Union',
          ],
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amazon Multichannel E-Commerce Operations & Supply Chain',
          description:
            'Marketplace operations, inventory syncing, catalog management, and reporting across 8 Amazon marketplaces (USA, UK, Canada, UAE, EU) and multichannel storefronts (Walmart, Shopify, eBay, Magento).',
          serviceType: 'E-Commerce Operations',
          areaServed: [
            'United States',
            'United Kingdom',
            'Canada',
            'European Union',
            'United Arab Emirates',
          ],
        },
      },
      /* 3. Web and software development */
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web, Custom ERP & Software Development',
          description:
            'Modern high-speed web platforms, ecommerce stores, custom CRMs, dealership ERPs, and workflow integrations.',
          serviceType: 'Software Development',
          areaServed: ['United States', 'Pakistan', 'Worldwide'],
        },
      },
      /* 4. AI automation */
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation, Chatbots & CRM Integration',
          description:
            'Operational workflows, intelligent customer assistants, document data extraction, and CRM automation designed to cut repetitive manual tasks.',
          serviceType: 'AI Automation & Integration',
          areaServed: ['United States', 'Pakistan', 'Worldwide'],
        },
      },
      /* Industry-specific solutions */
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Dealership Marketing & Lead Generation',
          description:
            'End-to-end digital marketing, CRM integration, footfall generation, and lead automation for automotive dealerships.',
          serviceType: 'Automotive Dealership Marketing',
          areaServed: ['Islamabad', 'Pakistan'],
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Healthcare & Local Medical Practice SEO',
          description:
            'Patient-first website design, HIPAA-compliant digital pathways, and local medical SEO for psychiatric, dental, and medical clinics in the United States (Texas, Illinois).',
          serviceType: 'Medical SEO & Web Development',
          areaServed: ['United States'],
        },
      },
    ],
  },
  founder: [
    {
      '@type': 'Person',
      name: LEADERSHIP[0].name,
      jobTitle: LEADERSHIP[0].role,
      sameAs: LEADERSHIP[0].linkedin ? [LEADERSHIP[0].linkedin] : undefined,
    },
    {
      '@type': 'Person',
      name: LEADERSHIP[1].name,
      jobTitle: LEADERSHIP[1].role,
      sameAs: LEADERSHIP[1].linkedin ? [LEADERSHIP[1].linkedin] : undefined,
    },
  ],
  employee: LEADERSHIP.map(person => ({
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
  })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot # 195, Street 1, I-10/3',
    addressLocality: 'Islamabad',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  hasMap: MAPS_URL,
  sameAs: [...SOCIAL_PROFILES.map(profile => profile.href)],
};
