'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useInViewOnce } from './useInViewOnce';
import styles from './case-studies.module.css';

/**
 * Horizontal swipe row for the homepage result cards. The cards are
 * server-rendered children in a native scroll-snap row, so swiping, trackpad
 * scrolling and keyboard focus work without this code. It adds decorative
 * pagination dots and a "Swipe" hint where the row overflows, and plays the
 * card graphics once as the row enters view. No arrows and no autoplay.
 */
export function ProofCarousel({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  const view = useInViewOnce<HTMLDivElement>();
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = card.offsetWidth + gap;
      setActive(Math.min(count - 1, Math.round(el.scrollLeft / step)));
    };
    const measure = () => setOverflows(el.scrollWidth > el.clientWidth + 1);
    measure();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [count]);

  return (
    <div ref={view}>
      <ul ref={track} className={styles.proofTrack}>
        {children}
      </ul>
      {overflows ? (
        <div className={styles.proofPager} aria-hidden="true">
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className={i === active ? styles.dotActive : styles.dot}
            />
          ))}
          <span className={styles.swipeHint}>Swipe</span>
        </div>
      ) : null}
    </div>
  );
}
