"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiCheckCircle, FiGlobe, FiZap, FiSearch, FiMic, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import helmet from "../../../public/images/helmet.png";

function ParticleField({ sectionRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrame;
    let width, height;

    const PARTICLE_COUNT = 70;

    function resize() {
      width = section.offsetWidth;
      height = section.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        speedY: Math.random() * 0.25 + 0.05,
        drift: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.25 + 0.08,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.drift;
        if (p.y < -5) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Dark, low-alpha dots read as dust motes on a light background —
        // the pale blue used on dark would be invisible here.
        ctx.fillStyle = `rgba(30, 41, 82, ${p.alpha})`;
        ctx.fill();
      });
      animationFrame = requestAnimationFrame(tick);
    }

    resize();
    initParticles();
    tick();

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}

function GrainOverlay() {
  return (
    // mix-blend-multiply (not overlay) is the correct blend mode for grain
    // on a light background — overlay would wash out to near-invisible here.
    <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.035]">
      <svg className="w-full h-full">
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
    </div>
  );
}

const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-[#F5F7FC] to-[#EEF1F9]"
    >
      {/* Floating particle field */}
      <ParticleField sectionRef={sectionRef} />

      {/* Ambient depth blobs (static) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-300/25 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Film grain */}
      <GrainOverlay />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* ── Top header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-8 shadow-sm">
            <FiZap className="fill-current" size={14} />
            <span>The All-in-One E-commerce OS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-[1.3] mb-6">
            Sell Anywhere, Manage Everything, <br />
            Without the Stress
            <span className="text-blue-600">.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-normal mb-10 leading-relaxed">
            Take full control of your supply chain, payments, and delivery from anywhere — all through one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-200 cursor-pointer text-sm">
              Start Your Store Free
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 rounded-full font-medium text-sm text-gray-600 border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer">
              See How It Works
            </button>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left big card */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6">
                  Enterprise Commerce
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold leading-snug tracking-tight text-gray-900 max-w-lg">
                  Scale your business with a unified commerce ecosystem
                </h2>

                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-gray-500">
                  Manage POS, e-commerce, inventory, analytics, payments, and customer experience from one intelligent platform.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Inventory Sync", "Multi-store POS", "Smart Analytics", "Auto Restock"].map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"
                  >
                    <FiCheckCircle size={11} className="text-emerald-500" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right grid — 2 col */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Integrations card */}
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-5">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-50 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 border border-blue-100 mb-5">
                  <FiGlobe size={22} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">100+ Integrations</h3>
                <p className="mt-2.5 text-[12px] font-light leading-relaxed text-gray-500">
                  Connect payment gateways, delivery systems, accounting tools, and marketing platforms seamlessly.
                </p>

                <div className="mt-5 flex gap-2 flex-wrap">
                  {["SSL", "bKash", "Pathao", "PayStation"].map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-lg"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
              </div>
            </div>

            {/* Product card — kept as the vivid blue accent against the light page */}
            <div className="rounded-[32px] bg-gradient-to-br from-blue-500 to-blue-700 p-5 relative overflow-hidden group shadow-lg shadow-blue-200">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
                <FiSearch size={13} className="text-white/70 flex-shrink-0" />
                <p className="flex-1 text-xs text-white/80 font-light">"red cycle helmet"</p>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-600 flex-shrink-0">
                  <FiMic size={12} />
                </div>
              </div>

              <div className="relative z-10 mt-4">
                <p className="text-[11px] text-blue-200 font-medium uppercase tracking-widest">Top result</p>
                <p className="text-xl font-bold text-white mt-1">৳1,250.00</p>
                <p className="text-[11px] text-blue-200 mt-0.5">Pro Cycle Helmet · Red</p>
                <button className="mt-3 flex items-center gap-1.5 px-3.5 py-2 bg-white text-blue-600 rounded-full text-xs font-semibold hover:bg-blue-50 transition-all cursor-pointer shadow-sm">
                  <FiShoppingCart size={12} />
                  Add to Cart
                </button>
              </div>

              <div className="absolute -right-3 -bottom-3 w-36 h-36 group-hover:-translate-y-2 transition-transform duration-500">
                <Image src={helmet} alt="Helmet" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;