"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg";
import { ChevronDown, ShoppingBag, Globe, Shield } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { title: "Retail POS", desc: "Fastest checkout for shops", href: "/pos", icon: <ShoppingBag size={18} /> },
    { title: "Ecommerce", desc: "Sell online everywhere", href: "/ecommerce", icon: <Globe size={18} /> },
    { title: "Enterprise", desc: "Multi-branch management", href: "/enterprise", icon: <Shield size={18} /> },
  ];

  return (
    <>
      <section className="fixed top-0 left-0 w-full z-[100] px-4 md:px-0">
        <div
          className={`transition-all duration-500 
          ${scrolled ? "bg-black h-16" : "bg-transparent h-20"}`}
        >
          <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto">
            {/* Logo */}
            <Link href="/home">
              <div className="w-28 md:w-36">
                <Image
                  src="/images/logo-white.png"
                  width={400}
                  height={400}
                  className="h-auto w-full"
                  alt="Emventory"
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-medium text-sm lg:text-[15px]">
              <Link
                href="/services"
                className={`transition-colors ${isActive("/features") ? "text-blue-500" : "text-white hover:text-blue-400"}`}
              >
                Features
              </Link>

              {/* Solutions Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button className={`flex items-center gap-1 transition-colors ${solutionsOpen ? "text-blue-400" : "text-white"}`}>
                  Solutions <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full -left-10 w-72 pt-2 transition-all duration-300 ${solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                  <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                    {solutions.map((item, idx) => (
                      <Link key={idx} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                        <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-white text-[13px] font-bold">{item.title}</p>
                          <p className="text-slate-400 text-[10px]">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                className={`transition-colors ${isActive("/pricing") ? "text-blue-500" : "text-white hover:text-blue-400"}`}
              >
                Pricing
              </Link>
              <Link
                href="/integrations"
                className={`transition-colors ${isActive("/integrations") ? "text-blue-500" : "text-white hover:text-blue-400"}`}
              >
                Integrations
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
  <Link
    href="https://shop.emventory.com/"
    className="text-white text-sm font-bold hover:text-blue-400 transition-colors"
    target="_blank"
rel="noopener noreferrer"
  >
    Log in
  </Link>

  <Link
    href="https://shop.emventory.com/"
    className="bg-white px-6 py-2.5 rounded-full hover:bg-blue-50 transition-all text-slate-900 text-sm font-bold tracking-wider"
    target="_blank"
rel="noopener noreferrer"
  >
    Start for free
  </Link>
</div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-white p-2">
                <CgMenuLeftAlt size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-out */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[200] p-8 transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-10">
          <Image src="/images/logo.png" width={120} height={40} alt="Logo" />
          <button onClick={() => setMobileMenuOpen(false)} className="bg-slate-100 p-2 rounded-full">
            <CgMenuRightAlt size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Menu</p>
          <Link href="/features" className="text-xl font-bold text-slate-900">Features</Link>
          
          <div className="space-y-4">
             <p className="text-xl font-bold text-slate-900">Solutions</p>
             <div className="pl-4 flex flex-col gap-4 border-l border-slate-100">
                {solutions.map((s, i) => (
                  <Link key={i} href={s.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-500 font-medium">{s.title}</Link>
                ))}
             </div>
          </div>

          <Link href="/pricing" className="text-xl font-bold text-slate-900">Pricing</Link>
          <Link href="/integrations" className="text-xl font-bold text-slate-900">Integrations</Link>
          
          <div className="pt-10 mt-10 border-t border-slate-100 space-y-4">
             <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold">Start for free</button>
             <button className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold">Log in</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;