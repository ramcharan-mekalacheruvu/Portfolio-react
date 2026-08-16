import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    period: "SEP 2023 — MAY 2027",
    degree:
      "Bachelor of Technology (B.Tech) — Computer Science and Engineering (Artificial Intelligence)",
    institution:
      "Annamacharya Institute of Technology and Sciences",
    location: "Rajampeta, Andhra Pradesh, India",
    result: "CGPA: 9.38 / 10 (Current)",
    details: [
      "Branch: Computer Science and Engineering (Artificial Intelligence)",
      "Currently pursuing 4th year",
    ],
  },
  {
    icon: Award,
    period: "JUL 2021 — MAY 2023",
    degree: "Intermediate — MPC",
    institution: "Space Junior College",
    location: "Anantapur, Andhra Pradesh, India",
    result: "Percentage: 96%",
    details: [
      "Stream: Mathematics, Physics and Chemistry",
    ],
  },
  {
    icon: Award,
    period: "JUN 2020 — MAR 2021",
    degree: "Secondary School Certificate (SSC)",
    institution: "Harish EM High School",
    location: "Anantapur, Andhra Pradesh, India",
    result: "Percentage: 96%",
    details: [
      "Board: SSC",
    ],
  },
];

function Education() {
  return (
    <section id="education" className="section dark">
      <div className="section-label">04 / EDUCATION</div>

      <div className="section-head">
        <div>
          <h2>
            My <em>education.</em>
          </h2>

          <p>
            A strong academic foundation combined with practical development
            and AI/ML projects.
          </p>
        </div>
      </div>

      <div className="education-timeline">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <article className="education-item" key={item.degree}>
              <div className="education-icon">
                <Icon size={22} />
              </div>

              <div className="education-content">
                <span className="education-period">
                  {item.period}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p className="education-location">
                  {item.location}
                </p>

                <div className="education-result">
                  {item.result}
                </div>

                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Education;