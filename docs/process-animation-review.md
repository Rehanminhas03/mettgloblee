> Latest refinement: see [approved-animation-refinement.md](approved-animation-refinement.md) for the approved scenes with nine-second pacing, the two claims categories, the stable status badge and the centred homepage header. Earlier timing and alignment descriptions below are historical.

# Case-study process animation review

20 October 2026. Local branch: `codex/case-study-process-animations`. No commit, push, merge or deployment.

The latest user request explicitly asks for explanatory text in the artwork. It replaces the earlier text-free direction. The previous abstract interface diagrams have been replaced across all 17 portfolio entries, both on portfolio cards and detail pages.

## What the scenes show

| Project                  | Visible story and movement                                                                                                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claims recovery          | Lost/damaged parcel, tracking/invoice/delivery evidence, filing and follow-up, recovered funds. Evidence stages highlight in sequence, a document moves to the claim file and a banknote enters the recovery wallet. |
| Remote warehouse         | Warehouse roof, racks, stored cartons, remote oversight, conveyor and dispatch truck. A carton travels from receiving past the racks to dispatch.                                                                    |
| Procurement and sourcing | Fabric rolls, garment production and inspection, marketplace listing. A press moves over the garment and the production stage highlights before sale.                                                                |
| Courier and 3PL          | Carrier comparison, moving delivery truck and invoice checks.                                                                                                                                                        |
| Multichannel commerce    | Named marketplaces connect to inventory, order handling and dispatch.                                                                                                                                                |
| Etsy                     | Digital product designs move from a studio into a storefront catalogue.                                                                                                                                              |
| Jetour                   | Vehicle campaign creative connects to enquiry, contact and visit stages.                                                                                                                                             |
| Hyundai                  | A vehicle sits inside the showroom and connects to website enquiry and visit follow-up.                                                                                                                              |
| Capital Smart Motors     | Social activity, website interest and follow-up connect to the physical showroom.                                                                                                                                    |
| Dealership ERP           | Vehicles, customers and finance share one system; sales stages highlight. The in-development status remains explicit.                                                                                                |
| SFYKEA                   | Customer booking, rider assignment and a worker washing a car. Feet, car wheels and spray are aligned to the ground and vehicle.                                                                                     |
| Ittehad Steel            | Reinforcing bars become campaign artwork and social/video content.                                                                                                                                                   |
| Mowing                   | A property and moving mower accompany route, crew and completion stages.                                                                                                                                             |
| Serenada                 | A seated consultation figure connects to treatment discovery and an appointment request.                                                                                                                             |
| Prospect Smile           | A tooth and local search connect to treatment information and appointment requests.                                                                                                                                  |
| Luxury O'Hare Limo       | A ride request connects to a car, airport tower and moving aircraft.                                                                                                                                                 |
| MyTrackee                | A vehicle marker follows a mapped route beside a GPS location portal.                                                                                                                                                |

All scenes use the site's charcoal, cream and gold palette. They illustrate project scope rather than pretending to be real client screenshots or measurements. Supported results remain in the case-study text.

The header above the homepage international/local cards now uses exactly the cards' equal columns and 32px gap. Automated checks at six viewports found zero difference between header and card left edges, and zero difference between the desktop heading and paragraph top edges. The original homepage height rules were preserved.

## Checks

- Production build with TypeScript and full ESLint passed.
- The 51-route metadata/link audit passed; all 17 scenes retain headings and artwork without JavaScript.
- All 17 scenes were checked for label overlap and page overflow at 1440, 390 and 320px widths (51 combinations).
- Four points in each scene's animation cycle were checked for labels escaping their panels (68 combinations). One overlong claims label was shortened during QA.
- Mobile card decorations were moved behind the artwork after visual inspection found a ring crossing scene labels. The corrected phone screenshots were rechecked.
- Opening, middle and later animation frames for claims, warehouse and sourcing were visually inspected. The full scene contact sheet was inspected, including corrected worker and chair alignment.
- Animation remains SVG/CSS, with no added animation dependency, video asset or per-frame JavaScript. Existing offscreen, page-visibility and reduced-motion controls remain active. Static reduced-motion scenes retain their explanatory labels.

Evidence: `docs/qa/process-scene-label-audit.json`, `process-motion-bounds.json`, `process-storyboard.png`, `scenes-contact-sheet.png`, `scene-motion-audit.json`, `no-javascript-artwork.json`, `partners-header-alignment.json` and `partners-header-corrected.png`.

## Fresh portfolio speed checks

| Preset  | Performance | Accessibility | Best practices | SEO | LCP   | TBT   | CLS |
| ------- | ----------- | ------------- | -------------- | --- | ----- | ----- | --- |
| mobile  | 94          | 100           | 100            | 100 | 3.0 s | 50 ms | 0   |
| desktop | 100         | 100           | 100            | 100 | 0.7 s | 0 ms  | 0   |

Sequential Lighthouse runs against the optimized local build. The animation frame sample measured 16.7ms median and 17ms p95, with no intervals over 50ms; the static comparison had the same values. These are local lab results, not production field data.
