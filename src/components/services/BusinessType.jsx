import React from 'react';
import { 
  FiShoppingCart, FiLayers, FiSmartphone, FiBox, 
  FiHome, FiWatch, FiTruck, FiShoppingBag, 
  FiCommand, FiArrowRight, FiCheckCircle, FiShield
} from 'react-icons/fi';
import { RiHandbagLine, RiSofaLine } from "react-icons/ri";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { LuFootprints, LuShirt } from "react-icons/lu";
import { GiPearlNecklace } from "react-icons/gi";
import { TbPaperBag } from "react-icons/tb";




const BusinessIndustries = () => {
  const industries = [
    { name: "Supershop", icon: <FiShoppingCart />, bold: true },
    { name: "Clothing", icon: <LuShirt /> },
    { name: "Gadgets", icon: <FiSmartphone /> },
    { name: "Groceries", icon: <TbPaperBag /> },
    { name: "Furniture", icon: <RiSofaLine /> },
    { name: "Footwear", icon: <LuFootprints /> },
    { name: "Sports", icon: <MdOutlineSportsVolleyball /> },
    { name: "Jewelry", icon: <GiPearlNecklace /> },
    { name: "Leather", icon: <RiHandbagLine /> },
    { name: "Motor Parts", icon: <FiTruck /> },
    { name: "Home Decor", icon: <FiHome /> },
    { name: "Fashion", icon: <FiWatch /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Simple & Clean Header */}
        <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <FiBox />
              Retail Categories
            </div>
          <h3 className="text-4xl md:text-5xl font-norlam leading-14 text-slate-900 tracking-tight max-w-2xl">
            Designed for retail, <span className="text-slate-400">perfected for your niche.</span>
          </h3>
        </div>

        {/* Minimalist Flex/Grid */}
        <div className="flex flex-wrap gap-4">
          {industries.map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300 cursor-default
                ${item.bold 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-100 scale-105' 
                  : 'bg-[#f8f9fa] text-slate-600 hover:bg-white hover:shadow-md hover:text-blue-600'
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold tracking-tight">{item.name}</span>
              {item.bold && <FiCheckCircle className="text-blue-200" />}
            </div>
          ))}
          
          {/* Subtle Empty State to fill the line */}
          <div className="flex items-center gap-2 px-6 py-4 rounded-full border border-dashed border-slate-200 text-slate-300 italic text-sm">
            + Many more retail niches
          </div>
        </div>

       {/* Minimal Footer Call to Action */}
       <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-2 pl-8 bg-slate-50 rounded-[40px] border border-slate-100">
          <p className="text-sm font-medium text-slate-500 py-4 md:py-0">
            Trusted by <span className="text-slate-900 font-bold">250+ shops</span> across Bangladesh.
          </p>
          <button className="w-full md:w-auto px-6 py-4 bg-blue-600 text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-3 ">
            Try Now
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessIndustries;