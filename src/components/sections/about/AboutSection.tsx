"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/about/About.css";

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
    <section className="about-section-full">
      <div className="container-fixed">
        <div className="about-section" ref={sectionRef}>
          {/* Left 30% */}
          <div className="about-left">
            <h2 className="section--title" data-splitting-opacity-anime>
              The Agency
            </h2>
            <h3 className="section--subtitle about-line" data-splitting-opacity-anime>
              We built brands. We engineer experiences that think smart, feel right, and lead with purpose.
            </h3>
            <div className="about-description">
              <p className="about-line-description" data-come-up-anime>
                <span className="description-highlight-space "></span>Tequila is a Creative Intelligence Studio — a branding and web design company based in Dubai, built on the belief that strategy and creativity should never exist in silos. We don&apos;t just make things look good; we build
                identities and digital experiences that perform, resonate, and evolve with purpose.
              </p>
              <p className="about-line-description" data-come-up-anime>
                Our strength lies in blending strategic thinking, design craftsmanship, and smart technology to create brands that are built to lead. Whether it’s a full-scale website, a brand refresh, or a digital ecosystem, we approach every brief with clarity, curiosity, and an obsession with
                getting it right.
              </p>
              <p className="about-line-description" data-come-up-anime>
                From regional conglomerates to agile startups, we collaborate with businesses of all sizes — adapting to their pace, understanding their goals, and delivering tailor-made solutions. Our clients trust us not just for execution, but for perspective, honesty, and the ability to
                consistently deliver work that matters.
              </p>
            </div>
          </div>

          {/* Gap 20% */}
          <div className="about-gap"></div>

          {/* Right 40% */}
          <div className="about-right">
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
