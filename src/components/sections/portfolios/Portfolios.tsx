"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../../styles/portfolios/Portfolios.css";
import Button from "../../ui/Button";

import Link from "next/link";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolios() {
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

    const wrapper = sectionRef.current.querySelector(".portfolioList") as HTMLElement;
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
            start: "top bottom",
            end: "top 25%",
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
    <section className="portfolioSection" ref={sectionRef}>
      <div className="container">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <a href="./">Home</a>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            Case Studies
          </div>
        </div>
        <div className="headerWrapper">
          <h2 className="section--title" data-splitting-opacity-anime>
            Case Studies
          </h2>
          <p className="headerText" data-come-up-anime>
            <span className="description-highlight-space"></span>A "Creative Intelligence Studio" - an agency that not only designs and builds, but crafts brands with intellect, heart, and future-readiness. Not just aesthetic designs or websites, but strategic experiences.
          </p>
        </div>

        <div className="portfolioList">
          {portfolioItems.map((item, i) => (
            <Link href="/portfolioDetails" key={i} className="portfolioCard" data-cursor-text="View Portfolio" style={{ flex: item.flex }}>
              <p className="cardTag">{item.tag}</p>

              <div className={item.className} style={{ height: item.height }}>
                <video src={item.video} muted loop playsInline className="video" />
              </div>

              <h3 className="cardTitle" data-splitting-opacity-anime>
                {item.title}
              </h3>
              <span className="cardSubtitle" data-splitting-opacity-anime>
                {item.subtitle}
              </span>
            </Link>
          ))}
        </div>

        <ul className="pagination">
          <li className="page-item">
            <Button href="#" variant="secondary">
              Prev
            </Button>
          </li>
          <li className="page-item">
            <a className="page-link active" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <Button href="#" variant="secondary">
              Next
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}
