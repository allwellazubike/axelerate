import React from "react";

function GrowthProtocol() {
  return (
    <section
      id="protocol"
      className="py-24 px-6 bg-white text-black overflow-hidden hover:cursor-default"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-12 uppercase tracking-widest text-center">
          OUR THREE-PILLAR SYSTEM: The Commercial Architecture
        </h2>

        <p className="max-w-3xl mx-auto text-center font-sans text-lg mb-16 leading-relaxed">
          We believe in engineering success, not hoping for it. Our process is a
          linear, three-step framework designed to transform luxury brands from
          competing on price to commanding status.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="relative group p-6 lg:p-8 hover:-translate-y-2 transition-transform duration-500">
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl mb-4 uppercase tracking-wider font-bold border-b border-black pb-4 inline-block">
                I. THE STRATEGY
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Economic Engineering
              </p>
              <p className="mb-8 font-light text-lg">
                Revenue is physics, not luck. Before paying for traffic, we must
                perfect the offer.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The Pricing Audit
                    </strong>
                    <span className="text-gray-600 font-light">
                      We analyze your current inventory and margins. By
                      restructuring your price points and offer logic, we unlock
                      hidden profit and make high prices feel mathematically
                      logical to the buyer.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      Asset Class Positioning
                    </strong>
                    <span className="text-gray-600 font-light">
                      Escaping the "commodity trap" requires a new identity. We
                      reposition your brand from selling "accessories" to
                      selling "legacy assets," allowing you to command premium
                      margins that competitors cannot touch.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative group p-6 lg:p-8 hover:-translate-y-2 transition-transform duration-500 delay-100">
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl mb-4 uppercase tracking-wider font-bold border-b border-black pb-4 inline-block">
                II. THE INFRASTRUCTURE
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Digital Ecosystems
              </p>
              <p className="mb-8 font-light text-lg">
                A high-ticket item demands a high-ticket environment. You cannot
                sell a legacy piece on a cheap site.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      Desire-Based Web Build
                    </strong>
                    <span className="text-gray-600 font-light">
                      We build your custom digital storefront from scratch. No
                      standard templates. We engineer a specific psychological
                      journey that guides the high-net-worth client from
                      "curiosity" directly to "payment."
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      Visual Engineering Scripts
                    </strong>
                    <span className="text-gray-600 font-light">
                      We do not hold the camera; we direct the outcome. We
                      provide your content team with precise, scene-by-scene
                      scripts to capture the specific lighting and angles that
                      trigger desire, ensuring the product looks expensive.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative group p-6 lg:p-8 hover:-translate-y-2 transition-transform duration-500 delay-200">
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl mb-4 uppercase tracking-wider font-bold border-b border-black pb-4 inline-block">
                III. THE GROWTH
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Revenue Acceleration
              </p>
              <p className="mb-8 font-light text-lg">
                Once the strategy and website are built, we apply the fuel.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The Anniversary Algorithm
                    </strong>
                    <span className="text-gray-600 font-light">
                      We do not rely on broad targeting. We identify and target
                      partners exactly 14 days before major spending events
                      (Anniversaries, Birthdays) when their intent to purchase
                      is at 100%.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      Capital Efficiency
                    </strong>
                    <span className="text-gray-600 font-light">
                      We do not send generic reports. We install advanced
                      tracking systems to trace every dollar spent back to a
                      specific sale, ensuring that your budget is only deployed
                      on what generates revenue.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthProtocol;
