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


        <div className="max-w-screen-xl mx-auto flex flex-col justify-center bg-gradient-to-b from-[#0b1a3a] to-black rounded-t-4xl pt-10 lg:pt-20 relative">
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
