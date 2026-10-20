import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE ?? 'playwright-core');
const base = process.argv[2] ?? 'http://localhost:3000';
const paths = [
  ...(await (await fetch(`${base}/sitemap.xml`)).text()).matchAll(
    /<loc>([^<]+)<\/loc>/g,
  ),
].map(m => new URL(m[1]).pathname);
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL ?? 'chrome',
});
const rows = [];
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    for (const path of paths) {
      await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => document.fonts.ready);
      const measures = [];
      for (const position of [0, 400, 'bottom']) {
        await page.evaluate(
          pos =>
            window.scrollTo(
              0,
              pos === 'bottom' ? document.body.scrollHeight : pos,
            ),
          position,
        );
        await page.waitForTimeout(40);
        measures.push(
          await page.evaluate(() => ({
            root:
              document.documentElement.scrollWidth -
              document.documentElement.clientWidth,
            text: [
              ...document.querySelectorAll(
                'main h1,main h2,main h3,main h4,main li,main input,main textarea,main select,main summary',
              ),
            ]
              .filter(
                e =>
                  e.getBoundingClientRect().width > 0 &&
                  e.scrollWidth > e.clientWidth + 3 &&
                  !e.closest('[aria-hidden="true"]'),
              )
              .map(e => e.textContent.slice(0, 90)),
          })),
        );
      }
      rows.push({ width, path, measures });
    }
    console.log(`Checked ${paths.length} pages at ${width}px`);
    await context.close();
  }
} finally {
  await browser.close();
}
const failures = rows.filter(r =>
  r.measures.some(m => m.root > 1 || m.text.length),
);
fs.mkdirSync('docs/qa', { recursive: true });
fs.writeFileSync(
  'docs/qa/responsive-layout.json',
  JSON.stringify(
    { date: new Date().toISOString(), pages: paths.length, rows, failures },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      pageViewportChecks: rows.length,
      scrollMeasurements: rows.length * 3,
      failures,
    },
    null,
    2,
  ),
);
process.exitCode = failures.length ? 1 : 0;
