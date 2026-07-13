"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    q: "How exactly does auto text correction manage spelling mistakes?",
    a: "Our system relies on spatial sub-word token distance computations rather than static dictionary lookups. This allows it to understand true user intent even when complex brand names or structural product descriptions are heavily misspelled."
  },
  {
    q: "Will scaling voice search increase frontend rendering delays?",
    a: "Not at all. Audio streams pass through specialized sub-15ms edge inference networks that process acoustical translation lines simultaneously alongside catalog verification pipelines to prevent structural page slowdowns."
  },
  {
    q: "What configurations guarantee the stated 99% accuracy rates?",
    a: "We train targeted deep learning classification loops regularly directly against continuous catalog update updates. This structural isolation limits search errors to under one percent across continuous production streams."
  },
  {
    q: "How does the neural AI search parser interpret complex conversational queries?",
    a: "The core parser breaks down long-tail phrases using contextual semantic embedding models. Instead of looking for exact matching keyword strings, it maps the conceptual layout of the prompt to surface highly relevant assets instantly."
  },
  {
    q: "What are the limitations of the complimentary freemium usage tier?",
    a: "The free tier grants full developer access to our neural search engine, capped at 50 AI search operations per day. Limits reset automatically at midnight UTC every day, ensuring zero ongoing overhead costs for initial project environments."
  },
  {
    q: "What occurs automatically if my deployment exceeds the 50 free searches daily quota?",
    a: "Once your system processes its 50th search request within the 24-hour cycle, further operations will pause gracefully to prevent unexpected overage bills. You can scale dynamically into production tiers inside the dashboard at any point."
  }
];

export const FaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-28 bg-white selection:bg-blue-500 selection:text-white antialiased">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Title Content - Centered */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            System Infrastructure
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-4 leading-relaxed max-w-xl mx-auto font-normal">
            Frequently asked questions about technical system alignment configurations, architecture nodes, and deep learning pipelines.
          </p>
        </div>

        {/* Accordion Wrapper - Borderless, Centered text content */}
        <div className="space-y-2 divider-y divider-slate-100">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="overflow-hidden bg-transparent transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-5 text-left font-semibold text-slate-800 text-sm md:text-base hover:text-slate-950 transition-colors cursor-pointer group"
                >
                  <span className="pr-4">{item.q}</span>
                  <div className="h-6 w-6 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isOpen ? (
                      <FiMinus size={16} className="transition-transform duration-200" />
                    ) : (
                      <FiPlus size={16} />
                    )}
                  </div>
                </button>

                {/* Animated Inner Text Body Wrapper - Completely borderless */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="text-left text-xs md:text-sm text-slate-600 leading-relaxed bg-transparent">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};