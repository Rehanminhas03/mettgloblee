'use client';

import { useEffect } from 'react';

type DataLayerEvent = Record<string, string | number | boolean>;

const track = (event: string, details: DataLayerEvent = {}) => {
  window.dataLayer?.push({ event, ...details });
};

/**
 * The `dataLayer` events `src/main.ts` pushed from the homepage: contact-form
 * submissions, outbound contact clicks and a page-performance sample.
 *
 * This is separate from the GA4 tag in `components/Analytics.tsx`, which is
 * site-wide; both existed side by side on the original homepage.
 */
export function HomeTracking() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];

    const onSubmit = (event: Event) => {
      if ((event.target as HTMLElement)?.closest?.('form')) {
        track('contact_form_submit');
      }
    };

    const onClick = (event: MouseEvent) => {
      const link =
        event.target instanceof Element ? event.target.closest('a') : null;
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      if (href.startsWith('https://wa.me/')) {
        track('whatsapp_click', {
          location: link.closest('aside.fixed') ? 'floating' : 'contact',
        });
      } else if (href.startsWith('tel:')) track('phone_click');
      else if (href.startsWith('mailto:')) track('email_click');
      else if (link.hasAttribute('data-google-review-link'))
        track('google_review_click');
      else if (href.includes('/appointment'))
        track('appointment_intent', {
          label: link.textContent?.trim() ?? 'meeting',
        });
      else if (href === '#contact')
        track('contact_intent', {
          label: link.textContent?.trim() ?? 'contact',
        });
    };

    const onLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as
        PerformanceNavigationTiming | undefined;
      if (!navigation) return;
      track('page_performance', {
        dom_content_loaded_ms: Math.round(navigation.domContentLoadedEventEnd),
        load_ms: Math.round(navigation.loadEventEnd),
      });
    };

    document.addEventListener('submit', onSubmit);
    document.addEventListener('click', onClick);
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);

    return () => {
      document.removeEventListener('submit', onSubmit);
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return null;
}
