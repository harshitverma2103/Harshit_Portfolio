import React from "react";
import ProjectCard from "../Common/Card";
import projects from "./ProjectsData";
import "./styles.css";

const Projects = () => (
  <div className="project-container">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
);

export default Projects;
