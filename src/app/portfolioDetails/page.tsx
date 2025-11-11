"use client";

import HeroSection from "@/components/sections/portfolioDetails/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function PortfolioDetails() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
