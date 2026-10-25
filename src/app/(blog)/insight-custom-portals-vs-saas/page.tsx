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

export const metadata = pageMetadata('/insight-custom-portals-vs-saas');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The "SaaS ceiling" facing US service and logistics operators' },
  {
    t: 'p',
    text: 'When a US logistics provider, regional 3PL, luxury fleet operator, or B2B field service company scales between $5M and $50M in annual revenue, their operational backbone typically hits a structural barrier known as the "SaaS ceiling".',
  },
  {
    t: 'p',
    text: 'Early in a company’s lifecycle, off-the-shelf SaaS platforms (Airtable, Zapier, Hubspot, standard dispatch CRMs) offer quick setup and low upfront expense. But as transaction volume compounds, these tools fragment into disconnected silos: dispatchers toggle across five browser tabs, drivers miss real-time route updates, clients submit booking requests into static web forms, and accounting spends days reconciling QuickBooks invoices by hand.',
  },
  {
    t: 'quote',
    text: 'Off-the-shelf software forces your operations to bend around the software vendor’s rigid schema. Custom engineering builds the software around your exact competitive advantage.',
  },
  { t: 'h2', text: 'The hidden financial drain of per-seat licensing' },
  {
    t: 'p',
    text: 'The financial trap of commercial SaaS lies in per-seat pricing models. For a mid-market operation with 40 office dispatchers, 80 field contractors or drivers, and 200 corporate client accounts needing portal access, per-user subscription fees quickly escalate to $3,500 - $8,000 every single month ($42,000 to $96,000 annually) for software the business will never own.',
  },
  {
    t: 'p',
    text: 'Worse, SaaS vendors throttle API limits, charge exorbitant premiums for enterprise single sign-on (SSO), and withhold raw database access, leaving the business vulnerable to unexpected price hikes and sudden feature deprecations.',
  },
  { t: 'h2', text: 'Four capabilities only custom architecture can deliver' },
  {
    t: 'p',
    text: 'Modern web engineering (built on frameworks like Next.js, PostgreSQL, Node.js, and serverless edge infrastructure) delivers capabilities that commercial off-the-shelf tools cannot replicate:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Multi-Tenant Client & Partner Portals:{' '}
        <span className="font-normal text-[#514d46]">
          Give enterprise B2B customers branded, self-serve visibility into live shipment status, historical manifest archives, invoice downloads, and automated proof-of-delivery retrieval without exposing internal company workflows.
        </span>
      </strong>,
      <strong key="2">
        Sub-Second Real-Time Telemetry & Dispatch:{' '}
        <span className="font-normal text-[#514d46]">
          Direct WebSocket and GPS telemetry integration between driver mobile interfaces and central dispatch consoles, eliminating the 5-to-15 minute sync delays endemic to third-party integration connectors.
        </span>
      </strong>,
      <strong key="3">
        Granular Role-Based Access Control (RBAC):{' '}
        <span className="font-normal text-[#514d46]">
          Zero-trust security allowing dispatchers, field supervisors, finance managers, and end clients to access strictly segregated data tiers without paying extra per-seat licensing fees.
        </span>
      </strong>,
      <strong key="4">
        Direct Enterprise ERP & Carrier Integrations:{' '}
        <span className="font-normal text-[#514d46]">
          Native connections into QuickBooks, Stripe, EDI freight ledgers, and telematics systems without fragile third-party automation middleware that breaks during high-volume spikes.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Case in point: Scaling luxury dispatch & fleet logistics' },
  {
    t: 'p',
    text: 'When Mett Global engineered the custom booking and dispatch architecture for Luxury O’Hare Limo in Chicago, the firm replaced fragmented telephone and email coordination with an automated, high-velocity reservation engine. Corporate accounts gained real-time chauffeur tracking, corporate billing profiles, and flight status auto-reconciliation directly at O’Hare and Midway airports.',
  },
  {
    t: 'p',
    text: 'The outcome was immediate: operational overhead decreased by over 30%, dispatch errors were virtually eliminated, and corporate booking velocity surged because business travelers could reserve, modify, and expense trips within seconds.',
  },
  { t: 'h2', text: 'The economics of asset ownership: Build once vs. rent forever' },
  {
    t: 'p',
    text: 'A purpose-built custom application requires an upfront development investment, but it converts ongoing operational expense into a permanent balance-sheet asset. Within 12 to 18 months, the elimination of SaaS licensing fees, manual data re-entry labor, and lost customer opportunities completely offsets the engineering cost.',
  },
  {
    t: 'source',
    label: 'ENGINEERING ARCHITECTURE BRIEF',
    body: (
      <>
        <SourceLink href="/web-software-development">
          Mett Global: Custom Web & Software Engineering Capabilities
        </SourceLink>
        <SourceNote>
          We engineer enterprise-grade Next.js, TypeScript, and cloud-native applications with full source code ownership, zero per-seat licensing, and complete database sovereignty.
        </SourceNote>
      </>
    ),
  },
];

export default function CustomPortalsVsSaasGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / SOFTWARE ARCHITECTURE & PORTALS'}
      title={
        'Custom Portals vs. Off-the-Shelf SaaS: How US Mid-Market Logistics & Service Firms Scale'
      }
      dek={
        'Why growing US 3PLs, freight brokers, and field service operators hit the SaaS ceiling, and how custom portal engineering cuts operating costs, eliminates per-seat licensing, and secures enterprise clients.'
      }
      meta={'METT GLOBAL FIELD GUIDE · SOFTWARE ARCHITECTURE · 5 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'SAAS FRAGMENTATION',
            'DATA SILOS',
            'CUSTOM PORTAL',
            'ZERO SEAT FEES',
            'ENTERPRISE SCALE',
          ]}
        />
      }
      endHeading={'Ready to replace fragmented SaaS with custom software you own?'}
      endHref={'/appointment'}
      endLabel={'Schedule a Technical Architecture Consultation'}
    >
      <JsonLd data={articleJsonLd('/insight-custom-portals-vs-saas')} />
      <ArchitectureComparisonWidget />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
