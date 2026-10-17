/**
 * Public types for the operations case studies. This file holds no records and
 * no internal editorial notes; the records live in `content/`.
 */
export type FigureKind =
  'recovery' | 'accuracy' | 'sourcing' | 'invoice' | 'channels' | 'etsy';

export type CaseStudy = {
  slug: string;
  order: number;
  category: string;
  client: string;
  projectType: string;
  scope: string;
  title: string;
  headline: string;
  summary: string;
  hero: {
    display: string;
    accessible: string;
    label: string;
    /** Animation target only; for ">" results it is a threshold, not an exact amount. */
    value: number | null;
    prefix: string;
    suffix: string;
    kind: 'result' | 'scope' | 'coverage';
    qualifier: string;
  };
  deck: string;
  problemHeading: string;
  problem: string;
  approachHeading: string;
  approach: string;
  resultHeading: string;
  result: string;
  closing: string;
  tags: string[];
  handled: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
    primary: string;
    secondary: string[];
  };
  visual: {
    type: FigureKind;
    heading: string;
    labels: string[];
    caption: string;
  };
  journeyCta: string;
  confidentialityNote: string;
  supportingStats?: { display: string; label: string }[];
};
