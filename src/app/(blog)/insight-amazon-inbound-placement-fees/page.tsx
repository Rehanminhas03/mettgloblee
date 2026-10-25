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
    text: 'When a brand opts for Amazon’s "Distributed Inventory Placement" to minimize per-unit placement fees, full truckloads (FTL) or palletized LTL shipments are broken down into smaller regional consignments headed to disparate fulfillment centers (e.g., AVP1 in Pennsylvania, GYR3 in Arizona, and MDW2 in Illinois).',
  },
  {
    t: 'p',
    text: 'Cross-dock receiving data across $8M+ in audited consignments reveals three consistent operational breakdowns in multi-destination routing:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Carton-level cross-dock misrouting:{' '}
        <span className="font-normal text-[#514d46]">
          When freight forwarders or 3PLs break master cartons across multiple regional shipments, carton barcode labels are frequently scanned into the wrong shipping plan, triggering automated discrepancies that close as "Investigation Completed" without seller credits.
        </span>
      </strong>,
      <strong key="2">
        Carrier pallet separation at transfer hubs:{' '}
        <span className="font-normal text-[#514d46]">
          LTL carriers (Estes, R+L, Old Dominion) consolidating shipments at regional freight terminals often separate paired pallets. Amazon receives pallet 1 on Tuesday and pallet 2 the following Monday, frequently marking pallet 2 as an overage or ghost shipment.
        </span>
      </strong>,
      <strong key="3">
        Defective Cubiscan size-tier reclassifications:{' '}
        <span className="font-normal text-[#514d46]">
          When units are distributed to newer, high-speed robotic facilities, automated Cubiscan sensors often capture packaging tape flares or protective air bags, re-measuring a standard-size item into an oversize tier and compounding fee overcharges on every subsequent order.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Calculating the breakeven: Placement fees vs. split freight' },
  {
    t: 'p',
    text: 'To determine whether paying Amazon’s minimal-split fee or absorbing LTL multi-stop freight is more profitable, US operators must evaluate the true total landed cost formula:',
  },
  {
    t: 'quote',
    text: 'True Inbound Cost = Placement Fee + Origin Freight + 3PL Handling Cost + Expected Receiving Discrepancy Rate (~1.8% of consignment value).',
  },
  {
    t: 'p',
    text: 'If splitting a 10,000-unit production run across four FCs saves $2,400 in placement fees but incurs $1,800 in additional 3PL prep charges and results in $3,200 of unaccounted carton shortages, the brand loses $2,600 on the transaction despite appearing to "save" on Amazon fees.',
  },
  { t: 'h2', text: 'The 18-month clock on FBA inventory reimbursement claims' },
  {
    t: 'p',
    text: 'Under Amazon’s FBA Inventory Reimbursement Policy, US brand owners have exactly 18 months from the original shipment delivery date to dispute receiving shortages and recover uncredited inventory value.',
  },
  {
    t: 'p',
    text: 'Once this 548-day statutory lookback window expires, Amazon’s financial ledger permanently locks the transaction. Unclaimed discrepancies cannot be appealed or audited, permanently eroding operating EBITDA.',
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
        Stamped Carrier Bill of Lading (BOL) or POD:{' '}
        <span className="font-normal text-[#514d46]">
          For freight consignments, the stamped BOL must include the official Amazon receiving stamp, delivered carton count, trailer seal number, and driver signature.
        </span>
      </strong>,
      <strong key="3">
        Carton-by-Carton Detailed Packing Slip:{' '}
        <span className="font-normal text-[#514d46]">
          Exact carton inventory manifesting correlating physical box labels (FBA box ID) to SKU quantities and gross tare weights.
        </span>
      </strong>,
      <strong key="4">
        Ledger Inventory Reconciliation Audit:{' '}
        <span className="font-normal text-[#514d46]">
          A clean cross-reference between the FBA Manage Shipments ledger, Inventory Event Detail report, and Daily Inventory History verifying that the missing units were never credited under an alternative transaction code.
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'AMAZON POLICY CITATION',
    body: (
      <>
        <SourceLink href="https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW">
          Amazon Seller Central: Inbound Placement Service Fee Schedule & Reimbursement Guidelines
        </SourceLink>
        <SourceNote>
          Inbound placement fees apply to all US FBA shipments. Mett Global conducts 100% human-managed forensic audits with zero bot scraping in strict accordance with Amazon ToS.
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
        'How 7-to-8 figure US Amazon brands audit inbound placement fee economics, identify receiving dock shortages, and recover tens of thousands in uncredited inventory before the strict 18-month window expires.'
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
      endLabel={'Book a Free Zero-Risk Inbound Audit with Our Team'}
    >
      <JsonLd data={articleJsonLd('/insight-amazon-inbound-placement-fees')} />
      <PlacementFeeSimulator />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
