import React from "react";

function Hero() {
  return (
    <section className="min-h-[80vh] mt-6 flex flex-col items-center justify-center text-center px-6 py-20 bg-white text-black">
      <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6 leading-[1.1]">
        Data-Driven Scale.
        <br />
        <span className="italic font-normal">Human-Driven Desire.</span>
      </h1>
      <p className="font-sans text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-800 font-light leading-relaxed">
        Scaling a jewelry brand requires two distinct skills: The{" "}
        <span className="font-bold">Art</span> of the craft and the{" "}
        <span className="font-bold">Science</span> of finding customers.{" "}
        <br className="hidden md:block" />
        You have mastered the Art. We handle the Science.
      </p>
      <button className="bg-black text-white font-sans text-lg md:text-xl font-bold py-4 px-12 uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
        Start The Protocol
      </button>
    </section>
  );
}

export default Hero;
