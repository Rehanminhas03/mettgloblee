import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-conversion-audit');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Start with the first screen' },
  {
    t: 'p',
    text: 'Can an unfamiliar visitor explain what the business does, who it serves and what action to take? Clever language should never come at the expense of comprehension.',
  },
  { t: 'h2', text: 'Match the page to the promise' },
  {
    t: 'p',
    text: 'An ad creates an expectation. The landing page must continue it. If creative promotes one service or outcome but the click lands on a generic homepage, the visitor has to reconstruct the connection.',
  },
  { t: 'h2', text: 'Audit trust where decisions happen' },
  {
    t: 'p',
    text: 'Place relevant proof close to the decision: genuine reviews, clear process, credible team information, transparent contact details, policies and portfolio evidence. Avoid unsupported counters and manufactured testimonials.',
  },
  { t: 'h2', text: 'Mobile is not desktop compressed' },
  {
    t: 'p',
    text: 'Check tap targets, form length, text width, page weight and whether important content is buried beneath oversized decorative blocks. Complete the enquiry journey on an actual phone.',
  },
  { t: 'h2', text: 'Reduce form friction deliberately' },
  {
    t: 'p',
    text: 'Every required field creates cost. Ask only for information needed to qualify or respond and explain what happens after submission.',
  },
  {
    t: 'quote',
    text: 'Conversion work is not about making every element louder. It is about making the decision easier.',
  },
];

export default function ConversionAuditGuide() {
  return (
    <ArticleShell
      back={'BLOG / CONVERSION'}
      title={
        'A practical website conversion audit before you spend more on ads'
      }
      dek={
        'A website should reduce uncertainty. If visitors cannot quickly understand the offer, trust the business and take the next step, additional traffic simply buys more exits.'
      }
      meta={'METTGLOBAL FIELD GUIDE · WEBSITE & CRO · 8 MIN READ'}
      graphic={
        <ChipGraphic steps={['MESSAGE', 'TRUST', 'FRICTION', 'ACTION']} />
      }
      endHeading={'Want an independent diagnosis?'}
      endHref={'/web-development'}
      endLabel={'Explore web & conversion'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
