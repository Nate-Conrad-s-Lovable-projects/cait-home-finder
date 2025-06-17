
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const PropertySearch = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Property search:', searchData);
    alert('Property search feature coming soon! Contact me directly for personalized property searches.');
  };

  return (
    <section id="property-search" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-navy-200 font-medium text-lg tracking-wide mb-4 block font-sans">
              Property Search
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-navy-200 max-w-2xl mx-auto font-sans">
              Search through Utah's finest properties or let me help you find the perfect home
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-sans">
                    <MapPin className="inline h-4 w-4 mr-2" />
                    Location
                  </label>
                  <Input
                    type="text"
                    placeholder="City, neighborhood, or ZIP code"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-sans">
                    <Home className="inline h-4 w-4 mr-2" />
                    Property Type
                  </label>
                  <Select onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-sans">
                    <DollarSign className="inline h-4 w-4 mr-2" />
                    Price Range
                  </label>
                  <Select onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-300k">Under $300K</SelectItem>
                      <SelectItem value="300k-500k">$300K - $500K</SelectItem>
                      <SelectItem value="500k-750k">$500K - $750K</SelectItem>
                      <SelectItem value="750k-1m">$750K - $1M</SelectItem>
                      <SelectItem value="over-1m">Over $1M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-sans">
                    Bedrooms
                  </label>
                  <Select onValueChange={(value) => setSearchData({...searchData, bedrooms: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-navy-900 hover:bg-navy-800 text-white py-4 text-lg font-sans"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-navy-200 mb-4 font-sans">
              Need help finding the perfect property? Let's work together!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 font-sans"
            >
              Contact Me for Personalized Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
