
import React from 'react';
import Header from '../components/Header';
import { Car, Shield, Clock, Star, ArrowRight, Users, Fuel, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactButtons from '../components/ContactButtons';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const featuredCars = [
    {
      id: 1,
      name: "Civic",
      brand: "Honda",
      year: 2023,
      image: "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático"
    },
    {
      id: 4,
      name: "X1",
      brand: "BMW",
      year: 2022,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
      passengers: 5,
      fuel: "Gasolina",
      transmission: "Automático"
    },
    {
      id: 5,
      name: "Compass",
      brand: "Jeep",
      year: 2023,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                {t('hero.title')}
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl mb-10 text-blue-100 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/catalog"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl"
                >
                  {t('hero.viewCatalog')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-2xl font-bold transition-all">
                  {t('hero.contact')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?w=700" 
                alt="Luxury Car"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('features.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('features.security')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.security.desc')}</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('features.available')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.available.desc')}</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('features.rating')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.rating.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Veículos em Destaque</h2>
            <p className="text-gray-600 text-lg">Conheça alguns dos nossos modelos mais procurados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCars.map((car, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.brand} {car.name}</h3>
                  <p className="text-gray-600 mb-6">{car.year}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-xl p-3 mb-2">
                        <Users className="h-5 w-5 text-blue-600 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-600">{car.passengers}</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-50 rounded-xl p-3 mb-2">
                        <Fuel className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-600">{car.fuel}</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-50 rounded-xl p-3 mb-2">
                        <Gauge className="h-5 w-5 text-purple-600 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-600">{car.transmission}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={`/car/${car.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                    >
                      <span className="font-medium">{t('catalog.viewDetails')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <ContactButtons carName={`${car.brand} ${car.name}`} carPrice="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/catalog"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl"
            >
              Ver Todos os Veículos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <ContactButtons carName="um veículo" carPrice="" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl mr-3">
              <Car className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold">AutoRent</span>
          </div>
          <p className="text-gray-400">{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
