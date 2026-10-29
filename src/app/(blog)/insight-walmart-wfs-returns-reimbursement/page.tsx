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

export const metadata = pageMetadata('/insight-walmart-wfs-returns-reimbursement');

const FAQS = [
  {
    question:
      'How long do I wait before disputing a WFS return that was never processed?',
    answer:
      '90 days after the customer initiated the return, and only if you have not seen a reimbursement in your WFS Settlement report.',
  },
  {
    question:
      'What if Walmart processed the return but I never got the item back?',
    answer:
      'For items marked return to seller, the dispute window opens 45 days after the item was processed at the return center.',
  },
  {
    question: 'How long do I have to file a WFS return dispute?',
    answer: '45 days from the date the dispute window opens.',
  },
  {
    question: "Does Walmart pay for returns that are Walmart's fault?",
    answer:
      'Yes. Walmart covers return processing costs for Walmart fault reasons, such as lost in transit or incorrect item received. These cannot be disputed because you are not charged.',
  },
  {
    question: 'What returns will Walmart not reimburse?',
    answer:
      'Common exceptions include seller initiated refunds, keep it rules, unsafe items, returns approved outside the window by Customer Care, and damaged items when you chose "return to me."',
  },
  {
    question: 'How many cases can I open per order?',
    answer: 'One. Include every photo and document in that single case.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'Below are the exact windows, the proof Walmart wants, and the cases Walmart will not pay.',
  },
  { t: 'h2', text: 'How WFS returns work' },
  {
    t: 'p',
    text: 'Walmart handles returns for WFS orders through its Free & Easy Returns program. Most items have a 90 day return window for customers, with an extended window over the holidays.',
  },
  {
    t: 'p',
    text: 'Who pays depends on the return reason:',
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        <strong>Walmart fault.</strong> Damaged in transit to the customer, lost in transit, late to arrive, incorrect item received, unable to deliver, shipping box damaged, or lost after delivery. Walmart covers return processing costs here.
      </span>,
      <span key="2">
        <strong>Seller or customer fault.</strong> Wrong size, poor quality, missing parts, not as described, defective, changed mind, bought elsewhere, and similar reasons. You pay return processing and return shipping fees.
      </span>,
    ],
  },
  {
    t: 'p',
    text: 'You cannot dispute Walmart fault returns, because Walmart already covers those costs.',
  },
  { t: 'h2', text: 'What you can dispute' },
  {
    t: 'p',
    text: 'Walmart allows a return dispute when:',
  },
  {
    t: 'ul',
    items: [
      'A return to vendor item was not sent back to you and is not a reimbursement exception.',
      'There is a problem with the item that came back.',
      'You were billed a return fee or refund incorrectly.',
    ],
  },
  {
    t: 'p',
    text: 'You cannot dispute a return the customer started but never sent back, unless you were charged back for it.',
  },
  { t: 'h2', text: 'Dispute windows for WFS returns' },
  {
    t: 'p',
    text: 'Every dispute must be filed within 45 days of the window opening. The opening date depends on the problem:',
  },
  {
    t: 'table',
    headers: ['Problem', 'Window opens'],
    rows: [
      [
        'Return not processed and no reimbursement in your WFS Settlement report',
        '90 days after the return was initiated',
      ],
      [
        'Return processed but you never got the item',
        '45 days after it was processed at the return center (return to seller items only)',
      ],
      [
        'Wrong item or missing items vs. the return packing list',
        'When the return to seller tracking shows delivered',
      ],
      [
        'Damaged item graded sellable',
        'When the return to seller tracking shows delivered',
      ],
      [
        'Charged for a return of a non returnable item',
        'On the settlement date you were charged',
      ],
      [
        'Item dispositioned incorrectly at the return center',
        'On the received scan date at the return center',
      ],
    ],
  },
  {
    t: 'p',
    text: 'One warning on the first row. If Walmart can confirm receipt and disposition statuses from the return center, you will not be reimbursed. Check the Customer returns report before you file.',
  },
  { t: 'h2', text: 'Proof to include' },
  {
    t: 'p',
    text: 'Send everything in the first contact. Files must be 5MB or smaller. If information is missing, Walmart makes 3 attempts to get it, then closes the dispute.',
  },
  {
    t: 'p',
    text: (
      <>
        <strong>Damaged return graded sellable.</strong> Clear photos of:
      </>
    ),
  },
  {
    t: 'ul',
    items: [
      'The package with the tracking label',
      'The damaged product showing the order ID and UPC sticker',
    ],
  },
  {
    t: 'p',
    text: (
      <>
        <strong>Incorrect item returned.</strong> Clear photos of:
      </>
    ),
  },
  {
    t: 'ul',
    items: [
      'The package and tracking label',
      'All items in the return shipment',
      'The incorrect item showing the order ID and UPC sticker',
      'Every page of the pack list showing the cart ID',
    ],
  },
  {
    t: 'p',
    text: 'Take these photos the moment a return box arrives, before anyone opens or moves the contents. Walmart does not capture or keep photos of damaged returns, so your photos are the only record.',
  },
  { t: 'h2', text: 'How to open the dispute' },
  {
    t: 'ol',
    items: [
      'Pull the Customer returns report in Seller Center and find the order.',
      'Match the problem to the table above and confirm the window is open.',
      'Make sure you are still inside the 45 day filing period.',
      'Gather photos and documents, each under 5MB.',
      'Contact Seller Support and create a case. You may open only one case per order.',
      'Log the case number and check your WFS Settlement report for the outcome.',
    ],
  },
  {
    t: 'p',
    text: 'Walmart handles each dispute case by case. Full or partial reimbursement is not guaranteed.',
  },
  { t: 'h2', text: 'Returns Walmart will not reimburse' },
  {
    t: 'p',
    text: 'Know these before you spend time on a case:',
  },
  {
    t: 'ul',
    items: [
      'Damaged or unsellable items when you set a "return to me" rule for them. No return processing fee, shipping cost, or refund amount is paid back.',
      'Items too damaged to return. The return center sends a document instead.',
      'Items damaged in transit, or with perceived damage from the order ID attachment.',
      'Items deemed unsafe. They are disposed of and not reimbursed.',
      'iCloud locked devices or items with wrong serial numbers returned to you.',
      'Returns Walmart Customer Care approved outside the normal window.',
      'Returns and refunds you started yourself.',
      'Items under keep it rules you set.',
      'Missing non essential accessories.',
    ],
  },
  {
    t: 'p',
    text: 'Seller or customer fault returns that are not sent back as requested are reimbursed at a reduced rate.',
  },
  { t: 'h2', text: 'Also check restocking' },
  {
    t: 'p',
    text: 'A return delivered to a fulfillment center usually takes at least 7 days to receive and restock. If a sellable return still is not back in stock after that, check the Customer returns report. Unsellable items are not restocked. They are disposed of or returned to you based on your settings.',
  },
  { t: 'h2', text: 'Set up a monthly returns check' },
  {
    t: 'p',
    text: 'Returns leak money slowly. A monthly check catches it:',
  },
  {
    t: 'ol',
    items: [
      'Export the Customer returns report.',
      'List returns over 90 days old with no processing status and no reimbursement.',
      'List return to seller items processed over 45 days ago that never arrived.',
      'File the ones still inside the 45 day filing period.',
      'Review your return preferences and keep it rules every quarter.',
    ],
  },
  {
    t: 'p',
    text: 'Mett Global handles this reconciliation for marketplace sellers, serving clients in the USA and Pakistan. Our team files each case by hand with full documents, which is the same approach behind a claims program where a leading global brand recovered over £50,000 in one year.',
  },
  {
    t: 'p',
    text: (
      <>
        For inbound shortages, see our guide to{' '}
        <Link
          href="/insight-walmart-wfs-reimbursement-claim"
          className="font-semibold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
        >
          Walmart WFS lost inventory claims
        </Link>
        .
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
          Want WFS returns and reimbursements checked every month? See our{' '}
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

export default function WalmartWfsReturnsReimbursementPage() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / WALMART & MARKETPLACE OPERATIONS'}
      title={'WFS Returns Not Received? Walmart Return Dispute Guide'}
      dek={
        'If a WFS return was not received or not reimbursed, you can open a dispute with Walmart Seller Support once the right window opens. For a return that was never processed, that is 90 days after the customer started the return. For a return marked "return to seller" that never reached you, it is 45 days after the return center processed it. You then have 45 days from the window opening to file.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · WALMART WFS · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'CUSTOMER RETURN',
            'RETURN CENTER',
            '45-90 DAY WINDOW',
            'EVIDENCE PHOTOS',
            'DISPUTE SETTLEMENT',
          ]}
        />
      }
      endHeading={'Want WFS returns and reimbursements checked every month?'}
      endHref={'/appointment'}
      endLabel={'Book a Meeting with Our Claims Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-walmart-wfs-returns-reimbursement',
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
