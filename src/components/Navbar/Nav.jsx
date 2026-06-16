"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import {
  ChevronDown,
  ShoppingBag,
  Globe,
  Shield,
  ArrowRight,
} from "lucide-react";

const Nav = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const solutions = [
    {
      title: "Retail POS",
      desc: "Fast checkout experience",
      href: "/pos",
      icon: <ShoppingBag size={18} />,
    },
    {
      title: "Ecommerce",
      desc: "Sell online everywhere",
      href: "/ecommerce",
      icon: <Globe size={18} />,
    },
    {
      title: "Enterprise",
      desc: "Multi-branch management",
      href: "/enterprise",
      icon: <Shield size={18} />,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <section className="fixed top-3 md:top-4 left-0 w-full z-[100] px-3 md:px-4">
        <div
          className={`transition-all duration-500 max-w-screen-xl mx-auto rounded-2xl md:rounded-full h-15 md:h-16 border border-dashed ${
            scrolled
              ? "bg-black/65 backdrop-blur-2xl border-white/20 shadow-2xl"
              : "bg-black border-white/20"
          }`}
        >
          <div className="flex justify-between items-center h-full px-4 md:px-6">
            {/* Logo */}
            <Link href="/home" className="flex items-center">
              <div className="w-28 md:w-36">
                <Image
                  src="/images/logo-white.png"
                  width={400}
                  height={120}
                  className="h-auto w-full"
                  alt="Emventory"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-[15px]">
              <Link
                href="/features"
                className={`transition-colors ${
                  isActive("/features")
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Features
              </Link>

              {/* Solutions */}
              <div
                className="relative py-5"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    solutionsOpen
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  Solutions
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full -left-10 w-80 pt-2 transition-all duration-300 ${
                    solutionsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-[#0b1120]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-3">
                    {solutions.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                      >
                        <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-white text-sm font-semibold">
                            {item.title}
                          </p>
                          <p className="text-slate-400 text-xs mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                className={`transition-colors ${
                  isActive("/pricing")
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/integrations"
                className={`transition-colors ${
                  isActive("/integrations")
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Integrations
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://shop.emventory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-semibold hover:text-blue-400 transition-colors"
              >
                Log in
              </Link>

              <Link
                href="https://shop.emventory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-blue-50 text-slate-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                Start Free
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
            >
              <CgMenuLeftAlt size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[190] transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[88%] max-w-sm bg-white z-[200] transition-all duration-500 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Top */}
          <div className="px-5 pt-5 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Image
                src="/images/logo.png"
                width={130}
                height={40}
                alt="Logo"
              />

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700"
              >
                <CgClose size={22} />
              </button>
            </div>
          </div>

          {/* Menu */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <div className="space-y-2">
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <span className="text-[15px] font-semibold text-gray-800">
                  Features
                </span>

                <ArrowRight size={16} className="text-gray-400" />
              </Link>

              {/* Mobile Solutions */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() =>
                    setMobileSolutionsOpen(!mobileSolutionsOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-4 bg-gray-50"
                >
                  <span className="text-[15px] font-semibold text-gray-800">
                    Solutions
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    mobileSolutionsOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-2">
                    {solutions.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <span className="text-[15px] font-semibold text-gray-800">
                  Pricing
                </span>

                <ArrowRight size={16} className="text-gray-400" />
              </Link>

              <Link
                href="/integrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <span className="text-[15px] font-semibold text-gray-800">
                  Integrations
                </span>

                <ArrowRight size={16} className="text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link
              href="https://shop.emventory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 rounded-2xl bg-slate-900 text-white font-semibold flex items-center justify-center"
            >
              Start for free
            </Link>

            <Link
              href="https://shop.emventory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 rounded-2xl bg-gray-100 text-gray-800 font-semibold flex items-center justify-center"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;