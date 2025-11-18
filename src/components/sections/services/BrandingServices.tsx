"use client";

import Image from "next/image";

import "@/styles/services/BrandingServices.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandingServices() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".branding--services--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".branding--card")) as HTMLElement[];
    if (!cards.length) return;

    sectionRef.current.style.perspective = "2000px";
    wrapper.style.transformStyle = "preserve-3d";

    cards.forEach((card, i) => {
      const mod = i % 3; // determine column pattern

      const fromX = mod === 0 ? "-100%" : mod === 1 ? "0%" : "100%";
      const fromRotate = mod === 0 ? -10 : mod === 1 ? 0 : 10;

      gsap.fromTo(
        card,
        {
          x: fromX,
          rotateZ: fromRotate,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: "0%",
          rotateZ: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="BrandingServices-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="BrandingServices-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Our Tailored Branding Services
          </h2>
          <h2 className="section--subtitle" data-splitting-opacity-anime>
            <span className="description-highlight-space" data-come-up-anime></span>
            Tequila offers a full spectrum of strategic branding solutions designed to meet your unique needs:
          </h2>
        </div>
        <div className="branding--services--list">
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/logo-design.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">Logo Design & Visual Identity</h2>
              <p>Designing logos and visual systems that do more than look good — they speak for your brand. From mark to message, we create iconic, scalable assets that make you instantly recognisable across every touchpoint.</p>
            </div>
          </div>
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/branding.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">Branding, Strategy & Development</h2>
              <p>We build brands with brains and heart starting from the inside out. Through positioning, voice, and visual strategy, we shape identities that connect, compete, and lead with clarity.</p>
            </div>
          </div>
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/rebranding.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">Rebranding</h2>
              <p>Whether it’s time to evolve or completely reimagine, we guide brands through transformation with purpose. Rebranding with Tequila means rediscovering your edge and reigniting your audience without losing your core.</p>
            </div>
          </div>
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/graphics.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">Graphic Design</h2>
              <p>From pitch decks to packaging, we design with precision and intent. Every visual is crafted to align with your brand, communicate clearly, and deliver maximum impact — across print and digital.</p>
            </div>
          </div>
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/brand-elevation.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">Brand Elevation</h2>
              <p>Already have a brand but not quite the story? We strengthen existing brands by refining their narrative, visual assets, and strategy — giving them the clarity, coherence, and credibility they deserve.</p>
            </div>
          </div>
          <div className="branding--card">
            <div className="branding--card--img">
              <Image priority width={400} height={400} src="/images/branding-services/uiux.webp" alt="Branding Strategy" />
            </div>
            <div className="branding--card--info">
              <h2 className="h2">UI/UX Design for Digital Products</h2>
              <p>We turn complex ideas into clean, intuitive experiences. From mobile apps to enterprise platforms, we design digital products that feel effortless to use and impossible to ignore all grounded in strategy and user behaviour.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
