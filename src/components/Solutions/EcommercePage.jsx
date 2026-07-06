import React from 'react';
import { FiLayout, FiEdit3, FiGlobe, FiSearch, FiArrowRight, FiZap, FiCheck,
    FiMousePointer, FiType, FiMaximize, FiSmartphone, FiMonitor, FiPalette, FiCpu, FiCheckCircle } from 'react-icons/fi';
    import { LuPalette } from "react-icons/lu";

const EcommerceLanding = () => {
  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020617] overflow-hidden py-32">
      
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LEFT SIDE: THE HOOK */}
        <div className="text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>
              v2.0 Theme Customize
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.2] mb-8">
          Launch eCommerce.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-indigo-400">
            Without writing code.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mb-10 font-normal ">
            Launch a stunning storefront that reflects your brand identity. Choose a base, tweak the soul, and publish to your own domain instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-medium text-sm tracking-widest hover:bg-blue-500 transition-all flex items-center gap-3 group">
              Start eCommerce <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Ecommerce Stats */}
<div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/5 pt-8">
  
  <div>
    <p className="text-2xl font-bold text-white">24/7</p>
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      Online Orders
    </p>
  </div>

  <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

  <div>
    <p className="text-2xl font-bold text-white">50+</p>
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      Premium Themes
    </p>
  </div>

  <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

  <div>
    <p className="text-2xl font-bold text-white">1 Click</p>
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      Store Publish
    </p>
  </div>

  <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

  <div className="flex items-center gap-3">
    <FiGlobe className="text-blue-400" size={20} />
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
      Custom Domain<br />
      Ready
    </span>
  </div>

