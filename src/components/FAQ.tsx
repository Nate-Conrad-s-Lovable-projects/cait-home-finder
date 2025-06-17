
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do you determine the right price for my home?",
      answer: "I conduct a comprehensive market analysis (CMA) that looks at recently sold comparable properties, current market conditions, your home's unique features, and local market trends. This data-driven approach ensures your home is priced competitively to attract buyers while maximizing your return."
    },
    {
      question: "What's the current state of Utah's real estate market?",
      answer: "Utah's real estate market remains strong with steady demand, especially in the Salt Lake City metropolitan area. While we've seen some market adjustments, Utah continues to attract new residents due to its growing economy, outdoor lifestyle, and business-friendly environment. I provide regular market updates to keep my clients informed."
    },
    {
      question: "How long does it typically take to sell a home?",
      answer: "On average, properly priced homes in Utah sell within 30-45 days. However, this can vary based on factors like location, price point, condition, and market conditions. My strategic marketing approach and extensive network help reduce time on market."
    },
    {
      question: "What should I expect during the home buying process?",
      answer: "The home buying process typically includes pre-approval, property search, making offers, home inspection, appraisal, final walkthrough, and closing. I guide you through each step, ensuring you understand the process and feel confident in your decisions. First-time buyers especially benefit from my detailed explanations and support."
    },
    {
      question: "Do you work with first-time home buyers?",
      answer: "Absolutely! I love working with first-time buyers and helping them navigate what can feel like an overwhelming process. I take extra time to explain each step, connect you with trusted lenders, and ensure you feel confident and informed throughout your home buying journey."
    },
    {
      question: "What areas of Utah do you serve?",
      answer: "I primarily serve the Salt Lake City metropolitan area, including Salt Lake City, West Jordan, Murray, Draper, Park City, Provo, and surrounding communities. My deep knowledge of these local markets helps me provide the best service to my clients."
    },
    {
      question: "What makes you different from other real estate agents?",
      answer: "With over 8 years of experience and 100+ successful transactions, I bring a combination of market expertise, negotiation skills, and genuine care for my clients. I'm known for working hard to get the best deals, providing exceptional communication, and treating every client like family."
    },
    {
      question: "How do you market homes for sale?",
      answer: "I use a comprehensive marketing strategy that includes professional photography, online listings on major platforms, social media promotion, virtual tours when appropriate, and leveraging my extensive network. Every home gets a customized marketing plan based on its unique features and target buyer demographics."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-navy-600 font-medium text-lg tracking-wide mb-4 block font-sans">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              Get answers to common questions about buying and selling real estate in Utah
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy-900 hover:text-navy-700 font-serif">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed font-sans">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4 font-sans">
              Still have questions? I'm here to help!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-md transition-colors font-sans"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
