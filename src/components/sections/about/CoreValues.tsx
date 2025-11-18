"use client";
import "@/styles/about/CoreValues.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreValues() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".CoreValues--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".CoreValues--box")) as HTMLElement[];
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
    <section className="CoreValues-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="CoreValues-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Core Values
          </h2>
          <h2 className="section--subtitle" data-splitting-opacity-anime>
            <span className="description-highlight-space" data-come-up-anime></span>
            Our values that define how we work, connect and build meaningful partnerships.
          </h2>
        </div>
        <div className="CoreValues--list">
          <div className="CoreValues--box">
            <div className="info--box">
              <h2 className="title">Synergy</h2>
              <h4 className="description">Bringing together diverse minds to create better, bolder outcomes — collectively.</h4>
            </div>
          </div>
          <div className="CoreValues--box">
            <div className="info--box">
              <h2 className="title">Integrity</h2>
              <h4 className="description">Doing the right thing — with honesty, transparency, and accountability at every step.</h4>
            </div>
          </div>
          <div className="CoreValues--box">
            <div className="info--box">
              <h2 className="title">Empathy</h2>
              <h4 className="description">Leading with understanding, listening deeply, and creating with intention.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
