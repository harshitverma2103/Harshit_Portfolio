import React from "react";
import "./style.css";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", percentage: "90%" },
    { name: "CSS", percentage: "85%" },
    { name: "JavaScript", percentage: "80%" },
    { name: "React.js", percentage: "75%" },
    { name: "Node.js", percentage: "65%" },
    { name: "Tailwind CSS", percentage: "75%" },
    { name: "Java", percentage: "70%" },
    { name: "Selenium", percentage: "65%" },
    { name: "Cypress", percentage: "70%" },
    { name: "Playwright", percentage: "75%" },
    { name: "Git", percentage: "80%" },
    { name: "GitHub", percentage: "85%" },
  ];

  return (
    <section className="skills_section">
      <div className="skills_main">
        {skills.map((skill) => (
          <div className="skill_bar" key={skill.name}>
            <div className="info">
              <p>{skill.name}</p>
              <p>{skill.percentage}</p>
            </div>
            <div className="bar">
              <span
                className={skill.name.toLowerCase().replace(".", "").replace(" ", "_")}
                style={{ width: skill.percentage }}
                aria-label={`${skill.name} proficiency: ${skill.percentage}`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
