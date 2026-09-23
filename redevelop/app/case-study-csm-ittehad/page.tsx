import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import {
  CaseHero,
  ChallengeGrid,
  ChartCard,
  ConversionDonut,
  DataGrid,
  DataNote,
  EvidenceStack,
  FunnelMini,
  IntegrityCard,
  ProofGrid,
  Workflow,
} from '@/components/page/case';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { CASE_FOOTER, CASE_NAV, GLOBAL_FOOTER_NOTE } from '@/lib/navigation';

export const metadata = pageMetadata('/case-study-csm-ittehad');

const CHALLENGES = [
  {
    label: '01 / BRAND FOUNDATION',
    title: 'Build the social presence',
    copy: 'Instagram setup, visual direction, content cadence and Islamabad-focused audience planning around the EV line-up.',
  },
  {
    label: '02 / ACQUISITION',
    title: 'Create demand for the EV3',
    copy: 'Meta lead-generation activity used the JMEV EV3 as the flagship campaign model for local prospect acquisition.',
  },
  {
    label: '03 / AUTOMATION',
    title: 'Make every enquiry trackable',
    copy: 'Lead capture flowed into a Google Sheet / CRM process, notification and follow-up path rather than sitting as isolated form submissions.',
  },
  {
    label: '04 / LOCAL VISIBILITY',
    title: 'Reinforce digital with physical presence',
    copy: 'Outdoor activity and event activation were part of the wider plan, with exact placements and event evidence still awaiting publication-ready documentation.',
  },
];

const WORKFLOW = [
  { num: '01', label: 'Social / Meta activity' },
  { num: '02', label: 'Website / lead form' },
  { num: '03', label: 'Google Sheet / CRM entry' },
  { num: '04', label: 'Automated notification' },
  { num: '05', label: 'Follow-up / showroom visit' },
];

const PROOF = [
  {
    label: 'SOCIAL FOUNDATION',
    figure: '1',
    title: 'Instagram presence built',
    copy: 'The supplied evidence index identifies the CSM Ittehad Instagram profile as launched and managed within the engagement.',
  },
  {
    label: 'CAMPAIGN OUTPUT',
    figure: '112',
    title: 'Showroom visits',
    copy: 'This is the clearest client-reported commercial outcome in the current file and the point where the funnel is documented.',
  },
  {
    label: 'MEASUREMENT GAP',
    figure: 'OPEN',
    title: 'Closed sales not yet confirmed',
    copy: 'The source explicitly states that visit-to-close tracking is still in progress, so no booking or revenue claim is made here.',
  },
];

