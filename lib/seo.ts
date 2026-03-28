import { getSeoForPath, siteSeoConfig } from '../seo.config.js';

const routeJsonLdSelector = 'script[data-route-jsonld="true"]';

function upsertMeta(attribute: 'name' | 'property', key: string, value?: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const current = document.head.querySelector(selector);

  if (!value) {
    current?.remove();
    return;
  }

  const tag = current ?? document.createElement('meta');
  tag.setAttribute(attribute, key);
  tag.setAttribute('content', value);

  if (!current) {
    document.head.appendChild(tag);
  }
}

function upsertCanonical(href?: string) {
  const current = document.head.querySelector('link[rel="canonical"]');

  if (!href) {
    current?.remove();
    return;
  }

  const link = current ?? document.createElement('link');
  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', href);

  if (!current) {
    document.head.appendChild(link);
  }
}

function replaceJsonLd(payloads: unknown[]) {
  document.head.querySelectorAll(routeJsonLdSelector).forEach((node) => node.remove());

  payloads.forEach((payload) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.routeJsonld = 'true';
    script.text = JSON.stringify(payload);
    document.head.appendChild(script);
  });
}

export function applySeoForPath(pathname: string) {
  const seo = getSeoForPath(pathname);

  document.title = seo.fullTitle;
  document.documentElement.lang = 'es';

  upsertMeta('name', 'description', seo.description);
  upsertMeta('name', 'robots', seo.robots);
  upsertMeta('name', 'theme-color', siteSeoConfig.themeColor);
  upsertMeta('property', 'og:locale', siteSeoConfig.locale);
  upsertMeta('property', 'og:type', seo.type);
  upsertMeta('property', 'og:title', seo.fullTitle);
  upsertMeta('property', 'og:description', seo.description);
  upsertMeta('property', 'og:url', seo.absoluteUrl || undefined);
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', seo.fullTitle);
  upsertMeta('name', 'twitter:description', seo.description);

  upsertCanonical(seo.absoluteUrl || undefined);
  replaceJsonLd(seo.jsonLd ?? []);
}
