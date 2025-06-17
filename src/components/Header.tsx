
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-navy-900 font-serif">
              RealEstateCait
            </div>
            <div className="hidden md:block text-sm text-gray-600 font-sans">
              | Sky Realty
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('property-search')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Search
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              FAQ
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-navy-900 transition-colors font-sans">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-md transition-colors font-sans"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('property-search')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Property Search
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                FAQ
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-navy-900 transition-colors font-sans">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white w-full mt-4 font-sans"
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
