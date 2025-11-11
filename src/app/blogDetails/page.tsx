"use client";

import HeroSection from "@/components/sections/blogDetails/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";
import BlogDetails from "@/components/sections/blogDetails/BlogDetails";

export default function Blogs() {
  return (
    <div>
      <HeroSection />
      <BlogDetails />
      <ContactSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
