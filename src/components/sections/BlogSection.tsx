"use client";
import "@/styles/BlogsSection.css";
import Button from "../ui/Button";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";



export default function BlogSection() {

     useScrollAnimations();

  return (
    <section className="blogs-section">
         <div className="container-fixed">
      <div className="blogs-header">
        <h2 className="blogs-header-title" data-splitting-opacity-anime>From the Journal</h2>
        <p className="blogs-header-description" data-come-up-anime>
            <span className="description-highlight-space"></span>
         The Journal is where we unpack
what we're learning, exploring, and building-from
branding and digital trends to behind-the-scenes
glimpses of our process.
        </p>
      </div>

        <div className="blogs-container">
            <div className="blogs-list">
                <div className="blogs-item" data-cursor-text="View Blog">
                    <p className="blogs-year">2024</p>
                    <span className="blogs-title" data-splitting-opacity-anime>The Seven Pillars of Building a Premium Brand in UAE</span>
                    <div className="blogs-image-container" data-come-up-anime>
                        <div className="blogs-details">
                            <p className="blogs-tag">BRANDING, BUSINESS</p>
                        </div>
                        <img src="/images/blog1.png" alt="Blog 1" className="blogs-image" />
                    </div>
                </div>

                <div className="blogs-item" data-cursor-text="View Blog">
                    <p className="blogs-year">2024</p>
                    <span className="blogs-title" data-splitting-opacity-anime>The Seven Pillars of Building a premium Brand in UAE</span>
                    <div className="blogs-image-container" data-come-up-anime>
                        <div className="blogs-details">
                            <p className="blogs-tag">BRANDING</p>
                        </div>
                        <img src="/images/blog2.png" alt="Blog 1" className="blogs-image" />
                    </div>
                </div>
            </div>
        </div>
        <div className="blogs-button-container">
           <div className="blogs-button">
            <Button variant="secondary" data-come-up-anime>Read what's new &nbsp; →</Button>
           </div>
        </div>

    </div>
    </section>
  );
}
