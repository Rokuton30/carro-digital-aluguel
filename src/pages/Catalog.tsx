
import React, { useState } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import { Search, Filter } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const cars = [
    {
      id: 1,
      name: "Civic",
      brand: "Honda",
      year: 2023,
      price: "180",
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
      price: "120",
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
      price: "200",
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
      price: "350",
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
      price: "280",
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
      price: "140",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Manual",
      category: "Hatch"
    }
  ];
  
  const categories = ['Todos', 'Hatch', 'Sedan', 'SUV'];
  
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nosso <span className="text-blue-600">Catálogo</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Encontre o carro perfeito para sua viagem
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por marca ou modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum veículo encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
