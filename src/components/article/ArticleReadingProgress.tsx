'use client';

import { useEffect, useState } from 'react';

export function ArticleReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-p-gold via-[#dfba64] to-[#e8cb7d] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(223,186,100,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
