import {
  Mail,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* HEADING */}

        <div className="contact-heading">
          <span className="section-label">
            05 / CONTACT
          </span>

          <h2>
            Let's build something
            <em> great.</em>
          </h2>

          <p>
            I'm currently looking for opportunities where I
            can apply my development and AI/ML skills,
            learn from experienced teams, and contribute
            to meaningful products.
          </p>
        </div>

        {/* CONTACT GRID */}

        <div className="contact-grid">

          {/* EMAIL */}

          <a
            href="mailto:your.email@example.com"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <Mail size={20} />
            </div>

            <div>
              <span>Email</span>
              <h3>your.email@example.com</h3>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon text-icon">
              GH
            </div>

            <div>
              <span>GitHub</span>
              <h3>View my repositories</h3>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon text-icon">
              in
            </div>

            <div>
              <span>LinkedIn</span>
              <h3>Connect with me</h3>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

          {/* LOCATION */}

          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={20} />
            </div>

            <div>
              <span>Location</span>
              <h3>Andhra Pradesh, India</h3>
            </div>
          </div>

        </div>

        {/* CTA */}

        <div className="contact-cta">
          <span>
            Open to internships &amp; full-time opportunities
          </span>

          <a href="mailto:your.email@example.com">
            Get in touch
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;