"use client";

import { useState } from "react";
import {
  FiMonitor,
  FiShoppingBag,
  FiCheck,
  FiBarChart2,
  FiArrowUpRight,
  FiUsers,
  FiPackage,
  FiZap,
} from "react-icons/fi";
import { MdOutlineHub } from "react-icons/md";

const EcommerceSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      navTitle: "Retail POS",
      heading: "Everything your retail store needs in one POS",
description:
  "Run your retail business faster and more efficiently with a powerful all-in-one POS system. Manage sales, inventory, staff, customer payments, and daily operations from a single dashboard.",
      features: [
        "Unified inventory",
        "Smart staff scheduling",
        "Custom loyalty triggers",
      ],

      ui: (
        <div className="w-full rounded-[32px] border border-white/10 bg-[#0b1120] p-5 shadow-2xl">

  {/* MAIN CONTENT */}
  <div className="grid grid-cols-12 gap-5">
    
    {/* LEFT - PRODUCT LIST */}
    <div className="col-span-7 rounded-3xl border border-white/5 bg-white/[0.03] p-4">
      
      <div className="mb-4 flex items-center justify-between">
        
        <h5 className="text-lg font-medium text-white">
          Current Order
        </h5>

        <span className="text-xs text-slate-400">
          4 Items
        </span>
      </div>

      <div className="space-y-3">
        
        {[
          {
            name: "Chicken Burger",
            qty: "2x",
            price: "৳640",
          },
          {
            name: "Cold Coffee",
            qty: "1x",
            price: "৳180",
          },
          {
            name: "French Fries",
            qty: "1x",
            price: "৳220",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#111827] px-4 py-3"
          >
            <div className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-semibold text-blue-400">
                {item.qty}
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {item.name}
                </p>

                <p className="text-xs text-slate-500">
                  Added to cart
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-white">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      {/* PAYMENT */}
      <div className="mt-5 rounded-2xl bg-blue-600 p-4">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-sm text-blue-100">
              Total Amount
            </p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              ৳1,040
            </h3>
          </div>

          <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-slate-100">
            Complete Sale
          </button>
        </div>
      </div>
    </div>

    {/* RIGHT - QUICK STATS */}
    <div className="col-span-5 flex flex-col gap-4">
      
      {/* SALES */}
      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
        
        <div className="mb-4 flex items-center justify-between">
          
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Today Sales
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              ৳48,290
            </h3>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <FiBarChart2 size={24} />
          </div>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-blue-500" />
        </div>

        <p className="mt-3 text-xs text-slate-400">
          +18% compared to yesterday
        </p>
      </div>

      {/* QUICK INFO */}
      <div className="grid grid-cols-2 gap-4">
        
        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
          
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Orders
          </p>

          <h4 className="mt-3 text-2xl font-bold text-white">
            126
          </h4>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
          
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Customers
          </p>

          <h4 className="mt-3 text-2xl font-bold text-white">
            89
          </h4>
        </div>
      </div>

      {/* LIVE STATUS */}
      <div className="rounded-3xl border border-blue-500/20 bg-blue-600/10 p-5">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-300">
              POS Status
            </p>

            <h4 className="mt-2 text-xl font-semibold text-white">
              Running Smoothly
            </h4>
          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
</div>
      ),
    },

    {
      navTitle: "E-commerce",
      heading: "Launch a modern online store that sells more",
description:
  "Create a e-commerce website with ready-made themes, smart automation, and built-in business tools. Manage products, orders, payments, delivery, and customers from one place while offering a smooth shopping experience.",
      features: [
        "AI product suggestions",
        "Smart checkout flow",
        "Voice & text search",
      ],

      ui: (
        <div className="w-full rounded-[32px] border border-white/10 bg-[#0B1120] p-5 shadow-2xl">

  {/* MAIN */}
  <div className="grid grid-cols-12 gap-5">
    
    {/* LEFT - PRODUCT + CART */}
    <div className="col-span-7 rounded-3xl border border-white/5 bg-[#111827] p-5">
      
      {/* STORE NAV */}
      <div className="mb-5 flex items-center justify-between">
        
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span >
            Home
          </span>

          <span>Shop</span>
          <span>Categories</span>
          <span className="text-white font-medium">Cart</span>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
          <FiShoppingBag size={16} />
        </div>
      </div>

      {/* PRODUCT */}
      <div className="grid grid-cols-1 gap-4">
        

        {/* CART */}
        <div className="rounded-3xl border border-white/5 bg-[#0B1120] p-4">
          
          <div className="mb-5 flex items-center justify-between">
            
            <h4 className="text-sm font-medium text-white">
              Shopping Cart
            </h4>

            <span className="text-xs text-slate-400">
              3 Items
            </span>
          </div>

          <div className="space-y-3">
            
            {[
              {
                name: "Hoodie",
                price: "৳1,250",
              },
              {
                name: "Sneakers",
                price: "৳2,480",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {item.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    Qty 1
                  </p>
                </div>

                <p className="text-sm font-semibold text-white">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-5 rounded-2xl bg-blue-600 p-4">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-xs text-blue-100">
                  Total
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  ৳3,730
                </h3>
              </div>

              <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT - ORDER PROCESS */}
    <div className="col-span-5 rounded-3xl border border-white/5 bg-[#111827] p-5">
      
      <div className="mb-4">
        
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
          Order Flow
        </p>

        <h3 className="mt-3 text-xl font-semiblod text-white">
          Order Processing
        </h3>

        <p className="mt-2 text-xs text-light leading-5 text-gray-400">
          Automatically manage customer orders from checkout to delivery.
        </p>
      </div>

      {/* PROCESS */}
      <div className="space-y-5">
        
        {[
          {
            title: "Customer Order",
          },
          {
            title: "Payment Confirmed",
          },
          {
            title: "Packaging",
          },
          {
            title: "Delivery",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="relative flex gap-2 items-center"
          >
            {/* LINE */}
            {idx !== 3 && (
              <div className="absolute left-[15px] top-10 h-full w-[2px] bg-white/10" />
            )}

            {/* DOT */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
              {idx + 1}
            </div>

            {/* CONTENT */}
            <div className="flex-1 rounded-full border border-white/5 bg-[#0B1120] px-4 py-3">
              
              <h4 className="text-sm font-semibold text-white">
                {step.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      ),
    },

    {
      navTitle: "Enterprise",
      heading: "One platform for all business operations",
      description:
        "Manage POS, e-commerce, inventory, warehouses, product transfers, accounting, and multi-branch operations from one centralized platform. Designed for growing enterprises and large retail networks.",
      features: [
        "Warehouse sync",
        "Branch transfers",
        "Advanced analytics",
      ],

      ui: (
        <div className="w-full rounded-[32px] border border-white/10 bg-[#0B1120] p-5 shadow-2xl">

          {/* MAIN GRID */}
          <div className="grid grid-cols-12 gap-5">
            
            {/* LEFT - BRANCH REPORT */}
            <div className="col-span-7 rounded-3xl border border-white/5 bg-[#111827] p-4">
              
              <div className="mb-5 flex items-center justify-between">
                
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Store Performance
                  </h4>
      
                </div>

              </div>
      
              <div className="space-y-4">
                
                {[
                  {
                    branch: "Dhaka Main Branch",
                    sales: "৳4.8M",
                    stock: "12.4K",
                  },
                  {
                    branch: "Chittagong Branch",
                    sales: "৳2.1M",
                    stock: "8.1K",
                  },
                  {
                    branch: "Sylhet Branch",
                    sales: "৳1.4M",
                    stock: "5.6K",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/5 bg-[#0B1120] p-4"
                  >
                    <div className="flex items-center justify-between">
                      
                      {/* LEFT */}
                      <div className="flex items-center gap-4">
                        
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400">
                          <FiPackage size={20} />
                        </div>
      
                        <div>
                          <h5 className="text-sm font-medium text-white">
                            {item.branch}
                          </h5>
      
                          <p className="mt-1 text-xs text-slate-500">
                            Stock Available: {item.stock}
                          </p>
                        </div>
                      </div>
      
                      {/* RIGHT */}
                      <div className="text-right">
                        
                        <p className="text-xs text-slate-500">
                          Monthly Sales
                        </p>
      
                        <h4 className="mt-1 text-lg font-bold text-white">
                          {item.sales}
                        </h4>
                      </div>
                    </div>
      
                    {/* BAR */}
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full ${
                          idx === 0
                            ? "w-[85%] bg-blue-500"
                            : idx === 1
                            ? "w-[65%] bg-cyan-500"
                            : "w-[45%] bg-slate-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
      
            {/* RIGHT - PRODUCT TRANSFER */}
            <div className="col-span-5 rounded-3xl border border-white/5 bg-[#111827] p-4">
              
              <div className="mb-4">
                
                <h4 className="text-sm font-medium text-white">
                  Product Transfer
                </h4>
      
                <p className="mt-1 text-xs font-light leading-4 text-gray-400">
                  Track inventory movement between branches
                </p>
              </div>
      
              {/* TRANSFER FLOW */}
              <div className="space-y-5">
                
                {[
                  {
                    from: "Dhaka",
                    to: "Chittagong",
                    qty: "120 Units",
                    status: "Pending",

                  },
                  {
                    from: "Dhaka",
                    to: "Sylhet",
                    qty: "64 Units",
                    status: "Acepted",
                  },

                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/5 bg-[#0B1120] p-4"
                  >
                    <div className="flex items-center justify-between">
                      
                      {/* FROM */}
                      <div>
                        <p className="text-xs text-slate-500">
                          From
                        </p>
      
                        <h5 className="mt-1 text-sm font-semibold text-white">
                          {item.from}
                        </h5>
                      </div>
      
                      {/* ARROW */}
                      <div className="flex flex-col items-center">
                        
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                          →
                        </div>
      
                        <span className="mt-2 text-[10px] text-blue-400">
                          {item.status}
                        </span>
                      </div>
      
                      {/* TO */}
                      <div className="text-right">
                        
                        <p className="text-xs text-slate-500">
                          To
                        </p>
      
                        <h5 className="mt-1 text-sm font-semibold text-white">
                          {item.to}
                        </h5>
                      </div>
                    </div>
      
                    {/* FOOTER */}
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      
                      <span className="text-xs text-slate-500">
                        Transfer Quantity
                      </span>
      
                      <span className="text-sm font-semibold text-white">
                        {item.qty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#020617] py-28 text-white">
      
      <div className="mx-auto max-w-screen-xl">
        
        {/* Header */}
        <div className="max-w-4xl">
          
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <MdOutlineHub className="fill-current" />
              Commerce Ecosystem
            </div>

          <h1 className="text-5xl font-normal tracking-tight leading-[1.05]">
            Built to support your business
          </h1>

        </div>

        {/* TABS */}
        <div className="mt-10 flex flex-wrap gap-4 border-b border-white/10 pb-2">
          {solutions.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-full px-6 py-1 text-lg transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {item.navTitle}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-10 flex  gap-24">
          

          <div className="w-[40%]">

            <h3 className="mt-8 text-3xl leading-[1.1] tracking-tight">
              {solutions[activeTab].heading}
            </h3>

            <p className="mt-6 text-lg leading-7 text-gray-400 font-light">
              {solutions[activeTab].description}
            </p>

            <div className="mt-10 space-y-5">
              {solutions[activeTab].features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <FiCheck size={14} />
                  </div>

                  <p className="text-[16px] text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-2 text-lg text-white transition hover:bg-blue-500">
              Get Started

              <FiArrowUpRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="w-[60%] relative">
            
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px]" />
              
              <div className="h-full w-full rounded-[40px] border border-white/5 bg-[#020617] p-4">
                {solutions[activeTab].ui}
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;