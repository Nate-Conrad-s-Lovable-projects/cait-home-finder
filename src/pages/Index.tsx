
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import PropertySearch from '@/components/PropertySearch';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <PropertySearch />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
