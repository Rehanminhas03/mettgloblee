'use client';

import { useHydrated } from '@/hooks/useHydrated';

/**
 * `[data-year]` from main.ts. Resolved in the browser so a cached page never
 * shows a stale copyright year.
 */
export function CurrentYear() {
  const hydrated = useHydrated();
  return (
    <i className="not-italic">{hydrated ? new Date().getFullYear() : null}</i>
  );
}
