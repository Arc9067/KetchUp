import React from "react";
import Logo from "../assets/logo.png";
import text from "../assets/roadmap.png";

const Roadmap = () => {
  return (
    <section>
      <div className="py-[50px] w-full flex justify-center overflow-hidden items-center">
        <div className="container flex-col gap-4 flex justify-center items-center overflow-hidden">
          <img
            src={text}
            alt=""
            className="md:w-4/12
        "
          />
          <ul className="list-disc list-inside text-2xl flex flex-col gap-5 mt-5">
            <li className="max-w-lg text-center">
              we will send a bottle on ketchup to mars
            </li>
          </ul>
          <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
