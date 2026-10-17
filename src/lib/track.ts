/**
 * Sends a GA4 event. `gtag` only exists once the visitor has accepted
 * analytics, so this is a no-op before consent or after a decline. Never pass
 * names, emails, phone numbers or free-text briefs as parameters.
 */
export function track(event: string, params: Record<string, string> = {}) {
  window.gtag?.('event', event, {
    page_location: location.href,
    ...params,
  });
}
