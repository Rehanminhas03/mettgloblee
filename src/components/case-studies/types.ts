/**
 * Public types for the operations case studies. This file holds no records and
 * no internal editorial notes; the records live in `content/`.
 */
export type FigureKind =
  'recovery' | 'accuracy' | 'sourcing' | 'invoice' | 'channels' | 'etsy';

export type ScopeSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
};

export type CaseStudy = {
  slug: string;
  order: number;
  category: string;
  client: string;
  projectType: string;
  scope: string;
  /** H1, breadcrumb current item and card title (see lib/caseNames). */
  title: string;
  /** Line under the H1 and under card titles. */
  subtitle: string;
  headline: string;
  summary: string;
  hero: {
    /** The figure shown in the hero and counted up by the enhancer. */
    display: string;
    accessible: string;
    /** Small-caps label under the figure. */
    label: string;
    /** Unit shown on the same line as the figure (optional). */
    unit?: string;
    /** One-line context under the label. */
    context: string;
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
  /** Extra headed paragraphs shown after Approach. */
  extras?: { heading: string; body: string }[];
  resultHeading: string;
  result: string;
  closing: string;
  auditOffer?: {
    eyebrow?: string;
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    badge?: string;
  };
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
  /** Courier names shown as badges (claims study). */
  couriers?: string[];
  /** Two-part scope block shown after Approach (claims study). */
  scopeSections?: ScopeSection[];
  /** Catalogue screenshots shown below the figure (Etsy study). */
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
};
