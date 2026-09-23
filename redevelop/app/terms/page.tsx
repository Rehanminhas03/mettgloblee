import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/terms');

const BLOCKS = [
  {
    heading: '1. Informational content',
    copy: 'Website pages, service descriptions, articles, policy briefs and field guides are provided for general informational purposes. They do not constitute legal, tax, financial or other regulated professional advice.',
  },
  {
    heading: '2. Service discussions',
    copy: 'Submitting an enquiry, sending a WhatsApp message or requesting a meeting does not create a client relationship or guarantee availability. A project begins only after scope, commercial terms and responsibilities are agreed in writing.',
  },
  {
    heading: '3. Accuracy and updates',
    copy: 'MettGlobal aims to keep website information current, but platforms, policies, fees and regulations change. Current briefs link to official sources where practical; visitors should verify time-sensitive information before acting.',
  },
  {
    heading: '4. Acceptable use',
    copy: 'You may use this website for lawful business and informational purposes. You must not attempt to disrupt the website, probe or bypass security controls, scrape the site in a way that harms its operation, submit malicious material or impersonate another person or organization.',
  },
  {
    heading: '5. Enquiries and submissions',
    copy: 'When you submit a form or contact MettGlobal, you agree that the information provided is accurate and that we may use it to respond to your request. Submission does not guarantee a reply, meeting, proposal or engagement.',
  },
  {
    heading: '6. Third-party platforms and links',
    copy: 'The website may link to Google, Meta/Instagram, WhatsApp, social networks, marketplaces and other third-party services. Those services operate under their own terms, availability and privacy practices. MettGlobal is not responsible for their content or availability.',
  },
  {
    heading: '7. Intellectual property',
    copy: "Unless otherwise stated, MettGlobal's original website copy, brand presentation, graphics and site design are owned by or licensed to MettGlobal. You may view and share links to the website for legitimate purposes, but you may not reproduce, republish, sell or substantially copy its content without written permission. Third-party names and marks remain the property of their respective owners.",
  },
  {
    heading: '8. Partner and portfolio references',
    copy: 'References to organizations, platforms or brands are presented as portfolio or service-context references and should not be interpreted as endorsement unless an endorsement is explicitly documented.',
  },
  {
    heading: '9. No guaranteed commercial outcome',
    copy: 'Business, advertising, marketplace, website, automation and operational outcomes depend on multiple factors. Website content does not promise a specific ranking, revenue result, conversion rate or other commercial outcome.',
  },
  {
    heading: '10. Disclaimer and limitation',
    copy: 'The website is provided on an “as available” basis. To the extent permitted by applicable law, MettGlobal does not guarantee uninterrupted availability or that every page will be error-free. Nothing in these website terms excludes liability that cannot legally be excluded.',
  },
  {
    heading: '11. Changes to these terms',
    copy: 'These terms may be updated when website functionality, integrations or service processes change. The current version will be published on this page. Material client obligations should continue to be documented in the applicable signed agreement.',
  },
  {
    heading: '12. Contact',
    copy: (
      <>
        Questions about these terms can be sent to{' '}
        <a href="mailto:contact@mettglobal.com">contact@mettglobal.com</a>. For
        privacy questions, see the <Link href="/privacy">Privacy page</Link>.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PageShell
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/sitemap', label: 'Sitemap' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/terms')} />

      <PageHero
        kicker="WEBSITE TERMS"
        title={
          <>
            Clear expectations.
            <br />
            <HeroAccent>Before an engagement begins.</HeroAccent>
          </>
        }
      >
        These website terms describe the use of MettGlobal&rsquo;s public
        website. Specific client work is governed by the proposal, scope,
        contract or other written terms agreed for that engagement.
      </PageHero>

      <ServiceLayout
        sideKicker="PUBLIC WEBSITE"
        sideHeading="Information, not a substitute for a signed scope."
        blocks={BLOCKS}
      />

      <ContactBand
        heading="Need to discuss a project?"
        copy="Use the project enquiry or booking flow and we will map the next appropriate step."
        ctaHref="/contact"
        ctaLabel="Contact MettGlobal"
      />
    </PageShell>
  );
}
