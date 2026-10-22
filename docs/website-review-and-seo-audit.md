> Historical review. Current release assessment: [preflight QA and release readiness](preflight-qa-and-release-readiness.md).

> Historical revision: current document fixes, interface illustrations, page counts and QA results are documented in [document-review-and-browser-qa.md](document-review-and-browser-qa.md). The measurements below predate that revision.

# Mett Global: review and SEO audit

Reviewed 19 October 2026. Local preview: http://localhost:3000

Work is on `codex/automotive-scene-refinement`, based on Rehan's latest reviewed `origin/main` commit `731c433`. All 157 files in the supplied V2 ZIP matched that commit. Earlier local improvements are preserved in Git stash before integration, with another snapshot before the typography and animation revision. Changes are local and have not been committed, pushed, merged or deployed.

## Implemented

- Homepage international category first/left, local second/right. No individual case-study/results section on the homepage. The contact values now use the site's Inter font at semibold weight, replacing Fraunces at the user's request. Rehan's Instrument Serif headline, updated copy, U.S. contact and catalogue images are retained.
- Whole study cards are clickable. Large, text-free illustrations sit left of all copy and results. Mobile stacks artwork above text. Milestones have their own space. Illustrations also appear on detail pages.
- Claims paragraphs use readable lists, with natural wrapping. Removed map-link arrows and em dashes. Improved text contrast, heading order, accessible naming and keyboard behavior.
- Replaced the shared Motion dependency with CSS transitions and small native scroll handlers. Graphics remain visible without JavaScript and with reduced motion. The homepage orbit pauses outside the viewport.
- Clearer service/location metadata and homepage description. Added relevant work links and practical buyer questions to all four service pages. Articles identify Mett Global as publisher. Shared site/publisher structured data now appears on every page, with article social metadata and correct social-image dimensions. Updated sitemap dates for substantial changes; removed a stale shared schema date rather than inventing publication dates.
- Vercel preview builds receive `noindex, nofollow` in headers and metadata. Production stays indexable.
- Added a form timeout. Tested success, error/retry, meeting selection and confirmation using mocked endpoints; no test enquiries were sent.
- Updated Next.js and its lint configuration to supported release 16.4.2, and refreshed vulnerable Sharp/source-map dependencies. The production dependency audit now reports zero vulnerabilities. One underlying unpatched `braces` advisory remains in development-only lint dependencies, producing five audit entries. No patched release is available in the registry; the audit's suggested framework-config downgrade was not applied. These lint dependencies are not shipped as website runtime dependencies.

## Audit findings and validation

The live site's 50 sitemap pages responded successfully and had a main heading and canonical. Its robots file and sitemap are accessible. Checked old team/service URLs redirect correctly. Public search results still contain older titles and content, so snippets are not a reliable representation of the new local version.

The local crawl found no duplicate titles/descriptions, orphaned sitemap pages, broken internal links, missing linked section IDs or unexpected noindex. All 24 configured legacy redirects lead directly to a successful page. All 16 study names, subtitles and page titles match the approved table. Unknown study URLs return 404.

| Check                                   | Result                                                                                                      |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Production build                        | Passed, 54 generated pages                                                                                  |
| ESLint / TypeScript                     | Passed                                                                                                      |
| HTTP, metadata and approved study names | 50 pages / 16 studies passed                                                                                |
| Redirects                               | 24 passed                                                                                                   |
| Responsive layout                       | 50 pages at 1440, 1024, 768, 390 and 320 pixels; 750 scroll measurements passed                             |
| Desktop automated accessibility         | 50 pages, zero detected violations in rules run                                                             |
| Browser inspection                      | 100 page/viewport checks; no broken images, clipped checked text, nested links or browser JavaScript errors |
| Static artwork                          | Visible on all 16 studies with JavaScript disabled                                                          |
| Interaction checks                      | Forms, retry, meeting request, mobile menu, Escape/focus, navbar and reduced motion passed                  |
| Preview indexing                        | Header checked for preview and production environments                                                      |

