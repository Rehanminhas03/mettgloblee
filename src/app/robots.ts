import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Robots.txt configuration allowing standard search engines and
 * explicitly welcoming AI & LLM crawlers (AEO / Answer Engine Optimization).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'Bytespider',
          'CCBot',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

