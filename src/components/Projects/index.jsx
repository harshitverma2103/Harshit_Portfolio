import React from "react";
import ProjectCard from "../Common/Card";
import projects from "./ProjectsData";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="project-container"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </motion.div>
  );
};

export default Projects;
