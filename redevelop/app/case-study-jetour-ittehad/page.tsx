import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import {
  CaseHero,
  ChallengeGrid,
  ChartCard,
  DataGrid,
  DataNote,
  IntegrityCard,
  PipelineCard,
  ProofGrid,
  SplitBar,
  Workflow,
} from '@/components/page/case';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { CASE_FOOTER, CASE_NAV, GLOBAL_FOOTER_NOTE } from '@/lib/navigation';

export const metadata = pageMetadata('/case-study-jetour-ittehad');

const CHALLENGES = [
  {
    label: '01 / FOUNDATION',
    title: 'Launch the digital presence',
    copy: 'Facebook and Instagram setup, brand direction, content cadence and an Islamabad-focused audience strategy.',
  },
  {
    label: '02 / ACQUISITION',
    title: 'Generate qualified demand',
    copy: 'Meta lead-generation activity around the Jetour T1 i-DM using Reel and image creative.',
  },
  {
    label: '03 / HANDLING',
    title: 'Make leads actionable',
    copy: 'A structured flow from enquiry to Google Sheet/CRM entry, notification, follow-up and sales outcome.',
  },
  {
    label: '04 / PRESENCE',
    title: 'Connect online and offline',
    copy: 'Billboard visibility and documented public activations reinforced the same brand story beyond social platforms.',
  },
];

const PIPELINE = [
  { stage: 'New / in pipeline', width: '51.9%', value: '41 · 51.9%' },
  { stage: 'Visit scheduled', width: '15.2%', value: '12 · 15.2%' },
  { stage: 'Unreachable', width: '19.0%', value: '15 · 19.0%' },
  { stage: 'Details sent', width: '6.3%', value: '5 · 6.3%' },
  { stage: 'Visited showroom', width: '3.8%', value: '3 · 3.8%' },
  { stage: 'Not interested', width: '2.5%', value: '2 · 2.5%' },
  { stage: 'Booked', width: '1.3%', value: '1 · 1.3%' },
];

const WORKFLOW = [
  { num: '01', label: 'Ad / website enquiry' },
  { num: '02', label: 'Lead form submission' },
  { num: '03', label: 'Sheet / CRM entry' },
  { num: '04', label: 'Automated notification' },
  { num: '05', label: 'Follow-up & outcome' },
];

const PROOF = [
  {
    label: 'OUTDOOR',
    figure: '5–6',
    title: 'Billboard placements',
    copy: 'The supplied case-study material documents approximately five to six billboard placements across Islamabad.',
  },
  {
    label: 'ON-GROUND',
    figure: '7',
    title: 'Named activations',
    copy: 'Jashn Event, Lake View Park, PakWheels Car Mela, Jazz × Ittehad, Asian Wok × Jetour, Giga Mall and Chaaye Khana.',
  },
  {
    label: 'PIPELINE',
    figure: '41',
    title: 'Open leads',
    copy: 'More than half of the documented lead set remained new or in pipeline at the snapshot date, so the case study does not treat the early booking count as the final campaign outcome.',
  },
];

export default function JetourCaseStudyPage() {
  return (
    <PageShell
      navLinks={CASE_NAV}
      footerNote={GLOBAL_FOOTER_NOTE}
      footerLinks={CASE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/case-study-jetour-ittehad')} />

      <CaseHero
        tone="dark"
        crumb="Jetour Ittehad"
        kicker="AUTOMOTIVE · ISLAMABAD · DOCUMENTED CAMPAIGN"
        titleTop="Building a dealership"
        titleAccent="growth engine from zero."
        lede="MettGlobal connected brand launch, social content, Meta acquisition, lead handling, digital journey, outdoor visibility and on-ground activation into one operating system for Jetour Ittehad."
        panelLabel="DOCUMENTED CAMPAIGN WINDOW"
        panelValue="04–09 Sep 2026"
        panelCopy="Lead and pipeline figures below are derived from the live campaign lead sheet supplied for this case study."
        kpis={[
          { value: '79', label: 'verified leads' },
          { value: '82%', label: 'from Reel creative' },
          { value: '20.3%', label: 'visit-stage+' },
          { value: '1', label: 'confirmed booking' },
        ]}
      />

      <Section>
        <div className="mb-[35px]">
          <SectionHead heading="The brief">
            Jetour Ittehad needed more than isolated posts or ads. The operating
            problem was to create a recognizable Islamabad presence and make
            each enquiry trackable through follow-up.
          </SectionHead>
        </div>
        <ChallengeGrid items={CHALLENGES} />
      </Section>

      <Section className="bg-[#0c0c0b] text-white">
        <SectionHead heading="Campaign performance" dark>
          The strongest story is not a vague claim about reach. It is the
          distribution of the 79 verified leads and what happened next.
        </SectionHead>
        <DataGrid>
          <ChartCard
            label="CREATIVE MIX"
            note="79 total"
            heading="Reel creative generated most leads."
          >
            <SplitBar
              primaryWidth="82.3%"
              secondaryWidth="17.7%"
              primaryLabel="Reel · 65 · 82.3%"
              secondaryLabel="Image · 14 · 17.7%"
            />
          </ChartCard>
          <ChartCard
            label="PLATFORM MIX"
            note="79 total"
            heading="Facebook delivered three quarters of leads."
          >
            <SplitBar
              platform
              primaryWidth="75.9%"
              secondaryWidth="24.1%"
              primaryLabel="Facebook · 60 · 75.9%"
              secondaryLabel="Instagram · 19 · 24.1%"
            />
          </ChartCard>
        </DataGrid>

        <PipelineCard
          label="LEAD OUTCOMES"
          note="100% reconciled"
          rows={PIPELINE}
        />

        <DataNote>
          Visit-stage+ is calculated as booked + visited + scheduled: 16 of 79
          leads = 20.3%. The source workbook displayed 15 / 19.0%; this page
          uses the reconciled status counts instead of repeating that
          inconsistency.
        </DataNote>
      </Section>

      <Section>
        <SectionHead heading="The system behind the numbers">
          Lead generation becomes commercially useful only when the handoff and
          follow-up are designed with the campaign.
        </SectionHead>
        <Workflow steps={WORKFLOW} />
        <ProofGrid items={PROOF} />
      </Section>

      <IntegrityCard
        label="WHAT WE REMOVED"
        heading={
          <>
            No unsupported &ldquo;#1 dealership&rdquo;, ROI or cost-efficiency
            claims.
          </>
        }
      >
        The source workbook included language such as
        &ldquo;most-booking&rdquo;, &ldquo;cost-effective&rdquo; and
        &ldquo;strong ROI signal&rdquo; without the comparative market data,
        spend, revenue or CPL required to support those claims publicly. We kept
        the evidence and removed the theatre.
      </IntegrityCard>

      <ContactBand
        heading={
          <>
            Need a growth system
            <br />
            you can actually measure?
          </>
        }
        copy="We can map the acquisition, follow-up and operating flow before more budget is added."
        ctaHref="/appointment"
        ctaLabel="Discuss a project"
      />
    </PageShell>
  );
}
