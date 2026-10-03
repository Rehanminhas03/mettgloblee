import { CaseStudies } from '@/components/home/CaseStudies';
import { Contact } from '@/components/home/Contact';
import { Faq } from '@/components/home/Faq';
import { jsonLdHtml } from '@/components/JsonLd';
import { Hero } from '@/components/home/Hero';
import { HomeTracking } from '@/components/home/HomeTracking';
import { Partners } from '@/components/home/Partners';
import { Services } from '@/components/home/Services';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { pageMetadata } from '@/lib/seo';
import { SERVICES } from '@/lib/services';
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
  name: 'MettGlobal',
  alternateName: 'Mett Global',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-512.png`,
  description:
    'MettGlobal is a Pakistan-based global partner for eCommerce and supply chain, performance marketing and social media, web and software development, and AI automation.',
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
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://www.linkedin.com/company/mett-global/',
    'https://www.facebook.com/share/1ETMXRB1Ls/',
    'https://www.instagram.com/mettglobal.pk',
    'https://x.com/mettglobal',
  ],
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
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  serviceType: SERVICES.map(service => service.title),
  areaServed: 'Worldwide',
};

export default function HomePage() {
  return (
    <>
      {[
        WEBSITE_JSON_LD,
        ORGANIZATION_JSON_LD,
        PROFESSIONAL_SERVICE_JSON_LD,
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

        <main id="main-content">
          <Hero />
          <Services />
          <CaseStudies />
          <Partners />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
