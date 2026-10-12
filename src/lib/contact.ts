const nigerianNumberPattern = /^\+234(\d{3})(\d{3})(\d{4})$/;

export const defaultWhatsAppMessage =
  'Hello TOLA FIXIT, I’d like help with my vehicle.';

export function formatPhoneNumber(phone: string): string {
  return phone.replace(nigerianNumberPattern, '+234 $1 $2 $3');
}

export function getPhoneHref(phone: string): string {
  return `tel:${phone}`;
}

export function getWhatsAppHref(
  whatsapp: string,
  message: string = defaultWhatsAppMessage,
): string {
  const number = whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppMessage(serviceName: string): string {
  return `Hello TOLA FIXIT, I’d like to book ${serviceName} for my vehicle.`;
}
