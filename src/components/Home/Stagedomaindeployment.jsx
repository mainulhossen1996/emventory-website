import React from "react";
import { FiCheckCircle, FiGlobe, FiExternalLink, FiSettings } from "react-icons/fi";

// Stage 2 of the ProcessVisualizer: confirmation screen once the domain is live.
export const StageDomainDeployment = ({ active }) => {
  return (
    <div
      className={`absolute inset-0 bg-white transition-all duration-300 ease-in-out flex flex-col items-center justify-center p-6 ${
        active
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="w-full border border-blue-100 rounded-2xl p-6 flex flex-col items-center max-w-sm bg-gradient-to-b from-blue-50/30 to-white">
        {/* Success Icon */}
        <div className="mb-3 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
          <FiCheckCircle size={20} className="stroke-[2.5]" />
        </div>

        {/* Simplified Heading & Text */}
        <h3 className="text-sm font-bold text-slate-900 text-center tracking-tight">
          Your Store is Live!
        </h3>
        <p className="text-[11px] text-slate-500 mt-1 text-center px-4 leading-relaxed">
          Your online storefront configuration is complete and ready for customers.
        </p>

        {/* Streamlined Domain Card */}
        <div className="mt-5 w-full border border-blue-100 bg-blue-50/40 rounded-xl p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <FiGlobe className="text-blue-500 shrink-0" size={14} />
            <span className="text-xs font-semibold text-slate-700 truncate">
              myshop.com
            </span>
          </div>
          <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
            Active
          </span>
        </div>

        {/* Primary & Secondary Actions */}
        <div className="flex gap-2 mt-5 w-full border-t border-slate-100 pt-4">
          <button className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm shadow-blue-600/10">
            <FiExternalLink size={13} /> Visit Store
          </button>
          <button className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer">
            <FiSettings size={13} /> Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageDomainDeployment;