# Website release — 20 October 2026

This release contains the locally reviewed Mett Global website changes on top of base commit `731c433e02dec168cc45af2c9836fc593f93873b`.

- Preserve the homepage hero and show international/local work as category cards, in that order.
- Refine portfolio layouts, bold titles and brand-colored process illustrations. Keep approved nine-second scenes, offscreen pausing and reduced-motion support; add a visitor pause control.
- Improve responsive typography, headings, navigation, contact controls and form behavior. Reject expired booking slots and provide email alternatives without JavaScript.
- Gate analytics events on the current consent state, clear cookies on withdrawal and track successful enquiries separately from submit attempts.
- Improve metadata, schema, internal discovery and preview noindex protection. Recheck time-sensitive article sources and use realistic reading times.
- Keep **Get directions** on the office building's Maps pin. Show **Google Business Profile** with its icon under the shared footer's **Connect** section. Keep `hasMap` and `sameAs` destinations distinct.
- Upgrade Next/ESLint to the versions validated in this release and remove the unused motion dependency.

## Validation

Production build, ESLint, TypeScript and whitespace checks passed. All 51 sitemap routes, 17 portfolio entries and 24 legacy redirects passed local validation. Responsive sweeps covered five widths down to 320px. Automated desktop/phone accessibility scans and targeted form, consent and navigation regressions passed. Footer placement was checked at 320, 390, 820, 1024 and 1440px.

Sequential local Lighthouse samples scored 90–96 on mobile and 99 on desktop, with accessibility/best-practices/SEO scores of 100 and CLS 0. These are lab measurements, not field Core Web Vitals or ranking guarantees.

## Release caveats

- Trusted-HTTPS physical iPhone/Safari validation and real FormSubmit inbox-delivery tests remain pending. Automated submissions were mocked; no real messages were sent.
- The bulk local WebKit sweep rendered without layout failures but reported RSC-prefetch errors. A separate navigation/back-navigation test passed. Recheck on trusted HTTPS.
- Production dependency audit reported zero known vulnerabilities. The development lint/glob chain has one unpatched `braces` advisory reflected in five audit entries; do not force a framework downgrade to silence it.
- Search Console indexing, real analytics reception and production hosting behavior require post-deployment checks.

The user explicitly authorized publishing a separate branch and merging it into `main`. The rollback baseline is the base commit above; use a normal revert or hosting rollback rather than rewriting shared history.

Large local screenshots, private tooling and detailed transient diagnostics are excluded from the release commit.
