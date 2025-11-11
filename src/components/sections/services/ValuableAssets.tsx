"use client";

import "@/styles/services/ValuableAssets.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ValuableAssets() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(
      ".assets--list"
    ) as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(
      wrapper.querySelectorAll(".assets--list li")
    ) as HTMLElement[];
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
    <section className="ValuableAssets-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="ValuableAssets-header">
          <h2
            className="ValuableAssets-header-title"
            data-splitting-opacity-anime
          >
            Why a Powerful Brand is your most Valuable Asset
          </h2>
        </div>
        <div className="ValuableAssets-container">
          <div className="ValuableAssets-item-first">
            <p
              className="ValuableAssets-header-description"
              data-splitting-opacity-anime
            >
              <span
                className="description-highlight-space"
                data-come-up-anime
              ></span>
              In today's dynamic global landscape, your brand is more than just
              a visual identity—it's your promise, your personality, and your
              competitive edge.
            </p>
          </div>
        </div>
        <div className="info">
          <h3 className="h3" data-splitting-opacity-anime>
            A strategic brand empowers you to:
          </h3>
          <ul className="assets--list">
            <li>
              <h4 className="h4">Command Attention</h4>
              <p>
                Make an instant, memorable impression that sets you apart from
                the competition, wherever your audience may be.
              </p>
            </li>
            <li>
              <h4 className="h4">Forge Deep Connections</h4>
              <p>
                Evoke genuine emotion and build unwavering loyalty with your
                ideal audience, fostering a global community.
              </p>
            </li>
            <li>
              <h4 className="h4">Build Unshakable Trust</h4>
              <p>
                Establish instant credibility and authority, turning curious
                prospects into passionate advocates worldwide.
              </p>
            </li>
            <li>
              <h4 className="h4">Tangible Growth</h4>
              <p>
                Evoke genuine emotion and build unwavering loyalty with your
                ideal audience, fostering a global community.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
