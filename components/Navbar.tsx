
import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, ShoppingBag } from 'lucide-react';
import { SERVICES } from '../constants.ts';
import { Service } from '../types.ts';

interface NavbarProps {
  onSelectService: (service: Service) => void;
  onHome: () => void;
  onWorks: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelectService, onHome, onWorks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    onSelectService(service);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHome();
    setIsOpen(false);
  };

  const handleWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onWorks();
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleHomeClick}>
            <span className="text-2xl font-black tracking-tighter text-white">
              WEBRAND<span className="text-brand-500">EA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={handleHomeClick} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-brand-400 transition-colors">Home</button>
              
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors group-hover:text-brand-400">
                  Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Desktop Dropdown */}
                <div className="absolute left-0 mt-2 w-[600px] rounded-xl shadow-2xl bg-[#181b21] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 overflow-hidden">
                    <div className="p-4 grid grid-cols-2 gap-2">
                        {SERVICES.map((service) => (
                            <button 
                                key={service.id}
                                onClick={() => handleServiceClick(service)}
                                className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors text-left group/item"
                            >
                                <div className={`p-2 rounded-md bg-white/5 group-hover/item:bg-brand-500/20 mr-3 transition-colors`}>
                                    <service.icon className={`w-5 h-5 ${service.color}`} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-200 group-hover/item:text-white">{service.name}</div>
                                    <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">{service.shortDescription}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-white/5 p-3 text-center border-t border-white/5">
                        <a href="#services" onClick={handleHomeClick} className="text-xs font-bold text-brand-400 hover:text-brand-300 uppercase tracking-wide flex items-center justify-center">
                            View All Services
                        </a>
                    </div>
                </div>
              </div>

              <button onClick={handleWorksClick} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Works</button>

              <a href="#reviews" onClick={(e) => { if(window.location.hash !== '#reviews') handleHomeClick(e); }} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Reviews</a>
              <a href="#features" onClick={(e) => { if(window.location.hash !== '#features') handleHomeClick(e); }} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Us</a>
              <a href="#faq" onClick={(e) => { if(window.location.hash !== '#faq') handleHomeClick(e); }} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Member Area
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/5 max-h-[90vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={handleHomeClick} className="w-full text-left text-white block px-3 py-2 rounded-md text-base font-medium">Home</button>
            
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-gray-300 flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-white/5"
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="bg-black/20 rounded-lg mx-2 p-2 space-y-1">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service)}
                      className="w-full flex items-center p-2 rounded-md hover:bg-white/5 text-left text-gray-400 hover:text-white"
                    >
                      <service.icon className={`w-4 h-4 mr-3 ${service.color}`} />
                      <span className="text-sm font-medium">{service.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleWorksClick} className="w-full text-left text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:text-white">Works</button>

            <a href="#reviews" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
            <a href="#faq" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
