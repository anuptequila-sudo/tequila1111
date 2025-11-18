import Link from "next/link";
import Button from "../ui/Button";

// const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => {
//   return (
//     <button className="cta-btn footer-btn" onClick={onClick}>
//       {label}
//     </button>
//   );
// };

export default function Footer() {
  return (
    <footer>
      <div className="container-fixed">
        <div className="footer">
          <div className="footer-group footer-left">
            <img src="/images/Logo.svg" alt="Logo" className="footer-logo" />
            <p className="footer-address">
              A904, Tamani Arts, Business <br /> Bay, Downtown Dubai, UAE
            </p>
            <Button href="/contact" variant="primary">
              Get Direction{" "}
            </Button>
            <span className="footer-text">Lots to talk? Then call us!</span>
            <a href="tel:971509372493" className="footer-phone">
              +971 50 937 2493
            </a>
          </div>

          <div className="footer-group footer-middle">
            <div className="footer-menu">
              <h4>
                TEQ <span className="line-footer-menu"></span>
              </h4>
              <Link className="footer-menu-subtitle" href="/services">
                WEB DESIGN & DEVELOPMENT
              </Link>
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

            <div className="footer-menu">
              <h4>
                UI <span className="line-footer-menu"></span>
              </h4>
              <Link className="footer-menu-subtitle" href="#">
                BRANDING
              </Link>
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

            <div className="footer-menu">
              <h4>
                LA <span className="line-footer-menu"></span>
              </h4>
              <Link className="footer-menu-subtitle" href="#">
                COMMUNICATION
              </Link>
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

          <div className="footer-group footer-right">
            <div className="footer-col">
              <Link className="footer-menu-subtitle" href="#">
                QUICK LINKS
              </Link>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/portfolios">Cases</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">The Agency</Link>
                </li>
                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <Link className="footer-menu-subtitle" href="#">
                SOCIALS
              </Link>
              <ul>
                <li>
                  <Link href="#" target="_blank">Instagram</Link>
                </li>
                <li>
                  <Link href="#" target="_blank">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#" target="_blank">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-bottom-left-col1">
              <h4>@Tequila.ae</h4>
            </div>
            <div className="footer-bottom-left-col2">
              <h4>COOKIES</h4>
            </div>
          </div>
          <div className="footer-bottom-right">
            <h4>© 2025 TEQUILA. All rights reserved</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
