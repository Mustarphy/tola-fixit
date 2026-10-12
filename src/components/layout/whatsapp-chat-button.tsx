import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { contactDetails } from '@/lib/constants';
import { getWhatsAppHref } from '@/lib/contact';

export function WhatsAppChatButton() {
  const { whatsapp } = contactDetails;
  if (!whatsapp) return null;

  return (
    <a
      href={getWhatsAppHref(whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 bottom-4 z-30 flex items-center gap-3 rounded-full sm:right-6 sm:bottom-6 print:hidden"
    >
      <span
        aria-hidden="true"
        className="hidden rounded-md border bg-background px-3.5 py-2 text-sm text-muted-foreground shadow-md sm:block"
      >
        Need help?{' '}
        <span className="font-semibold text-foreground">Chat with us</span>
      </span>
      <span
        aria-hidden="true"
        className="grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-colors group-hover:bg-whatsapp-hover"
      >
        <WhatsAppIcon className="size-7" />
      </span>
      <span className="sr-only">
        Need help? Chat with us on WhatsApp (opens in a new tab)
      </span>
    </a>
  );
}
