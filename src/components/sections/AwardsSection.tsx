"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/styles/AwardsSection.css";

const awards = [
  {
    year: "2025",
    company: "Clutch",
    title: "Top Branding Agency",
    image: "/images/awards1.png",
  },
  {
    year: "2024",
    company: "Sortlist",
    title: "Best Logo Design",
    image: "/images/awards1.png",
  },
  {
    year: "2024",
    company: "Awwwards",
    title: "UI/UX Excellence",
    image: "/images/awards1.png",
  },
  {
    year: "2023",
    company: "DesignRush",
    title: "Creative Agency Award",
    image: "/images/awards1.png",
  },
  {
    year: "2022",
    company: "Behance",
    title: "Featured Project",
    image: "/images/awards1.png",
  },
  {
    year: "2021",
    company: "GoodFirms",
    title: "Top Web Development",
    image: "/images/awards1.png",
  },
  {
    year: "2021",
    company: "Dribbble",
    title: "Inspiration Pick",
    image: "/images/awards1.png",
  },
];

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function AwardsSection() {
  const highlightRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useScrollAnimations();

  useEffect(() => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    const getThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      return {
        bg: isLight ? "#000" : "#fff",
        border: isLight ? "1px solid #000" : "1px solid #fff",
        text: isLight ? "#000" : "#fff",
      };
    };

    const applyHoverAnimation = (index: number | null) => {
      const colors = getThemeColors();

      if (index !== null) {
        const hoveredRow = document.querySelectorAll(".award-row")[index] as HTMLElement;
        if (hoveredRow) {
          const rowBounds = hoveredRow.getBoundingClientRect();
          const containerBounds = hoveredRow.parentElement!.getBoundingClientRect();

          gsap.to(highlight, {
            y: rowBounds.top - containerBounds.top,
            height: rowBounds.height,
            opacity: 1,
            backgroundColor: colors.bg,
            borderBottom: colors.border,
            duration: 0.5,
            ease: "power3.out",
          });
        }
      } else {
        gsap.to(highlight, {
          opacity: 0,
          backgroundColor: "transparent",
          borderBottom: colors.border,
          duration: 0.5,
        });
      }
    };

    applyHoverAnimation(hoveredIndex);

    const observer = new MutationObserver(() => {
      applyHoverAnimation(hoveredIndex);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, [hoveredIndex]);

  return (
    <section className="awards-section">
      <div className="container">
        <div className="awards-header">
          <div className="awards-header-title">
            <h2 className="section--title" data-splitting-opacity-anime>
              Honours & Mentions
            </h2>
            <span className="awards-header-title-highlight" data-come-up-anime>
              (21)
            </span>
          </div>

          <p className="awards-header-description" data-come-up-anime>
            <span className="awards-header-description-highlight"></span>
            Built to stand out, always. Our work is driven by bold ideas, shaped with purpose, and designed to leave a mark - not blend in. With years of experience behind us and bold thinking at our core, we&apos;ve earned recognition for work that consistently challenges the norm and delivers with
            impact.
          </p>
        </div>
      </div>

      <div className="awards-list">
        <div className="highlight" ref={highlightRef}></div>
        {awards.map((award, index) => (
          <div key={index} className={`award-row ${hoveredIndex === index ? "active" : ""}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} data-come-up-anime2>
            <div className="year">{award.year}</div>
            <div className="company">{award.company}</div>
            <div className="title">{award.title}</div>
            <div className="image-container">
              <img src={award.image} alt={award.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
