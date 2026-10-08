import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/components/sections/page-header';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { bookServicePath, contactDetails, serviceArea } from '@/lib/constants';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Contact TOLA FIXIT about vehicle repair, diagnostics and maintenance. Based in Ijebu Ode, Ogun State, serving customers across Nigeria and beyond.',
  path: '/contact',
});

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

function getContactChannels(): ContactChannel[] {
  const { phone, email, whatsapp } = contactDetails;
  const channels: ContactChannel[] = [];

  if (phone) {
    channels.push({
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
      icon: Phone,
    });
  }
  if (email) {
    channels.push({
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    });
  }
  if (whatsapp) {
    channels.push({
      label: 'WhatsApp',
      value: whatsapp,
      href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
      icon: MessageCircle,
    });
  }

  return channels;
}

export default function ContactPage() {
  const contactChannels = getContactChannels();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact TOLA FIXIT"
        description="Questions about a service, or not sure what your vehicle needs? Get in touch."
        breadcrumbs={[{ label: 'Contact Us', href: '/contact' }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <section
            aria-labelledby="contact-details-heading"
            className="lg:col-span-2"
          >
            <h2 id="contact-details-heading">Get in touch</h2>
            {contactChannels.length > 0 ? (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        className="flex items-center gap-4 rounded-lg border p-5 transition-colors hover:border-primary"
                      >
                        <Icon
                          aria-hidden="true"
                          className="size-5 text-primary"
                        />
                        <span>
                          <span className="block text-sm text-muted-foreground">
                            {channel.label}
                          </span>
                          <span className="font-semibold">{channel.value}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-6 rounded-lg border border-dashed border-border-strong p-6 text-muted-foreground">
                Our phone, email and WhatsApp details will be published here
                soon.
              </p>
            )}

            <div className="mt-10 rounded-lg bg-surface p-6">
              <h3>Need a repair or service?</h3>
              <p className="mt-2 text-muted-foreground">
                Tell us about your vehicle, where it is and what you’ve noticed.
              </p>
              <Link
                href={bookServicePath}
                className={buttonClassName({ className: 'mt-5' })}
              >
                Book a Service
              </Link>
            </div>
          </section>

          <aside aria-labelledby="location-heading">
            <div className="rounded-lg border p-6">
              <MapPin aria-hidden="true" className="size-6 text-primary" />
              <h2
                id="location-heading"
                className="mt-4 text-h3 tracking-normal"
              >
                Location
              </h2>
              <p className="mt-2 text-muted-foreground">
                Based in {serviceArea.base}, Nigeria.
              </p>
              <p className="mt-2 text-muted-foreground">
                {serviceArea.coverage}.
              </p>
              <Link
                href="/about/service-coverage"
                className="mt-4 inline-flex rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                About our service coverage
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