Mobile accessibility also passed on all 50 pages. The updated lockfile passed an installation dry-run, and the production dependency audit reports zero vulnerabilities.

Evidence is under `docs/qa/`. Automated accessibility checks are not screen-reader certification. Form tests intercepted requests, so inbox delivery was not tested.

Latest Lighthouse runs on the revised local production build:

| Page / simulation | Performance | Accessibility | Best practices | SEO |
| ----------------- | ----------: | ------------: | -------------: | --: |
| Homepage mobile   |          93 |           100 |            100 | 100 |
| Portfolio mobile  |          92 |           100 |            100 | 100 |
| Limo case mobile  |          95 |           100 |            100 | 100 |
| Homepage desktop  |          99 |           100 |            100 | 100 |
| Portfolio desktop |         100 |           100 |            100 | 100 |

The homepage figures are retained from the preceding revision: simulated mobile LCP 3.1 seconds, total blocking time 60 ms and CLS zero; desktop LCP 0.6 seconds, zero blocking time and zero CLS. Retesting after the latest case-study correction measured portfolio mobile LCP 3.0 seconds, blocking time 160 ms and CLS zero; portfolio desktop measured 0.7 seconds, zero and zero. The limo detail page measured mobile LCP 3.0 seconds, blocking time 60 ms and CLS zero. The earlier local homepage baseline had 1,330 ms blocking time. These are single simulated lab runs, not field Core Web Vitals or ranking predictions. Mobile LCP still has room to improve; check production field data before making more aggressive font/layout changes. Small score differences between runs do not establish a causal regression or improvement.

## Latest case-study layout and palette correction

The previous green illustration palette has been removed from all 16 scenes. Backgrounds now use the site's charcoal with warm neutral shading, cream and champagne accents. The five automotive scenes have separate compositions: a Jetour launch stage with an SUV, a Hyundai showroom elevation with a sedan aligned inside its bay, a CSM map and visit journey, a SFYKEA mobile booking and wash scene, and a long-wheelbase chauffeur vehicle with airport and booking elements. Vehicles remain fixed on their baseline; animated signals, booking confirmations and wash details carry the motion. The illustrations are conceptual, not claims about specific vehicle models or client interface screenshots.

Case detail pages now share a 1280-pixel content measure and consistent gutters. Artwork and text align at the top. Detail headings remain 800 weight but are capped at 56 pixels in the two-column heroes. Subtitles, body text, actions and summary cards have a consistent spacing rhythm. Section headings align with the top of the supporting paragraph rather than its bottom. The operations story uses wider paired heading/body columns on desktop and a single column on mobile. Fixed a long Instagram address that overflowed in the CSM case at 320 pixels.

The final production build and code checks passed. All 16 studies passed 96 page/viewport layout checks at 1892, 1440, 1024, 768, 390 and 320 pixels; all 32 focused desktop/mobile accessibility checks passed. The 50-page HTTP audit, 100 browser page/viewport checks and 16 no-JavaScript illustration checks also passed. The preceding full responsive crawl passed 750 scroll measurements. The animation sample measured 16.7 ms median, 16.9 ms 95th percentile and zero frames over 50 ms, compared with 16.7 ms, 17.1 ms and zero for the static comparison. This is a short local sample, not a device-wide guarantee.

Evidence: `qa/case-layout-audit.json`, `qa/case-pages/`, `qa/scenes-contact-sheet.png`, `qa/scene-motion-audit.json`, `qa/limo-corrected-desktop.png` and `qa/sfykea-corrected-mobile.png`.

## Earlier animation and typography revision

All 16 case studies received text-free SVG scenes. Case-study card titles are 800 weight at 30–46 pixels on desktop and 32 pixels on mobile. Contact values use the existing Inter family at 600 weight, with responsive sizing and wrapping. The automotive artwork and detail typography have since been corrected as described above.

