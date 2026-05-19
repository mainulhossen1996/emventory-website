"use client";
import React from 'react'
import Image from "next/image";
import AppScreen from "../../../public/images/Dashboard-Mockup.png"
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const features = [
    {
        icon: "/images/icon/diamond.png",
      title: "Real-Time Business Monitoring",
      description:
        "Track sales, inventory, and overall business performance instantly from your mobile device with live updates and insights anytime.",
    },
    {
        icon: "/images/icon/tshirt.png",
      title: "Complete Inventory Control & Track",
      description:
        "Monitor stock levels, update products, and shortages with powerful real-time inventory management directly from your smartphone.",
    },
    {
        icon: "/images/icon/shopping-cart.png",
      title: "Instant Sales & Performance Reports",
      description:
        "Access detailed reports and analytics on sales, revenue, and customer trends to make faster and smarter business decisions.",
    },
    {
        icon: "/images/icon/monitor.png",
      title: "Manage Operations From Anywhere",
      description:
        "Handle orders, manage daily operations, and stay connected with your business activities wherever you are using the mobile app.",
    },
  ];

export const MobileApp = () => {
  return (
    <div className='rounded-t-[50px] bg-slate-50 my-20'>
        <div className='max-w-screen-xl mx-auto py-30'>
            <div className='flex justify-between items-center gap-10 border-b border-slate-200'>
                <div className='w-1/2'>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <HiMiniDevicePhoneMobile />
              Mobile App
            </div>
                <p className='text-5xl font-normal leading-20'>
                    Take control your business form anywhere, anytime.
                </p>
                <p className='text-xl font-light mt-6'>
                Stay connected to your business on the go with full mobile access to sales, inventory, and reports. Manage operations, track performance, and make decisions anytime, anywhere from your smartphone.
                </p>
                </div>
               
                <div className='w-1/2'>
                <Image
            src={AppScreen}
            height={2000}
            width={2000}
            className="h-[400px] object-contain"
            alt="Banner image"
          />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto flex gap-6">
      <div className="w-full">
      <div className="grid grid-cols-4">
  {features.map((feature, index) => (
    <div
      key={index}
      className="
        p-6 flex flex-col justify-between"
    >
      <div className="my-4 w-10 h-10">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-md font-light">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
          </div>
   
        </div>

        </div>
    </div>
  )
}
