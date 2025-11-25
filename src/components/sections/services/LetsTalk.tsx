"use client";

import Button from "@/components/ui/Button";

import "@/styles/services/LetsTalk.css";
import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function LetsTalk() {
  useScrollAnimations();

  return (
    <section className="LetsTalk-section">
      <video id="bgVideo" className="lets--talk--bg" src="/images/what-we-do.mp4" autoPlay muted loop playsInline />
      <div className="container">
        <div className="LetsTalk-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            Ready to Build an <br />
            Unforgettable Brand? Let's Talk.
          </h2>
        </div>
        <div className="LetsTalk-container">
          <div className="LetsTalk-item-first">
            <h2 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              It's time to transform your business and leave an indelible mark. Connect with the experts at Tequila today and let's craft a brand that truly reflects your ambition and captivates your audience.
            </h2>
            <Button href="#" variant="secondary">Schedule a call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
