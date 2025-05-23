
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
    <div className="bg-gradient-to-b from-gray-900/90 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-700 transform hover:-translate-y-3 group border border-gray-800/50 hover:border-amber-500/30">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        <div className="absolute top-6 left-6 z-30">
          <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl border border-amber-400/30 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent mb-3">
            {brand} {name}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-amber-500" />
            <span className="font-medium">{t('car.year')}: {year}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-4 mb-3 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <Users className="h-6 w-6 text-blue-400 mx-auto" />
            </div>
            <p className="text-xs text-gray-400 font-medium">{passengers} {t('car.passengers')}</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-4 mb-3 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
              <Fuel className="h-6 w-6 text-emerald-400 mx-auto" />
            </div>
            <p className="text-xs text-gray-400 font-medium">{fuel}</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-4 mb-3 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <Gauge className="h-6 w-6 text-purple-400 mx-auto" />
            </div>
            <p className="text-xs text-gray-400 font-medium">{transmission}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link
            to={`/car/${id}`}
            className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl hover:shadow-amber-500/30 font-bold text-lg border border-amber-400/30 backdrop-blur-sm group/btn"
          >
            <span>{t('catalog.viewDetails')}</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <ContactButtons carName={`${brand} ${name}`} carPrice="" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
