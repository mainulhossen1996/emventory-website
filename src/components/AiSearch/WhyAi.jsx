"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FiX, FiCheckCircle, FiTag, FiVolume2, FiGlobe, FiEdit3, FiPackage, FiFrown,
} from "react-icons/fi";

const SCENARIOS = [
  {
    id: "typo",
    label: "Typos",
    icon: <FiEdit3 size={14} />,
    query: "wireles erbudz noiz cansuling",
    without: { state: "empty", note: "No results — exact spelling required" },
    with: {
      product: "AudioNova Wireless Earbuds",
      price: "৳2,450",
      chips: ["Wireless", "Noise Cancelling"],
    },
  },
  {
    id: "vague",
    label: "Vague descriptions",
    icon: <FiFrown size={14} />,
    query: "something quiet for a long flight",
    without: { state: "empty", note: "No results — no matching keywords" },
    with: {
      product: "PulseTech Over-Ear Headphones",
      price: "৳3,600",
      chips: ["Noise Cancelling", "40hr Battery"],
    },
  },
  {
    id: "mixed",
    label: "Mixed language",
    icon: <FiGlobe size={14} />,
    query: "bass wala headphone kom dame",
    without: { state: "empty", note: "No results — query not in catalog language" },
    with: {
      product: "ZenGear Over-Ear Headphones Lite",
      price: "৳1,850",
      chips: ["Deep Bass", "Budget Pick"],
    },
  },
  {
    id: "outofstock",
    label: "Out-of-stock items",
    icon: <FiPackage size={14} />,
    query: "TitanByte Earbuds Pro Max",
    without: { state: "deadend", note: "Item out of stock — dead end, customer leaves" },
    with: {
      product: "NovaCore Earbuds Plus",
      price: "৳2,970",
      chips: ["Closest Match", "In Stock"],
    },
  },
];

function useTypedText(text, speed = 40) {
    const [typed, setTyped] = useState("");
  
    useEffect(() => {
      // Show the first character immediately — don't wait for the interval's
      // first tick, which is what let the first character (sometimes the
      // whole first word) get swallowed on fast scenario switches.
      setTyped(text.slice(0, 1));
  
      let i = 1;
      const timer = setInterval(() => {
        if (i < text.length) {
          i++;
          setTyped(text.slice(0, i)); // slice from the source string, not prev + char —
                                        // avoids any chance of building on stale state
        } else {
          clearInterval(timer);
        }
      }, speed);
  
      return () => clearInterval(timer);
    }, [text, speed]);
  
    return typed;
  }

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

export const WhyAiSearch = () => {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((s) => s.id === activeId);
  const typedQuery = useTypedText(scenario.query);
  const [headerRef, headerInView] = useInView();
  const [panelRef, panelInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mx-auto text-center mb-14 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-5">
            Why it matters
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-5">
            One bad search, one lost sale.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Shoppers rarely retype a query that just failed — they leave instead. Pick a real scenario below and see the same search handled two different ways.
          </p>
        </div>

        {/* Scenario selector */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                activeId === s.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>

        {/* Comparison panel */}
        <div
          ref={panelRef}
          className={`grid md:grid-cols-2 gap-5 transition-all duration-500 ${
            panelInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Without AI search */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Keyword search
            </span>
            <div className="rounded-lg bg-white border border-slate-200 px-3.5 py-2.5 mb-5">
              <span className="font-mono text-sm text-slate-600">
                {typedQuery}
                <span className="inline-block w-[1px] h-4 bg-slate-400 ml-0.5 align-middle motion-safe:animate-pulse" />
              </span>
            </div>

            <div key={activeId} className="flex-1 flex flex-col items-center justify-center text-center py-8 opacity-0 motion-safe:animate-[fadeIn_0.4s_ease-out_1.6s_forwards]">
              <div className="h-11 w-11 rounded-full bg-red-50 text-red-400 flex items-center justify-center mb-3">
                <FiX size={18} />
              </div>
              <p className="text-sm font-medium text-slate-600">{scenario.without.note}</p>
              <p className="text-xs text-slate-400 mt-1">Customer leaves the store</p>
            </div>
          </div>

          {/* With AI search */}
          <div className="rounded-2xl border-2 border-blue-500 bg-white p-6 flex flex-col shadow-lg shadow-blue-500/5 relative">
            <span className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              AI search
            </span>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-blue-500 mb-4 mt-1">
              Same query, understood
            </span>
            <div className="rounded-lg bg-blue-50/60 border border-blue-100 px-3.5 py-2.5 mb-5">
              <span className="font-mono text-sm text-slate-700">
                {typedQuery}
                <span className="inline-block w-[1px] h-4 bg-blue-400 ml-0.5 align-middle motion-safe:animate-pulse" />
              </span>
            </div>

            <div key={`${activeId}-result`} className="flex-1 flex flex-col justify-center">
              <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 motion-safe:animate-[fadeIn_0.4s_ease-out_1.8s_forwards]">
                {scenario.with.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700"
                  >
                    <FiTag size={10} /> {chip}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3.5 opacity-0 motion-safe:animate-[fadeIn_0.4s_ease-out_2.2s_forwards]">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{scenario.with.product}</p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                    <FiCheckCircle size={11} /> In stock
                  </p>
                </div>
                <span className="font-mono text-sm font-bold text-blue-600 shrink-0">{scenario.with.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting reasons */}
        <div
          className={`grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-100 transition-all duration-700 ${
            panelInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: panelInView ? "200ms" : "0ms" }}
        >
          {[
            { icon: <FiEdit3 size={16} />, title: "Forgives mistakes", desc: "Typos and half-finished thoughts still find the right product." },
            { icon: <FiGlobe size={16} />, title: "Speaks their language", desc: "Mixed languages and regional phrasing work the same as clean English." },
            { icon: <FiVolume2 size={16} />, title: "Understands intent", desc: "Matches what someone means, not just the words they happened to type." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default WhyAiSearch;