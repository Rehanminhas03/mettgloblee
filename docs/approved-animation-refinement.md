> Latest targeted revision: [three-service-animation-revisions.md](three-service-animation-revisions.md) covers the new Serenada, Luxury O'Hare Limo and SFYKEA scenes. The other 14 approved scenes remain visually unchanged.

# Approved animation refinement and header alignment

20 October 2026. Local branch: `codex/polish-approved-animations`. No commit, push, merge or deployment.

The user approved the existing 17 process illustrations and asked to retain them. This revision preserves their subjects, compositions, moving objects and layouts. It changes the main cycle from 12 to 9 seconds, with stage offsets adjusted to match. Short secondary effects remain gentle. Panels have subtler shadows and corners, labels have clearer weight hierarchy, large gold surfaces use muted metallic tones, and filled check badges become restrained outlined indicators.

The claims illustration now has two source categories using the user's wording: **Logistics courier claim** and **E-commerce channels claim**. Amazon, Walmart and Wish appear as smaller examples under the second category. The evidence file includes tracking, invoice, delivery and inventory records. The existing recovery wallet and moving document remain. The **Discrepancy found** label has a stable, padded dark background; it no longer spills outside its badge. The background is not animated. The inventory label was shortened during visual QA to keep it clear of the check indicator.

The clients/partners header paragraph is now vertically centred beside the two-line heading, with equal columns matching the cards. Only this section uses content height and 40–48px vertical padding to remove the unwanted empty space. The original global browser-height scaling, hero dimensions and other homepage sections remain unchanged. The previously removed hero paragraph was not reintroduced.

Validation:

- Optimized production build with TypeScript, full ESLint and diff whitespace checks passed.
- Six header viewport checks passed, including 1892 × 780, a short laptop window and 320px mobile. Desktop paragraph/heading centres and header/card columns match exactly; no measured page overflow.
- All 17 illustrations passed label collision and clipping checks at 1440, 390 and 320px (51 combinations).
- The claims badge was checked at seven cycle times at three widths (21 combinations). Its background colour and opacity stay constant; text remains padded, categories are present, and evidence text clears the indicators.
- All 17 illustrations remain visible without JavaScript. Existing reduced-motion and offscreen pause checks passed.
- Local animated and static frame samples both measured a 16.7ms median, 17ms p95 and zero intervals over 50ms. No dependencies or per-frame JavaScript were added.

Evidence: `docs/qa/partners-centered-audit.json`, `partners-centered-1892.png`, `process-scene-label-audit.json`, `claims-badge-and-categories.json`, `claims-polished-desktop.png`, `claims-polished-mobile.png`, `scene-motion-audit.json` and `no-javascript-artwork.json`.

Fresh mobile portfolio Lighthouse run: performance 94, accessibility 100, best practices 100, SEO 100. LCP 3.0 s, total blocking time 100 ms, layout shift 0. Local lab results; production field performance is not measured by this run.
