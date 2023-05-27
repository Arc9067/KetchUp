import React from "react";
import Logo from "../assets/logo (1).png";
import text from "../assets/about.png";

const About = () => {
  return (
    <section className="py-[50px] w-full flex justify-center overflow-hidden items-center">
      <div className="container flex-col gap-4 flex justify-center text-2xl items-center text-center overflow-hidden">
        <img
          src={text}
          alt=""
          className="md:w-4/12
        "
        />
        <p className="max-w-xl z-10 leading-loose">
          What's a hot dog without condiments? Just a sad, lonely wiener crying
          out for flavor! What's life without condiments? It's like a party with
          no balloons or a beach without sand. Bland and utterly tasteless! But
          what about blockchain? For 14 agonizingly long years, it has roamed
          the digital landscape without the saucy companionship it truly
          deserves.
        </p>
        <img src={Logo} alt="" className="animate-spin" />
        <p className="max-w-xl z-10 leading-loose">
          Prepare for a wild ride of flavor, my friends! We're taking condiments
          to a whole new level by squirting KetchUp on Pepe the frog. Yep, you
          heard it right. KetchUp makes everything tastier, even on a frog! But
          that's not all. Together, we'll conquer the condiment world on the
          blockchain. Get ready for a saucy adventure like no other!
        </p>
      </div>
    </section>
  );
};

export default About;
