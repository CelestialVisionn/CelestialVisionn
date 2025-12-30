import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsAppButton() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/book')) return null;

  const whatsappLink = `https://wa.me/918743907967?text=${encodeURIComponent('Hi! I would like to know more about your tarot and crystal services.')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50 flex items-center justify-center h-10 sm:h-11 w-10 sm:w-11 rounded-full hover:scale-110 transition-transform shadow-medium"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
}

export default FloatingWhatsAppButton;
