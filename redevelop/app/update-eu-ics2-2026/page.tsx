import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-eu-ics2-2026');

const FACTS = [
  {
    label: 'TRANSPORT COVERAGE',
    value: 'ALL',
    note: 'air, maritime, road and rail',
  },
  {
    label: 'FULL MANDATE',
    value: '01 SEP',
    note: '2025; operating requirement throughout 2026',
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
          {'European Commission — Import Control System 2 (ICS2)'}
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
        'The European Commission states that ICS2 safety and security data requirements became fully mandatory across air, maritime, road and rail transport from 1 September 2025. In 2026, this is no longer a rollout topic; it is part of normal shipment readiness for goods entering the EU.'
      }
      meta={'CURRENT BRIEF · SOURCE CHECKED 17 SEP 2026 · EUROPEAN COMMISSION'}
      graphic={<PolicyGraphic facts={FACTS} />}
      footerNote={'Current compliance brief'}
      endHeading={'Need shipment and data handoffs mapped?'}
      endHref={'/operations-supply-chain'}
      endLabel={'Explore supply chain support'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
