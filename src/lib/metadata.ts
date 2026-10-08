import type { Metadata } from 'next';

import { siteConfig } from '@/lib/constants';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    ...(siteConfig.url && { alternates: { canonical: path } }),
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      ...(siteConfig.url && { url: path }),
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
  };
}
