"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

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
            <h2 className="about-line " data-splitting-opacity-anime>
              The Agency
            </h2>
            <span className="hero-text about-line" data-splitting-opacity-anime>
              We built brands. We engineer experiences that think smart, feel
              right, and lead with purpose.
            </span>
            <div className="about-description">
              <p className="about-line-description" data-come-up-anime>
                <span className="description-highlight-space "></span>A
                &quot;Creative Intelligence Studio&quot; - an agency that not
                only designs and builds, but crafts brands with intellect,
                heart, and future-readiness. Not just aesthetic designs or
                websites, but strategic experiences.
              </p>
              <Button variant="secondary" data-come-up-anime>
                MEET TEQUILA &nbsp; →
              </Button>
            </div>
          </div>

          {/* Gap 20% */}
          <div className="about-gap"></div>

          {/* Right 40% */}
          <div className="about-right">
            <h4 className="about-line subtitle " data-come-up-anime>
              Why Choose Us
            </h4>
            <div className="about-grid " data-come-up-anime>
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
