
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
    <div className="flex gap-4">
      <button
        onClick={handleWhatsApp}
        className="flex-1 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl hover:shadow-emerald-500/30 font-bold border border-emerald-500/30 backdrop-blur-sm group/whats"
      >
        <MessageCircle className="h-5 w-5 group-hover/whats:scale-110 transition-transform duration-300" />
        <span>{t('contact.whatsapp')}</span>
      </button>
      
      <button
        onClick={handleiMessage}
        className="flex-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl hover:shadow-blue-500/30 font-bold border border-blue-500/30 backdrop-blur-sm group/imsg"
      >
        <Phone className="h-5 w-5 group-hover/imsg:scale-110 transition-transform duration-300" />
        <span>{t('contact.imessage')}</span>
      </button>
    </div>
  );
};

export default ContactButtons;
