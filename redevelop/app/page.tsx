import { CaseStudies } from '@/components/home/CaseStudies';
import { Contact } from '@/components/home/Contact';
import { CursorGlow } from '@/components/home/CursorGlow';
import { Faq } from '@/components/home/Faq';
import { FloatingContact } from '@/components/home/FloatingContact';
import { GlobalDelivery } from '@/components/home/GlobalDelivery';
import { Hero } from '@/components/home/Hero';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeNav } from '@/components/home/HomeNav';
import { HomeTracking } from '@/components/home/HomeTracking';
import { Manifesto } from '@/components/home/Manifesto';
import { Method } from '@/components/home/Method';
import { Partners } from '@/components/home/Partners';
import { Reviews } from '@/components/home/Reviews';
import { Services } from '@/components/home/Services';
import { Team } from '@/components/home/Team';
import { Ticker } from '@/components/home/Ticker';
import { WhyMett } from '@/components/home/WhyMett';
import { pageMetadata } from '@/lib/seo';
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
    'MettGlobal is a Pakistan-based global digital and operations partner for eCommerce, marketing, AI automation, web development, supply chain and sales support.',
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
  serviceType: [
    'eCommerce Operations',
    'Paid Media',
    'AI Automation',
    'Web Design and Development',
    'Supply Chain and Sourcing',
    'Sales Support and Business Development',
    'Digital Marketing and Creative',
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <a
        href="#main-content"
        className="fixed top-3 left-[18px] z-[100] -translate-y-[180%] rounded-full bg-black px-4 py-[11px] text-white transition-transform duration-200 focus:translate-y-0"
      >
        Skip to main content
      </a>

      <div className="text-ink">
        <CursorGlow />
        <HomeTracking />
        <HomeNav />

        <main id="main-content">
          <Hero />
          <Ticker />
          <Manifesto />
          <Services />
          <CaseStudies />
          <Partners />
          <WhyMett />
          <Method />
          <Team />
          <Reviews />
          <GlobalDelivery />
          <Faq />
          <Contact />
        </main>

        <FloatingContact />
        <HomeFooter />
      </div>
    </>
  );
}
