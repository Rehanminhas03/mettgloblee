import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';

const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '');
function loadNames() {
  const source = fs.readFileSync('src/lib/caseNames.ts', 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const context = { exports: {} };
  vm.runInNewContext(code, context);
  return Object.fromEntries(
    Object.entries(context.exports.CASE_NAMES).map(([slug, item]) => [
      slug,
      { ...item, title: item.name },
    ]),
  );
}
const names = loadNames();
const failures = [];
const pages = [];
const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  m => new URL(m[1]).pathname,
);
if (new Set(urls).size !== urls.length)
  failures.push('Duplicate sitemap entries');
for (const slug of Object.keys(names))
  if (!urls.includes(`/portfolio/${slug}`))
    failures.push(`Missing sitemap study: ${slug}`);
const decode = value =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCodePoint(parseInt(h, 16)),
    )
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
for (let offset = 0; offset < urls.length; offset += 4) {
  await Promise.all(
    urls.slice(offset, offset + 4).map(async pathname => {
      const response = await fetch(base + pathname);
      const html = await response.text();
      const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
      const canonical = html.match(
        /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/,
      );
      if (response.status !== 200)
        failures.push(`${pathname}: HTTP ${response.status}`);
      if (h1.length !== 1)
        failures.push(`${pathname}: ${h1.length} H1 elements`);
      if (!canonical) failures.push(`${pathname}: missing canonical`);
      if (!/<meta name="description" content="[^"]+"/.test(html))
        failures.push(`${pathname}: missing description`);
      if (!/<meta property="og:image" content="[^"]+"/.test(html))
        failures.push(`${pathname}: missing social image`);
      for (const script of html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
      )) {
        try {
          JSON.parse(script[1]);
        } catch {
          failures.push(`${pathname}: invalid JSON-LD`);
        }
      }
      const slug = pathname.split('/').pop();
      if (names[slug]) {
        const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] || '');
        const headline = decode(
          h1[0]?.[1].replace(/<[^>]*>/g, '').trim() || '',
        );
        if (title !== names[slug].metaTitle)
          failures.push(`${pathname}: incorrect meta title`);
        if (headline !== names[slug].title)
          failures.push(`${pathname}: incorrect H1`);
        if (
          !html.includes(
            names[slug].subtitle
              .replaceAll('&', '&amp;')
              .replaceAll("'", '&#x27;'),
          )
        ) {
          const text = decode(html.replace(/<[^>]*>/g, ''));
          if (!text.includes(names[slug].subtitle))
            failures.push(`${pathname}: missing approved subtitle`);
        }
      }
      pages.push({
        pathname,
        status: response.status,
        h1: h1.length,
        canonical: canonical?.[1],
      });
    }),
  );
  console.log(
    `Checked ${Math.min(offset + 4, urls.length)}/${urls.length} sitemap routes`,
  );
}
const redirectCode = ts.transpileModule(
  fs.readFileSync('src/lib/services.ts', 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const redirectContext = { exports: {} };
vm.runInNewContext(redirectCode, redirectContext);
const redirects = redirectContext.exports.RETIRED_SERVICE_REDIRECTS;
for (const { from, to } of redirects) {
  const response = await fetch(base + from, { redirect: 'manual' });
  const location = response.headers.get('location') || '';
  if (
    ![301, 308].includes(response.status) ||
    new URL(location, base).pathname !== to
  )
    failures.push('Incorrect legacy redirect: ' + from);
  const target = await fetch(base + to, { redirect: 'manual' });
  if (target.status !== 200)
    failures.push('Redirect target is not a direct 200: ' + to);
}

if (
  (await fetch(`${base}/portfolio/nonexistent-study-audit-check`)).status !==
  404
)
  failures.push('Unknown study does not return 404');
const home = await (await fetch(base)).text();
if (
  home.includes('operations-proof-heading') ||
  home.includes('id="selected-work"')
)
  failures.push('Individual homepage case-study section remains');
const portfolio = await (await fetch(`${base}/portfolio`)).text();
if (portfolio.indexOf('id="international"') > portfolio.indexOf('id="local"'))
  failures.push('Portfolio section ordering is incorrect');
const report = {
  checkedAt: new Date().toISOString(),
  base,
  routes: pages.length,
  studies: Object.keys(names).length,
  redirects: redirects.length,
  failures,
  pages,
};
fs.mkdirSync('docs/qa', { recursive: true });
fs.writeFileSync(
  'docs/qa/site-audit.json',
  JSON.stringify(report, null, 2) + '\n',
);
console.log(
  JSON.stringify(
    { routes: pages.length, studies: Object.keys(names).length, failures },
    null,
    2,
  ),
);
process.exitCode = failures.length ? 1 : 0;
