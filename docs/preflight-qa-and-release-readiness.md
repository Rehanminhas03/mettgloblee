> Latest layout refinement: on `codex/google-profile-connect`, the Google Business Profile link appears under the footer **Connect** heading with a Google icon. It has been removed from the office/address blocks; **Get directions** remains with the building address. Structured-data destinations remain separate. Footer checks passed at 320, 390, 820, 1024 and 1440px, including accessibility and clipping checks. [Evidence](qa/google-profile-connect.json).

> Current owner clarification: NESL IT is the shared office building, so its Maps pin is valid. On `codex/maps-and-profile-links`, **Get directions** uses the original building pin and **View on Google** separately uses the Mett Global Business Profile. Organization `hasMap` identifies the building location; `sameAs` includes the Business Profile. This supersedes the earlier assessment that the building listing was an incorrect destination. No deployment has been performed.

> Follow-up: the owner supplied the exact Google Business Profile share link. Current local branch: `codex/connect-business-profile`. The shared map constant and Organization `hasMap`/`sameAs` now use [that link](https://share.google/4dQhYgKMuqcFVdiuL), replacing the generic address-search fallback described below. User screenshots show a Mett Global listing and management access; an automated attempt resolved to the Mett Global entity but encountered a Google traffic challenge. This does not verify Search Console or change the pending release gates. [Link evidence](qa/business-profile-link-verification.json).

﻿# Preflight audit and release assessment

Reviewed: 20 October 2026. Local preview: http://localhost:3000. Branch: `codex/preflight-qa-audit`.

## Release decision

The optimized local build is ready for design review and a trusted HTTPS staging review. The code, responsive-layout, automated accessibility and local SEO checks below pass. **Final public-launch sign-off is pending the remaining browser, delivery and hosting checks below.** This is not a claim of perfection on every device or a guarantee of rankings.

No commit, push, merge or deployment was performed. The existing GitHub repository is the only repository accessed. A read-only remote check found `main` still at the local base commit `731c433e02dec168cc45af2c9836fc593f93873b`; the pre-push guard is present. Authenticated write permission has not been reverified. The task branch and changes remain local.

## Fixes made in this audit

- Analytics: gate both delegated click events and success events on the current consent state. Withdrawal now sets the Google Analytics disable flag and removes analytics cookies; reaccepting reuses the existing loader. Removed the custom submit-attempt listener so failed attempts are not deliberately counted as successful leads. Successful enquiry and meeting events remain separate.
- Cookie banner: observe height changes so floating-contact clearance updates when the screen size changes.
- Accessibility: add one footer pause/resume control for the case-study loops and decorative hero motion. The choice persists for the browser session. Existing reduced-motion, hidden-tab and offscreen behavior remains. The approved scenes, colors and nine-second timing are unchanged.
- Booking: disable past same-day times and reject a slot that expires before continuing or submitting. A stale submission makes no external request and returns the visitor to time selection.
- Forms: mobile editable text is at least 16px. With JavaScript disabled, forms are replaced with a direct email route. Forms use POST rather than an implicit GET fallback that could put a visitor's enquiry in a URL.
- Layout: five-step desktop workflows now use five columns, eliminating a lone final card. Mobile steps remain stacked.
- Copy: replace the isolated “My role” label with team wording; remove an absolute “never lost” enquiry claim; correct two comma-spliced service descriptions. Article reading times now reflect the approximate rendered word count at 200 words/minute, consistently on the index and articles.
- Map destination: the original short link opened a listing named “NESL IT.” Replace it with a search for the supplied office address, and share the same constant with Organization `hasMap`. The corrected destination returns HTTP 200 with the heading “Plot # 195”; all 51 pages expose matching visible/schema map links. This does not claim a verified Mett Global Business Profile. [Original destination](qa/preflight-map-link.json), [corrected destination](qa/preflight-map-link-corrected.json), [all-page consistency](qa/preflight-map-consistency.json).
- Discovery: add the four operator playbooks to the human sitemap. Add a direct service answer distinguishing courier claims from Amazon FBA, Walmart WFS and Wish claims, with a link to the documented work. Update relevant sitemap modification dates.
- Source accuracy: correct the ICS2 transition timeline; add the Article 50(2) limited transition distinction to the EU AI Act brief; add the current seasonal FBA schedule alongside the annual fee announcement. Recheck the five current-brief primary sources and update their visible review dates.

The homepage hero structure and browser-height behavior were preserved. International work remains first/left and local work second/right. No individual case studies were added to the homepage. Jetour dates and figures were left unchanged at the user's explicit instruction, including the October headline reporting label and September early snapshot; this accepted editorial caveat remains.

## Verification and evidence

| Area                   | Scope and result                                                                                                                                                                                                              | Evidence                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build and code         | Optimized Next build: 55 generated outputs; ESLint, TypeScript and Git whitespace checks passed                                                                                                                               | Commands: `npm.cmd run build`, `npm.cmd run lint`, `npm.cmd run typecheck`, portable Git `diff --check`                                                 |
| Routes and SEO         | All 51 public sitemap routes, 17 portfolio entries and 24 legacy redirects checked; no failures                                                                                                                               | [Site validation](qa/site-audit.json), [technical SEO audit](qa/technical-seo-audit.json)                                                               |
| Chrome and Firefox     | Whole-site sweeps: 51 pages × 3 widths per browser, no recorded clipping, broken images or browser errors                                                                                                                     | [Chrome](qa/whole-site-browser-audit-chrome.json), [Firefox](qa/whole-site-browser-audit-firefox.json)                                                  |
| Final responsive sweep | 51 pages × 5 widths (1440, 1024, 768, 390, 320px), 765 scroll measurements; no reported overflow or text clipping                                                                                                             | [Responsive report](qa/responsive-layout.json)                                                                                                          |
| Accessibility          | Full desktop and phone axe scans completed with no recorded violations. Final phone scan and targeted post-fix scans passed. Automated scans are not complete accessibility certification                                     | [Desktop](qa/accessibility-all-pages.json), [Phone](qa/accessibility-mobile-pages.json), [targeted regressions](qa/preflight-regressions.json)          |
| Functions              | 23 targeted regressions and 12 interaction checks passed, including consent withdrawal/reacceptance, resize clearance, pause persistence, expired slots, form retry, mobile menu Escape/focus and successful meeting requests | [Regressions](qa/preflight-regressions.json), [interactions](qa/interaction-audit.json)                                                                 |
| No JavaScript          | 17 portfolio headings/artworks visible; all three form routes expose email alternatives and hide inactive forms                                                                                                               | [Portfolio](qa/no-javascript-artwork.json), [forms](qa/preflight-no-js-forms.json)                                                                      |
| Scene labels           | All 17 scenes at three widths: 51 label checks passed. Claims badge/categories: 21 sampled states passed. The other 14 scenes remain pixel-identical to the approved baseline                                                 | [Labels](qa/process-scene-label-audit.json), [claims](qa/claims-badge-and-categories.json), [three-scene review](qa/three-service-scenes-revision.json) |
| Approved layout        | Partners heading/copy centers and column edges matched at desktop; responsive stacking and the original hero checked                                                                                                          | [Partners](qa/partners-centered-audit.json), [hero](qa/restored-hero-layout.json)                                                                       |
| Copy and assets        | Reviewed the rendered copy export across 51 pages, approximately 23,978 main-content words, plus shared FAQ/service copy. No repeated-word, replacement-character, missing-alt or unnamed-link cases found in the export      | [Content inventory](qa/preflight-page-content.json), [reading times](qa/reading-time-review.json)                                                       |
| External references    | 37 HTTP links checked read-only. The Maps short-link issue was investigated in a browser and corrected; the all-page map check passes                                                                                         | [External links](qa/preflight-external-links.json)                                                                                                      |
| Preview indexing       | Configuration checks distinguish preview `noindex, nofollow` from production. Deployment headers still require a real preview check                                                                                           | [Environment checks](qa/preview-indexing-check.json)                                                                                                    |
| Git protection         | Authorized origin, matching remote base, local branch and pre-push guard verified; no publishing                                                                                                                              | [Git review](qa/preflight-git-review.json)                                                                                                              |

Full-page screenshots were captured for all 51 routes at desktop and phone sizes. Opening and middle contact sheets were visually reviewed for hierarchy, alignment, spacing and artwork; forms, partner cards and the corrected workflow received focused review. The final responsive and phone accessibility sweeps ran against the final application build. Earlier full browser/contact-sheet sweeps were supplemented by targeted checks after the copy and no-JavaScript fixes.

### WebKit and iPhone status

The WebKit HTTPS sweep rendered 153 page/viewport combinations with no measured layout, heading or image failures. It also logged background RSC-prefetch access-control errors during the bulk navigation sweep, including after waiting for network idle. **That sweep is not a clean browser pass.** A separate contact → header Services → footer Web/Software → browser Back journey passed with zero page errors or failed requests. Single-page HTTPS isolation also passed. This is inconclusive for the bulk-prefetch behavior; it must be checked with trusted HTTPS before public release, rather than dismissed as definitely harmless.

See [bulk WebKit evidence](qa/preflight-webkit-https.json) and [navigation evidence](qa/preflight-webkit-navigation.json). The local certificate was temporary, used only by the test browser; system trust and production CSP were not changed. Physical iPhone/iPad Safari and an on-screen mobile keyboard have not been tested.

## Performance

Fresh sequential Lighthouse 13.5 runs against the optimized local server, with other automated browser sweeps finished. The final map URL-only correction followed these measurements; it changed no layout or scene, and was followed by a fresh build, lint/type checks, all-route validation and all-page map consistency check. Mobile uses simulated throttling; desktop uses the desktop preset. All eight runs scored 100 for accessibility, best practices and SEO and had CLS 0. The table below is generated from the saved measurements.

| Page                              | Preset  | Performance | LCP   | TBT   | CLS |
| --------------------------------- | ------- | ----------- | ----- | ----- | --- |
| /                                 | mobile  | 90          | 3.24s | 150ms | 0   |
| /portfolio                        | mobile  | 93          | 3.04s | 144ms | 0   |
| /contact                          | mobile  | 96          | 2.71s | 37ms  | 0   |
| /ecommerce-supply-chain           | mobile  | 95          | 2.88s | 47ms  | 0   |
| /portfolio/serenada-mental-health | mobile  | 94          | 3.00s | 68ms  | 0   |
| /update-amazon-fba-fees-2026      | mobile  | 95          | 2.89s | 51ms  | 0   |
| /                                 | desktop | 99          | 0.68s | 4ms   | 0   |
| /portfolio                        | desktop | 99          | 1.04s | 6ms   | 0   |

The three revised scenes showed 16.7ms median frame intervals and 16.9–17.1ms p95 while active, with no sampled frame intervals over 50ms. Paused/reduced-motion comparisons were similar; reduced motion stopped all three. These short local samples do not prove performance on every phone. [Frame evidence](qa/three-service-scenes-motion.json).

Mobile LCP remains approximately 2.7–3.2 seconds under the lab preset, so it is not appropriate to claim that every Core Web Vital is already “good.” The remaining Lighthouse opportunities include framework JavaScript/polyfills and render-blocking CSS. Browser compatibility and the approved hero were preserved rather than removed for a score. Actual production performance and INP require real-user data and deployment checks; local Lighthouse scores are not field Core Web Vitals.

## SEO and AI-search assessment

Local checks found no unintended noindex, conflicting canonicals, duplicate titles/descriptions, orphaned sitemap pages, broken internal resources or malformed JSON-LD. Important service/case text is server-rendered; graphics supplement the HTML. Organization identity, contact details, service descriptions, breadcrumbs, contextual links and source references provide a coherent foundation for ordinary search and answer retrieval.

Live read-only checks returned HTTPS redirects, robots.txt and sitemap responses as expected. Four homepage requests using browser, Googlebot, Bingbot and OAI-SearchBot user-agent strings returned an indexable page with no X-Robots-Tag noindex. These requests came from this machine, not verified crawler IPs. They do not establish what Google has indexed, prove all CDN edges agree, or disprove a historical intermittent noindex. [Live evidence](qa/live-indexability-recheck.json).

Google says its SEO fundamentals also apply to AI Overviews/AI Mode; no special AI file or schema is required, and eligibility does not guarantee inclusion. [Google AI-features guidance](https://developers.google.com/search/docs/appearance/ai-features). OpenAI documents OAI-SearchBot as the search crawler, separately from GPTBot training access. Current wildcard robots rules allow it; CDN access still needs verification from real crawler traffic. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).

Search Console coverage, ranking history, search volumes, backlink quality, Google Business Profile verification and real AI-answer citations were not available in this local audit. Do not describe those as checked or claim rankings have been fixed. After release, prioritize actual Search Console queries and conversions. A focused FBA/WFS claims service page supported by approved scope and proof is a useful next content project; avoid duplicative country pages or invented outcomes. This is a content-growth recommendation, not a technical launch blocker.

### Primary-source corrections

- ICS2: include the temporary derogations and June 2026 transition endpoint rather than a blanket September 2025 completion claim. [European Commission ICS2 guidance](https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en).
- AI Act: distinguish the limited Article 50(2) transition for existing systems from the general application date. [European Commission Article 50 FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act).
- Amazon: distinguish annual changes from the seasonal rate schedule. [Amazon FBA fee schedule](https://sellercentral.amazon.com/help/hub/reference/external/GMUTB89XM7AATPR3?language=en_us).
- Animation controls: looping motion needs a usable pause mechanism. [W3C Pause, Stop, Hide explanation](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

## Security and dependency result

`npm audit --omit=dev` reported zero known production dependency vulnerabilities. The full audit reported five high-severity development-tool entries tracing to one `braces` advisory through the lint/glob chain. The published advisory lists no patched version. A forced downgrade to a different Next/ESLint major was not applied. This remains an upstream development-tool risk, not a clean full-dependency audit or a claimed exploitable public-site endpoint. Use trusted build inputs and recheck when upstream publishes a compatible fix. [Advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), [production audit](qa/preflight-production-dependencies.json), [full audit](qa/preflight-all-dependencies.json).

CSP, transport/security headers and consent behavior were inspected. This was an application QA and dependency review, not a penetration test or legal/privacy certification.

## Remaining release work

Before an unconditional public-launch recommendation:

1. On a trusted HTTPS preview of this exact build, check Safari/iPhone navigation and the bulk-prefetch errors, responsive layouts, keyboard/form behavior and cookie/contact clearance. Emulation does not replace the physical-device check.
2. Perform an explicitly authorized real enquiry and meeting-request delivery test; confirm FormSubmit activation and inbox receipt. All QA submissions in this audit were intercepted and mocked. No external messages were sent.
3. Follow the user's chosen GitHub/hosting release process: review the final diff, recheck remote changes and authenticated write access, verify preview protection and production environment/header behavior, and have a rollback target. No merge or deployment is authorized by this report.

After deployment, immediately smoke-test routes, redirects, canonicals, robots, sitemap, forms and analytics on the production domain. Use Search Console URL Inspection, sitemap submission/coverage and GA4 DebugView/property settings to verify indexing and measurement. Monitor real-user performance and form failures. Those account and production checks are pending, not silently marked passed.

The generated screenshot archive is local QA evidence (over 100MB across prior and current reviews), not a runtime website asset. Review which evidence to version before staging a commit; do not blindly add all generated screenshots. All existing files and earlier approved changes have been preserved.
