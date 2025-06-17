
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
          <p className="text-base md:text-lg text-black mb-4 mx-auto leading-relaxed font-sans">
            Working Hard For Your Home
          </p>
          
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight font-serif">
                RealEstateCait
              </h1>
              <span className="text-blue-600 text-4xl md:text-5xl font-bold font-serif mx-2">|</span>
              <span className="text-blue-600 text-4xl md:text-5xl font-bold font-serif">Sky Realty</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
