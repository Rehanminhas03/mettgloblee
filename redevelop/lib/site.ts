/**
 * Site-wide constants, carried over from the original static build.
 *
 * The old Vite build injected the analytics and consent behaviour through a
 * `transformIndexHtml` plugin in `vite.config.ts`; here they are plain data
 * consumed by the App Router.
 */

export const SITE_URL = 'https://www.mettglobal.com';

/** Google Analytics 4 measurement ID (was hard-coded in the Vite plugin). */
export const GA_MEASUREMENT_ID = 'G-PCBE7G3NXQ';

/** localStorage key shared by the cookie banner and the analytics loader. */
export const CONSENT_STORAGE_KEY = 'mett_cookie_consent';

/** Form endpoint used by every enquiry form on the original site. */
export const FORM_ENDPOINT = 'https://formsubmit.co/contact@mettglobal.com';
export const FORM_SUCCESS_URL = `${SITE_URL}/contact-success`;
