
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactButtonsProps {
  carName: string;
  carPrice: string;
}

const ContactButtons = ({ carName, carPrice }: ContactButtonsProps) => {
  const { t } = useLanguage();
  const phoneNumber = "5511999999999";
  
  const message = t('contact.message').replace('{car}', `${carName} ${carPrice}`);
  const whatsappMessage = encodeURIComponent(message);
  const imessageMessage = encodeURIComponent(message);
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };
  
  const handleiMessage = () => {
    window.open(`sms:${phoneNumber}&body=${imessageMessage}`, '_blank');
  };
  
  return (
    <div className="flex gap-3">
      <button
        onClick={handleWhatsApp}
        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="font-medium">{t('contact.whatsapp')}</span>
      </button>
      
      <button
        onClick={handleiMessage}
        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Phone className="h-4 w-4" />
        <span className="font-medium">{t('contact.imessage')}</span>
      </button>
    </div>
  );
};

export default ContactButtons;
