
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Utah's Housing Market Outlook for 2024",
      excerpt: "What to expect in Utah's real estate market this year, including price trends, inventory levels, and the best strategies for buyers and sellers.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2024",
      category: "Market Insights"
    },
    {
      id: 2,
      title: "First-Time Home Buyer's Guide to Utah",
      excerpt: "Everything you need to know about buying your first home in Utah, from getting pre-approved to closing day and beyond.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 10, 2024",
      category: "Home Buying"
    },
    {
      id: 3,
      title: "Staging Your Home for Maximum Appeal",
      excerpt: "Simple and effective staging tips that can help your home sell faster and for a better price in today's competitive market.",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 5, 2024",
      category: "Home Selling"
    },
    {
      id: 4,
      title: "Understanding Utah's Neighborhoods",
      excerpt: "A comprehensive guide to Utah's most popular neighborhoods, including amenities, schools, and what makes each area unique.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "February 28, 2024",
      category: "Local Insights"
    },
    {
      id: 5,
      title: "Investment Properties in Utah: What You Need to Know",
      excerpt: "Exploring the opportunities and considerations for real estate investment in Utah's growing market.",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "February 22, 2024",
      category: "Investment"
    },
    {
      id: 6,
      title: "Spring Home Maintenance Checklist",
      excerpt: "Essential tasks to keep your home in top condition and maintain its value throughout the spring season.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "February 15, 2024",
      category: "Home Maintenance"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-navy-600 font-medium text-lg tracking-wide mb-4 block font-sans">
              Blog & Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight font-serif">
              Real Estate Insights & Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              Stay informed with the latest market trends, tips, and insights to help you make the best real estate decisions
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-medium font-sans">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 font-sans">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight font-serif">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-sans">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-navy-600 font-medium group-hover:text-navy-800 transition-colors font-sans">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-md transition-colors font-sans">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
