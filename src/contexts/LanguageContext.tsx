
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.catalog': 'Catálogo',
    'nav.contact': '(11) 99999-9999',
    
    // Home page
    'hero.title': 'Alugue o Carro',
    'hero.subtitle': 'Dos Seus Sonhos',
    'hero.description': 'Oferecemos a melhor frota de veículos com atendimento excepcional. Sua viagem merece o melhor!',
    'hero.viewCatalog': 'Ver Catálogo',
    'hero.contact': 'Falar Conosco',
    
    // Features
    'features.title': 'Por Que Escolher a AutoRent?',
    'features.subtitle': 'Oferecemos mais do que apenas carros - oferecemos experiências',
    'features.security': 'Segurança Garantida',
    'features.security.desc': 'Todos os veículos passam por rigorosa inspeção e possuem seguro completo',
    'features.available': 'Disponível 24/7',
    'features.available.desc': 'Atendimento e suporte disponível a qualquer hora do dia ou da noite',
    'features.rating': 'Melhor Avaliação',
    'features.rating.desc': 'Mais de 1000 clientes satisfeitos e nota 5 estrelas no Google',
    
    // Catalog
    'catalog.title': 'Nosso',
    'catalog.titleHighlight': 'Catálogo',
    'catalog.subtitle': 'Encontre o carro perfeito para sua viagem',
    'catalog.search': 'Buscar por marca ou modelo...',
    'catalog.noResults': 'Nenhum veículo encontrado com os filtros selecionados.',
    'catalog.viewDetails': 'Ver Detalhes',
    
    // Car details
    'car.passengers': 'pessoas',
    'car.year': 'Ano',
    'car.features': 'Características',
    'car.description': 'Descrição',
    'car.contact': 'Solicitar Orçamento',
    
    // Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.imessage': 'iMessage',
    'contact.message': 'Olá! Tenho interesse no {car}. Gostaria de solicitar um orçamento.',
    
    // CTA
    'cta.title': 'Pronto Para Sua Próxima Viagem?',
    'cta.subtitle': 'Entre em contato conosco agora e garanta o melhor atendimento!',
    
    // Footer
    'footer.rights': '© 2024 AutoRent. Todos os direitos reservados.',
    
    // Categories
    'category.all': 'Todos',
    'category.hatch': 'Hatch',
    'category.sedan': 'Sedan',
    'category.suv': 'SUV'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.catalog': 'Catalog',
    'nav.contact': '(11) 99999-9999',
    
    // Home page
    'hero.title': 'Rent the Car',
    'hero.subtitle': 'Of Your Dreams',
    'hero.description': 'We offer the best vehicle fleet with exceptional service. Your trip deserves the best!',
    'hero.viewCatalog': 'View Catalog',
    'hero.contact': 'Contact Us',
    
    // Features
    'features.title': 'Why Choose AutoRent?',
    'features.subtitle': 'We offer more than just cars - we offer experiences',
    'features.security': 'Guaranteed Security',
    'features.security.desc': 'All vehicles undergo rigorous inspection and have comprehensive insurance',
    'features.available': 'Available 24/7',
    'features.available.desc': 'Service and support available at any time of day or night',
    'features.rating': 'Best Rating',
    'features.rating.desc': 'Over 1000 satisfied customers and 5-star rating on Google',
    
    // Catalog
    'catalog.title': 'Our',
    'catalog.titleHighlight': 'Catalog',
    'catalog.subtitle': 'Find the perfect car for your trip',
    'catalog.search': 'Search by brand or model...',
    'catalog.noResults': 'No vehicles found with the selected filters.',
    'catalog.viewDetails': 'View Details',
    
    // Car details
    'car.passengers': 'people',
    'car.year': 'Year',
    'car.features': 'Features',
    'car.description': 'Description',
    'car.contact': 'Request Quote',
    
    // Contact
    'contact.whatsapp': 'WhatsApp',
    'contact.imessage': 'iMessage',
    'contact.message': 'Hello! I am interested in the {car}. I would like to request a quote.',
    
    // CTA
    'cta.title': 'Ready For Your Next Trip?',
    'cta.subtitle': 'Contact us now and get the best service!',
    
    // Footer
    'footer.rights': '© 2024 AutoRent. All rights reserved.',
    
    // Categories
    'category.all': 'All',
    'category.hatch': 'Hatch',
    'category.sedan': 'Sedan',
    'category.suv': 'SUV'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
