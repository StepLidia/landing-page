import { writeFile } from 'node:fs/promises';

const siteUrl = 'https://steplidia.pages.dev';
const sitemapPath = new URL('../public/sitemap.xml', import.meta.url);

const routes = [
  {
    path: '/',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/?section=about',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/?section=collaboration',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/?section=contact',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/projects',
    changefreq: 'monthly',
    priority: '0.9',
  },
];

function getLastModifiedDate(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function getAbsoluteUrl(path) {
  return new URL(path, siteUrl).toString();
}

function buildSitemap(lastmod = getLastModifiedDate()) {
  const urls = routes
    .map(({ path, changefreq, priority }) => [
      '  <url>',
      `    <loc>${escapeXml(getAbsoluteUrl(path))}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n'))
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

await writeFile(sitemapPath, buildSitemap(), 'utf8');

