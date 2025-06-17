
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Makayla",
      text: "I met Cait in real life just before I was ready to purchase my first home. I was so impressed with how hard she worked and how dedicated she was to helping her clients not only secure their dream home, but to also get them the best deal possible! When it came time for me to buy my first home, Cait was my first and only call. She took me to as many showings as I wanted, shared her expertise and counsel, and worked miracles with my lender, and community builder and designer to actualize my hopes for my first home."
    },
    {
      name: "Lisa",
      text: "We had a wonderful experience with Cait! We had very specific needs in our home search. Cait went above and beyond finding and showing us homes that would work for our needs. We are thrilled with the home we purchased! With all the twists and turns that happen in negotiating and closing on a home, we felt confident that Cait had our back and we're so grateful she represented us so well. I will recommend Cait to all my friends!"
    },
    {
      name: "Brady",
      text: "In an environment filled with greed and cutting corners, Cait Peterson is the friendliest, hardest working, and most thorough agent in the area. She is purely in this business to help others not only achieve a positive outcome but have an enjoyable experience throughout."
    },
    {
      name: "Bryan",
      text: "Cait was amazing helping me purchase my home! She took the time to understand what I was looking for and the price range I needed to stay in, not only that but she was patient and understood that I was going to be picky with what I needed. I highly recommend her for anything you would need for purchasing a home."
    },
    {
      name: "Kristen",
      text: "I have bought two homes, and sold two homes with Cait, and she is amazing! She is very reliable, knowledgeable and goes above and beyond to make the purchase successful. I couldn't recommend her enough. We will continue to use her for more real estate purchases!"
    },
    {
      name: "Kaylie",
      text: "Cait was an extraordinary realtor, and we cannot recommend her enough! Her sharpness, creativity, and problem-solving skills were unmatched, and she consistently went above and beyond as our advocate, especially when challenges arose during the sales process. Cait's professionalism and dedication left a lasting impression on us. If we had the chance, we would work with her again and again. Simply put, we can't say enough wonderful things about Cait!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-navy-600 font-medium text-lg tracking-wide mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real people who trusted me with their real estate journey
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <Card className="bg-navy-50 border-0 shadow-lg min-h-[300px]">
              <CardContent className="p-8 md:p-12">
                <div className="text-4xl text-navy-200 mb-4">"</div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  {testimonials[currentIndex].text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">Happy Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-navy-900 hover:bg-navy-800 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-navy-900 hover:bg-navy-800 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-navy-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Sky Realty
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
