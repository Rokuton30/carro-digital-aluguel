
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface ContactButtonsProps {
  carName: string;
  carPrice: string;
}

const ContactButtons = ({ carName, carPrice }: ContactButtonsProps) => {
  const phoneNumber = "5511999999999"; // Substitua pelo seu número do WhatsApp
  
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${carName} (${carPrice}/dia). Gostaria de solicitar um orçamento.`
  );
  
  const imessageMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${carName} (${carPrice}/dia). Gostaria de solicitar um orçamento.`
  );
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };
  
  const handleiMessage = () => {
    window.open(`sms:${phoneNumber}&body=${imessageMessage}`, '_blank');
  };
  
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={handleWhatsApp}
        className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="font-medium">WhatsApp</span>
      </button>
      
      <button
        onClick={handleiMessage}
        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
      >
        <Phone className="h-4 w-4" />
        <span className="font-medium">iMessage</span>
      </button>
    </div>
  );
};

export default ContactButtons;
