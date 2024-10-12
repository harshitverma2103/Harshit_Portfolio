import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";
import skills from "./skillsData"; // Ensure this path is correct

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const skillsBars = sectionRef.current.querySelectorAll(
      ".skill_bar .bar span"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsBars.forEach((bar, index) => {
            const percentage = bar.parentElement.parentElement.querySelector(
              ".info p:nth-child(2)"
            ).textContent;
            gsap.to(bar, {
              width: percentage,
              duration: 2,
              ease: "power1.out",
              delay: 0.5 * index,
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills_section" ref={sectionRef}>
      <div className="skills_head">
        <h2>My Skills</h2>
      </div>
      <div className="skills_main">
        {skills.map((skill) => (
          <div className="skill_bar" key={skill.name}>
            <div className="info">
              <p>{skill.name}</p>
              <p>{skill.percentage}</p>
            </div>
            <div className="bar">
              <span
                className={`skill ${skill.name
                  .toLowerCase()
                  .replace(".", "")
                  .replace(" ", "_")}`}
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
