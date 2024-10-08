import React from "react";
import ParticleEffect from "./components/Common/Particles";
import Page from "./page";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "90vw" }}>
      <ParticleEffect />
      <Page />
    </div>
  );
}

export default App;
