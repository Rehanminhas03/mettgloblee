/**
 * Optional motion only. This module owns no website copy: it animates
 * elements that the server already rendered in their final state. Every
 * animation uses `fill: 'none'`, so finishing or cancelling reveals the
 * complete static base.
 */
const MAX_TOTAL_MS = 1400;

function milliseconds(value: string, fallback: number) {
  const text = value.trim();
  const number = Number.parseFloat(text);
  if (!Number.isFinite(number)) return fallback;
  if (text.endsWith('ms')) return number;
  if (text.endsWith('s')) return number * 1000;
  return fallback;
}

export function enhanceVisual(root: HTMLElement): () => void {
  // Timing comes from the CSS custom properties on `.scope` (one tuning place).
  const computed = getComputedStyle(root);
  const duration = Math.max(
    200,
    Math.min(
      MAX_TOTAL_MS,
      milliseconds(computed.getPropertyValue('--cs-duration'), 900),
    ),
  );
  const stagger = Math.max(
    0,
    Math.min(60, milliseconds(computed.getPropertyValue('--cs-stagger'), 45)),
  );
  const easing = computed.getPropertyValue('--cs-ease').trim() || 'ease-out';

  const animations: Animation[] = [];
  const frames = new Set<number>();
  const restore: (() => void)[] = [];
  let stopped = false;

  const settle = () => {
    stopped = true;
    frames.forEach(frame => cancelAnimationFrame(frame));
    frames.clear();
    animations.forEach(animation => animation.cancel());
    restore.forEach(reset => reset());
  };

  const animate = (element: Element, keyframes: Keyframe[], delay = 0) => {
    if (typeof element.animate !== 'function') return;
    // Row staggers must never stretch the effect past the overall limit.
    const boundedDelay = Math.min(delay, Math.max(0, MAX_TOTAL_MS - duration));
    animations.push(
      element.animate(keyframes, {
        duration,
        delay: boundedDelay,
        easing,
        fill: 'none',
      }),
    );
  };

  try {
    root
      .querySelectorAll<SVGGeometryElement>('[data-cs-draw]')
      .forEach(path => {
        const length = path.getTotalLength();
        animate(path, [
          { strokeDasharray: `${length}`, strokeDashoffset: `${length}` },
          { strokeDasharray: `${length}`, strokeDashoffset: '0' },
        ]);
      });

    root.querySelectorAll<HTMLElement>('[data-cs-reveal]').forEach(element => {
      animate(element, [
        { opacity: 0.35, transform: 'scaleX(.75)' },
        { opacity: 1, transform: 'scaleX(1)' },
      ]);
    });

    root.querySelectorAll<HTMLElement>('[data-cs-tile]').forEach(element => {
      const row = Number(element.dataset.csRow) || 0;
      animate(element, [{ opacity: 0.2 }, { opacity: 1 }], row * stagger);
    });

    // Count-up is an animation state only. The final text is server-rendered
    // and restored on completion, cancellation or any failure.
    root.querySelectorAll<HTMLElement>('[data-cs-number]').forEach(element => {
      const target = Number(element.dataset.csTarget);
      if (!Number.isFinite(target) || target <= 0) return;
      const finalText = element.textContent || '';
      const prefix = element.dataset.csPrefix || '';
      const suffix = element.dataset.csSuffix || '';
      const formatter = new Intl.NumberFormat('en-GB', {
        maximumFractionDigits: 0,
      });
      restore.push(() => {
        element.textContent = finalText;
      });
      const startedAt = performance.now();

      const tick = (now: number) => {
        if (stopped) return;
        const progress = Math.min(1, Math.max(0, (now - startedAt) / duration));
        if (progress === 1) {
          element.textContent = finalText;
          return;
        }
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${prefix}${formatter.format(Math.floor(target * eased))}${suffix}`;
        queue();
      };
      const queue = () => {
        const frame = requestAnimationFrame(now => {
          frames.delete(frame);
          tick(now);
        });
        frames.add(frame);
      };
      queue();
    });

    return settle;
  } catch {
    // A partial enhancement must also restore everything it changed.
    settle();
    return () => {};
  }
}
