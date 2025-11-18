"use client";
import "@/styles/about/WhyUs.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
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
    <section className="WhyUs-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="WhyUs-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Why Us?
          </h2>
          <h2 className="section--subtitle" data-splitting-opacity-anime>
            <span className="description-highlight-space" data-come-up-anime></span>
            We’re a mindset, a method and a team that works differently. Here’s what sets us apart.
          </h2>
        </div>
        <div className="why--us--wrapper">
          <ul className="why--us--list">
            <li>
              <span className="number">1</span>
              <div className="info">
                <h3 className="title">Strategy-First, Always</h3>
                <p>Everything we create begins with strategy—insight, context and a clear reason why. That’s how we build brands that perform, not just impress.</p>
              </div>
            </li>
            <li>
              <span className="number">2</span>
              <div className="info">
                <h3 className="title">Senior Minds, Sharper Outcomes</h3>
                <p>Focused teams led by senior experts ensure every project gets the thinking power it deserves—no fluff, no filler.</p>
              </div>
            </li>
            <li>
              <span className="number">3</span>
              <div className="info">
                <h3 className="title">Globally Inclined</h3>
                <p>Our team brings global perspective through lived experience. We operate, collaborating across cultures to create work that’s sharp, relevant, and connected.</p>
              </div>
            </li>
            <li>
              <span className="number">4</span>
              <div className="info">
                <h3 className="title">Curious Collaborators</h3>
                <p>We don’t just take briefs — we dissect them. Ask the right questions. Challenge assumptions. And co-create solutions with clients who are as invested as we are.</p>
              </div>
            </li>
            <li>
              <span className="number">5</span>
              <div className="info">
                <h3 className="title">Entrepreneurial Energy</h3>
                <p>We treat every brand like it’s our own. That means bold decisions, calculated risks, and a mindset of growth. We’ve built businesses from scratch — we get it.</p>
              </div>
            </li>
            <li>
              <span className="number">6</span>
              <div className="info">
                <h3 className="title">Agile, but intentional</h3>
                <p>Fast is fine. But not at the cost of clarity. We work with speed and precision, never compromising on thoughtfulness or craft.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
