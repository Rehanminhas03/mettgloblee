/**
 * Horizontal-overflow check for every URL in the sitemap.
 *
 * Usage (site running, e.g. `npm run build && npx next start -p 3100`):
 *   node scripts/check-overflow.mjs [baseUrl]
 *
 * Needs playwright-core and a Chromium-based browser. Set PLAYWRIGHT_CORE to
 * a playwright-core folder if it is not installed in this project, and
 * BROWSER_CHANNEL (default "msedge") to pick the installed browser.
 *
 * For each URL and width it measures scrollWidth against clientWidth right
 * after load, after scrolling 400px, and at the bottom of the page.
 */
import { createRequire } from 'node:module';

const base = process.argv[2] ?? 'http://localhost:3100';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE ?? 'playwright-core');
const WIDTHS = [1440, 1024, 768, 390];

const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => {
  try {
    return new URL(m[1]).pathname;
  } catch {
    return m[1];
  }
});

const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL ?? 'msedge',
});
let failures = 0;
const measure = page =>
  page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  for (const path of paths) {
    await page.goto(base + path, { waitUntil: 'load' });
    const results = [await measure(page)];
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(150);
    results.push(await measure(page));
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(150);
    results.push(await measure(page));
    if (results.some(over => over > 0)) {
      failures += 1;
      console.log(`OVERFLOW ${width}px ${path} ${results.join('/')}`);
    }
  }
  await page.close();
}
await browser.close();
console.log(
  failures
    ? `${failures} overflow failure(s)`
    : `No horizontal overflow on ${paths.length} URLs at ${WIDTHS.join(', ')}px`,
);
process.exit(failures ? 1 : 0);
