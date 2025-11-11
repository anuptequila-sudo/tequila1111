"use client";
import "@/styles/InformationSection.css";
import { useEffect, useRef } from "react";

import Image from "next/image";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function InformationSection() {
  useScrollAnimations();

  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const track = marquee.querySelector(".marquee-track") as HTMLDivElement;
    if (!track) return;

    // Duplicate for seamless infinite loop
    const clone = track.cloneNode(true);
    marquee.appendChild(clone);

    let position = 0;
    let targetSpeed = 0;
    let currentSpeed = 0;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      targetSpeed = delta * 1.5; // 👈 control scroll responsiveness (increase for faster)
      lastScrollY = currentY;
    };

    const animate = () => {
      // Smooth transition towards target speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;

      position -= currentSpeed;
      const width = track.scrollWidth;

      // Looping logic
      if (position <= -width) position += width;
      if (position >= width) position -= width;

      // Apply transform to both clones
      track.style.transform = `translateX(${position}px)`;
      (marquee.children[1] as HTMLElement).style.transform = `translateX(${position + width}px)`;

      // Apply natural slowdown when scrolling stops
      targetSpeed *= 0.1;

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="information-section">
      <div className="information-header">
        <div className="information-header-band" ref={marqueeRef}>
          <div className="marquee-track">
            {Array(20)
              .fill(null)
              .map((_, i) => (
                <h2 key={i}>
                  WE <Image priority className="information-header-band-image" src="/images/heart.png" alt="Heart" width={24} height={24} /> TO EMPOWER BRANDS
                </h2>
              ))}
          </div>
        </div>
      </div>

      <div className="information-container">
        <video id="bgVideo" className="information-item-video" src="/images/what-we-do.mp4" autoPlay muted loop playsInline />
        <div className="container-fixed">
          <div className="information-item-first">
            <span className="information-header-description" data-splitting-opacity-anime2>
              Big Ideas Start with
            </span>
            <br />
            <span className="information-header-description-span" data-splitting-opacity-anime2>
              Small Conversations
            </span>
          </div>
          <div className="information-item-second">
            <p className="information-header-contact">
              <a href="mailto:info@tequila.ae" data-splitting-opacity-anime2>
                info@tequila.ae
              </a>
            </p>
            <p className="information-header-contact">
              <a href="tel:+971509372493" data-splitting-opacity-anime2>
                +97150 937 2493
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
