"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../../styles/portfolioDetails/portfolioDetails.css";
import Image from "next/image";

import Button from "../../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const videoWraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoWraRef.current) return;
    const el = videoWraRef.current;
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
    scrollTL.fromTo(el, { transform: "scale(0.85)" }, { transform: "scale(1)", ease: "none" });
    return () => {
      scrollTL.kill();
    };
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current;

    const cards = Array.from(wrapper.querySelectorAll(".img--box")) as HTMLElement[];
    if (!cards.length) return;

    sectionRef.current.style.perspective = "1000px";
    wrapper.style.transformStyle = "preserve-3d";

    cards.forEach((card, i) => {
      const isEven = i % 2 === 0;
      card.style.transformOrigin = "center bottom";

      gsap.fromTo(
        card,
        {
          x: isEven ? "-200" : "200",
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
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section className="portfolio--info">
        <div className="container-fixed">
          {/* Left 30% */}
          <div className="portfolio--details-left">
            <div className="year" data-splitting-opacity-anime>
              2025
            </div>
            <h2 className="section--title portfolio--details-line" data-splitting-opacity-anime>
              Lojain Omran Ecommerce Website
            </h2>
            <ul className="tags">
              <li data-splitting-opacity-anime>WEBSITE</li>
              <li data-splitting-opacity-anime>BRANDING</li>
              <li data-splitting-opacity-anime>BRAND GUIDELINES</li>
            </ul>
          </div>
          <div className="portfolio--details-description">
            <h4 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space "></span>Our partnership with Lojain Omran, a prominent Saudi Arabian influencer, involved the creation of a captivating ecommerce website that reflected her unique style and catered to a global audience.
            </h4>
          </div>
        </div>
        <div className="bg" ref={videoWraRef}>
          <Image width={1000} height={1000} src="/images/portfolio-details/portfolio-details-banner.webp" alt="Lojain Omran Ecommerce Website" />
        </div>
        <div className="container-fixed" ref={sectionRef}>
          <div className="img--box">
            <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
          </div>
          <div className="portfolio--details-description">
            <h4 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space "></span>The primary objective for Lojain Omran Ecommerce website design was to establish a platform that not only showcased her curated selection of products but also provided a seamless shopping experience for her international followers.
            </h4>
            <div className="about-description">
              <p className="about-line-description" data-splitting-opacity-anime>
                To achieve this, we designed a website that seamlessly integrated with Lojain Omran’s fashion-forward style, incorporating features such as personalized product recommendations, secure payment gateways, and social media integration.{" "}
              </p>
            </div>
          </div>
          <div className="photo--grid">
            <div className="img--box">
              <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
            </div>
            <div className="img--box">
              <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
            </div>
            <div className="img--box">
              <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
            </div>
          </div>
          <div className="portfolio--details-description">
            <h4 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space "></span>The e-commerce website successfully captured Lojain Omran’s brand essence and provided a seamless shopping experience for her followers.
            </h4>
            <div className="about-description">
              <p className="about-line-description" data-splitting-opacity-anime>
                By focusing on <a href="#">user experience</a>, design aesthetics, and backend functionality, we helped Lojain Omran expand her online presence and drive sales. The website’s visually appealing design and intuitive navigation made it easy for visitors to explore her curated selection
                of products. Additionally, the personalized product recommendations and secure payment gateways enhanced the user experience and boosted customer confidence. As a result, the <a href="#">Lojain Omran Ecommerce website</a> contributed to increased brand awareness, customer loyalty,
                and ultimately, higher sales for Lojain Omran.
              </p>
            </div>
          </div>
          <div className="img--box">
            <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
          </div>
          <div className="portfolio--details-description">
            <h4 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space "></span>From browser to backstage, the identity works across every surface. Loud, clear, and unmistakably Lojain Omran.
            </h4>
          </div>
          <div className="photo--list">
            <div className="img--box">
              <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
            </div>
            <div className="img--box">
              <Image width={1000} height={1000} src="/images/portfolio-details/p-1.webp" alt="Lojain Omran Ecommerce Website" />
            </div>
          </div>
          <div className="button--wrapper">
            <Button href="#" variant="primary">
              PREVIOUS PROJECT
            </Button>
            <Button href="#" variant="primary">
              NEXT PROJECT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
