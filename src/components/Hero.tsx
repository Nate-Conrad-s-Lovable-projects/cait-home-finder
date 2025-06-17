
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight font-serif">
            Your Expert Real Estate Agent in Utah
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-sans">
            With over 8 years of experience and 100+ successful transactions, I help families find their dream homes and investors build their portfolios throughout Utah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent hover:bg-navy-900 text-navy-900 hover:text-white border border-navy-900 px-8 py-4 text-lg rounded-md transition-all duration-300 font-sans"
            >
              Learn More
            </Button>
            <Button 
              onClick={scrollToContact}
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 transform hover:scale-105 font-sans"
            >
              Get Your Free Quote
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2 font-serif">8+</div>
              <div className="text-gray-600 font-sans">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2 font-serif">100+</div>
              <div className="text-gray-600 font-sans">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2 font-serif">$50M+</div>
              <div className="text-gray-600 font-sans">In Sales Volume</div>
            </div>
          </div>

          {/* Agent Name */}
          <div className="mt-12">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-serif">
                RealEstateCait
              </h2>
              <span className="text-navy-900 text-2xl md:text-3xl font-bold font-serif mx-2">|</span>
              <span className="text-navy-900 text-2xl md:text-3xl font-bold font-serif">Sky Realty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
