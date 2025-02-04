import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-black to-blue-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
              Precificação sem Estresse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200/80 mb-12 max-w-3xl mx-auto">
            Calcule preços ideais, maximize lucros e tome decisões mais inteligentes para seu negócio
          </p>
          
          <Link 
            to="/recursos" 
            className="relative group inline-block px-8 py-4 bg-transparent overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 border border-emerald-500 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center space-x-2">
              <span className="font-semibold text-white">
                Começar Agora
              </span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;