"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".about-grid") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".about-grid .grid-item")) as HTMLElement[];
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
    <section className="about-section-full" ref={sectionRef}>
      <div className="container-fixed">
        <div className="about-section">
          {/* Left 30% */}
          <div className="about-left">
            <h2 className="section--title about-line" data-splitting-opacity-anime>
              The Agency
            </h2>
            <h3 className="section--subtitle about-line" data-splitting-opacity-anime>
              We built brands. We engineer experiences that think smart, feel right, and lead with purpose.
            </h3>
            <div className="about-description">
              <p className="about-line-description" data-splitting-opacity-anime>
                <span className="description-highlight-space"></span>A &quot;Creative Intelligence Studio&quot; - an agency that not only designs and builds, but crafts brands with intellect, heart, and future-readiness. Not just aesthetic designs or websites, but strategic experiences.
              </p>
              <Button href="/about" variant="secondary" data-come-up-anime>
                MEET TEQUILA
              </Button>
            </div>
          </div>
          {/* Gap 20% */}
          <div className="about-gap"></div>
          {/* Right 40% */}
          <div className="about-right">
            <h4 className="about-line subtitle" data-splitting-opacity-anime>
              Why Choose Us
            </h4>
            <div className="about-grid">
              <div className="grid-item about-line">
                <h5 className="title">YEARS OF EXPERIENCE</h5>
                <span className="number">25+</span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title">PROJECTS DELIVERED</h5>
                <span className="number">800+</span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title">CLIENT RETENTTION RATE</h5>
                <span className="number">100%</span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title">PROJECTS PER YEAR</h5>
                <span className="number">30+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
