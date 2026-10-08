import { MapPin } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { serviceArea } from '@/lib/constants';

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <Container className="flex h-9 items-center justify-between gap-4 text-xs">
        <p className="flex min-w-0 items-center gap-1.5">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">
            Based in {serviceArea.base}
            <span className="hidden sm:inline">
              <span aria-hidden="true" className="mx-2 opacity-60">
                |
              </span>
              {serviceArea.coverage}
            </span>
          </span>
        </p>
        <Link
          href="/news"
          className="shrink-0 font-medium underline-offset-4 hover:underline focus-visible:outline-primary-foreground"
        >
          News
        </Link>
      </Container>
    </div>
  );
}
