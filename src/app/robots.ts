import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(siteConfig.url && {
      sitemap: new URL('/sitemap.xml', siteConfig.url).toString(),
    }),
  };
}
