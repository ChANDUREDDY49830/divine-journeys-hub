import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phone = "919000701888";
  const message = encodeURIComponent("Hi! I'm interested in Kailash Mansarovar Yatra packages. Please share details.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full p-4 shadow-lg animate-pulse-gold transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
