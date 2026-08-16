import {
  ShoppingCart,
  MessageCircle,
  BrainCircuit,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "RiceStore",
    subtitle: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform designed for selling rice and related products online. Includes product browsing, cart management and an organized shopping experience.",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "REST API",
    ],
    type: "Full Stack",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "WhatsApp Ordering System",
    subtitle: "Online Ordering Platform",
    description:
      "A web-based ordering system that allows customers to browse products, select quantities and place orders through WhatsApp for a simple and convenient purchasing workflow.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "WhatsApp API",
    ],
    type: "Web Application",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Resume Analyzer",
    subtitle: "Machine Learning Application",
    description:
      "An AI-powered resume analysis application that extracts skills from uploaded resumes and identifies suitable job roles using NLP, TF-IDF and machine learning techniques.",
    technologies: [
      "Python",
      "Django",
      "NLP",
      "Scikit-learn",
      "TF-IDF",
    ],
    type: "AI / ML",
  },
  {
    number: "04",
    icon: FileText,
    title: "ClassNotesHub",
    subtitle: "PDF Sharing Platform",
    description:
      "A platform for students to upload, organize and share academic PDF notes, making study materials easier to access and distribute.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
    ],
    type: "Web Application",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* HEADING */}

        <div className="projects-heading">
          <div>
            <span className="section-label">
              03 / PROJECTS
            </span>

            <h2>
              Things I've <em>built.</em>
            </h2>
          </div>

          <p>
            A selection of academic and personal projects
            where I applied software development, AI and
            problem-solving skills.
          </p>
        </div>

        {/* PROJECT LIST */}

        <div className="projects-list">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="project-card"
                key={project.title}
              >
                {/* NUMBER */}

                <div className="project-number">
                  {project.number}
                </div>

                {/* ICON */}

                <div className="project-icon">
                  <Icon size={22} />
                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <div className="project-title-row">
                    <div>
                      <span className="project-type">
                        {project.type}
                      </span>

                      <h3>{project.title}</h3>

                      <h4>{project.subtitle}</h4>
                    </div>

                    <button
                      className="project-arrow"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={19} />
                    </button>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;