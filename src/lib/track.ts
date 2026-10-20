/**
 * Sends a GA4 event. `gtag` only exists once the visitor has accepted
 * analytics. Check the current choice too: the library remains loaded after
 * consent is withdrawn. Never pass
 * names, emails, phone numbers or free-text briefs as parameters.
 */
export function track(event: string, params: Record<string, string> = {}) {
  if (!window.mettAnalyticsConsentEnabled) return;
  window.gtag?.('event', event, {
    page_location: location.href,
    ...params,
  });
}
