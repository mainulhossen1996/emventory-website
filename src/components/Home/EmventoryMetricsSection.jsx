import React from 'react';

const EmventoryMetricsSection = () => {
  const metrics = [
    {
      label: "WORKING EFFICIENCY",
      value: "45%",
      description: "Automated inventory tracking and real-time updates eliminate manual entries, significantly streamlining daily store operations."
    },
    {
      label: "SALES INCREASE",
      value: "$2.4M",
      description: "Preventing stockouts and optimizing reorder points directly boosts annual sales velocity and maximizes revenue potential."
    },
    {
      label: "EMPLOYEE PRODUCTIVITY",
      value: "+60%",
      description: "By cutting down on repetitive stock-counting tasks, team members can focus on customer service and higher-value tasks."
    },
    {
      label: "PAYBACK PERIOD",
      value: "<3 mo",
      description: "With rapid onboarding and immediate reduction in shrinkage, Emventory delivers a fast return on your investment."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 max-w-screen-xl mx-auto font-sans">
      {/* Top Heading Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  pb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            It's like adding an expert operations team
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            According to operational benchmarks, Emventory saves the average business hundreds of hours per year, offering an automated approach to retail management and an industry-leading ROI.
          </p>
        </div>
      </div>

      {/* Grid Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-300 border-t border-gray-200">
        {metrics.map((metric, index) => (
          <div 
          key={index} 
          className={`flex flex-col bg-white p-8 rounded-t-lg border-t border-gray-200 lg:border-t-0 lg:border-l lg:pl-6 first:border-l-0 first:pl-0
            ${index === 0 ? "rounded-tl-none" : ""}
            ${index === metrics.length - 1 ? "rounded-tr-none" : ""}`}
        >
            <span className="text-xs font-normal text-blue-600 tracking-widest uppercase mb-3">
              {metric.label}
            </span>
            <span className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {metric.value}
            </span>
            <p className="text-sm text-gray-500 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer disclaimer */}
      <div className="mt-12 text-xs text-gray-400">
        *based on internal testing and industry case studies for automated inventory solutions.
      </div>
    </section>
  );
};

export default EmventoryMetricsSection;