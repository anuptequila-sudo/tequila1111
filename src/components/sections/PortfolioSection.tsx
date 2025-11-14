"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/styles/PortfolioSection.module.css";
import Button from "../ui/Button";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollAnimations();

  const portfolioItems = [
    {
      tag: "BRANDING, WEBSITE",
      video: "/images/portfolio/nour.mp4",
      title: "Nour Sabi",
      subtitle: "Bridal Couture UAE",
      height: "60dvh",
      flex: "1 1 calc(60% - var(--gap))",
      className: "horizontalVideo",
    },
    {
      tag: "EGD, ILLUSTRATION",
      video: "/images/portfolio/att.mp4",
      title: "At The Top",
      subtitle: "Burj Khalifa Observatory, Dubai",
      height: "85dvh",
      flex: "1 1 calc(40% - var(--gap))",
      className: "verticalVideo",
    },
    {
      tag: "BRANDING, LOGO",
      video: "/images/portfolio/czn.mp4",
      title: "Czn Burak",
      subtitle: "Restaurants, Turkiye, UAE",
      height: "85dvh",
      flex: "1 1 calc(40% - var(--gap))",
      className: "verticalVideo",
    },
    {
      tag: "GRAPHIC DESIGN",
      video: "/images/portfolio/illumunati.mp4",
      title: "Illuminati Vodka",
      subtitle: "Food & Beverages, UK",
      height: "60dvh",
      flex: "1 1 calc(60% - var(--gap))",
      className: "horizontalVideo",
    },
    {
      tag: "BRANDING, WEBSITE",
      video: "/images/portfolio/yakut.mp4",
      title: "Yakut Global",
      subtitle: "Real Estate Turkiye, UAE, Russia",
      height: "60dvh",
      flex: "1 1 calc(60% - var(--gap))",
      className: "horizontalVideo",
    },
    {
      tag: "SMM, Graphic",
      video: "/images/portfolio/vara.mp4",
      title: "Virtual Asset Regulatory Authority(VARA)",
      subtitle: "Regulator of Virtual Assets, Dubai",
      height: "85dvh",
      flex: "1 1 calc(40% - var(--gap))",
      className: "verticalVideo",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".portfolioDetail") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".portfolioCard")) as HTMLElement[];
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
    <section className={styles.portfolioSection} ref={sectionRef}>
      <div className="container-fixed">
        <div className={styles.headerWrapper}>
          <h2 className={`${styles.headerTitle} section--title`} data-splitting-opacity-anime>
            What we've Built
          </h2>
          <div className={styles.headerGap}></div>
          <p className={styles.headerText} data-come-up-anime>
            <span className="description-highlight-space"></span>
            We've teamed up with founders, innovators, and ambitious brands to create work that leads. From first spark to final screen — this is where strategy meets creative craft, with impact built in.
          </p>
        </div>
        <div className={`${styles.portfolioDetail} portfolioDetail`}>
          {portfolioItems.map((item, i) => (
            <div key={i} className={`${styles.portfolioCard} portfolioCard`} data-cursor-text="View Portfolio" style={{ flex: item.flex }}>
              <p className={styles.cardTag}>{item.tag}</p>

              <div className={item.className} style={{ height: item.height }}>
                <video src={item.video} muted loop playsInline className={styles.video} />
              </div>

              <h3 className={styles.cardTitle} data-splitting-opacity-anime>
                {item.title}
              </h3>
              <span className={styles.cardSubtitle} data-splitting-opacity-anime>
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.portfolioButton}>
          <Button variant="secondary" data-come-up-anime>
            View all case studies &nbsp; →
          </Button>
        </div>
      </div>
    </section>
  );
}
