import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-lead-generation-system');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Define a realistic ICP' },
  {
    t: 'p',
    text: 'Specify industry, geography, company size, buying role and the business conditions that make your offer relevant. A broad list is not an ideal-customer profile.',
  },
  { t: 'h2', text: 'Use buying signals' },
  {
    t: 'p',
    text: 'Prioritize prospects showing observable reasons to act: active advertising with weak landing pages, hiring, expansion, marketplace friction, outdated websites or a clear operational gap.',
  },
  { t: 'h2', text: 'Qualify before personalizing' },
  {
    t: 'p',
    text: 'Confirm the business is a plausible fit before spending time on deep personalization. Keep a simple priority model such as hot, warm and cold based on signal strength and service fit.',
  },
  { t: 'h2', text: 'Make outreach diagnostic' },
  {
    t: 'p',
    text: 'Lead with the specific issue you noticed and a relevant next step. Avoid sending the full service catalogue to everyone.',
  },
  { t: 'h2', text: 'Own the next action' },
  {
    t: 'p',
    text: 'Every live opportunity needs an owner, next action and follow-up date in the CRM. Pipeline leakage often happens because nobody owns the next step.',
  },
  {
    t: 'quote',
    text: 'Good prospecting is a sequence of qualification decisions, not a contest to send the most messages.',
  },
];

export default function LeadGenerationSystemGuide() {
  return (
    <ArticleShell
      back={'BLOG / SALES SYSTEMS'}
      title={'Build a prospecting system before hiring more salespeople'}
      dek={
        'More outreach volume rarely fixes weak targeting, unclear qualification and inconsistent follow-up. Build the operating system before scaling the headcount.'
      }
      meta={'METTGLOBAL FIELD GUIDE · LEAD GENERATION & SALES · 9 MIN READ'}
      graphic={
        <ChipGraphic
          steps={['ICP', 'SIGNAL', 'QUALIFY', 'OUTREACH', 'FOLLOW-UP']}
        />
      }
      endHeading={'Need the pipeline system reviewed?'}
      endHref={'/lead-generation-sales'}
      endLabel={'Explore sales systems'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
