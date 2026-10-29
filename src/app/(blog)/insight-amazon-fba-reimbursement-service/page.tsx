import Link from 'next/link';
import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { NewPostPolish } from '@/components/article/NewPostPolish';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { blogPostingJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/insight-amazon-fba-reimbursement-service',
);

const FAQS = [
  {
    question: 'How far back can Amazon FBA claims be audited?',
    answer:
      "Under Amazon's current policy, fulfillment center lost or damaged claims must be filed within 60 days of the date Amazon reported it. Customer return claims must be filed between 45 and 105 days after the refund or replacement date. For shipments to Amazon, sellers should check Amazon's current policy before filing.",
  },
  {
    question: 'How does Amazon calculate the reimbursement value?',
    answer:
      "For items lost or damaged before a customer order, Amazon reimburses based on the seller's manufacturing or sourcing cost. If you do not provide your cost, Amazon uses its own estimate.",
  },
  {
    question: 'Does a manual claims audit risk my seller account?',
    answer:
      'No. When audits are conducted manually with verified commercial documents and without automated bot spam, claims fully adhere to Amazon reimbursement policies.',
  },
  {
    question: 'Where do approved Amazon reimbursements go?',
    answer:
      'All approved reimbursements are credited directly by Amazon into your Seller Central balance and appear on your regular settlement statement.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'An Amazon FBA reimbursement service audits seller inventory ledgers, inbound shipments, and customer returns to recover money owed by Amazon. The recovery process reconciles warehouse damage, receiving shortages, lost units, and uncredited customer refunds within active policy deadlines.',
  },
  { t: 'h2', text: 'How Amazon FBA claims recovery actually works' },
  {
    t: 'p',
    text: 'Fulfillment by Amazon handles millions of units across hundreds of fulfillment centers every day. Inbound cartons go missing on receiving belts, items get damaged during transfer, and customer refunds are processed without the physical product ever returning to inventory. A dedicated claims service turns these discrepancies into evidence-backed cases.',
  },
  {
    t: 'quote',
    text: 'Amazon expects sellers to identify and dispute inventory discrepancies. Once category-specific filing windows expire, uncredited losses are permanently closed.',
  },
  { t: 'h2', text: 'Current Amazon dispute windows by case type' },
  {
    t: 'p',
    text: "Amazon replaced its old 18 month claim period with strict windows for each case type. Knowing these windows protects your recovery eligibility:",
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        <strong>Fulfillment center lost or damaged claims:</strong> Must be submitted within 60 days of the date Amazon reported the loss or damage.
      </span>,
      <span key="2">
        <strong>Customer return claims:</strong> Can be filed between 45 and 105 days after the customer refund or replacement date.
      </span>,
      <span key="3">
        <strong>Shipments to Amazon:</strong> Inbound receiving discrepancies have their own window, so check Amazon's current FBA inventory reimbursement policy before you file.
      </span>,
    ],
  },
  { t: 'h2', text: 'How Amazon values lost and damaged inventory' },
  {
    t: 'p',
    text: "Lost or damaged items before a customer order are paid at the seller's manufacturing or sourcing cost, or Amazon's estimate if no cost is submitted. Keeping accurate supplier invoices and cost data on file ensures fair settlement calculations.",
  },
  { t: 'h2', text: 'Why manual case management beats automated bots' },
  {
    t: 'p',
    text: "Amazon now proactively reimburses almost all warehouse lost and damaged cases. The remaining cases left for sellers to file are often the ones that require physical documentation. Automated scraper bots blast generic tickets without stamped bills of lading or supplier invoices, risking support throttling.",
  },
  {
    t: 'p',
    text: 'Human case management involves assembling verified documentation dossiers for each dispute. By attaching signed carrier delivery receipts, manufacturer invoices, and exact transaction IDs, cases are resolved cleanly under full compliance with Amazon policy.',
  },
  {
    t: 'p',
    text: 'Mett Global provides manual, documented claims recovery for marketplace sellers, serving clients in the USA and Pakistan. Over £50,000 recovered in one year for a leading global brand illustrates the value of disciplined ledger audits.',
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
    label: 'SERVICE CAPABILITY ADVISORY',
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-[#514d46]">
          Need your Amazon FBA inventory ledgers audited? See our{' '}
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

export default function AmazonFbaReimbursementServiceGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / E-COMMERCE & SUPPLY CHAIN'}
      title={'Amazon FBA Reimbursement Service: How Claims Recovery Works'}
      dek={
        'A practical guide to how professional Amazon FBA claims recovery reconciles warehouse losses, receiving dock shortages, customer returns, and fee overcharges using manual evidence dossiers.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · AMAZON RECOVERY · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'LEDGER AUDIT',
            'DISCREPANCY MATCH',
            'EVIDENCE DOSSIER',
            'MANUAL SUBMISSION',
            'DIRECT REIMBURSEMENT',
          ]}
        />
      }
      endHeading={'Want your Amazon FBA inventory ledgers audited?'}
      endHref={'/appointment'}
      endLabel={'Book a Call with Our Claims Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-amazon-fba-reimbursement-service',
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
