'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Mount decorative orbit layers after the first paint and pause off-screen. */
export function IdleMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const supportsIdle = typeof window.requestIdleCallback === 'function';
    const mount = () => setReady(true);
    const idle = supportsIdle
      ? window.requestIdleCallback(mount, { timeout: 1500 })
      : window.setTimeout(mount, 100);
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.motionActive = String(entry.isIntersecting);
    });
    observer.observe(element);
    return () => {
      if (supportsIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={ref}
      data-idle-motion
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      {ready ? children : null}
    </div>
  );
}
