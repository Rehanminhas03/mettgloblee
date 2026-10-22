import { SITE_URL } from '@/lib/site';
import { caseStudyPath } from '@/content/operations-case-studies';
import type { CaseStudy } from './types';

function extractLocations(scope: string): Array<{ '@type': 'Country'; name: string }> {
  const map: Record<string, string> = {
    'US': 'United States',
    'USA': 'United States',
    'UK': 'United Kingdom',
    'Canada': 'Canada',
    'Germany': 'Germany',
    'EU': 'European Union',
    'UAE': 'United Arab Emirates',
    'Pakistan': 'Pakistan',
    'China': 'China',
    'France': 'France',
    'Italy': 'Italy',
    'Spain': 'Spain',
  };

  const countries: Array<{ '@type': 'Country'; name: string }> = [];
  for (const [key, name] of Object.entries(map)) {
    if (new RegExp(`\\b${key}\\b`, 'i').test(scope) && !countries.some(c => c.name === name)) {
      countries.push({ '@type': 'Country', name });
    }
  }
  return countries.length > 0 ? countries : [{ '@type': 'Country', name: 'United States' }];
}

/**
 * Structured data for operations case studies: WebPage, BreadcrumbList,
 * Article, geographic contentLocation, and FAQPage nodes for AI engines.
 */
export function caseStudyJsonLd(study: CaseStudy) {
  const url = SITE_URL + caseStudyPath(study.slug);
  const headline = study.seo.title.split('|')[0].trim();
  const locations = extractLocations(study.scope);

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: study.title,
      description: study.seo.description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      about: [study.category, ...(study.tags || [])],
      contentLocation: locations,
    },
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      isPartOf: { '@id': `${url}#webpage` },
      headline,
      description: study.seo.description,
      inLanguage: 'en',
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: [study.category, ...(study.tags || [])],
      contentLocation: locations,
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
  ];

  if (study.faqs && study.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: study.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
