"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import FounderSection from "@/components/sections/FounderSection";
import PledgeSection from "@/components/sections/PledgeSection";
import CollaborationSection from "@/components/sections/CollaborationSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <AffiliationsSection />
        <FounderSection />
        <PledgeSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
}
