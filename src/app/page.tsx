import { Contact } from '@/components/home/Contact';
import { Faq } from '@/components/home/Faq';
import { jsonLdHtml } from '@/components/JsonLd';
import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { HomeTracking } from '@/components/home/HomeTracking';
import { Partners } from '@/components/home/Partners';
import { Services } from '@/components/home/Services';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { pageMetadata } from '@/lib/seo';
import { SERVICES } from '@/lib/services';
import { FAQS } from '@/lib/faqs';
import { LEADERSHIP } from '@/lib/leadership';
import { SITE_URL } from '@/lib/site';

export const metadata = pageMetadata('/');

/* Structured data carried over verbatim from index.html. */
const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MettGlobal',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'MettGlobal',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-512.png`,
  description:
    'MettGlobal is a Pakistan-based global partner that builds, grows and automates businesses through digital marketing and growth, web and software development, AI automation and content, and e-commerce and supply chain.',
  email: 'contact@mettglobal.com',
  telephone: '+92-304-6551553',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@mettglobal.com',
    telephone: '+92-304-6551553',
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
  founder: {
    '@type': 'Person',
    name: LEADERSHIP[0].name,
    jobTitle: LEADERSHIP[0].role,
  },
  employee: LEADERSHIP.map(person => ({
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot # 195, Street 1, I-10/3',
    addressLocality: 'Islamabad',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  hasMap: 'https://maps.app.goo.gl/9PrdtKZQhU1X93em7',
  sameAs: [
    'https://www.linkedin.com/company/mett-global/',
    'https://www.facebook.com/share/1ETMXRB1Ls/',
    'https://www.instagram.com/mettglobal',
    'https://x.com/mettglobal',
  ],
};

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const PROFESSIONAL_SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MettGlobal',
  url: `${SITE_URL}/`,
  telephone: '+92-304-6551553',
  email: 'contact@mettglobal.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot # 195, Street 1, I-10/3',
    addressLocality: 'Islamabad',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  serviceType: SERVICES.map(service => service.title),
  areaServed: [
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
};

export default function HomePage() {
  return (
    <>
      {[
        WEBSITE_JSON_LD,
        ORGANIZATION_JSON_LD,
        PROFESSIONAL_SERVICE_JSON_LD,
        FAQ_JSON_LD,
      ].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(schema) }}
        />
      ))}

      <a
        href="#main-content"
        className="fixed top-3 left-[18px] z-[100] -translate-y-[180%] rounded-full bg-black px-4 py-[11px] text-white transition-transform duration-200 focus:translate-y-0"
      >
        Skip to main content
      </a>

      <div className="text-ink">
        <HomeTracking />
        <SiteHeader />

        <Intro />
        <main id="main-content" data-home>
          <Hero />
          <Services />
          <Partners />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
