"use client";
import React from "react";
import {
  FiMic,
  FiSearch,
  FiArrowRight,
  FiZap,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";
import { SiGooglegemini } from "react-icons/si";
import AiSearchPreview from "./AiSearch";

const AiCommerce = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-24 lg:py-32">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-200/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <SiGooglegemini className="fill-current" />
              AI Commerce
            </div>

            <h2 className="text-3xl lg:text-5xl font-normal text-slate-900 leading-[1.2] mb-6">
              Search products
              <br />
              the way humans
              <span className="text-blue-600"> actually speak.</span>
            </h2>

            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
              Customers can search naturally using voice, style, color, budget,
              or mood — while AI instantly finds the best matching products.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
  {[
    {
      title: "Voice Search",
      icon: <FiMic size={16} />,
    },
    {
      title: "Smart Product Match",
      icon: <FiZap size={16} />,
    },
    {
      title: "Visual Discovery",
      icon: <FiSearch size={16} />,
    },
  ].map((item, i) => (
    <div
      key={i}
      className="group flex items-center gap-3 px-2 pe-4 py-2 rounded-full bg-white border border-slate-100  hover:-translate-y-0.5 transition-all"
    >
      <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
        {item.icon}
      </div>

      <span className="text-sm font-semibold text-slate-700">
        {item.title}
      </span>
    </div>
  ))}
</div>

            {/* CTA */}
            <div className="flex items-center gap-4">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-normal transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer">
                Try AI Search
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
       <AiSearchPreview/>
        </div>
      </div>
    </section>
  );
};

export default AiCommerce;