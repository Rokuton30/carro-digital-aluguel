
import React from 'react';
import { Users, Fuel, Gauge, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactButtons from './ContactButtons';
import { useLanguage } from '../contexts/LanguageContext';

interface CarCardProps {
  id: number;
  name: string;
  brand: string;
  year: number;
  image: string;
  passengers: number;
  fuel: string;
  transmission: string;
  category: string;
}

const CarCard = ({ id, name, brand, year, image, passengers, fuel, transmission, category }: CarCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{brand} {name}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{t('car.year')}: {year}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="bg-blue-50 rounded-xl p-3 mb-2">
              <Users className="h-5 w-5 text-blue-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">{passengers} {t('car.passengers')}</p>
          </div>
          <div className="text-center">
            <div className="bg-green-50 rounded-xl p-3 mb-2">
              <Fuel className="h-5 w-5 text-green-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">{fuel}</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-50 rounded-xl p-3 mb-2">
              <Gauge className="h-5 w-5 text-purple-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">{transmission}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <Link
            to={`/car/${id}`}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="font-medium">{t('catalog.viewDetails')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <ContactButtons carName={`${brand} ${name}`} carPrice="" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
