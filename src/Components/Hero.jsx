import React from "react";
import Logo from "../assets/logo.png";
import Ketch from "../assets/Ketchup.png";

const Hero = () => {
  return (
    <section className="py-[150px] w-full flex justify-center overflow-hidden items-center">
      <div className="container flex-col gap-4 flex justify-center items-center text-center overflow-hidden">
        <img
          src={Logo}
          alt=""
          className="absolute right-0 animate-bounce w-40"
        />
        <img
          src={Ketch}
          alt=""
          className="md:w-8/12
        "
        />
        <p className="max-w-xl z-10 leading-loose text-2xl">
          The greatest addition to blockchain since ethereum
        </p>
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          <a href="https://t.me/KetchupPortal" className="text-4xl">
            telegram
          </a>
          <a href="https://twitter.com/ketchuperc" className="text-4xl">
            twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
