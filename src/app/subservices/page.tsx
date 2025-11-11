"use client";

import BrandElevation from "@/components/sections/subservices/BrandElevation";
import HeroSection from "@/components/sections/subservices/HeroSection";
import ElevationServices from "@/components/sections/subservices/ElevationServices";
import WhyBrandElevation from "@/components/sections/subservices/WhyBrandElevation";
import ProvenProcess from "@/components/sections/services/ProvenProcess";
import TangibleResults from "@/components/sections/services/TangibleResults";
import WhyWorkWithUs from "@/components/sections/about/WhyWorkWithUs";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import SuccessStories from "@/components/sections/services/SuccessStories";
import FaqsSection from "@/components/sections/FaqsSection";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function SubServicesPage() {
  return (
    <div>
      <HeroSection />
      <BrandElevation />
      <ElevationServices />
      <WhyBrandElevation />
      <ProvenProcess
        title="Our Proven Process: The Tequila Way to Brand Success"
        description="We believe truly impactful branding is built on strategy, creativity, and collaboration. Our branding agency in Dubai, meticulously crafted a 9-step process ensures your brand's foundation is solid and its future is bright:"
      />
      <SuccessStories title="Case Highlights" description="" />
      <TangibleResults title="The Value of Brand Elevation" description="Brand Elevation is more than design — it’s strategy, psychology, and storytelling combined. Here’s what it delivers:" />
      <WhyWorkWithUs />
      <TestimonialsSlider />
      <SuccessStories title="Case Highlights" description="" />
      <FaqsSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
