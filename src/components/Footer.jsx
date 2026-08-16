import { ArrowUp, Mail } from "lucide-react";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}

        <div className="footer-main">

          <div className="footer-brand">
            <button
              className="footer-logo"
              onClick={scrollToTop}
            >
              RC
            </button>

            <p>
              Computer Science &amp; Engineering
              <br />
              Artificial Intelligence
            </p>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">
            <span>Navigate</span>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              About
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Skills
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("education")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Education
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Contact
            </button>
          </div>

          {/* SOCIAL */}

          <div className="footer-social">
            <span>Connect</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your.email@example.com">
              <Mail size={14} />
              Email
            </a>
          </div>

          {/* BACK TO TOP */}

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Ram Charan.
            All rights reserved.
          </span>

          <span>
            Built with React
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;