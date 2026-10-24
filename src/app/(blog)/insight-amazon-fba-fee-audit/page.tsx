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

export const metadata = pageMetadata('/insight-amazon-fba-fee-audit');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'How automated Cubiscan sensors inflate fulfillment fees' },
  {
    t: 'p',
    text: 'In Amazon fulfillment centers worldwide, inbound inventory is measured by automated infrared laser scanning stations known as Cubiscan. These systems scan the outer dimensions and weight of packaged units to assign them into Amazon’s FBA size tiers (Small Standard, Large Standard, Small Oversize, Medium Oversize, and Large Oversize).',
  },
  {
    t: 'p',
    text: 'While automated scanners process high volumes of freight quickly, they are notoriously sensitive to packaging anomalies. A slight air bulge in a polybag, an unsealed carton flap, a loose tape corner, or optical sensor dust routinely adds 0.25 to 1.5 inches to package readings.',
  },
  {
    t: 'quote',
    text: 'In Amazon’s fee matrix, a discrepancy of just 0.1 inches can instantly push an item across the threshold from Large Standard into Small Oversize, causing an immediate fulfillment fee increase of $1.50 to $6.00+ on every single sale.',
  },
  { t: 'h2', text: 'The compounding mathematical cost for 7-figure brands' },
  {
    t: 'p',
    text: 'Because fulfillment fees are deducted automatically from gross disbursements, fee tier inflation rarely triggers an obvious alert in Seller Central. Unless an operator conducts weekly SKU-level dimensional audits, the fee bleed accumulates silently across thousands of units.',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Fulfillment Fee Overcharge:{' '}
        <span className="font-normal text-[#514d46]">
          If a brand sells 12,000 units monthly and an ASIN is mistakenly bumped from Large Standard (e.g. $5.40/unit) to Small Oversize (e.g. $8.25/unit), the business loses $34,200 every month in unjustified platform deductions.
        </span>
      </strong>,
      <strong key="2">
        Compounding Monthly Storage Fees:{' '}
        <span className="font-normal text-[#514d46]">
          Inflated cubic volume directly increases both base monthly storage fees and Q4 peak storage surcharges ($2.40 per cubic foot in off-peak vs. $3.63+ during Q4 holiday volume).
        </span>
      </strong>,
      <strong key="3">
        Aged Inventory & Low-Inventory Level Surcharges:{' '}
        <span className="font-normal text-[#514d46]">
          Distorted dimensional calculations distort Amazon’s historical days of supply algorithms, triggering secondary penalties that erode operating margin.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The 90-day lookback window & remeasurement restrictions' },
  {
    t: 'p',
    text: 'Amazon’s dispute policy imposes two strict operational constraints that catch unprepared sellers off guard:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Strict 90-Day Dispute Window:{' '}
        <span className="font-normal text-[#514d46]">
          Unlike inbound inventory losses (which carry an 18-month lookback window), fee disputes must generally be initiated within 90 days from the fee transaction date. Uncontested historical overcharges beyond this window become virtually impossible to recover.
        </span>
      </strong>,
      <strong key="2">
        The Two-Remeasure Limit Every Six Months:{' '}
        <span className="font-normal text-[#514d46]">
          Amazon strictly limits sellers to two physical remeasurement requests per ASIN within any rolling six-month period. If a seller files a hasty remeasure request while uncompressed inventory remains on the FC floor, a second inaccurate reading locks the inflated fee tier in place for six months.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'A forensic 4-step fee audit & reimbursement protocol' },
  {
    t: 'p',
    text: 'Recovering historical overcharges and resetting fee tiers requires a disciplined, evidence-based audit protocol:',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Phase 1: Automated Fee Matrix Discrepancy Screening:{' '}
        <span className="font-normal text-[#514d46]">
          Cross-referencing the Fee Preview Report, Monthly Storage Fee reports, and packaging CAD specifications via secure SP-API ingestion to flag ASINs where Amazon’s recorded dimensions exceed manufacturer specs.
        </span>
      </strong>,
      <strong key="2">
        Phase 2: Packaging & Caliper Verification Dossier:{' '}
        <span className="font-normal text-[#514d46]">
          Compiling high-resolution caliper photos showing length, width, height, and digital scale weight with zero packaging air pockets or tape flare.
        </span>
      </strong>,
      <strong key="3">
        Phase 3: Coordinated Remeasurement Request:{' '}
        <span className="font-normal text-[#514d46]">
          Submitting a structured remeasurement case to Seller Support with the verification dossier, ensuring the physical FC inspection is completed under optimal conditions.
        </span>
      </strong>,
      <strong key="4">
        Phase 4: Retroactive Fee Dispute & Disbursement Recovery:{' '}
        <span className="font-normal text-[#514d46]">
          Once Amazon confirms the corrected tier, filing an itemized retrospective claims package calculating the fee variance across every unit sold during the 90-day window to secure a direct balance credit.
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
          Amazon Seller Central: FBA Product Size Tiers, Weight, and Dimension Policies
        </SourceLink>
        <SourceNote>
          Fee disputes are time-sensitive. Mett Global conducts exhaustive forensic dimension audits on a pure contingency basis—no recovery, zero fee.
        </SourceNote>
      </>
    ),
  },
];

export default function AmazonFeeAuditGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / AMAZON CLAIMS & FULFILLMENT ECONOMICS'}
      title={
        'Amazon FBA Weight & Dimension Fee Audit: How to Reverse Cubiscan Errors & Recover Excess Fulfillment Charges'
      }
      dek={
        'When automated Cubiscan sensors mismeasure packaging by even a fraction of an inch, products jump into higher size tiers, costing $1.50 to $6.00+ extra per unit. Here is how brands audit historical fee discrepancies, request physical remeasures, and secure retroactive reimbursements.'
      }
      meta={'METT GLOBAL FIELD GUIDE · FBA FEE RECOVERY · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'CUBISCAN SENSOR',
            'TIER INFLATION',
            'FEE AUDIT',
            'RE-MEASURE REQUEST',
            'FEE REFUND',
          ]}
        />
      }
      endHeading={'Suspect your SKUs are being overcharged on FBA fees?'}
      endHref={'/appointment'}
      endLabel={'Book a Free Zero-Risk Fee Audit with Our Houston Team'}
    >
      <JsonLd data={articleJsonLd('/insight-amazon-fba-fee-audit')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
