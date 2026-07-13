"use client";
import React, { useEffect, useRef } from "react";
import { Mic, Search, ArrowRight, Zap, Sparkles, ScanSearch } from "lucide-react";
import AiSearchPreview from "./AiSearch";

const queries = [
  "white sneakers under ৳3,000",
  "cotton saree for a summer wedding",
  "gift for dad, budget ৳2,000",
  "waterproof hiking boots, size 42",
  "something that matches my blue jacket",
  "office wear, not too formal",
  "budget phone with a good camera",
];

const features = [
  { title: "Voice search", desc: "Speak naturally, in any accent", icon: <Mic size={16} /> },
  { title: "Smart matching", desc: "Understands intent, not just keywords", icon: <Zap size={16} /> },
  { title: "Visual discovery", desc: "Style, color and mood-aware results", icon: <ScanSearch size={16} /> },
];

const PARTICLE_COLORS = ["#2F5DFA", "#38BDF8", "#7C9BFF", "#1339B0"];

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let particles = [];
    let width = 0;
    let height = 0;

    function sizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticles() {
      const count = Math.round((width * height) / 16000);
      particles = Array.from({ length: Math.min(Math.max(count, 24), 70) }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        speed: Math.random() * 0.25 + 0.08,
        drift: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.006,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      }));
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        const opacity = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(time * p.twinkleSpeed + p.phase));
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reduced) {
          p.y -= p.speed;
          p.x += p.drift;
          if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
          if (p.x < -4) p.x = width + 4;
          if (p.x > width + 4) p.x = -4;
        }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    sizeCanvas();
    makeParticles();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => { sizeCanvas(); makeParticles(); });
    ro.observe(canvas.parentElement);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

const AiCommerce = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, #F8F9FB 0%, #EEF0F3 45%, #F8F9FB 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
        .esf-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .esf-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        @keyframes esf-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .esf-reveal { opacity: 0; animation: esf-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .esf-d1 { animation-delay: 0.05s; }
        .esf-d2 { animation-delay: 0.15s; }
        .esf-d3 { animation-delay: 0.25s; }
        .esf-d4 { animation-delay: 0.4s; }
        .esf-d5 { animation-delay: 0.55s; }
        .esf-d6 { animation-delay: 0.7s; }

        @keyframes esf-blob-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.1); } }
        @keyframes esf-blob-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-25px,25px) scale(1.06); } }
        @keyframes esf-blob-3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,15px) scale(1.08); } }
        .esf-blob-1 { animation: esf-blob-1 15s ease-in-out infinite; }
        .esf-blob-2 { animation: esf-blob-2 18s ease-in-out infinite; }
        .esf-blob-3 { animation: esf-blob-3 21s ease-in-out infinite; }

        @keyframes esf-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .esf-track { animation: esf-marquee 32s linear infinite; }
        .esf-marquee-wrap:hover .esf-track { animation-play-state: paused; }

        .esf-shine {
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 0.8s ease;
        }
        .esf-cta:hover .esf-shine { transform: translateX(120%); }

        @media (prefers-reduced-motion: reduce) {
          .esf-reveal { animation: none; opacity: 1; }
          .esf-blob-1, .esf-blob-2, .esf-blob-3, .esf-track { animation: none; }
          .esf-shine { display: none; }
        }
      `}</style>

      {/* layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* soft top spotlight */}
        <div
          className="absolute inset-x-0 -top-1/3 h-[140%]"
          style={{ background: "radial-gradient(ellipse 60% 45% at 50% 20%, rgba(100,116,139,0.14), transparent 65%)" }}
        />
        {/* fine grid lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,116,139,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.09) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 25%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 25%, black 0%, transparent 75%)",
          }}
        />
        {/* mesh blobs */}
        <div
          className="esf-blob-1 absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(148,163,184,0.28), transparent 70%)" }}
        />
        <div
          className="esf-blob-2 absolute bottom-0 -left-16 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(100,116,139,0.20), transparent 70%)" }}
        />
        <div
          className="esf-blob-3 absolute top-1/3 left-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(71,85,105,0.14), transparent 70%)" }}
        />
        {/* drifting particles */}
        <ParticleField />
      </div>

      <div className="relative max-w-7xl mx-auto p-10">
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div
              className="esf-reveal esf-d1 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{ background: "#EAF0FF", borderColor: "#D3E0FF", color: "#2F5DFA" }}
            >
              <Sparkles size={12} />
              AI Commerce
            </div>

            <h2 className="esf-reveal esf-d2 esf-display text-3xl lg:text-5xl font-medium text-slate-900 leading-[1.15] mb-6">
              Search products
              <br />
              the way humans
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #2F5DFA, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                actually speak.
              </span>
            </h2>

            <p className="esf-reveal esf-d3 text-lg text-slate-500 leading-relaxed max-w-xl mb-9">
              Shoppers type or say what they want in plain language — style,
              color, budget, occasion — and the AI reads intent, not just
              keywords, to surface the closest match instantly.
            </p>

            {/* Feature list */}
            <div className="esf-reveal esf-d4 flex flex-col gap-3 mb-9">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white border border-slate-100 hover:border-[#C7D9FF] hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-100/60 transition-all duration-300"
                >
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "#EAF0FF", color: "#2F5DFA" }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 leading-tight">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="esf-reveal esf-d5 flex items-center gap-3 mb-10">
              <button
                className="esf-cta group relative overflow-hidden text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm shadow-lg cursor-pointer"
                style={{ background: "linear-gradient(90deg, #2F5DFA, #1339B0)", boxShadow: "0 12px 24px -8px rgba(47,93,250,0.5)" }}
              >
                <span className="esf-shine" />
                <span className="relative">Try AI search</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3.5 rounded-full font-medium text-sm text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all cursor-pointer">
                See how it works
              </button>
            </div>

            {/* Marquee of real natural-language queries */}
            <div className="esf-reveal esf-d6 esf-marquee-wrap relative overflow-hidden -mx-1 px-1 py-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10" style={{ background: "linear-gradient(90deg, #F8F9FB, transparent)" }} />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10" style={{ background: "linear-gradient(270deg, #F8F9FB, transparent)" }} />
              <div className="esf-track flex gap-2.5 w-max">
                {[...queries, ...queries].map((q, i) => (
                  <span
                    key={i}
                    className="esf-mono inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-100 bg-white px-3.5 py-2 text-[12px] text-slate-500"
                  >
                    <Search size={12} className="flex-shrink-0" style={{ color: "#2F5DFA" }} />
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="esf-reveal esf-d3">
            <AiSearchPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCommerce;