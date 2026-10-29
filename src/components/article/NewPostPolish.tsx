'use client';

import { useEffect, useState } from 'react';

/**
 * Subtle polish component exclusively for new blog posts.
 * Includes a reading progress bar and respect for prefers-reduced-motion.
 * Does NOT alter or affect any protected pages or existing blog posts.
 */
export function NewPostPolish() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle top reading progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#d2b26a] via-[#e2c98a] to-[#d2b26a] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .new-post-content section,
          .new-post-content article,
          .new-post-content h2 {
            animation: subtleFadeIn 0.5s ease-out both;
          }
        }
        @keyframes subtleFadeIn {
          from {
            opacity: 0.88;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
