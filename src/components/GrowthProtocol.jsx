import React from "react";

function GrowthProtocol() {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-16 uppercase tracking-widest text-center">
          The Growth Protocol
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black">
          {/* Column 1 */}
          <div className="border-b md:border-b-0 md:border-r border-black p-8 lg:p-12">
            <h3 className="font-bodoni text-2xl mb-6 uppercase tracking-wider font-bold">
              Traffic Engineering
            </h3>
            <p className="font-sans text-sm font-bold uppercase tracking-wide mb-4 text-gray-500">
              Paid Acquisition
            </p>
            <p className="mb-6">
              We move beyond "Boost Post" to build a proper sales system.
            </p>

            <ul className="space-y-6">
              <li>
                <strong className="block font-bold">
                  The Structure Audit:
                </strong>
                <span className="text-gray-700">
                  We reorganize your ad account to stop wasted spend. We
                  separate "New Customers" from "Returning Customers" to keep
                  your budget efficient.
                </span>
              </li>
              <li>
                <strong className="block font-bold">
                  The "Gift-Giver" System:
                </strong>
                <span className="text-gray-700">
                  Using high-intent targeting on Facebook to find partners
                  searching for gifts 14 days before Anniversaries.
                </span>
              </li>
              <li>
                <strong className="block font-bold">
                  The "Window Shopper" Pursuit:
                </strong>
                <span className="text-gray-700">
                  Automated ads that show "almost-buyers" the exact piece they
                  looked at, forcing them to come back.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="border-b md:border-b-0 md:border-r border-black p-8 lg:p-12">
            <h3 className="font-bodoni text-2xl mb-6 uppercase tracking-wider font-bold">
              Psychological Creative
            </h3>
            <p className="font-sans text-sm font-bold uppercase tracking-wide mb-4 text-gray-500">
              Direction & Strategy
            </p>
            <p className="mb-6">
              We do not hold the camera. We direct the strategy.
            </p>

            <ul className="space-y-6">
              <li>
                <strong className="block font-bold">The Creative Brief:</strong>
                <span className="text-gray-700">
                  You know your jewelry looks good. We know why people buy it.
                  We provide precise scripts based on why customers actually
                  spend money.
                </span>
              </li>
              <li>
                <strong className="block font-bold">
                  The "Hook" Strategy:
                </strong>
                <span className="text-gray-700">
                  We guide your content team on exactly how the first 3 seconds
                  of a video must look to grab attention.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="p-8 lg:p-12">
            <h3 className="font-bodoni text-2xl mb-6 uppercase tracking-wider font-bold">
              The Data Room
            </h3>
            <p className="font-sans text-sm font-bold uppercase tracking-wide mb-4 text-gray-500">
              Reporting & Attribution
            </p>
            <p className="mb-6">Opinions don't matter. Revenue matters.</p>

            <ul className="space-y-6">
              <li>
                <strong className="block font-bold">Tracking:</strong>
                <span className="text-gray-700">
                  We ensure your website tracking is working 100%. Every dollar
                  you spend is accounted for.
                </span>
              </li>
              <li>
                <strong className="block font-bold">Bi-Weekly Reports:</strong>
                <span className="text-gray-700">
                  No confusing jargon. Just clear, simple data on how much was
                  spent and how much revenue was made.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthProtocol;
