"use client";

import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function PortfolioCollection() {
  return (
    <>
      <ContactSection topSpace="calc(var(--header-height)  + var(--space-xxxl))" />
      <InformationSection />
      <Footer />
    </>
  );
}
