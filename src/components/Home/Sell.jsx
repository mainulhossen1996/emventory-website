import React from 'react'
import Image from "next/image";
import demoWeb from "../../../public/images/Web-demo.png"
import {
  FiArrowUpRight,
  FiShoppingBag,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const solutions = [
  {
    title: "Retail POS",
    description:
      "Everything you need to manage your physical shop — from billing to inventory control — in one powerful POS ecosystem.",
    icon: <FiShoppingBag size={24} />,
    glow: "from-slate-700/50 to-slate-800/30",
  },
  {
    title: "E-commerce",
    description:
      "Launch, manage, and scale your online business with integrated inventory, payments, and delivery tools.",
    icon: <FiGlobe size={24} />,
    glow: "from-slate-700/50 to-slate-800/30",
  },
  {
    title: "Enterprise",
    description:
      "Advanced multi-channel management, centralized reporting, and scalable infrastructure for growing brands.",
    icon: <FiLayers size={24} />,
    glow: "from-slate-700/50 to-slate-800/30",
  },
];


const Sell = () => {
  return (
    <div 
    className="bg-[#000000] pt-10 lg:pt-24"
    >
       <div className="max-w-screen-xl mx-auto text-center flex flex-col items-center gap-6 px-4">

{/* Heading */}
<div className="space-y-4">
  <h1 className="text-3xl md:text-6xl font-light tracking-tight leading-[1.2] text-gray-500">
    <span className="text-white">
      One platform for every sale
    </span>
    <br />
    <span className="hover:text-blue-400">online, offline & across every branch</span>
  </h1>
</div>

{/* Flow Line / Connected Cards */}
<div className="relative w-full mt-16 hidden lg:flex justify-center">

  {/* Connector */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[100%] h-[140px] border-t-[10px] border-gray-800 rounded-full opacity-60" />

  <div className="grid grid-cols-3 gap-10 w-full relative z-10">

    {/* Card 1 */}
    <div className="pt-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4">
        {["🛒", "💳", "📦"].map((icon, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-2xl bg-[#111111] border border-white/10 shadow-2xl flex items-center justify-center text-2xl"
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="border-l border-gray-800 pl-6 text-left">
        <h3 className="text-2xl font-normal text-white">
          Retail & POS
        </h3>

        <p className="text-gray-500 text-lg mt-3 leading-relaxed">
          Faster billing, smoother checkout, and real-time inventory syncing.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="pt-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4">
        {["🌐", "📱", "🚚"].map((icon, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-2xl bg-[#111111] border border-white/10 shadow-2xl flex items-center justify-center text-2xl"
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="border-l border-gray-800 pl-6 text-left">
        <h3 className="text-2xl font-normal text-white">
          Ecommerce Selling
        </h3>

        <p className="text-gray-500 text-lg mt-3 leading-relaxed">
          Sell from your website, mobile, and social platforms with one backend.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="pt-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4">
        {["🏢", "📊", "🔄"].map((icon, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-2xl bg-[#111111] border border-white/10 shadow-2xl flex items-center justify-center text-2xl"
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="border-l border-gray-800 pl-6 text-left">
        <h3 className="text-2xl font-normal text-white">
          Enterprise Control
        </h3>

        <p className="text-gray-500 text-lg mt-3 leading-relaxed">
          Centralized management for branches, stock movement, and analytics.
        </p>
      </div>
    </div>

  </div>
</div>

</div>

        <div className="max-w-screen-xl mx-auto flex flex-col justify-center bg-gradient-to-b from-[#0b1a3a] to-black rounded-t-4xl pt-10 lg:pt-20 relative mt-10 lg:mt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
 
          <div className='mb-8 lg:ps-30 text-center lg:text-start'>
            <p className='text-lg lg:text-2xl font-light text-gray-300'>
            All the tools you need to run and grow your business — from <br/>daily operations to
            enterprise-level management — in one ecosystem.
            </p>
          </div>
        <Image
            src={demoWeb}
          width={1000}
          height={1000}
          className="object-contain lg:h-[500px] w-auto ps-4 lg:ps-12"
        />
        </div>
  
    </div>
  )
}
export default Sell;
