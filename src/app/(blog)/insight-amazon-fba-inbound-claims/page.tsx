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

export const metadata = pageMetadata('/insight-amazon-fba-inbound-claims');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Where inbound inventory actually disappears' },
  {
    t: 'p',
    text: 'For brands scaling beyond $1M in annual Amazon FBA sales, the most significant inventory shrinkage rarely happens inside the customer return loop. It happens between the loading dock and the fulfillment center sorting belt.',
  },
  {
    t: 'p',
    text: 'When a carrier delivers pallets or small-parcel cartons to an Amazon fulfillment center (FC), automated dock scanners check in the shipment. However, during cross-dock transfers and sorting, discrepancies routinely emerge: full cartons go unscanned, pallet counts are miscounted, or shipments are marked as "Investigation Completed" with missing units permanently written off unless the seller files a formal dispute.',
  },
  {
    t: 'quote',
    text: 'Amazon’s receiving reconciliation tab is not a guarantee of accurate accounting; it is a timestamped ledger that closes permanently unless challenged with verified proof.',
  },
  { t: 'h2', text: 'Why automated software and scrapers get claims denied' },
  {
    t: 'p',
    text: 'Many enterprise brands rely on generic automated reimbursement software or scrapers. While these tools can flag high-level discrepancies, Amazon Seller Support has significantly tightened its validation protocols against automated bot submissions.',
  },
  {
    t: 'p',
    text: 'When an automated tool opens a generic ticket without attached proof-of-delivery, Amazon’s automated responses often reject the claim with standard template rejections ("Carrier did not provide proof of delivery" or "Investigation completed with no discrepancy found"). Repeated automated filings without proper documentation risk ticket throttling or account warnings.',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Bots cannot pull signed carrier Bills of Lading (BOLs):{' '}
        <span className="font-normal text-[#514d46]">
          Freight carriers require human coordination to retrieve stamped delivery receipts and PRO numbers.
        </span>
      </strong>,
      <strong key="2">
        Bots cannot match manufacturer purchase orders:{' '}
        <span className="font-normal text-[#514d46]">
          Amazon requires itemized commercial invoices showing payment verification, unit counts, and matching ASIN descriptions.
        </span>
      </strong>,
      <strong key="3">
        Bots cannot handle multi-step appeals:{' '}
        <span className="font-normal text-[#514d46]">
          When Amazon issues an initial denial, human forensic case managers must review the FC receiving logs to overturn the ruling.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The 3 essential documents for an airtight claim' },
  {
    t: 'p',
    text: 'To overturn an inbound receiving discrepancy and secure a cash reimbursement into your Seller Central balance, Amazon requires an evidence dossier comprising three core documents:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Itemized Manufacturer Commercial Invoice:{' '}
        <span className="font-normal text-[#514d46]">
          Must display the manufacturer name, buyer business name matching Seller Central, date of purchase before shipment creation, itemized ASIN product titles, and proof of payment (wire receipt or cleared transaction).
        </span>
      </strong>,
      <strong key="2">
        Stamped Proof of Delivery (POD) or Bill of Lading (BOL):{' '}
        <span className="font-normal text-[#514d46]">
          For LTL/FTL shipments, the freight bill must show the Amazon FC stamp, date of delivery, pallet count, and carrier signature. For small parcel (UPS/FedEx), complete tracking showing delivered status to the specific FC zip code.
        </span>
      </strong>,
      <strong key="3">
        Carton-Level Packing List:{' '}
        <span className="font-normal text-[#514d46]">
          Detailed carton-by-carton breakdown matching box labels to individual unit quantities, gross weight, and SKU identifiers.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The strict 18-month lookback window' },
  {
    t: 'p',
    text: 'Under Amazon’s FBA Inventory Reimbursement Policy, sellers have exactly 18 months from the date of shipment delivery or inventory discrepancy to file a reimbursement claim. Once an inventory transaction passes day 548, Amazon’s system permanently locks the transaction.',
  },
  {
    t: 'p',
    text: 'For a 7-figure brand doing $3M to $10M annually, an unperformed reconciliation audit represents an estimated $30,000 to $100,000 in unrecoverable capital that permanently transfers to Amazon’s bottom line.',
  },
  { t: 'h2', text: 'A ToS-compliant manual recovery protocol' },
  {
    t: 'p',
    text: 'A structured, ToS-compliant claims management process operates in four sequential stages:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Step 1: Historical Ledger Ingestion:{' '}
        <span className="font-normal text-[#514d46]">
          Cross-referencing Inventory Event Detail reports, Manage FBA Shipments data, and Payments reconciliation ledgers for the preceding 18 months via secure, read-only SP-API access.
        </span>
      </strong>,
      <strong key="2">
        Step 2: Document Matching & Evidence Compilation:{' '}
        <span className="font-normal text-[#514d46]">
          Pairing each missing carton or unit with its exact carrier tracking POD, commercial invoice, and shipment packing list.
        </span>
      </strong>,
      <strong key="3">
        Step 3: Single-Case Manual Case Submission:{' '}
        <span className="font-normal text-[#514d46]">
          Submitting individual, fully substantiated cases through Seller Support without automated bulk ticket spam.
        </span>
      </strong>,
      <strong key="4">
        Step 4: Ledger Verification & Cash Deposit Confirmation:{' '}
        <span className="font-normal text-[#514d46]">
          Tracking the reimbursement through the Reimbursements Report to verify that Amazon issued cash compensation or inventory replacement.
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'OFFICIAL POLICY CITATION',
    body: (
      <>
        <SourceLink href="https://sellercentral.amazon.com/help/hub/reference/external/G200213130">
          Amazon Seller Central: FBA Inventory Reimbursement Policy & Timeframes
        </SourceLink>
        <SourceNote>
          Claims must be submitted within 18 months of shipment delivery. Mett Global operates under 100% manual evidence preparation in strict compliance with Amazon ToS.
        </SourceNote>
      </>
    ),
  },
];

export default function AmazonInboundClaimsGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / AMAZON CLAIMS & SUPPLY CHAIN'}
      title={
        'The Amazon FBA Inbound Shipment Loss Guide: How Brands Recover Lost Inventory & Carrier Shortages'
      }
      dek={
        'Between the freight loading dock and the fulfillment center sorting belt, 1% to 3% of FBA inventory routinely goes unrecorded. Here is how 7-figure Amazon brands audit historical discrepancies, compile carrier proof, and recover capital before the strict 18-month window closes.'
      }
      meta={'METT GLOBAL FIELD GUIDE · AMAZON REIMBURSEMENTS · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'CARRIER RECEIPT',
            'DOCK SHORTAGE',
            'EVIDENCE DOSSIER',
            'MANUAL AUDIT',
            'CASH RECOVERY',
          ]}
        />
      }
      endHeading={'Need your historical 18-month lookback audited?'}
      endHref={'/appointment'}
      endLabel={'Book a Free Zero-Risk Audit with Our Houston Team'}
    >
      <JsonLd data={articleJsonLd('/insight-amazon-fba-inbound-claims')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
