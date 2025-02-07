"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Simply click the Sign Up button, provide your details, and verify your email to start betting.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We accept credit/debit cards, e-wallets (PayPal, Skrill), cryptocurrency, and bank transfers.",
  },
  {
    question: "How long does it take to process withdrawals?",
    answer:
      "Withdrawals are usually processed within 24-72 hours, depending on the payment method.",
  },
  {
    question: "Is there a minimum deposit or withdrawal amount?",
    answer:
      "Yes, the minimum deposit is $10, and the minimum withdrawal is $20.",
  },
  {
    question: "What sports and games can I bet on?",
    answer:
      "We offer betting on football, basketball, tennis, esports, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify type for state

  const toggleFAQ = (index: number) => {
    // Explicitly type index as number
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black p-6 max-w-2xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-red-600">FAQ</h2>
      <div className="space-y-2">
        {faqs.map(
          (
            faq,
            index: number // Explicitly type index
          ) => (
            <div
              key={index}
              className="border-b border-gray-700 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center font-medium py-4">
                <span className="text-lg">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-black pb-4">{faq.answer}</p>
              )}
            </div>
          )
        )}

        {/* TOP Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 text-[#FF6B35] uppercase text-sm tracking-wider font-medium hover:text-[#E85A2C] transition-colors"
        >
          TOP
        </button>
      </div>
    </div>
  );
}
