import { PHONE } from '@/lib/navigation';
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
import { FAQS } from '@/lib/faqs';
import { SITE_URL } from '@/lib/site';

export const metadata = pageMetadata('/');

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
  '@id': `${SITE_URL}/#business`,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  image: `${SITE_URL}/logo-512.png`,
  name: 'Mett Global',
  url: `${SITE_URL}/`,
  telephone: PHONE.href.slice(4),
  email: 'contact@mettglobal.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot # 195, Street 1, I-10/3',
    addressLocality: 'Islamabad',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  areaServed: [
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
};

export default function HomePage() {
  return (
    <>
      {[PROFESSIONAL_SERVICE_JSON_LD, FAQ_JSON_LD].map((schema, index) => (
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
