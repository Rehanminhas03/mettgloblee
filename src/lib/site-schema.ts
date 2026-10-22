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
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  knowsAbout: [
    'Digital marketing',
    'Performance marketing',
    'Web development',
    'Software development',
    'Custom CRM and ERP systems',
    'AI automation',
    'E-commerce operations',
    'Supply chain management',
  ],
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
