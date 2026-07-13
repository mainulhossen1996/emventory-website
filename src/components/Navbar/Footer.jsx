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
    <footer className="bg-[#0A0E17] text-slate-300 pt-20">

      {/* CTA SECTION */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative rounded-[32px] border border-slate-800 bg-[#0F1420] px-8 py-16 md:px-16 text-center overflow-hidden">

          {/* pegboard texture */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(#3B82F6 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            }}
          />
          {/* glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 bg-blue-500/20 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-tight text-white max-w-3xl mx-auto">
              One platform for all your business operations
            </h2>

            <p className="mt-6 text-slate-400 text-lg font-light leading-8 max-w-xl mx-auto">
              Manage POS, e-commerce, inventory, warehouse, and multi-branch
              operations from one centralized system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-500 transition-colors">
                Start Free Trial
                <FaArrowRight size={14} />
              </button>
              <button className="flex items-center gap-2 rounded-full border border-slate-700 px-7 py-4 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-12">

          {/* BRAND */}
          <div className="md:col-span-5">
            <Image
              src="/images/logo-white.png"
              alt="Emventory"
              width={180}
              height={50}
              className="object-contain"
            />

            <p className="mt-5 text-slate-400 leading-8 max-w-md">
              Emventory helps businesses manage retail stores, online sales,
              inventory, and enterprise operations with one powerful platform.
            </p>

            <div className="flex gap-3 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, idx) => (
                  <button
                    key={idx}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-[#0F1420] text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
                  >
                    <Icon size={15} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* LINKS */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">
                Product
              </h4>
              <div className="space-y-3 text-slate-400">
                <Link href="/pos" className="block hover:text-blue-400 transition-colors">
                  POS System
                </Link>
                <Link href="/ecommerce" className="block hover:text-blue-400 transition-colors">
                  E-commerce
                </Link>
                <Link href="/enterprise" className="block hover:text-blue-400 transition-colors">
                  Enterprise
                </Link>
                <Link href="/integrations" className="block hover:text-blue-400 transition-colors">
                  Integrations
                </Link>
                <Link href="/pricing" className="block hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </div>
            </div>



            <div className="col-span-2 sm:col-span-1">
  <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">
    Support
  </h4>
  <div className="space-y-3 text-slate-400">
                <Link href="/about" className="block hover:text-blue-400 transition-colors">
                Feature Guides
                </Link>
                <Link href="/blog" className="block hover:text-blue-400 transition-colors">
                  Tutorial
                </Link>
                <Link href="/pricing" className="block hover:text-blue-400 transition-colors">
                Help Center
                </Link>
                <Link href="/contact" className="block hover:text-blue-400 transition-colors">
                  New Updates
                </Link>
              </div>
</div>

<div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">
                Company
              </h4>
              <div className="space-y-3 text-slate-400">
                <Link href="/about" className="block hover:text-blue-400 transition-colors">
                  About
                </Link>
                
                <Link href="/blog" className="block hover:text-blue-400 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="block hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-slate-500">
          <p>© 2026 Emventory by mPair Technologies Ltd.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;