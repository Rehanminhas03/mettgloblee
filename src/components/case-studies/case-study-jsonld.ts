import { SITE_URL } from '@/lib/site';
import { caseStudyPath } from '@/content/operations-case-studies';
import type { CaseStudy } from './types';

/**
 * Minimal structured data: WebPage plus BreadcrumbList, tied to the existing
 * Organization. No unknown dates, authors, images or ratings, and no FAQPage
 * markup (Google retired FAQ rich results). Serialise with `JsonLd`, which
 * escapes `<`.
 */
export function caseStudyJsonLd(study: CaseStudy) {
  const url = SITE_URL + caseStudyPath(study.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: study.title,
        description: study.seo.description,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${SITE_URL}/portfolio`,
          },
          { '@type': 'ListItem', position: 3, name: study.title, item: url },
        ],
      },
    ],
  };
}
