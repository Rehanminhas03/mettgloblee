import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { CaseStudyHero } from './CaseStudyHero';
import { RelatedCaseStudies } from './RelatedCaseStudies';
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
    <PageShell>
      <div className={styles.scope}>
        <CaseStudyHero study={study} />

        <article className={styles.story} aria-label={study.title}>
          <Link className={styles.backLink} href="/portfolio#international">
            Back to international work
          </Link>

          {beats.map((beat, index) => (
            <Fragment key={beat.label}>
              <section className={styles.beat}>
                <p className={styles.eyebrow}>
                  <span aria-hidden="true">0{index + 1} </span>
                  {beat.label}
                </p>
                <h2>{beat.heading}</h2>
                <p>{beat.body}</p>
              </section>
              {beat.label === 'Approach' ? (
                <ApproachExtras study={study} />
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

/** Courier badges, scope sections and extra headed paragraphs that follow Approach. */
function ApproachExtras({ study }: { study: CaseStudy }) {
  return (
    <>
      {study.couriers?.length ? (
        <section className={styles.handled} aria-label="Couriers">
          <ul className={styles.chips}>
            {study.couriers.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {study.scopeSections?.map(section => (
        <section className={styles.beat} key={section.id} id={section.id}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
          <ul className={styles.chips}>
            {section.points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ))}
      {study.extras?.map(extra => (
        <section className={styles.beat} key={extra.heading}>
          <h2>{extra.heading}</h2>
          <p>{extra.body}</p>
        </section>
      ))}
    </>
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
