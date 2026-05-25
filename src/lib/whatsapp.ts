export const WHATSAPP_NUMBER = "2348148836800";

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
