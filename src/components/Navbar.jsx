import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Menu, X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 border-b border-emerald-500/30 backdrop-blur-xl">
      <div className="px-4 py-2">
        {['Recursos', 'Preços', 'Sobre', 'Contato'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
            onClick={onClose}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10" />
      <div className="absolute inset-0 border-b border-emerald-500/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <Calculator className="h-8 w-8 text-emerald-400 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
              NoStress
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Recursos', 'Preços', 'Sobre', 'Contato'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative group py-2"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-emerald-400" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-400" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;