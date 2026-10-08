import type { MetadataRoute } from 'next';

import { getServicePath, services } from '@/content/services';
import { bookServicePath, siteConfig } from '@/lib/constants';

const staticRoutes = [
  '/',
  '/services',
  '/about',
  '/about/our-approach',
  '/about/service-coverage',
  '/news',
  '/contact',
  bookServicePath,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const { url: siteUrl } = siteConfig;
  if (!siteUrl) return [];

  const routes = [
    ...staticRoutes,
    ...services.map((service) => getServicePath(service.slug)),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
