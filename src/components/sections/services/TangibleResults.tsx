"use client";

import Image from "next/image";

import "@/styles/services/TangibleResults.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

type TangibleResultsProps = {
  title: string;
  description: string;
};

export default function TangibleResults({ title, description }: TangibleResultsProps) {
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
    <section className="TangibleResults-section" ref={sectionRef}>
      <div className="container">
        <div className="TangibleResults-header">
          {title && (
            <h2 className="section--title" data-splitting-opacity-anime>
              {title}
            </h2>
          )}
          {description && (
            <h2 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              {description}
            </h2>
          )}
        </div>

        <div className="TangibleResults-container">
          <div className="info">
            <ul className="assets--list">
              <li>
                <div className="img--box">
                  <Image priority width={500} height={500} src="/images/tangible-results/authentic-connection.webp" alt="Description" />
                </div>
                <h4 className="h4">Authentic Connection & Engagement</h4>
                <p>A distinctive brand voice and visual vibe that deeply resonates with your target audience, fostering genuine loyalty and advocacy.</p>
              </li>
              <li>
                <div className="img--box">
                  <Image priority width={500} height={500} src="/images/tangible-results/professional-credibility.webp" alt="Description" />
                </div>
                <h4 className="h4">Professional Credibility & Trust</h4>
                <p>A polished, cohesive visual identity that instantly builds credibility and unwavering trust with every interaction.</p>
              </li>
              <li>
                <div className="img--box">
                  <Image priority width={500} height={500} src="/images/tangible-results/unwavering-clarity.webp" alt="Description" />
                </div>
                <h4 className="h4">Unwavering Clarity & Positioning</h4>
                <p>A crystal-clear brand message and a unique market position that unequivocally sets you apart from competitors.</p>
              </li>
              <li>
                <div className="img--box">
                  <Image priority width={500} height={500} src="/images/tangible-results/distinctive-marketing.webp" alt="Description" />
                </div>
                <h4 className="h4">Distinctive Marketing Assets</h4>
                <p>Powerful, visually cohesive marketing materials and a unique brand language designed to captivate, convert, and command attention.</p>
              </li>
            </ul>
            <Button href="/contact" variant="secondary">
              elevate Your Brand
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
