import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { Reveal } from './Reveal';

/** `.services` — compact capability grid linking to each service page. */
export function Services() {
  return (
    <section
      id="services"
      className="min-h-view px-pad max-b900:px-7 max-b900:py-[70px] max-b560:px-6 max-b560:py-[60px] short:py-8 flex flex-col justify-center bg-[#f1ede5] py-14"
    >
      <div className="text-gold text-[11px] font-extrabold tracking-[.2em] uppercase">
        01 / Services
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-5 short:mt-2 short:mb-5 mt-4 mb-8 grid grid-cols-[1fr_.7fr] items-end gap-[60px]">
        <h2 className="short:text-[40px] m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
          From storefront to supply chain.{' '}
          <span className="text-gold font-serif font-normal">
            From attention to automation.
          </span>
        </h2>
        <div>
          <p className="text-muted m-0 mb-5 max-w-[560px] text-base leading-[1.7]">
            Engage us for one focused problem or connect multiple capabilities
            into a single growth and operations program.
          </p>
          <Link
            href="/services"
            className="inline-block rounded-full bg-black px-6 py-[13px] text-[13px] font-extrabold text-white transition-colors hover:bg-[#2a2925]"
          >
            View all services
          </Link>
        </div>
      </Reveal>

      <div className="max-b1100:grid-cols-2 max-b560:grid-cols-1 grid grid-cols-4 gap-4">
        {SERVICES.map(service => (
          <Link
            key={service.href}
            href={service.href}
            className="group border-line bg-paper short:p-5 flex flex-col rounded-2xl border p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(184,137,45,.45)] hover:shadow-[0_18px_45px_rgba(31,27,19,.08)]"
          >
            <span className="text-gold text-[11px] font-black tracking-[.18em]">
              {service.num}
            </span>
            <h3 className="short:mt-3 mt-5 mb-3 text-[22px] leading-[1.2] tracking-[-.02em]">
              {service.title}
            </h3>
            <p className="text-muted m-0 mb-5 text-sm leading-[1.6]">
              {service.summary}
            </p>
            <ul className="border-line short:mb-4 short:gap-1.5 short:pt-3 m-0 mb-6 grid list-none gap-2 border-t p-0 pt-5">
              {service.highlights.map(item => (
                <li
                  key={item}
                  className="before:text-gold relative pl-5 text-[13px] leading-[1.45] before:absolute before:left-0 before:content-['✓']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span className="text-gold mt-auto text-[13px] font-black">
              Learn more{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
