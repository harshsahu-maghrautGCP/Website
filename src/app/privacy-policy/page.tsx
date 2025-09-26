"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-merriweather mb-8">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Maghraut Technologies, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Fill out contact forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services and updates</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Information Sharing
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information 
                  with trusted service providers who assist us in operating our website and conducting our business.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Data Security
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. You can choose to 
                  accept or decline cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  You have the right to access, update, or delete your personal information. 
                  If you wish to exercise these rights, please contact us using the information below.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6">
                  Contact Information
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@maghraut.com</p>
                    <p><strong>Phone:</strong> +917991989898</p>
                    <p><strong>Address:</strong> Bhukhan, No-6/D-765, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh, India, 226010</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 font-merriweather mb-6 mt-8">
                  Changes to This Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

