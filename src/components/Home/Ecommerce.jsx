"use client"
import React, { useState } from 'react';
import { FiLayout, FiEdit3, FiGlobe, FiCheck, FiMousePointer, FiLayers, FiZap } from 'react-icons/fi';
import { MdOutlineRocketLaunch } from "react-icons/md";

const ProcessVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Select Theme",
      label: "Curation",
      icon: <FiLayout />,
      description:
        "Choose a theme that matches your business style and gives your customers a clean shopping experience.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Customize Store",
      label: "Customization",
      icon: <FiEdit3 />,
      description:
        "Update your logo, banners, colors, products, and sections easily to make the store feel truly yours.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Go Live",
      label: "Deployment",
      icon: <FiGlobe />,
      description:
        "Connect your domain, publish your store, and start selling online with everything ready to go.",
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
      <div className='text-center mb-10'>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <MdOutlineRocketLaunch className="fill-current" />
              Publish Store
            </div>

            <h2 className="text-3xl lg:text-5xl  font-normal text-slate-900 tracking-tight leading-[1.2] mb-6">
            Choose a theme, customize your store &<br/> 
              <span className="text-blue-600"> launch on your own domain.</span>
            </h2>

            <p className="text-lg text-slate-500 text-center leading-relaxed">
            Experience the fastest path to market for modern retail brands. We handle the infrastructure; you focus on the growth.
            </p>
            </div>
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Left: Navigation Controls */}
          <div className="lg:col-span-5 space-y-4">

            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-4 rounded-[24px] border transition-all duration-500 flex gap-5 ${
                  activeStep === i 
                  ? "bg-white border-blue-600 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] scale-105 z-10" 
                  : "bg-transparent border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-slate-900 bg-gray-100`}>
                  {step.icon}
                </div>

                <div className='w-[80%]'>
                  <h4 className="font-medium text-slate-900 tracking-tight mb-1">{step.title}</h4>
                  <p className='text-sm font-normal text-slate-500'>{step.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: The Interactive Stage */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-gray-800 rounded-[24px] p-4">
              
              {/* Browser Header */}
              <div className="flex items-center justify-between px-6 pb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-orange-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
                <div className="bg-white/5 px-4 py-1 rounded-full text-[10px] text-slate-400 font-mono italic">
                  {activeStep === 2 ? "www.yourstore.com" : "preview-mode.emventory.com"}
                </div>
                <div className="w-10" />
              </div>

              {/* Dynamic Viewport */}
              <div className="relative bg-white rounded-[16px] h-[380px] mt-2 overflow-hidden transition-all duration-700">
                
                {/* STAGE 0: THEME SELECTOR */}
                <div className={`absolute inset-0 p-8 transition-all duration-700 flex flex-col ${activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-6 w-32 bg-slate-100 rounded-full animate-pulse" />
                    <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg bg-slate-100" />
                        <div className="h-8 w-8 rounded-lg bg-slate-900" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(item => (
                      <div key={item} className={`h-48 rounded-2xl border-2 transition-all duration-500 ${item === 1 ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 bg-slate-50'}`}>
                        <div className="h-2/3 bg-slate-200/50 rounded-t-xl" />
                        <div className="p-3 space-y-2">
                           <div className="h-2 w-full bg-slate-200 rounded" />
                           <div className="h-2 w-1/2 bg-slate-100 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-5 right-10 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium animate-bounce">
                    <FiMousePointer /> Select Modern Theme
                  </div>
                </div>

                {/* STAGE 1: CUSTOMIZER */}
                <div className={`absolute inset-0 transition-all duration-700 ${activeStep === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"}`}>
                   <div className="flex h-full">
                      <div className="w-20 border-r border-slate-100 p-4 space-y-6 flex flex-col items-center">
                         <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-lg"><FiLayers /></div>
                         <div className="w-8 h-8 rounded-lg bg-slate-100" />
                         <div className="w-8 h-8 rounded-lg bg-slate-100" />
                         <div className="w-8 h-8 rounded-lg bg-slate-100" />
                      </div>
                      <div className="flex-1 p-8 bg-indigo-50/20">
                         <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border-2 border-blue-500 relative">
                            <div className="absolute -top-3 -left-10 bg-blue-500 text-white text-[10px] px-2 py-1 rounded font-medium tracking-widest">Header Editor</div>
                            
                            <div className="grid grid-cols-2 gap-4">
                               <div className="h-20 bg-slate-100 rounded-xl border-2 border-dashed border-indigo-200 flex items-center justify-center text-[10px] text-indigo-400 font-bold italic">Logo Here</div>
                               <div className="space-y-2">
                                  <div className="h-3 w-full bg-slate-100 rounded" />
                                  <div className="h-3 w-3/4 bg-slate-50 rounded" />
                               </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              <div className='space-y-1'>
                                <p className='text-gray-500 text-[10px] italic'>Nav Background Color</p>
                                <div className="h-6 w-6 bg-indigo-400 rounded-full mb-4" />
                              </div>
                            </div>
                            
                            
                         </div>
                      </div>
                   </div>
                </div>

                {/* STAGE 2: LAUNCHED */}
                <div className={`absolute inset-0 bg-white transition-all duration-700 flex flex-col items-center justify-center text-center p-12 ${activeStep === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}`}>
                   <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 animate-pulse">
                      <FiCheck size={48} strokeWidth={3} />
                   </div>
                   <h3 className="text-3xl font-semibold text-slate-900 mb-2">Shop is Live!</h3>
                   <p className="text-slate-400 font-medium mb-8 uppercase text-[10px] tracking-[0.2em]">Deployment Successful at 17:46 PM</p>
                   <div className="flex gap-3">
                      <div className="px-6 py-3 bg-blue-700 text-white rounded-lg text-xs font-bold tracking-widest">Visit Store</div>
                      <div className="px-6 py-3 bg-slate-100 text-slate-400 rounded-lg text-xs font-bold tracking-widest">Analytics</div>
                   </div>
                   
                   {/* Floating Success Notification */}
                   <div className="absolute top-10 right-10 flex items-center gap-3 bg-white shadow-2xl border border-emerald-100 p-4 rounded-2xl animate-float">
                      <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white"><FiZap size={14}/></div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-slate-900 uppercase">System Sync</p>
                        <p className="text-[10px] text-emerald-600 font-bold">Domain Active</p>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessVisualizer;