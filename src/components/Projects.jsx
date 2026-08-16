import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "RiceStore",
    category: "E-Commerce · WhatsApp Ordering",
    description:
      "An e-commerce platform for a rice store where customers can browse products and place orders through a simple online interface with WhatsApp-based ordering.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "WhatsApp"],
  },
  {
    number: "02",
    title: "AI Resume Analyzer",
    category: "AI / ML · NLP",
    description:
      "A resume analysis application that extracts skills from PDF and DOCX resumes, compares them with job requirements and recommends suitable job roles using NLP and TF-IDF.",
    technologies: ["Python", "Django", "NLP", "Scikit-learn", "TF-IDF"],
  },
  {
    number: "03",
    title: "ClassNotesHub",
    category: "Web Application",
    description:
      "A student-focused PDF sharing platform that allows users to upload, organize and access academic notes and study materials through a simple web interface.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-label">03 / PROJECTS</div>

      <div className="section-head">
        <div>
          <h2>
            Things I’ve <em>built.</em>
          </h2>

          <p>
            Practical projects where I applied programming, web development
            and artificial intelligence to solve real problems.
          </p>
        </div>

        <a
          className="inline-link"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub profile <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-top">
              <b>{project.number}</b>

              <span>{project.category}</span>

              <ExternalLink size={16} />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-footer">
              <a href="#" target="_blank" rel="noreferrer">
                <Github size={14} />
                View source
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                Live demo
                <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;