import React from "react";
import logo from "../assets/logo (1).png";

const Buy = () => {
  return (
    <section>
      <div className="py-[50px] w-full flex justify-center overflow-hidden items-center">
        <div className="container relative flex-col gap-4 flex justify-center items-center overflow-hidden">
          <h1 className="text-6xl  md:text-7xl font-Maus z-10">how to buy</h1>
          <img src={logo} alt="" className="absolute w-40 animate-pulse" />
          <ul className=" text-center z-10 list-inside text-2xl flex flex-col gap-5 mt-5">
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
