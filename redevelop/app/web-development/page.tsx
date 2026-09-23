import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROJECT_CTA, SERVICE_FOOTER, SERVICE_NAV } from '@/lib/navigation';

export const metadata = pageMetadata('/web-development');

const BLOCKS = [
  {
    heading: 'Positioning before decoration',
    copy: 'Start with what the visitor must understand: what the company does, who it serves, why it matters and what action comes next.',
  },
  {
    heading: 'Responsive implementation',
    copy: 'Mobile tap targets, form length, information hierarchy and page weight are treated as design inputs, not afterthoughts.',
  },
  {
    heading: 'Conversion architecture',
    copy: 'Calls to action, proof, contact options and landing-page continuity are placed around the customer decision.',
  },
  {
    heading: 'Technical quality',
    copy: 'Metadata, crawlability, semantic HTML, accessibility, performance and analytics events are part of the build.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={PROJECT_CTA}
      footerLinks={SERVICE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/web-development')} />
      <JsonLd data={serviceJsonLd('/web-development')} />

      <PageHero
        kicker="SERVICE / WEB"
        title={
          <>
            Build trust.
            <br />
            <HeroAccent>Reduce friction.</HeroAccent>
          </>
        }
      >
        A website should explain the offer, build confidence and make the next
        action easy. Design quality matters, but so do mobile UX, technical
        performance, accessibility and conversion paths.
      </PageHero>

      <ServiceLayout
        sideKicker="WEB & CONVERSION"
        sideHeading="From corporate websites to focused landing pages."
        ctaHref="/contact"
        ctaLabel="Discuss your website"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Your own website is proof.</>}
        copy={'We treat it like a product, not a brochure.'}
        ctaHref="/contact"
        ctaLabel="Start a web project"
      />
    </PageShell>
  );
}
