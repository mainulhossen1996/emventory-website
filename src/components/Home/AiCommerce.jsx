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
    <section className="relative overflow-hidden py-24">
      
      <div className="relative max-w-7xl mx-auto rounded-b-[50px] bg-gradient-to-b from-white to-blue-50 p-10">
      
       <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <SiGooglegemini className="fill-current" />
              AI Commerce
            </div>

            <h2 className="text-3xl lg:text-5xl font-medium text-slate-900 leading-[1.2] mb-6">
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
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-200 cursor-pointer text-sm">
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