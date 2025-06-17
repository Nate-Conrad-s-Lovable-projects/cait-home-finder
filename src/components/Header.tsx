
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background opacity based on scroll
      setIsScrolled(currentScrollY > 10);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold font-serif transition-colors ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}>
              RealEstateCait
            </div>
            <div className={`hidden md:block text-sm font-sans transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              | Sky Realty
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              About
            </button>
            <button onClick={() => scrollToSection('services')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection('property-search')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Search
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              FAQ
            </button>
            <button onClick={() => scrollToSection('blog')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className={`transition-colors font-sans ${
              isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}>
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-md transition-all font-sans ${
                isScrolled 
                  ? 'bg-navy-900 hover:bg-navy-800 text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <Menu className={`h-6 w-6 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 border-t transition-colors ${
            isScrolled ? 'border-gray-100' : 'border-white/20'
          }`}>
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                About
              </button>
              <button onClick={() => scrollToSection('services')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Portfolio
              </button>
              <button onClick={() => scrollToSection('property-search')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Property Search
              </button>
              <button onClick={() => scrollToSection('testimonials')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                FAQ
              </button>
              <button onClick={() => scrollToSection('blog')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className={`text-left transition-colors font-sans ${
                isScrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
              }`}>
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className={`w-full mt-4 font-sans transition-all ${
                  isScrolled 
                    ? 'bg-navy-900 hover:bg-navy-800 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                }`}
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
