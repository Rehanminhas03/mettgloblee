'use client';

import { useEffect, useRef } from 'react';

/**
 * Plays an element's entrance once, when it scrolls into view. Server HTML is
 * the complete final state; after hydration the element is marked "pending"
 * (graphics reset), then "true" when visible so CSS transitions draw them in.
 * With reduced motion nothing is reset. CSS does the animation, not JS.
 */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;
    el.dataset.inview = 'pending';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.dataset.inview = 'true';
        io.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
