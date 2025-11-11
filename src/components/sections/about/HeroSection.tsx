"use client";

import { useEffect, useRef } from "react";
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
    <section
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>
            We are Tequila <span className="hero-highlight"></span> <br />a
            Leading Branding & Web Design Company in Dubai
          </h1>
        </div>
        <div className="gap" />
        <div className="hero-middle">
          <span className="page-title">About Us</span>
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <a href="./">Home</a>
            </div>
            <div className="breadcrumb-item active" aria-current="page">
              The Agency
            </div>
          </div>
          <span>
            We craft purposeful brand identities and engaging digital
            experiences that connect, inspire, and perform — driven by insight,
            precision, and creativity.
          </span>
          <div className="hero-buttons" data-anime-hero-word-block>
            <Button variant="primary">Explore Services</Button>
            <Button variant="secondary">View Case Studies</Button>
          </div>
        </div>
      </div>
      <div className="hero--bg" ref={videoWraRef}>
        <img src="/images/about/about-banner.webp" alt="About Banner" />
      </div>
    </section>
  );
}
