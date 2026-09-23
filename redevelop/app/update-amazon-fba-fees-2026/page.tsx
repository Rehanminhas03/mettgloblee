import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-amazon-fba-fees-2026');

const FACTS = [
  {
    label: 'AVERAGE CHANGE',
    value: '+$0.08',
    note: 'per FBA unit, according to Amazon’s 2026 announcement',
  },
  {
    label: 'DEFAULT EFFECTIVE DATE',
    value: '15 JAN',
    note: '2026, unless a specific fee update states otherwise',
  },
  {
    label: 'NEW FBA FEE TYPES',
    value: 'NONE',
    note: 'Amazon said no new FBA fee types were being introduced for 2026',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Recalculate at SKU level' },
  {
    t: 'p',
    text: 'An average increase hides product-level variation. Re-run contribution margin after referral fees, FBA fees, inbound costs, advertising, returns and product cost. Flag SKUs where a small fee movement pushes the unit below your required margin.',
  },
  { t: 'h2', text: 'Do not treat packaging as a design-only decision' },
  {
    t: 'p',
    text: 'Amazon explicitly pointed sellers toward packaging and lower-cost inbound options as places where economics can improve. Packaging dimensions and weight can change fulfillment economics, so finance, operations and packaging should be reviewed together.',
  },
  { t: 'h2', text: 'Inventory health is now even more commercial' },
  {
    t: 'p',
    text: 'Amazon’s update links fee optimization with maintaining healthy inventory levels. Review days of supply, stockout risk, slow-moving inventory and replenishment cadence rather than treating inventory as a warehouse-only metric.',
  },
  { t: 'h2', text: 'Use Amazon’s own tools before changing price' },
  {
    t: 'p',
    text: 'Amazon referenced its Revenue Calculator, Fee and Economics Preview report and Profit Analytics tools. Use those to model the actual impact before applying blanket price increases.',
  },
  {
    t: 'quote',
    text: 'The operational response is SKU-level economics, not a single percentage added to every product.',
  },
  {
    t: 'source',
    label: 'OFFICIAL SOURCE',
    body: (
      <>
        <SourceLink
          href={
            'https://sellercentral.amazon.com/seller-forums/discussions/t/f3fa3211-820b-4e2e-a023-158a9cf55f99'
          }
        >
          {
            'Amazon Seller Central — 2026 Updates to US Referral and Fulfillment by Amazon Fees'
          }
        </SourceLink>
        <SourceNote>
          {
            'Platform policies and fees change. Verify the official source before making pricing or inventory decisions.'
          }
        </SourceNote>
      </>
    ),
  },
];

export default function AmazonFbaFees2026Brief() {
  return (
    <ArticleShell
      back={'CURRENT BRIEF / ECOMMERCE'}
      title={
        'Amazon’s 2026 US FBA fee changes: what operators should recalculate'
      }
      dek={
        'Amazon’s published 2026 update raises US FBA fees by an average of $0.08 per unit sold, with most changes effective January 15, 2026. The useful question is not whether eight cents sounds large; it is which SKUs are already close to an unacceptable contribution margin.'
      }
      meta={
        'CURRENT BRIEF · SOURCE CHECKED 17 SEP 2026 · AMAZON SELLER CENTRAL'
      }
      graphic={<PolicyGraphic facts={FACTS} />}
      footerNote={'Current platform brief'}
      endHeading={'Need your marketplace economics reviewed?'}
      endHref={'/ecommerce-growth'}
      endLabel={'Explore eCommerce support'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
