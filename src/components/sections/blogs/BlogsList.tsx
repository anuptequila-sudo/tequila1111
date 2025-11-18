"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import "../../../styles/blogs/BlogsList.css";
import Button from "../../ui/Button";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { motion, AnimatePresence } from "framer-motion";

const allItems = [
  {
    id: 1,
    type: "branding",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    description: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/1.webp",
  },
  {
    id: 2,
    type: "design",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/2.webp",
  },
  {
    id: 3,
    type: "communication",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/3.webp",
  },
  {
    id: 4,
    type: "news",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/4.webp",
  },
  {
    id: 5,
    type: "branding",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/5.webp",
  },
  {
    id: 6,
    type: "design",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/6.webp",
  },
  {
    id: 7,
    type: "communication",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    description: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/1.webp",
  },
  {
    id: 8,
    type: "news",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/2.webp",
  },
  {
    id: 9,
    type: "branding",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/3.webp",
  },
  {
    id: 10,
    type: "design",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/4.webp",
  },
  {
    id: 11,
    type: "communication",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/5.webp",
  },
  {
    id: 12,
    type: "news",
    title: "The Seven Pillars of Building a Premium Brand in UAE.",
    category: "The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.",
    year: "21 Jan 2025",
    tags: "branding, business",
    image: "/images/blogs/6.webp",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function BlogsList() {
  const [activeTab, setActiveTab] = useState("all");
  const categories = ["all", "branding", "design", "communication", "news"];
  const filteredItems = useMemo(() => {
    if (activeTab === "all") {
      return allItems;
    } else {
      return allItems.filter((item) => item.type === activeTab);
    }
  }, [activeTab, allItems]);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wrapper = sectionRef.current.querySelector(".blogs--list") as HTMLElement;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".blogs--list li")) as HTMLElement[];
    if (!cards.length) return;

    sectionRef.current.style.perspective = "2000px";
    wrapper.style.transformStyle = "preserve-3d";

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
          duration: 0.8,
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
    <section className="BlogsList" ref={sectionRef}>
      <div className="container-fixed">
        <div className="breadcrumb" style={{ marginBottom: 0 }}>
          <div className="breadcrumb-item">
            <a href="./">Home</a>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            Insights
          </div>
        </div>
        <div className="headerWrapper">
          <h2 className="section--title" data-splitting-opacity-anime>
            From the Journal
          </h2>
          <p className="headerText" data-come-up-anime>
            <span className="description-highlight-space"></span>The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.
          </p>
        </div>
        <div className="tab-list-wrapper">
          {categories.map((type) => (
            <button key={type} onClick={() => setActiveTab(type)} className={`tab-btn ${activeTab === type ? "active" : ""}`}>
              {type}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <ul className="blogs--list">
                {filteredItems.map((item) => (
                  <motion.li key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Link href="/blogDetails">
                      <div className="info">
                        <div className="year">{item.year}</div>
                        <h2 className="h2">{item.title}</h2>
                        <p className="description">The Journal is where we unpack what we’re learning, exploring, and building—from branding and digital trends to behind-the-scenes glimpses of our process.</p>
                      </div>
                      <div className="img-box">
                        <div className="tags">{item.tags}</div>
                        <Image src={item.image} width={500} height={500} alt={item.title} priority />
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <div className="button--wrapper">
            <Button href="#" variant="secondary">LOAD MORE &nbsp; ↓</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