</div>
        </div>

        {/* RIGHT SIDE: THE "CONCEPT CUSTOMIZER" UI */}
        <div className="relative group">
          {/* Main Workspace */}
          <div className="relative z-10 bg-[#0f172a] rounded-[32px] border border-white/10 p-4 shadow-2xl shadow-blue-500/10">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 pb-4">
               <div className="flex gap-4 items-center">
                  <div className="flex gap-1.5"><div className="h-2 w-2 rounded-full bg-red-500/40"></div><div className="h-2 w-2 rounded-full bg-yellow-500/40"></div><div className="h-2 w-2 rounded-full bg-green-500/40"></div></div>
                  <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                  <div className="flex gap-3 text-slate-500">
                     <FiMonitor size={16} className="text-blue-400" />
                     <FiSmartphone size={16} />
                  </div>
               </div>
               <div className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-mono text-slate-400 border border-white/5 italic">
                  your-store.emventory.com
               </div>
               <button className="bg-emerald-500/10 text-emerald-400 text-[10px] font-medium px-4 py-2 rounded-lg border border-emerald-500/20 uppercase tracking-widest">
                  Publish Live
               </button>
            </div>

            {/* Canvas Area */}
            <div className="relative bg-white rounded-[24px] h-[350px] overflow-hidden flex flex-col">
               {/* Nav Mock */}
               <div className="p-6 flex justify-between items-center">
                  <div className="h-6 w-24 bg-slate-200 rounded-md"></div>
                  <div className="flex gap-4"><div className="h-2 w-8 bg-slate-200 rounded"></div><div className="h-2 w-8 bg-slate-200 rounded"></div></div>
               </div>
               
               {/* Hero Content Mock */}
               <div className="flex-1 flex flex-col items-center justify-center text-center px-12">
                  <div className="relative inline-block mb-4">
                    <h2 className="text-4xl font-medium text-slate-900 leading-tight">Summer '26<br/>Collection</h2>
                    {/* Floating Selection Indicator */}
                    <div className="absolute -top-4 -right-4 bg-blue-600 p-1.5 rounded-md shadow-lg text-white animate-pulse">
                        <FiMousePointer size={12} />
                    </div>
                  </div>
                  <div className="h-10 w-32 bg-blue-700 rounded-xl mt-4"></div>
               </div>

               {/* Bottom Layer Blur */}
               <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-100 to-transparent"></div>
            </div>

            {/* Floating Floating Customizer Panel (Left) */}
            <div className="absolute -left-12 top-1/3 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl p-4 w-44 backdrop-blur-xl animate-float-slow">
               <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest mb-4">Typography</p>
               <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-blue-500/50">
                    <span className="text-[11px] text-white font-bold">Inter Tight</span>
                    <FiCheck size={12} className="text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <span className="text-[11px] text-slate-400">Playfair Display</span>
                  </div>
               </div>
            </div>

            {/* Floating Color Palette (Right) */}
            <div className="absolute -right-8 bottom-12 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-40 animate-float-delayed">
               <div className="flex items-center gap-2 mb-3">
                  <LuPalette size={14} className="text-blue-600" />
                  <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">Brand Colors</p>
               </div>
               <div className="grid grid-cols-4 gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2"></div>
                  <div className="h-6 w-6 rounded-full bg-indigo-900"></div>
                  <div className="h-6 w-6 rounded-full bg-slate-900"></div>
                  <div className="h-6 w-6 rounded-full bg-emerald-400"></div>
               </div>
            </div>

          </div>

          {/* Underlay Decorative Blur */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-blue-500/20 blur-[60px] rounded-full"></div>
        </div>

      </div>
    </section>

  {/* --- THE EXPERIENCE FLOW --- */}
<section className="py-24 bg-white relative overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-100/40 blur-[140px] rounded-full pointer-events-none"></div>


  <div className="max-w-screen-xl mx-auto relative z-10">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-10">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
      <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
        <span className="">
          Setup Process
        </span>
          
            </div>

      <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05] mb-6">
        Launch your store in <br />
        <span className="text-slate-400">3 simple steps.</span>
      </h2>

      <p className="text-lg text-slate-500 ">
        No developers. No setup hassle. Emventory gives you everything
        required to build, customize, and publish your online store instantly.
      </p>
    </div>

    {/* Flow Layout */}
    <div className="relative grid lg:grid-cols-3 gap-10">
      
      {/* Connector Line */}
      <div className="hidden lg:block absolute top-28 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-slate-200 to-emerald-100"></div>

      {/* Step 1 */}
      <div className="group relative bg-white border border-slate-200 rounded-[32px] p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-500">
        
        {/* Number */}
        <div className="absolute top-6 right-6 text-6xl font-medium text-slate-100">
          01
        </div>

        {/* Icon */}
        <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
          🎨
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Choose Theme
        </h3>

        <p className="text-slate-500 leading-relaxed mb-8">
          Browse premium storefront designs built for fashion,
          electronics, grocery, restaurants, and more.
        </p>

        {/* Mini Mock */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
          <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
          <div className="h-24 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100"></div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group relative bg-[#020617] rounded-[36px] p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-blue-500/10">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full"></div>

        {/* Number */}
        <div className="absolute top-6 right-6 text-6xl font-medium text-white/5">
          02
        </div>

        {/* Icon */}
        <div className="h-16 w-16 rounded-2xl bg-white/10 text-blue-400 flex items-center justify-center text-2xl mb-8 border border-white/10 group-hover:rotate-6 transition-transform">
          ⚡
        </div>

        <h3 className="text-xl font-bold text-white mb-4">
          Customize Styling
        </h3>

        <p className="text-slate-400 leading-relaxed mb-8">
          Edit colors, fonts, banners, layouts, and sections visually
          with real-time preview — no coding required.
        </p>

        {/* Mock Editor */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
          <div className="flex gap-2 mb-4">
            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="h-4 w-4 rounded-full bg-slate-700"></div>
            <div className="h-4 w-4 rounded-full bg-emerald-400"></div>
          </div>

          <div className="space-y-3">
            <div className="h-3 w-full bg-white/10 rounded-full"></div>
            <div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
            <div className="h-20 bg-white/10 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group relative bg-white border border-slate-200 rounded-[32px] p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-500">
        
        {/* Number */}
        <div className="absolute top-6 right-6 text-6xl font-medium text-slate-100">
          03
        </div>

        {/* Icon */}
        <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
          🚀
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Connect & Publish
        </h3>

        <p className="text-slate-500 leading-relaxed mb-8">
          Connect your custom domain and publish instantly with
          hosting, SSL, and performance optimization included.
        </p>

        {/* Live Status */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 mb-1">
              Store Status
            </p>
            <p className="font-bold text-slate-900">Live Successfully</p>
          </div>

          <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
            ✓
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="relative bg-[#020617] rounded-[60px] p-8 md:p-20 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
          
          {/* --- AMBIENT AI GLOW --- */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT SIDE: THE CAPABILITY */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium uppercase tracking-[0.3em] mb-6">
                  <FiCpu className="animate-spin-slow" /> Neural Processing Engine
                </div>
                <h2 className="text-4xl md:text-5xl font-normal text-white leading-[1.2] mb-6">
                  Search that <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    actually thinks.
                  </span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md font-normal">
                  Traditional search kills sales with "No Results Found." Our AI understands intent, corrects typos, and suggests products based on context—included free for every merchant.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Semantic Understanding", desc: "Recognizes 'something for a wedding' as formal wear." },
                  { title: "Real-time Indexing", desc: "New products are searchable within 2 seconds of upload." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                      <FiCheckCircle size={14} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: THE LIVE SIMULATION (THE "WOW" FACTOR) */}
            <div className="relative">
              {/* The Search Bar Mockup */}
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-6">
                  <FiSearch className="text-blue-400" />
                  <div className="flex-1 relative">
                    <span className="text-white font-medium text-sm">party wera under 5000</span>
                    <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-blue-500 animate-pulse"></span>
                  </div>
                  <div className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase">AI Searching...</div>
                </div>

                {/* Results Preview */}
                <div className="space-y-4">
                  <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Showing results for "Party wear, maximum price range 5000 BDT"</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-3 border border-white/5">
                        <div className="aspect-square bg-slate-800 rounded-xl mb-3 overflow-hidden relative group/img">
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                        </div>
                        <div className="h-2 w-2/3 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Interaction Hint */}
              <div className="absolute -bottom-10 right-1/2 translate-x-1/2 flex items-center gap-2 text-slate-500 italic text-xs">
                <FiMousePointer size={14} />
                <span>Zero-config AI deployment</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

      {/* --- CTA / DOMAIN SECTION --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FiGlobe className="mx-auto text-blue-600 mb-8" size={48} />
          <h2 className="text-4xl font-medium text-slate-900 mb-6">Your brand, your domain.</h2>
          <p className="text-slate-500 text-lg mb-12">
            No more `emventory.com/shopname`. Use your professional identity and build long-term SEO value with a custom domain.
          </p>
          <button className="flex items-center gap-3 mx-auto px-12 py-6 bg-blue-700 text-white rounded-3xl font-medium text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Start Your Store <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceLanding;