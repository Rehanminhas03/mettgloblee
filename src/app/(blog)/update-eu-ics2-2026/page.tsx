import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-eu-ics2-2026');

const FACTS = [
  {
    label: 'TRANSPORT COVERAGE',
    value: 'ALL',
    note: 'air, maritime, road and rail',
  },
  {
    label: 'TRANSITION COMPLETE',
    value: '01 JUN',
    note: '2026; remaining NCTS Phase 6 derogations ended',
  },
  {
    label: 'CORE DATA',
    value: 'ENS',
    note: 'accurate and complete Entry Summary Declaration data',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Data quality is now shipment readiness' },
  {
    t: 'p',
    text: 'The Commission emphasizes accurate and complete ENS data, including master and lowest house levels where applicable. Incomplete descriptions, party data or shipment details can create avoidable delays and rework.',
  },
  { t: 'h2', text: 'Clarify who files what' },
  {
    t: 'p',
    text: 'Importer, carrier, freight forwarder and other parties may each hold parts of the required data. Map filing responsibility by transport mode and lane so the shipment does not reach cutoff with missing information.',
  },
  { t: 'h2', text: 'Standardize product descriptions' },
  {
    t: 'p',
    text: 'Vague descriptions create risk. Use specific commercial descriptions and maintain clean master data for SKU descriptions, parties and shipment references so documentation is produced consistently.',
  },
  { t: 'h2', text: 'Build an exception process' },
  {
    t: 'p',
    text: 'Define who responds when a filing is rejected or more information is requested. The faster the owner can access shipment documents and product data, the less operational disruption the exception causes.',
  },
  {
    t: 'quote',
    text: 'Customs compliance becomes an operations problem when shipment data is assembled too late.',
  },
  {
    t: 'source',
    label: 'OFFICIAL SOURCE',
    body: (
      <>
        <SourceLink
          href={
            'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en'
          }
        >
          {'European Commission, Import Control System 2 (ICS2)'}
        </SourceLink>
        <SourceNote>
          {
            'Requirements depend on transport mode, role and shipment. Verify current Commission guidance and your customs/forwarding obligations.'
          }
        </SourceNote>
      </>
    ),
  },
];

export default function EuIcs22026Brief() {
  return (
    <ArticleShell
      back={'CURRENT BRIEF / SUPPLY CHAIN'}
      title={
        'ICS2 in 2026: why complete ENS data is now an operating requirement'
      }
      dek={
        'ICS2 covers goods entering the EU across air, maritime, road and rail transport. The September 2025 rollout included temporary road, rail and transit-system derogations. The Commission states that, from 1 June 2026, entering consignments need a valid ENS, filed directly in ICS2 or through a combined NCTS Phase 6 declaration in opt-in countries.'
      }
      meta={'CURRENT BRIEF · SOURCE CHECKED 20 OCT 2026 · EUROPEAN COMMISSION'}
      graphic={<PolicyGraphic facts={FACTS} />}
      endHeading={'Need shipment and data handoffs mapped?'}
      endHref={'/ecommerce-supply-chain'}
      endLabel={'Explore E-Commerce & Supply Chain'}
    >
      <JsonLd data={articleJsonLd('/update-eu-ics2-2026')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
