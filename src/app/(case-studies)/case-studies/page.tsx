import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { ProcessGrid, Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { WorkCardGrid } from '@/components/site/WorkCards';
import { CASE_STUDIES } from '@/lib/caseStudies';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/case-studies');

const METHOD = [
  {
    num: '01',
    title: 'Verified metrics',
    copy: 'Counts, percentages and outcomes are calculated only from documented campaign or pipeline data.',
  },
  {
    num: '02',
    title: 'Evidence-led narrative',
    copy: 'We separate work completed from claims about market impact we cannot independently establish.',
  },
  {
    num: '03',
    title: 'No vanity ROI',
    copy: 'We do not publish CPL, ROAS, revenue or rankings when the underlying financial data is unavailable.',
  },
  {
    num: '04',
    title: 'Living case studies',
    copy: 'Pages can be updated as more client-approved analytics, photography and outcomes become available.',
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/case-studies')} />
      <JsonLd data={pageJsonLd('/case-studies', 'CollectionPage')} />

      {/* .hero.case-index-hero */}
      <section className="max-b620:px-6 bg-p-paper max-b620:pt-14 max-b620:pb-12 max-w-[1320px] bg-[image:radial-gradient(circle_at_82%_18%,rgba(184,137,45,.10),transparent_22%)] px-[8vw] pt-20 pb-16">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          CASE STUDIES / SELECTED WORK
        </span>
        <h1 className="mt-6 mb-[34px] text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-.045em]">
          Proof before
          <br />
          <span className="text-p-gold">promises.</span>
        </h1>
        <p className="text-p-muted max-b620:text-[16px] my-[1em] max-w-[780px] text-[18px] leading-[1.75]">
          MettGlobal case studies show how strategy, creative, technology,
          automation and operations come together around real client problems.
          Performance figures are published only where the underlying evidence
          supports them.
        </p>
      </section>

      <Section className="bg-[#f6f1e7]">
        <WorkCardGrid items={CASE_STUDIES} />
      </Section>

      <Section dark>
        <SectionHead heading="How we publish proof" dark>
          A case study is only useful if the reader can tell what is measured,
          what is operational evidence and what is still awaiting data.
        </SectionHead>
        <ProcessGrid steps={METHOD} dark />
      </Section>

      <ContactBand
        heading="Have a problem worth measuring?"
        copy="Bring us the commercial or operational constraint. We will map the system and the evidence required to judge it properly."
        ctaHref="/appointment"
        ctaLabel="Book a meeting"
      />
    </PageShell>
  );
}
