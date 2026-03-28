import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getSeoForPath, prerenderRoutes, siteSeoConfig } from '../seo.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const sourceHtmlPath = path.join(distDir, 'index.html');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildSeoHead(pathname) {
  const seo = getSeoForPath(pathname);
  const tags = [
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<meta name="theme-color" content="${escapeHtml(siteSeoConfig.themeColor)}" />`,
    `<meta property="og:locale" content="${escapeHtml(siteSeoConfig.locale)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.type)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
  ];

  if (seo.absoluteUrl) {
    tags.push(`<link rel="canonical" href="${escapeHtml(seo.absoluteUrl)}" />`);
    tags.push(`<meta property="og:url" content="${escapeHtml(seo.absoluteUrl)}" />`);
  }

  if (seo.jsonLd?.length) {
    seo.jsonLd.forEach((payload) => {
      tags.push(`<script type="application/ld+json">${JSON.stringify(payload)}</script>`);
    });
  }

  return {
    title: seo.fullTitle,
    tags: tags.join('\n  '),
  };
}

function stripManagedSeo(html) {
  return html
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="robots"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="theme-color"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:locale"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:type"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:url"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:card"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:title"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[\s\S]*?>\s*/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
}

function injectSeo(html, pathname) {
  const { title, tags } = buildSeoHead(pathname);
  const cleanedHtml = stripManagedSeo(html);
  const titleTag = `<title>${escapeHtml(title)}</title>`;
  const withoutTitle = cleanedHtml.replace(/<title>[\s\S]*?<\/title>/i, titleTag);
  return withoutTitle.replace('</head>', `  ${tags}\n</head>`);
}

async function writeRouteHtml(pathname, html) {
  const outputPath = pathname === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, pathname.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, 'utf8');
}

async function main() {
  const sourceHtml = await fs.readFile(sourceHtmlPath, 'utf8');

  await Promise.all(
    prerenderRoutes.map(async (pathname) => {
      const html = injectSeo(sourceHtml, pathname);
      await writeRouteHtml(pathname, html);
    }),
  );
}

await main();
