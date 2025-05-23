
import React from 'react';
import { Car, Phone, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  return (
    <header className="bg-black/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl shadow-lg">
              <Car className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              AutoRent
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-amber-400 relative ${
                location.pathname === '/' ? 'text-amber-400' : 'text-gray-300'
              }`}
            >
              {t('nav.home')}
              {location.pathname === '/' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </Link>
            <Link 
              to="/catalog" 
              className={`font-medium transition-all duration-300 hover:text-amber-400 relative ${
                location.pathname === '/catalog' ? 'text-amber-400' : 'text-gray-300'
              }`}
            >
              {t('nav.catalog')}
              {location.pathname === '/catalog' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </Link>
            
            <LanguageSelector />
            
            <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all cursor-pointer shadow-lg hover:shadow-amber-500/25 transform hover:scale-105">
              <Phone className="h-4 w-4" />
              <span className="font-medium">{t('nav.contact')}</span>
            </div>
          </nav>
          
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
