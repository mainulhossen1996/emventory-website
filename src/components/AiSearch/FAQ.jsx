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
  }
];

export const FaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title Info */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            System Infrastructure FAQ
          </h2>
          <p className="text-sm text-slate-500">
            Frequently asked questions about technical system alignment configurations.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/30 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 text-sm md:text-base hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <div className="h-6 w-6 rounded-md border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-500 shadow-sm">
                    {isOpen ? <FiMinus size={14} className="animate-rotate" /> : <FiPlus size={14} />}
                  </div>
                </button>

                {/* Animated Inner Text Body Wrapper */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <div className="p-5 text-xs md:text-sm text-slate-500 leading-relaxed bg-white">
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