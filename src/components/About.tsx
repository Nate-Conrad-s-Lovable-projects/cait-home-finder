
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cait Peterson - Real Estate Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">8+ Years</div>
                <div className="text-navy-200">Experience</div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="mb-6">
                <span className="text-navy-600 font-medium text-lg tracking-wide">
                  About Me
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                Meet Cait Peterson
              </h2>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Cait Peterson is a dedicated and detail-oriented real estate professional with over eight years of experience in Utah's dynamic housing market. As a proud mother of one boy, Cait brings her nurturing and determined spirit to her work, helping over 100 buyers and sellers achieve their real estate goals.
                </p>
                <p>
                  Known for her hard-working nature, she excels at finding the best deals for her clients, ensuring every transaction is seamless and tailored to their needs. Passionate about living in Utah, Cait combines her deep knowledge of the local market with a commitment to exceptional service, making her a trusted partner in every real estate journey.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-navy-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-navy-900 mb-2">100+</div>
                  <div className="text-gray-600">Successful Transactions</div>
                </div>
                <div className="bg-navy-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-navy-900 mb-2">Utah</div>
                  <div className="text-gray-600">Market Expert</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                Licensed with Sky Realty
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
