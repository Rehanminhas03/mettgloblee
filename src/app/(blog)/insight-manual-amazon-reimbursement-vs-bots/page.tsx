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

export const metadata = pageMetadata('/insight-manual-amazon-reimbursement-vs-bots');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The automated reimbursement illusion' },
  {
    t: 'p',
    text: 'Many reimbursement apps connect to Seller Central, read your inventory data, and open discrepancy cases for you.',
  },
  {
    t: 'p',
    text: 'Amazon now says it proactively reimburses almost all warehouse lost and damaged cases and customer return cases. The cases left for sellers to file are often the ones that need documents.',
  },
  {
    t: 'quote',
    text: "Amazon's reimbursement policy says it may decline a claim if you do not follow the process and provide all requested information.",
  },
  { t: 'h2', text: 'The 3 fatal failure modes of automated scraper bots' },
  {
    t: 'p',
    text: 'Automated reimbursement software routinely fails on high-dollar enterprise inventory discrepancies due to three fundamental structural limitations:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        1. Inability to Procure Carrier Stamped BOLs:{' '}
        <span className="font-normal text-[#514d46]">
          For a freight shipment to Amazon with units missing at receiving, Amazon asks for a proof of delivery for LTL or FTL shipments that shows the box count and total weight at pickup and is stamped by Amazon. Your carrier should have a copy. Getting it usually means working with the carrier directly.
        </span>
      </strong>,
      <strong key="2">
        2. Proof of Inventory Ownership:{' '}
        <span className="font-normal text-[#514d46]">
          Amazon asks for proof that you own the inventory, such as a supplier invoice, a receipt from another seller, or a signed packing slip if you are the manufacturer. It must show the date of purchase, product names matching the lost or damaged items, and quantity.
        </span>
      </strong>,
      <strong key="3">
        3. Following Up on Decisions:{' '}
        <span className="font-normal text-[#514d46]">
          After Amazon reviews a claim, you may need to respond to follow up requests or dispute the reimbursement amount through the Get Help page. That takes judgment, not just automation.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: "What Amazon's policy says about claim volume" },
  {
    t: 'p',
    text: "Amazon's FBA inventory reimbursement policy prohibits activity that interferes with its capacity to help other sellers. Examples it gives are submitting insufficiently researched or premature requests, or submitting a large number of requests in a short time. Sellers who repeatedly do this may receive delayed support on their cases or be subject to monitoring, investigation, and account action.",
  },
  { t: 'h2', text: 'Software scrapers vs. forensic human case management' },
  {
    t: 'p',
    text: 'A careful claims process should focus on quality over volume:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Discrepancy Identification:{' '}
        <span className="font-normal text-[#514d46]">
          Compare the Inventory Ledger, received inventory, and the Reimbursements report so you only file for real gaps that Amazon has not already reimbursed.
        </span>
      </strong>,
      <strong key="2">
        Evidence Dossier Assembly:{' '}
        <span className="font-normal text-[#514d46]">
          Each claim includes the documents Amazon asks for, such as proof of delivery and proof of inventory ownership.
        </span>
      </strong>,
      <strong key="3">
        Clear Case Submission and Follow Up:{' '}
        <span className="font-normal text-[#514d46]">
          A person writes each case, responds to Amazon's requests, and follows up when a decision needs to be disputed.
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'OFFICIAL COMPLIANCE CITATION',
    body: (
      <>
        <SourceLink href="https://sellercentral.amazon.com/help/hub/reference/external/G1801">
          Amazon Seller Central: Selling Policies and Seller Code of Conduct
        </SourceLink>
        <SourceNote>
          Mett Global files claims manually, one well researched case at a time.
        </SourceNote>
      </>
    ),
  },
];

export default function ManualVsBotsGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / AMAZON CLAIMS & TOS COMPLIANCE'}
      title={
        'Manual Forensic Auditing vs. Automated Bots: Why Software Alone Fails Amazon FBA Claims Recovery'
      }
      dek={
        "Reimbursement software is good at finding gaps. Claims that need documents still need a person. Here is how to split the work and stay within Amazon's reimbursement policy."
      }
      meta={'METT GLOBAL FIELD GUIDE · COMPLIANCE & RECOVERY · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'LEDGER AUDIT',
            'DOCUMENT ASSEMBLY',
            'HUMAN CASE MANAGER',
            'SUPPORT ESCALATION',
            'SECURE RECOVERY',
          ]}
        />
      }
      endHeading={'Tired of bot denials and automated rejections?'}
      endHref={'/appointment'}
      endLabel={'Book a call with our team'}
    >
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-manual-amazon-reimbursement-vs-bots',
          { name: 'Ahmad Aamir', jobTitle: 'Co-Founder & COO' },
          '2025-01-20'
        )}
      />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
