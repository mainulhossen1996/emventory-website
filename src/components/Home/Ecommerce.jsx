"use client";
import React, { useState } from "react";
import {
  FiLayout,
  FiEdit3,
  FiGlobe,
  FiCheck,
  FiMousePointer,
  FiLayers,
  FiZap,
  FiGrid,
  FiMenu,
  FiSave,
  FiShoppingCart,
  FiExternalLink,
  FiPieChart,
} from "react-icons/fi";
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
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Customize Store",
      label: "Customization",
      icon: <FiEdit3 />,
      description:
        "Update your logo, banners, colors, products, and sections easily to make the store feel truly yours.",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Go Live",
      label: "Deployment",
      icon: <FiGlobe />,
      description:
        "Connect your domain, publish your store, and start selling online with everything ready to go.",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-blue-100/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[700px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-screen-xl mx-auto relative px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
            <MdOutlineRocketLaunch className="fill-current" />
            Publish Store
          </div>

          <h2 className="text-3xl lg:text-5xl  font-medium text-slate-900 tracking-tight leading-[1.3] mb-6">
            Choose a theme, customize your store &<br />
            <span className="text-5xl font-bold">
              launch on your own domain
            </span>
          </h2>

          <p className="text-lg text-slate-500 text-center leading-relaxed">
            Experience the fastest path to market for modern retail brands. We
            handle the infrastructure; you focus on the growth.
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
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center text-slate-900 bg-gray-100`}
                >
                  {step.icon}
                </div>

                <div className="w-[80%]">
                  <h4 className="font-medium text-slate-900 tracking-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm font-normal text-slate-500">
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: The Interactive Stage */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-gray-800 rounded-[24px] p-3 pt-2">
              {/* Browser Header */}
              <div className="flex items-center justify-between px-2">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <div className="bg-white/5 px-4 py-1 rounded-full text-[10px] text-slate-400 font-mono italic">
                  {activeStep === 2
                    ? "www.yourstore.com"
                    : "preview-mode.emventory.com"}
                </div>
                <div className="w-10" />
              </div>

              {/* Dynamic Viewport */}
              <div className="relative bg-white rounded-[16px] h-[380px] mt-2 overflow-hidden transition-all duration-700">
                {/* STAGE 0: THEME SELECTOR */}
                <div
                  className={`absolute inset-0 p-4 pb-0 transition-all duration-700 flex flex-col ${
                    activeStep === 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {/* Header Title */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">
                      Choose Store Layout Theme
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Select a design theme for your customer-facing digital
                      receipts and invoices.
                    </p>
                  </div>

                  {/* Top: Real-world Theme List */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      {
                        id: 1,
                        name: "Minimal Modern",
                        primary: "bg-blue-600",
                        secondary: "bg-blue-50",
                        text: "Clean & Corporate",
                      },
                      {
                        id: 2,
                        name: "Midnight Dark",
                        primary: "bg-gray-900",
                        secondary: "bg-gray-100",
                        text: "Sleek & Premium",
                      },
                      {
                        id: 3,
                        name: "Emerald Organic",
                        primary: "bg-emerald-600",
                        secondary: "bg-emerald-50",
                        text: "Fresh & Eco-friendly",
                      },
                    ].map((theme) => {
                      // Assuming you have a selectedTheme state, using theme.id === 1 as default active for this example
                      const isSelected = theme.id === 1;
                      return (
                        <button
                          key={theme.id}
                          type="button"
                          className={`text-left rounded-xl border-2 p-3 transition-all duration-300 bg-white relative cursor-pointer ${
                            isSelected
                              ? "border-blue-500 shadow-sm ring-4 ring-blue-50"
                              : "border-gray-100 hover:border-gray-300 hover:shadow-xs"
                          }`}
                        >
                          <div className="bg-gray-100 rounded-lg h-[100px] mb-2"></div>

                          <h4 className="text-xs font-semibold text-gray-800">
                            {theme.name}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {theme.text}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom: Real Live Preview Mockup Section */}
                  <div className="">
                    <h3 className="text-[12px] font-medium text-gray-800 mb-1">
                      Live Preview Container
                    </h3>
                  </div>

                  <div className="flex-1 bg-gray-50 rounded-t-xl border border-gray-100 p-3 flex flex-col justify-between relative overflow-hidden">
                    {/* Mockup Receipt/Invoice Paper */}
                    <div className="w-full mx-auto bg-white rounded-lg shadow-xs border border-gray-200/60 p-4 space-y-3.5 animate-in fade-in zoom-in-95 duration-300">
                      {/* Header of Mockup Receipt */}
                      <div className="flex justify-between items-start border-b border-dashed border-gray-100 pb-3">
                        <div>
                          <div className="h-3.5 w-24 bg-blue-600 rounded mb-1" />{" "}
                          {/* Primary Theme Color applied */}
                          <div className="h-2 w-16 bg-gray-200 rounded" />
                        </div>
                        <div className="text-right space-y-1">
                          <div className="h-2.5 w-12 bg-gray-300 rounded ml-auto" />
                          <div className="h-2 w-16 bg-gray-100 rounded ml-auto" />
                        </div>
                      </div>

                      {/* Items List Table Mockup */}
                      <div className="space-y-2 py-1">
                        {[1, 2].map((i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center"
                          >
                            <div className="space-y-1">
                              <div className="h-2.5 w-32 bg-gray-800 rounded" />
                              <div className="h-2 w-12 bg-gray-100 rounded" />
                            </div>
                            <div className="h-2.5 w-10 bg-gray-400 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Summary Total Mockup */}
                      <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                        <div className="h-3 w-10 bg-gray-400 rounded" />
                        <div className="h-4 w-16 bg-blue-600/20 text-blue-700 rounded font-bold flex items-center justify-center text-[11px]">
                          445 BDT
                        </div>
                      </div>
                    </div>

                    {/* Action Floating Prompt */}
                    <div className="flex justify-end pt-2">
                      <div className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm shadow-blue-600/10 transition-all cursor-pointer">
                        Activate Layout Theme
                      </div>
                    </div>
                  </div>
                </div>

                {/* STAGE 1: CUSTOMIZER WITH LIVE LANDING PAGE PREVIEW */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeStep === 1
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20 pointer-events-none"
                  }`}
                >
                  <div className="flex h-full bg-white">
                    {/* LEFT: Component Section Selector Sidebar */}
                    <div className="w-24 border-r border-gray-100 p-3 flex flex-col items-center gap-4 bg-gray-50/50">
                      <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider text-center mb-1 block">
                        Section
                      </span>

                      {[
                        { icon: FiLayers, label: "Header", active: true },
                        { icon: FiLayout, label: "Hero Banner", active: false },
                        { icon: FiGrid, label: "Products", active: false },
                        { icon: FiMenu, label: "Footer", active: false },
                      ].map((panel, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            panel.active
                              ? "bg-gray-100 text-blue-600 border border-gray-200/60"
                              : "bg-white border border-gray-200/60 text-gray-400 hover:text-gray-700 hover:border-gray-300"
                          }`}
                        >
                          <panel.icon size={18} />
                          <span className="text-[9px] font-medium tracking-tight truncate w-full text-center px-1">
                            {panel.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* RIGHT: Live Landing Page Preview UI */}
                    <div className="flex-1 bg-gray-100/70 overflow-y-auto flex flex-col items-center">
                      <div className="w-full px-2 py-1.5 flex justify-between items-center bg-white border-b border-gray-200">
                        <p className="font-medium text-gray-500 text-xs">
                          Home Page
                        </p>
                        <button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-[10px] font-normal shadow-xs transition-all cursor-pointer"
                        >
                          Publish
                        </button>
                      </div>

                      {/* The Simulated Browser/Landing Page Container */}
                      <div className="p-2">
                        <div className="w-full bg-white rounded-md border border-gray-200/80 overflow-hidden flex flex-col animate-in fade-in zoom-in-98 duration-300">
                          {/* 1. E-COMMERCE NAVBAR COMPONENT */}
                          <header className="border-b border-gray-100 px-3 py-2 bg-white flex justify-between items-center sticky top-0 z-10">
                            {/* Brand Logo */}
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-sm bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                                V
                              </div>
                              <span className="text-xs font-bold text-gray-800 tracking-tight">
                                VOGUE
                              </span>
                            </div>
                            {/* Nav Links */}
                            <nav className="flex gap-4 text-[11px] font-semibold text-gray-500">
                              <span className="text-blue-600 cursor-pointer">
                                Home
                              </span>
                              <span className="hover:text-gray-800 cursor-pointer">
                                Shop
                              </span>
                              <span className="hover:text-gray-800 cursor-pointer">
                                Trending
                              </span>
                            </nav>
                            {/* Cart Icon & Action */}
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-600 font-bold">
                              <FiShoppingCart />
                            </div>
                          </header>

                          {/* 2. HERO BANNER SECTION */}
                          <section className="bg-blue-50/40 px-6 py-10 grid grid-cols-2 gap-4 items-center border-b border-gray-100">
                            <div className="space-y-2.5">
                              <span className="text-[9px] uppercase font-medium tracking-wider text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded-md">
                                New Collection
                              </span>
                              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                                Define Your Modern Aesthetic.
                              </h2>
                              <p className="text-[10px] text-gray-400 leading-relaxed">
                                Explore handpicked sustainable minimalist luxury
                                pieces tailored for everyday comfort.
                              </p>
                              <button
                                type="button"
                                className="bg-gray-900 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg shadow-xs hover:bg-black transition-colors"
                              >
                                Shop Collection
                              </button>
                            </div>
                            {/* Mock Visual Graphic on Right of Hero */}
                            <div className="h-32 bg-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-transparent" />
                              <FiLayout
                                size={28}
                                className="text-blue-300/80"
                              />
                            </div>
                          </section>

                          {/* 3. PRODUCT GRID SECTION */}
                          <section className="p-6 space-y-4">
                            <div className="flex justify-between items-end">
                              <div>
                                <h3 className="text-xs font-bold text-gray-800">
                                  Featured Products
                                </h3>
                                <p className="text-[10px] text-gray-400">
                                  Our community favorites this week
                                </p>
                              </div>
                              <span className="text-[10px] text-blue-600 font-semibold cursor-pointer hover:underline">
                                View All
                              </span>
                            </div>

                            {/* Grid Items */}
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                {
                                  title: "Minimalist Tote Bag",
                                  price: "700 BDT",
                                  imgBg: "bg-gray-100",
                                },
                                {
                                  title: "Classic Acetate Glasses",
                                  price: "850 BDT",
                                  imgBg: "bg-gray-50",
                                },
                                {
                                  title: "Premium Linen Shirt",
                                  price: "600 BDT",
                                  imgBg: "bg-slate-100",
                                },
                              ].map((prod, i) => (
                                <div
                                  key={i}
                                  className="group border border-gray-100 rounded-xl p-2 bg-white space-y-2 hover:border-gray-200 transition-all"
                                >
                                  <div
                                    className={`h-24 ${prod.imgBg} rounded-lg flex items-center justify-center text-gray-300`}
                                  >
                                    <FiGrid size={16} />
                                  </div>
                                  <div className="space-y-0.5">
                                    <h4 className="text-[10px] font-bold text-gray-700 truncate">
                                      {prod.title}
                                    </h4>
                                    <span className="text-[10px] font-extrabold text-blue-600 block">
                                      {prod.price}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* 4. FOOTER COMPONENT */}
                          <footer className="bg-gray-900 p-4 text-center border-t border-gray-800">
                            <p className="text-[9px] text-gray-500">
                              © 2026 Vogue Storefront. Powered by emventory.
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STAGE 2: ECOMMERCE PUBLISH SUCCESS SCREEN */}
                <div
                  className={`absolute inset-0 bg-slate-50/50 transition-all duration-750 flex flex-col items-center justify-center p-4 ${
                    activeStep === 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20 pointer-events-none"
                  }`}
                >
                  <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-xl shadow-slate-200/40 p-8 flex flex-col items-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                    {/* Decorative Background Glow */}
                    

                    {/* Animated Production Checkmark Ring */}
                    <div className="relative mb-5 flex items-center justify-center">
                      <div className="absolute w-16 h-16 bg-emerald-500/10 rounded-full animate-ping duration-1000" />
                      <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-md shadow-emerald-500/20 z-10">
                        <FiCheck size={28} strokeWidth={3} />
                      </div>
                    </div>

                    {/* Typography */}
                    <h3 className="text-xl font-medium text-slate-900 tracking-tight text-center">
                      E-commerce Storefront is Live!
                    </h3>
                    <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider text-center">
                      Production build deployed successfully to your domain
                    </p>

                    {/* Real-time Infrastructure Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 w-full max-w-md mt-6">
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <div>
                          <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            SSL Certificate
                          </span>
                          <span className="text-xs font-semibold text-slate-700">
                            Active & Secure
                          </span>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <div>
                          <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            CDN Servers
                          </span>
                          <span className="text-xs font-semibold text-slate-700">
                            Global Coverage
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Domain Box with Copy Action */}
                    <div className="mt-3 w-full max-w-md bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0 pl-1">
                        <FiGlobe
                          className="text-slate-400 shrink-0"
                          size={14}
                        />
                        <span className="text-xs font-mono font-medium text-slate-600 truncate">
                          https://yourbrand.com
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "https://yourbrand.vogue.shop"
                          );
                          toast.success("Store URL copied!");
                        }}
                        className="bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all shadow-xs cursor-pointer shrink-0"
                      >
                        Live Link
                      </button>
                    </div>

                    {/* Action Navigation */}
                    <div className="flex gap-2.5 mt-6 w-full max-w-md border-t border-slate-100 pt-5">
                      <button
                        type="button"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-600/10 cursor-pointer"
                      >
                        <FiExternalLink size={14} /> Visit Storefront
                      </button>
                      <button
                        type="button"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                      >
                        <FiPieChart size={14} /> Open Dashboard
                      </button>
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
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessVisualizer;
