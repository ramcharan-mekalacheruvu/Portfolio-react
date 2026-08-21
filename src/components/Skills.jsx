import {
  Code2,
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "Java",],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Bootstrap"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Django",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", ],
  },
  {
    icon: BrainCircuit,
    title: "AI / Machine Learning",
    skills: [
      "Machine Learning",
      "NLP",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <div>
            <span className="section-label">
              02 / SKILLS
            </span>

            <h2>
              Tools I <em>work with.</em>
            </h2>
          </div>

          <p>
            Technologies and tools I've worked with through
            academic projects, internships and hands-on
            development.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className="skill-card"
                key={group.title}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-bottom">
          <span>Currently exploring</span>

          <div>
            <span>Advanced React</span>
            <span>Deep Learning</span>
            <span>System Design</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;