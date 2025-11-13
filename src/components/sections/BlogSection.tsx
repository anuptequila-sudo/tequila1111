"use client";
import "@/styles/BlogsSection.css";
import Button from "../ui/Button";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".blogs-list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".blogs-list .blogs-item")) as HTMLElement[];
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
            end: "top 40%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // video hover behavior
      const video = card.querySelector("video") as HTMLVideoElement;
      if (video) {
        card.addEventListener("mouseenter", () => video.play());
        card.addEventListener("mouseleave", () => {
          video.pause();
          // video.currentTime = 0;
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="blogs-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="blogs-header">
          <h2 className="blogs-header-title" data-splitting-opacity-anime>
            From the Journal
          </h2>
          <p className="blogs-header-description" data-come-up-anime>
            <span className="description-highlight-space"></span>
            The Journal is where we unpack what we're learning, exploring, and building-from branding and digital trends to behind-the-scenes glimpses of our process.
          </p>
        </div>

        <div className="blogs-container">
          <div className="blogs-list">
            <div className="blogs-item" data-cursor-text="View Blog">
              <p className="blogs-year">2024</p>
              <span className="blogs-title">The Seven Pillars of Building a Premium Brand in UAE</span>
              <div className="blogs-image-container">
                <div className="blogs-details">
                  <p className="blogs-tag">BRANDING, BUSINESS</p>
                </div>
                <img src="/images/blog1.png" alt="Blog 1" className="blogs-image" />
              </div>
            </div>
            <div className="blogs-item" data-cursor-text="View Blog">
              <p className="blogs-year">2024</p>
              <span className="blogs-title">The Seven Pillars of Building a premium Brand in UAE</span>
              <div className="blogs-image-container">
                <div className="blogs-details">
                  <p className="blogs-tag">BRANDING</p>
                </div>
                <img src="/images/blog2.png" alt="Blog 1" className="blogs-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-button-container">
          <div className="blogs-button">
            <Button variant="secondary" data-come-up-anime>
              Read what's new &nbsp; →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
