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

/** Window event that reopens the cookie banner (footer "Cookie settings"). */
export const COOKIE_SETTINGS_EVENT = 'mett:cookie-settings';

/** Office address and its Google Maps link. */
export const ADDRESS_LINE =
  'Plot # 195, Street 1, I-10/3, Islamabad 44000, Pakistan';
/** Business Profile share link supplied by the owner. */
export const BUSINESS_PROFILE_URL = 'https://share.google/4dQhYgKMuqcFVdiuL';
/** Office building pin; the building is listed on Google as NESL IT. */
export const MAPS_URL = 'https://maps.app.goo.gl/9PrdtKZQhU1X93em7';

/**
 * Official social profiles. The footer, the About page and the Organization
 * `sameAs` list all read from here so they cannot drift apart.
 */
export const SOCIAL_URLS = {
  linkedin: 'https://www.linkedin.com/company/mett-global/',
  facebook: 'https://www.facebook.com/mettglobal',
  instagram: 'https://www.instagram.com/mettglobal',
  tiktok: 'https://www.tiktok.com/@mett.global',
  youtube: 'https://youtube.com/@mettglobal',
  pinterest: 'https://www.pinterest.com/mettglobalinc',
  x: 'https://x.com/mettglobal',
} as const;

export const SOCIAL_PROFILES = [
  { label: 'LinkedIn', href: SOCIAL_URLS.linkedin },
  { label: 'Facebook', href: SOCIAL_URLS.facebook },
  { label: 'Instagram', href: SOCIAL_URLS.instagram },
  { label: 'TikTok', href: SOCIAL_URLS.tiktok },
  { label: 'YouTube', href: SOCIAL_URLS.youtube },
  { label: 'Pinterest', href: SOCIAL_URLS.pinterest },
  { label: 'X', href: SOCIAL_URLS.x },
];

/** Same inbox, via FormSubmit's background (AJAX) endpoint, no redirect. */
export const FORM_AJAX_ENDPOINT =
  'https://formsubmit.co/ajax/contact@mettglobal.com';
