import React from "react";

function Privacy() {
  return (
    <section
      id="privacy"
      className="py-24 px-6 bg-gray-50 text-black text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bodoni text-2xl md:text-3xl mb-8 uppercase tracking-widest">
          Privacy & Compliance
        </h2>

        <div className="font-sans text-sm md:text-base space-y-6 text-gray-600 leading-relaxed text-justify md:text-center">
          <p>
            Axelerate operates as a Confidential Strategic Partner for
            investment-grade brands.
          </p>
          <p>
            Due to the proprietary nature of our growth methodologies and the
            hyper-competitive landscape of Fine Jewelry, our portfolio is
            shielded by Strict Non-Disclosure Agreements (NDAs).
          </p>
          <p className="font-bold text-black uppercase tracking-wide text-xs md:text-sm">
            We do not broadcast client data publicly.
          </p>
          <p>
            Access to historical campaign performance and "Declassified" samples
            is granted exclusively upon request to qualified partners during the
            vetting process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
