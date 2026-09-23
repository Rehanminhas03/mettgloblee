export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    /** Defined by `components/Analytics.tsx`; loads GA4 once consent allows. */
    mettLoadAnalytics?: (grantAnalytics: boolean) => void;
    mettAnalyticsReady?: boolean;
  }
}
