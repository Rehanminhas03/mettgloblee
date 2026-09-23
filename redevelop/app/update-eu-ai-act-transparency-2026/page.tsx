import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-eu-ai-act-transparency-2026');

const FACTS = [
  {
    label: 'APPLICATION DATE',
    value: '02 AUG',
    note: '2026 for Article 50 transparency obligations',
  },
  {
    label: 'INTERACTIVE AI',
    value: 'DISCLOSE',
    note: 'people should be informed when they are interacting with AI where the rule applies',
  },
  {
    label: 'SYNTHETIC CONTENT',
    value: 'MARK',
    note: 'certain generated or manipulated content requires detectable marking or labelling',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Map where people interact with AI' },
  {
    t: 'p',
    text: 'List chatbots, automated assistants and other interfaces that directly interact with customers, employees or users. Check whether the experience clearly tells the person they are dealing with AI when required.',
  },
  { t: 'h2', text: 'Review generated media workflows' },
  {
    t: 'p',
    text: 'The Commission says providers of generative AI must support identification of AI-generated content, while deployers have labelling duties for categories such as deepfakes and certain public-interest text. Content teams should know which outputs need disclosure before publishing.',
  },
  { t: 'h2', text: 'Build disclosure into the workflow' },
  {
    t: 'p',
    text: 'Do not rely on someone remembering to add a label manually at the end. Put required disclosure, metadata and review checks into templates, publishing workflows and approval criteria.',
  },
  { t: 'h2', text: 'Separate compliance from brand preference' },
  {
    t: 'p',
    text: 'A company may choose to disclose AI use more broadly than the legal minimum for trust or brand reasons. That is a separate decision from what the regulation specifically requires.',
  },
  {
    t: 'quote',
    text: 'AI governance becomes operational when disclosure and review are built into the production system, not added as an afterthought.',
  },
  {
    t: 'source',
    label: 'OFFICIAL SOURCE',
    body: (
      <>
        <SourceLink
          href={
            'https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august'
          }
        >
          {
            'European Commission — AI Act enforcement and transparency requirements from 2 August 2026'
          }
        </SourceLink>
        <SourceNote>
          {
            'This is an operational summary, not legal advice. Check the official guidance and obtain legal advice where the regulation may apply to your specific use case.'
          }
        </SourceNote>
      </>
    ),
  },
];

export default function EuAiActTransparency2026Brief() {
  return (
    <ArticleShell
      back={'CURRENT BRIEF / AI'}
      title={
        'EU AI Act transparency rules are now live: what AI-facing teams should know'
      }
      dek={
        'From 2 August 2026, key transparency requirements under the EU AI Act apply. Businesses using customer-facing AI or publishing certain AI-generated content should review where disclosure, labelling and machine-readable marking are required.'
      }
      meta={'CURRENT BRIEF · SOURCE CHECKED 17 SEP 2026 · EUROPEAN COMMISSION'}
      graphic={<PolicyGraphic facts={FACTS} />}
      footerNote={'Current policy brief'}
      endHeading={'Need an AI workflow mapped with human checkpoints?'}
      endHref={'/ai-automation'}
      endLabel={'Explore AI automation'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
