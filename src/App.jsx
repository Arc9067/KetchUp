import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-red-800 text-white">
      <Hero />
      <About />
    </div>
  );
};

export default App;
