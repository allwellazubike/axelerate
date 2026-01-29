import React from "react";

function Philosophy() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-12 uppercase tracking-widest">
          The Core Philosophy
        </h2>

        <div className="space-y-8 font-sans text-lg md:text-xl font-light leading-relaxed text-gray-200">
          <p>
            You have the brand. You have the product. You simply lack the{" "}
            <span className="font-bold text-white">traffic</span>.
          </p>
          <p>
            Most brands burn money on vague "awareness" ads. At Axelerate, we
            specialize in{" "}
            <span className="font-bold text-white">Direct Response</span>. We
            bridge the gap between "running ads" and "building a revenue
            system."
          </p>
          <p>
            We use behavioral psychology to target the exact moment of
            "Need"—placing your jewelry in front of the customer exactly when
            they are looking for a gift or a symbol of love.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
