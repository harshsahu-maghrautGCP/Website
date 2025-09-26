"use client";

import Link from "next/link";
import { products, tailoredProducts } from "@/data/products";

const ProductsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-merriweather mb-6">
            Products
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlock the ideal starting point for your business journey—Salesforce offers a flexible 
            suite of products that adapt to your needs and scale effortlessly, helping you build 
            stronger customer relationships, streamline operations, and accelerate growth from day one.
          </p>
        </div>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white font-merriweather text-center px-4">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More */}
                <Link
                  href={`/products#${product.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 group"
                >
                  Learn More
                  <svg 
                    className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Products Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 font-merriweather text-center mb-12">
            Tailored Products
          </h3>
          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Salesforce offers a variety of solutions to help businesses grow and succeed. 
              Here are some ways Salesforce can assist your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tailoredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-lg font-bold text-gray-800 font-merriweather mb-3">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 group"
                    >
                      Learn More
                      <svg 
                        className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Products CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View More Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;