import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { ProjectLinks } from '@/components/page/ProjectLinks';
import { JsonLd } from '@/components/JsonLd';
import {
  CaseHero,
  ChallengeGrid,
  EvidenceStack,
  ProofGrid,
  Workflow,
} from '@/components/page/case';
import { breadcrumbJsonLd, pageMetadata, caseStudyJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/portfolio/hyundai-islamabad');

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
    copy: 'Coordinate local outdoor and showroom activations designed to reinforce digital touchpoints and maximize brand recall across the Islamabad twin cities market.',
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
    copy: 'Integrated Meta, Instagram, and YouTube brand channels to establish a cohesive digital presence.',
  },
  {
    label: 'DIGITAL JOURNEY',
    figure: '1',
    title: 'Unified funnel',
    copy: 'Content and campaign traffic is designed to converge into a consistent website-to-enquiry path instead of disconnected channel activity.',
  },
  {
    label: 'SYSTEM ARCHITECTURE',
    figure: '100%',
    title: 'End-to-End Tracking',
    copy: 'Enquiries, brochure requests, and service bookings flow directly into structured CRM pipelines with automated notifications for instant sales follow-up.',
  },
];

export default function HyundaiCaseStudyPage() {
  return (
    <PageShell caseStudy>
      <JsonLd data={breadcrumbJsonLd('/portfolio/hyundai-islamabad')} />
      <JsonLd data={caseStudyJsonLd('/portfolio/hyundai-islamabad')} />

      <CaseHero
        visualSlug="hyundai-islamabad"
        tone="light"
        crumb="The Connected Showroom"
        kicker="AUTOMOTIVE · ISLAMABAD · GROWTH INFRASTRUCTURE"
        titleTop="The Connected Showroom"
        titleAccent=""
        subtitle="A local growth system linking content, leads and showroom visits for Hyundai Islamabad"
        lede="Mett Global engineered a connected digital-to-showroom growth system for Hyundai Islamabad, integrating interactive social campaigns, responsive lead capture, and streamlined dealership routing to turn online interest into qualified showroom consultations."
        panelLabel="OPERATIONAL FOCUS"
        panelValue="Growth Architecture"
        panelCopy="Focused on establishing unified dealership acquisition pipelines, structured lead capture, and immediate sales team routing."
        kpis={[
          { value: '3', label: 'social channels in managed scope' },
          { value: '1', label: 'connected website-to-showroom journey' },
          { value: '100%', label: 'inbound lead routing coverage' },
          { value: '24/7', label: 'automated lead capture active' },
        ]}
      />

      <ProjectLinks
        links={[
          { label: 'Visit website', href: 'https://hyundai-islamabad.com' },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/hyundaiislamabad',
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/share/1EuBMMcZvu/',
          },
        ]}
      />

      <Section>
        <div className="mb-[35px]">
          <SectionHead heading="The operating challenge">
            Hyundai Islamabad already has established brand and product equity.
            Mett Global&rsquo;s role is not to manufacture a &ldquo;from
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
          facts support the journey design, they do not, by themselves, prove
          Mett Global performance.
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
                  Strategic digital campaigns, interactive social content, and
                  lead workflows supporting the launch of the Elantra Hybrid,
                  Pakistan&rsquo;s first locally assembled hybrid sedan.
                </>
              ),
              href: 'https://hyundai-islamabad.com/hyundai-launches-pakistans-first-hybrid-sedan-the-elantra-hybrid/',
              linkLabel: 'View official source',
            },
          ]}
        />
      </Section>

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