Scene loops animate only transforms and opacity, with no animation library, video download, per-frame React update or JavaScript animation loop. IntersectionObserver pauses offscreen scenes, and page visibility and reduced-motion settings stop playback. Static illustrations work without JavaScript. All 16 scene fallbacks and reduced-motion behavior passed again after the latest revision.

After this revision, the production build, lint, TypeScript, 50-page HTTP audit, 24 redirects, 750 responsive scroll measurements, 100 browser page/viewport checks, six focused accessibility checks and 12 interaction checks passed. No browser JavaScript errors were recorded. All form submissions were mocked. The earlier full 50-page desktop and mobile accessibility audits remain in the evidence folder.

The external auditor screenshot reports intermittent production `noindex`. A new four-request check using browser, Googlebot, Bingbot and OAI-SearchBot user-agent strings returned HTTP 200, `index, follow`, and no X-Robots-Tag each time. This does not reproduce or disprove an intermittent issue, and changing a user-agent string is not a genuine Google crawl. Search Console URL Inspection remains necessary. No production cache purge or deployment was performed. Evidence: `qa/live-indexability-recheck.json`.

## What still affects rankings

Technical eligibility does not establish why a site ranks poorly. No private Search Console, Bing Webmaster, analytics or inbox account was available. Those checks require account access and production observation.

1. After the approved release, use Search Console URL Inspection for the homepage and service pages. Confirm indexing and Google's selected canonical, submit the sitemap, and review crawl/indexing errors, security/manual actions and Core Web Vitals. Compare queries, landing pages and qualified leads over time.
2. Review generative AI inclusion settings and reporting in Search Console, plus citations in Bing Webmaster Tools. Crawlability does not prove inclusion or citation.
3. Verify the real Google Business Profile and keep the name, office address, phone, service categories and website consistent. Seek legitimate customer feedback. Do not create fictitious offices or reviews.
4. Add original, approved expertise to existing relevant pages: actual constraints, work delivered, measurement periods and limitations. Keep client-reported outcomes labeled. Useful examples are preferable to generic articles or repeated city pages.
5. Add named authors/reviewers only when they actually wrote or reviewed the material. Continue checking time-sensitive platform/legal articles against primary sources. No credentials or publication dates were invented in this work.
6. Develop real client/partner references and relevant industry coverage. No backlink campaign or private authority measurement was performed.
7. Confirm consented GA4 visits, enquiry events and meeting events on production, along with actual email delivery.
8. The bare HTTP host currently takes two redirects to the HTTPS www host. This is a small extra hop, not an indexing block; the hosting owner can consolidate it if supported safely.

Google's current guidance applies SEO fundamentals to generative AI search. It does not require special AI schema, artificial content chunking or an `llms.txt` file for Google visibility. The new answers and evidence links serve prospective customers; markup alone cannot secure rankings or AI citations.

## Review and release

Review localhost first. Keep revisions on the task branch. After approval, prepare the reviewed commit and publish it to the existing `Rehanminhas03/mettgloblee` repository for Rehan's review, with the pre-push guard enabled. Fetch and reconcile any newer work before merging. A production merge/deployment requires the user's explicit instruction. Branch previews stay separate and unindexed. Repeat checks on the deployed URL after release, then complete the private webmaster checks above.

## Reproduce checks

From this repository, run `npm.cmd ci`, `npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run build`, then `npm.cmd run start -- --hostname 127.0.0.1 --port 3000`.

In another terminal, run `node scripts/check-site.mjs http://127.0.0.1:3000`. The responsive script additionally needs `playwright-core` and Chromium. Set `PLAYWRIGHT_CORE` to its installed module folder if outside the project, then run `node scripts/check-overflow.mjs http://127.0.0.1:3000`. Audit dependencies were isolated under ignored `.git/codex-tools`; tools and credentials are not website source.

## Primary references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google structured data fundamentals](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Bing AI Performance report](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)
- [Next.js October security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026)

The latest PDF and direct user layout instructions take precedence over earlier suggestions to add homepage study sections.
