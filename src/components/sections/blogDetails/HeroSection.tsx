"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const videoWraRef = useRef<HTMLDivElement>(null);

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
    <section className="hero" style={{ position: "relative", overflow: "hidden", minHeight: "50vh" }}>
      <div className="hero-wrapper">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="hero-left">
                <div className="date">02 July 2025</div>
                <h1 className="page--title">The 7 Pillars of Building a Premium Brand in The UAE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero--bg" ref={videoWraRef}>
        <Image priority width={1920} height={1080} placeholder="blur" blurDataURL="/images/blog-details/blog-details.webp" src="/images/blog-details/blog-details.webp" alt="About Banner" />
      </div>
      <div className="container-fixed">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <a href="./">Home</a>
          </div>
          <div className="breadcrumb-item">
            <a href="./">Insights</a>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            The 7 Pillars of Building a Premium Brand in The UAE
          </div>
        </div>
      </div>
    </section>
  );
}
