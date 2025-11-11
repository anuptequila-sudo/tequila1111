"use client";

import React, { useState } from "react";

const StickyDropdown: React.FC = () => {
  const [activeAttr, setActiveAttr] = useState("load");

  const handleMouseEnter = (attr: string) => setActiveAttr(attr);
  const handleMouseLeave = () => setActiveAttr("load");

  return (
    <div className="sticky-dropdown">
      <div className="sticky-dropdown-columns">
        <div className="column-first">
          {/* Left: Header Texts */}
          <div className="sticky-maim-menu">
            {["TEQ", "UI", "LA"].map((attr) => (
              <span
                key={attr}
                className="sticky-header-text"
                data-attr={attr}
                onMouseEnter={() => handleMouseEnter(attr)}
                onMouseLeave={handleMouseLeave}
              >
                {attr === "TEQ"
                  ? "WEB DESIGN & DEVELOPMENT"
                  : attr === "UI"
                  ? "BRANDING"
                  : "COMMUNICATION"}
              </span>
            ))}
          </div>

          {/* Right: Load Items */}
          <div className="sticky-maim-menu-load">
            {/* Default Load */}
            <div
              className="sticky-maim-menu-load-item"
              data-attr="load"
              style={{ display: activeAttr === "load" ? "grid" : "none" }}
            >
              <span>
                " We are there for <br /> any and every one <br /> of your{" "}
                <span>needs!</span>"
              </span>
            </div>

            {/* TEQ */}
            <div
              className="sticky-maim-menu-load-item"
              data-attr="TEQ"
              style={{ display: activeAttr === "TEQ" ? "grid" : "none" }}
            >
              <ul>
                <li>Custom Website Design & Development</li>
                <li>E-Commerce Website Design & Development</li>
                <li>Web Applications Design & Development</li>
                <li>Domain & Hosting Management</li>
                <li>Website Maintenance & Support</li>
              </ul>
            </div>

            {/* UI */}
            <div
              className="sticky-maim-menu-load-item"
              data-attr="UI"
              style={{ display: activeAttr === "UI" ? "grid" : "none" }}
            >
              <ul>
                <li>Logo Design & Visual Identity</li>
                <li>Rebranding</li>
                <li>Brand Elevation</li>
                <li>Graphic Design</li>
                <li>Branding, Strategy & Development</li>
                <li>Corporate Profile & Company Brochure</li>
                <li>UI/UX Design for Digital Products</li>
              </ul>
            </div>

            {/* LA */}
            <div
              className="sticky-maim-menu-load-item"
              data-attr="LA"
              style={{ display: activeAttr === "LA" ? "grid" : "none" }}
            >
              <ul>
                <li>Social Media Strategy & Design</li>
                <li>Search Engine Optimisation (SEO)</li>
                <li>Photography & Visual Storytelling</li>
                <li>Video Storyboarding & Production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDropdown;
