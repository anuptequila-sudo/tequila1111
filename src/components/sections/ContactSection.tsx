"use client";
import "@/styles/ContactSection.css";
import Button from "../ui/Button";

import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type FaqProps = {
  topSpace: string;
};

export default function ContactSection({ topSpace }: FaqProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".contact--info--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".contact--info--list .info--box")) as HTMLElement[];
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
    <section className="contact-section" ref={sectionRef} style={{ paddingTop: topSpace }}>
      <div className="container">
        <div className="contact-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Say Hello!
          </h2>
        </div>

        <div className="contact-container">
          <div className="contact-item-first">
            <p className="contact-header-description" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              Got a brand to build or a bold idea brewing? Let's make it real. Whether you're ready to dive in or just testing the waters - we're always up for a smart conversation. Drop us a line, and let's see where it takes us.
            </p>
            <div className="contact--info--list">
              <div className="info--box">
                <h3 className="title">Phone</h3>
                <Link href="tel:971509372493">+971 50 937 2493</Link>
              </div>
              <div className="info--box">
                <h3 className="title">Email</h3>
                <Link href="mailto:info@tequila.ae">info@tequila.ae</Link>
              </div>
              <div className="info--box">
                <h3 className="title">Address</h3>
                <address>A904, Tamani Arts Offices, Business Bay, Downtown Dubai, UAE</address>
                <Button href="/contact" variant="primary">
                  GET DIRECTIONS
                </Button>
              </div>
              <div className="info--box">
                <h3 className="title">Social</h3>
                <div className="social--links">
                  <Link href="#" target="blank">
                    Instagram
                  </Link>
                  <Link href="#" target="blank">
                    Linkedin
                  </Link>
                  <Link href="#" target="blank">
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-item-second" data-come-up-anime>
            <div className="contact-form">
              <div className="input--wrapper">
                Hey Tequila, I'm
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name*" />
                </div>
                .
              </div>
              <div className="input--wrapper">
                You can reach me at
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email*" />
                </div>
                .
              </div>
              <div className="input--wrapper">
                or call me on
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Phone Number*" />
                </div>
                .
              </div>
              <div className="input--wrapper">
                Here's what I've been thinking about:
                <div className="contact-message">
                  <textarea className="form-control" placeholder="Your Message" rows={5}></textarea>
                </div>
              </div>
            </div>
            <div className="contact-button-container">
              <div className="contact-button">
                <Button href="#" variant="secondary">
                  HIT SEND
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
