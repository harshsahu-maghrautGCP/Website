"use client";

import { companyInfo } from "@/data/company";

const AffiliationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-merriweather mb-6">
            Our Affiliations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to partner with industry leaders and be part of global initiatives 
            that drive positive change and innovation.
          </p>
        </div>

        {/* Affiliations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {companyInfo.affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="group text-center bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Logo Container */}
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={affiliation.logo}
                    alt={affiliation.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              {/* Affiliation Info */}
              <h3 className="text-xl font-bold text-gray-800 font-merriweather mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {affiliation.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {affiliation.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Partnership Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-merriweather mb-4">
              Trusted Salesforce Partner
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              As an official Salesforce partner, we bring certified expertise and proven methodologies 
              to every project. Our team holds multiple Salesforce certifications and stays current 
              with the latest platform innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Certified Consultants</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Proven Methodologies</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Industry Best Practices</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Continuous Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;