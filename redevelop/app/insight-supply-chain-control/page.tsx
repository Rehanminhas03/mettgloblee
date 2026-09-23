import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-supply-chain-control');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Start at receiving' },
  {
    t: 'p',
    text: 'Inventory errors often begin before goods reach a pick location. Verify purchase order, SKU, quantity, condition and unit of measure at receiving. Record discrepancies immediately instead of allowing them to become a later stock mystery.',
  },
  { t: 'h2', text: 'Control locations and movements' },
  {
    t: 'p',
    text: 'If staff can move product without scanning or recording the movement, the system stops describing the warehouse. Define valid locations, movement rules and ownership for exceptions.',
  },
  { t: 'h2', text: 'Treat adjustments as evidence' },
  {
    t: 'p',
    text: 'An adjustment should not simply make the system match the shelf. Record why the difference happened: receiving error, picking error, damage, return, unrecorded transfer, unit-of-measure issue or another cause. Trend the reasons.',
  },
  { t: 'h2', text: 'Cycle count by risk' },
  {
    t: 'p',
    text: 'Count fast-moving, high-value and historically inaccurate SKUs more frequently. A smaller targeted count performed consistently is often more useful than a huge count performed rarely.',
  },
  { t: 'h2', text: 'Measure accuracy and exception closure' },
  {
    t: 'p',
    text: 'Track count accuracy, adjustment value, repeated variance by SKU/location and the age of unresolved discrepancies. The objective is not just finding errors; it is reducing the causes that create them.',
  },
  {
    t: 'quote',
    text: 'Inventory accuracy improves when every stock-changing event has a controlled path and every exception has an owner.',
  },
];

export default function SupplyChainControlGuide() {
  return (
    <ArticleShell
      back={'BLOG / SUPPLY CHAIN'}
      title={'Inventory accuracy is a system, not a stock count'}
      dek={
        'A warehouse can complete a perfect annual count and still lose accuracy again within weeks. Sustainable accuracy comes from controlling the transactions that change stock every day.'
      }
      meta={'METTGLOBAL FIELD GUIDE · SUPPLY CHAIN & OPERATIONS · 9 MIN READ'}
      graphic={
        <ChipGraphic
          steps={['RECEIVE', 'LOCATE', 'MOVE', 'COUNT', 'RECONCILE']}
        />
      }
      endHeading={'Need the inventory-control layer reviewed?'}
      endHref={'/operations-supply-chain'}
      endLabel={'Explore supply chain support'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
