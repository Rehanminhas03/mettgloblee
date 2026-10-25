import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { PlacementFeeSimulator } from '@/components/article/interactive/PlacementFeeSimulator';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-amazon-inbound-placement-fees');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The true cost of Amazon’s Inbound Placement Service fees' },
  {
    t: 'p',
    text: 'For US Amazon sellers generating between $2M and $20M in annual run-rate, the introduction and refinement of Amazon’s Inbound Placement Service fees fundamentally restructured unit economics. Sellers are presented with a stark operational trade-off: pay Amazon a fee ranging from $0.12 to $0.34+ per unit for single-destination shipments, or split shipments across four or more regional fulfillment centers (FCs) at their own freight expense.',
  },
  {
    t: 'p',
    text: 'While supply chain teams obsess over comparing LTL freight quotes against placement fee surcharges, they frequently overlook the compounding secondary cost: shipment dispersion dramatically multiplies fulfillment center receiving errors, carton-level shortages, and uncredited inventory losses.',
  },
  {
    t: 'quote',
    text: 'Every additional fulfillment center split introduced into your inbound logistics creates a fresh receiving failure point where Amazon dock scanners routinely miscount or write off unverified cartons.',
  },
  { t: 'h2', text: 'Why multi-destination splits increase inventory shrinkage' },
  {
    t: 'p',
    text: 'When a brand opts for Amazon’s "Partial or No Placement Fee" option by dividing a 40-foot container or domestic production run into 4–5 shipments, operational complexity compounds across three vectors:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        3PL Labor & Palletization Overhead:{' '}
        <span className="font-normal text-[#514d46]">
          Instead of wrapping standard 24-pallet truckloads to a single cross-dock, warehouse teams must build partial pallets, increasing 3PL pick-and-pack prep fees by $200–$600 per shipment.
        </span>
      </strong>,
      <strong key="2">
        Carrier Receiving Discrepancies:{' '}
        <span className="font-normal text-[#514d46]">
          Multiple regional FCs (e.g., ABE8 in Pennsylvania, GYR3 in Arizona, and MEM1 in Tennessee) unpack shipments with variable staffing quality. Inbound dock workers frequently mark entire cartons as "Missing" during initial check-in.
        </span>
      </strong>,
      <strong key="3">
        Phantom Re-direction & Cross-Dock Loss:{' '}
        <span className="font-normal text-[#514d46]">
          When inventory arrives at inbound cross-dock (IXD) facilities, internal transshipment trailers frequently misroute pallets without updating Seller Central receiving records.
        </span>
      </strong>,
    ],
  },
  {
    t: 'quote',
    text: 'True Inbound Cost = Placement Fee + Origin Freight + 3PL Handling Cost + Expected Receiving Discrepancy Rate (~1.8% of consignment value).',
  },
  {
    t: 'p',
    text: 'If splitting a 10,000-unit production run across four FCs saves $2,400 in placement fees but incurs $1,800 in additional 3PL prep charges and results in $3,200 of unaccounted carton shortages, the brand loses $2,600 on the transaction despite appearing to "save" on Amazon fees.',
  },
  { t: 'h2', text: 'The compressed dispute clock on FBA receiving discrepancy claims' },
  {
    t: 'p',
    text: 'Under Amazon’s updated FBA Inventory Reimbursement Policy, historical 18-month dispute timeframes no longer apply. Sellers face compressed, category-specific reconciliation windows. Inbound receiving discrepancies must be disputed within 60 to 90 days after delivery (once the shipment transitions to "Closed" status in Seller Central).',
  },
  {
    t: 'p',
    text: 'Once this operational window expires, Amazon’s financial ledger permanently archives the shipment. Unclaimed discrepancies cannot be appealed or audited, permanently eroding operating EBITDA. In contrast to automated bots that flood Seller Support with generic requests, recovering capital requires a forensic, human-assembled evidence dossier.',
  },
  { t: 'h2', text: 'The 4-point evidence dossier required for dispute approval' },
  {
    t: 'p',
    text: 'Automated software bots and generic ticketing scripts are routinely denied by Seller Support because Amazon now mandates rigorous human-verified documentation before releasing cash reimbursements:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Manufacturer Commercial Purchase Invoice:{' '}
        <span className="font-normal text-[#514d46]">
          Must show full buyer company name matching Seller Central legal entity, supplier contact details, date prior to shipment creation, itemized unit counts, and cleared payment verification (wire confirmation or bank proof).
        </span>
      </strong>,
      <strong key="2">
        Carrier-Stamped Bill of Lading (BOL) or Tracking POD:{' '}
        <span className="font-normal text-[#514d46]">
          For freight, the official BOL must bear the physical Amazon fulfillment center receiving stamp, delivered pallet/case count, and signature. For parcel shipments, official signed delivery confirmation.
        </span>
      </strong>,
      <strong key="3">
        Itemized Carton-Level Packing List:{' '}
        <span className="font-normal text-[#514d46]">
          Detailed breakdown mapping individual box IDs (FBA box labels) to exact units, weights, and SKU assignments.
        </span>
      </strong>,
      <strong key="4">
        Ledger Inventory Event Cross-Reference:{' '}
        <span className="font-normal text-[#514d46]">
          Proof extracted from the Inventory Event Detail report confirming that missing units were never credited through alternate FC adjustment transaction IDs.
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'OFFICIAL POLICY CITATION',
    body: (
      <>
        <SourceLink href="https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW">
          Amazon Seller Central: Inbound Placement Service Fee Schedule
        </SourceLink>
        <SourceNote>
          Inbound discrepancy reconciliation must be submitted within Amazon’s category-specific window (60–90 days post-delivery). Mett Global operates under 100% manual evidence dossier preparation in strict compliance with Amazon Terms of Service.
        </SourceNote>
      </>
    ),
  },
];

export default function AmazonInboundPlacementFeesGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / AMAZON CLAIMS & SUPPLY CHAIN'}
      title={
        'Amazon Inbound Placement Fees & Lost Inventory: The 2026 US Brand Guide'
      }
      dek={
        'How 7-to-8 figure US Amazon brands audit inbound placement fee economics, identify receiving dock shortages, and recover uncredited inventory within active policy dispute windows.'
      }
      meta={'METT GLOBAL FIELD GUIDE · AMAZON SUPPLY CHAIN · 5 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'PLACEMENT FEE',
            'FC SPLIT',
            'DOCK DISCREPANCY',
            'EVIDENCE DOSSIER',
            'CASH REIMBURSEMENT',
          ]}
        />
      }
      endHeading={'Are receiving shortages eroding your Amazon operating margin?'}
      endHref={'/appointment'}
      endLabel={'Book a Complimentary, ToS-Compliant Inbound Audit with Our Team'}
    >
      <JsonLd data={articleJsonLd('/insight-amazon-inbound-placement-fees')} />
      <PlacementFeeSimulator />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
