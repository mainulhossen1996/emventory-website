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

const NavDark = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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

  const products = [
    {
      title: "Trolly Ai",
      desc: "Fastest searching experience",
      href: "/aisearch",
      icon: "/images/trolly-icon.png",
    },
    {
      title: "Amplify",
      desc: "Centralize marketing automation",
      href: "/amplify",
      icon: "/images/amplify-icon.png",
    },

  ];

  const navItemClass = (active) =>
    `transition-colors ${
      active
        ? "text-blue-400"
        : scrolled
        ? "text-white hover:text-blue-400"
        : "text-gray-800 hover:text-blue-500"
    }`;

  return (
    <>
      {/* Navbar */}
      <section className="fixed top-0 left-0 w-full z-[100]">
        <div
          className={`transition-all duration-500 w-full mx-auto h-16 md:h-18 ${
            scrolled
              ? "bg-black shadow-2xl"
              : ""
          }`}
        >
          <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4 md:px-6">
            {/* Logo — two images stacked, opacity crossfades on scroll */}
            <Link href="/home" className="flex items-center">
              <div className="relative w-28 md:w-36 h-8 md:h-10">
                {/* Dark-mode logo: default (page not scrolled) */}
                <Image
                  src="/images/logo.png"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 ${
                    scrolled ? "opacity-0" : "opacity-100"
                  }`}
                  alt="Emventory"
                  priority
                />
                {/* White logo: shown once scrolled, over the black bar */}
                <Image
                  src="/images/logo-white.png"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 ${
                    scrolled ? "opacity-100" : "opacity-0"
                  }`}
                  alt="Emventory"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-[15px]">
              <Link
                href="/features"
                className={navItemClass(isActive("/features"))}
              >
                Features
              </Link>

              {/* Product */}
              <div
                className="relative py-5"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    productsOpen
                      ? "text-blue-400"
                      : scrolled
                      ? "text-white hover:text-blue-400"
                      : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full -left-10 w-80 pt-2 transition-all duration-300 ${
                    productsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-[#0b1120]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-3">
                    {products.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                      >
                        <div className="h-11 w-11  flex items-center justify-center text-blue-400  group-hover:text-white transition-all">
                        <img 
    src={item.icon} 
    alt="Icon" 
    className="w-10 h-10 object-contain" 
  />
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
                      : scrolled
                      ? "text-white hover:text-blue-400"
                      : "text-gray-800 hover:text-blue-500"
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
                className={navItemClass(isActive("/pricing"))}
              >
                Pricing
              </Link>

              <Link
                href="/integrations"
                className={navItemClass(isActive("/integrations"))}
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
    className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
      scrolled
        ? "text-white hover:text-blue-400"
        : "text-gray-900  hover:border-gray-400 hover:bg-gray-50"
    }`}
  >
    Log in
  </Link>

  <Link
    href="https://shop.emventory.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
      scrolled
        ? "bg-white hover:bg-blue-50 text-slate-900"
        : "bg-black hover:bg-gray-800 text-white"
    }`}
  >
    Start Free
  </Link>
</div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-black"
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

              {/* Mobile Products */}
              <div className="overflow-hidden">
                <button
                  onClick={() =>
                    setMobileProductsOpen(!mobileProductsOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-4 "
                >
                  <span className="text-[15px] font-semibold text-gray-800">
                    Products
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    mobileProductsOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-2">
                    {products.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                      >
 
                        <div className="h-9 w-9  flex items-center justify-center  text-blue-600">
                        <img 
    src={item.icon} 
    alt="Icon" 
    className="w-8 h-8 object-contain" 
  />
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

              {/* Mobile Solutions */}
              <div className="overflow-hidden">
                <button
                  onClick={() =>
                    setMobileSolutionsOpen(!mobileSolutionsOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-4"
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

export default NavDark;