import { Wrench } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 rounded-md',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground lg:size-10"
      >
        <Wrench className="size-5" strokeWidth={2.25} />
      </span>
      <span className="font-display text-lg leading-none font-bold tracking-tight lg:text-xl">
        TOLA <span className="text-primary">FIXIT</span>
      </span>
    </Link>
  );
}
