"use client";
import "@/styles/about/JoinTheWorkspace.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function JoinTheWorkspace() {
  useScrollAnimations();

  return (
    <section className="JoinTheWorkspace-section">
      <div className="container-fixed">
        <div className="JoinTheWorkspace-header">
          <h2
            className="JoinTheWorkspace-header-title"
            data-splitting-opacity-anime
          >
            Join the Workforce
          </h2>
        </div>
        <div className="JoinTheWorkspace-container">
          <div className="JoinTheWorkspace-item-first">
            <p
              className="JoinTheWorkspace-header-description"
              data-splitting-opacity-anime
            >
              <span
                className="description-highlight-space"
                data-come-up-anime
              ></span>
              We’re always on the lookout for fresh talent, sharp minds, and
              passionate creators who want to make bold things happen.
            </p>
          </div>
          <div className="JoinTheWorkspace-item-second">
            <p>
              For job enquiries, reach us at <br />
              <a href="mailto:careers@tequila.ae">careers@tequila.ae</a>
            </p>
            <p>
              To apply for internships, hit us at <br />
              <a href="mailto:internships@tequila.ae">internships@tequila.ae</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
