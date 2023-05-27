import React from "react";
import logo from "../assets/logo (1).png";
import text from "../assets/how to buy.png";

const Buy = () => {
  return (
    <section>
      <div className="py-[50px] w-full flex justify-center overflow-hidden items-center">
        <div className="container relative flex-col gap-4 flex justify-center items-center overflow-hidden">
          <img
            src={text}
            alt=""
            className="md:w-4/12
        "
          />{" "}
          <img src={logo} alt="" className="absolute w-40 animate-pulse" />
          <ul className="text-center  z-10 list-inside text-4xl flex flex-col gap-5 mt-5">
            <li className="max-w-lg">Buy ETH</li>
            <li className="max-w-lg">send it to your MetaMask wallet</li>
            <li className="max-w-lg">Connect to Uniswap.</li>
            <li className="max-w-lg">Import the $KetchUp contract.</li>
            <li className="max-w-lg">Swap with $Ketchup</li>
            <li className="max-w-lg">
              Savor the finest condiment on the blockchain.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Buy;
