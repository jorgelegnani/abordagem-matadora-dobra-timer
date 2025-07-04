import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const handleExistingCustomerClick = () => {
    // Placeholder for Hotmart link - to be defined later
    console.log('Redirecting to Hotmart for existing customers');
    setIsMenuOpen(false);
  };
  const menuItems = [{
    label: 'Benefícios',
    id: 'beneficios'
  }, {
    label: 'Problema',
    id: 'problema'
  }, {
    label: 'Para Quem',
    id: 'para-quem'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-lg sm:text-xl text-slate-800 flex-shrink-0">
            Abordagem Matadora
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-slate-700 hover:text-primary font-medium transition-colors duration-200 whitespace-nowrap">
                {item.label}
              </button>)}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleExistingCustomerClick} className="whitespace-nowrap text-base text-white">
              Já Comprei
            </Button>
            <Button variant="cta" size="sm" onClick={() => scrollToSection('oferta')} className="shadow-lg whitespace-nowrap">
              Comprar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors duration-200 flex-shrink-0">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="py-4 space-y-2">
              {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 font-medium transition-colors duration-200">
                  {item.label}
                </button>)}
              <div className="px-4 pt-4 space-y-3">
                <Button variant="outline" size="sm" onClick={handleExistingCustomerClick} className="w-full">
                  Já Comprei
                </Button>
                <Button variant="cta" size="sm" onClick={() => scrollToSection('oferta')} className="w-full">
                  Comprar Agora
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;