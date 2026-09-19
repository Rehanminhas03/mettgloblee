import './styles.css';

const menu = document.querySelector<HTMLButtonElement>('.menu');
const nav = document.querySelector<HTMLElement>('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') ?? false;
  menu.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  })
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const glow = document.querySelector<HTMLElement>('.cursor-glow');
window.addEventListener(
  'pointermove',
  event => {
    if (glow) {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }
  },
  { passive: true }
);

const year = document.querySelector<HTMLElement>('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

type DataLayerEvent = Record<string, string | number | boolean>;
declare global { interface Window { dataLayer?: DataLayerEvent[]; } }
window.dataLayer = window.dataLayer ?? [];

const track = (event: string, details: DataLayerEvent = {}) => {
  window.dataLayer?.push({ event, ...details });
};

document.querySelector<HTMLFormElement>('.contact-form')?.addEventListener('submit', () => track('contact_form_submit'));

document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
  link.addEventListener('click', () => {
    const href = link.getAttribute('href') ?? '';
    if (href.startsWith('https://wa.me/')) track('whatsapp_click', { location: link.closest('.floating-contact') ? 'floating' : 'contact' });
    else if (href.startsWith('tel:')) track('phone_click');
    else if (href.startsWith('mailto:')) track('email_click');
    else if (link.classList.contains('social')) track('social_click', { destination: link.getAttribute('aria-label') ?? link.textContent?.trim() ?? 'social' });
    else if (link.hasAttribute('data-google-review-link')) track('google_review_click');
    else if (href.includes('appointment.html')) track('appointment_intent', { label: link.textContent?.trim() ?? 'meeting' });
    else if (href === '#contact') track('contact_intent', { label: link.textContent?.trim() ?? 'contact' });
  });
});

window.addEventListener('load', () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  if (navigation) track('page_performance', { dom_content_loaded_ms: Math.round(navigation.domContentLoadedEventEnd), load_ms: Math.round(navigation.loadEventEnd) });
});
