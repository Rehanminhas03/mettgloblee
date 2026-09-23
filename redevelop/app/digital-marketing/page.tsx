import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROJECT_CTA, SERVICE_FOOTER, SERVICE_NAV } from '@/lib/navigation';

export const metadata = pageMetadata('/digital-marketing');

const BLOCKS = [
  {
    heading: 'Paid media',
    copy: 'Campaign structure, audience logic, creative testing and offer alignment are treated as connected decisions.',
  },
  {
    heading: 'Creative systems',
    copy: 'Static design, campaign concepts, copy and AI-supported video can be built around a clear customer problem and next action.',
  },
  {
    heading: 'Landing-page continuity',
    copy: 'The landing page should continue the ad promise, answer objections, provide proof and make the next step obvious.',
  },
  {
    heading: 'Follow-up',
    copy: 'Lead response time, qualification and follow-up systems are part of acquisition performance.',
  },
];

export default function DigitalMarketingPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={PROJECT_CTA}
      footerLinks={SERVICE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/digital-marketing')} />
      <JsonLd data={serviceJsonLd('/digital-marketing')} />

      <PageHero
        kicker="SERVICE / GROWTH"
        title={
          <>
            Better acquisition
            <br />
            <HeroAccent>starts upstream.</HeroAccent>
          </>
        }
      >
        Creative matters, but performance also depends on audience fit, the
        offer, landing page, follow-up and economics behind the campaign.
      </PageHero>

      <ServiceLayout
        sideKicker="MARKETING & CREATIVE"
        sideHeading="Diagnose the whole growth chain."
        ctaHref="/contact"
        ctaLabel="Discuss growth"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Do not scale a broken chain.</>}
        copy={
          'Find the weak point first, then improve the right part of acquisition.'
        }
        ctaHref="/contact"
        ctaLabel="Review your growth system"
      />
    </PageShell>
  );
}
