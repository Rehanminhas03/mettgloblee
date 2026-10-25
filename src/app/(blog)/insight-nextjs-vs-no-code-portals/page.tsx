import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { ArchitectureComparisonWidget } from '@/components/article/interactive/ArchitectureComparisonWidget';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-nextjs-vs-no-code-portals');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The "no-code honeymoon" and why it ends at 10,000 transactions' },
  {
    t: 'p',
    text: 'When a US logistics brokerage, regional dispatch service, or B2B field operator launches an internal portal, no-code stacks (Airtable + Softr/Bubble connected via Zapier or Make) look irresistible. Within a single weekend, an operations manager can configure basic forms, display records on a dashboard, and trigger automated Slack notifications.',
  },
  {
    t: 'p',
    text: 'However, once monthly transactions exceed 10,000 records and corporate enterprise clients begin demanding live tracking, granular billing manifests, and strict security compliance, the no-code prototype rapidly transforms into an operational liability.',
  },
  {
    t: 'quote',
    text: 'No-code tools are exceptional for validating an internal idea, but attempting to scale enterprise customer workflows on spreadsheets held together by webhooks is a recipe for catastrophic data leaks and service outages.',
  },
  { t: 'h2', text: 'The four structural breaking points of no-code portals' },
  {
    t: 'p',
    text: 'Mid-market businesses that attempt to scale on Airtable and visual dashboard builders encounter four unavoidable architectural walls:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Aggressive API Rate Throttling (5 requests/second):{' '}
        <span className="font-normal text-[#514d46]">
          Airtable strictly caps API requests at five calls per second per base. When 50 active drivers submit GPS pings or multiple corporate clients query invoice histories simultaneously, the portal throws 429 "Too Many Requests" errors, freezing the interface during peak business hours.
        </span>
      </strong>,
      <strong key="2">
        Lack of True Row-Level Security (RLS) & Multi-Tenancy:{' '}
        <span className="font-normal text-[#514d46]">
          No-code frontend tools filter data client-side in the user’s browser. An enterprise client with basic browser developer tools can inspect network payloads and expose competitors’ confidential pricing, shipment volumes, and driver contacts, creating severe legal liability.
        </span>
      </strong>,
      <strong key="3">
        The Compounding "Middleware Tax" of Zapier & Make:{' '}
        <span className="font-normal text-[#514d46]">
          Connecting fragmented no-code databases requires thousands of automated webhook operations every week. As operations scale, businesses spend \$1,500 to \$4,000+ per month solely on Zapier tasks and API connector tiers to keep databases synchronized.
        </span>
      </strong>,
      <strong key="4">
        100k Record Hard Caps & Sluggish Query Latency:{' '}
        <span className="font-normal text-[#514d46]">
          Airtable bases encounter hard performance degradation once historical records accumulate. Filtered lookups that take milliseconds on a PostgreSQL index take 4 to 8 seconds to render inside no-code interfaces.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Why Next.js + PostgreSQL is the modern enterprise standard' },
  {
    t: 'p',
    text: 'Engineering a custom portal with Next.js, TypeScript, and a relational PostgreSQL database provides capabilities that no visual builder can match:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Zero-Trust SQL Row-Level Security:{' '}
        <span className="font-normal text-[#514d46]">
          Data segregation is enforced directly at the database engine level. Client A can mathematically never see records belonging to Client B, satisfying SOC-2 and HIPAA enterprise vendor security requirements.
        </span>
      </strong>,
      <strong key="2">
        Sub-50ms Server-Rendered Edge Performance:{' '}
        <span className="font-normal text-[#514d46]">
          Next.js Server Components stream cached UI chunks from edge nodes located close to the user, rendering complex dispatch schedules and telemetry dashboards instantaneously.
        </span>
      </strong>,
      <strong key="3">
        Zero Per-Seat Fees & Permanent Code Ownership:{' '}
        <span className="font-normal text-[#514d46]">
          Your organization owns 100% of the repository, source code, and database schema. You can add 5,000 customer portal accounts without paying an additional penny in per-user monthly SaaS fees.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Case in point: High-velocity dispatch for Luxury O’Hare Limo' },
  {
    t: 'p',
    text: 'When Mett Global engineered the custom reservation and dispatch system for Luxury O’Hare Limo in Chicago, the firm replaced fragmented no-code spreadsheets with a unified Next.js + PostgreSQL platform. The system integrated real-time chauffeur GPS telemetry, automated flight delay tracking at O’Hare and Midway airports, and instant corporate billing reconciliation.',
  },
  {
    t: 'p',
    text: 'The transition eliminated thousands in recurring SaaS overhead, cut dispatch response times to under three seconds, and delivered a seamless digital experience that secured major corporate accounts across the Chicagoland metropolitan area.',
  },
  {
    t: 'source',
    label: 'SOFTWARE ENGINEERING BRIEF',
    body: (
      <>
        <SourceLink href="/web-software-development">
          Mett Global: Custom Web & Software Engineering
        </SourceLink>
        <SourceNote>
          We architect production-grade Next.js, Node.js, and PostgreSQL web platforms engineered for zero per-seat licensing, maximum security, and long-term enterprise scalability.
        </SourceNote>
      </>
    ),
  },
];

export default function NextJsVsNoCodePortalsGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / SOFTWARE ARCHITECTURE & CUSTOM PORTALS'}
      title={
        'Why Next.js + PostgreSQL Beats Airtable + Softr for B2B Client Portals'
      }
      dek={
        'Why scaling US logistics and service companies hit the no-code wall, and how custom Next.js engineering delivers sub-second speed, zero-trust security, and zero recurring seat licensing.'
      }
      meta={'METT GLOBAL FIELD GUIDE · SOFTWARE ARCHITECTURE · 5 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'NO-CODE PROTOTYPE',
            'API RATE LIMITS',
            'SECURITY VULNERABILITY',
            'POSTGRESQL MIGRATION',
            'ENTERPRISE SCALE',
          ]}
        />
      }
      endHeading={'Ready to replace fragile no-code tools with software you own?'}
      endHref={'/appointment'}
      endLabel={'Book a Technical Architecture Consultation'}
    >
      <JsonLd data={articleJsonLd('/insight-nextjs-vs-no-code-portals')} />
      <ArchitectureComparisonWidget />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
