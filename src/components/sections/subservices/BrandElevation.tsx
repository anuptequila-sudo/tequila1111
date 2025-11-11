"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/subservices/BrandElevation.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function BrandElevation() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimations();

  useEffect(() => {
    if (sectionRef.current) {
      const lines = sectionRef.current.querySelectorAll(".about-line");

      gsap.fromTo(
        lines,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="BrandElevation-section">
      <div className="container-fixed">
        {/* Left 30% */}
        <div className="about-left">
          <h2 className="about-line" data-splitting-opacity-anime>
            What is Brand Elevation?
          </h2>
          <div className="BrandElevation-container">
            <div className="BrandElevation-item-first">
              <p className="BrandElevation-header-description" data-splitting-opacity-anime>
                <span className="description-highlight-space" data-come-up-anime></span>
                Not every brand needs a revolution. Sometimes, what you really need is an elevation.
              </p>
            </div>
          </div>
          <div className="about-description">
            <p className="about-line-description" data-come-up-anime>
              <span className="description-highlight-space "></span>Brand Elevation is about keeping the strength and recognition of your current logo — while building everything else around it into a complete, modern, and unforgettable experience. We add depth, detail, and drama so your brand feels
              fresh and relevant, without losing the trust you’ve already earned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
