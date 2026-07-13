"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FiLayout, FiEdit3, FiGlobe, FiCheck, FiLayers, FiGrid, FiMenu,
  FiShoppingCart, FiExternalLink, FiArrowRight, FiEye, FiMove,
  FiPlus, FiSettings, FiHardDrive, FiActivity, FiSearch, FiRefreshCw
} from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const STEPS = [
  { title: "Choose a theme", icon: <FiLayout size={16} /> },
  { title: "Customize your store", icon: <FiEdit3 size={16} /> },
  { title: "Connect your domain", icon: <FiGlobe size={16} /> },
];

const STEP_DURATION_MS = 5600;
const TOTAL_DURATION_MS = STEP_DURATION_MS * STEPS.length;

const themeOptions = [
  { id: 1, name: "Dawn Standard", text: "Clean & versatile architecture", bgImg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Studio Minimal", text: "Bold typography layout", bgImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Sprout Organic", text: "Warm framework styling", bgImg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=300&q=80" },
];

const previewProducts = [
  { title: "Leather Tote", price: "৳2,400", sku: "SKU-LTH-01", imgUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" },
  { title: "Acetate Frame", price: "৳1,850", sku: "SKU-ACT-09", imgUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80" },
  { title: "Linen Overshirt", price: "৳3,200", sku: "SKU-LIN-04", imgUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80" },
];

export const ProcessVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [activeSection, setActiveSection] = useState("Hero Banner");

  const elapsedRef = useRef(0);
  const lastTickRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      if (lastTickRef.current !== null) {
        elapsedRef.current = (elapsedRef.current + (now - lastTickRef.current)) % TOTAL_DURATION_MS;
      }
      lastTickRef.current = now;

      const step = Math.floor(elapsedRef.current / STEP_DURATION_MS);
      const pct = ((elapsedRef.current % STEP_DURATION_MS) / STEP_DURATION_MS) * 100;

      setActiveStep(step);
      setProgress(pct);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTickRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (activeStep === 0 && progress < 35) setSelectedTheme(1);
    if (activeStep === 0 && progress >= 35) setSelectedTheme(3);
    if (activeStep === 1 && progress < 45) setActiveSection("Header");
    if (activeStep === 1 && progress >= 45) setActiveSection("Hero Banner");
  }, [activeStep, progress]);

  const handleStepClick = (i) => {
    elapsedRef.current = i * STEP_DURATION_MS;
    setActiveStep(i);
    setProgress(0);
  };

  const themeAccent = selectedTheme === 2 ? "bg-slate-900" : selectedTheme === 3 ? "bg-blue-600" : "bg-slate-900";

  return (
    <section className="relative py-32 bg-slate-50 antialiased selection:bg-slate-900 selection:text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center  px-6">
        
        {/* Dynamic Header */}
        <div className="max-w-3xl text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-5">
            <HiOutlineShoppingBag size={14} className="text-blue-500" />
            Launch your store
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
          Pick a theme, make it yours,<br/>and launch instantly.
          </h2>

          <p className="text-base text-slate-500 leading-relaxed">
          No developer required. Every storefront framework configuration is optimized <br/>and production-ready from the moment you select it.
          
          </p>
        </div>

        {/* Dynamic Horizontal Controls Matrix */}
        <div className="mb-8 border border-slate-200 bg-white p-2 rounded-xl">
          <div className="grid grid-cols-3 gap-10">
            {STEPS.map((step, i) => {
              const isActive = activeStep === i;
              const isPast = i < activeStep;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => handleStepClick(i)}
                  className="text-left cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-center gap-2.5 mb-2 px-3 py-2 rounded-lg transition-colors group-hover:bg-slate-50">
                    <div
                      className={`h-6 w-6 shrink-0 rounded flex items-center justify-center transition-all duration-200 border ${
                        isActive || isPast 
                          ? "bg-slate-900 border-slate-900 text-white" 
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className={`text-xs font-semibold truncate transition-colors ${isActive ? "text-slate-900 font-bold" : "text-slate-400"}`}>
                      {step.title}
                    </span>
                  </div>
                  <div className="h-0.5 mx-3 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-slate-900 rounded-full transition-all"
                      style={{
                        width: isPast ? "100%" : isActive ? `${progress}%` : "0%",
                        transition: isActive ? "none" : "width 0.2s ease",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Fidelity Simulated Browser Frame Container (Shadows removed, Border only) */}
        <div className="w-[90%] bg-white border border-blue-200 rounded-2xl min-h-[620px] relative overflow-hidden flex flex-col">
          
          {/* Top Browser Bar Block Wrapper */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-200" />
            </div>
            <div className="w-80 bg-white border border-slate-200 px-3 py-1 rounded-md text-[11px] text-slate-500 font-mono tracking-wide text-center truncate">
              {activeStep === 2 ? "https://voguebrand.com/live" : "https://admin.emventory.com/store/deployment-pipelines"}
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">System OK</span>
            </div>
          </div>

          {/* Dynamic Content Panel Viewspace */}
          <div className="flex-1 relative bg-white flex flex-col min-h-0">

            {/* ── STAGE 0: THEME FRAMEWORK SELECTION ── */}
            <div 
              className={`absolute inset-0 p-6 flex flex-col transition-all duration-300 ease-in-out ${
                activeStep === 0 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100 shrink-0">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Theme Configurations</h3>
                  <p className="text-[11px] text-slate-400">Select structural styling presets for the dynamic inventory catalog</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded">Active Build: Node 14</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5 shrink-0">
                {themeOptions.map((theme) => {
                  const isSelected = selectedTheme === theme.id;
                  const shouldBlink = theme.id === 3 && progress >= 22 && progress <= 35;

                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`text-left rounded-lg border p-3 transition-all duration-200 bg-white relative cursor-pointer group ${
                        isSelected ? "border-slate-900 bg-slate-50/20" : "border-slate-200 hover:border-slate-400"
                      } ${shouldBlink ? "ring-2 ring-slate-900/10 border-slate-800" : ""}`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 z-10 h-4 w-4 rounded-full bg-slate-900 text-white flex items-center justify-center border border-slate-950">
                          <FiCheck size={10} strokeWidth={3} />
                        </span>
                      )}
                      <div className="rounded border border-slate-200 h-24 mb-3 bg-slate-100 overflow-hidden relative">
                        <img src={theme.bgImg} alt={theme.name} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 truncate">{theme.name}</h4>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{theme.text}</p>
                    </button>
                  );
                })}
              </div>

              {/* High-Fidelity Context Simulation Panel */}
              <div className="flex-1 border border-slate-200 rounded-lg p-5 flex flex-col justify-between bg-slate-50/60">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded text-[10px] font-bold text-white flex items-center justify-center border ${themeAccent}`}>V</div>
                      <span className="text-xs font-mono font-bold text-slate-700">vogue_submodule_dev</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                      <span>Ref: main</span>
                      <span className="text-slate-300">|</span>
                      <span>Updated 2m ago</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-1">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Global Styling</span>
                      <div className="h-3 w-20 bg-slate-900 rounded" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Layout Module</span>
                      <div className="h-3 w-28 bg-slate-200 rounded" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Edge Cache</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block">TTL 3600s</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <FiHardDrive className="animate-pulse" /> Ready for container allocation
                  </div>
                  <div className={`text-xs font-bold px-4 py-2 rounded text-white transition-all ${themeAccent} ${progress >= 72 && progress <= 86 ? "opacity-80 scale-[0.98]" : ""}`}>
                    Compile & Publish
                  </div>
                </div>
              </div>
            </div>

            {/* ── STAGE 1: REALTIME INTERACTION LAYOUT CUSTOMIZER ── */}
            <div 
              className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out ${
                activeStep === 1 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50 shrink-0">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <FiEye size={14} className="text-slate-500" /> Content Mapping Engine <span className="text-slate-300">/</span> <span className="text-slate-400 font-mono font-normal">Active Layer: {activeSection}</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded">Auto-save active</span>
                  <button type="button" className="bg-slate-900 text-white px-3.5 py-1.5 rounded text-xs font-bold border border-slate-950 cursor-pointer">
                    Commit Changes
                  </button>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Left Structural Blocks Column */}
                <div className="w-[160px] border-r border-slate-200 bg-slate-50 p-3 flex flex-col gap-1 shrink-0 overflow-y-auto">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 block">DOM Section Nodes</span>
                  {[
                    { id: "Header", icon: FiLayers, info: "Global Nav" },
                    { id: "Hero Banner", icon: FiLayout, info: "Dynamic Canvas" },
                    { id: "Products", icon: FiGrid, info: "API Inventory Grid" },
                    { id: "Footer", icon: FiMenu, info: "Meta Links" },
                  ].map((panel) => {
                    const isEditing = activeSection === panel.id;
                    const isBlinkingPanel = panel.id === "Hero Banner" && progress >= 15 && progress <= 28;

                    return (
                      <button
                        key={panel.id}
                        type="button"
                        onClick={() => setActiveSection(panel.id)}
                        className={`w-full px-2 py-2 rounded text-left flex flex-col gap-0.5 transition-all border cursor-pointer ${
                          isEditing ? "bg-white text-slate-900 font-bold border-slate-200" : "text-slate-500 hover:bg-slate-100/60 border-transparent"
                        } ${isBlinkingPanel ? "border-slate-400 bg-white" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FiMove size={10} className="text-slate-300 shrink-0" />
                          <panel.icon size={12} className="shrink-0" />
                          <span className="text-xs truncate">{panel.id}</span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-mono pl-5 font-normal truncate">{panel.info}</span>
                      </button>
                    );
                  })}
                  <button type="button" className="w-full px-2.5 py-2 rounded flex items-center gap-2 text-slate-400 hover:bg-slate-200/50 mt-2 border border-dashed border-slate-200 cursor-pointer">
                    <FiPlus size={12} className="shrink-0" />
                    <span className="text-xs font-medium">Inject Custom API API</span>
                  </button>
                </div>

                {/* Central Canvas Workspace */}
                <div className="flex-1 bg-slate-100/50 p-5 overflow-y-auto">
                  <div className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                    
                    {/* Simulated Web UI Component: Header Node */}
                    <header
                      onClick={() => setActiveSection("Header")}
                      className={`px-4 py-3 flex justify-between items-center cursor-pointer transition-all ${activeSection === "Header" ? "border border-slate-900 bg-slate-50/40" : "border-b border-slate-100 hover:bg-slate-50/20"}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-slate-900 flex items-center justify-center text-white text-[9px] font-bold">V</div>
                        <span className="text-[9px] font-bold tracking-widest text-slate-900">VOGUE STUDIO</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200/60 rounded px-2 py-1 flex items-center gap-1.5 w-36 text-slate-400 text-[9px]">
                        <FiSearch size={9} />
                        <span>Search active catalog...</span>
                      </div>
                      <div className="relative text-slate-700 flex items-center gap-3">
                        <FiShoppingCart size={13} />
                        <span className="text-[10px] font-mono font-bold">৳0.00</span>
                      </div>
                    </header>

                    {/* Simulated Web UI Component: Hero Node */}
                    <section
                      onClick={() => setActiveSection("Hero Banner")}
                      className={`p-5 grid grid-cols-12 gap-4 items-center cursor-pointer transition-all ${activeSection === "Hero Banner" ? "border-2 border-slate-900 bg-slate-50/20" : "bg-white border-b border-slate-100 hover:bg-slate-50/30"}`}
                    >
                      <div className="col-span-7 space-y-2">
                        <span className="inline-block text-[8px] font-mono font-bold tracking-wider text-slate-500 uppercase bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">V.02 Framework</span>
                        <h2 className="text-sm font-black text-slate-900 leading-tight">Structured Apparel Architecture.</h2>
                        <p className="text-[10px] text-slate-400 leading-relaxed">System integration parameters route inventory streams seamlessly.</p>
                        <button type="button" className="bg-slate-900 text-white text-[9px] font-semibold px-2.5 py-1 rounded flex items-center gap-1.5">
                          Query Stream <FiArrowRight size={9} />
                        </button>
                      </div>
                      <div className="col-span-5 h-24 bg-slate-100 rounded overflow-hidden border border-slate-200">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80" alt="Operational Frame" className="w-full h-full object-cover" />
                      </div>
                    </section>

                    {/* Simulated Web UI Component: Product List Database Sync */}
                    <section
                      onClick={() => setActiveSection("Products")}
                      className={`p-5 space-y-3 cursor-pointer transition-all ${activeSection === "Products" ? "border-2 border-slate-900 bg-slate-50/20" : "bg-white hover:bg-slate-50/30"}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <h3 className="text-[11px] font-bold text-slate-900">Live API Inventory Cache</h3>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">3 items initialized</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {previewProducts.map((prod, idx) => (
                          <div key={idx} className="border border-slate-200 rounded p-1.5 bg-white space-y-1.5">
                            <div className="h-14 w-full rounded bg-slate-100 overflow-hidden border border-slate-100">
                              <img src={prod.imgUrl} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-bold text-slate-800 truncate leading-none">{prod.title}</h4>
                              <span className="text-[8px] font-mono text-slate-400 block">{prod.sku}</span>
                              <span className="text-[10px] font-bold text-slate-900 block pt-0.5">{prod.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <footer className="bg-slate-50 border-t border-slate-100 p-3 text-center">
                      <p className="text-[9px] font-mono text-slate-400">Pipeline Encryption Node: SSL AES-256 bits</p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STAGE 2: OPERATION DEPLOYMENT PIPELINE LIVE ── */}
            <div 
              className={`absolute inset-0 bg-white transition-all duration-300 ease-in-out flex flex-col items-center justify-center p-8 ${
                activeStep === 2 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-full border border-slate-200 rounded-lg p-6 flex flex-col items-center max-w-md bg-white">
                
                {/* Deployment Health Status Indicator */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 border border-slate-900 bg-slate-50 rounded flex items-center justify-center z-10">
                    <FiActivity size={18} className="text-slate-900 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 text-center tracking-tight">Production Cluster Assigned</h3>
                <p className="text-xs text-slate-400 mt-1 text-center px-4">Dynamic routes compiled down directly to stable deployment targets.</p>

                {/* Highly Realistic Technical Operational Metadata Grid */}
                <div className="grid grid-cols-2 gap-2 w-full mt-5">
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">DNS Target</span>
                    <span className="text-xs font-mono font-bold text-slate-700 truncate">ANAME Verified</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">SSL Status</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Auto-Renew
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">Free Search Quota</span>
                    <span className="text-xs font-mono font-bold text-slate-700">50 Operations/Day</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">Active Edge Node</span>
                    <span className="text-xs font-mono font-bold text-slate-700">HKG-01 Cluster</span>
                  </div>
                </div>

                {/* Real Operational Mapping Input Mock */}
                <div className={`mt-3 w-full border rounded p-3 flex items-center justify-between gap-3 transition-all ${progress >= 45 && progress <= 62 ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-center gap-2 min-w-0">
                    {progress >= 45 && progress <= 62 ? (
                      <FiRefreshCw className="text-slate-500 animate-spin shrink-0" size={13} />
                    ) : (
                      <FiGlobe className="text-slate-400 shrink-0" size={13} />
                    )}
                    <span className="text-xs font-mono font-bold text-slate-700 truncate">voguebrand.com</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase shrink-0">
                    Live & Routers Connected
                  </span>
                </div>

                {/* Control Action Links */}
                <div className="flex gap-2 mt-5 w-full border-t border-slate-100 pt-4">
                  <button type="button" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 border border-slate-950 hover:bg-black text-white px-3 py-2 rounded text-xs font-semibold transition-all cursor-pointer">
                    <FiExternalLink size={13} /> Inspect Route
                  </button>
                  <button type="button" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-2 rounded text-xs font-semibold transition-all cursor-pointer">
                    <FiSettings size={13} /> Cluster Settings
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessVisualizer;