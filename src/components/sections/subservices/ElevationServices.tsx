"use client";

import "@/styles/subservices/ElevationServices.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "../../ui/Button";

export default function ElevationServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".assets--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".assets--list li")) as HTMLElement[];
    if (!cards.length) return;

    sectionRef.current.style.perspective = "2000px";
    wrapper.style.transformStyle = "preserve-3d";

    cards.forEach((card, i) => {
      const isEven = i % 2 === 0;

      card.style.transformOrigin = "center bottom";

      gsap.fromTo(
        card,
        {
          x: "100%",
          rotateZ: 10,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: "0%",
          rotateZ: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            end: "bottom 75%",
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
    <section className="ElevationServices-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="ElevationServices-header">
          <h2 className="section--title ElevationServices-header-title" data-splitting-opacity-anime>
            Our Brand Elevation Services in Dubai 
          </h2>
        </div>
        <div className="ElevationServices-container">
          <div className="ElevationServices-item-first">
            <h2 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              When we elevate a brand, we look at it from every angle — not just the visuals, but also the story, the tone, and the way it connects with people.
            </h2>
          </div>
        </div>
        <div className="info">
          <h3 className="h3" data-splitting-opacity-anime>
            A strategic brand empowers you to:
          </h3>
          <ul className="assets--list">
            <li>
              <h4 className="h4">Brand Story Development</h4>
              <p>A compelling narrative that defines who you are, what you stand for, and why you matter.</p>
            </li>
            <li>
              <h4 className="h4">Visual Language Refresh</h4>
              <p>Design elements, typography, colors, and imagery that complement your existing logo and extend its impact.</p>
            </li>
            <li>
              <h4 className="h4">Brand Guidelines</h4>
              <p>Clear rules for consistent application across digital, print, and physical spaces.</p>
            </li>
            <li>
              <h4 className="h4">Marketing & Communication Assets</h4>
              <p>Elevated designs for company profiles, brochures, and campaigns.</p>
            </li>
            <li>
              <h4 className="h4">Experience Design</h4>
              <p>From presentations to social media, every touchpoint feels premium and cohesive.</p>
            </li>
          </ul>
          <Button href="/about" variant="secondary" data-come-up-anime>
            MEET TEQUILA
          </Button>
        </div>
      </div>
    </section>
  );
}
