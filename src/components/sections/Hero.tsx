"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float-delayed" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-float" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 font-merriweather mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insighting Every Process
              </span>
              <br />
              <span className="text-gray-800">
                with Cloud, Data and AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-merriweather">
              {companyInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Let&apos;s Talk Salesforce!
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-merriweather">
                Stay Updated
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitted ? '✓ Subscribed' : 'Subscribe'}
                </button>
              </form>
              {isSubmitted && (
                <p className="text-green-600 text-sm mt-2">
                  Thank you for subscribing! We&apos;ll keep you updated.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image/Illustration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1bcb5fae-a627-4613-b8e2-abf8fdddcb89.png"
          alt="Cloud, Data and AI visualization"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;