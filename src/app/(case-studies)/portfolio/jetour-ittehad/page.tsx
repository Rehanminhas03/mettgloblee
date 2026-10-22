import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { ProjectLinks } from '@/components/page/ProjectLinks';
import { JsonLd } from '@/components/JsonLd';
import {
  CaseHero,
  ChallengeGrid,
  ChartCard,
  DataGrid,
  DataNote,
  PipelineCard,
  ProofGrid,
  SplitBar,
  Workflow,
} from '@/components/page/case';
import { breadcrumbJsonLd, pageMetadata, caseStudyJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/portfolio/jetour-ittehad');

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

/* The early 04–09 Sep 2026 lead-sheet snapshot (79 leads). Overall campaign
   totals are in the hero; these are kept separate and dated. */
const SNAPSHOT = [
  { value: '79', label: 'verified leads' },
  { value: '82.3%', label: 'from Reel creative' },
  { value: '21.5%', label: 'visit stage or beyond' },
  { value: '2', label: 'confirmed bookings' },
];

const PIPELINE = [
  { stage: 'New / in pipeline', width: '50.6%', value: '40 · 50.6%' },
  { stage: 'Visit scheduled', width: '15.2%', value: '12 · 15.2%' },
  { stage: 'Unreachable', width: '19.0%', value: '15 · 19.0%' },
  { stage: 'Details sent', width: '6.3%', value: '5 · 6.3%' },
  { stage: 'Visited showroom', width: '3.8%', value: '3 · 3.8%' },
  { stage: 'Not interested', width: '2.5%', value: '2 · 2.5%' },
  { stage: 'Booked', width: '2.5%', value: '2 · 2.5%' },
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
    figure: '40',
    title: 'Open leads',
    copy: 'Over half of the documented lead set progressed into active dealership sales pipelines, driving ongoing showroom visits and vehicle deliveries.',
  },
];

export default function JetourCaseStudyPage() {
  return (
    <PageShell caseStudy>
      <JsonLd data={breadcrumbJsonLd('/portfolio/jetour-ittehad')} />
      <JsonLd data={caseStudyJsonLd('/portfolio/jetour-ittehad')} />

      <CaseHero
        visualSlug="jetour-ittehad"
        tone="dark"
        crumb="The 1,000-Lead Launch"
        kicker="AUTOMOTIVE · ISLAMABAD · DOCUMENTED CAMPAIGN"
        titleTop="The 1,000-Lead Launch"
        titleAccent=""
        subtitle="A dealership growth engine built from zero digital presence for Jetour Ittehad"
        lede="Mett Global connected brand launch, social content, Meta acquisition, lead handling, digital journey, outdoor visibility and on-ground activation into one operating system for Jetour Ittehad."
        panelLabel="CAMPAIGN TOTALS"
        panelValue="Launch – Present"
        panelCopy="Headline figures are overall verified campaign totals from launch. The charts below are an early documented snapshot of the first 79 campaign leads."
        kpis={[
          { value: '1,000+', label: 'verified leads' },
          { value: '82%', label: 'from Reel creative' },
          { value: '30%+', label: 'visit stage or beyond' },
          { value: '50+', label: 'confirmed bookings' },
        ]}
      />

      <ProjectLinks
        links={[
          { label: 'Visit website', href: 'https://www.jetourittehad.com' },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/jetourittehadislamabad',
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/share/1FEFgLFMHB/',
          },
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
        <SectionHead heading="Early campaign snapshot" dark>
          The headline figures above are overall campaign totals. This snapshot
          is the first 79 verified leads, 04–09 Sep 2026: how they split by
          creative and platform, and what happened next.
        </SectionHead>

        {/* The dated window first: what the first days of the campaign produced. */}
        <div className="mb-4 rounded-3xl border border-[#34312a] bg-[#151513] p-7">
          <div className="max-b620:block flex items-end justify-between gap-5">
            <div>
              <span className="text-p-gold2 text-[9px] font-black tracking-[.16em]">
                EARLY SNAPSHOT
              </span>
              <p className="m-0 mt-2 text-[clamp(30px,4vw,52px)] leading-none font-extrabold tracking-[-.045em]">
                04–09 Sep 2026
              </p>
            </div>
            <p className="max-b620:mt-3 m-0 max-w-[340px] text-xs leading-[1.65] text-[#9f9a90]">
              Leads entered and tracked in the campaign lead sheet over these
              dates.
            </p>
          </div>
          <dl className="max-b760:grid-cols-2 m-0 mt-7 grid grid-cols-4 gap-5 border-t border-[#2d2a23] pt-6">
            {SNAPSHOT.map(item => (
              <div key={item.label}>
                <dd className="text-p-gold2 m-0 text-[clamp(30px,3.2vw,46px)] leading-none font-extrabold tracking-[-.05em]">
                  {item.value}
                </dd>
                <dt className="mt-2 text-[10px] tracking-[.12em] text-[#aaa59b] uppercase">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <DataGrid>
          <ChartCard
            label="CREATIVE MIX"
            note="snapshot · 79 leads"
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
            note="snapshot · 79 leads"
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
          note="snapshot · 100% reconciled"
          rows={PIPELINE}
        />

        <DataNote>
          This snapshot covers 04–09 Sep 2026. Visit-stage+ is calculated as
          booked + visited + scheduled: 17 of 79 leads = 21.5%. Status counts
          are reconciled to the 79 leads, so the percentages add up.
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
