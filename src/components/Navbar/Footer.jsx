"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white text-slate-900 pt-20">
      
      {/* CTA SECTION */}
      <div className="max-w-screen-xl mx-auto">
        
        <div className="rounded-[40px] bg-[#0B1120] px-8 py-16 md:px-16 text-center overflow-hidden relative">
          
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 bg-blue-500/20 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-4xl md:text-6xl leading-tight font-refular tracking-tight text-white max-w-3xl mx-auto">
              One platform for all your business operations
            </h2>

            <p className="mt-6 text-slate-400 text-lg font-light leading-8 mx-auto">
              Manage POS, e-commerce, inventory, warehouse, and multi-branch operations from one centralized system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-500 transition">
                Start Free Trial
                <FaArrowRight size={14} />
              </button>


            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-screen-xl mx-auto py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-200 pb-12">
          
          {/* BRAND */}
          <div className="md:col-span-5">
            
            <Image
              src="/images/logo.png"
              alt="Emventory"
              width={180}
              height={50}
              className="object-contain"
            />

            <p className="mt-5 text-slate-600 leading-8 max-w-md">
              Emventory helps businesses manage retail stores, online sales,
              inventory, and enterprise operations with one powerful platform.
            </p>
          </div>

          {/* LINKS */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-5">
                Product
              </h4>

              <div className="space-y-3 text-slate-600">
                <Link href="/" className="block hover:text-blue-600 transition">
                  POS System
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  E-commerce
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  Inventory
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  Multi Branch
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-5">
                Company
              </h4>

              <div className="space-y-3 text-slate-600">
                <Link href="/" className="block hover:text-blue-600 transition">
                  About
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  Pricing
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  Blog
                </Link>

                <Link href="/" className="block hover:text-blue-600 transition">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="md:col-span-3">
            
            <h4 className="font-semibold text-slate-900 mb-5">
              Follow Us
            </h4>

            <div className="flex gap-3">
              
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, idx) => (
                  <button
                    key={idx}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition"
                  >
                    <Icon size={16} />
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-slate-500">
          
          <p>
            © 2025 Emventory by mPair Technologies Ltd.
          </p>

          <div className="flex items-center gap-6">
            
            <Link href="/" className="hover:text-blue-600 transition">
              Terms
            </Link>

            <Link href="/" className="hover:text-blue-600 transition">
              Privacy
            </Link>

            <Link href="/" className="hover:text-blue-600 transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;