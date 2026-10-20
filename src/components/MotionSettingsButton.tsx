'use client';

import { useSyncExternalStore } from 'react';

const CHANGE_EVENT = 'mett-motion-change';
const STORAGE_KEY = 'mett_motion_paused';

function subscribe(notify: () => void) {
  window.addEventListener(CHANGE_EVENT, notify);
  return () => window.removeEventListener(CHANGE_EVENT, notify);
}

/** One persistent control pauses decorative motion without changing the scenes. */
export function MotionSettingsButton({ className }: { className?: string }) {
  const paused = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.motionPaused === 'true',
    () => false,
  );
  return (
    <button
      type="button"
      aria-pressed={paused}
      className={className}
      onClick={() => {
        document.documentElement.dataset.motionPaused = String(!paused);
        try {
          sessionStorage.setItem(STORAGE_KEY, String(!paused));
        } catch {
          // The current-page control still works when storage is unavailable.
        }
        window.dispatchEvent(new Event(CHANGE_EVENT));
      }}
    >
      {paused ? 'Resume animations' : 'Pause animations'}
    </button>
  );
}
