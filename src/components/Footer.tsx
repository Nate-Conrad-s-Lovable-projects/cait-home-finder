
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-navy-900 mb-4">
                RealEstateCait
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Working hard for your home. Expert real estate services with over 8 years of experience in Utah's dynamic market.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                Licensed with Sky Realty
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-navy-900 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-navy-900 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-navy-900 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-navy-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-600 hover:text-navy-900 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-navy-900 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-navy-900 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-600 hover:text-navy-900 transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-navy-900 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Home Buying</li>
                <li>Home Selling</li>
                <li>Home Valuation</li>
                <li>CMA Reports</li>
                <li>Market Analysis</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 RealEstateCait. All rights reserved. | Sky Realty
              </div>
              <div className="flex space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-navy-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-navy-900 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-navy-900 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
