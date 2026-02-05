import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Partnership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to EmailJS
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      );

      if (result.status === 200) {
        alert("Application submitted successfully! We'll be in touch soon.");
        closeModal();
        // Reset form
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to submit application. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="partnership"
      className="py-32 px-6 bg-white text-black text-center relative"
    >
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
              disabled={isSubmitting}
            >
              &times;
            </button>

            <h2 className="font-bodoni text-3xl mb-8 uppercase text-center font-bold">
              Application Form
            </h2>

            <form
              ref={formRef}
              className="space-y-6 text-left"
              onSubmit={handleSubmit}
            >
              {/* 1. The Basics */}
              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-wide border-b border-black pb-2">
                  1. The Basics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                    disabled={isSubmitting}
                  />
                </div>
                <input
                  type="url"
                  name="website"
                  placeholder="Brand Website (URL)"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram Handle"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  disabled={isSubmitting}
                />
              </div>

              {/* 2. Financial Reality */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  2. What is your current monthly revenue range?
                </label>
                <select
                  name="monthly_revenue"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                  disabled={isSubmitting}
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
                  name="average_price"
                  placeholder="e.g. $150"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  disabled={isSubmitting}
                />
              </div>

              {/* 4. The Main Problem */}
              <div>
                <label className="block mb-2 font-bold text-sm">
                  4. What is the biggest challenge stopping you from growing
                  right now?
                </label>
                <select
                  name="biggest_challenge"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                  disabled={isSubmitting}
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
                  name="monthly_budget"
                  required
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50 bg-white"
                  disabled={isSubmitting}
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
                  name="application_reason"
                  required
                  rows="3"
                  className="w-full p-3 border border-black focus:outline-none focus:bg-gray-50"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted by our team.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Partnership;
