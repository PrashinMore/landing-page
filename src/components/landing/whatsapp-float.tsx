import { FaWhatsapp } from "react-icons/fa";

type WhatsappFloatProps = {
  whatsappNumber: string;
};

export function WhatsappFloat({ whatsappNumber }: WhatsappFloatProps) {
  const whatsappMessage = encodeURIComponent("Hi, I am interested in getting a website for my business.");
  const href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition hover:scale-105 hover:bg-emerald-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
