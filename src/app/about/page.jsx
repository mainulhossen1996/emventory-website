import Footer from '@/components/Navbar/Footer';
import React from 'react';
import Team from "../../../public/images/Team.png"
import { FiZap, FiMenu, FiHeart } from 'react-icons/fi';
const page = () => {
  return (
    <>
    <div className="bg-zinc-50 text-zinc-950 min-h-screen font-sans selection:bg-blue-500 selection:text-white antialiased">
      
      {/* 1. HERO SECTION */}
<section className="relative overflow-hidden bg-[#F6F7F9]">
  {/* blueprint grid backdrop */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        'linear-gradient(#13151F 1px, transparent 1px), linear-gradient(90deg, #13151F 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    }}
  />
  {/* corner registration marks */}
  <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-zinc-300" />
  <div className="absolute top-6 right-6 w-4 h-4 border-r-2 border-t-2 border-zinc-300" />

  <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-24 text-center">
    <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-zinc-300 bg-white/60">
      <span className="relative flex h-1.5 w-1.5">
        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2454FF] opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2454FF]" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-600">
        Building since 2025
      </span>
    </div>

    <h1 className=" text-4xl sm:text-6xl font-bold tracking-[-0.02em] text-[#13151F] mb-6 leading-[1.08]">
      We're building the <span className="text-[#2454FF]">infrastructure</span> for how digital teams actually work.
    </h1>

    <p className="text-lg sm:text-xl text-[#5B6072] max-w-2xl mx-auto font-normal leading-relaxed">
      Most tools fight the people using them. SaaSProduct removes the distance between deciding
      and doing — so your team ships work, not configuration.
    </p>
  </div>
</section>

{/* 2. MISSION SECTION */}
<section className="bg-[#F6F7F9] border-t border-zinc-200">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
      <div className="md:col-span-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2454FF]">
          Thesis
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#13151F]">
          Why we exist
        </h2>
      </div>

      <div className="md:col-span-3 space-y-8">
        <div className="border-l-2 border-zinc-200 pl-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400">
            Problem
          </span>
          <p className="mt-2 text-base leading-relaxed text-[#5B6072]">
            Software should be invisible — fast, reliable, quietly out of the way. Instead, most
            scaling teams spend more hours managing their stack than doing the creative work it
            was supposed to enable.
          </p>
        </div>

        <div className="border-l-2 border-zinc-200 pl-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400">
            Approach
          </span>
          <p className="mt-2 text-base leading-relaxed text-[#5B6072]">
            We started SaaSProduct in 2025 as a distributed crew of engineers, designers, and
            systems thinkers obsessed with high-performance workflows. We don't just ship
            features — we build the parts of your day you stop noticing.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 3. CORE VALUES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-200/80">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-zinc-300">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6">
              <FiZap className="w-5 h-5 text-zinc-900" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Built for Speed</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Milliseconds matter. We optimize every query and interaction so your workflows happen at the speed of thought. If it feels sluggish, it’s broken.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-zinc-300">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6">
              <FiMenu className="w-5 h-5 text-zinc-900" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Radical Simplicity</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Complexity is lazy. Simplicity is hard work. We ruthlessly cut away UI clutter to ship features that feel immediately obvious from the very first click.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-zinc-300">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6">
              <FiHeart className="w-5 h-5 text-zinc-900" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">User Obsession</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              We build directly in public alongside our users, iterating rapidly based on production signals. Your daily friction dictates our sprint layout.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE NUMBERS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-200/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">99.99%</div>
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">Uptime SLA Guaranteed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">10M+</div>
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">Daily Automated Tasks</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">4.9/5</div>
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">Startup User Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">&lt; 2ms</div>
            <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">Global Response Time</div>
          </div>
        </div>
      </section>

     {/* 5. TEAM SHOWCASE & GRID */}
<section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-200/80 relative overflow-hidden">
  
  {/* Modern background accent - subtle grid alignment */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

  <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
      Meet the Developer
    </h2>
    <p className="text-zinc-600 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
      We are a highly collaborative team of developers, designers, and problem solvers working together under one roof to build the future of SaaS.
    </p>
  </div>

  {/* Premium Group Photo Frame Container */}
  <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] group aspect-[16/9] mb-16 bg-zinc-100">
    
    {/* Specular Top/Inner Light Border Layer */}
    <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/[0.04] z-20" />
    
    <img 
      src="/images/team.png" 
      alt="Our team working together inside the HQ office" 
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] filter contrast-[1.02]"
    />
    
    {/* Subtle vignette layer that eases in on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-black/[0.02] opacity-80 transition-opacity duration-500 group-hover:opacity-100 z-10" />

    {/* Elegant floating location tag - highlighting your shared space */}
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
      <span className="inline-flex items-center gap-1.5 text-zinc-900 text-xs font-medium tracking-wide bg-white/80 backdrop-blur-md border border-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] px-3.5 py-1.5 rounded-full transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        SaaSProduct HQ — Collaborating in real-time.
      </span>
    </div>

    {/* Bottom Left Minimal Text Overlay */}
    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 transform translate-y-1 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
      <p className="text-white/80 text-xs font-mono uppercase tracking-widest">
        Inside the engine room
      </p>
    </div>
  </div>

</section>

{/* 6. PRODUCT ORIGIN: WHAT & WHY */}
<section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-200/80 relative">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
    
    {/* Left Column: What is Emventory? */}
    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider">
        The Core Platform
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
        What is Emventory?
      </h2>
      <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
        Emventory is a unified operations engine engineered to eliminate the fragmentation holding modern physical businesses back. 
      </p>
      <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
        By seamlessly bridging asset tracking, real-time sync systems, and granular workflow automation, it converts raw business logistical complexity into a clean, predictable digital control room.
      </p>
    </div>

    {/* Spacer Column for breathing room on wide viewports */}
    <div className="hidden lg:block lg:col-span-1" />

    {/* Right Column: Why We Made It */}
    <div className="lg:col-span-6 bg-white rounded-2xl border border-zinc-200/60 p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:border-zinc-300 transition-all duration-300">
      
      {/* Decorative gradient corner light */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-blue-500/10" />

      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6 flex items-center gap-3">
        Why We Made It
      </h3>
      
      <div className="space-y-6 text-zinc-600 text-sm sm:text-base leading-relaxed">
        <p className="font-medium text-zinc-900">
          We built it because we lived the exact problem we are solving.
        </p>
        <p>
          Before creating Emventory, we observed teams constantly working out of fractured spreadsheets, broken legacy dashboards, and missing inventory data gaps. Important tracking operations were delayed, and business growth suffered under structural administrative weight.
        </p>
        
        {/* Callout Quote box style inside the reason card */}
        <div className="border-l-2 border-blue-600 pl-4 my-6 py-1 bg-zinc-50/50 rounded-r-lg pr-2">
          <p className="text-zinc-700 italic font-normal text-sm">
            "We realized that businesses weren't failing due to their ideas—they were burning valuable hours fighting their own disconnected internal infrastructure."
          </p>
        </div>

        <p>
          We refused to accept that complicated operations require clunky, slow legacy enterprise architecture. Emventory was built directly from our shared bullpen workspace to give scaling commercial hubs an enterprise-grade toolkit combined with an immediate, responsive user interface.
        </p>
      </div>

    </div>

  </div>
</section>


    </div>
    <Footer/>
    </>
  );
}
export default page;