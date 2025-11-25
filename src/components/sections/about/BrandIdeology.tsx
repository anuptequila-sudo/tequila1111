"use client";
import "@/styles/about/BrandIdeology.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandIdeology() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollAnimations();

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".mission--vision") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".ideology--box")) as HTMLElement[];
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
    <section className="BrandIdeology-section" ref={sectionRef}>
      <div className="container">
        <div className="BrandIdeology-header">
          <h2 className="section--title BrandIdeology-header-title" data-splitting-opacity-anime>
            Tequila’s <br />
            Brand Ideology
          </h2>
          <h2 className="section--subtitle" data-splitting-opacity-anime>
            <span className="description-highlight-space" data-come-up-anime></span>
            We’re shaping the future of how brands are seen, felt and remembered.
          </h2>
        </div>
        <div className="mission--vision">
          <div className="ideology--box">
            <div className="bg">
              <video className="bgVideo" src="/images/what-we-do.mp4" autoPlay muted loop playsInline />
            </div>
            <div className="top--text">WHAT WE DO</div>
            <div className="info--box">
              <h2 className="title">Mission</h2>
              <h4 className="description">To Elevate Brands Through Strategic Storytelling and Design, Leaving a Lasting Impact on Target Audiences.</h4>
            </div>
          </div>
          <div className="ideology--box">
            <div className="bg">
              <video className="bgVideo" src="/images/what-we-do.mp4" autoPlay muted loop playsInline />
            </div>
            <div className="top--text">WHERE WE ARE HEADED</div>
            <div className="info--box">
              <h2 className="title">Vision</h2>
              <h4 className="description">To be the Trusted Partner for Businesses Looking to Establish a Strong Online Presence and Make a Lasting Impression in Their Industries.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
