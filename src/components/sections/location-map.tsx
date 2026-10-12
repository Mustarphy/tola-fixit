import { CircleCheck, MapPin, Navigation, Phone, Route } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import {
  businessAddress,
  businessMapLocation,
  contactDetails,
  serviceArea,
  siteConfig,
} from '@/lib/constants';
import { formatPhoneNumber, getPhoneHref } from '@/lib/contact';

const encodedMapQuery = encodeURIComponent(businessMapLocation.query);
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedMapQuery}&z=15&hl=en&ie=UTF8&iwloc=B&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedMapQuery}`;

export function LocationMap() {
  return (
    <section aria-labelledby="location-heading" className="py-16 sm:py-24">
      <Container>
        <div className="rounded-xl border bg-background p-4 shadow-sm sm:p-6">
          <h2
            id="location-heading"
            className="inline-block border-b-2 border-primary pb-2 text-base font-bold tracking-widest uppercase"
          >
            Our location
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-[22rem_1fr]">
            <ul className="space-y-4">
              <li className="rounded-lg border border-l-4 border-primary/30 border-l-primary bg-accent p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="flex items-center gap-2 font-semibold text-primary">
                    <MapPin aria-hidden="true" className="size-4 shrink-0" />
                    {siteConfig.name}
                  </p>
                  <span className="shrink-0 rounded-full border border-primary/20 bg-background px-2.5 py-1 text-xs font-medium">
                    {businessAddress.city}
                  </span>
                </div>
                <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
                  {businessAddress.street}, {businessAddress.area}
                  <br />
                  {businessAddress.landmark}, {businessAddress.city}
                  <br />
                  {businessAddress.state}, {businessAddress.country}
                </address>
                {contactDetails.phone && (
                  <a
                    href={getPhoneHref(contactDetails.phone)}
                    className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-foreground hover:text-primary"
                  >
                    <Phone aria-hidden="true" className="size-4 text-primary" />
                    <span className="sr-only">Call </span>
                    {formatPhoneNumber(contactDetails.phone)}
                  </a>
                )}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-primary/15 pt-4 text-sm font-semibold">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm text-primary underline-offset-4 hover:underline"
                  >
                    <Navigation aria-hidden="true" className="size-4" />
                    Get directions
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CircleCheck
                      aria-hidden="true"
                      className="size-4 text-primary"
                    />
                    {businessMapLocation.isExact
                      ? 'Shown on map'
                      : `${businessAddress.area} area shown`}
                  </span>
                </div>
              </li>

              <li className="rounded-lg border p-5">
                <p className="flex items-center gap-2 font-semibold">
                  <Route
                    aria-hidden="true"
                    className="size-4 shrink-0 text-primary"
                  />
                  {serviceArea.coverage}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Outside Ijebu Ode? Tell us where your vehicle is and we’ll
                  confirm how it can be serviced.
                </p>
                <Link
                  href="/about/service-coverage"
                  className="mt-4 inline-flex rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  About our service coverage
                </Link>
              </li>
            </ul>

            <div className="relative h-80 overflow-hidden rounded-lg border bg-surface sm:h-96 lg:h-auto lg:min-h-96">
              <iframe
                src={mapEmbedUrl}
                title={`Map showing ${businessMapLocation.isExact ? siteConfig.name : businessMapLocation.query}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
