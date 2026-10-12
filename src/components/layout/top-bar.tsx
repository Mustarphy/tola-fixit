import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { contactDetails, serviceArea } from '@/lib/constants';
import { formatPhoneNumber, getPhoneHref } from '@/lib/contact';

const topBarLinkClasses =
  'inline-flex shrink-0 items-center gap-1.5 font-medium underline-offset-4 hover:underline focus-visible:outline-primary-foreground';

export function TopBar() {
  const { phone } = contactDetails;

  return (
    <div className="bg-primary text-primary-foreground">
      <Container className="flex h-9 items-center justify-between gap-4 text-xs">
        <p className="hidden min-w-0 items-center gap-1.5 sm:flex">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">
            Based in {serviceArea.base}
            <span className="hidden md:inline">
              <span aria-hidden="true" className="mx-2 opacity-60">
                |
              </span>
              {serviceArea.coverage}
            </span>
          </span>
        </p>
        <div className="flex flex-1 items-center justify-between gap-5 sm:flex-none sm:justify-end">
          {phone && (
            <a href={getPhoneHref(phone)} className={topBarLinkClasses}>
              <Phone aria-hidden="true" className="size-3.5" />
              <span className="sr-only">Call </span>
              {formatPhoneNumber(phone)}
            </a>
          )}
          <Link href="/news" className={topBarLinkClasses}>
            News
          </Link>
        </div>
      </Container>
    </div>
  );
}
