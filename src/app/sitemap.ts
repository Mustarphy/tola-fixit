import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/constants';

const indexedRoutes = ['/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const { url: siteUrl } = siteConfig;
  if (!siteUrl) return [];

  return indexedRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
