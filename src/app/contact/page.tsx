import { Mail, Phone } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import Link from 'next/link';

import { LocationMap } from '@/components/sections/location-map';
import { PageHeader } from '@/components/sections/page-header';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { bookServicePath, contactDetails } from '@/lib/constants';
import {
  formatPhoneNumber,
  getPhoneHref,
  getWhatsAppHref,
} from '@/lib/contact';
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
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  isExternal?: boolean;
}

function getContactChannels(): ContactChannel[] {
  const { phone, email, whatsapp } = contactDetails;
  const channels: ContactChannel[] = [];

  if (phone) {
    channels.push({
      label: 'Phone',
      value: formatPhoneNumber(phone),
      href: getPhoneHref(phone),
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
      value: formatPhoneNumber(whatsapp),
      href: getWhatsAppHref(whatsapp),
      icon: WhatsAppIcon,
      isExternal: true,
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

      <Container className="pt-12 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <section aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading">Get in touch</h2>
            {contactChannels.length > 0 ? (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        {...(channel.isExternal && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
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
                          {channel.isExternal && (
                            <span className="sr-only">
                              {' '}
                              (opens in a new tab)
                            </span>
                          )}
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
          </section>

          <div className="rounded-lg bg-surface p-6 sm:p-8">
            <h2 className="text-h3 tracking-normal">
              Need a repair or service?
            </h2>
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
        </div>
      </Container>

      <LocationMap />
    </>
  );
}
