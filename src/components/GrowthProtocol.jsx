import React from "react";

function GrowthProtocol() {
  return (
    <section
      id="protocol"
      className="py-24 px-6 bg-white text-black overflow-hidden hover:cursor-default"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-20 uppercase tracking-widest text-center">
          The Growth Protocol
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="relative group p-6 lg:p-8 hover:-translate-y-2 transition-transform duration-500">
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl mb-4 uppercase tracking-wider font-bold border-b border-black pb-4 inline-block">
                Traffic Engineering
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Paid Acquisition
              </p>
              <p className="mb-8 font-light text-lg">
                We move beyond "Boost Post" to build a proper sales system.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The Structure Audit
                    </strong>
                    <span className="text-gray-600 font-light">
                      We reorganize your ad account to stop wasted spend and
                      separate new vs returning customers.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The "Gift-Giver" System
                    </strong>
                    <span className="text-gray-600 font-light">
                      High-intent targeting finding partners searching for gifts
                      14 days before Anniversaries.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The "Window Shopper" Pursuit
                    </strong>
                    <span className="text-gray-600 font-light">
                      Automated ads showing "almost-buyers" the exact piece they
                      looked at.
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
                Psychological Creative
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Direction & Strategy
              </p>
              <p className="mb-8 font-light text-lg">
                We do not hold the camera. We direct the strategy.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The Creative Brief
                    </strong>
                    <span className="text-gray-600 font-light">
                      We provide precise scripts based on why customers actually
                      spend money, not just what looks good.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      The "Hook" Strategy
                    </strong>
                    <span className="text-gray-600 font-light">
                      Guiding your content team on exactly how the first 3
                      seconds must look to grab attention.
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
                The Data Room
              </h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wide mb-6 text-gray-500">
                Reporting & Attribution
              </p>
              <p className="mb-8 font-light text-lg">
                Opinions don't matter. Revenue matters.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">Tracking</strong>
                    <span className="text-gray-600 font-light">
                      Ensuring every dollar you spend is accounted for with 100%
                      accurate website tracking.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-black font-bold">—</span>
                  <span>
                    <strong className="block font-bold mb-1">
                      Bi-Weekly Reports
                    </strong>
                    <span className="text-gray-600 font-light">
                      No jargon. Just clear, simple data on spend vs revenue.
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
