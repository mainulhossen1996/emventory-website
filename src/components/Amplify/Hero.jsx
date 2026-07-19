import React from 'react';
import { FiArrowRight, FiTrendingUp, FiZap } from 'react-icons/fi';

// --- Waveform background: generated, not hand-written, so the count/frequency stay easy to tune ---
const WAVE_WIDTH = 1600; // 2x the tile unit (800) so a -50% drift loops seamlessly
const WAVE_HEIGHT = 900;
const WAVE_COUNT = 20;
// All divide 800 evenly -> every line tiles seamlessly when translated by -50% of its own width.
const WAVE_PERIODS = [200, 160, 100, 80, 50, 40];
const WAVE_COLORS = ['#60a5fa', '#3b82f6', '#818cf8', '#93c5fd', '#6366f1'];

const makeWavePath = (period, amplitude, baseline) => {
  let d = `M0,${baseline}`;
  for (let x0 = 0; x0 < WAVE_WIDTH; x0 += period) {
    const quarter = x0 + period * 0.25;
    const threeQuarter = x0 + period * 0.75;
    const end = x0 + period;
    d += ` C${quarter},${baseline - amplitude} ${threeQuarter},${baseline + amplitude} ${end},${baseline}`;
  }
  return d;
};

const WAVES = Array.from({ length: WAVE_COUNT }, (_, i) => {
  const baseline = 25 + i * ((WAVE_HEIGHT - 50) / (WAVE_COUNT - 1)); // evenly spread top to bottom
  const period = WAVE_PERIODS[i % WAVE_PERIODS.length];
  const amplitude = 8 + (i % 4) * 3;
  const duration = 14 + ((i * 7) % 30); // 14s–44s, so lines drift at different speeds (parallax)
  return {
    id: i,
    d: makeWavePath(period, amplitude, baseline),
    duration,
    reverse: i % 2 === 0,
    color: WAVE_COLORS[i % WAVE_COLORS.length],
    opacity: 0.12 + (i % 5) * 0.025,
  };
});

export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 lg:pt-24 pb-20 px-6 overflow-hidden bg-[#030712]">
    {/* Local keyframes: horizontal wave drift (parallax, staggered speeds/directions) + floating metric cards */}
    <style>{`
      @keyframes wave-drift { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    `}</style>

    {/* Ambient background: 20 full-bleed floating waveform lines, fading out at the top/bottom edges */}
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    >
      {WAVES.map((wave) => (
        <svg
          key={wave.id}
          className="absolute inset-0 w-[200%] h-full"
          style={{ animation: `wave-drift ${wave.duration}s linear infinite ${wave.reverse ? 'reverse' : ''}` }}
          viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
          preserveAspectRatio="none"
          fill="none"
        >
          <path d={wave.d} stroke={wave.color} strokeWidth="1.1" strokeOpacity={wave.opacity} />
        </svg>
      ))}
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 right-[10%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

    <div className="mx-auto max-w-4xl text-center relative z-10">
      {/* Eyebrow badge with a live-signal dot instead of a whole-badge pulse */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-8">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
        </span>
        Introducing Smart Engine v2.0
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-white">
        The automated marketing engine built for{' '}
        <span className="font-semibold bg-gradient-to-r from-blue-400 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
          Hyper-Growth
        </span>
      </h1>
      <p className="mt-6 text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
        Stop guessing your audience triggers. Sync ecosystem behavioral events automatically to reach customers where they convert, when they want to purchase.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

        <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm px-7 py-3.5 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-900 hover:text-white hover:border-zinc-700 cursor-pointer">
          Launching This October
        </button>
      </div>


    </div>

    {/* Signature element: live-readout cards echoing the engine's own metrics (see Metrics section) */}
    <div
      className="hidden lg:flex absolute left-[6%] top-[38%] items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-4 py-3 shadow-xl shadow-black/40 z-10 [animation:hero-float_7s_ease-in-out_infinite]"
    >
      <span className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
        <FiTrendingUp size={14} />
      </span>
      <div className="text-left">
        <p className="text-sm font-semibold text-white leading-none">3.2x</p>
        <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Avg ROI Increase</p>
      </div>
    </div>

    <div
      className="hidden lg:flex absolute right-[8%] bottom-[22%] items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-4 py-3 shadow-xl shadow-black/40 z-10 [animation:hero-float_8s_ease-in-out_infinite] [animation-delay:1.5s]"
    >
      <span className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
        <FiZap size={14} />
      </span>
      <div className="text-left">
        <p className="text-sm font-semibold text-white leading-none">&lt; 45ms</p>
        <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Pipeline Ingestion</p>
      </div>
    </div>
  </section>
);

export default Hero;