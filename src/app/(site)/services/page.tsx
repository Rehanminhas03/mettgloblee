import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';
import { SERVICES } from '@/lib/services';

export const metadata = pageMetadata('/services');

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/services')} />
      <JsonLd data={pageJsonLd('/services', 'CollectionPage')} />

      {/* .hero */}
      <section className="max-b620:px-6 max-b620:pt-14 max-b620:pb-12 max-w-[1320px] px-[8vw] pt-20 pb-16">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          CAPABILITIES
        </span>
        <h1 className="my-[24px] mb-[34px] text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-.045em]">
          Four services.
          <br />
          <span className="text-p-gold">One connected team.</span>
        </h1>
        <p className="text-p-muted max-b620:text-[16px] my-[1em] max-w-[780px] text-[18px] leading-[1.75]">
          Digital Marketing & Growth, Web & Software Development, AI Automation
          & Content, and E-Commerce & Supply Chain — combined around your
          business problem instead of sold as separate silos.
        </p>
      </section>

      {/* .section > .grid */}
      <section className="max-b620:px-6 px-[8vw] pb-[90px]">
        <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-4">
          {SERVICES.map(service => (
            <article
              key={service.href}
              className="border-p-line flex flex-col rounded-3xl border bg-white/[.62] p-8"
            >
              <small className="text-p-gold text-[10px] font-black tracking-[.16em]">
                {service.num}
              </small>
              <h2 className="mt-[18px] mb-3 text-[30px] leading-[1.08] tracking-[-.035em]">
                {service.title}
              </h2>
              <p className="text-p-muted m-0 leading-[1.7]">
                {service.summary}
              </p>
              <ul className="border-p-line max-b620:grid-cols-1 m-0 my-6 grid list-none grid-cols-2 gap-x-5 gap-y-[10px] border-t p-0 pt-6">
                {service.highlights.map(highlight => (
                  <li
                    key={highlight}
                    className="before:text-p-gold relative pl-5 text-sm leading-[1.45] before:absolute before:left-0 before:content-['✓']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="text-p-gold mt-auto text-xs font-black"
              >
                Explore {service.title} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* .contact-band */}
      <section className="max-b620:px-6 bg-[linear-gradient(135deg,#c89528,#e1bc67)] px-[8vw] py-[90px]">
        <h2 className="mt-0 mb-6 text-[clamp(34px,4.2vw,58px)] leading-[1.02] tracking-[-.045em]">
          Start with the constraint.
          <br />
          Not the service list.
        </h2>
        <p className="my-[1em] max-w-[700px] leading-[1.7]">
          Tell us where the business is stuck. We will map the problem to the
          right combination of strategy, creative, technology and operations.
        </p>
        <Link
          href="/appointment"
          className="border-p-ink bg-p-ink inline-flex items-center justify-center rounded-full border px-5 py-[15px] text-xs font-extrabold text-white"
        >
          Book a diagnostic meeting
        </Link>
      </section>
    </PageShell>
  );
}
