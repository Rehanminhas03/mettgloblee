'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import styles from './case-studies.module.css';

/** Time (ms) between automatic slides. */
const AUTOPLAY_MS = 4500;

/**
 * Horizontal carousel for the homepage result cards. The cards are
 * server-rendered children in a native scroll-snap row, so swiping, trackpad
 * scrolling and keyboard focus all work without this code. It adds previous and
 * next buttons and a gentle autoplay. Autoplay never runs with reduced motion,
 * and stops while the pointer is over the carousel, while anything inside has
 * focus, while the tab is hidden, and after the visitor scrolls it themselves.
 */
export function ProofCarousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const touched = useRef(false);

  const step = (direction: 1 | -1, smooth: boolean) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const width = (card?.offsetWidth ?? el.clientWidth) + gap;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto';
    if (direction === 1 && atEnd) el.scrollTo({ left: 0, behavior });
    else el.scrollBy({ left: direction * width, behavior });
  };

  useEffect(() => {
    const el = track.current;
    if (!el || !window.matchMedia) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const timer = window.setInterval(() => {
      if (!paused.current && !touched.current && !document.hidden)
        step(1, true);
    }, AUTOPLAY_MS);

    // Anything the visitor does by hand ends autoplay for good.
    const stop = () => {
      touched.current = true;
    };
    el.addEventListener('pointerdown', stop);
    el.addEventListener('wheel', stop, { passive: true });
    return () => {
      window.clearInterval(timer);
      el.removeEventListener('pointerdown', stop);
      el.removeEventListener('wheel', stop);
    };
  }, []);

  return (
    <div
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <div className={styles.proofControls}>
        <button
          type="button"
          className={styles.proofArrow}
          aria-label="Previous results"
          onClick={() => {
            touched.current = true;
            step(-1, true);
          }}
        >
          ←
        </button>
        <button
          type="button"
          className={styles.proofArrow}
          aria-label="Next results"
          onClick={() => {
            touched.current = true;
            step(1, true);
          }}
        >
          →
        </button>
      </div>
      <ul ref={track} className={styles.proofTrack}>
        {children}
      </ul>
    </div>
  );
}
