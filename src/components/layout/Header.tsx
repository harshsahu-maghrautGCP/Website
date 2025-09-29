"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo, navigationLinks } from "@/data/company";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl"> <img src="/public/logo.jpg" alt="" /> </span>
            </div> */}

            <span className="text-white font-bold text-xl"> <img src="/logo.jpg" alt="Maghraut Technologies" className="h-10 w-auto" /> </span>
            <div>
              <h1 className="text-xl font-bold text-gray-800 font-merriweather">
                {companyInfo.name}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.children ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                        <div className="px-4 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-800">Our Services</h3>
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="font-medium">{child.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              {navigationLinks.map((link) => (
                <div key={link.name} className="mb-4">
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-gray-600 hover:text-blue-600 py-1 text-sm transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;