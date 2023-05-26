import React from "react";
import Logo from "../assets/logo.png";

const Roadmap = () => {
  return (
    <section>
      <div className="py-[50px] w-full flex justify-center overflow-hidden items-center">
        <div className="container flex-col gap-4 flex justify-center items-center overflow-hidden">
          <h1 className="text-6xl  md:text-7xl font-Maus z-10">roadmap</h1>
          <img src={Logo} alt="" />
          <ul className="list-disc list-inside text-2xl flex flex-col gap-5 mt-5">
            <li>1% tax</li>
            <li>6969420 supply</li>
            <li>1% max tx</li>
            <li>lp burt</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
