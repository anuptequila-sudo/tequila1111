"use client";
import "@/styles/ContactSection.css";
import Button from "../ui/Button";

import Link from "next/link";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function ContactSection() {
  useScrollAnimations();
  return (
    <section className="contact-section">
      <div className="container-fixed">
        <div className="contact-header">
          <h2 className="contact-header-title" data-splitting-opacity-anime>
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
                <Button variant="primary">GET DIRECTIONS &nbsp; →</Button>
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
            <span className="contact-form">
              Hey Tequila, I'm &nbsp;
              <div className="contact-name">
                <input type="text" className="form-control" placeholder="Your Name*" />
              </div>
              .&nbsp; You can reach me at &nbsp;
              <div className="contact-name">
                <input type="text" className="form-control" placeholder="Your Email*" />
              </div>
              .&nbsp; or call me on &nbsp;
              <div className="contact-name">
                <input type="text" className="form-control" placeholder="Your Phone Number*" />
              </div>
              Here's what I've been thinking about: <br />
            </span>
            <div className="contact-message">
              &nbsp;
              <textarea className="form-control" placeholder="Your Message" rows={5}></textarea>
            </div>
            <div className="contact-button-container">
              <div className="contact-button">
                <Button variant="secondary">HIT SEND &nbsp; →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
