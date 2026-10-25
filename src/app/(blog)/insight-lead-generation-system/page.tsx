import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-lead-generation-system');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The headcount fallacy: Why hiring more SDRs fails to fix pipeline starvation' },
  {
    t: 'p',
    text: 'When B2B pipeline stalls, company leadership frequently attempts to solve the deficit by scaling sales development representatives (SDRs). The logic appears straightforward: if two SDRs generate 10 meetings, four SDRs will generate 20.',
  },
  {
    t: 'p',
    text: 'In practice, adding headcount to an unstructured prospecting workflow merely multiplies operational burn. Sales reps spend 70% of their workday building untargeted lead lists, copying generic email templates, and logging inconsistent activities into chaotic CRM databases.',
  },
  {
    t: 'quote',
    text: 'A high-performing prospecting engine is an engineered operating system, not a contest to see who can send the highest volume of untargeted cold messages.',
  },
  { t: 'h2', text: 'The 3-tier signal hierarchy: Trigger-based prospecting' },
  {
    t: 'p',
    text: 'Generic cold outreach yields response rates below 1%. High-velocity B2B outbound prioritizes target accounts exhibiting observable buying triggers:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Tier 1: Intent & Technographic Signals:{' '}
        <span className="font-normal text-[#514d46]">
          Accounts browsing your website or comparing competitors on G2/Capterra, or organizations actively migrating off legacy software stacks (e.g. dropping on-premise ERPs or struggling with Airtable limits).
        </span>
      </strong>,
      <strong key="2">
        Tier 2: Leadership & Organizational Changes:{' '}
        <span className="font-normal text-[#514d46]">
          Newly hired VPs of Operations, Chief Technology Officers, or Supply Chain Directors have a direct mandate to eliminate inefficiencies within their first 90 days.
        </span>
      </strong>,
      <strong key="3">
        Tier 3: Operational Expansion & Regulatory Deadlines:{' '}
        <span className="font-normal text-[#514d46]">
          Companies opening regional warehouses, adding delivery fleets, or facing mandatory compliance updates (such as EU ICS2 customs filing or Amazon fee shifts).
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The Multi-Thread Rule: Engage the buying committee' },
  {
    t: 'p',
    text: 'Enterprise purchasing decisions involve an average of 4.2 decision-makers. Pitching a single point of contact leaves deals vulnerable to champion turnover or internal vetoes. A resilient prospecting sequence touches three distinct roles simultaneously:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        The User Champion (Operations Lead / Dispatcher):{' '}
        <span className="font-normal text-[#514d46]">
          Focus on daily interface frustration, manual data double-entry, and bottleneck elimination.
        </span>
      </strong>,
      <strong key="2">
        The Economic Buyer (CFO / Managing Director):{' '}
        <span className="font-normal text-[#514d46]">
          Focus on bottom-line margin expansion, capital recovery, and 12-month ROI timelines.
        </span>
      </strong>,
      <strong key="3">
        The Technical Gatekeeper (CTO / Head of IT):{' '}
        <span className="font-normal text-[#514d46]">
          Focus on zero-trust data security, API stability, and native ERP synchronization.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'CRM hygiene and follow-up SLAs' },
  {
    t: 'p',
    text: 'Pipeline leakage routinely occurs at handoff points. A functional prospecting system enforces strict operating level agreements (SLAs): all inbound inquiries contacted within 5 minutes, outbound sequences capped at 30 personalized touches per inbox per day, and zero lead left in the CRM without an assigned next action date.',
  },
  {
    t: 'source',
    label: 'INFORMATIONAL OPERATOR RESOURCE',
    body: (
      <>
        <SourceLink href="/digital-marketing-growth">
          Mett Global: Digital Marketing & Growth Practice
        </SourceLink>
        <SourceNote>
          For inbound acquisition funnels, conversion rate optimization, and automated CRM routing, see Mett Global’s Digital Marketing & Growth practice.
        </SourceNote>
      </>
    ),
  },
];

export default function LeadGenerationSystemGuide() {
  return (
    <ArticleShell
      back={'INFORMATIONAL GUIDE / SALES SYSTEMS & PIPELINE'}
      title={'Build a B2B Prospecting System Before Scaling Sales Headcount: The 2026 Operator Playbook'}
      dek={
        'More outreach volume rarely fixes weak targeting, unclear qualification, and chaotic follow-up. How to build an intent-driven prospecting engine before hiring sales reps.'
      }
      meta={'METT GLOBAL INFORMATIONAL GUIDE · PIPELINE ARCHITECTURE · 5 MIN READ'}
      verifiedBadge="2026 Sales Architecture"
      graphic={
        <ChipGraphic
          steps={['ICP DEFINITION', 'INTENT SIGNALS', 'MULTI-THREADING', 'DIAGNOSTIC AUDIT', 'CRM HYGIENE']}
        />
      }
      endHeading={'Looking to optimize your customer acquisition funnel?'}
      endHref={'/appointment'}
      endLabel={'Book a Growth Diagnostic Meeting'}
    >
      <JsonLd data={articleJsonLd('/insight-lead-generation-system')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
