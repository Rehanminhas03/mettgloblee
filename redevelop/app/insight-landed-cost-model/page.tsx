import { ArticleShell } from '@/components/article/ArticleShell';
import { LandedGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-landed-cost-model');

/* `.cost-part` flex ratios and fills, straight from article.css. */
const PARTS = [
  {
    key: 'unit',
    grow: '20',
    bg: 'bg-[#dfba64]',
    amount: '$20',
    label: 'unit cost',
  },
  {
    key: 'origin',
    grow: '2',
    bg: 'bg-[#c9982c]',
    amount: '$2',
    label: 'origin',
  },
  {
    key: 'freight',
    grow: '5',
    bg: 'bg-[#b5a17b]',
    amount: '$5',
    label: 'freight + insurance',
  },
  {
    key: 'duty',
    grow: '3',
    bg: 'bg-[#877451]',
    amount: '$3',
    label: 'duty + tax',
  },
  {
    key: 'destination',
    grow: '2',
    bg: 'bg-[#6f6046]',
    amount: '$2',
    label: 'destination',
  },
  {
    key: 'reserve',
    grow: '1',
    bg: 'bg-[#4a4030]',
    text: 'text-white',
    amount: '$1',
    label: 'returns reserve',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Use one formula before you compare suppliers' },
  { t: 'p', text: 'A practical planning formula is:' },
  {
    t: 'p',
    text: (
      <strong>
        Landed cost = ex-factory cost + origin charges + freight + insurance +
        import duty and tax + destination charges + risk reserve
      </strong>
    ),
  },
  {
    t: 'p',
    text: 'The formula is not a customs ruling and it does not replace a broker’s classification work. It is a decision model. Its job is to make hidden cost visible early enough that a team can change the price, pack size, route, order quantity or launch market before cash is committed.',
  },
  {
    t: 'p',
    text: 'The graphic above is illustrative, not a market quote. The percentages and amounts will change with product class, origin, destination, route, volume, service level, currency and the responsibilities agreed with the seller or buyer.',
  },
  { t: 'h2', text: 'Separate cost from responsibility' },
  {
    t: 'p',
    text: 'Two shipments can have a similar physical cost and a very different commercial risk. Document the named place, the delivery term, who arranges transport, who provides customs information, who pays duties and taxes, and where the risk transfers. ICC’s Incoterms rules provide a common language for these responsibilities; they do not replace the sales contract, customs advice or local tax advice.',
  },
  {
    t: 'p',
    text: 'When comparing supplier quotes, put the delivery basis in the first column. “$20 per unit” is not comparable if one quote is ex works, one is delivered to a port and one includes delivery to a named warehouse. Write the term and place next to the number every time.',
  },
  { t: 'h2', text: 'Model the variables that actually move margin' },
  {
    t: 'ul',
    items: [
      <>
        <strong>Chargeable size:</strong> volumetric weight, carton dimensions
        and pallet utilization can move freight more than unit price.
      </>,
      <>
        <strong>Classification:</strong> product description, material and
        tariff classification affect duty treatment; confirm the classification
        with a qualified customs professional.
      </>,
      <>
        <strong>Currency:</strong> record the quote currency, conversion date
        and a sensitivity range for foreign-exchange movement.
      </>,
      <>
        <strong>Minimums:</strong> separate one-off documentation, customs,
        inspection and handling fees from per-unit cost.
      </>,
      <>
        <strong>Returns and claims:</strong> add a visible reserve for reverse
        logistics, damage, rework or uncollected shipments instead of treating
        them as surprises.
      </>,
    ],
  },
  { t: 'h2', text: 'Run three scenarios, not one forecast' },
  {
    t: 'p',
    text: 'Build a base case, a delayed or expensive-freight case, and a volume case. In each scenario, show landed cost, gross margin, cash tied up, transit time and the break-even order quantity. A small table that exposes the sensitivity is more useful than a precise-looking single number.',
  },
  {
    t: 'p',
    text: 'For a new product, also model the first shipment separately from the repeat shipment. Samples, tooling, compliance checks, low-volume freight and launch packaging can make the first run unusually expensive. If those costs are spread invisibly across the entire product forecast, the team will not know whether the margin improved because the business improved or because the model averaged away the setup cost.',
  },
  { t: 'h2', text: 'The pre-launch checklist' },
  {
    t: 'ol',
    items: [
      'Write the product description and expected classification in plain language.',
      'Collect carton dimensions, weights, pack quantities and the intended shipping mode.',
      'Ask for every quote on the same delivery basis and named place.',
      'Separate recurring, one-time and risk-based costs in the model.',
      'Have a customs or trade specialist verify assumptions before the first commercial shipment.',
    ],
  },
  {
    t: 'quote',
    text: 'If the model cannot show who pays, when the cost appears and what can change it, it is not yet a landed-cost model.',
  },
  {
    t: 'source',
    label: 'PRIMARY REFERENCE',
    body: (
      <>
        <SourceLink href="https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/">
          ICC: Incoterms® 2020 rules
        </SourceLink>
        <SourceNote>
          Use the official ICC reference for the current Incoterms framework and
          obtain product- and country-specific customs advice before relying on
          a duty, tax or classification assumption.
        </SourceNote>
      </>
    ),
  },
];

export default function LandedCostModelGuide() {
  return (
    <ArticleShell
      back="BLOG / CROSS-BORDER OPERATIONS"
      title="Landed cost before launch: the cross-border margin model operators should use"
      dek="A factory quote is not a market-ready cost. Before a product crosses a border, build the full cost stack and make the commercial responsibility visible. Otherwise a launch can look profitable in the spreadsheet and expensive in the real world."
      meta="METTGLOBAL OPERATOR PLAYBOOK · TRADE & MARGIN CONTROL · 10 MIN READ"
      graphic={
        <LandedGraphic
          parts={PARTS}
          totalLabel="Illustrative landed cost"
          total="$33 / unit"
        />
      }
      endHeading="Need a clearer cross-border operating model?"
      endHref="/operations-supply-chain"
      endLabel="Explore supply chain operations"
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
