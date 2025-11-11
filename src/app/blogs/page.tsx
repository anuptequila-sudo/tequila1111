"use client";

import BlogsList from "@/components/sections/blogs/BlogsList";
import ContactSection from "@/components/sections/ContactSection";
import InformationSection from "@/components/sections/InformationSection";
import Footer from "@/components/layout/Footer";

export default function Blogs() {
  return (
    <div>
      <BlogsList />
      <ContactSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
