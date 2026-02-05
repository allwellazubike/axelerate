import React from "react";
import NecklaceStack from "../assets/necklace_stack.png";

function WhyAxelerate() {
  return (
    <section id="founder" className="flex flex-col md:flex-row min-h-[70vh]">
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
          ABOUT THE FOUNDER: The Architect
        </h2>

        <div className="font-sans text-lg space-y-6 leading-relaxed text-gray-800">
          <p className="font-bold italic">
            "I do not sell jewelry. I engineer desire."
          </p>
          <p>
            The Jewelry Industry is currently divided into two worlds: The "Old
            Guard" who have heritage but no digital strategy, and the "New Wave"
            who have attention but no prestige. I built Axelerate to bridge that
            gap.
          </p>
          <p>
            I am not a photographer. I am not an ad buyer. I am a Commercial
            Architect.
          </p>
          <p>
            My role is singular: To take a brand that is competing on price and
            restructure it until it competes on status.
          </p>
          <p>
            We strip away the noise. We refine the offer. We engineer the
            lighting, the language, and the logistics to ensure that when a
            client looks at your inventory, the price becomes irrelevant.
          </p>
          <p>
            We do not work with everyone. We work with the few who understand
            that in the new economy, Attention is the only currency that
            matters.
          </p>
          <p className="pt-4 text-xl font-bodoni uppercase tracking-wider text-black">
            – Divine Azubike, Founder, Axelerate
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyAxelerate;
