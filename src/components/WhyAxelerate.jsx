import React from "react";
import NecklaceStack from "../assets/necklace_stack.png";

function WhyAxelerate() {
  return (
    <section className="flex flex-col md:flex-row min-h-[70vh]">
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

        <div className="font-sans text-lg space-y-6 leading-relaxed">
          <p>
            General marketing agencies use the same strategy for everyone. They
            try to sell Fine Jewelry the same way they sell fast fashion or
            gadgets.
          </p>
          <p className="font-bold italic">This is a mistake.</p>
          <p>
            Fast fashion is an impulse buy. Jewelry is an emotional investment.
          </p>
          <p>
            <span className="font-bold">We are Specialists.</span>
            <br />
            We understand that your customer isn't just buying gold or silver;
            they are buying a memory, a promise, or a status symbol. We build
            campaigns that respect that difference.
          </p>
          <p className="pt-4 text-xl font-bodoni uppercase tracking-wider">
            You build the legacy. We build the traffic.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyAxelerate;
