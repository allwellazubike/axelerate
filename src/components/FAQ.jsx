import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <h3 className="font-bodoni text-xl md:text-2xl uppercase tracking-wide group-hover:text-gray-700 transition-colors">
          {question}
        </h3>
        <span className="text-2xl font-light ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

function FAQ() {
  const faqs = [
    {
      question: "Who is this for?",
      answer:
        "We partner with High-Jewelry Brands, Heritage Retailers, and Emerging Luxury Houses. We do not judge by the age of the business; we judge by the inventory. If you sell investment-grade assets or high-ticket pieces ($1k+), we are a fit. We do not accept dropshippers or mass-market fashion brands.",
    },
    {
      question: "Will running ads hurt my brand image?",
      answer:
        'Aggressive marketing kills luxury. We do not use "discount marketing" or salesy tactics. We use "Desire Marketing." We protect your brand equity as fiercely as your revenue. If the creative isn\'t elegant, it does not go live.',
    },
    {
      question: "Do I need to ship my inventory to you?",
      answer:
        'No. We operate on a "Zero-Risk Protocol." We never ask you to ship high-value assets. We direct your local team remotely, source a vetted partner in your city, or enhance your existing imagery using post-production engineering.',
    },
    {
      question: "Is the ad budget included in the fee?",
      answer:
        "No. Your media budget is paid directly to the platforms (Meta/Google) to ensure you own your data. We recommend a minimum separate ad budget of $1,000/month to generate meaningful intelligence.",
    },
    {
      question: 'Do you work on a "Revenue Share" basis?',
      answer:
        "No. We are consultants, not partners. We charge a flat professional retainer to ensure our focus is on building your long-term infrastructure, not just chasing quick, low-quality sales to pump a commission.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl mb-16 uppercase tracking-widest text-center">
          FAQ: Common Inquiries
        </h2>
        <div className="border-t border-black">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
