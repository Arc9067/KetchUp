import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";
import Buy from "./Components/Buy";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-red-500 text-white">
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Buy />
    </div>
  );
};

export default App;
