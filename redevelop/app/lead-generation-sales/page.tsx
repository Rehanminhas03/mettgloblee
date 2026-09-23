import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { BOOK_CTA, SERVICE_NAV, STANDARD_FOOTER } from '@/lib/navigation';

export const metadata = pageMetadata('/lead-generation-sales');

const BLOCKS = [
  {
    heading: 'Ideal-customer profile and signal research',
    copy: 'Define who is realistically worth contacting and which observable signals make outreach timely: active advertising, hiring, weak conversion paths, expansion, new offers or clear operational pain.',
  },
  {
    heading: 'Qualification and CRM hygiene',
    copy: 'Structure lead stages, ownership, next actions and follow-up dates so opportunities do not disappear into spreadsheets or unowned inboxes.',
  },
  {
    heading: 'Personalized outreach systems',
    copy: 'Build outreach around a visible problem and relevant offer rather than mass generic messages. The goal is to start useful commercial conversations, not maximize send volume.',
  },
  {
    heading: 'Follow-up and measurement',
    copy: 'Track qualified prospects, replies, conversations, meetings, proposals and outcomes so the team can improve the system from evidence.',
  },
];

export default function LeadGenerationSalesPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={BOOK_CTA}
      footerLinks={STANDARD_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/lead-generation-sales')} />
      <JsonLd data={serviceJsonLd('/lead-generation-sales')} />

      <PageHero
        kicker="LEAD GENERATION & SALES SYSTEMS"
        title={
          <>
            Build a pipeline.
            <br />
            <HeroAccent>Then build the discipline behind it.</HeroAccent>
          </>
        }
      >
        Prospecting performs better when targeting, buying signals, CRM
        structure, outreach and follow-up operate as one repeatable system.
      </PageHero>

      <ServiceLayout
        sideKicker="WHAT WE WORK ON"
        sideHeading="From prospect list to accountable follow-up."
        ctaHref="/appointment"
        ctaLabel="Discuss your pipeline"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={
          <>
            Need more conversations,
            <br />
            not more random leads?
          </>
        }
        copy={
          'We can review your current targeting and pipeline structure before building the outreach layer.'
        }
        ctaHref="/insight-lead-generation-system"
        ctaLabel="Read the sales-system guide"
      />
    </PageShell>
  );
}
