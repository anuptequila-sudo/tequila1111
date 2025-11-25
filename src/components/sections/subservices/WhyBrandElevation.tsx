"use client";

import "@/styles/subservices/WhyBrandElevation.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "../../ui/Button";

export default function WhyBrandElevation() {
  useScrollAnimations();

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
          x: isEven ? "-100%" : "100%",
          rotateZ: isEven ? -10 : 10,
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
    <section className="WhyBrandElevation-section" ref={sectionRef}>
      <div className="container">
        <div className="WhyBrandElevation-header">
          <h2 className="section--title WhyBrandElevation-header-title" data-splitting-opacity-anime>
            Why Choose Brand Elevation Instead of Rebranding
          </h2>
        </div>
        <div className="WhyBrandElevation-container">
          <div className="WhyBrandElevation-item-first">
            <h3 className="section--subtitle WhyBrandElevation-header-description" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime hidden></span>
              Rebranding means starting over.
            </h3>
          </div>
        </div>
        <div className="info">
          <h3 className="h3" data-splitting-opacity-anime>
            Brand Elevation means building on what already works.
          </h3>
          <ul className="assets--list">
            <li>
              <h4 className="h4">Keeps Your Equity</h4>
              <p>You’ve invested years into your logo; we protect that recognition.</p>
            </li>
            <li>
              <h4 className="h4">Adds Fresh Energy</h4>
              <p>Updated visuals, language, and guidelines breathe new life into your brand.</p>
            </li>
            <li>
              <h4 className="h4">Minimizes Risk</h4>
              <p>Clients, customers, and partners still see you as the brand they know.</p>
            </li>
            <li>
              <h4 className="h4">Creates Cohesion</h4>
              <p>Every touchpoint aligns with your updated identity.</p>
            </li>
            <li>
              <h4 className="h4">Future-Proofs your Brand</h4>
              <p>A flexible, modern system that adapts as you grow.</p>
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
