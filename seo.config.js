import { faqs } from './content/faqs.js';

export const siteSeoConfig = {
  brandName: 'La Refactoria',
  siteUrl: '',
  locale: 'es_CL',
  themeColor: '#111827',
  preferredLayoutsPath: '/tiendas-bicicletas',
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const routeSeo = {
  '/': {
    title: 'Software a medida, tiendas online y automatizaciones para pymes',
    description:
      'Desarrollamos software a medida, tiendas online y automatizaciones para pymes que quieren vender mejor, ordenar procesos y escalar con una operación más clara.',
    robots: 'index,follow',
    type: 'website',
    jsonLd: [homeFaqSchema],
  },
  '/tiendas-bicicletas': {
    title: 'Shopify, ecommerce y automatización para tiendas de bicicletas',
    description:
      'Creamos tiendas online para el rubro bicicleta con Shopify, automatizaciones y estructura ecommerce pensada para catálogo, marcas, taller y crecimiento comercial.',
    robots: 'index,follow',
    type: 'website',
    jsonLd: [],
  },
};

export function normalizePathname(pathname) {
  if (!pathname) return '/';
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

export function buildPageTitle(title) {
  return siteSeoConfig.brandName ? `${title} | ${siteSeoConfig.brandName}` : title;
}

export function getAbsoluteUrl(pathname) {
  if (!siteSeoConfig.siteUrl) return '';
  return new URL(normalizePathname(pathname), `${siteSeoConfig.siteUrl.replace(/\/+$/, '')}/`).toString();
}

export function getSeoForPath(pathname) {
  const normalized = normalizePathname(pathname);
  const seo = routeSeo[normalized] ?? routeSeo['/'];
  return {
    ...seo,
    pathname: normalized,
    fullTitle: buildPageTitle(seo.title),
    absoluteUrl: getAbsoluteUrl(seo.canonicalPath || normalized),
  };
}

export const prerenderRoutes = ['/', '/tiendas-bicicletas'];
