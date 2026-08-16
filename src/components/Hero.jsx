import {
  ArrowUpRight,
  Download,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-label">
            B.Tech CSE · Artificial Intelligence · 4th Year
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Ram Charan.</span>
          </h1>

          <h2>
            Aspiring Software
            <br />
            <em>Developer.</em>
          </h2>

          <p className="hero-description">
            I'm a final-year Computer Science and Engineering
            student specializing in Artificial Intelligence.
            I enjoy building practical web applications,
            backend systems and AI-powered solutions.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={scrollToProjects}
            >
              View my projects
              <ArrowUpRight size={17} />
            </button>

            <button
              className="secondary-button"
              onClick={scrollToContact}
            >
              Contact me
            </button>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} />
              Resume
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}

        <div className="hero-visual">

          <div className="hero-orbit orbit-one"></div>

          <div className="hero-orbit orbit-two"></div>

          <div className="hero-glow"></div>

          <div className="profile-circle">

            <div className="profile-initials">
              RC
            </div>

            <span>SOFTWARE</span>
            <span>DEVELOPER</span>

          </div>

          <div className="floating-card card-one">
            <strong>React</strong>
            <small>Frontend</small>
          </div>

          <div className="floating-card card-two">
            <strong>Python</strong>
            <small>AI / ML</small>
          </div>

          <div className="floating-card card-three">
            <strong>Django</strong>
            <small>Backend</small>
          </div>

        </div>

      </div>

      <button
        className="hero-scroll"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }
      >
        Scroll to explore
        <span>↓</span>
      </button>

    </section>
  );
}

export default Hero;