import Link from 'next/link';
import { SERVICE_GUIDANCE } from '@/lib/service-guidance';
import type { ServicePath } from '@/lib/services';

export function ServiceGuidance({ path }: { path: ServicePath }) {
  const guidance = SERVICE_GUIDANCE[path];
  return (
    <>
      <section
        className="max-b620:px-6 px-[8vw] py-16"
        aria-labelledby="service-work-heading"
      >
        <h2
          id="service-work-heading"
          className="mb-8 text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-[-.04em]"
        >
          Explore the work behind the service
        </h2>
        <div className="max-b900:grid-cols-1 grid grid-cols-3 gap-5">
          {guidance.links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="group border-p-line hover:border-p-gold focus-visible:outline-p-gold rounded-3xl border bg-white p-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 flex flex-col justify-between"
            >
              <div>
                {link.badge ? (
                  <span className="mb-3 block text-[10px] font-black tracking-[.12em] text-p-gold uppercase">
                    {link.badge}
                  </span>
                ) : null}
                <h3 className="m-0 text-2xl leading-[1.2] tracking-[-.03em]">
                  {link.title}
                </h3>
                <p className="text-p-muted mt-4 mb-0 text-base leading-[1.7]">
                  {link.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {guidance.secondarySection ? (
          <div className="mt-12">
            <h3 className="mb-6 text-[12px] font-black tracking-[.18em] text-p-gold uppercase">
              {guidance.secondarySection.heading}
            </h3>
            <div className="max-b900:grid-cols-1 grid grid-cols-3 gap-5">
              {guidance.secondarySection.links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group border-p-line hover:border-p-gold focus-visible:outline-p-gold rounded-3xl border bg-white p-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 flex flex-col justify-between"
                >
                  <div>
                    {link.badge ? (
                      <span className="mb-3 block text-[10px] font-black tracking-[.12em] text-p-gold uppercase">
                        {link.badge}
                      </span>
                    ) : null}
                    <h4 className="m-0 text-2xl leading-[1.2] tracking-[-.03em]">
                      {link.title}
                    </h4>
                    <p className="text-p-muted mt-4 mb-0 text-base leading-[1.7]">
                      {link.copy}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      <section
        className="max-b620:px-6 px-[8vw] py-16"
        aria-labelledby="service-questions-heading"
      >
        <div className="max-w-[900px]">
          <h2
            id="service-questions-heading"
            className="mb-8 text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-[-.04em]"
          >
            Questions about this service
          </h2>
          {guidance.questions.map(item => (
            <details
              key={item.question}
              className="border-p-line border-t py-5 last:border-b"
            >
              <summary className="focus-visible:outline-p-gold cursor-pointer text-lg leading-[1.5] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                {item.question}
              </summary>
              <p className="text-p-muted mt-4 mb-0 max-w-[780px] text-base leading-[1.8]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
