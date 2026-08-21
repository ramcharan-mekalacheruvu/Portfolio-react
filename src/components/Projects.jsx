import { ArrowUpRight } from "lucide-react";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Rice Store",
      category: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform developed for a real-world rice business, allowing customers to explore products and place orders through a simple online interface.",
      technologies: [
        "Django",
        "Python",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
      github:
        "https://github.com/ramcharan-mekalacheruvu/rice-store.git",
      demo:
        "https://rice-store-one.vercel.app/",
    },

    {
      number: "02",
      title: "AI Resume Analyzer",
      category: "AI / Machine Learning",
      description:
        "An AI-powered resume analysis application that extracts skills from resumes and compares them with job requirements to recommend relevant career opportunities.",
      technologies: [
        "Python",
        "Django",
        "Machine Learning",
        "TF-IDF",
        "scikit-learn",
      ],
      github:
        "https://github.com/ramcharan-mekalacheruvu/Resume-Analyzer.git",
      demo:
        "https://resume-analyzer-ap3x.onrender.com/",
    },

    {
      number: "03",
      title: "ClassNotesHub",
      category: "PDF Sharing Platform",
      description:
        "A web platform for students to upload, share and access academic notes and PDF resources in one centralized location.",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/ramcharan-mekalacheruvu/Classnoteshub.git",
      demo:
        "https://classnoteshub.infinityfreeapp.com/?i=1",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADER */}

        <div className="projects-header">
          <div>
            <span className="section-label">
              03 / PROJECTS
            </span>

            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>
          </div>

          <p>
            A selection of projects where I've applied
            software development, full-stack development
            and AI/ML concepts to build practical
            solutions.
          </p>
        </div>

        {/* PROJECT LIST */}

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              {/* PROJECT NUMBER */}

              <div className="project-number">
                {project.number}
              </div>

              {/* PROJECT CONTENT */}

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="project-tech">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* PROJECT LINKS */}

              <div className="project-links">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;