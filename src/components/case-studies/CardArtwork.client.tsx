'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import styles from './case-studies.module.css';

/** Observe each scene independently. No animation frames or React state per frame. */
export function CardArtwork({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      element.dataset.playing = String(
        visible &&
          !preference.matches &&
          document.visibilityState === 'visible',
      );
    };
    const observer = new IntersectionObserver(
      entries => {
        visible = entries.some(entry => entry.isIntersecting);
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={styles.artwork}
      aria-hidden="true"
      data-artwork
      data-playing="false"
    >
      {children}
    </div>
  );
}
