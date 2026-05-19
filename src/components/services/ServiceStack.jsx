"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const ServiceCard = ({
  i,
  title,
  description,
  ui,
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-10 h-screen flex items-center justify-center px-4">
      
      <motion.div
        style={{ scale }}
        className="w-full max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.06)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between p-10 md:p-16">
            
            <div>
              

              <h2 className="text-3xl md:text-4xl leading-[1.15] font-medium tracking-tight text-slate-900 max-w-xl">
                {title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl">
                {description}
              </p>
            </div>

            <button className="mt-12 flex w-fit items-center gap-3 rounded-2xl bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
              Explore Feature

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <FiArrowUpRight size={18} />
              </div>
            </button>
          </div>

          {/* RIGHT UI */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 flex items-center justify-center">
            {ui}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServiceStack() {
  const container = useRef(null);


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Meta integration for social commerce",
      description:
        "Connect Facebook and Instagram shops, sync products automatically, and manage social commerce campaigns from one platform.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          <div className="grid grid-cols-2 gap-5">
            
            <div className="rounded-3xl bg-[#1877F2] p-6 text-white">
              
              <p className="text-sm opacity-80">
                Facebook Shop
              </p>

              <h4 className="mt-2 text-3xl font-bold">
                Connected
              </h4>

              <div className="mt-8 h-24 rounded-2xl bg-white/20" />
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-pink-500 to-orange-400 p-6 text-white">
              
              <p className="text-sm opacity-80">
                Instagram Store
              </p>

              <h4 className="mt-2 text-3xl font-bold">
                Live Sync
              </h4>

              <div className="mt-8 h-24 rounded-2xl bg-white/20" />
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-6">
            
            <p className="text-sm text-slate-500">
              Social Orders
            </p>

            <h4 className="mt-2 text-4xl font-bold text-slate-900">
              2,480
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "AI-powered product search and recommendations",
      description:
        "Let customers search products using text or voice. Emventory AI automatically recommends products based on customer behavior and shopping patterns.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          {/* Search */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between">
            
            <div>
              <p className="text-sm text-slate-500">
                AI Search
              </p>

              <p className="mt-1 font-medium text-slate-900">
                “Show black sneakers under ৳3000”
              </p>
            </div>

            <div className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
              Voice AI
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="h-28 rounded-xl bg-slate-200 mb-4" />

                <div className="h-3 w-20 rounded-full bg-slate-300 mb-2" />

                <div className="h-2 w-14 rounded-full bg-slate-200 mb-4" />

                <div className="rounded-full bg-blue-600 py-2 text-center text-xs font-medium text-white">
                  Recommended
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-blue-600 p-5 text-white">
            
            <p className="text-sm text-blue-100">
              AI Conversion Boost
            </p>

            <h4 className="mt-2 text-4xl font-bold">
              +38%
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "Launch your online store without coding",
      description:
        "Create a modern eCommerce website on your own domain with complete inventory, product, and order management tools.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <p className="text-sm text-slate-500">
                Online Store
              </p>

              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Fashion Hub
              </h4>
            </div>

            <div className="rounded-2xl bg-blue-600 px-4 py-2 text-sm text-white">
              Live
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="h-28 rounded-xl bg-slate-200 mb-3" />

                <div className="h-3 w-24 rounded-full bg-slate-300 mb-2" />

                <div className="h-3 w-16 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-blue-600 p-5 text-white">
            
            <p className="text-sm text-blue-100">
              Total Orders
            </p>

            <h4 className="text-4xl font-bold mt-2">
              1,248
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "Build customer loyalty and repeat sales",
      description:
        "Reward loyal customers with points, discounts, and personalized offers to increase repeat purchases.",
    
      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
    
          <div className="flex items-center justify-between mb-6">
    
            <div>
              <p className="text-sm text-slate-500">
                Customer Loyalty
              </p>
    
              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Rewards Program
              </h4>
            </div>
    
            <div className="rounded-xl bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
              1,240 Members
            </div>
          </div>
    
          <div className="space-y-4">
    
            {[
              {
                name: "Nusrat Jahan",
                points: "2,450 Points",
              },
              {
                name: "Rahim Store",
                points: "1,820 Points",
              },
              {
                name: "Tanvir Ahmed",
                points: "950 Points",
              },
            ].map((customer, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-4"
              >
                <div className="flex items-center gap-4">
    
                  <div className="h-12 w-12 rounded-full bg-pink-100" />
    
                  <div>
                    <h5 className="font-medium text-slate-800">
                      {customer.name}
                    </h5>
    
                    <p className="text-sm text-slate-500">
                      Loyal customer
                    </p>
                  </div>
                </div>
    
                <div className="rounded-xl bg-pink-50 px-3 py-2 text-sm font-medium text-pink-700">
                  {customer.points}
                </div>
              </div>
            ))}
          </div>
    
          <div className="mt-6 rounded-2xl bg-slate-900 p-5 flex items-center justify-between">
    
            <p className="text-slate-300">
              Rewards Redeemed
            </p>
    
            <h4 className="text-3xl font-bold text-white">
              ৳38,500
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "Manage suppliers and purchase operations easily",
      description:
        "Track suppliers, purchase orders, due payments, and stock updates from one place.",
    
      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
    
          <div className="flex items-center justify-between mb-6">
    
            <div>
              <p className="text-sm text-slate-500">
                Supplier Management
              </p>
    
              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Active Suppliers
              </h4>
            </div>
    
            <div className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              24 Suppliers
            </div>
          </div>
    
          <div className="space-y-4">
    
            {["Fresh Mart Ltd.", "Daily Needs", "Urban Wholesale"].map(
              (supplier, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-4"
                >
                  <div className="flex items-center gap-4">
    
                    <div className="h-12 w-12 rounded-xl bg-blue-100" />
    
                    <div>
                      <h5 className="font-medium text-slate-800">
                        {supplier}
                      </h5>
    
                      <p className="text-sm text-slate-500">
                        Last order 2 days ago
                      </p>
                    </div>
                  </div>
    
                  <div className="text-right">
                    <p className="text-sm text-slate-500">
                      Due
                    </p>
    
                    <h5 className="font-semibold text-slate-900">
                      ৳8,240
                    </h5>
                  </div>
                </div>
              )
            )}
          </div>
    
          <div className="mt-6 rounded-2xl bg-slate-900 p-5 flex items-center justify-between">
    
            <p className="text-slate-300">
              Total Purchases
            </p>
    
            <h4 className="text-3xl font-bold text-white">
              ৳84,320
            </h4>
          </div>
        </div>
      ),
    },
    {
      title: "Keep your business accounts organized",
      description:
        "Monitor income, expenses, transactions, and financial summaries in real time.",
    
      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
    
          <div className="flex items-center justify-between mb-6">
    
            <div>
              <p className="text-sm text-slate-500">
                Accounts Overview
              </p>
    
              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Financial Summary
              </h4>
            </div>
    
            <div className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Updated
            </div>
          </div>
    
          <div className="space-y-4">
    
            {[
              { label: "Today's Sales", amount: "৳18,450" },
              { label: "Expenses", amount: "৳4,200" },
              { label: "Cash Balance", amount: "৳42,100" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-4"
              >
                <div>
                  <h5 className="font-medium text-slate-800">
                    {item.label}
                  </h5>
    
                  <p className="text-sm text-slate-500">
                    Updated recently
                  </p>
                </div>
    
                <h4 className="text-lg font-semibold text-slate-900">
                  {item.amount}
                </h4>
              </div>
            ))}
          </div>
    
          <div className="mt-6 rounded-2xl bg-slate-900 p-5 flex items-center justify-between">
    
            <p className="text-slate-300">
              Monthly Revenue
            </p>
    
            <h4 className="text-3xl font-bold text-white">
              ৳2.4L
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "Fast and reliable POS for retail operations",
      description:
        "Handle billing, inventory, and customer transactions from one modern POS system.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <p className="text-sm text-slate-500">
                Retail POS
              </p>

              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Counter #04
              </h4>
            </div>

            <div className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Active
            </div>
          </div>

          <div className="space-y-4">
            
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-4"
              >
                <div className="flex items-center gap-4">
                  
                  <div className="h-14 w-14 rounded-xl bg-slate-200" />

                  <div>
                    <div className="h-3 w-28 rounded-full bg-slate-300 mb-2" />
                    <div className="h-2 w-16 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="text-lg font-semibold text-slate-900">
                  ৳240
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900 p-5 flex items-center justify-between">
            
            <p className="text-slate-300">
              Total Sale
            </p>

            <h4 className="text-3xl font-bold text-white">
              ৳12,450
            </h4>
          </div>
        </div>
      ),
    },

    {
      title: "Integrated payment and delivery management",
      description:
        "Connect payment gateways and delivery partners with real-time order tracking and transaction management.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          <div className="space-y-5">
            
            {[
              "Customer placed order",
              "Payment confirmed",
              "Packed from warehouse",
              "Out for delivery",
              "Delivered successfully",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                  {idx + 1}
                </div>

                <div className="flex-1 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="font-medium text-slate-800">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Manage multiple branches from one dashboard",
      description:
        "Control inventory, warehouse transfers, and branch performance from one centralized system.",

      ui: (
        <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          
          <div className="flex items-center justify-between mb-8">
            
            <div>
              <p className="text-sm text-slate-500">
                Multi-branch Overview
              </p>

              <h4 className="text-2xl font-semibold text-slate-900 mt-1">
                Enterprise Control
              </h4>
            </div>

            <div className="rounded-2xl bg-blue-100 px-4 py-2 text-sm text-blue-700">
              12 Branches
            </div>
          </div>

          <div className="space-y-4">
            
            {[
              "Dhaka → Chittagong",
              "Warehouse → Gulshan",
              "Khulna → Sylhet",
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between">
                  
                  <div>
                    <p className="font-medium text-slate-800">
                      {item}
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Product transfer in progress
                    </p>
                  </div>

                  <div className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
                    Active
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-slate-400 text-sm">
                Total Inventory
              </p>

              <h4 className="mt-2 text-3xl font-bold text-white">
                84K
              </h4>
            </div>

            <div className="rounded-2xl bg-blue-600 p-5">
              <p className="text-blue-100 text-sm">
                Monthly Growth
              </p>

              <h4 className="mt-2 text-3xl font-bold text-white">
                +18%
              </h4>
            </div>
          </div>
        </div>
      ),
    },

    
  ];

  const totalCards = cards.length;

  const reversed = [...cards].reverse();

  return (
    <main
      ref={container}
      className="relative flex flex-col items-center bg-gradient-to-b from-gray-100 to-white py-10"
    >
      <div className='max-w-screen-lg mx-auto text-center pt-20'>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <FaCode />
              Core Engineering
            </div>
        <p className='text-5xl'>
        Your Business, One Unified Platform.
         </p>
         <p className='text-xl mt-6'>
         Bring all your sales channels, operations, and customer insights together under one platform, making it easier than ever to run, scale, and grow your business seamlessly.
         </p>
        </div>

        {reversed.map((card, i) => {
  const totalCards = reversed.length;

  const targetScale =
    1 - (totalCards - i - 1) * 0.04;

  return (
    <ServiceCard
      key={i}
      i={i}
      {...card}
      progress={scrollYProgress}
      range={[i / totalCards, 1]}
      targetScale={targetScale}
    />
  );
})}
    </main>

  );
}