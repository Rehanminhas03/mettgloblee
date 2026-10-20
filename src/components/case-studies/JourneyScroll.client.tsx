'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * The journey list with a scroll-driven spine: a gold line fills down the
 * rail as the reader moves through the six stops, and each milestone lights up
 * once the line reaches it.
 *
 * The list items are server-rendered children. Without JavaScript, with
 * reduced motion, or if anything fails, the spine is simply complete and every
 * milestone is lit (the base CSS), so nothing is ever hidden or half-drawn.
 */
export function JourneyScroll({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || !window.matchMedia) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;

    const milestones = [
      ...list.querySelectorAll<HTMLElement>('[data-milestone]'),
    ];
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      // The reading line sits a little below the middle of the viewport.
      const anchor = window.innerHeight * 0.55;
      // The spine runs from the first to the last milestone (20px insets).
      const spineTop = rect.top + 20;
      const spineHeight = Math.max(1, rect.height - 40);
      const progress = Math.min(
        1,
        Math.max(0, (anchor - spineTop) / spineHeight),
      );
      list.style.setProperty('--journey-progress', progress.toFixed(4));
      milestones.forEach(milestone => {
        const box = milestone.getBoundingClientRect();
        milestone.dataset.reached = String(box.top + box.height / 2 <= anchor);
      });
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Switch from the complete static spine to the scroll-driven one.
    list.dataset.enhanced = 'true';
    update();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);

    const settle = () => {
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
      if (frame) cancelAnimationFrame(frame);
      delete list.dataset.enhanced;
      list.style.removeProperty('--journey-progress');
      milestones.forEach(milestone => delete milestone.dataset.reached);
    };
    // Reduced motion switched on later: return to the static spine.
    const onPreferenceChange = () => {
      if (preference.matches) settle();
    };
    preference.addEventListener('change', onPreferenceChange);

    return () => {
      preference.removeEventListener('change', onPreferenceChange);
      settle();
    };
  }, [ref]);

  return (
    <ol ref={ref} className={className}>
      {children}
    </ol>
  );
}
