import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-ai-automation');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Map the work before adding AI' },
  {
    t: 'p',
    text: 'Write down the trigger, inputs, decisions, systems, output, owner and exception path. If nobody can explain the current process consistently, automating it may scale confusion.',
  },
  { t: 'h2', text: 'Look for repetition with judgment' },
  {
    t: 'p',
    text: 'Useful candidates include classifying enquiries, drafting structured responses, extracting information from standardized documents, summarizing updates, preparing first-pass reports and routing tasks.',
  },
  { t: 'h2', text: 'Keep deterministic work deterministic' },
  {
    t: 'p',
    text: 'Not every workflow needs a language model. Fixed calculations, validations and simple rules are often better handled with conventional software.',
  },
  { t: 'h2', text: 'Design the exception path first' },
  {
    t: 'p',
    text: 'Ask what happens when confidence is low, data is missing or a downstream system fails. A production workflow needs escalation, logging and human override.',
  },
  { t: 'h2', text: 'Measure before and after' },
  {
    t: 'p',
    text: 'Baseline time per task, volume, error rate and turnaround. Compare the same metrics after automation plus the amount of human review required.',
  },
  {
    t: 'quote',
    text: 'Automate the repetitive layer so people can spend more attention on decisions, relationships and exceptions.',
  },
];

export default function AiAutomationGuide() {
  return (
    <ArticleShell
      back={'BLOG / AUTOMATION'}
      title={'Where AI automation actually saves time in a growing business'}
      dek={
        'The best automation opportunity is usually not the flashiest demo. It is a repeated, rules-heavy workflow that consumes attention and has a clear human checkpoint.'
      }
      meta={'METTGLOBAL FIELD GUIDE · AI & OPERATIONS · 10 MIN READ'}
      graphic={<ChipGraphic steps={['INPUT', 'DECIDE', 'ACT', 'VERIFY']} />}
      endHeading={'Have a repetitive workflow?'}
      endHref={'/ai-automation'}
      endLabel={'Explore AI automation'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
