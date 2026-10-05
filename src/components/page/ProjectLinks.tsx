import { Btn, Section } from './ui';

/** A row of outbound buttons (website, Instagram, Facebook…) under a hero. */
export function ProjectLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <Section className="!pt-[60px] !pb-0">
      <div className="flex flex-wrap gap-3">
        {links.map((link, index) => (
          <Btn
            key={link.href}
            href={link.href}
            variant={index === 0 ? 'dark' : 'plain'}
          >
            {link.label} ↗
          </Btn>
        ))}
      </div>
    </Section>
  );
}
