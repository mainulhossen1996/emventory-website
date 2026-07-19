"use client";
import { useEffect, useRef, useState } from "react";
import { Search, Mic, ShoppingBag, ArrowRight, Sparkles, BadgeCheck } from "lucide-react";

const QUERY = "Show me white sneakers under ৳3000";
const TYPE_SPEED = 42;
const CATALOG_SIZE = 14208;

const chips = [
  { id: "cat", label: "category", value: "sneakers", bg: "#EAF0FF", fg: "#2F5DFA" },
  { id: "col", label: "color", value: "white", bg: "#F1F3F9", fg: "#5B6478" },
  { id: "prc", label: "price", value: "under ৳3,000", bg: "#DCE7FF", fg: "#1339B0" },
];

const products = [
  {
    id: 1,
    rank: "01",
    top: true,
    name: "NovaStride Elite",
    sub: "Premium leather · Triple White",
    price: "৳2,499",
    match: 98,
    imgUrl: "/images/pr1.png"
  },
  {
    id: 2,
    rank: "02",
    top: false,
    name: "Urban Pulse",
    sub: "Mesh & suede · White/Brown",
    price: "৳2,890",
    match: 91,
    imgUrl: "/images/pr2.png"
  },
  {
    id: 3,
    rank: "03",
    top: false,
    name: "Summit Court",
    sub: "Retro court style · White/Stone",
    price: "৳2,299",
    match: 87,
    imgUrl: "/images/pr3.png"
  }
];

const RING_R = 15;
const RING_C = 2 * Math.PI * RING_R;

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

