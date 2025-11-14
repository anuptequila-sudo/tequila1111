"use client";
import "@/styles/about/WhyWorkWithUs.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyWorkWithUs() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".why--us--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".why--us--list li")) as HTMLElement[];
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
    <section className="WhyWorkWithUs-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="WhyWorkWithUs-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Why Work with Us?
          </h2>
        </div>
        <div className="why--us--wrapper">
          <ul className="why--us--list">
            <li>
              <span className="number">1</span>
              <div className="info">
                <h3 className="title">Creative, Chill Environment</h3>
              </div>
            </li>
            <li>
              <span className="number">2</span>
              <div className="info">
                <h3 className="title">Trust Over Timelines</h3>
              </div>
            </li>
            <li>
              <span className="number">3</span>
              <div className="info">
                <h3 className="title">Ideas over Heirarchy</h3>
              </div>
            </li>
            <li>
              <span className="number">4</span>
              <div className="info">
                <h3 className="title">Quality over Quick Fixes</h3>
              </div>
            </li>
            <li>
              <span className="number">5</span>
              <div className="info">
                <h3 className="title">Collaborative by Nature</h3>
              </div>
            </li>
            <li>
              <span className="number">6</span>
              <div className="info">
                <h3 className="title">People before Processes</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
