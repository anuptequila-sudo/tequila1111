"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function HeroSection() {
  const videoWraRef = useRef<HTMLVideoElement>(null);

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
          <h1 className="page--title" data-anime-hero-word-block>
            An Award Winning <br />
            Branding and Web Design <br />
            Company in Dubai. <span className="hero-highlight" data-anime-hero-line-block></span>
          </h1>
        </div>
        <div className="hero-middle">
          <h2 className="section--subtitle" data-anime-hero-sentence-line-block>We craft purposeful brand identities and engaging digital experiences that connect, inspire, and perform — driven by insight, precision, and creativity.</h2>
          <div className="hero-buttons" data-anime-hero-word-block>
            <Button href="/services" variant="primary">Explore Services</Button>
            <Button href="/portfolios" variant="secondary">View Case Studies</Button>
          </div>
        </div>
      </div>

      <video
        ref={videoWraRef}
        className="hero-video"
        src="/images/bannerv2.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        data-cursor-text="View Our Work"
      />
    </section>
  );
}
