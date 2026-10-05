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

/** Office address and its Google Maps link. */
export const ADDRESS_LINE =
  'Plot # 195, Street 1, I-10/3, Islamabad 44000, Pakistan';
export const MAPS_URL = 'https://maps.app.goo.gl/9PrdtKZQhU1X93em7';

/** Same inbox, via FormSubmit's background (AJAX) endpoint — no redirect. */
export const FORM_AJAX_ENDPOINT =
  'https://formsubmit.co/ajax/contact@mettglobal.com';
