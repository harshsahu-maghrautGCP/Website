"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyInfo } from "@/data/company";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Team Members", value: "15+" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to solve complex business challenges.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our business dealings.",
      icon: "🛡️"
    },
    {
      title: "Impact",
      description: "We measure our success by the positive impact we create for our clients and communities.",
      icon: "🌟"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to deliver exceptional results.",
      icon: "🤝"
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
                About Maghraut Technologies
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Empowering businesses to transform their processes with the power of Cloud, Data, and AI. 
                We are your trusted Salesforce partner on the journey to digital excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    At Maghraut Technologies, our journey began with a simple yet powerful vision: 
                    to empower organizations with cutting-edge solutions and personalized strategies 
                    that drive real business transformation.
                  </p>
                  <p>
                    Founded with a deep understanding of the Salesforce ecosystem, we have grown 
                    from a small team of passionate consultants to a comprehensive solutions provider 
                    serving businesses across various industries.
                  </p>
                  <p>
                    What sets us apart is our commitment to not just implementing technology, but 
                    ensuring it becomes an integral part of our clients&apos; success stories. We believe 
                    in building long-term partnerships that evolve with your business needs.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32c57e72-760e-4eca-81e0-464197d079ae.png"
                    alt="Maghraut Technologies Office"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These numbers reflect our commitment to delivering exceptional results 
                and building lasting partnerships with our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-merriweather mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we approach 
                every project and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 font-merriweather mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-merriweather mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join the growing number of businesses that trust Maghraut Technologies 
              for their Salesforce transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
