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
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 leading-tight font-serif">
            RealEstateCait | Sky Realty
          </h1>
          
          <p className="text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Working Hard For Your Home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 transform hover:scale-105 font-sans"
            >
              Get Your Free Quote
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-4 text-lg rounded-md transition-all duration-300 font-sans"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2 font-serif">100+</div>
              <div className="text-gray-600 font-sans">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2 font-serif">8+</div>
              <div className="text-gray-600 font-sans">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2 font-serif">100%</div>
              <div className="text-gray-600 font-sans">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
