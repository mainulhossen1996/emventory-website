"use client";
import React, { useState } from "react";
import { FiSearch, FiLayers, FiSliders, FiCpu, FiTrendingUp } from "react-icons/fi";

const sampleData = {
  raw: "i need a breathable shirt for runing in hot summer around 40 dollars",
  corrected: "breathable running shirt",
  intent: ["Athletic Apparel", "Moisture Wicking", "Budget: Under $50"],
  results: [
    { name: "AeroDry Training Tee", price: "$38.00", match: "99.4%" },
    { name: "Stratus Vent Singlet", price: "$42.00", match: "98.1%" }
  ]
};

export const InteractiveShowcase = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Context Explanation */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-4">
              <FiCpu /> Engine Pipeline
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.2] mb-6">
              Watch structural intent parsing in real-time.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              See how our vector pipeline intercepts raw, messy typing patterns and automatically normalizes, updates, and ranks complex search inquiries instantly.
            </p>
            
            <button 
              onClick={() => setIsActive(!isActive)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {isActive ? "Reset Architecture View" : "Run Processing Pipeline Simulation"}
            </button>
          </div>

          {/* RIGHT: Live Component Processing Simulator */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Inference Monitor</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">Latency: 14ms</span>
            </div>

            {/* Input Layer */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Raw User Input String</label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-medium flex items-center gap-2">
                  <FiSearch className="text-slate-400 shrink-0" />
                  <span>{sampleData.raw}</span>
                </div>
              </div>

              {/* Transformation Pipeline Elements */}
              <div className={`space-y-4 transition-all duration-500 origin-top ${isActive ? "opacity-100 max-h-[500px] scale-100 mt-4" : "opacity-0 max-h-0 scale-95 overflow-hidden"}`}>
                
                {/* Auto Correction Layer */}
                <div className="flex items-start gap-3 bg-indigo-50/50 border border-indigo-100/80 rounded-xl p-3.5">
                  <FiSliders className="text-indigo-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-indigo-900 tracking-wide uppercase">Pipeline Auto-Correction Layer</h4>
                    <p className="text-xs text-indigo-700 mt-0.5 font-mono">Parsed: "runing" → <span className="font-bold underline">running</span></p>
                  </div>
                </div>

                {/* Intent Extraction Badges */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Extracted Intent Tokens</label>
                  <div className="flex flex-wrap gap-2">
                    {sampleData.intent.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100/60 font-semibold shadow-sm animate-fade-in">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Output Match Rankings */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Vector Match Output Result Matrix</label>
                  <div className="space-y-2">
                    {sampleData.results.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between border border-slate-100 bg-slate-50/30 rounded-xl p-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2">
                          <FiLayers className="text-slate-400" size={14} />
                          <span className="text-xs font-semibold text-slate-800">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-500">{item.price}</span>
                          <span className="text-[11px] font-extrabold bg-emerald-50 border border-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <FiTrendingUp size={10} /> {item.match}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};