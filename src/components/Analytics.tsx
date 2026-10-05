import Script from 'next/script';
import { CONSENT_STORAGE_KEY, GA_MEASUREMENT_ID } from '@/lib/site';

/**
 * Google Analytics 4 with Consent Mode v2, plus the delegated interaction
 * tracking the original site ran.
 *
 * This is a verbatim port of the inline `<script>` the Vite plugin injected
 * into every page's `<head>`: analytics storage is denied by default, the GA
 * library is only fetched once `mettLoadAnalytics` runs, and that only happens
 * when consent was previously accepted or the banner is accepted now.
 */
export function Analytics() {
  const inline = `
window.dataLayer = window.dataLayer || [];
window.mettAnalyticsReady = false;
window.mettLoadAnalytics = function (grantAnalytics) {
  if (window.mettAnalyticsReady) return;
  window.mettAnalyticsReady = true;
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
  if (grantAnalytics) gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('config', '${GA_MEASUREMENT_ID}');
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
  document.head.appendChild(script);
};
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'accepted') window.mettLoadAnalytics(true);
} catch (error) {}
document.addEventListener('click', function (event) {
  var link = event.target instanceof Element ? event.target.closest('a') : null;
  if (!link || typeof gtag !== 'function') return;
  var href = link.href || '';
  var eventName = href.indexOf('wa.me') !== -1 ? 'whatsapp_click' :
    href.indexOf('tel:') === 0 ? 'phone_click' :
    href.indexOf('mailto:') === 0 ? 'email_click' :
    href.indexOf('/appointment') !== -1 ? 'booking_click' : null;
  if (eventName) gtag('event', eventName, { link_url: href, page_location: location.href });
});
document.addEventListener('submit', function (event) {
  if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: event.target.id || 'website_form', page_location: location.href });
}, true);
`.trim();

  return (
    <Script
      id="mett-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: inline }}
    />
  );
}
