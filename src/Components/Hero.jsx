import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex justify-center overflow-hidden items-center">
      <div className="container flex-col gap-4 flex justify-center items-center text-center overflow-hidden">
        <h1 className="text-7xl  md:text-9xl font-Maus z-10">ketchup</h1>
        <img
          src={Logo}
          alt=""
          className="absolute right-0 animate-bounce w-40"
        />
        <p className="max-w-xl z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus
          amet eius laboriosam voluptas magnam cumque voluptates neque corrupti
          consequuntur.
        </p>
      </div>
    </section>
  );
};

export default Hero;
