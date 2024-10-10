import React from "react";
import ProjectCard from "../Common/Card";
import myImage1 from "../../assets/box_office.png";
import myImage2 from "../../assets/college.png";
import myImage3 from "../../assets/Tic_tac.png";
import "./styles.css";

const Projects = () => {
  const projects = [
    {
      imageUrl: myImage1,
      title: "Box Office",
      liveLink: "https://harshitverma2103.github.io/box-office-app/",
      sourceCode: "https://github.com/harshitverma2103/box-office-app",
      tags: ["CSS", "React", "JavaScript", "API"],
    },
    {
      imageUrl: myImage2,
      title: "Edusity",
      liveLink: "https://edusity-chi.vercel.app/",
      sourceCode: "https://github.com/harshitverma2103/edusity",
      tags: ["HTML", "CSS", "JavaScript", "React", "React-Scroll"],
    },
    {
      imageUrl: myImage3,
      title: "Tic Tac Toe",
      liveLink: "https://tictactoegamebyharshit.surge.sh/",
      sourceCode: "https://github.com/harshitverma2103/tictactoe-game",
      tags: ["CSS", "HTML", "JavaScript"],
    },
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;