"use client";
import "@/styles/about/OurBrand.css";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function OurBrand() {
  useScrollAnimations();

  const brandRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const brand = brandRef.current;
    if (!brand) return;
    const items = (brand as HTMLElement).querySelectorAll("li");

    // Make .brand--reveal sticky
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=3500", // total scroll length
      pin: brand,
      pinSpacing: true,
    });

    items.forEach((li) => {
      const defaultWidth = li.offsetWidth + 96;
      const left = li.querySelector(".left") as HTMLElement | null;
      if (!left) return;

      const right = li.querySelector(".right") as HTMLElement | null;
      if (!right) return;
      const actualWidth = right.offsetWidth;

      gsap.set(li, { width: left.offsetWidth });
      gsap.set(right, { maxWidth: 0, overflow: "hidden" });

      gsap.to(li, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=800",
          scrub: true,
        },
        width: defaultWidth,
        ease: "power2.out",
      });

      gsap.to(right, {
        maxWidth: actualWidth,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "+=800",
          end: "+=800",
          scrub: true,
        },
      });
    });
    items.forEach((li, i) => {
      const left = li.querySelector(".left") as HTMLElement | null;
      if (!left) return;

      const activeIcons = left.querySelector(".active--icon") as HTMLElement | null;
      if (!activeIcons) return;

      const activeInfo = li.querySelector(".info") as HTMLElement | null;
      if (!activeInfo) return;

      const activeIconsWidth = left.offsetWidth;
      gsap.set(activeIcons, { maxWidth: 0, overflow: "hidden" });

      gsap.to(activeIcons, {
        maxWidth: activeIconsWidth,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: `+=${1600 + i * 300}`,
          end: `+=${300 + i * 150}`,
          scrub: true,
        },
      });
      gsap.to(left.querySelector("img"), {
        clipPath: "inset(0% 0% 0% 120%)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: `+=${1600 + i * 300}`,
          end: `+=${300 + i * 150}`,
          scrub: true,
        },
      });
      gsap.to(activeInfo, {
        y: 0,
        opacity: 1,
        pointerEvents: "all",
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: `+=${1600 + i * 300}`,
          end: `+=${300 + i * 150}`,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="OurBrand-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="OurBrand-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Our Brand DNA
          </h2>
          <div className="OurBrand-item-first">
            <p className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              At our core lies a triad that defines everything we do: technology that performs, design that speaks, and storytelling that connects. These three pillars come together to form our DNA — the foundation of how we build brands with impact.
            </p>
          </div>
        </div>
        <ul className="brand--reveal" ref={brandRef}>
          <li className="teq">
            <div className="title--wrapper">
              <div className="left">
                <img src="/images/about/our-brand/teq.svg" alt="Tequila" />
                <div className="active--icon">
                  <Image priority src="/images/about/our-brand/teq.png" alt="TEQ" width={200} height={200} />
                </div>
              </div>
              <div className="right">
                <img src="/images/about/our-brand/nology.svg" alt="Tequila" />
              </div>
            </div>
            <div className="info">
              <p>We are the Teqies, who leverage technology to make you win.</p>
            </div>
          </li>
          <li className="teq">
            <div className="info">
              <p>Everything you see, touch and feel is User Interface Design</p>
            </div>
            <div className="title--wrapper">
              <div className="left">
                <img src="/images/about/our-brand/ui.svg" alt="Tequila" />
                <div className="active--icon">
                  <Image priority src="/images/about/our-brand/ui.png" alt="UI" width={200} height={200} />
                </div>
              </div>
              <div className="right">
                <img src="/images/about/our-brand/design.svg" alt="Tequila" />
              </div>
            </div>
          </li>
          <li className="teq">
            <div className="title--wrapper">
              <div className="left">
                <img src="/images/about/our-brand/la.svg" alt="Tequila" />
                <div className="active--icon">
                  <Image priority src="/images/about/our-brand/la.png" alt="LA" width={200} height={200} />
                </div>
              </div>
              <div className="right">
                <img src="/images/about/our-brand/land.svg" alt="Tequila" />
              </div>
            </div>
            <div className="info">
              <p>We narrate you brand stories and craft digital experiences to transport your audience to La La Land.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
