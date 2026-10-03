'use client';

import { useCallback, useState } from 'react';

const TAGS = {
  div: 'div',
  article: 'article',
  section: 'section',
  aside: 'aside',
} as const;

/**
 * `.reveal` / `.reveal.visible` from styles.css, driven by the same
 * IntersectionObserver threshold (0.12) that `src/main.ts` used.
 *
 * The observer is attached through a callback ref so it starts watching the
 * moment the node mounts and tears itself down when it unmounts.
 * `motion-reduce:` restores the final state immediately, matching the
 * stylesheet's reduced-motion block.
 */
export function Reveal({
  as = 'div',
  className = '',
  children,
}: {
  as?: keyof typeof TAGS;
  className?: string;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  const observe = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = TAGS[as];

  return (
    <Tag
      ref={observe}
      className={`transition-[opacity,transform] duration-[.8s] ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
