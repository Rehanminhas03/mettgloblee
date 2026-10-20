import { InterfaceScene } from './InterfaceScenes';
import s from './interface-scenes.module.css';

/** Labelled process illustrations; equivalent project scope remains in HTML. */
export function CardVisual({ slug }: { slug: string }) {
  return (
    <svg
      className={s.world}
      viewBox="0 0 640 460"
      width="640"
      height="460"
      aria-hidden="true"
      focusable="false"
      data-scene={slug}
    >
      <InterfaceScene slug={slug} />
    </svg>
  );
}
