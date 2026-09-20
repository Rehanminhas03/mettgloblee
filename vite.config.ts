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
          const seoByPath = {
            '/': {
              title: 'MettGlobal | Growth, eCommerce, AI & Operations',
              description: 'MettGlobal helps ambitious businesses improve eCommerce, marketing, websites, AI automation, supply chain and sales operations.'
            },
            '/services': {
              title: 'eCommerce, Web, AI & Operations Services | MettGlobal',
              description: 'Explore MettGlobal services for eCommerce operations, websites, AI automation, marketing, supply chain, sales systems and audits.'
            },
            '/about': {
              title: 'About MettGlobal | Founder-Led Growth & Operations',
              description: 'Meet MettGlobal, a Pakistan-based, globally focused team connecting growth, eCommerce, technology and operations.'
            },
            '/blog': {
              title: 'MettGlobal Insights | eCommerce, AI & Supply Chain',
              description: 'Practical guides and current briefs on eCommerce operations, marketing, AI automation, websites, sales and supply chain.'
            },
            '/contact': {
              title: 'Contact MettGlobal | Start a Business Project',
              description: 'Tell MettGlobal what is blocking growth, eCommerce, technology, marketing or operations and start a focused project discussion.'
            },
            '/appointment': {
              title: 'Book a Strategy Meeting | MettGlobal',
              description: 'Choose a preferred date and time to discuss your business constraint with MettGlobal online or in person.'
            },
            '/case-studies': {
              title: 'MettGlobal Case Studies | Growth & Operations',
              description: 'Review MettGlobal case studies across automotive marketing, lead generation, digital systems and measurable showroom outcomes.'
            },
            '/privacy': { title: 'Privacy Policy & Data Use | MettGlobal', description: 'Read how MettGlobal handles website enquiries, analytics, communications and personal information.' },
            '/terms': { title: 'Website Terms of Use | MettGlobal', description: 'Read the terms governing use of the MettGlobal website, enquiries, content, links and service discussions.' },
            '/sitemap': { title: 'MettGlobal Sitemap | All Website Pages', description: 'Browse the public MettGlobal website, including services, case studies, insights, legal pages and contact routes.' },
            '/ecommerce-growth': { title: 'eCommerce Operations & Amazon Management | MettGlobal', description: 'Improve marketplace operations, catalog health, inventory, replenishment, fulfillment, claims and eCommerce growth.' },
            '/web-development': { title: 'Website Design & Conversion Development | MettGlobal', description: 'Build faster, clearer websites and landing pages with responsive UX, conversion paths, analytics and technical SEO foundations.' },
            '/ai-automation': { title: 'AI Automation Services for Growing Businesses | MettGlobal', description: 'Map repetitive workflows and implement practical AI automation for lead handling, operations, reporting and internal processes.' },
            '/digital-marketing': { title: 'Digital Marketing & Creative Services | MettGlobal', description: 'Connect paid media, creative, offers, landing pages and follow-up into a more measurable customer acquisition system.' },
            '/operations-supply-chain': { title: 'Supply Chain & 3PL Operations Support | MettGlobal', description: 'Strengthen inventory, replenishment, warehouse, 3PL, sourcing, freight and operational reporting across growing businesses.' },
            '/lead-generation-sales': { title: 'Lead Generation & Sales Systems | MettGlobal', description: 'Build better prospecting, qualification, CRM, outreach and follow-up systems for a more disciplined commercial pipeline.' },
            '/ai-content-production': { title: 'AI Video & Content Production | MettGlobal', description: 'Produce useful AI-assisted video and content with stronger briefs, creative direction, brand consistency and human review.' },
            '/audits-diagnostics': { title: 'Website, SEO & Operations Audits | MettGlobal', description: 'Find the constraint with evidence-led audits across websites, funnels, eCommerce, SEO, performance, workflows and operations.' }
            ,'/case-study-csm-ittehad': { title: 'CSM Ittehad Case Study | MettGlobal', description: 'A MettGlobal case study on EV marketing, lead generation, automation and showroom visits for CSM Ittehad Islamabad.' }
            ,'/case-study-hyundai-islamabad': { title: 'Hyundai Islamabad Case Study | MettGlobal', description: 'A MettGlobal case study on content, customer journeys, lead handling and local growth infrastructure for Hyundai Islamabad.' }
            ,'/case-study-jetour-ittehad': { title: 'Jetour Ittehad Case Study | MettGlobal', description: 'A MettGlobal case study on Meta lead generation, automation, outdoor visibility and showroom growth for Jetour Ittehad.' }
            ,'/update-amazon-fba-fees-2026': { title: 'Amazon FBA Fees 2026: Operator Brief | MettGlobal', description: 'Understand Amazon’s 2026 US FBA fee changes, SKU-level margins, packaging, inbound costs and inventory actions.' }
            ,'/insight-digital-product-passport': { title: 'Digital Product Passports | MettGlobal Guide', description: 'Prepare product identity, materials, evidence, ownership, access and version-control data for Digital Product Passport requirements.' }
          }[pagePath];
          const pageTitle = seoByPath?.title || title;
          const pageDescription = seoByPath?.description || description;
          const hasMeta = (pattern) => pattern.test(html);
          const metadata = [
            !hasMeta(/property=["']og:title["']/i) && `<meta property="og:title" content="${pageTitle.replace(/"/g, '&quot;')}">`,
            !hasMeta(/property=["']og:description["']/i) && `<meta property="og:description" content="${pageDescription.replace(/"/g, '&quot;')}">`,
            !hasMeta(/property=["']og:url["']/i) && `<meta property="og:url" content="${pageUrl}">`,
            !hasMeta(/name=["']twitter:title["']/i) && `<meta name="twitter:title" content="${pageTitle.replace(/"/g, '&quot;')}">`,
            !hasMeta(/name=["']twitter:description["']/i) && `<meta name="twitter:description" content="${pageDescription.replace(/"/g, '&quot;')}">`,
          ].filter(Boolean).join('\n    ');
          const breadcrumbLabel = pagePath === '/' ? 'Home' : pageTitle.split('|')[0].split(' | ')[0].trim();
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
    <script>
      window.dataLayer = window.dataLayer || [];
      window.mettAnalyticsReady = false;
      window.mettLoadAnalytics = function() {
        if (window.mettAnalyticsReady) return;
        window.mettAnalyticsReady = true;
        window.gtag = window.gtag || function(){dataLayer.push(arguments);};
        gtag('js', new Date());
        gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
        gtag('config', 'G-PCBE7G3NXQ');
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PCBE7G3NXQ';
        document.head.appendChild(script);
      };
      try {
        if (localStorage.getItem('mett_cookie_consent') === 'accepted') window.mettLoadAnalytics();
      } catch (error) {}
      document.addEventListener('click', function(event) {
        const link = event.target instanceof Element ? event.target.closest('a') : null;
        if (!link || typeof gtag !== 'function') return;
        const href = link.href || '';
        const eventName = href.includes('wa.me') ? 'whatsapp_click' :
          href.startsWith('tel:') ? 'phone_click' :
          href.startsWith('mailto:') ? 'email_click' :
          /\/appointment(?:\.html)?(?:[/?#]|$)/.test(href) ? 'booking_click' : null;
        if (eventName) gtag('event', eventName, { link_url: href, page_location: location.href });
      });
      document.addEventListener('submit', function(event) {
        if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: event.target.id || 'website_form', page_location: location.href });
      }, true);
    </script>`;

          const mobileNavigation = html.includes('class="menu"') ? '' : `
    <style id="mett-mobile-navigation">
      .clean-mobile-nav-toggle { display: none; border: 1px solid currentColor; background: transparent; color: inherit; border-radius: 999px; padding: 9px 13px; font: inherit; font-size: 11px; font-weight: 800; cursor: pointer; }
      @media (max-width: 900px) {
        header { flex-wrap: wrap; }
        .clean-mobile-nav-toggle { display: inline-flex; align-items: center; gap: 7px; }
        header:not(.clean-mobile-nav-open) nav { display: none; }
        header.clean-mobile-nav-open nav { display: flex; width: 100%; flex-wrap: wrap; gap: 12px 16px; padding: 8px 0 2px; }
        header.clean-mobile-nav-open nav a { white-space: nowrap; }
      }
    </style>`;
          const mobileNavigationScript = html.includes('class="menu"') ? '' : `
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('header').forEach(function(header) {
          const nav = header.querySelector('nav');
          if (!nav || header.querySelector('.clean-mobile-nav-toggle')) return;
          const toggle = document.createElement('button');
          toggle.type = 'button';
          toggle.className = 'clean-mobile-nav-toggle';
          toggle.setAttribute('aria-expanded', 'false');
          toggle.textContent = 'Menu';
          toggle.addEventListener('click', function() {
            const open = header.classList.toggle('clean-mobile-nav-open');
            toggle.setAttribute('aria-expanded', String(open));
            toggle.textContent = open ? 'Close' : 'Menu';
          });
          header.insertBefore(toggle, nav);
        });
      });
    </script>`;
          const consentBanner = `
    <div class="mett-consent" role="dialog" aria-label="Cookie preferences" hidden>
      <p>We use analytics cookies to understand site usage and improve the experience.</p>
      <div><button type="button" data-consent="accept">Allow analytics</button><button type="button" data-consent="decline">Decline</button><a href="/privacy">Privacy</a></div>
    </div>
    <style>
      .mett-consent { position: fixed; left: 18px; right: 18px; bottom: 18px; z-index: 200; display: flex; align-items: center; justify-content: space-between; gap: 18px; max-width: 760px; padding: 16px 18px; border: 1px solid rgba(201,152,44,.45); border-radius: 16px; background: #11110f; color: #fff; box-shadow: 0 18px 45px rgba(0,0,0,.25); font: 14px/1.45 Arial, sans-serif; }
      .mett-consent[hidden] { display: none; }
      .mett-consent p { margin: 0; }
      .mett-consent div { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
      .mett-consent button, .mett-consent a { border: 0; border-radius: 999px; padding: 9px 13px; font: 700 12px Arial, sans-serif; cursor: pointer; }
      .mett-consent button[data-consent="accept"] { background: #dfba64; color: #11110f; }
      .mett-consent button[data-consent="decline"], .mett-consent a { background: transparent; color: #fff; border: 1px solid #5f594f; }
      @media (max-width: 650px) { .mett-consent { left: 12px; right: 12px; bottom: 12px; display: block; } .mett-consent div { margin-top: 12px; } }
    </style>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const banner = document.querySelector('.mett-consent');
        if (!banner) return;
        let choice = null;
        try { choice = localStorage.getItem('mett_cookie_consent'); } catch (error) {}
        if (!choice) banner.hidden = false;
        banner.querySelector('[data-consent="accept"]').addEventListener('click', function() {
          try { localStorage.setItem('mett_cookie_consent', 'accepted'); } catch (error) {}
          if (typeof window.mettLoadAnalytics === 'function') window.mettLoadAnalytics();
          if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
          banner.hidden = true;
        });
        banner.querySelector('[data-consent="decline"]').addEventListener('click', function() {
          try { localStorage.setItem('mett_cookie_consent', 'declined'); } catch (error) {}
          banner.hidden = true;
        });
      });
    </script>`;

          const cleanUrlHtml = html
            .replace(/href=["'](?:\.\/)?index\.html["']/gi, 'href="/"')
            .replace(/href=["'](?:\.\/)?([a-z0-9-]+)\.html["']/gi, 'href="/$1"')
            .replace(/https:\/\/www\.mettglobal\.com\/([a-z0-9-]+)\.html/gi, 'https://www.mettglobal.com/$1')
            .replace(/<title>[^<]*<\/title>/i, `<title>${pageTitle}</title>`)
            .replace(/(<meta\s+name=["']description["']\s+content=["'])[^"']*(["'])/i, `$1${pageDescription.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}$2`)
            .replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>(?=\s|<)/i, `<meta property="og:title" content="${pageTitle.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`)
            .replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>(?=\s|<)/i, `<meta property="og:description" content="${pageDescription.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`)
            .replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>(?=\s|<)/i, `<meta name="twitter:title" content="${pageTitle.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`)
            .replace(/<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>(?=\s|<)/i, `<meta name="twitter:description" content="${pageDescription.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`);
          const servicePaths = new Set(['/ecommerce-growth','/web-development','/ai-automation','/digital-marketing','/operations-supply-chain','/lead-generation-sales','/ai-content-production','/audits-diagnostics']);
          const serviceSchema = servicePaths.has(pagePath) && !cleanUrlHtml.includes('"@type":"Service"') ? `
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageTitle.split('|')[0].trim(),
      provider: { '@type': 'Organization', name: 'MettGlobal', url: 'https://www.mettglobal.com/' },
      areaServed: 'Worldwide',
      url: pageUrl,
      description: pageDescription,
    })}</script>` : '';
          const enrichedHtml = cleanUrlHtml
            .replace('</head>', `${metadata ? `\n    ${metadata}` : ''}${breadcrumb}${serviceSchema}${mobileNavigation}\n  </head>`)
            .replace('</head>', `${html.includes('G-PCBE7G3NXQ') ? '' : `${googleAnalyticsTag}\n`}  </head>`);
          return enrichedHtml.replace('</body>', `${mobileNavigationScript}${consentBanner}\n  </body>`);
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
        'contact-success.html',
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
