'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * `false` during server render and the first client render, `true` afterwards.
 *
 * Values that can only be known in the browser — the visitor's date, timezone
 * or stored consent — are derived from this rather than assigned in an effect,
 * so the server and client markup always agree on the first paint.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
