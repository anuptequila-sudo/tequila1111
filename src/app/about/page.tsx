"use client";

import AboutSection from "@/components/sections/about/AboutSection";
import HeroSection from "@/components/sections/about/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

import OurBrand from "@/components/sections/about/OurBrand";
import BrandIdeology from "@/components/sections/about/BrandIdeology";
import CoreValues from "@/components/sections/about/CoreValues";
import WhyUs from "@/components/sections/about/WhyUs";
import AgencyShowcase from "@/components/sections/about/AgencyShowcase";
import WhyWorkWithUs from "@/components/sections/about/WhyWorkWithUs";
import Ceo from "@/components/sections/about/Ceo";
import MeetTheTeam from "@/components/sections/about/MeetTheTeam";
import JoinTheWorkspace from "@/components/sections/about/JoinTheWorkspace";
import InformationSection from "@/components/sections/InformationSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurBrand />
      <BrandIdeology />
      <CoreValues title="Core Values" description="Our values that define how we work, connect and build meaningful partnerships." />
      <WhyUs />
      <AgencyShowcase />
      <Ceo />
      <MeetTheTeam />
      <WhyWorkWithUs />
      <JoinTheWorkspace />
      <ContactSection topSpace="" />
      <InformationSection />
      <Footer />
    </>
  );
}
