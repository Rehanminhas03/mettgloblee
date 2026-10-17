'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Tiny viewport gate. All content is rendered on the server and arrives as
 * `children`; no case-study record is ever passed in. When the figure nears the
 * viewport and reduced motion is not requested, the enhancement chunk is
 * imported once. A failed import leaves the static figure untouched, because no
 * "start" state class is ever added.
 */
export function MotionGate({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.matchMedia || !('IntersectionObserver' in window)) {
      return;
    }
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;

    let alive = true;
    let started = false;
    let cancelled = false;
    let stop: (() => void) | undefined;

    const observer = new IntersectionObserver(
      entries => {
        if (started || !entries.some(entry => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        void import('./enhance-visual.client')
          .then(({ enhanceVisual }) => {
            if (!alive || cancelled || preference.matches) return;
            stop = enhanceVisual(element);
          })
          .catch(() => {
            /* The static content is already complete. */
          });
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    );

    // Reduced motion switched on mid-animation: settle to the final state.
    const onPreferenceChange = () => {
      if (!preference.matches) return;
      cancelled = true;
      observer.disconnect();
      stop?.();
    };
    preference.addEventListener('change', onPreferenceChange);
    observer.observe(element);

    return () => {
      alive = false;
      observer.disconnect();
      preference.removeEventListener('change', onPreferenceChange);
      stop?.();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
