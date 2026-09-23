import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import {
  CaseHero,
  ChallengeGrid,
  EvidenceStack,
  IntegrityCard,
  ProofGrid,
  Workflow,
} from '@/components/page/case';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { CASE_FOOTER, CASE_NAV, GLOBAL_FOOTER_NOTE } from '@/lib/navigation';

export const metadata = pageMetadata('/case-study-hyundai-islamabad');

const CHALLENGES = [
  {
    label: '01 / CONTENT',
    title: 'Local market relevance',
    copy: 'Coordinate Facebook, Instagram and YouTube content around launches, product stories, offers and showroom visibility.',
  },
  {
    label: '02 / JOURNEY',
    title: 'Move beyond passive traffic',
    copy: 'Direct campaigns toward model information, brochures, enquiries, test-drive intent and service actions rather than treating website visits as the finish line.',
  },
  {
    label: '03 / LEADS',
    title: 'Design the handoff',
    copy: 'Structure enquiry capture, CRM/Sheet entry, notification and follow-up so campaign response can later be measured through sales stages.',
  },
  {
    label: '04 / PHYSICAL',
    title: 'Reinforce the local presence',
    copy: 'Use outdoor and on-ground activity to support digital messaging, with evidence added to the case study as placements and activations are documented.',
  },
];

const WORKFLOW = [
  { num: '01', label: 'Social / campaign' },
  { num: '02', label: 'Model / website page' },
  { num: '03', label: 'Enquiry / brochure / action' },
  { num: '04', label: 'Lead handling' },
  { num: '05', label: 'Showroom opportunity' },
];

const PROOF = [
  {
    label: 'CHANNELS',
    figure: '3',
    title: 'Social channels in scope',
    copy: 'Facebook, Instagram and YouTube are the three channels identified in the supplied engagement material.',
  },
  {
    label: 'DIGITAL JOURNEY',
    figure: '1',
    title: 'Unified funnel',
    copy: 'Content and campaign traffic is designed to converge into a consistent website-to-enquiry path instead of disconnected channel activity.',
  },
  {
    label: 'MEASUREMENT',
    figure: 'OPEN',
    title: 'Performance data pending',
    copy: 'Lead volume, CPL, conversion, revenue and showroom-visit metrics remain unpublished until a verified campaign export or lead sheet is supplied.',
  },
];

export default function HyundaiCaseStudyPage() {
  return (
    <PageShell
      navLinks={CASE_NAV}
      footerNote={GLOBAL_FOOTER_NOTE}
      footerLinks={CASE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/case-study-hyundai-islamabad')} />

      <CaseHero
        tone="light"
        crumb="Hyundai Islamabad"
        kicker="AUTOMOTIVE · ISLAMABAD · GROWTH INFRASTRUCTURE"
        titleTop="Connecting product strength"
        titleAccent="to a measurable local journey."
        lede="This engagement is presented differently from Jetour because the source material does not yet include verified campaign performance data. The useful story is the operating system being built — and the measurement gates required before performance claims are published."
        panelLabel="PUBLICATION STANDARD"
        panelValue="Evidence first."
        panelCopy="No CPL, ROAS, revenue, showroom-growth or sales figures are published here until verified data is available."
        kpis={[
          { value: '3', label: 'social channels in managed scope' },
          { value: '1', label: 'connected website-to-showroom journey' },
          { value: '0', label: 'invented performance metrics' },
          { value: 'LIVE', label: 'measurement framework' },
        ]}
      />

      <Section>
        <div className="mb-[35px]">
          <SectionHead heading="The operating challenge">
            Hyundai Islamabad already has established brand and product equity.
            MettGlobal&rsquo;s role is not to manufacture a &ldquo;from
            zero&rdquo; story; it is to connect local content, digital pathways
            and lead handling around showroom outcomes.
          </SectionHead>
        </div>
        <ChallengeGrid items={CHALLENGES} />
      </Section>

      <Section className="bg-[#0c0c0b] text-white">
        <SectionHead heading="The connected customer journey" dark>
          The official Hyundai Islamabad site already gives customers model
          information, brochure access, service booking and other conversion
          pathways. The marketing system should route qualified attention into
          those actions and then measure the handoff.
        </SectionHead>
        <Workflow steps={WORKFLOW} dark />
        <ProofGrid items={PROOF} dark />
      </Section>

      <Section className="bg-[#f6f1e7]">
        <SectionHead heading="What is independently visible">
          Public Hyundai Islamabad pages confirm that the digital destination
          includes the Elantra Hybrid and wider vehicle range, brochure access,
          service appointments and supporting after-sales information. Those
          facts support the journey design — they do not, by themselves, prove
          MettGlobal performance.
        </SectionHead>
        <EvidenceStack
          items={[
            {
              label: 'WEBSITE DESTINATION',
              title: 'Model discovery + brochure + service pathways',
              copy: 'The current Hyundai Islamabad website publicly presents vehicle pages and customer actions including brochure downloads and service appointment booking.',
              href: 'https://hyundai-islamabad.com/',
              linkLabel: 'Visit Hyundai Islamabad',
            },
            {
              label: 'PRODUCT CONTEXT',
              title: 'Elantra Hybrid positioning',
              copy: (
                <>
                  Hyundai Islamabad&rsquo;s own published material describes the
                  Elantra Hybrid as Pakistan&rsquo;s first locally assembled
                  hybrid sedan. This is treated as client/product context, not
                  as a MettGlobal achievement.
                </>
              ),
              href: 'https://hyundai-islamabad.com/hyundai-launches-pakistans-first-hybrid-sedan-the-elantra-hybrid/',
              linkLabel: 'View official source',
            },
          ]}
        />
      </Section>

      <IntegrityCard
        label="MEASUREMENT GATE"
        heading="What we will add when the evidence arrives."
      >
        Verified ad spend, lead volume, cost per lead, lead-to-visit conversion,
        booked vehicles, revenue attribution, showroom visits and channel-level
        performance. Until then, the page remains a growth-infrastructure case
        study rather than a results case study.
      </IntegrityCard>

      <ContactBand
        heading={
          <>
            Strong brands still need
            <br />
            connected execution.
          </>
        }
        copy="We help turn channel activity into a measurable customer journey and operating rhythm."
        ctaHref="/appointment"
        ctaLabel="Discuss a project"
      />
    </PageShell>
  );
}
