
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Modern Family Home",
      location: "Salt Lake City, UT",
      status: "SOLD"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Luxury Mountain View",
      location: "Park City, UT",
      status: "SOLD"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Contemporary Townhouse",
      location: "Provo, UT",
      status: "SOLD"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Suburban Dream Home",
      location: "West Jordan, UT",
      status: "SOLD"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Cozy Starter Home",
      location: "Murray, UT",
      status: "SOLD"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Executive Estate",
      location: "Draper, UT",
      status: "SOLD"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-navy-600 font-medium text-lg tracking-wide mb-4 block font-sans">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight font-serif">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              Take a look at some of the beautiful homes I've helped clients buy and sell
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium font-sans">
                      {property.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 font-sans">
                    {property.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-sans">
              Want to see your home featured here? Let's work together to make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
