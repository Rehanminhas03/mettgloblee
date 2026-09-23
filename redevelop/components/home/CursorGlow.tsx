'use client';

import { useEffect, useRef } from 'react';

/** `.cursor-glow` — a soft gold halo that trails the pointer above 900px. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      const node = ref.current;
      if (!node) return;
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="max-b900:hidden pointer-events-none fixed z-[2] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,137,45,0.09),transparent_68%)]"
    />
  );
}
