import Link from 'next/link';

import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { bookServicePath } from '@/lib/constants';

interface BookServiceCtaProps {
  title?: string;
  description?: string;
  serviceSlug?: string;
}

export function BookServiceCta({
  title = 'Ready to get your vehicle looked at?',
  description = 'Tell us about your vehicle and the problem you’ve noticed, and we’ll take it from there.',
  serviceSlug,
}: BookServiceCtaProps) {
  const href = serviceSlug
    ? `${bookServicePath}?service=${serviceSlug}`
    : bookServicePath;

  return (
    <section className="bg-secondary text-secondary-foreground">
      <Container className="flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2>{title}</h2>
          <p className="mt-3 text-secondary-foreground/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={href}
            className={buttonClassName({
              size: 'lg',
              className: 'focus-visible:outline-secondary-foreground',
            })}
          >
            Book a Service
          </Link>
          <Link
            href="/contact"
            className={buttonClassName({
              variant: 'outline',
              size: 'lg',
              className:
                'border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:border-secondary-foreground focus-visible:outline-secondary-foreground',
            })}
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
