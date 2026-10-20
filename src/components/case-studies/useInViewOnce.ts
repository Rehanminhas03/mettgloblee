'use client';

import { useEffect, useRef } from 'react';

/** The static final graphic stays visible if JavaScript or observation fails. */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) {
      element.dataset.inview = 'true';
      return;
    }
    element.dataset.inview = 'pending';
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        element.dataset.inview = 'true';
        observer.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    const settle = () => {
      if (!preference.matches) return;
      element.dataset.inview = 'true';
      observer.disconnect();
    };
    preference.addEventListener('change', settle);
    observer.observe(element);
    return () => {
      preference.removeEventListener('change', settle);
      observer.disconnect();
    };
  }, []);
  return ref;
}
