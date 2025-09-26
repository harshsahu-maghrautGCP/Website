"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { products, tailoredProducts } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-merriweather mb-8">
                Salesforce Products
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover the comprehensive suite of Salesforce products that can transform your business. 
                From sales and marketing to service and collaboration, we help you leverage the right tools 
                for your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Main Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-6">
                Core Salesforce Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the powerful Salesforce products that form the foundation of modern business transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Product Header */}
                  <div className={`relative h-64 bg-gradient-to-br ${product.color} p-8 text-white`}>
                    <h3 className="text-3xl font-bold font-merriweather mb-4">
                      Salesforce {product.name}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-lg p-3">
                            <span className="text-blue-700 font-medium text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tailored Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-6">
                Tailored Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond the core products, we help you implement specialized solutions 
                that address your unique business challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tailoredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 font-merriweather mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-6">
                  Curious about pricing?
                </h2>
                <p className="text-lg text-gray-600">
                  Salesforce offers a range of flexible pricing options to suit businesses at every stage of growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Flexible Pricing Packages
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Starter Suite</h4>
                    <p className="text-gray-600 text-sm">
                      Ideal for startups seeking a streamlined entry point with core Salesforce features 
                      for sales, service, and marketing.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Pro Suite</h4>
                    <p className="text-gray-600 text-sm">
                      Mid-tier solution with enhanced capabilities for growing businesses requiring 
                      advanced features and integrations.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Foundation Suite</h4>
                    <p className="text-gray-600 text-sm">
                      Designed for established businesses requiring a broader, more powerful feature set 
                      with advanced customization options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Custom Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}