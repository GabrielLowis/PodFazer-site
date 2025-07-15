import { useState } from 'react';
import { User, Settings, Menu, X } from 'lucide-react';
import Logo from "@/assets/Logo.png";
import placa from "@/assets/placa.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-4 sm:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={Logo}
            alt="Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-20 lg:w-20 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-16">
          <a 
            href="#sobre" 
            className="text-[#FBCC01] hover:text-cyan-300 transition-colors font-puff link-header font-medium text-lg xl:text-xl"
          >
            Sobre nós
          </a>
          <a 
            href="#propostas" 
            className="text-[#FBCC01] hover:text-cyan-300 transition-colors font-puff link-header font-medium text-lg xl:text-xl"
          >
            Propostas
          </a>
          <a 
            href="#atividades" 
            className="text-[#FBCC01] hover:text-cyan-300 transition-colors font-puff link-header font-medium text-lg xl:text-xl"
          >
            Atividades
          </a>
          <a 
            href="#contato" 
            className="text-[#FBCC01] hover:text-cyan-300 transition-colors font-puff link-header font-medium text-lg xl:text-xl"
          >
            Contato
          </a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button className="text-[#00ffff] hover:text-cyan-300 transition-colors">
            <User className="h-8 w-8 lg:h-10 lg:w-10" />
          </button>
          <button className="text-[#00ffff] hover:text-cyan-300 transition-colors">
            <Settings className="h-8 w-8 lg:h-10 lg:w-10" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-cyan-300 transition-colors"
          onClick={toggleMenu}
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out animate-in slide-in-from-top">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 border-b border-white/10">
              <img 
                src="/imagens-uploads/logo.png" 
                alt="Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
              <button 
                className="text-white hover:text-cyan-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            
            <nav className="flex flex-col px-6 py-8 space-y-6">
              <a 
                href="#sobre" 
                className="text-white hover:text-cyan-300 transition-colors font-puff link-header font-medium text-xl py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </a>
              <a 
                href="#propostas" 
                className="text-white hover:text-cyan-300 transition-colors font-puff link-header font-medium text-xl py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Propostas
              </a>
              <a 
                href="#atividades" 
                className="text-white hover:text-cyan-300 transition-colors font-puff link-header font-medium text-xl py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Atividades
              </a>
              <a 
                href="#contato" 
                className="text-white hover:text-cyan-300 transition-colors font-puff link-header font-medium text-xl py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              
              {/* Mobile Icons */}
              <div className="flex items-center space-x-8 pt-6 border-t border-white/10 md:hidden">
                <button className="text-white hover:text-cyan-300 transition-colors">
                  <User className="h-10 w-10" />
                </button>
                <button className="text-white hover:text-cyan-300 transition-colors">
                  <Settings className="h-10 w-10" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;