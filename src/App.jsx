import React, { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
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

function App() {
  return (
    <div>
      <div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <ParticleEffect />
          <Navbar />
          <Hero />
          <Suspense fallback={<div>Loading...</div>}>
            <Title text1="About" text2="Me" id={1} />
            <AboutUs />
            <Title text1="My" text2="Skills" id={2} />
            <SkillsSection />
            <Title text1="Latest" text2="Work" id={3} />
            <Projects />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SocialMedia />
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
