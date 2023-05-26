import React from "react";
import Logo from "../assets/logo (1).png";
import text from "../assets/about.png";

const About = () => {
  return (
    <section className="py-[50px] w-full flex justify-center overflow-hidden items-center">
      <div className="container flex-col gap-4 flex justify-center items-center text-center overflow-hidden">
        <img
          src={text}
          alt=""
          className="md:w-4/12
        "
        />
        <p className="max-w-xl z-10 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus
          amet eius laboriosam voluptas magnam cumque voluptates neque corrupti
          consequuntur.
        </p>
        <img src={Logo} alt="" className="animate-spin" />
        <p className="max-w-xl z-10 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus
          amet eius laboriosam voluptas magnam cumque voluptates neque corrupti
          consequuntur.
        </p>
      </div>
    </section>
  );
};

export default About;
