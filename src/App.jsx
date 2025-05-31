import React, { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const AboutUs = React.lazy(() => import("./components/About"));
const Title = React.lazy(() => import("./components/Common/Title"));
const SkillsSection = React.lazy(() => import("./components/Skills"));
const ParticleEffect = React.lazy(() =>
  import("./components/Common/Particles")
);
const SocialMedia = React.lazy(() => import("./components/SocialMedia"));
const Projects = React.lazy(() => import("./components/Projects"));

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function App() {
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ParticleEffect />
        <Navbar />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <motion.section
            id="about-us-container"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Title text1="About" text2="Me" id={1} />
            <AboutUs />
          </motion.section>
          <motion.section
            id="skills_section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Title text1="My" text2="Skills" id={2} />
            <SkillsSection />
          </motion.section>
          <motion.section
            id="project-container"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Title text1="Latest" text2="Work" id={3} />
            <Projects />
          </motion.section>
          <motion.section
            id="contact_section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Contact />
          </motion.section>
          <Footer />
          <SocialMedia />
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
