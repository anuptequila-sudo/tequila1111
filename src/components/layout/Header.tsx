"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "../../styles/header.css";
import Button from "../ui/Button";

import Image from "next/image";

const menuItems = [
  { key: "home", label: "Home", href: "./" },
  { key: "case-studies", label: "Case Studies", href: "portfolios" },
  { key: "what-we-do", label: "What We Do" },
  { key: "about", label: "The Agency", href: "about" },
  { key: "insights", label: "Insights", href: "blogs" },
  { key: "faq", label: "FAQs", href: "faqs" },
  { key: "contact", label: "Contact", href: "contact" },
];

function StickyDropdown() {
  const [activeAttr, setActiveAttr] = useState("load");
  const [selectedAttr, setSelectedAttr] = useState<string | null>(null);

  // Handle click to toggle selection
  const handleClick = (attr: string) => {
    if (selectedAttr === attr) {
      // If already selected, unselect it
      setSelectedAttr(null);
      setActiveAttr("load");
    } else {
      setSelectedAttr(attr);
      setActiveAttr(attr);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".sticky-dropdown")) {
        setSelectedAttr(null);
        setActiveAttr("load");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="sticky-dropdown">
      <div className="sticky-dropdown-columns">
        <div className="column-first">
          <div className="sticky-maim-menu">
            {["TEQ", "UI", "LA"].map((attr) => (
              <span
                key={attr}
                className={`sticky-header-text ${selectedAttr === attr ? "selected" : ""}`}
                data-attr={attr}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(attr);
                }}
              >
                {attr === "TEQ" ? "WEB DESIGN & DEVELOPMENT" : attr === "UI" ? "BRANDING" : "COMMUNICATION"}
              </span>
            ))}
          </div>

          <div className="sticky-maim-menu-load">
            {/* Default message */}
            <div
              className="sticky-maim-menu-load-item load-message"
              data-attr="load"
              style={{
                display: activeAttr === "load" && !selectedAttr ? "grid" : "none",
              }}
            >
              <span>
                &quot; We are there for <br /> any and every one <br /> of your <span>needs!</span>&quot;
              </span>
            </div>
            {/* TEQ */}
            <div className="sticky-maim-menu-load-item" data-attr="TEQ" style={{ display: activeAttr === "TEQ" ? "grid" : "none" }}>
              <ul>
                <li>
                  <Link href="/subservices">Custom Website Design & Development</Link>
                </li>
                <li>
                  <Link href="/subservices">E-Commerce Website Design & Development</Link>
                </li>
                <li>
                  <Link href="/subservices">Web Applications Design & Development</Link>
                </li>
                <li>
                  <Link href="/subservices">Domain & Hosting Management</Link>
                </li>
                <li>
                  <Link href="/subservices">Website Maintenance & Support</Link>
                </li>
              </ul>
            </div>

            {/* UI */}
            <div className="sticky-maim-menu-load-item" data-attr="UI" style={{ display: activeAttr === "UI" ? "grid" : "none" }}>
              <ul>
                <li>
                  <Link href="/subservices">Logo Design & Visual Identity</Link>
                </li>
                <li>
                  <Link href="/subservices">Rebranding</Link>
                </li>
                <li>
                  <Link href="/subservices">Brand Elevation</Link>
                </li>
                <li>
                  <Link href="/subservices">Graphic Design</Link>
                </li>
                <li>
                  <Link href="/subservices">Branding, Strategy & Development</Link>
                </li>
                <li>
                  <Link href="/subservices">Corporate Profile & Company Brochure</Link>
                </li>
                <li>
                  <Link href="/subservices">UI/UX Design for Digital Products</Link>
                </li>
              </ul>
            </div>
            {/* LA */}
            <div className="sticky-maim-menu-load-item" data-attr="LA" style={{ display: activeAttr === "LA" ? "grid" : "none" }}>
              <ul>
                <li>
                  <Link href="/subservices">Social Media Strategy & Design</Link>
                </li>
                <li>
                  <Link href="/subservices">Search Engine Optimisation (SEO)</Link>
                </li>
                <li>
                  <Link href="/subservices">Photography & Visual Storytelling</Link>
                </li>
                <li>
                  <Link href="/subservices">Video Storyboarding & Production</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [dark, setDark] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [isMegaVisible, setIsMegaVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [activeStickyItem, setActiveStickyItem] = useState<string | null>(null);
  const [isStickyDropdownVisible, setIsStickyDropdownVisible] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", !dark ? "light" : "dark");
  };

  // Sticky header trigger
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 150);
      // hide mega menu when scrolling
      setIsMegaVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!menuRef.current) return;
      const isInside = target.closest(".header-dropdown, .mega-menu");
      if (!isInside) {
        setIsMegaVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close sticky dropdown on outside click
  // Close sticky dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".sticky-parent.has-dropdown") && !target.closest(".sticky-dropdown-wrapper")) {
        setIsStickyDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setHideHeader(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  //  const headerRef = useRef(null);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight || 0;
      document.body.style.setProperty("--header-height", `${height}px`);
    };

    // Set on load
    setHeaderHeight();

    // Update on resize
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="header" ref={headerRef}>
        <div className="container container-fixed">
          <div className="logo-wrapper">
            <Link href="/">
              <div className="logo">
                <img src="/images/Logo.svg" alt="Logo" />
              </div>
            </Link>
          </div>

          <div className="right-wrapper">
            <nav className="menu" ref={menuRef}>
              <ul>
                <li className="primary-menu-list">
                  <Link href="/portfolios">Case Studies</Link>
                </li>

                {/* Dropdown Item */}
                <li className={`header-dropdown primary-menu-list ${isMegaVisible ? "mega-visible-header" : ""}`} onMouseEnter={() => setIsMegaVisible(true)} onMouseLeave={() => setIsMegaVisible(false)} onClick={() => setIsMegaVisible((prev) => !prev)}>
                  <a>What We Do</a>

                  {/* Mega Menu */}

                  <div className="mega-menu">
                    <div className="col-first">
                      <span className="col-first-text">
                        We are there for any and <br /> everyone of your needs.
                      </span>
                    </div>

                    <div className="col-second dropdown-columns">
                      <div className="sticky-sub-group sticky-sub-middle">
                        <div className="sticky-sub-menu">
                          <h4>
                            TEQ <span className="line-footer-menu"></span>
                          </h4>
                          <Link href="/services">WEB DESIGN & DEVELOPMENT</Link>
                          <ul>
                            <li>
                              <Link href="/subservices">Custom Website Design & Development</Link>
                            </li>
                            <li>
                              <Link href="/subservices">E-Commerce Website Design & Development</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Web Applications Design & Development</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Domain & Hosting Management</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Website Maintenance & Support</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="sticky-sub-menu">
                          <h4>
                            UI <span className="line-footer-menu"></span>
                          </h4>
                          <Link href="/services">BRANDING</Link>
                          <ul>
                            <li>
                              <Link href="/subservices">Logo Design & Visual Identity</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Rebranding</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Brand Elevation</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Graphic Design</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Branding, Strategy & Development</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Corporate Profile & Company Brochure</Link>
                            </li>
                            <li>
                              <Link href="/subservices">UI/UX Design for Digital Products</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="sticky-sub-menu">
                          <h4>
                            LA <span className="line-footer-menu"></span>
                          </h4>
                          <Link href="/services">COMMUNICATION</Link>
                          <ul>
                            <li>
                              <Link href="/subservices">Social Media Strategy & Design</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Search Engine Optimisation (SEO)</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Photography & Visual Storytelling</Link>
                            </li>
                            <li>
                              <Link href="/subservices">Video Storyboarding & Production</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="primary-menu-list">
                  <Link href="/about">The Agency</Link>
                </li>
                <li className="primary-menu-list">
                  <Link href="/blogs">Insights</Link>
                </li>
                <li className="primary-menu-list">
                  <Link href="/faqs">FAQ</Link>
                </li>
              </ul>
            </nav>

            <div className="cta-wrapper">
              <Link href="/contact">
                <Button className="btn btn-secondary cta-btn">Get In Touch</Button>
              </Link>
              <Link href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="phone-image">
                <Image src="/images/phone.svg" alt="Phone" width={48} height={48} />
              </Link>
              <Link href="javascript:void(0);" className="phone-image toggle-btn" onClick={toggleTheme}>
                {dark ? "☀️" : "🌙"}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Mirror Header */}
      {stickyVisible && (
        <header className={`sticky-header dark ${dark ? "dark" : "light"} ${isStickyDropdownVisible ? "" : "blurred"}  ${hideHeader ? "hide-header" : ""}`} style={isStickyDropdownVisible ? {} : {}}>
          <div className="sticky-container">
            <nav className="sticky-menu">
              <ul>
                {menuItems.map((item) => {
                  const isDropdown = item.label === "What We Do";

                  return (
                    <li
                      key={item.key}
                      className={`sticky-parent ${isDropdown ? "has-dropdown" : ""} ${isDropdown && isStickyDropdownVisible ? "is-hovered" : ""}`}
                      onClick={(e) => {
                        if (isDropdown) {
                          e.stopPropagation();
                          setIsStickyDropdownVisible((prev) => !prev);
                        }
                      }}
                    >
                      {item.href ? <Link href={item.href}>{item.label}</Link> : <a>{item.label}</a>}

                      {isDropdown && (
                        <div className={`sticky-dropdown-wrapper ${isStickyDropdownVisible ? "visible" : ""}`}>
                          <StickyDropdown />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
