"use client"
import React from 'react';
import { useState} from "react";
import { 
  FiShield, FiLayers, FiRefreshCw, FiUsers, FiGlobe, 
  FiTrendingUp, FiActivity, FiServer, FiArrowRight, FiInfinity, FiBarChart2, FiFilter, FiDownload, FiCheckCircle, FiChevronRight
} from 'react-icons/fi';
import { PiShieldCheckBold } from "react-icons/pi";
import { MdHub } from "react-icons/md";


const EnterprisePage = () => {

    const MODULES = [
        {
          id: "01",
          title: "Point of Sale",
          desc: "Lightning-fast checkout with barcode scanning, multi-register support.",
          tags: ["Offline Mode", "Multi-Register", "Barcode", "Bangla Receipts"],
          accent: "#3b82f6",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          ),
        },
        {
          id: "02",
          title: "Inventory & Stock",
          desc: "Vendor-wise, item-wise, and category-wise stock tracking across all branches.",
          tags: ["Multi-Branch Sync", "GRN", "Stock Transfer", "Weight Tracking"],
          accent: "#10b981",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          ),
        },
        {
          id: "03",
          title: "eCommerce",
          desc: "Full online storefront with order management, payments, and delivery tracking.",
          tags: ["Online Store", "Order Mgmt", "Payment Gateway", "Delivery"],
          accent: "#f59e0b",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          ),
        },
        {
          id: "04",
          title: "Product Transfer",
          desc: "Seamlessly move stock between branches, approval workflows, and transfer reports.",
          tags: ["Branch Transfer", "Approval Flow", "Audit Trail", "Transfer Report"],
          accent: "#8b5cf6",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
          ),
        },
        {
          id: "05",
          title: "Purchase & GRN",
          desc: "Manage purchase orders, goods receiving, and vendor returns with MRP tracking.",
          tags: ["Purchase Order", "GRN", "Vendor Return", "Cost Tracking"],
          accent: "#ec4899",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          ),
        },
        {
          id: "06",
          title: "Promotions Engine",
          desc: "BOGO, bundle discounts, flash sales, category offers, and campaign scheduling.",
          tags: ["BOGO", "Flash Sales", "Bundles", "Auto-Schedule"],
          accent: "#f97316",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          id: "07",
          title: "Employee Management",
          desc: "Manage staff profiles, roles, and payroll across all branches from a single HR dashboard.",
          tags: ["Attendance", "Shift Scheduling", "Payroll", "Role & Permissions"],
          accent: "#f59e0b",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <circle cx="8" cy="12" r="2.5"/>
              <path d="M13 10h5M13 14h3"/>
            </svg>
          ),
        },
        {
          id: "08",
          title: "Customer Management",
          desc: "Build your customer base with purchase history, loyalty points and SMS campaigns.",
          tags: ["Loyalty Points", "Purchase History", "Credit Limit", "SMS Campaign"],
          accent: "#ec4899",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
              <circle cx="10" cy="7" r="4"/>
              <path d="M2 21c0-3.87 3.58-7 8-7"/>
              <path d="M15 17h6M18 14v6"/>
              <rect x="14" y="13" width="8" height="8" rx="1.5"/>
            </svg>
          ),
        },
      ];


    const [activeModule, setActiveModule] = useState(0);

    

      const reports = [
        { title: "Sales Reports", items: ["Vendor Wise", "Item Wise", "Category Wise", "GP% Analysis"], color: "blue" },
        { title: "Stock Reports", items: ["Vendor Wise", "Item Wise", "Category Wise", "Multi-Branch"], color: "emerald" },
        { title: "Wastage Reports", items: ["Vendor Wise", "Item Wise", "Category Summary", "Approval Log"], color: "indigo" },
        { title: "Discount Reports", items: ["Active Offers", "Vendor Wise", "Category Wise", "Campaign Impact"], color: "rose" },
        { title: "Purchase Reports", items: ["GRN Report", "Vendor Returns", "Order History", "Cost Summary"], color: "amber" },
        { title: "Weight Reports", items: ["Weight Loss", "Weight Gain", "Vendor Wise", "Category Wise"], color: "cyan" },
      ];

  return (
    <div className="bg-white">

      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
        {/* Abstract Data Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v60M0 30h60' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
              <PiShieldCheckBold /> Tier-1 Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.2] mb-10">
  Unify Every Branch Into One <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 ">
    Global Intelligence Network.
  </span>
</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
              The unified commerce engine for high-volume retail chains. Manage 10 or 1,000 branches from a single neural dashboard. No limits, just absolute control.
            </p>
          </div>

          {/* Enterprise "Stat-Wall" */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: "User Accounts", value: "Unlimited", icon: <FiUsers /> },
              { label: "Store Branches", value: "∞ Infinity", icon: <FiLayers /> },
              { label: "Data Sync", value: "Real-time", icon: <FiRefreshCw /> },
              { label: "Uptime SLA", value: "99.99%", icon: <FiServer /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-[24px] backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="text-blue-500 mb-4 text-xl group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <p className="text-xl font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background "Grid" - very subtle */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.svg.org/2000/svg'%3E%3Cpath d='M40 0H0v40h40V0zM1 39V1h38v38H1z' fill='%23f1f5f9' fill-opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-5xl mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
        <MdHub/>Integrated Ecosystem</div>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.2] mb-6">
            Everything included.
            <span className="text-slate-400"> No add-ons, no upsells.</span>
          </h2>
          <p className="text-slate-500 text-lg font-normal">The full suite of enterprise tools, unlocked from day one. Scale your business without worrying about per-feature costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, i) => (
            <div
              key={mod.id}
              className={`group relative p-6 bg-white border rounded-[32px] transition-all duration-500 cursor-pointer
                ${activeModule === i 
                  ? "border-blue-500 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] ring-1 ring-blue-500" 
                  : "border-slate-100 hover:border-slate-300 hover:shadow-xl"}`}
              onMouseEnter={() => setActiveModule(i)}
            >
              {/* Active Indicator Pulse */}
              <div className={`absolute top-8 right-8 h-2 w-2 rounded-full transition-all duration-500 ${activeModule === i ? 'bg-blue-500 scale-125 animate-pulse' : 'bg-slate-200'}`} />

              <div className="flex flex-col h-full">
                {/* Icon & ID Row */}
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-500 group-hover:rotate-6"
                    style={{ background: mod.accent + "08", color: mod.accent }}
                  >
                    {React.cloneElement(mod.icon, { strokeWidth: 2 })}
                  </div>
                  <span className="text-5xl font-black text-slate-50/80 tracking-tighter select-none">
                    {mod.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 font-normal">
                    {mod.desc}
                  </p>
                </div>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {mod.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 group-hover:bg-white transition-colors">
                      {t}
                    </span>
                  ))}
                </div> */}

                {/* Hover Action */}
                <div className={`mt-4 flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${activeModule === i ? 'text-blue-600 opacity-100' : 'opacity-0 translate-x-[-10px]'}`}>
                  View Documentation <FiChevronRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      

      {/* --- MULTI-BRANCH LOGISTICS SECTION --- */}
      <section className="py-32 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.2] mb-6">
              Intelligent Product
              <span className="text-blue-600"> Transportation.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Stockouts in Branch A? Excess in Branch B? Our Enterprise engine automates internal stock transfers with full digital manifests and tracking.
            </p>
            
            <div className="space-y-6">
              {[
                { t: "Inter-branch Transfers", d: "Move stock between locations with one click." },
                { t: "Centralized Purchasing", d: "Bulk buy for all branches and distribute instantly." },
                { t: "Unified Customer Profiles", d: "A customer in Dhaka is recognized in Chittagong." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-3xl  transition-all group">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{item.t}</h4>
                    <p className="text-slate-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: The "Node" Visualization */}
          <div className="relative p-12 bg-slate-50 rounded-[60px] border border-slate-100">
            <div className="grid grid-cols-2 gap-6">
               <div className="aspect-square bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-between border border-blue-100">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg text-white flex items-center justify-center font-bold">A</div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Hub</p>
               </div>
               <div className="aspect-square bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-between border border-slate-100 ">
                  <div className="h-8 w-8 bg-slate-900 rounded-lg text-white flex items-center justify-center font-bold">B</div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Branch East</p>
               </div>
            </div>
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20">
              <div className="h-[2px] w-full bg-dashed bg-gradient-to-r from-blue-600 to-slate-900 relative">
                <div className="absolute top-[-4px] left-0 h-2 w-2 rounded-full bg-blue-600 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          
          {/* Left Column — Strategic Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
                <FiBarChart2 className="animate-pulse" /> Precision Intelligence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.0]  mb-8">
                9 Modules.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500">
                  Infinite Clarity.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-normal">
                From vendor-level GRN tracking to category-wise GP% analysis—our neural engine processes every transaction into actionable retail wisdom.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["Date Range", "Vendor Node", "Category", "Branch ID", "Export PDF", "CSV Sync"].map((t) => (
                <div key={t} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-slate-300 hover:bg-white/10 transition-colors">
                  <FiCheckCircle className="text-blue-500" /> {t}
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-3xl">
                <div className="flex items-center gap-4 text-white mb-2">
                    <FiFilter className="text-blue-400" />
                    <span className="font-black text-sm uppercase tracking-widest">Global Filter Engine</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Slice your entire enterprise data by any dimension instantly. No more waiting for reports to load.</p>
            </div>
          </div>

          {/* Right Column — Bento Report Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
            {reports.map((report, i) => (
              <div 
                key={i} 
                className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-[24px] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-2xl"
              >
                {/* Visual Accent */}
                <div className={`absolute top-6 right-6 h-2 w-2 rounded-full bg-${report.color}-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform`} />
                
                <h4 className="text-sm font-medium text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
                  {report.title}
                </h4>
                
                <ul className="space-y-2">
                  {report.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-normal text-slate-500 group-hover:text-slate-300 transition-colors">
                      <span className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Micro-Interaction Button */}
                <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                        Generate Insights <FiDownload />
                    </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

        <div className="max-w-7xl mx-auto pt-32">
          <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-white/5 rounded-[48px] p-12 md:p-20 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-normal text-white mb-6">Everything included. <br/>Zero compromises.</h2>
                <p className="text-slate-400 mb-10 leading-relaxed">The Enterprise license unlocks every single module Emventory offers. No "add-on" fees, no "pro" upgrades. You get the full power of our R&D from day one.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Custom Domain Ecom', 'Cloud POS Hub', 'AI Search Engine', 'Multi-layer Loyalty', 'HR & Payroll', 'Audit Logs'].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      <span className="text-sm font-normal tracking-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-auto">
                <div className="bg-white rounded-[40px] p-10 text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Enterprise Access</p>
                  <p className="text-5xl font-bold text-slate-900 mb-2">Custom</p>
                  <p className="text-slate-500 text-sm mb-8">Tailored for your business volume</p>
                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20">
                    Contact Sales <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENTERPRISE TRUST BAR --- */}
      {/* <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <FiGlobe className="text-slate-300" size={32} />
            <p className="text-slate-500 font-medium max-w-[200px]">Powers 500+ retail branches across Bangladesh.</p>
          </div>
          <div className="flex gap-12 grayscale opacity-30 font-black text-2xl text-slate-900 tracking-tighter italic">
            <span>RETAILCO</span>
            <span>MEGASHOP</span>
            <span>NEXUS</span>
            <span>GLOBEX</span>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EnterprisePage;