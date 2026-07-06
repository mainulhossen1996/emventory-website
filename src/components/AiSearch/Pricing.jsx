"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiCheck, FiCpu, FiInfo, FiZap, FiShoppingBag, FiGlobe } from "react-icons/fi";

const pricingTiers = [
  {
    name: "Starter",
    price: "0",
    unit: "Free forever",
    desc: "For testing things out before you go live.",
    features: [
      "10 searches / day",
      "Standard semantic search",
      "Auto-correct for typos",
      "Community support",
    ],
    cta: "Start for free",
    highlight: false,
    icon: <FiShoppingBag size={16} />,
    accent: "slate",
  },
  {
    name: "Growth",
    price: "500",
    unit: "BDT / month",
    desc: "For a store that's starting to see real traffic.",
    features: [
      "1,000 searches / month",
      "Everything in Starter, plus:",
      "Multi-language search",
      "Voice search",
      "Email support",
    ],
    cta: "Start Growth plan",
    highlight: false,
    icon: <FiGlobe size={16} />,
    accent: "blue",
  },
  {
    name: "Professional",
    price: "1,000",
    unit: "BDT / month",
    desc: "For catalogs where search abandonment is costing you sales.",
    features: [
      "2,000 searches / month",
      "Everything in Growth, plus:",
      "Priority query routing",
      "Live accuracy dashboard",
      "Dedicated support",
    ],
    cta: "Start Professional",
    highlight: true,
    icon: <FiZap size={16} />,
    accent: "blue",
  },
  {
    name: "Enterprise",
    price: "2,000",
    unit: "BDT / month",
    desc: "For high-volume stores that need a predictable ceiling on cost.",
    features: [
      "Unlimited searches",
      "Everything in Professional, plus:",
      "Custom-tuned model",
      "Sub-15ms response SLA",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
    highlight: false,
    icon: <FiCpu size={16} />,
    accent: "slate",
  },
];

function useInView(options = { threshold: 0.15 }) {
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

function PriceTag({ price, unit }) {
  return (
    <div className="mb-5 pb-5 border-b border-slate-100">
      <div className="flex items-baseline gap-1.5">
        {price !== "0" && <span className="text-2xl font-semibold text-slate-400 self-start mt-1">৳</span>}
        <span className="text-4xl font-bold tracking-tight text-slate-900 font-mono">{price}</span>
      </div>
      <span className="text-xs font-medium text-slate-400 mt-1 block">{unit}</span>
    </div>
  );
}

function PricingCard({ tier, index, inView }) {
  const isBlue = tier.accent === "blue";
  return (
    <div
      className={`group relative rounded-2xl bg-white flex flex-col justify-between transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${
        tier.highlight
          ? "border-2 border-blue-500 shadow-blue-500/10 md:scale-105 z-10 p-6 md:p-8"
          : "border border-slate-200  hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 p-6 md:p-8"
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md shadow-blue-500/30">
          Most Popular
        </span>
      )}

      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-base font-bold text-slate-900">{tier.name}</span>
          <div
            className={`h-9 w-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              isBlue ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"
            }`}
          >
            {tier.icon}
          </div>
        </div>

        <PriceTag price={tier.price} unit={tier.unit} />

        <p className="text-sm text-slate-500 leading-relaxed mb-6">{tier.desc}</p>

        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, fIdx) => {
            const isDivider = feature.startsWith("Everything in");
            return (
              <li
                key={fIdx}
                className={
                  isDivider
                    ? "text-[11px] font-semibold uppercase tracking-wide text-slate-400 pt-1"
                    : "flex items-start gap-2.5 text-sm text-slate-600"
                }
              >
                {!isDivider && (
                  <div className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck size={10} className="stroke-[3]" />
                  </div>
                )}
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer active:scale-[0.98] ${
          tier.highlight
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
}

export const PricingCards = () => {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Pay for what you search.
          </h2>
          <p className="text-lg text-slate-500">
            Start free, upgrade when you need more volume. No surprise charges — overage cost is fixed and shown up front.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
          {pricingTiers.map((tier, idx) => (
            <PricingCard key={tier.name} tier={tier} index={idx} inView={gridInView} />
          ))}
        </div>

        {/* Footnote */}
        <div
          className={`mt-14 flex items-center justify-center gap-2 text-sm text-slate-500 bg-white border border-slate-200 rounded-xl px-5 py-3.5 w-fit mx-auto shadow-sm transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: gridInView ? "450ms" : "0ms" }}
        >
          <FiInfo size={15} className="text-blue-500 shrink-0" />
          <span>
            Go over your monthly limit on Growth or Professional? Extra searches are billed at{" "}
            <span className="font-semibold text-slate-700">৳0.50 each</span> — no cutoff, no penalty rate.
          </span>
        </div>
      </div>
    </section>
  );
};