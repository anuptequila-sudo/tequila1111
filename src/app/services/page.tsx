"use client";

import HeroSection from "@/components/sections/services/HeroSection";
import CraftingBrands from "@/components/sections/services/CraftingBrands";
import Footer from "@/components/layout/Footer";

import ValuableAssets from "@/components/sections/services/ValuableAssets";
import ProvenProcess from "@/components/sections/services/ProvenProcess";
import BrandingServices from "@/components/sections/services/BrandingServices";
import TangibleResults from "@/components/sections/services/TangibleResults";
import SuccessStories from "@/components/sections/services/SuccessStories";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import LetsTalk from "@/components/sections/services/LetsTalk";
import InformationSection from "@/components/sections/InformationSection";

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <CraftingBrands />
      <ValuableAssets />
      <ProvenProcess
        title="Our Proven Process: The Tequila Way to Brand Success"
        description="We believe truly impactful branding is built on strategy, creativity, and collaboration. Our branding agency in Dubai, meticulously crafted a 9-step process ensures your brand's foundation is solid and its future is bright:"
      />
      <BrandingServices />
      <TangibleResults title="What You'll Achieve with Tequila: Tangible Results" description="Partnering with Tequila means investing in a future where your brand isn't just seen, but felt and remembered. Expect to gain:" />
      <SuccessStories title="Our Branding Success Stories: See the Impact" description="Don't just take our word for it. Explore how Tequila has transformed visions into iconic, impactful brands for our diverse clientele around the world." />
      <TestimonialsSlider />
      <LetsTalk />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </>
  );
}
