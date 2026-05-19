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
    className=" bg-[#000000] pt-24"
    >
        <div className='max-w-screen-xl mx-auto flex flex-col gap-4'>

            <p className='text-6xl font-light text-gray-500 leading-[75px] tracking-tight'>
            <span className='text-white text-6xl'>One platform. Every way you sell.</span>
            <br/>
            Sell anywhere, online, offline, locally, or globally with desktop or mobile.
            </p>

            <section className="relative overflow-hidden pt-10 pb-16 bg-[#020617]">


        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Glow Layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-md">
                  {item.icon}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:rotate-45">
                  <FiArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-10">
                <h3 className="text-2xl font-normal text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-6 font-light text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative */}
              <div className="relative z-10 mt-10 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-400" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Background Number */}
              <span className="absolute bottom-4 right-6 text-8xl font-bold text-white/[0.03]">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      
    </section>

           
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col justify-center bg-gradient-to-b from-[#0b1a3a] to-black rounded-t-4xl pt-20 relative mt-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
 
          <div className='mb-8 ps-30'>
            <p className='text-2xl font-light text-gray-300'>
            All the tools you need to run and grow your business — from <br/>daily operations to
            enterprise-level management — in one ecosystem.
            </p>
          </div>
        <Image
            src={demoWeb}
          width={1000}
          height={1000}
          className="object-contain h-[500px] w-auto ps-12"
        />
        </div>
  
    </div>
  )
}
export default Sell;
