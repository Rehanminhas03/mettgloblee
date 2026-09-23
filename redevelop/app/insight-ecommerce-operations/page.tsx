import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-ecommerce-operations');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Growth problems are often system problems' },
  {
    t: 'p',
    text: 'When an online store slows down, the first instinct is often to buy more traffic or produce more creative. That can help, but it does not fix an operation that cannot reliably turn demand into delivery. Inventory accuracy, replenishment, order routing, fulfillment speed, marketplace compliance, returns and reporting sit behind the customer-facing funnel.',
  },
  { t: 'h2', text: 'Audit the chain, not one dashboard' },
  {
    t: 'p',
    text: 'Can the business trust available-to-sell inventory? Are fast-moving SKUs replenished before they become unavailable? Do orders move from channel to warehouse without manual exceptions? Are returns and claims reconciled? Can management see operational exceptions quickly enough to act?',
  },
  {
    t: 'quote',
    text: 'More demand amplifies the system you already have. It does not automatically improve it.',
  },
  { t: 'h2', text: 'Inventory accuracy comes first' },
  {
    t: 'p',
    text: 'If channel inventory and physical inventory disagree, marketing decisions become unreliable. Establish a repeatable cycle-count routine, isolate recurring variance by SKU and location, and document how adjustments enter the system.',
  },
  { t: 'h2', text: 'Measure handoffs' },
  {
    t: 'p',
    text: 'Look at the time between order receipt, allocation, pick, pack, dispatch and carrier acceptance. Average fulfillment time can hide exceptions. Track the percentage of orders that breach the expected window and identify why.',
  },
  { t: 'h2', text: 'Returns are operational intelligence' },
  {
    t: 'p',
    text: 'Categorize return reasons consistently and identify repeated patterns. A high return rate may point to product content, quality, sizing, packaging or picking accuracy rather than simply a customer problem.',
  },
  { t: 'h2', text: 'A practical 30-day sequence' },
  {
    t: 'p',
    text: 'Week one: establish baseline inventory and fulfillment metrics. Week two: map exceptions and ownership. Week three: remove the highest-frequency manual failure. Week four: build a simple management view for stock risk, late orders, returns and unresolved claims.',
  },
];

export default function EcommerceOperationsGuide() {
  return (
    <ArticleShell
      back={'BLOG / ECOMMERCE'}
      title={
        'The eCommerce growth leak most teams miss: operations after the click'
      }
      dek={
        'Traffic creates opportunity. Operations determine whether that opportunity becomes repeatable revenue, healthy margins and a customer willing to return.'
      }
      meta={'METTGLOBAL FIELD GUIDE · ECOMMERCE OPERATIONS · 9 MIN READ'}
      graphic={
        <ChipGraphic steps={['CLICK', 'STOCK', 'FULFILL', 'RETURN', 'LEARN']} />
      }
      endHeading={'Need the operational layer audited?'}
      endHref={'/ecommerce-growth'}
      endLabel={'Explore eCommerce support'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
