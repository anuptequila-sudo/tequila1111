"use client";
import "@/styles/about/MeetTheTeam.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MeetTheTeam() {
  useScrollAnimations();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(
      ".team--list"
    ) as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(
      wrapper.querySelectorAll(".team--card")
    ) as HTMLElement[];
    if (!cards.length) return;

    gsap.fromTo(
      ".team--card",
      {
        y: 200,
        opacity: 0,
        rotateZ: -10,
        scale: 0.95,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotateZ: 0,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team--list",
          start: "top bottom",
          end: "bottom bottom",
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
    <section className="MeetTheTeam-section" ref={sectionRef}>
      <div className="container-fixed">
        <div className="MeetTheTeam-header">
          <h2 className="MeetTheTeam-header-title" data-splitting-opacity-anime>
            Meet the Team
          </h2>
        </div>
        <div className="MeetTheTeam-container">
          <div className="MeetTheTeam-item-first">
            <p
              className="MeetTheTeam-header-description"
              data-splitting-opacity-anime
            >
              <span
                className="description-highlight-space"
                data-come-up-anime
              ></span>
              Strategists, designers, developers, storytellers—and everything in
              between. We’re a tight-knit group of curious minds who bring
              diverse perspectives and deep expertise to the table. Different in
              roles, aligned in vision: building brands that lead.
            </p>
          </div>
        </div>
        <ul className="team--list">
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/puneet.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Puneet</h2>
                <h3 className="title">CEO & Creative Director</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/nam.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Nam</h2>
                <h3 className="title">Head of Strategy</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/ghada.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Ghada</h2>
                <h3 className="title">Head of Operations</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/amit.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Amit</h2>
                <h3 className="title">Advisor</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/carol.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Carol</h2>
                <h3 className="title">Content Strategist</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/anup.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Anup</h2>
                <h3 className="title">Technical Lead</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/akki.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Akshay</h2>
                <h3 className="title">UX Lead</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/sanj.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Sanjana</h2>
                <h3 className="title">Sr. Front End Developer</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/krish.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Krishna</h2>
                <h3 className="title">UX UI Designer</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/akash.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Akash</h2>
                <h3 className="title">Brand Designer</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/nancy.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Nancy</h2>
                <h3 className="title">Visual Designer</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/arya.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Arya</h2>
                <h3 className="title">Motion Designer</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/dilly.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Dilly</h2>
                <h3 className="title">Project Manager</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/priya.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Priya</h2>
                <h3 className="title">Project Manager</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="team--card">
              <div className="team--img">
                <img src="/images/team/niki.webp" alt="Team Member" />
              </div>
              <div className="team--info">
                <h2 className="name">Nikita</h2>
                <h3 className="title">Content Crafter</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
