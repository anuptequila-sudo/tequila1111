"use client";

import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function PortfolioCollection() {
  return (
    <>
      <FaqSection topSpace="calc(var(--header-height)  + var(--space-xxxl))" />
      <ContactSection />
      <InformationSection />
      <Footer />
    </>
  );
}
