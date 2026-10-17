'use client';

/**
 * Container-scroll effect, after Aceternity UI's "Container Scroll Animation":
 * a card that starts tilted back and slightly small, then flattens and grows
 * to its natural size as it scrolls into the reading position.
 *
 * Children are server-rendered and never hidden. The tilt is applied only
 * after hydration and never with `prefers-reduced-motion`, so without
 * JavaScript, or for visitors who ask for less motion, the card is simply
 * shown flat at full size.
 */
import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useHydrated } from '@/hooks/useHydrated';

/** Starting tilt in degrees and starting scale; the end state is 0deg and 1. */
const START_TILT = 18;
const START_SCALE = 0.94;

export function ScrollTilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();

  // 0 when the card's top edge enters the bottom of the screen, 1 when it
  // reaches about a third of the way down: the effect is done before reading.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 35%'],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [START_TILT, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [START_SCALE, 1]);

  const animated = hydrated && !reduceMotion;

  return (
    <div ref={ref} className={className} style={{ perspective: '1000px' }}>
      <motion.div
        style={
          animated
            ? { rotateX, scale, transformOrigin: 'center top' }
            : undefined
        }
        className={animated ? 'will-change-transform' : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}
