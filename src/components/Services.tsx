
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Home Buying",
      description: "Expert guidance through every step of the home buying process. From pre-approval to closing, I'll help you find and secure your dream home at the best possible price.",
      features: ["Market Analysis", "Property Search", "Negotiation", "Closing Support"]
    },
    {
      title: "Home Selling", 
      description: "Maximize your home's value with strategic marketing and expert negotiation. I'll ensure your property gets the attention it deserves and sells for top dollar.",
      features: ["Property Valuation", "Marketing Strategy", "Professional Photography", "Expert Negotiation"]
    },
    {
      title: "Home Valuation",
      description: "Get an accurate assessment of your property's current market value. Comprehensive market analysis to help you make informed real estate decisions.",
      features: ["CMA Reports", "Market Trends", "Comparative Analysis", "Investment Guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-navy-600 font-medium text-lg tracking-wide mb-4 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              How I Can Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your unique needs and goals
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-navy-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact me today for a free consultation and let's discuss your real estate goals
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-md transition-colors"
            >
              Get Your Free Quote
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Licensed with Sky Realty
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
