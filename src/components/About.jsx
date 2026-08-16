import {
  UserRound,
  Code2,
  BrainCircuit,
  Target,
} from "lucide-react";

import "./About.css";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building responsive web applications and practical backend systems.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Applying machine learning and NLP to solve real-world problems.",
  },
  {
    icon: Target,
    title: "Career Goal",
    text: "Looking for an entry-level software development or AI/ML opportunity.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <div>
            <span className="section-label">
              01 / ABOUT ME
            </span>

            <h2>
              More than a <em>student.</em>
            </h2>
          </div>

          <p>
            Building the skills and experience needed to
            become a dependable software engineer.
          </p>
        </div>

        <div className="about-main">

          <div className="about-text">
            <p className="about-intro">
              I'm Ram Charan, a B.Tech Computer Science and
              Engineering student specializing in Artificial
              Intelligence.
            </p>

            <p>
              Currently pursuing my 4th year, I enjoy building
              practical applications that combine software
              development with intelligent technologies.
            </p>

            <p>
              My technical experience includes React,
              JavaScript, Python, Django, Spring Boot, MySQL,
              MongoDB and machine learning technologies.
            </p>

            <p>
              I have developed projects ranging from
              e-commerce platforms and WhatsApp ordering
              systems to AI-powered resume analysis and
              online PDF sharing platforms.
            </p>

            <p>
              As a fresher, I'm looking for an opportunity where
              I can contribute to real products, learn from
              experienced developers and continuously improve
              my engineering skills.
            </p>
          </div>

          <div className="about-profile">

            <div className="profile-header">
              <div className="profile-icon">
                <UserRound size={20} />
              </div>

              <div>
                <strong>Ram Charan</strong>
                <span>
                  Computer Science · Artificial Intelligence
                </span>
              </div>
            </div>

            <div className="profile-details">

              <div>
                <span>Degree</span>
                <strong>B.Tech CSE (AI)</strong>
              </div>

              <div>
                <span>University</span>
                <strong>Annamacharya University</strong>
              </div>

              <div>
                <span>Current Year</span>
                <strong>4th Year</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>9.38 / 10</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Andhra Pradesh, India</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="about-highlights">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="about-highlight"
                key={item.title}
              >
                <div className="highlight-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default About;