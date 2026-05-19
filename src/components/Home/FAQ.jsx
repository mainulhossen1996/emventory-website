'use client';

import React, { useState } from 'react';
import { MdContactSupport } from "react-icons/md";

const faqData = [
  {
    question: "Can I use Emventory for both POS and online sales?",
    answer:
      "Yes. Emventory supports both in-store POS operations and e-commerce sales. You can manage your physical shop, online store, and other sales channels from the same system without managing separate inventories.",
  },
  {
    question: "Do I need technical knowledge to set up my store?",
    answer:
      "Not at all. Emventory is designed to be simple and easy to use. You can choose a theme, add your products, and publish your online store in just a few steps — no coding required.",
  },
  {
    question: "Does Emventory support multiple payment gateways?",
    answer:
      "Yes. Emventory allows you to integrate popular payment gateways so your customers can pay securely using different payment methods depending on your business needs.",
  },
  {
    question: "Can I manage multiple stores or branches?",
    answer:
      "Absolutely. Emventory is built to support multi-store and multi-branch operations. You can monitor sales, inventory, and performance across all locations from one centralized dashboard.",
  },
  {
    question: "Is Emventory suitable for small businesses?",
    answer:
      "Yes. Emventory is built for businesses of all sizes. Small retailers, online entrepreneurs, and growing brands can all use the platform to simplify operations and scale efficiently.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "We prioritize data security and system reliability. Your business data is stored securely and backed up regularly to ensure your information remains protected and accessible.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div id="faq" className="relative py-28">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl leading-tight ">
              Need Help? <br /> Start Here.
            </h1>

            <p className="text-gray-500 text-lg mt-6 leading-relaxed max-w-lg">
              Find quick answers to common questions about Emventory — from
              setup to features and pricing. Still curious? Our team is always
              ready to assist you.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 p-5 cursor-pointer hover:border-gray-300 transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg  text-black">
                    {item.question}
                  </h3>

                  <span className="text-2xl text-gray-400">
                    {active === index ? "−" : "+"}
                  </span>
                </div>

                {active === index && (
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;