"use client";
import "@/styles/about/Ceo.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Ceo() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(
      ".ceo--info"
    ) as HTMLElement | null;
    if (!wrapper) return;

    const ceoImg = wrapper.querySelector(".left") as HTMLElement | null;
    if (!ceoImg) return;

    gsap.fromTo(
      ceoImg,
      {
        x: "-100%",
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
    <section className="ceo-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="ceo-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Message from the CEO
          </h2>
        </div>
        <div className="ceo--info">
          <div className="left">
            <img src="/images/about/ceo.webp" alt="Img" />
          </div>
          <div className="right">
            <h3 className="section--subtitle" data-splitting-opacity-anime>
              Here’s how 25 years in the game shaped what we do at Tequila.
            </h3>
            <p data-splitting-opacity-anime>
              When I started out, it was all about clean layouts and clever
              taglines. Fast forward to now- we’re talking strategy,
              storytelling, UX journeys, business impact. What hasn’t changed?
              My belief that great branding starts with listening and ends with
              transformation.
            </p>
            <p data-splitting-opacity-anime>
              Tequila was built on that belief. We dig deep, ask the right
              questions, and design brands that not only look bold but act with
              purpose. From idea to execution, from first pitch to final launch,
              we bring both style and substance to the table.
            </p>
            <p data-splitting-opacity-anime>
              If you’re looking to create something unforgettable, you’re in the
              right place.
            </p>
            <div className="name--wrapper" data-splitting-opacity-anime>
              <h4 className="name">Puneet Sakhuja</h4>
              <h5 className="title">CEO & Creative Director</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
