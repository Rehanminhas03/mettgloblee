'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useHydrated } from '@/hooks/useHydrated';
import {
  CONSENT_STORAGE_KEY,
  COOKIE_SETTINGS_EVENT,
  GA_MEASUREMENT_ID,
} from '@/lib/site';

function storedChoice() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    /* storage blocked, treat as undecided and show the banner */
    return null;
  }
}

const CONSENT_SIGNALS = [
  'analytics_storage',
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
] as const;

function grantConsent() {
  window.mettAnalyticsConsentEnabled = true;
  Object.assign(window, { [`ga-disable-${GA_MEASUREMENT_ID}`]: false });
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
}

/** Denies every consent signal and removes the Google Analytics cookies. */
function withdrawConsent() {
  window.mettAnalyticsConsentEnabled = false;
  Object.assign(window, { [`ga-disable-${GA_MEASUREMENT_ID}`]: true });
  window.gtag?.(
    'consent',
    'update',
    Object.fromEntries(CONSENT_SIGNALS.map(signal => [signal, 'denied'])),
  );

  const root = location.hostname.replace(/^www\./, '');
  document.cookie
    .split(';')
    .map(cookie => cookie.split('=')[0].trim())
    .filter(name => name === '_ga' || name.startsWith('_ga_'))
    .forEach(name => {
      const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = expired;
      document.cookie = `${expired}; domain=.${root}`;
    });
}

/**
 * Cookie preferences banner, ported from the markup, styles and behaviour the
 * Vite plugin appended to every page's `<body>`.
 *
 * Nothing renders until the client confirms no choice is stored, so visitors
 * who already decided never see a flash of the banner.
 */
export function ConsentBanner() {
  const hydrated = useHydrated();
  const [decided, setDecided] = useState(false);
  /* Set by the footer "Cookie settings" button to reopen a saved choice. */
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  /* Publish the banner's height so the floating contact buttons clear it. */
  const measure = useCallback((node: HTMLDivElement | null) => {
    if (!node) {
      delete document.documentElement.dataset.cookieOpen;
      document.body.style.removeProperty('--consent-height');
      return;
    }
    document.documentElement.dataset.cookieOpen = '';
    const updateHeight = () =>
      document.body.style.setProperty(
        '--consent-height',
        `${node.getBoundingClientRect().height}px`,
      );
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);
    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.cookieOpen;
      document.body.style.removeProperty('--consent-height');
    };
  }, []);

  if (!hydrated || !(reopened || (!decided && !storedChoice()))) return null;

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      /* storage blocked, the choice simply is not remembered */
    }
    if (choice === 'accepted') {
      /* Already loaded earlier this session (accepted, declined, accepted
         again): the loader is a no-op, so grant consent directly. */
      if (window.mettAnalyticsReady) grantConsent();
      else window.mettLoadAnalytics?.(true);
    } else {
      withdrawConsent();
    }
    setDecided(true);
    setReopened(false);
  };

  return (
    <div
      ref={measure}
      role="dialog"
      aria-label="Cookie preferences"
      data-consent-banner
      className="max-b650:bottom-3 max-b650:left-3 max-b650:right-3 max-b650:block fixed right-[18px] bottom-[18px] left-[18px] z-[200] flex max-w-[860px] items-center justify-between gap-6 rounded-2xl border border-[rgba(201,152,44,.45)] bg-[#11110f] px-[18px] py-4 font-[Arial,sans-serif] text-[14px]/[1.45] text-white shadow-[0_18px_45px_rgba(0,0,0,.25)]"
    >
      <p className="m-0 min-w-0 flex-1">
        We use analytics cookies to understand site usage and improve the
        experience.
      </p>
      <div className="max-b650:mt-3 flex flex-none flex-wrap items-center gap-[10px] sm:flex-nowrap">
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="cursor-pointer rounded-full border-0 bg-[#dfba64] px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold whitespace-nowrap text-[#11110f]"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => decide('declined')}
          className="cursor-pointer rounded-full border border-[#5f594f] bg-transparent px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold whitespace-nowrap text-white"
        >
          Decline
        </button>
        <Link
          href="/privacy"
          className="rounded-full border border-[#5f594f] px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold whitespace-nowrap text-white"
        >
          Privacy
        </Link>
      </div>
    </div>
  );
}
