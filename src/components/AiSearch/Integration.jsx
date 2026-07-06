"use client";
import React from "react";
import { FiCode, FiRefreshCw, FiZap, FiArrowRight } from "react-icons/fi";

const deploymentSteps = [
  {
    icon: <FiCode />,
    stepNum: "01",
    title: "Inject SDK Header",
    desc: "Embed our highly lightweight localized initialization line directly inside your core platform root wrapper setup layout."
  },
  {
    icon: <FiRefreshCw />,
    stepNum: "02",
    title: "Sync Catalog Feeds",
    desc: "Connect product inventory tables via instant webhooks or graph streaming protocols to establish vector matrix references."
  },
  {
    icon: <FiZap />,
    stepNum: "03",
    title: "Go Live Instantly",
    desc: "Toggle search routing parameters over to our cognitive search clusters to protect ongoing transaction checkouts."
  }
];

export const IntegrationSteps = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">Zero Friction Deployment</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Integrated and launched in minutes.
          </h2>
          <p className="text-lg text-slate-500">
            No complex infrastructure redesigns required. Our API architecture unifies seamlessly directly over existing application routes.
          </p>
        </div>

        {/* Step Cards Layout */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {deploymentSteps.map((step, idx) => (
            <div key={idx} className="group relative p-8 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100/60 transition-all duration-300">
              
              {/* Card Badge Top Header Line */}
              <div className="flex items-center justify-between mb-8">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 shadow-inner">
                  {step.icon}
                </div>
                <span className="text-3xl font-medium text-slate-200 group-hover:text-blue-100 transition-colors tracking-tight">
                  {step.stepNum}
                </span>
              </div>

              {/* Main Step Meta */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 transition-colors group-hover:text-blue-600">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};