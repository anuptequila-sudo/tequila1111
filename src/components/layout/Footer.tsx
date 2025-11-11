
import Link from "next/link";


const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return (
    <button className="cta-btn footer-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default function Footer() {
  return (
    <footer>
      <div className="container-fixed">
      <div  className="footer">      
        <div className="footer-group footer-left">
          <img src="/images/Logo.svg" alt="Logo" className="footer-logo" />

          <p className="footer-address">
            A904, Tamani Arts, Business <br /> Bay, Downtown Dubai, UAE
          </p>

      <Button label="Get Direction →" />

          <span className="footer-text">Lots to talk? Then call us!</span>
          <p className="footer-phone">+971 50 937 2493</p>
        </div>

        <div className="footer-group footer-middle">
          <div className="footer-menu">
            <h4>TEQ <span className="line-footer-menu"></span></h4>
            <span>WEB DESIGN & DEVELOPMENT</span>
            <ul>
              <li>Custom Website Design & Development</li>
              <li>E-Commerce Website Design & Development</li>
              <li>Web Applications Design & Development</li>
              <li>Domain & Hosting Management</li>
              <li>Website Maintenance & Support</li>
            </ul>
          </div>

          <div className="footer-menu">
            <h4>UI <span className="line-footer-menu"></span></h4>
            <span>BRANDING</span>
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

          <div className="footer-menu">
            <h4>LA <span className="line-footer-menu"></span></h4>
            <span>COMMUNICATION</span>
            <ul>
              <li>Social Media Strategy & Design</li>
              <li>Search Engine Optimisation (SEO)</li>
              <li>Photography & Visual Storytelling</li>
              <li>Video Storyboarding & Production</li>
            </ul>
          </div>
        </div>

        <div className="footer-group footer-right">
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <span>QUICK LINKS</span>      
            <ul>
              <li><Link href="/">Home</Link></li>
              <li>Cases</li>
              <li>Services</li>
              <li><Link href="/about">The Agency</Link></li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>&nbsp;</h4>
            <span>SOCIALS</span>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
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



