import React from "react";
import NecklaceStack from "../assets/necklace_stack.png";

function WhyAxelerate() {
  return (
    <section
      id="why-axelerate"
      className="flex flex-col md:flex-row min-h-[70vh]"
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[400px]">
        <img
          src={NecklaceStack}
          alt="Luxury Necklace Stack"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 bg-white text-black p-12 lg:p-24 flex flex-col justify-center">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-8 uppercase tracking-widest">
          Why Axelerate?
        </h2>

        <div className="font-sans text-lg space-y-6 leading-relaxed text-gray-800">
          <p>
            I have always been obsessed with the concept of Value—why we pay a
            premium for one stone, but ignore another.
          </p>
          <p className="font-bold italic">
            That curiosity is the foundation of my work.
          </p>
          <p>
            I bring a dual focus to every project: The precision of a Data
            Analyst and the eye of a Creative Director.
          </p>
          <p>
            While most marketers chase the latest trend, I focus on the
            psychology of what makes a luxury brand desirable.
          </p>
          <p>
            I built Axelerate to bring that discipline to the jewelry industry.
          </p>
          <p className="pt-4 text-xl font-bodoni uppercase tracking-wider text-black">
            I don’t just want to be your agency. I want to be the partner who
            cares about your brand as much as you do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyAxelerate;
