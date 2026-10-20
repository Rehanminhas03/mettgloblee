'use client';

import { useCallback } from 'react';

const TAGS = {
  div: 'div',
  article: 'article',
  section: 'section',
  aside: 'aside',
} as const;

/** SSR is fully visible; optional motion never gates text or the LCP headline. */
export function Reveal({
  as = 'div',
  className = '',
  children,
}: {
  as?: keyof typeof TAGS;
  className?: string;
  children: React.ReactNode;
}) {
  const observe = useCallback((node: HTMLElement | null) => {
    if (!node || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        if (!preference.matches)
          animation = node.animate(
            [
              { opacity: 0.6, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'none' },
            ],
            { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)' },
          );
      },
      { threshold: 0.12 },
    );
    const settle = () => {
      if (preference.matches) {
        observer.disconnect();
        animation?.cancel();
      }
    };
    preference.addEventListener('change', settle);
    observer.observe(node);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener('change', settle);
    };
  }, []);
  const Tag = TAGS[as];
  return (
    <Tag ref={observe} className={className}>
      {children}
    </Tag>
  );
}
