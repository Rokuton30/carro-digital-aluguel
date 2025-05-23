import React, { useState } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Catalog = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const cars = [
    {
      id: 1,
      name: "Civic",
      brand: "Honda",
      year: 2023,
      image: "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático",
      category: "Sedan"
    },
    {
      id: 2,
      name: "HB20",
      brand: "Hyundai",
      year: 2022,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Manual",
      category: "Hatch"
    },
    {
      id: 3,
      name: "Corolla",
      brand: "Toyota",
      year: 2023,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500",
      passengers: 5,
      fuel: "Híbrido",
      transmission: "Automático",
      category: "Sedan"
    },
    {
      id: 4,
      name: "X1",
      brand: "BMW",
      year: 2022,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
      passengers: 5,
      fuel: "Gasolina",
      transmission: "Automático",
      category: "SUV"
    },
    {
      id: 5,
      name: "Compass",
      brand: "Jeep",
      year: 2023,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático",
      category: "SUV"
    },
    {
      id: 6,
      name: "Polo",
      brand: "Volkswagen",
      year: 2022,
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Manual",
      category: "Hatch"
    }
  ];
  
  const categories = [
    { value: 'Todos', label: t('category.all') },
    { value: 'Hatch', label: t('category.hatch') },
    { value: 'Sedan', label: t('category.sedan') },
    { value: 'SUV', label: t('category.suv') }
  ];
  
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            {t('catalog.title')} <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{t('catalog.titleHighlight')}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('catalog.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-800/70 backdrop-blur-sm shadow-lg text-white placeholder-gray-400"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-4 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-800/70 backdrop-blur-sm shadow-lg text-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value} className="bg-gray-800">
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              {t('catalog.noResults')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
