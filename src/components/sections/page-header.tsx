import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import type { ContentImage } from '@/types';

export interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  actions?: ReactNode;
  image?: ContentImage;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  image,
}: PageHeaderProps) {
  return (
    <div className="border-b bg-surface">
      <Container className="py-10 sm:py-14 lg:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="rounded-sm hover:text-primary">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => {
                const isCurrent = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    <ChevronRight aria-hidden="true" className="size-3.5" />
                    {isCurrent ? (
                      <span aria-current="page" className="text-foreground">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="rounded-sm hover:text-primary"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <div
          className={cn(
            image && 'grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16',
          )}
        >
          <div>
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-3xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
            {actions && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {actions}
              </div>
            )}
          </div>
          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
