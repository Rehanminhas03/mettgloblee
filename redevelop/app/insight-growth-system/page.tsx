import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-growth-system');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Diagnose in order' },
  {
    t: 'p',
    text: 'If impressions are healthy but few people click, inspect audience-message fit and creative. If clicks arrive but visitors leave, inspect the promise-to-page match, offer clarity, trust and friction. If leads arrive but sales do not, inspect qualification and follow-up.',
  },
  { t: 'h2', text: 'The offer is more than a discount' },
  {
    t: 'p',
    text: 'A strong offer makes the next step easy to understand: what is being provided, for whom, why it matters and why the prospect should act.',
  },
  { t: 'h2', text: 'Creative should pre-qualify' },
  {
    t: 'p',
    text: 'The job is not merely to generate clicks. Good creative attracts the right attention and establishes the problem or value proposition before the visitor reaches the site.',
  },
  { t: 'h2', text: 'Landing pages continue the conversation' },
  {
    t: 'p',
    text: 'Use consistent language from the ad, answer questions that block action, show genuine proof and keep the primary CTA obvious.',
  },
  { t: 'h2', text: 'Follow-up is part of media performance' },
  {
    t: 'p',
    text: 'Define ownership, response time, qualification and follow-up cadence before scaling campaigns.',
  },
  {
    t: 'quote',
    text: 'Do not ask one part of the funnel to compensate indefinitely for another part that is broken.',
  },
];

export default function GrowthSystemGuide() {
  return (
    <ArticleShell
      back={'BLOG / GROWTH'}
      title={'Why better ads cannot rescue a weak offer and landing page'}
      dek={
        'Acquisition is a chain. Creative can earn attention, but the offer, page, follow-up and delivery determine whether that attention becomes business.'
      }
      meta={'METTGLOBAL FIELD GUIDE · PAID GROWTH · 7 MIN READ'}
      graphic={
        <ChipGraphic steps={['AUDIENCE', 'AD', 'OFFER', 'PAGE', 'FOLLOW-UP']} />
      }
      endHeading={'Need the acquisition chain reviewed?'}
      endHref={'/digital-marketing'}
      endLabel={'Explore digital marketing'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
