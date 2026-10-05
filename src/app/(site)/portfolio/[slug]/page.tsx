import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Btn, Section, SectionHead } from '@/components/page/ui';
import { CaseHero, ChallengeGrid, Workflow } from '@/components/page/case';
import { AdminDashboardPreview } from '@/components/page/AdminDashboardPreview';
import {
  CeoPortalPreview,
  ManagerPortalPreview,
} from '@/components/page/PortalPreviews';
import { JsonLd } from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { PROJECTS, getProject, type Project } from '@/lib/projects';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return PROJECTS.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const { title, description } = project.seo;
  const url = `${SITE_URL}/portfolio/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'MettGlobal',
      type: 'website',
      locale: 'en_PK',
      images: [{ url: `${SITE_URL}/social-card.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/social-card.png`],
    },
  };
}

function breadcrumb(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${SITE_URL}/portfolio`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.brand,
        item: `${SITE_URL}/portfolio/${project.slug}`,
      },
    ],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const links = project.links.length ? (
    <span className="flex flex-wrap gap-3">
      {project.links.map((link, index) => (
        <Btn
          key={link.href}
          href={link.href}
          variant={index === 0 ? 'dark' : 'plain'}
        >
          {link.label} ↗
        </Btn>
      ))}
    </span>
  ) : null;

  return (
    <PageShell>
      <JsonLd data={breadcrumb(project)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': project.caseStudy ? 'Article' : 'CreativeWork',
          name: project.brand,
          headline: project.seo.title.split('|')[0].trim(),
          description: project.seo.description,
          url: `${SITE_URL}/portfolio/${project.slug}`,
          inLanguage: 'en',
          dateModified: '2026-10-06',
          author: { '@id': `${SITE_URL}/#organization` },
          publisher: { '@id': `${SITE_URL}/#organization` },
        }}
      />

      {project.caseStudy && project.kpis ? (
        <CaseHero
          tone="dark"
          crumb={project.brand}
          kicker={`${project.sector.toUpperCase()} · CASE STUDY`}
          titleTop={project.title}
          titleAccent={project.accent}
          lede={project.lede}
          panelLabel={project.panel.label}
          panelValue={project.panel.value}
          panelCopy={project.panel.copy}
          kpis={project.kpis}
        />
      ) : (
        <PageHero
          kicker={`PORTFOLIO / ${project.sector.toUpperCase()}`}
          title={
            <>
              {project.title}
              <br />
              <HeroAccent>{project.accent}</HeroAccent>
            </>
          }
          actions={links}
        >
          {project.lede}
        </PageHero>
      )}

      {project.caseStudy && links ? (
        <Section className="!pt-[60px] !pb-0">{links}</Section>
      ) : null}

      {project.glance ? (
        <Section className="!pt-[60px] !pb-0">
          <dl className="max-b900:grid-cols-2 max-b620:grid-cols-1 m-0 grid grid-cols-4 gap-3">
            {project.glance.map(item => (
              <div
                key={item.label}
                className="border-p-line rounded-[18px] border bg-white p-5"
              >
                <dt className="text-p-gold text-[10px] font-black tracking-[.14em] uppercase">
                  {item.label}
                </dt>
                <dd className="m-0 mt-2 text-[17px] leading-[1.3] font-bold">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      ) : null}

      <Section>
        <SectionHead heading={project.about.heading}>
          {project.about.copy}
        </SectionHead>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {project.scope.map(item => (
            <li
              key={item}
              className="border-p-line text-p-muted rounded-full border px-4 py-[7px] text-[11px] font-bold tracking-[.08em] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {project.challenges ? (
        <Section className="!pt-0">
          <div className="mb-[35px]">
            <SectionHead heading="The challenge">
              Day-to-day selling was held together by tools that were never
              designed to work as one system.
            </SectionHead>
          </div>
          <ChallengeGrid items={project.challenges} />
        </Section>
      ) : null}

      <Section className="bg-[#f6f1e7]">
        <div className="mb-[35px]">
          <SectionHead heading={project.delivered.heading}>
            {project.delivered.copy}
          </SectionHead>
        </div>
        <ChallengeGrid items={project.delivered.blocks} />
      </Section>

      {project.flow ? (
        <Section>
          <SectionHead heading={project.flow.heading}>
            {project.flow.copy}
          </SectionHead>
          <Workflow
            steps={project.flow.steps.map((label, index) => ({
              num: String(index + 1).padStart(2, '0'),
              label,
            }))}
          />
        </Section>
      ) : null}

      {project.slug === 'sfykea' ? (
        <Section className="bg-[#f6f1e7]">
          <SectionHead heading="The admin portal dashboard">
            The owner’s view of the whole operation: today’s orders and booked
            slots, bookings by area and partner, riders, customers and locations
            — all read live from the same Firebase data the app writes to.
          </SectionHead>
          <AdminDashboardPreview />
        </Section>
      ) : null}

      {project.portals ? (
        <Section className="bg-[#f6f1e7]">
          <SectionHead heading="Inside the portals">
            Each role gets its own portal. Below: the sales manager’s portal and
            the CEO portal that brings every showroom and department into a
            single view — both built in the same interface.
          </SectionHead>
          <div className="grid gap-12">
            <figure className="m-0">
              <ManagerPortalPreview />
              <figcaption className="text-p-muted mt-4 text-xs leading-[1.65]">
                Sales manager portal — illustrative layout with sample figures,
                not real dealership performance.
              </figcaption>
            </figure>
            <figure className="m-0">
              <CeoPortalPreview />
              <figcaption className="text-p-muted mt-4 text-xs leading-[1.65]">
                CEO portal — illustrative layout with sample figures. One view
                across every showroom and department.
              </figcaption>
            </figure>
          </div>
        </Section>
      ) : null}

      {project.tech ? (
        <Section>
          <SectionHead heading="Technology">
            A modern, reliable stack chosen for speed, security and room to
            grow.
          </SectionHead>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {project.tech.map(item => (
              <li
                key={item}
                className="bg-p-ink rounded-full px-4 py-2 text-[12px] font-bold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <ContactBand
        heading={
          <>
            Have something similar
            <br />
            in mind?
          </>
        }
        copy="Tell us what you want to build or improve and we will show you how we would approach it."
        ctaHref="/appointment"
        ctaLabel="Discuss a project"
      />
    </PageShell>
  );
}
