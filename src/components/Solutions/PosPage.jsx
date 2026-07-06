import React from 'react';
import { 
  FiZap, FiCpu, FiGlobe, FiSmartphone, FiLayout, FiShield,
  FiBarChart2, FiUsers, FiCheckCircle, FiArrowRight, 
  FiPrinter, FiLayers, FiCreditCard, FiActivity, FiSearch, FiPlay, FiTag, FiGift, FiBox, FiTrendingUp, FiPercent
} from 'react-icons/fi';
import { MdArchitecture } from "react-icons/md";


const campaigns = [
    {
      title: "Product Specific",
      desc: "Apply fixed or percentage discounts to individual high-margin items.",
      icon: <FiTag />,
      color: "blue",
      label: "Flash Sales"
    },
    {
      title: "Category Rules",
      desc: "Clear seasonal stock by discounting entire collections (e.g., 'Winter Wear').",
      icon: <FiLayers />,
      color: "indigo",
      label: "Seasonal"
    },
    {
      title: "BOGO & Multi-Buys",
      desc: "Configure 'Buy 2 Get 1' and time-limited offers to boost order value.",
      icon: <FiGift />,
      color: "emerald",
      label: "Volume Booster"
    },
    {
      title: "Bundle Packages",
      desc: "Group slow-moving products with bestsellers into a single Package.",
      icon: <FiBox />,
      color: "purple",
      label: "Gift Sets"
    }
  ];

