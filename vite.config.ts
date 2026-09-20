import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'google-analytics',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          const googleAnalyticsTag = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PCBE7G3NXQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PCBE7G3NXQ');
    </script>`;

          return html.includes('G-PCBE7G3NXQ')
            ? html
            : html.replace('</head>', `${googleAnalyticsTag}\n  </head>`);
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
        'index.html',
        'services.html',
        'about.html',
        'blog.html',
        'contact.html',
        'appointment.html',
        'privacy.html',
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
