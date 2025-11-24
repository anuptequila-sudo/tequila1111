"use client";

import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AwardsSection from "@/components/sections/AwardsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import FaqSection from "@/components/sections/FaqSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AwardsSection />
      <PortfolioSection />
      <TestimonialsSlider sectionTitle="Client Love" sectionSubtitle="Partnerships that last, stories that resonate—from clients and partners turned brand ambassadors." />
      <FaqSection topSpace="" />
      <BlogSection />
      <ContactSection topSpace="" />
      <InformationSection />
      <Footer />
    </>
  );
}
