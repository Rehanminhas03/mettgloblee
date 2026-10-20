'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** A small scroll tilt, finished before the card reaches its reading position. */
export function ScrollTilt({
  children,
  className,
  disabled = false,
}: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    const card = root?.firstElementChild as HTMLElement | null;
    if (!root || !card || disabled) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let near = true;
    const update = () => {
      frame = 0;
      if (preference.matches) {
        card.style.transform = '';
        return;
      }
      if (!near) return;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - root.getBoundingClientRect().top) /
            (window.innerHeight * 0.3),
        ),
      );
      card.style.transform =
        progress === 1
          ? ''
          : `rotateX(${8 * (1 - progress)}deg) scale(${0.97 + 0.03 * progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            entries => {
              near = entries.some(entry => entry.isIntersecting);
              if (near) schedule();
            },
            { rootMargin: '100px' },
          )
        : undefined;
    observer?.observe(root);
    preference.addEventListener('change', schedule);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      preference.removeEventListener('change', schedule);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      card.style.transform = '';
    };
  }, [disabled]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: '1000px', overflow: 'clip' }}
    >
      <div style={{ transformOrigin: 'center top' }}>{children}</div>
    </div>
  );
}
