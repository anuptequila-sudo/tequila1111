"use client";

import Image from "next/image";

import "@/styles/services/SuccessStories.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";
import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

type ProvenProcessProps = {
  title: string;
  description: string;
};

export default function SuccessStories({ title, description }: ProvenProcessProps) {
  useScrollAnimations();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".SuccessStories--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".SuccessStories--list li")) as HTMLElement[];
    if (!cards.length) return;

    cards.forEach((card, i) => {
      const mod = i % 3; // determine column pattern

      const fromX = mod === 0 ? "-100%" : mod === 1 ? "0%" : "100%";
      const fromRotate = mod === 0 ? -10 : mod === 1 ? 0 : 10;

      gsap.fromTo(
        card,
        {
          x: fromX,
          rotateZ: fromRotate,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: "0%",
          rotateZ: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="SuccessStories-section" ref={sectionRef}>
      <div className="container">
        <div className="SuccessStories-header">
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

        <ul className="SuccessStories--list">
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/1.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/2.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/3.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/4.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/5.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link className="story--box" href="/success-stories/brand-transformation">
              <div className="img--box">
                <Image priority width={800} height={800} src="/images/success-stories/6.webp" alt="Nour Sabi" />
              </div>
              <div className="info">
                <h3 className="h3">Nour Sabi</h3>
                <h4 className="h4">Fashion Design UAE</h4>
              </div>
            </Link>
          </li>
        </ul>
        <div className="button--wrapper">
          <Button href="/contact" variant="secondary">
            elevate Your Brand
          </Button>
        </div>
      </div>
    </section>
  );
}
