import Link from 'next/link';

import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { bookServicePath, siteConfig } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center py-16 sm:py-24">
      <Container>
        <h1 className="text-display">{siteConfig.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={bookServicePath}
            className={buttonClassName({ size: 'lg' })}
          >
            Book a Service
          </Link>
          <Link
            href="/services"
            className={buttonClassName({ variant: 'outline', size: 'lg' })}
          >
            Explore Services
          </Link>
        </div>
      </Container>
    </div>
  );
}
