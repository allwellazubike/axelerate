import React, { useState } from "react";

function Partnership() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-32 px-6 bg-white text-black text-center relative">
      <div className="max-w-3xl mx-auto border-4 border-black p-12 md:p-16">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-4 uppercase tracking-widest font-bold">
          Become A Partner
        </h2>
        <h3 className="font-sans text-xl uppercase tracking-widest mb-2 font-bold text-gray-800">
          The Growth Retainer
        </h3>
        <p className="font-sans text-sm italic mb-10 text-gray-500">
          (We only onboard 2 new brands per month to maintain quality.)
        </p>

        <p className="font-sans text-lg leading-relaxed mb-10">
          This is our core engagement. We become your fully integrated growth
          team.
          <br />
          <br />
          <span className="font-bold">Who this is for:</span> Established brands
          ready to scale.
          <br />
          <span className="font-bold">What we handle:</span> Full Ad Management,
          Creative Strategy, Audience Testing, and Weekly Revenue Reporting.
        </p>

        <button
          onClick={openModal}
          className="bg-black text-white font-sans text-lg font-bold py-4 px-12 uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300"
        >
          Apply To Work With Us
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white text-black w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 border-2 border-black relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold hover:text-gray-600"
            >
              &times;
            </button>

            <h2 className="font-bodoni text-3xl mb-8 uppercase text-center font-bold">
              Application Form
            </h2>

            <form
              className="space-y-6 text-left"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application Submitted (Demo)");
                closeModal();
              }}
            >
              {/* 1. The Basics */}
              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-wide border-b border-black pb-2">
                  1. The Basics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  />
                </div>
                <input
                  type="url"
                  placeholder="Brand Website (URL)"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                />
                <input
                  type="text"
                  placeholder="Instagram Handle"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                />
              </div>

              {/* 2. Financial Reality */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  2. What is your current monthly revenue range?
                </label>
                <select
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="0-500">$0 - $500 (Just Starting)</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-20000">$5,000 - $20,000</option>
                  <option value="20000+">$20,000+ (Scaling)</option>
                </select>
              </div>

              {/* 3. Inventory Check */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  3. What is the average price of your best-selling item?
                </label>
                <input
                  type="text"
                  placeholder="e.g. $150"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                />
              </div>

              {/* 4. The Main Problem */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  4. What is the biggest challenge stopping you from growing
                  right now?
                </label>
                <select
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="traffic">I have traffic, but no sales.</option>
                  <option value="scale">
                    I have sales, but I can't scale up.
                  </option>
                  <option value="losing">
                    My ads are running, but losing money.
                  </option>
                  <option value="strategy">
                    I don't have a marketing strategy yet.
                  </option>
                </select>
              </div>

              {/* 5. Budget Capacity */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  5. What is your monthly budget for paid traffic?
                </label>
                <select
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="under500">Under $500</option>
                  <option value="500-1500">$500 - $1,500</option>
                  <option value="1500-5000">$1,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>

              {/* 6. Commitment Test */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  6. Why are you applying now? What happens if you don't fix
                  this in the next 30 days?
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Partnership;
