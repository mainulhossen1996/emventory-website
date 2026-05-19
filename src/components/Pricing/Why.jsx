import React from 'react';
import { FiZap, FiShield, FiBarChart, FiGlobe, FiSmartphone, FiCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Local Speed, Global Standards",
      desc: "Engineered for Bangladesh's internet conditions. Works flawlessly even on slow connections.",
      icon: <FiZap className="text-blue-600" />,
    },
    {
      title: "Bulletproof Security",
      desc: "Your data is encrypted and backed up daily. Never worry about losing your sales history.",
      icon: <FiShield className="text-blue-600" />,
    },
    {
      title: "Real-time Multi-branch",
      desc: "Monitor your shops in Dhaka, Chittagong, and Sylhet from one single dashboard.",
      icon: <FiGlobe className="text-blue-600" />,
    },
    {
      title: "Decision-ready Analytics",
      desc: "Don't just track sales—understand them. Automated reports show you exactly what to restock.",
      icon: <FiBarChart className="text-blue-600" />,
    }
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Visual "Trust" Card */}
          <div className="relative px-10">
            {/* The Main "App Preview" Shape */}
            <div className="relative z-10 bg-white rounded-3xl border border-slate-200 p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <FiSmartphone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">Mobile First Management</h4>
                  <p className="text-sm text-slate-500 font-normal">Manage your shop from anywhere</p>
                </div>
              </div>

              {/* Progress Bars / Mock Data */}
              <div className="space-y-6">
                {[
                  { label: "Inventory Sync", val: "100%", w: "w-full", color: "bg-blue-600" },
                  { label: "Daily Uptime", val: "99.9%", w: "w-[99%]", color: "bg-emerald-500" },
                  { label: "Data Integrity", val: "Secure", w: "w-full", color: "bg-indigo-500" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>{stat.label}</span>
                      <span className="text-slate-900">{stat.val}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${stat.color} ${stat.w} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Badge */}
              <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 text-sm">
                "Emventory saved us 15+ hours a week on manual stock counting."
              </div>
            </div>

            {/* Background Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-100/50 rounded-full blur-3xl -z-0" />
          </div>

          {/* Right Side: Text Content */}
          <div>
           
            <h3 className="text-5xl font-normal text-slate-900 tracking-tighter leading-tight mb-8">
              Everything you need <br />
             to scale with confidence.
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(benefit.icon, { className: 'transition-colors group-hover:text-white' })}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
               <div className="flex items-center gap-4 text-slate-900 font-bold">
                  <div className="flex items-center justify-center h-6 w-6 bg-blue-100 text-blue-600 rounded-full">
                    <FiCheck size={14} strokeWidth={4} />
                  </div>
                  <span>Free Setup & Training for every shop in Bangladesh</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;