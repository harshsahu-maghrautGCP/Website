"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Salesforce AI: Transforming Business Processes in 2024",
      excerpt: "Discover how AI-powered Salesforce solutions are revolutionizing business operations and customer experiences.",
      date: "January 15, 2024",
      author: "Vijay Kumar Soni",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/482757cc-2a0d-418c-9222-67a0884aad28.png",
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Best Practices for Salesforce Implementation",
      excerpt: "A comprehensive guide to successful Salesforce implementation strategies and common pitfalls to avoid.",
      date: "January 10, 2024",
      author: "Maghraut Team",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/768bab8b-2ba8-4dfe-8bd2-d4ff610cddd7.png",
      category: "Implementation"
    },
    {
      id: 3,
      title: "Data Integration Strategies for Modern Businesses",
      excerpt: "Learn how to seamlessly integrate your existing systems with Salesforce for better data flow and insights.",
      date: "January 5, 2024",
      author: "Maghraut Team",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d138d011-b58f-4200-a952-921d9a35c386.png",
      category: "Integration"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-merriweather mb-8">
                Blog & Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Stay updated with the latest trends, best practices, and insights from the Salesforce ecosystem. 
                Our experts share knowledge to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 font-merriweather mb-3 hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 flex items-center space-x-1">
                        <span>Read More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold font-merriweather mb-4">
                  More Content Coming Soon!
                </h3>
                <p className="text-blue-100 mb-6">
                  We&apos;re working on bringing you more valuable insights and articles about Salesforce, 
                  cloud technologies, and business transformation.
                </p>
                <a
                  href="mailto:info@maghraut.com?subject=Blog Subscription"
                  className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Subscribe for Updates
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
