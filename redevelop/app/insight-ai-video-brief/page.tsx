import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-ai-video-brief');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Define the one audience' },
  {
    t: 'p',
    text: 'State who the video is for and what they already know. A video trying to speak to everyone usually becomes generic because the model has no reason to make specific creative choices.',
  },
  { t: 'h2', text: 'Give the video one job' },
  {
    t: 'p',
    text: 'Awareness, explanation, lead generation and retargeting need different structures. Define the desired next action before writing the script.',
  },
  { t: 'h2', text: 'Write the hook around a real problem' },
  {
    t: 'p',
    text: 'The first seconds should establish relevance. Use a credible problem, tension, question or outcome rather than an empty attention trick.',
  },
  { t: 'h2', text: 'Specify proof and constraints' },
  {
    t: 'p',
    text: 'List claims that are allowed, claims that are not supported, required product details, brand language and visual references. This prevents the generation process from inventing authority.',
  },
  { t: 'h2', text: 'Review like an editor' },
  {
    t: 'p',
    text: 'Check continuity, text accuracy, brand fit, pacing, voice, claims and platform requirements. AI reduces production friction; it does not remove the publishing responsibility.',
  },
  {
    t: 'quote',
    text: 'A useful AI video workflow begins with a better brief and ends with a human quality gate.',
  },
];

export default function AiVideoBriefGuide() {
  return (
    <ArticleShell
      back={'BLOG / AI VIDEO'}
      title={'The brief that makes AI video useful instead of generic'}
      dek={
        'Generation tools can produce footage quickly, but without a disciplined brief they often produce polished content with no clear commercial job.'
      }
      meta={'METTGLOBAL FIELD GUIDE · AI VIDEO & CONTENT · 7 MIN READ'}
      graphic={
        <ChipGraphic
          steps={['AUDIENCE', 'HOOK', 'PROOF', 'VISUAL', 'REVIEW']}
        />
      }
      endHeading={'Need a repeatable content workflow?'}
      endHref={'/ai-content-production'}
      endLabel={'Explore AI content production'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
