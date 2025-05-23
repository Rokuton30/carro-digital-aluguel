
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Fuel, Gauge, Calendar, Shield, Star } from 'lucide-react';
import Header from '../components/Header';
import ContactButtons from '../components/ContactButtons';
import { useLanguage } from '../contexts/LanguageContext';

const CarDetails = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  
  // Car data - in a real app this would come from an API
  const cars = [
    {
      id: 1,
      name: "Civic",
      brand: "Honda",
      year: 2023,
      image: "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=800",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático",
      category: "Sedan",
      gallery: [
        "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=800",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800"
      ],
      features: ["Air Conditioning", "Bluetooth", "GPS", "Backup Camera", "Leather Seats"],
      description: "O Honda Civic é conhecido por sua confiabilidade e eficiência. Perfeito para viagens longas e uso urbano."
    },
    {
      id: 2,
      name: "HB20",
      brand: "Hyundai",
      year: 2022,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      passengers: 5,
      fuel: "Flex",
      transmission: "Manual",
      category: "Hatch",
      gallery: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=800"
      ],
      features: ["Air Conditioning", "Bluetooth", "USB Port"],
      description: "Compacto e econômico, ideal para a cidade."
    }
  ];
  
  const car = cars.find(c => c.id === parseInt(id || '1'));
  
  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-white">Carro não encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/catalog" 
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao catálogo
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.name}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {car.gallery && car.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {car.gallery.slice(1).map((img, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-xl border border-gray-700/50">
                    <img 
                      src={img} 
                      alt={`${car.brand} ${car.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Car Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                  {car.category}
                </span>
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{t('car.year')}: {car.year}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {car.brand} {car.name}
              </h1>
            </div>
            
            {/* Specifications */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">{t('car.features')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Passageiros</p>
                    <p className="font-semibold text-white">{car.passengers} {t('car.passengers')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl">
                    <Fuel className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Combustível</p>
                    <p className="font-semibold text-white">{car.fuel}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-3 rounded-xl">
                    <Gauge className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Transmissão</p>
                    <p className="font-semibold text-white">{car.transmission}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features List */}
            {car.features && (
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Equipamentos</h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Description */}
            {car.description && (
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">{t('car.description')}</h3>
                <p className="text-gray-300 leading-relaxed">{car.description}</p>
              </div>
            )}
            
            {/* Contact Section */}
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 rounded-2xl p-6 text-black shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6" />
                <h3 className="text-xl font-bold">Garanta já o seu veículo!</h3>
              </div>
              <p className="mb-6 text-black/80">
                Entre em contato conosco para verificar disponibilidade e solicitar seu orçamento personalizado.
              </p>
              <ContactButtons 
                carName={`${car.brand} ${car.name}`} 
                carPrice="com o melhor preço"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
