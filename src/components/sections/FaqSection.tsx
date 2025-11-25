"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import styles from "@/styles/FaqSection.module.css";
import Button from "../ui/Button";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FaqProps = {
  topSpace: string;
};

interface Faq {
  question: string;
  answer: string;
  type: string;
  answerHeight?: number;
}
const faq: Faq[] = [
  {
    type: "branding",
    question: "What is a responsive web design, and why is it crucial for my Dubai website?",
    answer: "Responsive design ensures your website looks and functions well on all devices including mobiles and tablets, which is critical for user experience and SEO.",
  },
  {
    type: "design",
    question: "What is SEO, and how can it benefit my Dubai business?",
    answer: "SEO helps your website rank higher in search engines, increasing visibility, traffic, and potential sales.",
  },
  {
    type: "communication",
    question: "What kind of website maintenance services do you offer in Dubai?",
    answer: "We provide updates, backups, security monitoring, and ongoing improvements to keep your site running smoothly.",
  },
  {
    type: "news",
    question: "Do you provide creative design contract services in Dubai?",
    answer: "Yes, we offer tailored design services including brand identity, creative campaigns, and design retainers.",
  },
  {
    type: "branding",
    question: "Do you offer e-commerce website development services in Dubai?",
    answer: "Absolutely, we develop scalable and user-friendly e-commerce platforms to drive sales.",
  },
  {
    type: "design",
    question: "Why should I choose Tequila as my branding and web design partner in Dubai?",
    answer: "Because we combine creativity, strategy, and technology to build impactful brands.",
  },
  {
    type: "communication",
    question: "Do you do logo design in Dubai, and how is it different from branding?",
    answer: "Logo design is a part of branding. Branding defines your company’s overall identity while a logo is a visual mark.",
  },
  {
    type: "news",
    question: "What is brand identity, and why is it important for my business?",
    answer: "Brand identity makes your business recognizable and builds trust with your audience.",
  },
  {
    type: "branding",
    question: "How much does it cost to create a new brand identity or rebrand my current business?",
    answer: "The cost varies depending on scope. A simple refresh is more affordable than a full rebrand. At Tequila, we offer customized packages to fit budgets and goals.",
  },
  {
    type: "design",
    question: "What are the key elements of a successful website design in Dubai?",
    answer: "Good UX, SEO-friendly code, responsive design, and strong branding elements are key.",
  },
  {
    type: "communication",
    question: "How long does it take to design and develop a website in Dubai?",
    answer: "It depends on complexity. Standard corporate websites take 4-6 weeks, e-commerce takes longer.",
  },
];

export default function FaqSection({ topSpace }: FaqProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [heights, setHeights] = useState<number[]>([]);

  const categories = ["all", "branding", "design", "communication", "news"];
  const faqItems = useMemo(() => {
    if (activeTab === "all") {
      return faq;
    } else {
      return faq.filter((item) => item.type === activeTab);
    }
  }, [activeTab, faq]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  useEffect(() => {
    // Measure heights after render
    const allAnswers = document.querySelectorAll(`.${styles.faqAnswer}`);
    const newHeights = Array.from(allAnswers).map((el) => (el as HTMLElement).scrollHeight);
    setHeights(newHeights);
  }, [faqItems]);

  return (
    <section className="faq-section" style={{ paddingTop: topSpace }}>
      <div className="container">
        <div className="breadcrumb" style={{ marginBottom: 0 }}>
          <div className="breadcrumb-item">
            <a href="./">Home</a>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            FAQ
          </div>
        </div>
        <h2 className="section--title" data-splitting-opacity-anime>
          FAQ
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.groupOne}>
            <h3 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space"></span> Got questions about branding & web design? We’ve answered the most common ones right here for you.
            </h3>
            <Button href="/contact" variant="secondary" data-come-up-anime>
              CONTACT US
            </Button>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.tabListWrapper}>
              {categories.map((type) => (
                <button key={type} onClick={() => setActiveTab(type)} className={`${styles.tabBtn} ${activeTab === type ? `${styles.active}` : ""}`}>
                  {type}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}>
                {faqItems.map((faq, index) => (
                  <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`} onClick={() => toggleFaq(index)}>
                    <div className={styles.faqQuestion}>
                      <p>{faq.question}</p>
                      <p className={`${styles.arrow}`}>
                        <Image src="/images/icons/angle-down.svg" width={30} height={30} alt="Arrow" style={{ transform: `${activeIndex === index ? "rotate(180deg)" : "rotate(0deg)"}` }} />
                      </p>
                    </div>
                    <div
                      className={`${styles.faqAnswerWrapper} ${activeIndex === index ? styles.open : ""}`}
                      style={{
                        maxHeight: activeIndex === index ? `${heights[index] || 0}px` : "0px",
                        transition: "max-height 0.4s ease",
                      }}
                      ref={(el) => {
                        if (el && activeIndex === index) {
                          // Set dynamic max-height when active
                          el.style.maxHeight = el.scrollHeight + "px";
                        } else if (el) {
                          el.style.maxHeight = "0px";
                        }
                      }}
                    >
                      <div className={styles.faqAnswer}>{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