export default function AiSearchPreview() {
  const searchTextRef = useRef(null);
  const cursorRef = useRef(null);
  const searchBarRef = useRef(null);
  const chipRefs = useRef([]);
  const scanRowRef = useRef(null);
  const scanFillRef = useRef(null);
  const scanCountRef = useRef(null);
  const resultsLabelRef = useRef(null);
  const cardRefs = useRef([]);
  const ringRefs = useRef([]);

  const rafRef = useRef(null);
  const timerRefs = useRef([]);

  const wrapRef = useRef(null);
  const tiltRef = useRef(null);
  const reducedMotionRef = useRef(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function handleMouseMove(e) {
    if (reducedMotionRef.current || !tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 10;
    const rx = (0.5 - py) * 8;
    setTilt({ rx, ry });
  }
  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  function clearTimers() {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }
  function addTimer(fn, ms) {
    const id = setTimeout(fn, ms);
    timerRefs.current.push(id);
    return id;
  }

  function reset() {
    if (searchTextRef.current) searchTextRef.current.textContent = "";
    if (cursorRef.current) cursorRef.current.style.opacity = "1";
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "";
    chipRefs.current.forEach((c) => {
      if (c) { c.style.opacity = "0"; c.style.transform = "scale(0.85) translateY(4px)"; }
    });
    if (scanRowRef.current) scanRowRef.current.style.opacity = "0";
    if (scanFillRef.current) scanFillRef.current.style.width = "0%";
    if (scanCountRef.current) scanCountRef.current.textContent = CATALOG_SIZE.toLocaleString();
    if (resultsLabelRef.current) resultsLabelRef.current.style.opacity = "0";
    cardRefs.current.forEach((c) => {
      if (c) { c.style.opacity = "0"; c.style.transform = "translateY(12px)"; }
    });
    ringRefs.current.forEach((r) => { if (r) r.style.strokeDashoffset = String(RING_C); });
  }

  function typeText(cb) {
    let i = 0;
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "#2F5DFA";
    const iv = setInterval(() => {
      if (searchTextRef.current) searchTextRef.current.textContent = QUERY.slice(0, i);
      i++;
      if (i > QUERY.length) { clearInterval(iv); addTimer(cb, 260); }
    }, TYPE_SPEED);
  }

  function revealChips(cb) {
    chipRefs.current.forEach((c, i) => {
      addTimer(() => {
        if (c) { c.style.opacity = "1"; c.style.transform = "scale(1) translateY(0)"; }
      }, i * 130);
    });
    addTimer(cb, chipRefs.current.length * 130 + 450);
  }

  function runScan(cb) {
    if (scanRowRef.current) scanRowRef.current.style.opacity = "1";
    const duration = 900;
    const target = products.length;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = easeOutQuad(t);
      if (scanFillRef.current) scanFillRef.current.style.width = `${eased * 100}%`;
      if (scanCountRef.current) {
        const current = Math.round(CATALOG_SIZE - (CATALOG_SIZE - target) * eased);
        scanCountRef.current.textContent = current.toLocaleString();
      }
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else addTimer(cb, 150);
    }
    rafRef.current = requestAnimationFrame(step);
  }

  function showResults() {
    if (scanRowRef.current) scanRowRef.current.style.opacity = "0";
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "";
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (resultsLabelRef.current) resultsLabelRef.current.style.opacity = "1";
    cardRefs.current.forEach((c, i) => {
      addTimer(() => {
        if (c) { c.style.opacity = "1"; c.style.transform = "translateY(0)"; }
        const ring = ringRefs.current[i];
        const pct = products[i].match;
        if (ring) addTimer(() => { ring.style.strokeDashoffset = String(RING_C * (1 - pct / 100)); }, 60);
      }, 90 + i * 150);
    });
  }

  function runSequence() {
    reset();
    addTimer(() => { typeText(() => revealChips(() => runScan(() => showResults()))); }, 550);
  }

  useEffect(() => {
    runSequence();
    const loop = setInterval(() => { clearTimers(); runSequence(); }, 8800);
    return () => { clearTimers(); clearInterval(loop); };
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full mx-auto flex justify-center py-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        @keyframes esf-blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes esf-glow-spin { to { transform: rotate(360deg); } }
        @keyframes esf-float-a { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-8px) rotate(-4deg); } }
        @keyframes esf-float-b { 0%,100% { transform: translateY(0) rotate(3deg); } 50% { transform: translateY(9px) rotate(3deg); } }
        .esf-eyebrow { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .esf-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .esf-badge-a { animation: esf-float-a 4.5s ease-in-out infinite; }
        .esf-badge-b { animation: esf-float-b 5.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .esf-badge-a, .esf-badge-b { animation: none; }
        }
      `}</style>

      {/* ambient glow behind everything */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(47,93,250,0.16), transparent 70%)" }}
      />

      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-md"
        style={{ perspective: "1200px" }}
      >
        {/* rotating gradient glow border */}
        <div className="absolute -inset-[3px] rounded-[28px] overflow-hidden pointer-events-none opacity-70">
          <div
            className="absolute inset-[-50%]"
            style={{
              background: "conic-gradient(from 0deg, #2F5DFA, #8FB2FF, #DCE7FF, #2F5DFA)",
              animation: "esf-glow-spin 7s linear infinite",
            }}
          />
        </div>

        {/* Floating callouts */}
        <div
          className="esf-badge-a absolute -right-4 -top-5 z-20 hidden sm:flex items-center gap-1.5 bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-lg shadow-slate-200/70"
        >
          <BadgeCheck size={14} style={{ color: "#2F5DFA" }} />
          <span className="text-[11px] font-semibold text-slate-700">98% intent match</span>
        </div>
        <div
          className="esf-badge-b absolute -left-5 bottom-16 z-20 hidden sm:flex items-center gap-1.5 bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-lg shadow-slate-200/70"
        >
          <Mic size={14} style={{ color: "#2F5DFA" }} />
          <span className="text-[11px] font-semibold text-slate-700">Voice search ready</span>
        </div>

        {/* Card */}
        <div
          className="relative bg-white rounded-[26px] shadow-xl shadow-slate-200/70 overflow-hidden"
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 0.15s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/60">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="esf-mono ml-3 text-[11px] text-slate-400 truncate">Trolly Ai</span>
          </div>

          <div className="p-4">

            {/* Search bar */}
            <div
              ref={searchBarRef}
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-3 py-2 mb-3"
              style={{ transition: "border-color 0.3s" }}
            >
              <Search size={18} className="text-slate-400 flex-shrink-0" />
              <div className="flex-1 flex items-center min-h-[22px]">
                <span ref={searchTextRef} className="text-sm text-slate-700" />
                <span
                  ref={cursorRef}
                  className="inline-block w-[2px] h-[16px] ml-[1px] align-middle"
                  style={{ background: "#2F5DFA", animation: "esf-blink 0.7s step-end infinite" }}
                />
              </div>
              <button
                className="h-7 w-7 rounded-full text-white flex items-center justify-center flex-shrink-0"
                style={{ background: "#2F5DFA" }}
              >
                <Mic size={12} />
              </button>
            </div>

            {/* Parsed intent chips */}
            <div className="flex items-center gap-1.5 mb-3 flex-wrap min-h-[26px]">
              {chips.map((c, i) => (
                <span
                  key={c.id}
                  ref={(el) => (chipRefs.current[i] = el)}
                  className="esf-mono inline-flex items-baseline gap-1 rounded-md px-2 py-1 text-[11px] leading-none"
                  style={{
                    background: c.bg,
                    color: c.fg,
                    opacity: 0,
                    transform: "scale(0.85) translateY(4px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <span className="uppercase tracking-wide opacity-60 text-[9px]">{c.label}</span>
                  {c.value}
                </span>
              ))}
            </div>

           

            {/* Results label */}
            <div ref={resultsLabelRef} className="flex items-center gap-2 text-xs text-slate-400 mb-3" style={{ opacity: 0, transition: "opacity 0.3s" }}>
              <span style={{ color: "#2F5DFA" }}>✦</span>
              {products.length} matches, ranked by fit
            </div>
<div className="mb-20">
            {/* Product cards */}
            {products.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className="flex items-center gap-3 border border-slate-100 rounded-2xl p-2 mb-2.5 cursor-pointer hover:bg-slate-50"
                style={{ opacity: 0, transform: "translateY(12px)", transition: "opacity 0.4s ease, transform 0.4s ease, background 0.2s" }}
              >
               <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-100">
  <img 
    src={p.imgUrl} 
    alt={p.name} 
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
  />
</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-medium text-slate-900 leading-tight truncate">{p.name}</h4>
                    {p.top && (
                      <span
                        className="esf-eyebrow text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0 text-white"
                        style={{ background: "#2F5DFA" }}
                      >
                        Top match
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-normal text-slate-400 mt-0.5 mb-1.5 truncate">{p.sub}</p>
                  <span className="text-[15px] font-medium text-slate-900">{p.price}</span>
                </div>
                <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90">
                    <circle cx="20" cy="20" r={RING_R} fill="none" stroke="#EEF1F8" strokeWidth="3" />
                    <circle
                      ref={(el) => (ringRefs.current[i] = el)}
                      cx="20" cy="20" r={RING_R} fill="none"
                      stroke={p.top ? "#2F5DFA" : "#8FA8FF"}
                      strokeWidth="3" strokeLinecap="round"
                      strokeDasharray={RING_C} strokeDashoffset={RING_C}
                      style={{ transition: "stroke-dashoffset 0.6s ease" }}
                    />
                  </svg>
                  <span className="absolute esf-mono text-[10px] font-medium text-slate-700">{p.match}</span>
                </div>
              </div>
            ))}
</div>


            <div className="grid grid-cols-3 pt-3 mt-1 border-t border-slate-100">
              {[["0.2s", "Search response"], ["92%", "Match accuracy"], ["24/7", "AI assistance"]].map(([v, l], i) => (
                <div key={l} className={`text-center ${i > 0 ? "border-l border-slate-100" : ""}`}>
                  <p className="esf-eyebrow text-lg font-semibold text-slate-900">{v}</p>
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}