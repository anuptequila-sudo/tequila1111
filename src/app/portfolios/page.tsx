"use client";

import Portfolios from "@/components/sections/portfolios/Portfolios";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function PortfolioCollection() {
  return (
    <div>
      <Portfolios />
      <ContactSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
