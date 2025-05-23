
import React from 'react';
import Header from '../components/Header';
import { Car, Shield, Clock, Star, ArrowRight, Users, Fuel, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactButtons from '../components/ContactButtons';

const Index = () => {
  const featuredCars = [
    {
      name: "Civic",
      brand: "Honda",
      year: 2023,
      price: "180",
      image: "https://images.unsplash.com/photo-1619976215249-93c5c7e9bb3e?w=500",
      passengers: 5,
      fuel: "Flex",
      transmission: "Automático"
    },
    {
      name: "X1",
      brand: "BMW",
      year: 2022,
      price: "350",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
      passengers: 5,
      fuel: "Gasolina",
      transmission: "Automático"
    },
    {
      name: "Compass",
      brand: "Jeep",
      year: 2023,
      price: "280",
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
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Alugue o Carro
                <span className="block text-yellow-400">Dos Seus Sonhos</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Oferecemos a melhor frota de veículos com preços competitivos e atendimento excepcional. 
                Sua viagem merece o melhor!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/catalog"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  Ver Catálogo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold transition-all">
                  Falar Conosco
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600" 
                alt="Luxury Car"
                className="w-full h-auto rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Por Que Escolher a AutoRent?</h2>
            <p className="text-gray-600">Oferecemos mais do que apenas carros - oferecemos experiências</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Segurança Garantida</h3>
              <p className="text-gray-600">Todos os veículos passam por rigorosa inspeção e possuem seguro completo</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Disponível 24/7</h3>
              <p className="text-gray-600">Atendimento e suporte disponível a qualquer hora do dia ou da noite</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Melhor Avaliação</h3>
              <p className="text-gray-600">Mais de 1000 clientes satisfeitos e nota 5 estrelas no Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Veículos em Destaque</h2>
            <p className="text-gray-600">Conheça alguns dos nossos modelos mais procurados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={car.image} 
                  alt={`${car.brand} ${car.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{car.brand} {car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.year}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-blue-600" />
                      <span>{car.passengers}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1 text-blue-600" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-4 w-4 mr-1 text-blue-600" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">R$ {car.price}</span>
                        <span className="text-gray-600 ml-1">/dia</span>
                      </div>
                    </div>
                    
                    <ContactButtons carName={`${car.brand} ${car.name}`} carPrice={`R$ ${car.price}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/catalog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold inline-flex items-center gap-2 transition-all transform hover:scale-105"
            >
              Ver Todos os Veículos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto Para Sua Próxima Viagem?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Entre em contato conosco agora e garante o melhor preço!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <ContactButtons carName="um veículo" carPrice="com o melhor preço" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">AutoRent</span>
          </div>
          <p className="text-gray-400">© 2024 AutoRent. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
