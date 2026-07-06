"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiBarChart2, FiAward, FiShield } from "react-icons/fi";

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

const TRUST_ITEMS = [
  {
    label: "99% match accuracy",
    detail: "Holds steady across millions of real, messy customer queries.",
    icon: <FiAward size={16} />,
  },
  {
    label: "SOC 2 compliant",
    detail: "Data encrypted in transit and at rest, by default.",
    icon: <FiShield size={16} />,
  },
];

export const BenefitsMetrics = () => {
  const [volume, setVolume] = useState(250000);
  const [leftRef, leftInView] = useInView();
  const [calcRef, calcInView] = useInView({ threshold: 0.1 });

  // Recovered items: ~2.4% of monthly search volume converts to a saved
  // sale that would've otherwise bounced on a zero-result search.
  const recoveredItems = Math.round(volume * 0.024);
  const sliderPercent = ((volume - 50000) / (5000000 - 50000)) * 100;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0A12] via-[#0F1229] to-[#0B0A12] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4C7EFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Copy column */}
          <div
            ref={leftRef}
            className={`lg:col-span-5 transition-all duration-700 ${
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[#7DA6FF] text-xs font-bold uppercase tracking-widest block mb-3">
              Numbers that matter at scale
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Built to hold up at enterprise volume.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Word-matching search breaks down as your catalog and traffic grow. Ours is built on meaning, not exact text — so accuracy holds steady whether you're getting 10 searches a day or 10 million.
            </p>

            <div className="space-y-3">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="h-9 w-9 rounded-lg bg-[#4C7EFF]/15 text-[#7DA6FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{item.label}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive calculator */}
          <div
            ref={calcRef}
            className={`lg:col-span-7 bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 hover:border-[#4C7EFF]/30 transition-all duration-700 shadow-2xl shadow-black/40 ${
              calcInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center">
                  <FiBarChart2 size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">See it at your scale</h3>
                  <p className="text-xs text-slate-500">Drag to match your monthly traffic</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase bg-[#2DD4BF]/10 text-[#2DD4BF] px-2.5 py-1 rounded-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2DD4BF]" />
                </span>
                Live
              </span>
            </div>

            <div className="mb-9">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400">Monthly search volume</span>
                <span className="text-2xl font-bold text-white font-mono tabular-nums">
                  {volume.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4C7EFF] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#4C7EFF]/40 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#4C7EFF] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4C7EFF 0%, #4C7EFF ${sliderPercent}%, rgba(255,255,255,0.1) ${sliderPercent}%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
              <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-600">
                <span>50K</span>
                <span>5M</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] p-5 rounded-xl border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1.5">Match accuracy</p>
                <p className="text-3xl font-bold text-[#2DD4BF] font-mono tabular-nums">99.2%</p>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  Stays flat as volume scales — no drop-off at high traffic.
                </p>
              </div>
              <div className="bg-white/[0.03] p-5 rounded-xl border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1.5">Sales recovered / month</p>
                <p className="text-3xl font-bold text-[#7DA6FF] font-mono tabular-nums">
                  +{recoveredItems.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  Estimated carts saved from zero-result searches, at this volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};