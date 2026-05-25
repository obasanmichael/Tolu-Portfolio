// Replace with Tolulope's actual WhatsApp number in international format (no + or spaces)
// e.g. "2348012345678"
export const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

export function createWhatsAppUrl({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const text = `Hello Tolulope, my name is ${name}.\n\nEmail: ${email}\n\n${message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
