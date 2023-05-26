import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-red-800 text-white">
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

export default App;
