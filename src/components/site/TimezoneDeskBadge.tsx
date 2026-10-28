'use client';

import { useEffect, useState } from 'react';

/**
 * Lightweight client-side helper that detects U.S. timezones.
 * Renders null during SSR and on non-US visitors to preserve 100% SEO safety.
 * On U.S. visitors, displays a subtle badge recommending the U.S. desk.
 */
export function TimezoneDeskBadge({
  label = 'Recommended for U.S. Time Zones',
  className = '',
}: {
  label?: string;
  className?: string;
}) {
  const [isUsTimezone, setIsUsTimezone] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz.startsWith('America/')) {
        setIsUsTimezone(true);
      }
    } catch {
      // Fallback silently if Intl is unavailable
    }
  }, []);

  if (!isUsTimezone) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[rgba(224,188,104,0.4)] bg-[rgba(224,188,104,0.12)] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-p-gold uppercase ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-p-gold animate-pulse" />
      {label}
    </span>
  );
}
