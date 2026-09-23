'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useHydrated } from '@/hooks/useHydrated';
import { CONSENT_STORAGE_KEY } from '@/lib/site';

function storedChoice() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    /* storage blocked — treat as undecided and show the banner */
    return null;
  }
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

  if (!hydrated || decided || storedChoice()) return null;

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      /* storage blocked — the choice simply is not remembered */
    }
    if (choice === 'accepted') window.mettLoadAnalytics?.(true);
    setDecided(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="max-b650:bottom-3 max-b650:left-3 max-b650:right-3 max-b650:block fixed right-[18px] bottom-[18px] left-[18px] z-[200] flex max-w-[760px] items-center justify-between gap-[18px] rounded-2xl border border-[rgba(201,152,44,.45)] bg-[#11110f] px-[18px] py-4 font-[Arial,sans-serif] text-[14px]/[1.45] text-white shadow-[0_18px_45px_rgba(0,0,0,.25)]"
    >
      <p className="m-0">
        We use analytics cookies to understand site usage and improve the
        experience.
      </p>
      <div className="max-b650:mt-3 flex flex-wrap items-center gap-[10px]">
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="cursor-pointer rounded-full border-0 bg-[#dfba64] px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold text-[#11110f]"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => decide('declined')}
          className="cursor-pointer rounded-full border border-[#5f594f] bg-transparent px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold text-white"
        >
          Decline
        </button>
        <Link
          href="/privacy"
          className="rounded-full border border-[#5f594f] px-[13px] py-[9px] font-[Arial,sans-serif] text-[12px] font-bold text-white"
        >
          Privacy
        </Link>
      </div>
    </div>
  );
}
