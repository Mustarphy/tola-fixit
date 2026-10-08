'use client';

import Link from 'next/link';

import { StatusPage } from '@/components/layout/status-page';
import { Button, buttonClassName } from '@/components/ui/button';

interface ErrorPageProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function ErrorPage({ retry }: ErrorPageProps) {
  return (
    <StatusPage
      title="Something went wrong"
      description="An unexpected error occurred. Please try again."
      actions={
        <>
          <Button onClick={retry}>Try again</Button>
          <Link href="/" className={buttonClassName({ variant: 'outline' })}>
            Back to home
          </Link>
        </>
      }
    />
  );
}
