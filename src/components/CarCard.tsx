
import React from 'react';
import { Users, Fuel, Gauge, Calendar } from 'lucide-react';
import ContactButtons from './ContactButtons';

interface CarCardProps {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: string;
  image: string;
  passengers: number;
  fuel: string;
  transmission: string;
  category: string;
}

const CarCard = ({ name, brand, year, price, image, passengers, fuel, transmission, category }: CarCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{brand} {name}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{year}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-blue-600" />
            <span>{passengers} pessoas</span>
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1 text-blue-600" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1 text-blue-600" />
            <span>{transmission}</span>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-blue-600">R$ {price}</span>
              <span className="text-gray-600 ml-1">/dia</span>
            </div>
          </div>
          
          <ContactButtons carName={`${brand} ${name}`} carPrice={`R$ ${price}`} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
