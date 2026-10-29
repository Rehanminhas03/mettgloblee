import Link from 'next/link';
import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { NewPostPolish } from '@/components/article/NewPostPolish';
import {
  Prose,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { blogPostingJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-walmart-wfs-reimbursement-claim');

const FAQS = [
  {
    question: 'When can I file a WFS lost inventory claim?',
    answer:
      'Between 10 and 50 days after the shipment was delivered to the Walmart fulfillment center, based on tracking. Requests in the first 10 days are not addressed.',
  },
  {
    question: 'What documents does Walmart need for a WFS shortage claim?',
    answer:
      'For Walmart Preferred Carrier parcel shipments, none. For other parcel carriers, proof of delivery showing the street address. For LTL or FTL freight, a BOL with shipper and carrier pickup signatures.',
  },
  {
    question: 'How much does Walmart reimburse for lost WFS inventory?',
    answer:
      "Walmart pays the estimated proceeds of the sale based on the item's average sales price, if the investigation confirms WFS lost or misplaced the units.",
  },
  {
    question: 'Can I appeal a denied WFS investigation?',
    answer:
      "No. Walmart's policy states that its decision is final and no appeals are accepted. That is why complete documents matter on the first filing.",
  },
  {
    question: 'Who pays if my own carrier loses the shipment?',
    answer:
      'You do. If you use your own carrier, you are responsible for goods lost in transit to the fulfillment center and must file the claim with the carrier.',
  },
  {
    question: 'Where do I see the reimbursement?',
    answer:
      'Approved reimbursements are paid in your next payment cycle. Check your settlement report and match it to your case log.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'That is the short version. The rest of this guide covers the details that decide whether a claim gets paid or closed.',
  },
  { t: 'h2', text: 'When WFS owes you money for inbound inventory' },
  {
    t: 'p',
    text: 'WFS uses its own receipt count as the record. If you sent 500 units and the fulfillment center logged 470, the 30 missing units do not come back on their own. You have to ask.',
  },
  {
    t: 'p',
    text: 'Walmart reimburses only when its investigation finds the inventory was lost or misplaced while WFS had it. The payout is based on the average sales price of the item, not your landed cost.',
  },
  {
    t: 'p',
    text: 'Two cases sit outside this process:',
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        <strong>Loss in transit with your own carrier.</strong> If you used a carrier that is not a Walmart Preferred Carrier, you own any loss before delivery. You file that claim with the carrier.
      </span>,
      <span key="2">
        <strong>Damaged goods at receiving.</strong> Damaged or pilfered goods can be refused or handled under your &quot;damages at receiving&quot; setting in Seller Center. Check that setting now, before your next shipment.
      </span>,
    ],
  },
  { t: 'h2', text: 'The 10 to 50 day window' },
  {
    t: 'p',
    text: 'This is where most sellers lose money. The rules are strict:',
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        You <strong>cannot</strong> open a case in the first 10 days after delivery. Requests made during that waiting period are not addressed.
      </span>,
      <span key="2">
        You <strong>must</strong> open the case within 50 days of delivery to the fulfillment center.
      </span>,
      <span key="3">
        Delivery is confirmed by tracking information, so the clock starts on the carrier delivery date, not the date receiving finished.
      </span>,
      <span key="4">
        The shipment does not need a Closed status before you file.
      </span>,
    ],
  },
  {
    t: 'p',
    text: 'A 40 day gap sounds like plenty. It is not when you ship weekly to several fulfillment centers. Put every inbound delivery date on a calendar with two flags: day 10 (open) and about day 40 (last safe day to file).',
  },
  { t: 'h2', text: 'Documents Walmart asks for' },
  {
    t: 'p',
    text: 'What you need depends on your carrier and shipment type.',
  },
  {
    t: 'table',
    headers: ['Carrier', 'Parcel', 'LTL or FTL (domestic)'],
    rows: [
      [
        'Walmart Preferred Carrier',
        'No documents required',
        'BOL with shipper and carrier pickup signatures',
      ],
      [
        'Other carrier',
        'Proof of delivery showing the delivery street address',
        'BOL with shipper and carrier pickup signatures',
      ],
    ],
  },
  {
    t: 'p',
    text: 'For non preferred carriers, the bill of lading must show:',
  },
  {
    t: 'ul',
    items: [
      'Every shipment ID on that BOL',
      'The full fulfillment center address',
      'Freight terms, such as "Prepaid"',
      'Your seller name and full ship from address',
      'Ship date',
      'Carrier name',
      'Number of cases',
    ],
  },
  {
    t: 'p',
    text: 'Documents must be in English or include an English translation. The quantity on your paperwork can be more than you shipped to WFS, but not less. Walmart accepts VAT invoices from sellers in China. It does not accept pro forma invoices or quotes.',
  },
  { t: 'h2', text: 'How to file the claim, step by step' },
  {
    t: 'ol',
    items: [
      <span key="1">
        <strong>Confirm the gap.</strong> In Seller Center, open Shipping Plans and compare units shipped to units received for each item.
      </span>,
      <span key="2">
        <strong>Check the date.</strong> Make sure you are between day 10 and day 50 after delivery.
      </span>,
      <span key="3">
        <strong>Pull your proof.</strong> Get the signed BOL for freight or the carrier proof of delivery for parcel. Check that every required field is on the BOL.
      </span>,
      <span key="4">
        <strong>Open the investigation.</strong> Select View plan on the shipment, go to the Track items tab, and click Investigate shipment.
      </span>,
      <span key="5">
        <strong>Pick the item.</strong> Select the item with the missing units.
      </span>,
      <span key="6">
        <strong>Add tracking and upload files.</strong> Enter tracking information and attach your documents, then select Next.
      </span>,
      <span key="7">
        <strong>Review and submit.</strong> You get an email confirmation. Track the case from the same Track items tab.
      </span>,
    ],
  },
  {
    t: 'p',
    text: 'Walmart notes that self serve disputes in Seller Center are available to select sellers once receiving is complete and there are missing received units. If you do not see the button, use the Help button in the Seller Center menu bar to contact Seller Support and open the dispute there.',
  },
  { t: 'h2', text: 'Get it right the first time' },
  {
    t: 'p',
    text: "Walmart's policy says that if it finds no conclusive evidence that WFS is responsible, no reimbursement is given, and no appeals are accepted. You get one clean shot per discrepancy.",
  },
  {
    t: 'p',
    text: 'So build the case before you click submit:',
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        <strong>Count before you ship.</strong> Keep a carton level packing list with units per box.
      </span>,
      <span key="2">
        <strong>Get signatures at pickup.</strong> A BOL without both shipper and carrier signatures is a weak document.
      </span>,
      <span key="3">
        <strong>Match every ID.</strong> The shipment ID on the BOL must match the one in Seller Center. One typo can sink a claim.
      </span>,
      <span key="4">
        <strong>File per shipment.</strong> Investigations are filed for individual shipment discrepancies. Do not bundle three shipments into one note.
      </span>,
      <span key="5">
        <strong>Keep a log.</strong> Track case number, item, units claimed, date filed, and outcome. This shows you which fulfillment centers and carriers cause repeat gaps.
      </span>,
    ],
  },
  { t: 'h2', text: 'What a reimbursement looks like' },
  {
    t: 'p',
    text: "If the claim is approved, Walmart issues the estimated proceeds of the sale based on the item's average sales price. It arrives in your next payment cycle. Walmart's routing guide says Seller Support aims to resolve cases within 10 calendar days from submission.",
  },
  {
    t: 'p',
    text: 'Reconcile every approved case against your settlement report. Mark it closed only when the money shows up.',
  },
  { t: 'h2', text: 'Building a repeatable WFS claims routine' },
  {
    t: 'p',
    text: 'One claim is easy. Fifty shipments a quarter across several fulfillment centers is not. A simple weekly routine works:',
  },
  {
    t: 'ol',
    items: [
      'Export received versus shipped for every shipment delivered 10 or more days ago.',
      'Flag any item with fewer units received than shipped.',
      'Check each flagged shipment against the 50 day deadline.',
      'Gather documents and file.',
      'Update your log and match payouts on the settlement report.',
    ],
  },
  {
    t: 'p',
    text: 'Mett Global runs this kind of manual, documented claims work for marketplace sellers, serving clients in the USA and Pakistan. One client, a leading global brand, recovered over £50,000 in one year through our claims recovery work.',
  },
  {
    t: 'p',
    text: (
      <>
        If you also sell through Amazon, our guide to{' '}
        <Link
          href="/insight-amazon-fba-inbound-claims"
          className="font-semibold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
        >
          Amazon FBA inbound claims
        </Link>{' '}
        covers the Amazon side.
      </>
    ),
  },
  { t: 'h2', text: 'FAQ' },
  {
    t: 'ul',
    items: FAQS.map((faq, i) => (
      <strong key={i} className="block mb-2">
        {faq.question}{' '}
        <span className="font-normal text-[#514d46] block mt-0.5">
          {faq.answer}
        </span>
      </strong>
    )),
  },
  {
    t: 'source',
    label: 'MARKETPLACE CLAIMS ADVISORY',
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-[#514d46]">
          Need help recovering WFS and marketplace losses? See our{' '}
          <Link
            href="/ecommerce-supply-chain"
            className="font-bold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
          >
            ecommerce and supply chain services
          </Link>{' '}
          or{' '}
          <Link
            href="/appointment"
            className="font-bold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
          >
            book a meeting
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function WalmartWfsReimbursementClaimPage() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / WALMART & MARKETPLACE OPERATIONS'}
      title={'Walmart WFS Reimbursement: File a Lost Inventory Claim'}
      dek={
        'To get a Walmart WFS reimbursement for lost inbound inventory, open a shipment investigation in Seller Center between 10 and 50 days after the fulfillment center delivery date. Go to Shipping Plans, open the shipment, choose Track items, then Investigate shipment, and upload the proof Walmart asks for. If Walmart confirms the units were lost while in its possession, it pays the estimated sale proceeds in your next payment cycle.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · WALMART WFS · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'RECEIPT GAP',
            '10-50 DAY WINDOW',
            'PROOF OF DELIVERY',
            'SELLER CENTER DISPUTE',
            'PAYOUT SETTLEMENT',
          ]}
        />
      }
      endHeading={'Need help recovering WFS and marketplace losses?'}
      endHref={'/appointment'}
      endLabel={'Book a Meeting with Our Claims Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-walmart-wfs-reimbursement-claim',
          { name: 'Ahmad Aamir' },
          '2026-10-30',
          FAQS,
        )}
      />
      <div className="new-post-content">
        <Prose blocks={BLOCKS} />
      </div>
    </ArticleShell>
  );
}
