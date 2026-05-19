'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { FiCheckCircle, FiGlobe, FiZap, FiSearch, FiMic } from 'react-icons/fi';
import Image from "next/image";
import helmet from "../../../public/images/helmet.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#007BFF33,transparent_60%)]" />
      
      <div className="relative z-10 max-w-screen-xl mx-auto">
        
        {/* --- TOP HEADER SECTION --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <FiZap className="fill-current" />
            <span>The All-in-One E-commerce OS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.2] mb-8">
            Start Your Store
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {" "}Without the Stress
            </span>
          </h1>
         
          <p className='max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-light mb-10'>
            Take full control of your supply chain, payments, and delivery from anywhere in the world—all through one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-normal transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer">
              Start Your Store Free <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- BENTO GRID CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
  
  {/* LEFT BIG CARD */}
  <div className="lg:col-span-7 relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#081120] to-[#020617] p-6 lg:p-8">
    
    {/* Glow */}
    <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="relative z-10 flex h-full flex-col justify-between">
      
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
          Enterprise Commerce
        </div>

        <h2 className="mt-6 max-w-2xl text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-white">
          Scale your business with a unified<br/>commerce ecosystem
        </h2>

        <p className="mt-6 max-w-xl text-sm font-light leading-6 text-slate-400">
          Manage POS, e-commerce, inventory, analytics, payments, and customer experience from one intelligent platform.
        </p>
      </div>

    </div>
  </div>

  {/* RIGHT GRID */}
  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
    
    {/* CARD */}
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
      
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">
        
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-400/20">
          <FiGlobe size={26} />
        </div>

        <h3 className="mt-6 text-2xl font-normal text-white">
          100+ Integrations
        </h3>

        <p className="mt-3 leading-5 text-[12px] font-light text-slate-400">
          Connect payment gateways, delivery systems, accounting tools, and marketing platforms seamlessly.
        </p>

        <div className="mt-8 flex items-center gap-2 text-blue-300">
          <div className="h-2 w-2 rounded-full bg-blue-400" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-400/40 to-transparent" />
        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 p-5 relative overflow-hidden group">

        {/* Search UI */}
        <div className="rounded-full border border-white/80 bg-white/[0.04] p-2">
          <div className="flex items-center gap-2">
            <FiSearch className="text-gray-200" />

            <p className="flex-1 text-sm font-light text-slate-300">
              “red cycle helmet”
            </p>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900">
              <FiMic size={16} />
            </div>
          </div>
        </div>
              <div className="relative z-10">
               
                <p className="text-2xl font-semibold text-white mt-4">1250.00 BDT</p>
                <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-all">Buy Now</button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-40 h-40 group-hover:-translate-y-2 transition-transform duration-500">
                <Image src={helmet} alt="Helmet" fill className="object-contain" />
              </div>
            </div>
    {/* WIDE CARD */}

  </div>
</div>
      </div>
    </section>
  );
}

export default Hero