import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROJECT_CTA, SERVICE_FOOTER, SERVICE_NAV } from '@/lib/navigation';

export const metadata = pageMetadata('/ai-automation');

const BLOCKS = [
  {
    heading: 'Process mapping',
    copy: 'Before adding AI, document the trigger, inputs, decisions, systems, owner, output and exception path.',
  },
  {
    heading: 'Useful automation candidates',
    copy: 'Lead classification, structured extraction, first-pass drafting, report preparation, workflow routing and internal summaries can be strong candidates.',
  },
  {
    heading: 'Human checkpoints',
    copy: 'Production workflows need escalation paths, confidence handling, logging and a clear way for people to review outcomes.',
  },
  {
    heading: 'Measure the change',
    copy: 'Baseline time per task, turnaround, error rate, review effort and volume before automating.',
  },
];

export default function AiAutomationPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={PROJECT_CTA}
      footerLinks={SERVICE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/ai-automation')} />
      <JsonLd data={serviceJsonLd('/ai-automation')} />

      <PageHero
        kicker="SERVICE / AI AUTOMATION"
        title={
          <>
            Automate work.
            <br />
            <HeroAccent>Not confusion.</HeroAccent>
          </>
        }
      >
        The best automation candidates are repeated workflows with clear inputs,
        ownership, exceptions and measurable outputs.
      </PageHero>

      <ServiceLayout
        sideKicker="AUTOMATION"
        sideHeading="Workflow-first AI systems."
        ctaHref="/contact"
        ctaLabel="Map an automation"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Start with one workflow.</>}
        copy={
          'Find a repeated operational burden and design the smallest useful automation around it.'
        }
        ctaHref="/contact"
        ctaLabel="Discuss AI automation"
      />
    </PageShell>
  );
}
