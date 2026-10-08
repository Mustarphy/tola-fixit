import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Container } from '@/components/ui/container';

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
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
        )}
      </Container>
    </div>
  );
}
