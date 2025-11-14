"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/services/CraftingBrands.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function CraftingBrands() {
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
    <section className="CraftingBrands-section">
      <div className="container-fixed">
        {/* Left 30% */}
        <div className="about-left">
          <h2 className="section--title" data-splitting-opacity-anime>
            Crafting Iconic Brands that Resonate & Grow Worldwide
          </h2>
          <div className="about-description">
            <p className="about-line-description" data-come-up-anime>
              <span className="description-highlight-space "></span>Feeling lost in a crowded market, no matter where you are? At Tequila, branding agency in Dubai, we don't just design logos; we build powerful brand experiences that cut through the noise, inspire trust, and drive tangible growth
              for businesses just like yours, across the globe. Let us transform your vision into an unforgettable brand that not only looks exceptional but truly performs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
