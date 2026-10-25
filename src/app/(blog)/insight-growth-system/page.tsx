import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { AcquisitionFunnelSimulator } from '@/components/article/interactive/AcquisitionFunnelSimulator';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-growth-system');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The diagnostic trap: Why media spend alone cannot fix poor conversion' },
  {
    t: 'p',
    text: 'When customer acquisition costs (CAC) escalate, marketing leadership instinctively demands higher ad budgets, new creative variations, or alternative ad networks. However, performance data across hundreds of B2B and e-commerce campaigns confirms that media buying accounts for less than 30% of acquisition failure.',
  },
  {
    t: 'p',
    text: 'Customer acquisition is a deterministic chain: audience targeting feeds creative, creative sets the expectation for the offer, the landing page validates trust and removes friction, and follow-up converts hesitation into cash. If the offer is undifferentiated or the landing page is slow and vague, doubling ad spend merely accelerates capital destruction.',
  },
  {
    t: 'quote',
    text: 'Do not ask the ad algorithm to compensate indefinitely for an offer that does not compel action or a landing page that confuses the buyer.',
  },
  { t: 'h2', text: 'The 5 failure points across the acquisition chain' },
  {
    t: 'p',
    text: 'A structured acquisition audit isolates leaks by diagnosing performance metrics in strict sequential order:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        High Impressions but Low Click-Through Rate (CTR &lt; 1.2%):{' '}
        <span className="font-normal text-[#514d46]">
          Indicates audience-message mismatch. The creative hook fails to isolate the target decision-maker’s immediate operational pain within the first three seconds.
        </span>
      </strong>,
      <strong key="2">
        High CTR but Low Landing Page Conversion (CVR &lt; 2.5%):{' '}
        <span className="font-normal text-[#514d46]">
          Points to message discontinuity. The visitor arrives expecting a specific diagnostic solution promised in the ad, but encounters a generic corporate homepage or vague form.
        </span>
      </strong>,
      <strong key="3">
        High Inquiries but Low Showroom / Demo Attendance (&lt; 40%):{' '}
        <span className="font-normal text-[#514d46]">
          Caused by weak lead qualification. Forms with zero qualifying friction attract unqualified tire-kickers that overwhelm sales reps.
        </span>
      </strong>,
      <strong key="4">
        Slow Response Time (&gt; 15 Minutes):{' '}
        <span className="font-normal text-[#514d46]">
          Lead conversion decay curves show that response velocity dropping past 10 minutes decreases closing probability by over 400%.
        </span>
      </strong>,
      <strong key="5">
        Absence of Automated Multi-Channel Nurturing:{' '}
        <span className="font-normal text-[#514d46]">
          Over 60% of qualified enterprise buyers require 4 to 7 touchpoints across WhatsApp, SMS, email, and retargeting before committing to an initial consultation.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Case in point: Automotive acquisition for Jetour & CSM Ittehad' },
  {
    t: 'p',
    text: 'When Mett Global launched the digital acquisition engine for Jetour Ittehad and Capital Smart Motors, media buying was tightly integrated with automated CRM lead routing and instant sales notifications.',
  },
  {
    t: 'p',
    text: 'Rather than running broad brand-awareness ads, the campaigns targeted high-intent buyers with clear vehicle test-drive incentives, instant WhatsApp qualification, and 5-minute showroom routing. The outcome: over 1,000 verified inquiries generated and 50+ confirmed vehicle bookings within the first launch cycle.',
  },
  { t: 'h2', text: 'The Blended CAC Formula every founder should track' },
  {
    t: 'p',
    text: 'Platform ad dashboards (Meta Ads Manager, Google Ads) routinely report inflated ROAS by claiming credit for existing brand search and blended retargeting. True acquisition health must be measured using pure Blended Customer Acquisition Cost:',
  },
  {
    t: 'quote',
    text: 'Blended CAC = (Total Ad Spend + Creative Production + Tooling Subscriptions + Sales Labor) ÷ Total Net New Closed Customers.',
  },
  {
    t: 'source',
    label: 'GROWTH STRATEGY BRIEF',
    body: (
      <>
        <SourceLink href="/digital-marketing-growth">
          Mett Global: Digital Marketing & Performance Growth Practice
        </SourceLink>
        <SourceNote>
          We engineer full-funnel acquisition systems connecting audience research, high-converting landing pages, instant CRM automation, and measurable revenue attribution.
        </SourceNote>
      </>
    ),
  },
];

export default function GrowthSystemGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / PERFORMANCE MARKETING & CRO'}
      title={'Why Better Ads Cannot Rescue a Weak Offer and Landing Page: The 2026 Acquisition Audit'}
      dek={
        'Acquisition is a chain. Media spend earns attention, but the offer structure, landing page message match, and sales follow-up velocity determine whether that attention becomes profitable revenue.'
      }
      meta={'METT GLOBAL FIELD GUIDE · PAID GROWTH · 5 MIN READ'}
      verifiedBadge="2026 Growth Framework"
      graphic={
        <ChipGraphic
          steps={['AUDIENCE FIT', 'CREATIVE HOOK', 'OFFER PROMISE', 'PAGE CONTINUITY', 'FOLLOW-UP SLA']}
        />
      }
      endHeading={'Need an objective audit of your acquisition funnel?'}
      endHref={'/appointment'}
      endLabel={'Book a Free Growth & Funnel Audit'}
    >
      <JsonLd data={articleJsonLd('/insight-growth-system')} />
      <AcquisitionFunnelSimulator />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
