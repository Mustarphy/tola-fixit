import type { Metadata } from 'next';
import Link from 'next/link';

import { StatusPage } from '@/components/layout/status-page';
import { buttonClassName } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <StatusPage
      eyebrow="404"
      title="Page not found"
      description="The page you are looking for does not exist or has been moved."
      actions={
        <Link href="/" className={buttonClassName()}>
          Back to home
        </Link>
      }
    />
  );
}
