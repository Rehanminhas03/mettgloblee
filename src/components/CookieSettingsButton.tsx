'use client';

import { COOKIE_SETTINGS_EVENT } from '@/lib/site';

/** Footer control that reopens the cookie banner so a choice can be changed. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
