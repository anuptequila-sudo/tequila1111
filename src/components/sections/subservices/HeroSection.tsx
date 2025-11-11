"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function HeroSection() {
  const videoWraRef = useRef<HTMLDivElement>(null);

  useScrollAnimations();

  useEffect(() => {
    if (!videoWraRef.current) return;

    const el = videoWraRef.current;

    // Timeline that is controlled by scroll
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "top top",
        scrub: true, // padding follows scroll directly
      },
    });

    // animate padding based on scroll progress
    scrollTL.fromTo(
      el,
      { transform: "scale(0.85)" },
      { transform: "scale(1)", ease: "none" } // no easing
    );

    return () => {
      scrollTL.kill();
    };
  }, []);

  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>Evolving your brand, without erasing its roots.</h1>
        </div>
        <div className="gap" />
        <div className="hero-middle">
          <span className="page-title">Brand Elevation</span>
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <a href="./">Home</a>
            </div>
            <div className="breadcrumb-item" aria-current="page">
              <a href="./">what we do</a>
            </div>
            <div className="breadcrumb-item" aria-current="page">
              <a href="./">Branding</a>
            </div>
            <div className="breadcrumb-item active" aria-current="page">
              Brand Elevation
            </div>
          </div>
          <span>At Tequila, we specialize in brand elevation — reimagining your identity with fresh energy, detailed guidelines, and powerful storytelling, while keeping the credibility of your existing logo intact.</span>
          <div className="hero-buttons" data-anime-hero-word-block>
            <Button variant="primary">See our work</Button>
          </div>
        </div>
      </div>
      <div className="hero--bg" ref={videoWraRef}>
        <Image priority width={1920} height={1080} placeholder="blur" blurDataURL="/images/subservices/subservices.webp" src="/images/subservices/subservices.webp" alt="About Banner" />
      </div>
    </section>
  );
}
