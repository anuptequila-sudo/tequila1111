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
    <section
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>
            Strategic Design <span className="hero-highlight"></span> <br />&
            Branding Agency in Dubai
          </h1>
        </div>
        <div className="gap" />
        <div className="hero-middle">
          <span className="page-title">Branding</span>
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <a href="./">Home</a>
            </div>
            <div className="breadcrumb-item active" aria-current="page">
              what we do
            </div>
            <div className="breadcrumb-item active" aria-current="page">
              Branding
            </div>
          </div>
          <span>
            We’re more than a branding agency in Dubai—we create category
            leaders. With strategy, storytelling, and unique design, we craft
            identities that capture attention and build trust.
          </span>
          <div className="hero-buttons" data-anime-hero-word-block>
            <Button variant="primary">build my brand</Button>
            <Button variant="secondary">build my brand</Button>
          </div>
        </div>
      </div>
      <div className="hero--bg" ref={videoWraRef}>
        <Image priority
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL="/images/services/services.webp"
          src="/images/services/services.webp"
          alt="About Banner"
        />
      </div>
    </section>
  );
}
