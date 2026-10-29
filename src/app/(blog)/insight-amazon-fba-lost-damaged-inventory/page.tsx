import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { blogPostingJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-amazon-fba-lost-damaged-inventory');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Where warehouse inventory actually disappears' },
  {
    t: 'p',
    text: 'Amazon fulfillment centers move a very large number of units every day. Some damage and misplacement is part of normal operations.',
  },
  {
    t: 'p',
    text: 'Units can be damaged, misplaced, or disposed of. When a customer return is refunded, the item may not make it back to a fulfillment center.',
  },
  {
    t: 'quote',
    text: 'Amazon says it now proactively reimburses almost all warehouse lost and damaged cases and customer return cases. If you do not receive an automatic reimbursement and believe a unit was lost or damaged, you can file a manual claim.',
  },
  { t: 'h2', text: 'Decoding the inventory adjustment reason codes' },
  {
    t: 'p',
    text: 'Start with the Inventory Ledger in Seller Central. Each adjustment has a reason code. The codes below are the ones to check first:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Code E (Damaged at Amazon fulfillment center):{' '}
        <span className="font-normal text-[#514d46]">
          A decrease to your sellable inventory. It is always followed by a P code that adds the unit to your fulfillment center damaged inventory.
        </span>
      </strong>,
      <strong key="2">
        Code M (Inventory misplaced):{' '}
        <span className="font-normal text-[#514d46]">
          A decrease to your inventory because units are missing from a bin location in a fulfillment center. If the units turn up later, you will see a code F (Inventory found).
        </span>
      </strong>,
      <strong key="3">
        Code D (Inventory disposed of):{' '}
        <span className="font-normal text-[#514d46]">
          A decrease to your inventory because units were disposed of. Codes Q and P are disposition changes (a unit moved from one condition to another), not losses on their own.
        </span>
      </strong>,
      <strong key="4">
        Unreturned customer refunds:{' '}
        <span className="font-normal text-[#514d46]">
          A customer was refunded or sent a replacement, but the item was not returned to your inventory and you were not reimbursed.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Claim windows by case type' },
  {
    t: 'p',
    text: "Amazon replaced its old 18 month claim deadline with shorter windows for each case type. For fulfillment center operations claims (items lost or damaged in a fulfillment center), you must file within 60 days of the date Amazon reported the loss or damage. Shipments to Amazon (units missing at receiving) have their own window, so check Amazon's current FBA inventory reimbursement policy before you file.",
  },
  {
    t: 'p',
    text: 'For customer return claims (a buyer is refunded but the item is not returned), you can file between 45 and 105 days after the customer refund or replacement date. Claims filed outside these windows are not eligible.',
  },
  { t: 'h2', text: 'A forensic 4-step warehouse reconciliation workflow' },
  {
    t: 'p',
    text: 'Recovering uncredited warehouse inventory requires a structured, multi-report ledger reconciliation:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Ledger Cross-Reconciliation:{' '}
        <span className="font-normal text-[#514d46]">
          Match the Inventory Ledger against the Reimbursements report to find every unit marked damaged, misplaced, or disposed that has no reimbursement and no found adjustment, and is still inside the 60 day window.
        </span>
      </strong>,
      <strong key="2">
        Customer Return Matching:{' '}
        <span className="font-normal text-[#514d46]">
          Compare customer refund dates with returns received. Flag refunds that are 45 to 105 days old with no return and no reimbursement.
        </span>
      </strong>,
      <strong key="3">
        Reimbursement Value Check:{' '}
        <span className="font-normal text-[#514d46]">
          For items lost or damaged before a customer orders them, Amazon reimburses based on the manufacturing or sourcing cost of the item. If you do not enter your cost, Amazon uses its own estimate. Keep your costs and supporting invoices up to date.
        </span>
      </strong>,
      <strong key="4">
        Substantiated Human Dispute Filing:{' '}
        <span className="font-normal text-[#514d46]">
          Submitting one well researched, itemized case at a time through Seller Support, with the ledger details that support it.
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'OFFICIAL POLICY CITATION',
    body: (
      <>
        <SourceLink href="https://sellercentral.amazon.com/help/hub/reference/external/200453320">
          Amazon Seller Central: FBA Lost and Damaged Inventory Reimbursement Policy
        </SourceLink>
        <SourceNote>
          Claims must be filed inside Amazon's window for each case type. Mett Global files claims manually, one case at a time.
        </SourceNote>
      </>
    ),
  },
];

export default function LostDamagedInventoryGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / AMAZON WAREHOUSE & INVENTORY RECONCILIATION'}
      title={
        'Amazon FBA Lost & Damaged Inventory Guide: How Brands Reconcile Warehouse Ledger Discrepancies'
      }
      dek={
        "From warehouse damage to misplaced units and customer refunds that never come back, FBA losses add up. Here is how to read the Inventory Ledger codes and file claims inside Amazon's current windows for each case type."
      }
      meta={'METT GLOBAL FIELD GUIDE · WAREHOUSE REIMBURSEMENTS · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'WAREHOUSE DAMAGE',
            'LEDGER DISCREPANCY',
            'RECONCILIATION DOSSIER',
            'CASH DISBURSEMENT',
          ]}
        />
      }
      endHeading={'Suspect uncredited warehouse damage in your FBA account?'}
      endHref={'/appointment'}
      endLabel={'Book a call with our team'}
    >
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-amazon-fba-lost-damaged-inventory',
          { name: 'Ahmad Aamir', jobTitle: 'Co-Founder & COO' },
          '2025-01-15'
        )}
      />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
