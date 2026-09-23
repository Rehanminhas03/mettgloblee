import { ArticleShell } from '@/components/article/ArticleShell';
import { ScorecardGraphic } from '@/components/article/graphics';
import { Prose, SourceNote, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-3pl-scorecard');

const ROWS = [
  {
    name: 'Reliability',
    weight: '25%',
    fill: '92%',
    detail: 'cutoff, SLA, claims',
  },
  {
    name: 'Inventory control',
    weight: '25%',
    fill: '86%',
    detail: 'receiving, counts, adjustments',
  },
  {
    name: 'Systems & data',
    weight: '20%',
    fill: '78%',
    detail: 'API, events, reporting',
  },
  {
    name: 'Cost transparency',
    weight: '15%',
    fill: '70%',
    detail: 'rates, surcharges, invoices',
  },
  {
    name: 'Resilience & scale',
    weight: '15%',
    fill: '64%',
    detail: 'peak, backup, exit plan',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Make the customer promise measurable' },
  {
    t: 'p',
    text: 'A warehouse partner is not only a place where stock sits. It is part of the promise made on the product page: what can be ordered, when it ships, whether the right item arrives and how quickly an exception is resolved. Start the selection process by writing the promise in measurable terms.',
  },
  {
    t: 'p',
    text: 'Examples include the daily order cutoff, same-day dispatch window, receiving turnaround, inventory adjustment approval, return disposition time and the response time for a shipment exception. The numbers should match the real business model. A seasonal seller, a subscription brand and a B2B spare-parts operation do not need the same service design.',
  },
  { t: 'h2', text: 'Use five weighted categories' },
  {
    t: 'p',
    text: 'The scorecard shown above is a practical starting point. Adjust the weights before sending an RFP, and record why the changes were made.',
  },
  {
    t: 'ul',
    items: [
      <>
        <strong>Reliability:</strong> cutoff performance, order accuracy,
        carrier handoff, claims handling and named escalation ownership.
      </>,
      <>
        <strong>Inventory control:</strong> receiving checks, location
        discipline, cycle counts, lot or serial handling, adjustment approvals
        and root-cause reporting.
      </>,
      <>
        <strong>Systems and data:</strong> order events, inventory
        synchronization, API or file integration, status definitions, reporting
        cadence and access to raw data.
      </>,
      <>
        <strong>Cost transparency:</strong> storage basis, pick and pack rules,
        materials, returns, kitting, minimums, peak surcharges and invoice
        reconciliation.
      </>,
      <>
        <strong>Resilience and scale:</strong> peak labor, backup carriers,
        power and system continuity, overflow capacity and a workable exit plan.
      </>,
    ],
  },
  { t: 'h2', text: 'Ask for proof, not adjectives' },
  {
    t: 'p',
    text: '“Best in class” is not a selection criterion. Ask each provider to show the evidence behind the claim. Request a redacted inventory report, a sample exception ticket, a rate card with every fee, a sample invoice, a system event map and the last peak-season capacity plan. Ask what happens when the answer is no: no ASN, wrong carton count, late carrier, stock variance, oversold SKU or damaged return.',
  },
  {
    t: 'p',
    text: 'Give every provider the same data pack. Include SKU count, monthly orders, order-line distribution, carton sizes, inbound cadence, returns rate, channels, destinations, service promise and peak multiplier. Apples-to-apples inputs make the cost and capability comparison much more credible.',
  },
  { t: 'h2', text: 'Calculate total cost of ownership' },
  {
    t: 'p',
    text: 'Compare more than the pick fee. A useful planning equation is:',
  },
  {
    t: 'p',
    text: (
      <strong>
        Total fulfillment cost = storage + receiving + pick/pack + packaging +
        transport + returns + integration + exceptions
      </strong>
    ),
  },
  {
    t: 'p',
    text: 'Then add the cost of failure where it is material: replacement shipments, customer support, lost inventory, marketplace penalties, delayed cash conversion or a launch that cannot scale. Do not invent a precise penalty if you cannot measure it; show it as a sensitivity range and state the assumption.',
  },
  { t: 'h2', text: 'Test the relationship before signing a long contract' },
  {
    t: 'ol',
    items: [
      'Shortlist providers that fit the product, geography and data requirements.',
      'Run the same operational scenario through each provider.',
      'Validate a sample order, receiving case, return and invoice line.',
      'Define the KPI pack, escalation path and review cadence in the commercial agreement.',
      'Use a pilot with clear exit criteria before routing the full catalog.',
    ],
  },
  {
    t: 'quote',
    text: 'A 3PL should be evaluated as an operating system with people, controls, data and recovery paths—not as a single line on a rate card.',
  },
  {
    t: 'source',
    label: 'FRAMEWORK NOTE',
    body: (
      <SourceNote>
        This scorecard and its illustrative weights are an original MettGlobal
        planning framework, created to structure a comparable 3PL review. They
        are not a third-party benchmark or a guarantee of performance. Validate
        service levels, insurance, liability, security and local contract terms
        with qualified advisors.
      </SourceNote>
    ),
  },
];

export default function ThreePlScorecardGuide() {
  return (
    <ArticleShell
      back="BLOG / SUPPLY CHAIN OPERATIONS"
      title="The 3PL scorecard: how to compare warehouses beyond pick fees"
      dek="The lowest pick fee is rarely the lowest operating cost. Compare a 3PL on the controls that protect customer promise, inventory truth, data flow and the ability to handle a difficult week."
      meta="METTGLOBAL OPERATOR PLAYBOOK · 3PL SELECTION · 9 MIN READ"
      graphic={
        <ScorecardGraphic
          rows={ROWS}
          note="Weights are an original MettGlobal planning model, not an industry benchmark."
        />
      }
      endHeading="Need to turn warehouse activity into a controlled system?"
      endHref="/operations-supply-chain"
      endLabel="Explore supply chain operations"
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
