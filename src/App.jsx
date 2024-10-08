import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Title from "./components/Common/Title/index";
import SkillsSection from "./components/Skills";
import ParticleEffect from "./components/Common/Particles";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ParticleEffect />
        <Navbar />
        <Hero />
        <Title text1="About" text2="Me" id={1} />
        <AboutUs />
        <Title text1="My" text2="Skills" id={2} />
        <SkillsSection />
      </div>
      <SocialMedia />
      <Analytics />
    </div>
  );
}

export default App;
