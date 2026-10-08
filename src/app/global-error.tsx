'use client';

import { StatusPage } from '@/components/layout/status-page';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';
import { fontVariables } from '@/lib/fonts';

import './globals.css';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function GlobalError({ retry }: GlobalErrorProps) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-dvh flex-col">
        <title>{`Something went wrong | ${siteConfig.name}`}</title>
        <main className="flex flex-1 flex-col">
          <StatusPage
            title="Something went wrong"
            description="An unexpected error occurred. Please try again."
            actions={<Button onClick={retry}>Try again</Button>}
          />
        </main>
      </body>
    </html>
  );
}
