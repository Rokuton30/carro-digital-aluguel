
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                {t('hero.title')}
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/catalog"
                  className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
                >
                  {t('hero.viewCatalog')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-10 py-5 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-amber-400/20">
                  {t('hero.contact')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?w=700" 
                alt="Luxury Car"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700 border border-gray-700/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('features.title')}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('features.security')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('features.security.desc')}</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('features.available')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('features.available.desc')}</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('features.rating')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('features.rating.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Veículos em Destaque</h2>
            <p className="text-gray-400 text-lg">Conheça alguns dos nossos modelos mais procurados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCars.map((car, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-500 transform hover:-translate-y-2 group border border-gray-700/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{car.brand} {car.name}</h3>
                  <p className="text-gray-400 mb-6">{car.year}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-3 mb-2 border border-gray-600/50">
                        <Users className="h-5 w-5 text-amber-400 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-400">{car.passengers}</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-3 mb-2 border border-gray-600/50">
                        <Fuel className="h-5 w-5 text-emerald-400 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-400">{car.fuel}</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-3 mb-2 border border-gray-600/50">
                        <Gauge className="h-5 w-5 text-purple-400 mx-auto" />
                      </div>
                      <span className="text-sm text-gray-400">{car.transmission}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={`/car/${car.id}`}
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 font-medium"
                    >
                      <span>{t('catalog.viewDetails')}</span>
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
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-10 py-5 rounded-2xl font-bold inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
            >
              Ver Todos os Veículos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <ContactButtons carName="um veículo" carPrice="" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl mr-3 shadow-lg">
              <Car className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">AutoRent</span>
          </div>
          <p className="text-gray-400">{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
