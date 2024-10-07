import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Title from "./components/common/Title";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title text1="About" text2="Me" id={1}/>
      <AboutUs />
      <Title text1="My" text2="Skills" id={2}/>
      <SkillsSection/>
    </div>
  );
}

export default App;
