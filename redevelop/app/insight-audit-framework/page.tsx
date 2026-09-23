import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-audit-framework');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Separate observation from conclusion' },
  {
    t: 'p',
    text: 'Document what was actually observed: a broken path, slow response, stock variance, missing control, confusing page or technical error. Then explain the likely business consequence.',
  },
  { t: 'h2', text: 'Score impact, not drama' },
  {
    t: 'p',
    text: 'Prioritize findings by severity, affected users or processes, commercial impact, confidence and remediation effort. A visually obvious issue is not automatically the most important issue.',
  },
  { t: 'h2', text: 'Group root causes' },
  {
    t: 'p',
    text: 'Ten symptoms may come from one broken process. Group findings by underlying cause so the team fixes systems rather than repeatedly patching symptoms.',
  },
  { t: 'h2', text: 'Assign an owner and next action' },
  {
    t: 'p',
    text: 'Every high-priority recommendation should identify who needs to act, what the first action is and what dependency could block it.',
  },
  { t: 'h2', text: 'Define the evidence of improvement' },
  {
    t: 'p',
    text: 'Choose the measure that should change after remediation: conversion, errors, lead response time, inventory accuracy, page performance or another operating signal.',
  },
  {
    t: 'quote',
    text: 'The best audit is not the one with the most findings. It is the one that changes what the team does next.',
  },
];

export default function AuditFrameworkGuide() {
  return (
    <ArticleShell
      back={'BLOG / AUDITS'}
      title={'How to run an audit that produces decisions, not a 70-page PDF'}
      dek={
        'An audit is useful when a team can understand what matters, why it matters and what happens next. Issue volume is not the same as diagnostic quality.'
      }
      meta={'METTGLOBAL FIELD GUIDE · AUDITS & DIAGNOSTICS · 8 MIN READ'}
      graphic={
        <ChipGraphic
          steps={['EVIDENCE', 'IMPACT', 'PRIORITY', 'OWNER', 'MEASURE']}
        />
      }
      endHeading={'Need an independent diagnosis?'}
      endHref={'/audits-diagnostics'}
      endLabel={'Explore audits & diagnostics'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
