"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiMic, FiSearch, FiEdit3, FiGlobe, FiArrowRight } from "react-icons/fi";

const featureItems = [
  {
    icon: <FiGlobe />,
    tag: "translate",
    title: "Multi-Language Localization",
    desc: "Interprets dialect adjustments and regional terminology, so a query typed in one language still finds the right product.",
    demo: {
      type: "translate",
      badge: "BN → EN",
      input: "২০০০ টাকার মধ্যে ভালো সাউন্ডপ্রুফ হেডফোন",
      output: "Good soundproof headphones under 2000 Taka",
    },
  },
  {
    icon: <FiMic />,
    tag: "listen",
    title: "Acoustic Voice Search",
    desc: "Streams vocal input directly into a query, filtering background noise and heavy accents along the way.",
    demo: { type: "voice", output: "wireless earbuds under 3000" },
  },
  {
    icon: <FiEdit3 />,
    tag: "correct",
    title: "Auto-Text Correction",
    desc: "Fixes typos, dropped letters, and misspellings on the fly — no rigid keyword table required.",
    demo: {
      type: "correct",
      input: "wireles erbudz noiz cansuling",
      output: "wireless earbuds noise cancelling",
    },
  },
  {
    icon: <FiSearch />,
    tag: "understand",
    title: "Deep Vector Context",
    desc: "Reads intent past the literal words, matching vague phrasing to the specific attributes that actually apply.",
    demo: {
      type: "context",
      input: "something for a quiet long flight",
      chips: ["Noise Cancelling", "Over-Ear", "In Stock"],
    },
  },
];

// Tailwind purges dynamically built class strings at build time — every class
// used here is written out in full rather than assembled from a variable.

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

function VoiceDemo({ output, active }) {
  const bars = [40, 70, 45, 90, 55, 75, 35, 60];
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-end gap-[3px] h-6 shrink-0">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-blue-500 motion-safe:animate-pulse"
            style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      <FiArrowRight className="text-slate-300 shrink-0" size={14} />
      <span className="font-mono text-sm text-slate-700 truncate">{output}</span>
    </div>
  );
}

function DemoStrip({ demo, inView }) {
  if (demo.type === "translate") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-nowrap">
        <span className="inline-block w-fit text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
          {demo.badge}
        </span>
        <span className="font-mono text-sm text-slate-400 italic">"{demo.input}"</span>
        <FiArrowRight className="hidden sm:block text-slate-300 shrink-0" size={14} />
        <span className="font-mono text-sm text-slate-700">{demo.output}</span>
      </div>
    );
  }

  if (demo.type === "voice") {
    return <VoiceDemo output={demo.output} active={inView} />;
  }

  if (demo.type === "correct") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <span className="font-mono text-sm text-red-400/80 underline decoration-wavy decoration-red-300 truncate">
          {demo.input}
        </span>
        <FiArrowRight className="hidden sm:block text-slate-300 shrink-0" size={14} />
        <span className="font-mono text-sm text-slate-700 truncate">{demo.output}</span>
      </div>
    );
  }

  if (demo.type === "context") {
    return (
      <div className="flex flex-col gap-2.5">
        <span className="font-mono text-sm text-slate-400 italic truncate">"{demo.input}"</span>
        <div className="flex flex-wrap gap-1.5">
          {demo.chips.map((chip, i) => (
            <span
              key={chip}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 transition-all duration-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 150}ms` : "0ms" }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function FeatureRow({ item, index }) {
  const [ref, inView] = useInView();
  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group grid md:grid-cols-12 gap-6 md:gap-10 py-10 transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${fromLeft ? "-translate-x-4" : "translate-x-4"}`
      }`}
    >
      {/* Left: identity */}
      <div className="md:col-span-5 flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          {React.cloneElement(item.icon, { size: 18 })}
        </div>
        <div>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-blue-600">
            {item.tag}
          </span>
          <h3 className="text-slate-900 font-semibold text-lg mt-1 mb-1.5">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Right: live transformation strip */}
      <div className="md:col-span-7">
        <div className="h-full rounded-xl border border-slate-200 bg-slate-50/60 px-5 py-4 flex items-center group-hover:border-blue-200 group-hover:bg-blue-50/30 transition-colors duration-300">
          <DemoStrip demo={item.demo} inView={inView} />
        </div>
      </div>
    </div>
  );
}

export const FeaturesGrid = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-6 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-5">
            How it understands you
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Built for real customer language
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every part of the pipeline is designed around how people actually search — typos, accents, translations, and all. Here's each one, live.
          </p>
        </div>

        {/* Feature rows */}
        <div className="divide-y divide-slate-100">
          {featureItems.map((item, idx) => (
            <FeatureRow key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};