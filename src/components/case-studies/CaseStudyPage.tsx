import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { PageShell } from '@/components/page/PageShell';
import { CaseStudyHero } from './CaseStudyHero';
import { RelatedCaseStudies } from './RelatedCaseStudies';
import { ClaimsScope } from './ClaimsScope';
import type { CaseStudy } from './types';
import styles from './case-studies.module.css';

/**
 * Shared server-rendered detail page. PageShell supplies the header, footer,
 * skip link, <main> and `data-surface="page"`, so it behaves like every other
 * page on the site.
 */
export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const beats = [
    { label: 'Problem', heading: study.problemHeading, body: study.problem },
    { label: 'Approach', heading: study.approachHeading, body: study.approach },
    { label: 'Result', heading: study.resultHeading, body: study.result },
  ];

  return (
    <PageShell caseStudy>
      <div className={styles.scope}>
        <CaseStudyHero study={study} />

        <article className={styles.story} aria-label={study.title}>
          {beats.map((beat, index) => (
            <Fragment key={beat.label}>
              <section className={styles.beat} key={beat.label}>
                <p className={styles.eyebrow}>
                  <span aria-hidden="true">0{index + 1} </span>
                  {beat.label}
                </p>
                <h2>{beat.heading}</h2>
                <p>{beat.body}</p>
                {beat.label === 'Approach'
                  ? study.extras?.map(extra => (
                      <div
                        className={styles.approachDetail}
                        key={extra.heading}
                      >
                        <h3>{extra.heading}</h3>
                        <p>{extra.body}</p>
                      </div>
                    ))
                  : null}
              </section>
              {beat.label === 'Approach' &&
              study.scopeSections &&
              study.couriers ? (
                <ClaimsScope
                  couriers={study.couriers}
                  sections={study.scopeSections}
                />
              ) : null}
              {beat.label === 'Result' ? (
                <CatalogueImages study={study} />
              ) : null}
            </Fragment>
          ))}

          <section className={styles.handled}>
            <h2>What we handled</h2>
            <ul className={styles.chips}>
              {study.handled.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.questions}>
            <h2>Questions about this work</h2>
            {study.faqs.map(faq => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          {study.auditOffer ? (
            <section
              className="my-10 rounded-3xl border border-[rgba(224,188,104,0.35)] bg-gradient-to-br from-[#1c1a16] to-[#0f0e0c] p-8 text-white shadow-xl relative overflow-hidden"
              aria-labelledby="audit-offer-heading"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-[10px] font-black tracking-[.2em] text-p-gold uppercase">
                  {study.auditOffer.eyebrow || 'Zero-Risk Diagnostic'}
                </span>
                {study.auditOffer.badge ? (
                  <span className="rounded-full bg-emerald-950/80 border border-emerald-500/40 px-3 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    ✓ {study.auditOffer.badge}
                  </span>
                ) : null}
              </div>
              <h2
                id="audit-offer-heading"
                className="m-0 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {study.auditOffer.heading}
              </h2>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-[#c5beb0] sm:text-base max-w-[680px]">
                {study.auditOffer.body}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={study.auditOffer.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-p-gold hover:bg-[#e8cb7d] px-6 py-3.5 text-xs font-black text-black uppercase tracking-wider transition-transform hover:scale-[1.02]"
                >
                  {study.auditOffer.ctaLabel} →
                </Link>
                <span className="text-xs text-[#8e887d]">
                  No obligation · 100% Confidential
                </span>
              </div>
            </section>
          ) : null}

          <section className={styles.closing} aria-label="Discuss this work">
            <p className={styles.closingLine}>{study.closing}</p>
            <p>Tell us where your operation needs support.</p>
            <Link className={styles.button} href="/contact">
              {study.cta}
            </Link>
          </section>

          <RelatedCaseStudies study={study} />
        </article>
      </div>
    </PageShell>
  );
}

/** Catalogue screenshots shown under the Result (Etsy study). */
function CatalogueImages({ study }: { study: CaseStudy }) {
  if (!study.images?.length) return null;
  return (
    <div className={styles.catalogue}>
      {study.images.map(image => (
        <figure key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 900px) 100vw, 480px"
          />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
