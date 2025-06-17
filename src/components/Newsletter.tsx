
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! You\'ll receive market updates and real estate tips.');
    setEmail('');
  };

  return (
    <section className="py-16 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Utah's Real Estate Market
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Get exclusive market insights, new listings, and real estate tips delivered to your inbox monthly.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-gray-900"
            />
            <Button 
              type="submit"
              className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-2"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-navy-300 mt-4">
            No spam, unsubscribe at any time. Sky Realty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
