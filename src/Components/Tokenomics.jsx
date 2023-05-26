import React from "react";
import text from "../assets/tokenomics.png";

const Tokenomics = () => {
  return (
    <section>
      <div className="py-[50px] w-full flex justify-center overflow-hidden items-center">
        <div className="container flex-col gap-4 flex justify-center items-center overflow-hidden">
          <img
            src={text}
            alt=""
            className="md:w-6/12
        "
          />
          <ul className="list-decimal list-inside text-2xl flex flex-col gap-5 mt-5">
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

export default Tokenomics;
