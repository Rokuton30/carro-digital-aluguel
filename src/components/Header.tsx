
import React from 'react';
import { Car, Phone, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">AutoRent</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/catalog" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/catalog' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Catálogo
            </Link>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(11) 99999-9999</span>
            </div>
          </nav>
          
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
