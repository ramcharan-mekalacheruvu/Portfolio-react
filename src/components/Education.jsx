import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

import "./Education.css";

const education = [
  {
    number: "01",
    icon: GraduationCap,
    period: "Sep 2023 — May 2027",
    level: "Bachelor of Technology",
    title: "Computer Science and Engineering",
    specialization: "Artificial Intelligence",
    institution:
      "Annamacharya Institute of Technology and Sciences",
    location: "Rajampeta, Andhra Pradesh, India",
    details: [
      "Currently pursuing 4th year",
      "Aggregate CGPA: 9.38 / 10",
    ],
  },
  {
    number: "02",
    icon: School,
    period: "Jul 2021 — May 2023",
    level: "Intermediate",
    title: "MPC",
    specialization: "Mathematics, Physics & Chemistry",
    institution: "Space Junior College",
    location: "Anantapur, Andhra Pradesh, India",
    details: [
      "Aggregate Percentage: 96%",
    ],
  },
  {
    number: "03",
    icon: BookOpen,
    period: "Jun 2020 — Mar 2021",
    level: "High School",
    title: "Secondary School Certificate",
    specialization: "SSC",
    institution: "Harish EM High School",
    location: "Anantapur, Andhra Pradesh, India",
    details: [
      "Aggregate Percentage: 96%",
    ],
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="education-heading">
          <div>
            <span className="section-label">
              04 / EDUCATION
            </span>

            <h2>
              My academic <em>journey.</em>
            </h2>
          </div>

          <p>
            A strong academic foundation in computer science,
            artificial intelligence, mathematics and science.
          </p>
        </div>

        <div className="education-timeline">

          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="education-item"
                key={item.number}
              >
                <div className="education-number">
                  {item.number}
                </div>

                <div className="education-line">
                  <div className="education-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="education-content">

                  <div className="education-top">
                    <span className="education-period">
                      {item.period}
                    </span>

                    <span className="education-level">
                      {item.level}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <h4>{item.specialization}</h4>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <p className="education-location">
                    {item.location}
                  </p>

                  <div className="education-details">
                    {item.details.map((detail) => (
                      <span key={detail}>
                        {detail}
                      </span>
                    ))}
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

export default Education;