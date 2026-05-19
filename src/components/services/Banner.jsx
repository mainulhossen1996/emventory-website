"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import {
  FiMonitor,
  FiTrendingUp,
  FiShoppingCart,
  FiBox,
  FiCheck,
  FiBarChart2,
  FiLayers,
} from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white py-32">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-100px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto  flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">
                Smart Commerce Ecosystem
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-6xl leading-[1.2] font-bold tracking-tight">
              Enterprise-ready tools <br />
              for modern retail & eCommerce
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Manage your retail stores, online orders, inventory, POS, customer
              experience, and AI-powered commerce operations from one powerful
              platform.
            </p>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                <FiMonitor className="text-blue-400" />
                <span className="text-sm text-slate-300">Smart POS System</span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                <FiShoppingCart className="text-blue-400" />
                <span className="text-sm text-slate-300">
                  Theme Based Storefront
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                <FiLayers className="text-blue-400" />
                <span className="text-sm text-slate-300">
                  Multi-branch Control
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT UI SHOWCASE */}
          <div className="relative flex justify-center py-24 pe-10">
            {/* Main Soft-Shadow Container */}
            <div className="relative w-full rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
              {/* 1. TOP FLOATING CARD: Sales (Shopify Style) */}
              <div className="absolute -top-20 -right-10 z-30 rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl transition-all hover:-translate-y-2 duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FiTrendingUp size={20} />
                  </div>
                  <p className="text-[11px] font-bold tracking-wide text-slate-400">
                    Net Sales
                  </p>
                </div>
                <h4 className="text-3xl font-bold text-slate-900">
                  ৳48,290
                </h4>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-500">
                    +12.5%
                  </span>
                  <div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-blue-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* 2. MAIN INTERFACE (The Functional UI) */}
              <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-[#f8f9fa] p-8">
                {/* Dashboard Header Simulation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-6">
                    {["Analytics", "Stock", "Orders"].map((item, i) => (
                      <span
                        key={i}
                        className={`text-xs font-bold uppercase tracking-widest cursor-pointer ${
                          i === 0
                            ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white" />
                </div>

                <div className="grid grid-cols-12 gap-4">
                  {/* Sales Chart Visualization */}
                  <div className="col-span-7">
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 h-full">
                      <div className="flex justify-between items-center mb-8">
                        <h5 className="text-sm font-semibold text-slate-800">
                          Sales Turnover
                        </h5>
                        <FiBarChart2 className="text-slate-300" />
                      </div>
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[60, 40, 90, 70, 50, 85, 65].map((h, i) => (
                          <div
                            key={i}
                            className="w-full bg-blue-50 rounded-t-lg relative group transition-all"
                            style={{ height: `${h}%` }}
                          >
                            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Feature Connection Grid */}
                  <div className="col-span-5 space-y-4">
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white  flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                        <FiBox size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase">
                          Low Stock Alert
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          12 Products
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <FiCheck size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase">
                          Automation
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          Stock Syncing
                        </p>
                      </div>
                    </div>

                    <div className="p-4 px-6 rounded-full bg-slate-900 flex items-center justify-between group cursor-pointer">
                      <span className="text-sm font-normal text-white">
                        View Reports
                      </span>
                      <FiLayers className="text-blue-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. BOTTOM FLOATING CARD: Logistics */}
              <div className="absolute -bottom-16 -left-16 z-30 rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl transition-all hover:scale-105 duration-500">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <FiShoppingCart size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-wide text-slate-400">
                      Orders Processed
                    </p>
                    <h4 className="text-3xl font-bold tracking-tight text-slate-900">
                      12,840+
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
