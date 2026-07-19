"use client";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from 'react-icons/fi';

const NAV_ITEMS = [
    { label: "Home", id: "hero" },
  { label: "Features", id: "features" },
  { label: "Why AI Search", id: "why-ai-search" },
  { label: "Pricing", id: "pricing" },
  { label: "Benefits", id: "benefits" },
  { label: "FAQ", id: "faq" },
];


const NAVBAR_HEIGHT = 60;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently under the navbar.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Treat a section as "active" once it's just under the fixed navbar,
        // and stop watching a bit before it scrolls fully off-screen.
        rootMargin: `-${NAVBAR_HEIGHT + 8}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`hidden lg:block fixed top-[72px] left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl  shadow-[0_2px_20px_-8px_rgba(0,0,0,0.1)]"
          : "bg-white border-b border-transparent"
      }`}
      style={{ height: NAVBAR_HEIGHT }}
    >
      <nav className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* 1. BRAND LOGO */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-2.5 text-slate-900 font-bold text-base shrink-0 group"
        >
          <img
          src="/images/trolly-logo.png"
          className="h-8 w-auto"
          />
        </a>

        {/* 2. DESKTOP NAV LINKS (Pill-style layout) */}
        <div className="flex items-center gap-1 bg-slate-100/60 border border-slate-200/40 p-1 rounded-full backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-white shadow-sm ring-1 ring-slate-200/40"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* 3. CTA */}
        <a
          href="#pricing"
          onClick={(e) => handleNavClick(e, "pricing")}
          className="inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
        >
          <span>Live Demo</span>
          <FiArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-0.5 transition-transform" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;