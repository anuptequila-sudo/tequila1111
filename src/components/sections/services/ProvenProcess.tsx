"use client";

import Image from "next/image";

import "@/styles/services/ProvenProcess.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Define all your props here
type ProvenProcessProps = {
  title: string;
  description: string;
};

export default function ProvenProcess({ title, description }: ProvenProcessProps) {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".ProvenProcess-item-second") as HTMLElement | null;
    if (!wrapper) return;

    const ceoImg = wrapper.querySelector(".img-box") as HTMLElement | null;
    if (!ceoImg) return;

    gsap.fromTo(
      ceoImg,
      {
        x: "100%",
        rotateZ: -10,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: "0%",
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 100%",
          end: "bottom 75%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="ProvenProcess-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="ProvenProcess-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            {title}
          </h2>
        </div>
        <div className="ProvenProcess-container">
          <div className="ProvenProcess-item-first">
            <p className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              {description}
            </p>
          </div>
          <div className="ProvenProcess-item-second">
            <div className="info">
              <h4 className="h4" data-splitting-opacity-anime>
                01 Discovery & Strategy
              </h4>
              <p data-come-up-anime>We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.</p>
            </div>
            <div className="img-box">
              <Image priority width={500} height={300} src="images/services/ProvenProcess.webp" alt="Description of image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
