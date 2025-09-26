"use client";

import { companyInfo } from "@/data/company";

const PledgeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-merriweather mb-6">
              {companyInfo.pledge.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 font-merriweather mb-8">
              {companyInfo.pledge.subtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Pledge Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                    <img
                      src={companyInfo.pledge.image}
                      alt="Maghraut Technologies Pledge 1% Commitment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Pledge Badge */}
                <div className="absolute -top-6 -right-6 bg-purple-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                  <div className="text-2xl font-bold">1%</div>
                  <div className="text-xs">PLEDGE</div>
                </div>
              </div>
            </div>

            {/* Pledge Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {companyInfo.pledge.content.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://pledge1percent.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Learn About Pledge 1%
                  <svg 
                    className="w-4 h-4 ml-2" 
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

          {/* Impact Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-3xl font-bold text-purple-600 mb-2">1%</div>
              <div className="text-gray-600 font-medium">Of Resources Donated</div>
            </div>
            
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Hours Volunteered</div>
            </div>
            
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Nonprofits Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;