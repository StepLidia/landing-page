import { useEffect } from 'react';

type SeoMetadataProps = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const siteName = 'Lidia Stepanova';
const defaultImagePath = '/images/logo.webp';

function getAbsoluteUrl(path: string) {
  return new URL(path, window.location.origin).toString();
}

function setMetaByName(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonicalUrl(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

function setJsonLd(jsonLd: SeoMetadataProps['jsonLd']) {
  const existingElement = document.querySelector<HTMLScriptElement>('script[data-seo-json-ld="true"]');

  if (!jsonLd) {
    existingElement?.remove();
    return;
  }

  const element = existingElement ?? document.createElement('script');
  element.type = 'application/ld+json';
  element.dataset.seoJsonLd = 'true';
  element.textContent = JSON.stringify(jsonLd);

  if (!existingElement) {
    document.head.appendChild(element);
  }
}

function resolveJsonLdUrls(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(resolveJsonLdUrls);
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => {
      if ((key === 'url' || key === 'image' || key === '@id') && typeof entry === 'string' && entry.startsWith('/')) {
        return [key, getAbsoluteUrl(entry)];
      }

      return [key, resolveJsonLdUrls(entry)];
    }),
  );
}

export function SeoMetadata({
  title,
  description,
  path,
  imagePath = defaultImagePath,
  jsonLd,
}: SeoMetadataProps) {
  useEffect(() => {
    const canonicalUrl = getAbsoluteUrl(path);
    const imageUrl = getAbsoluteUrl(imagePath);

    document.title = title;
    setMetaByName('description', description);
    setMetaByName('robots', 'index, follow');
    setMetaByName('author', siteName);
    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', imageUrl);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', siteName);
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', imageUrl);
    setCanonicalUrl(canonicalUrl);
    setJsonLd(resolveJsonLdUrls(jsonLd) as SeoMetadataProps['jsonLd']);
  }, [description, imagePath, jsonLd, path, title]);

  return null;
}
