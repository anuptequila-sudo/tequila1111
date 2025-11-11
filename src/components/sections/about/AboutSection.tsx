"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/about/About.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimations();

  useEffect(() => {
    if (sectionRef.current) {
      const lines = sectionRef.current.querySelectorAll(".about-line");

      gsap.fromTo(
        lines,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="about-section-full">
      <div className="container-fixed">
        <div className="about-section" ref={sectionRef}>
          {/* Left 30% */}
          <div className="about-left">
            <h2 className="about-line" data-splitting-opacity-anime>
              The Agency
            </h2>
            <span className="hero-text about-line" data-splitting-opacity-anime>
              We built brands. We engineer experiences that think smart, feel
              right, and lead with purpose.
            </span>
            <div className="about-description">
              <p className="about-line-description" data-come-up-anime>
                <span className="description-highlight-space "></span>Tequila is
                a Creative Intelligence Studio — a branding and web design
                company based in Dubai, built on the belief that strategy and
                creativity should never exist in silos. We don&apos;t just make
                things look good; we build identities and digital experiences
                that perform, resonate, and evolve with purpose.
              </p>
              <p className="about-line-description" data-come-up-anime>
                Our strength lies in blending strategic thinking, design
                craftsmanship, and smart technology to create brands that are
                built to lead. Whether it’s a full-scale website, a brand
                refresh, or a digital ecosystem, we approach every brief with
                clarity, curiosity, and an obsession with getting it right.
              </p>
              <p className="about-line-description" data-come-up-anime>
                From regional conglomerates to agile startups, we collaborate
                with businesses of all sizes — adapting to their pace,
                understanding their goals, and delivering tailor-made solutions.
                Our clients trust us not just for execution, but for
                perspective, honesty, and the ability to consistently deliver
                work that matters.
              </p>
            </div>
          </div>

          {/* Gap 20% */}
          <div className="about-gap"></div>

          {/* Right 40% */}
          <div className="about-right">
            <div className="about-grid" data-come-up-anime>
              <div className="grid-item about-line">
                <h5 className="title" data-come-up-anime>
                  YEARS OF EXPERIENCE
                </h5>
                <span className="number" data-come-up-anime>
                  25+
                </span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title" data-come-up-anime>
                  PROJECTS DELIVERED
                </h5>
                <span className="number" data-come-up-anime>
                  800+
                </span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title" data-come-up-anime>
                  CLIENT RETENTTION RATE
                </h5>
                <span className="number" data-come-up-anime>
                  100%
                </span>
              </div>
              <div className="grid-item about-line">
                <h5 className="title" data-come-up-anime>
                  PROJECTS PER YEAR
                </h5>
                <span className="number" data-come-up-anime>
                  30+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
