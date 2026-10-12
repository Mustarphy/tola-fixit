import { Phone } from 'lucide-react';

import { buttonClassName } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { contactDetails } from '@/lib/constants';
import {
  formatPhoneNumber,
  getPhoneHref,
  getWhatsAppHref,
} from '@/lib/contact';

interface QuickContactProps {
  title: string;
  description: string;
  whatsAppMessage?: string;
}

export function QuickContact({
  title,
  description,
  whatsAppMessage,
}: QuickContactProps) {
  const { phone, whatsapp } = contactDetails;
  if (!phone && !whatsapp) return null;

  return (
    <div className="rounded-lg border border-l-4 border-l-primary bg-background p-5 shadow-sm sm:p-6">
      <h2 className="text-h3 tracking-normal">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {whatsapp && (
          <a
            href={getWhatsAppHref(whatsapp, whatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName({
              variant: 'whatsapp',
              size: 'lg',
              className: 'px-4 text-sm sm:px-6 sm:text-base',
            })}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        {phone && (
          <a
            href={getPhoneHref(phone)}
            className={buttonClassName({
              variant: 'outline',
              size: 'lg',
              className: 'px-4 text-sm sm:px-6 sm:text-base',
            })}
          >
            <Phone aria-hidden="true" />
            Call {formatPhoneNumber(phone)}
          </a>
        )}
      </div>
    </div>
  );
}