const POSDeepDive = () => {
  return (
    <div className="">
      <section className="relative overflow-hidden bg-[#020617] pt-32 py-24">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT: THE PITCH */}
          <div className="">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
                <FiShield/>Trusted by Retailers
            </div>

            <h1 className="text-6xl md:text-6xl font-bold text-white leading-[1.2] mb-8">
              Fastest POS.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                Smartest Store.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-10 font-normal">
              Eliminate checkout queues and sync inventory across every branch in real-time. The ultimate retail engine for Bangladesh’s high-growth brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-medium text-sm tracking-widest hover:bg-blue-500 transition-all flex items-center gap-3 group">
                Start POS <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Micro Stats */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
               <div>
                  <p className="text-2xl font-bold text-white">0.02s</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sync Speed</p>
               </div>
               <div className="h-8 w-[1px] bg-white/10"></div>
               <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Data Security</p>
               </div>
               <div className="h-8 w-[1px] bg-white/10"></div>
               <div className="flex items-center gap-2">
                  <FiCpu className="text-blue-400" size={20} />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">API-First<br/>Architecture</span>
               </div>
            </div>
          </div>

          {/* RIGHT CONTENT: THE VISUAL ENGINE */}
          <div className="relative  flex items-center justify-center pe-6">
            {/* Background Decorative Rings */}
            <div className="absolute w-[90%] aspect-square border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[70%] aspect-square border border-blue-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* The Main Terminal Card */}
            <div className="relative z-10 w-full bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-[40px] p-2 shadow-[0_0_100px_-20px_rgba(37,99,235,0.3)]">
               <div className="bg-[#020617] rounded-[32px] overflow-hidden border border-white/5">
                  {/* Mock POS Header */}
                  <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                     <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POS Terminal v3.02</div>
                  </div>
                  
                  {/* Mock POS Content */}
                  <div className="p-6 grid grid-cols-12 gap-4 h-[350px]">
                     <div className="col-span-8 space-y-4">
                        <div className="h-32 w-full bg-white/5 rounded-2xl flex items-center justify-center">
                           <div className="w-1/2 h-4 bg-white/10 rounded-full animate-pulse"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="h-24 bg-white/5 rounded-2xl border border-white/5"></div>
                           <div className="h-24 bg-white/5 rounded-2xl border border-white/5"></div>
                        </div>
                     </div>
                     <div className="col-span-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 p-4 flex flex-col justify-between">
                        <div className="space-y-2">
                           <div className="h-2 w-full bg-blue-400/30 rounded"></div>
                           <div className="h-2 w-2/3 bg-blue-400/30 rounded"></div>
                        </div>
                        <div className="h-10 w-full bg-blue-600 rounded-xl"></div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Data Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
                  <div className="h-10 w-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">৳</div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none">Last Transaction</p>
                    <p className="text-xl font-medium text-slate-900 leading-none mt-1">4,250.00</p>
                  </div>
               </div>

               {/* Floating Network Badge */}
               <div className="absolute -top-6 -right-6 bg-slate-900 border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span className="text-[10px] font-medium text-white uppercase tracking-widest">Real-time Cloud Sync</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* --- CORE CAPABILITIES (BENTO GRID) --- */}
<section className="py-24 max-w-screen-xl mx-auto">
  {/* Section Header */}
  <div className="mb-16 text-center">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <MdArchitecture />
              Growth Architecture
            </div>
    <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
      The Infrastructure for 
      <span className="text-gray-400"> Hyper-Growth Retail.</span>
    </h2>
    <p className="text-gray-500 text-lg font-normal">
      Experience the power of a fully cloud-native POS system. No local servers, <br/> no data silos—just pure, real-time retail intelligence.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
    
    {/* Card 1: Speed */}
    <div className="md:col-span-8 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col justify-between hover:shadow-lg transition-all">
      <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-2">
          <FiZap size={20} />
      </div>
      <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">0.03s Global Search</h3>
          <p className="text-slate-500 max-w-md">Our cloud-optimized indexing finds any product across your entire store network instantly, even with 100,000+ SKUs in the database.</p>
      </div>
    </div>

    {/* Card 2: 100% Cloud Architecture (Replaced Offline) */}
    <div className="md:col-span-4 bg-slate-900 rounded-[32px] p-10 flex flex-col justify-between text-white overflow-hidden relative">
      <FiGlobe size={120} className="absolute -bottom-10 -right-10 opacity-10" />
      <h3 className="text-xl font-bold relative z-10 text-blue-400">Pure Cloud<br/>Architecture</h3>
      <p className="text-slate-400 text-sm relative z-10 leading-relaxed">
        Eliminate local server costs. Your data is mirrored across secure cloud nodes, ensuring 99.99% uptime and zero-latency syncing between branches.
      </p>
    </div>

    {/* Card 3: Hardware Ecosystem */}
    <div className="md:col-span-4 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col justify-between hover:shadow-lg transition-all">
      <div className="flex -space-x-2">
          <div className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><FiPrinter size={16}/></div>
          <div className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><FiCreditCard size={16}/></div>
          <div className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><FiSearch size={16}/></div>
      </div>
      <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Universal Ecosystem</h3>
          <p className="text-slate-500 text-sm">Cloud-linked support for ESC/POS printers, Bluetooth scanners, and weight scales. Plug & play from any terminal.</p>
      </div>
    </div>

    {/* Card 4: Multi-Branch & Loyalty */}
    <div className="md:col-span-8 bg-blue-600 rounded-[32px] p-10 flex items-center justify-between text-white">
      <div className="max-w-sm">
          <h3 className="text-2xl font-bold mb-2">Centralized Store Logic</h3>
          <p className="text-blue-100">Because it's cloud-based, loyalty points earned in Branch A are instantly redeemable in Branch B. Run unified SMS campaigns and track customer journeys globally.</p>
      </div>
      <FiUsers size={80} className="opacity-20 hidden md:block" />
    </div>
  </div>
</section>

      <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <FiTrendingUp />
              Revenue Optimization
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
              A Promotion Engine built to <br />
              <span className="text-slate-400">trigger impulse buys.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-normal max-w-sm border-l-2 border-slate-100 pl-6">
            Don't just sell. Strategize. Create complex discount rules in seconds and watch your average order value climb.
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((camp, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-[32px] p-6 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-6 right-8 text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                {camp.label}
              </div>

              {/* Icon */}
              <div className={`h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <span className={`text-${camp.color}-600`}>{camp.icon}</span>
              </div>

              <h3 className="text-lg font-medium text-slate-900 mb-2">{camp.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {camp.desc}
              </p>

              {/* Visual Preview (Micro-UI) */}
              <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-slate-100 rounded-md" />
                    <div className="h-2 w-12 bg-slate-200 rounded" />
                </div>
                <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <FiPercent /> Active
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Intelligence */}
        <div className="mt-12 bg-slate-900 rounded-[40px] p-10 md:p-16 relative overflow-hidden group">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 items-center gap-12 relative z-10">
            <div>
              <h4 className="text-3xl font-normal text-white mb-6">Automated Campaign Scheduling</h4>
              <ul className="space-y-4">
                {[
                    "Set Start/End dates for Eid or Black Friday campaigns.",
                    "Auto-revert prices to original once the timer hits zero.",
                    "Limit usage per customer to protect your margins."
                ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {text}
                    </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right mb-8">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Campaign Impact</p>
                    <p className="text-5xl font-bold text-white">+32.4%</p>
                    <p className="text-blue-400 text-xs font-bold mt-1 uppercase tracking-widest">Growth in Sales Volume</p>
                </div>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
                    Explore Promotion Engine <FiArrowRight />
                </button>
            </div>
          </div>
        </div>

      </div>
    </section>
    

      {/* --- THE EMVENTORY ADVANTAGE (COMPARISON) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-5xl font-normal text-slate-900 mb-10 leading-[1.2]">
                Engineered for the<br/>
                <span className="text-blue-600">Local Ecosystem.</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "Native Bangla Invoicing", desc: "Print professionally formatted receipts in Bengali to avoid any customer confusion." },
                  { title: "Multi-Unit Support", desc: "Sell by piece, kg, box, or dozen. Perfect for grocery, fashion, and hardware stores." },
                  { title: "Dual-Price Logic", desc: "Maintain separate prices for wholesale and retail customers on the same screen." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 transition-colors group">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <FiCheckCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100">
                <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Live Insights</h4>
                    <p className="text-2xl font-medium text-slate-900">Real-time Analytics</p>
                </div>
                <div className="space-y-6">
                    {/* Mock Progress Bars */}
                    {[
                        { label: "Cash Sales", val: "72%", color: "bg-emerald-500" },
                        { label: "Digital (MFS)", val: "28%", color: "bg-blue-500" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs font-bold uppercase mb-2">
                                <span>{stat.label}</span>
                                <span>{stat.val}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.val }}></div>
                            </div>
                        </div>
                    ))}
                    <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Total Daily Revenue</p>
                            <p className="text-3xl font-medium text-slate-900">৳ 1,42,500</p>
                        </div>
                        <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                            <FiBarChart2 className="text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default POSDeepDive;