export default function CsmCaseStudyPage() {
  return (
    <PageShell
      navLinks={CASE_NAV}
      footerNote={GLOBAL_FOOTER_NOTE}
      footerLinks={CASE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/case-study-csm-ittehad')} />

      <CaseHero
        tone="csm"
        crumb="CSM Ittehad"
        kicker="EV AUTOMOTIVE · ISLAMABAD · CLIENT-REPORTED CAMPAIGN DATA"
        titleTop="From brand setup"
        titleAccent="to showroom traffic."
        lede={
          <>
            MettGlobal built the digital foundation and campaign operating
            system around CSM Ittehad&rsquo;s EV launch activity — combining
            social setup, acquisition, lead automation, digital journey and
            local visibility.
          </>
        }
        panelLabel="REPORTING STANDARD"
        panelValue="Measured, with attribution clearly labelled."
        panelCopy="The campaign figures on this page come from client-reported performance in the supplied case-study file. MettGlobal does not publish spend, CPL, ROI or closed-sales claims until those figures are supported by underlying records."
        kpis={[
          { value: '~400', label: 'client-reported leads' },
          { value: '112', label: 'confirmed showroom visits' },
          { value: '~28%', label: 'lead-to-visit rate' },
          { value: 'OPEN', label: 'booking / sales tracking' },
        ]}
      />

      <Section>
        <div className="mb-[35px]">
          <SectionHead heading="The assignment">
            The source material describes a new local EV marketing presence that
            needed the fundamentals built together rather than as separate
            vendor tasks.
          </SectionHead>
        </div>
        <ChallengeGrid items={CHALLENGES} />
      </Section>

      <Section className="bg-[#0c0c0b] text-white">
        <SectionHead heading="The documented campaign result" dark>
          The supplied workbook reports approximately 400 leads and 112
          confirmed showroom visits from the EV3 launch campaign in Islamabad.
        </SectionHead>
        <DataGrid>
          <ChartCard
            label="LEAD TO VISIT"
            note="client-reported"
            heading="More than one in four leads reached the showroom."
          >
            <ConversionDonut value="28%" label="visit conversion" />
            <p className="my-[1em] text-center text-[11px] leading-[1.65] text-[#aaa59b]">
              112 confirmed showroom visits ÷ approximately 400 leads =
              approximately 28.0%.
            </p>
          </ChartCard>
          <ChartCard
            label="FUNNEL SNAPSHOT"
            note="closure data pending"
            heading="The campaign is measurable through the visit stage."
          >
            <FunnelMini
              stages={[
                { label: 'Lead capture', value: '~400' },
                { label: 'Showroom visits', value: '112' },
                { label: 'Bookings / sales', value: 'Pending', pending: true },
              ]}
            />
          </ChartCard>
        </DataGrid>

        <DataNote>
          Because the lead total is reported as approximately 400, the
          percentage is necessarily approximate. Booking, sales, spend, CPL,
          revenue and ROAS are not published because the source file does not
          contain confirmed underlying figures for them.
        </DataNote>
      </Section>

      <Section>
        <SectionHead heading="The operating system behind the campaign">
          The strongest part of the engagement is the connection between
          awareness, acquisition and follow-up — not an unsupported
          market-position claim.
        </SectionHead>
        <Workflow steps={WORKFLOW} />
        <ProofGrid items={PROOF} />
      </Section>

      <Section className="bg-[#f6f1e7]">
        <SectionHead heading="Evidence status">
          The workbook includes an evidence index, but several supporting
          visuals are still listed as &ldquo;available on request&rdquo; rather
          than embedded in the file. This page distinguishes what is on file
          from what still needs to be attached.
        </SectionHead>
        <EvidenceStack
          items={[
            {
              label: 'ON FILE',
              title: 'CSM Ittehad Instagram profile',
              copy: (
                <>
                  The supplied case study lists{' '}
                  <strong>instagram.com/ittehadmotorscsm</strong> as the
                  official Instagram profile launched and managed in the
                  engagement.
                </>
              ),
              href: 'https://www.instagram.com/ittehadmotorscsm',
              linkLabel: 'View Instagram',
            },
            {
              label: 'TO ADD WHEN SHARED',
              title: 'Ads, billboard, event and automation evidence',
              copy: 'Meta Ads Manager screenshots, website captures, outdoor photography, event media, the lead sheet and automation screenshots can be added once the source assets are supplied and approved for publication.',
            },
          ]}
        />
      </Section>

      <IntegrityCard
        label="WHAT WE REMOVED"
        heading={
          <>
            No &ldquo;market-leading&rdquo;, &ldquo;most affordable&rdquo;,
            &ldquo;cost-effective&rdquo; or ROI claims without the evidence.
          </>
        }
      >
        The original workbook contained stronger positioning and efficiency
        language than the attached data could independently support. We retained
        the documented work, the client-reported ~400 leads, the 112 visits and
        the derived ~28% visit rate — and removed claims that would require
        comparative market data, spend, revenue or closed-sale records.
      </IntegrityCard>

      <ContactBand
        heading={
          <>
            Need marketing that reaches
            <br />
            the sales floor?
          </>
        }
        copy="We build the acquisition and follow-up system together so campaign activity can be traced to a real commercial stage."
        ctaHref="/appointment"
        ctaLabel="Discuss a project"
      />
    </PageShell>
  );
}
