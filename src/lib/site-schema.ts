import { PHONE } from '@/lib/navigation';
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
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mett Global',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-512.png`,
  description:
    'Mett Global was founded in 2025 and is based in Islamabad, Pakistan. It builds, grows and automates businesses through digital marketing and growth, web and software development, AI automation and content, and e-commerce and supply chain.',
  foundingDate: '2025',
  email: 'contact@mettglobal.com',
  telephone: PHONE.href.slice(4),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@mettglobal.com',
    telephone: PHONE.href.slice(4),
    availableLanguage: ['English', 'Urdu'],
  },
  slogan: 'The Art of Digital Excellence',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'European Union' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
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
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amazon FBA Reimbursement & Multi-Channel Logistics Claims',
          description:
            'Auditing and recovering lost parcel, damaged inventory, and marketplace claims across FedEx, UPS, USPS, Amazon FBA, Walmart WFS in USA, UK, EU, and Canada. Over £50,000+ recovered.',
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
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing & Growth Agency (Islamabad)',
          description:
            'Performance marketing, Meta and Google Ads, SEO, creative production, and full-funnel digital marketing for high-growth businesses and dealerships.',
          serviceType: 'Digital Marketing Agency',
          areaServed: ['Islamabad', 'Pakistan', 'Worldwide'],
        },
      },
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
          name: 'Web, Custom ERP & Software Development',
          description:
            'Modern high-speed web platforms, e-commerce stores, custom CRMs, dealership ERPs, and workflow integrations.',
          serviceType: 'Software Development',
          areaServed: ['United States', 'Pakistan', 'Worldwide'],
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
