import type { ReactNode } from 'react';

import { Container } from '@/components/ui/container';

interface StatusPageProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function StatusPage({
  eyebrow,
  title,
  description,
  actions,
}: StatusPageProps) {
  return (
    <main className="flex flex-1 items-center py-16 sm:py-24">
      <Container className="max-w-xl text-center">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
        {actions && (
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {actions}
          </div>
        )}
      </Container>
    </main>
  );
}
