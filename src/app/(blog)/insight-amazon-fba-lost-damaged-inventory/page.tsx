import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { WarehouseShrinkageSimulator } from '@/components/article/interactive/WarehouseShrinkageSimulator';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-amazon-fba-lost-damaged-inventory');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Where warehouse inventory actually disappears' },
  {
    t: 'p',
    text: 'Across Amazon’s global fulfillment network, millions of units move between sorting conveyors, robotic staging drives, and transfer trucks every 24 hours. In high-velocity fulfillment centers, physical inventory damage and misplacement are operational realities.',
  },
  {
    t: 'p',
    text: 'Units fall from high-bay pallet racking, are crushed by forklift tines, get lost during inter-facility FC transfers, or are marked as "Disposed" by warehouse associates without seller authorization. In addition, when customer returns are initiated, Amazon immediately deducts the refund from your seller balance, but items frequently fail to arrive back at the FC within the mandatory 45-day return window.',
  },
  {
    t: 'quote',
    text: 'Amazon promises automated reimbursement for warehouse-damaged and lost items within 30 days. In reality, empirical catalog audits indicate that between 15% and 30% of eligible inventory adjustments fail to reconcile automatically without manual seller case filing.',
  },
  { t: 'h2', text: 'Decoding the inventory adjustment reason codes' },
  {
    t: 'p',
    text: 'Auditing warehouse discrepancies requires extracting the Inventory Adjustments Report and mapping Amazon’s internal transaction reason codes to financial settlements:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Codes E & M (Damaged by Warehouse):{' '}
        <span className="font-normal text-[#514d46]">
          Inventory physically broken or defaced inside the fulfillment center. Amazon owes the seller the net fair market replacement value of the unit.
        </span>
      </strong>,
      <strong key="2">
        Codes D & P (Transfer & Misplaced Discrepancies):{' '}
        <span className="font-normal text-[#514d46]">
          Units transferred between FCs that never register a receiving scan at the destination facility, remaining stuck in "Reserved - FC Transfer" limbo indefinitely.
        </span>
      </strong>,
      <strong key="3">
        Code Q (Destroyed or Disposed Without Consent):{' '}
        <span className="font-normal text-[#514d46]">
          Inventory marked for unscheduled disposal without a seller-initiated removal order, requiring 100% replacement compensation.
        </span>
      </strong>,
      <strong key="4">
        Unreturned Customer Refunds (The 45-Day Leak):{' '}
        <span className="font-normal text-[#514d46]">
          Customer was refunded from seller funds, but after 45 days the item was neither returned to sellable stock nor credited as a lost return.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Category-specific dispute deadlines: The 60-day warehouse rule' },
  {
    t: 'p',
    text: 'Under Amazon’s updated FBA Inventory Reimbursement Policy, historical 18-month dispute deadlines have been replaced by strict, category-specific timeframes. For fulfillment center operations—including warehouse damage, lost inventory, and unauthorized disposals—sellers must submit claims within 60 days of the adjustment event date.',
  },
  {
    t: 'p',
    text: 'For customer return discrepancies (where a buyer is refunded but inventory is never returned), claims must be filed between 60 and 120 days from the refund or replacement date. Once these category-specific windows lapse, Amazon permanently archives the ledger transaction, extinguishing legal eligibility for compensation.',
  },
  {
    t: 'p',
    text: 'For a 7-figure brand generating $3M to $10M in annual FBA volume, unreconciled warehouse damage and missing customer returns represent an estimated $25,000 to $85,000 in uncollected cash every year if monthly ledger audits are neglected.',
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
          Cross-matching the Inventory Event Detail report against the Reimbursements Report to isolate every unit marked as lost, damaged, or disposed that received zero reimbursement transaction ID within the 60-day window.
        </span>
      </strong>,
      <strong key="2">
        Customer Return Matching:{' '}
        <span className="font-normal text-[#514d46]">
          Comparing customer refund dates against FBA Customer Returns reports to isolate refunds exceeding the 45-day return deadline without physical inventory check-in.
        </span>
      </strong>,
      <strong key="3">
        Fair Market Value Valuation:{' '}
        <span className="font-normal text-[#514d46]">
          Calculating the exact median sales price, historical category average, and standard VAT/sales-tax exclusions to ensure Amazon calculates reimbursements at full price rather than deflated baseline valuations.
        </span>
      </strong>,
      <strong key="4">
        Substantiated Human Dispute Filing:{' '}
        <span className="font-normal text-[#514d46]">
          Submitting single-case itemized dossiers through Seller Support with transaction ledger citations, ensuring zero account throttling and rapid cash disbursement into your bank balance.
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
          Reconciliation must be executed within Amazon’s 60-day warehouse dispute window. Mett Global conducts forensic ledger audits on a contingency basis—no recovery, zero out-of-pocket expense, in strict compliance with Amazon Terms of Service.
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
        'From forklift damage to misplaced FC transfers and unreturned customer refunds, warehouse shrinkage silently erodes operating margin. Here is how enterprise brands audit adjustment codes, enforce the 45-day return rule, and claim retroactive cash recovery within Amazon’s 60-day dispute window.'
      }
      meta={'METT GLOBAL FIELD GUIDE · WAREHOUSE REIMBURSEMENTS · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'WAREHOUSE DAMAGE',
            'LEDGER DISCREPANCY',
            '45-DAY AUDIT',
            'RECONCILIATION DOSSIER',
            'CASH DISBURSEMENT',
          ]}
        />
      }
      endHeading={'Suspect uncredited warehouse damage in your FBA account?'}
      endHref={'/appointment'}
      endLabel={'Book a Complimentary, ToS-Compliant Warehouse Audit with Our Team'}
    >
      <JsonLd data={articleJsonLd('/insight-amazon-fba-lost-damaged-inventory')} />
      <WarehouseShrinkageSimulator />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
