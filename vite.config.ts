import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'google-analytics',
      transformIndexHtml: {
        order: 'post',
        handler(html, ctx) {
          const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || 'MettGlobal';
          const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]?.trim() ||
            'MettGlobal connects growth, eCommerce, technology and operations for ambitious businesses.';
          const sourcePagePath = ctx?.path && ctx.path !== '/index.html' ? ctx.path : '/';
          const pagePath = sourcePagePath.replace(/\.html$/, '');
          const pageUrl = `https://www.mettglobal.com${pagePath}`;
          const hasMeta = (pattern) => pattern.test(html);
          const metadata = [
            !hasMeta(/property=["']og:title["']/i) && `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}">`,
            !hasMeta(/property=["']og:description["']/i) && `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}">`,
            !hasMeta(/property=["']og:url["']/i) && `<meta property="og:url" content="${pageUrl}">`,
            !hasMeta(/name=["']twitter:title["']/i) && `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">`,
            !hasMeta(/name=["']twitter:description["']/i) && `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}">`,
          ].filter(Boolean).join('\n    ');
          const breadcrumbLabel = pagePath === '/' ? 'Home' : title.split('|')[0].split(' | ')[0].trim();
          const breadcrumb = pagePath === '/' ? '' : `
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mettglobal.com/' },
        { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: pageUrl },
      ],
    })}</script>`;
          const googleAnalyticsTag = `
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PCBE7G3NXQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PCBE7G3NXQ');
      document.addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (!link || typeof gtag !== 'function') return;
        const href = link.href || '';
        const eventName = href.includes('wa.me') ? 'whatsapp_click' :
          href.startsWith('tel:') ? 'phone_click' :
          href.startsWith('mailto:') ? 'email_click' :
          href.includes('appointment.html') ? 'booking_click' : null;
        if (eventName) gtag('event', eventName, { link_url: href, page_location: location.href });
      });
      document.addEventListener('submit', function(event) {
        if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: event.target.id || 'website_form', page_location: location.href });
      }, true);
    </script>`;

          const cleanUrlHtml = html
            .replace(/href=["'](?:\.\/)?index\.html["']/gi, 'href="/"')
            .replace(/href=["'](?:\.\/)?([a-z0-9-]+)\.html["']/gi, 'href="/$1"')
            .replace(/https:\/\/www\.mettglobal\.com\/([a-z0-9-]+)\.html/gi, 'https://www.mettglobal.com/$1');
          const enrichedHtml = cleanUrlHtml
            .replace('</head>', `${metadata ? `\n    ${metadata}` : ''}${breadcrumb}\n  </head>`)
            .replace('</head>', `${html.includes('G-PCBE7G3NXQ') ? '' : `${googleAnalyticsTag}\n`}  </head>`);
          return enrichedHtml;
        },
      },
    },
  ],
  build: {
    outDir: process.env.APPDEPLOY_VITE_OUT_DIR || 'dist',
    sourcemap:
      process.env.APPDEPLOY_VITE_SOURCEMAP === 'hidden' ? 'hidden' : false,
    rollupOptions: {
      maxParallelFileOps: 128,
      input: [
        '404.html',
        'index.html',
        'services.html',
        'about.html',
        'blog.html',
        'contact.html',
        'appointment.html',
        'privacy.html',
        'terms.html',
        'sitemap.html',
        'case-studies.html',
        'case-study-jetour-ittehad.html',
        'case-study-hyundai-islamabad.html',
        'case-study-csm-ittehad.html',
        'ecommerce-growth.html',
        'web-development.html',
        'ai-automation.html',
        'digital-marketing.html',
        'operations-supply-chain.html',
        'lead-generation-sales.html',
        'ai-content-production.html',
        'audits-diagnostics.html',
        'insight-ecommerce-operations.html',
        'insight-conversion-audit.html',
        'insight-ai-automation.html',
        'insight-growth-system.html',
        'insight-supply-chain-control.html',
        'insight-lead-generation-system.html',
        'insight-ai-video-brief.html',
        'insight-audit-framework.html',
        'insight-utm-governance.html',
        'insight-product-feed-health.html',
        'insight-landed-cost-model.html',
        'insight-3pl-scorecard.html',
        'insight-digital-product-passport.html',
        'update-amazon-fba-fees-2026.html',
        'update-eu-ai-act-transparency-2026.html',
        'update-google-ads-consent-2026.html',
        'update-eu-ics2-2026.html',
        'update-google-search-2026.html',
      ],
    },
  },
});
