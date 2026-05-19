import { useEffect, useRef } from "react";
import { FiSearch, FiMic, FiShoppingBag, FiArrowRight, FiStar } from "react-icons/fi";

const QUERY = "Show me white sneakers under ৳3000";
const TYPE_SPEED = 48;
const LOAD_DURATION = 1100;

const products = [
  {
    id: 1,
    icon: <FiShoppingBag size={26} />,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    badge: "AI Pick",
    rating: 4.9,
    name: "Premium Runner X",
    sub: "Lightweight running sneakers · White",
    price: "৳2,499",
    match: "98% match",
    matchBg: "#EAF3DE",
    matchColor: "#27500A",
  },
  {
    id: 2,
    icon: <FiShoppingBag size={26} />,
    iconBg: "#EAF3DE",
    iconColor: "#3B6D11",
    badge: null,
    rating: 4.7,
    name: "AeroStep Lite",
    sub: "Breathable mesh · White/Grey",
    price: "৳2,890",
    match: "91% match",
    matchBg: "#EAF3DE",
    matchColor: "#27500A",
  },
  {
    id: 3,
    icon: <FiShoppingBag size={26} />,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    badge: null,
    rating: 4.5,
    name: "CloudWalk Pro",
    sub: "Cushioned sole · All-white",
    price: "৳2,299",
    match: "87% match",
    matchBg: "#EAF3DE",
    matchColor: "#27500A",
  },
];

export default function AISearchSection() {
  const searchTextRef = useRef(null);
  const cursorRef = useRef(null);
  const loadingBarRef = useRef(null);
  const loadingFillRef = useRef(null);
  const skelRef = useRef(null);
  const resultsLabelRef = useRef(null);
  const cardRefs = useRef([]);
  const searchBarRef = useRef(null);
  const rafRef = useRef(null);
  const timerRefs = useRef([]);

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
    if (loadingFillRef.current) loadingFillRef.current.style.width = "0%";
    if (loadingBarRef.current) loadingBarRef.current.style.opacity = "0";
    if (skelRef.current) skelRef.current.style.opacity = "0";
    if (resultsLabelRef.current) resultsLabelRef.current.style.opacity = "0";
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "";
    cardRefs.current.forEach((c) => {
      if (c) { c.style.opacity = "0"; c.style.transform = "translateY(12px)"; }
    });
  }

  function typeText(cb) {
    let i = 0;
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "#378ADD";
    const iv = setInterval(() => {
      if (searchTextRef.current) searchTextRef.current.textContent = QUERY.slice(0, i);
      i++;
      if (i > QUERY.length) {
        clearInterval(iv);
        addTimer(cb, 300);
      }
    }, TYPE_SPEED);
  }

  function runLoader(cb) {
    if (loadingBarRef.current) loadingBarRef.current.style.opacity = "1";
    if (skelRef.current) skelRef.current.style.opacity = "1";
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / LOAD_DURATION, 1);
      if (loadingFillRef.current) loadingFillRef.current.style.width = `${p * 100}%`;
      if (p < 1) { rafRef.current = requestAnimationFrame(step); }
      else { addTimer(cb, 100); }
    }
    rafRef.current = requestAnimationFrame(step);
  }

  function showResults() {
    if (loadingBarRef.current) loadingBarRef.current.style.opacity = "0";
    if (skelRef.current) skelRef.current.style.opacity = "0";
    if (searchBarRef.current) searchBarRef.current.style.borderColor = "";
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (resultsLabelRef.current) resultsLabelRef.current.style.opacity = "1";

    cardRefs.current.forEach((c, i) => {
      addTimer(() => {
        if (c) { c.style.opacity = "1"; c.style.transform = "translateY(0)"; }
      }, 80 + i * 160);
    });
  }

  function runSequence() {
    reset();
    addTimer(() => {
      typeText(() => runLoader(() => showResults()));
    }, 600);
  }

  useEffect(() => {
    runSequence();
    const loop = setInterval(() => {
      clearTimers();
      runSequence();
    }, 7000);
    return () => { clearTimers(); clearInterval(loop); };
  }, []);

  return (
    <div className="relative">

      {/* Floating Badge */}


      {/* Main Card */}
      <div className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-xl shadow-slate-100/60">
      <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-4 ">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-sm font-semibold text-slate-700">emventory AI Assistant</span>
      </div>

        {/* Search Bar */}
        <div
          ref={searchBarRef}
          className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-2"
          style={{ transition: "border-color 0.3s" }}
        >
          <FiSearch size={18} className="text-slate-400 flex-shrink-0" />
          <div className="flex-1 flex items-center min-h-[22px]">
            <span ref={searchTextRef} className="text-sm text-slate-700" />
            <span
              ref={cursorRef}
              className="inline-block w-[2px] h-[16px] bg-blue-500 ml-[1px] align-middle"
              style={{ animation: "blink 0.7s step-end infinite" }}
            />
          </div>
          <button className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <FiMic size={16} />
          </button>
        </div>

        {/* Loading Bar */}
        <div
          ref={loadingBarRef}
          className="h-[2px] rounded-full bg-slate-100 overflow-hidden mb-2"
          style={{ opacity: 0, transition: "opacity 0.2s" }}
        >
          <div
            ref={loadingFillRef}
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "0%", transition: "width 0.05s linear" }}
          />
        </div>

        {/* Results Label */}
        <div
          ref={resultsLabelRef}
          className="flex items-center gap-2 text-xs text-slate-400 mb-3"
          style={{ opacity: 0, transition: "opacity 0.3s" }}
        >
          <span className="text-blue-500">✦</span>
          3 results found
        </div>


        {/* Product Cards */}
        {products.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex items-center gap-4 border border-slate-100 rounded-2xl p-3 mb-3 cursor-pointer hover:bg-slate-50"
            style={{
              opacity: 0,
              transform: "translateY(12px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, background 0.2s",
            }}
          >
            {/* Icon */}
            <div
              className="h-16 w-16 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: p.iconBg, color: p.iconColor }}
            >
              {p.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">

              <h4 className="text-sm font-bold text-slate-900 leading-tight">{p.name}</h4>
              <p className="text-xs text-slate-400 mt-0.5 mb-2">{p.sub}</p>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-slate-900">{p.price}</span>
                <span
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                  style={{ background: p.matchBg, color: p.matchColor }}
                >
                  {p.match}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <button className="h-10 w-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 hover:text-blue-500 hover:border-blue-100 flex-shrink-0 transition-colors">
              <FiArrowRight size={16} />
            </button>
          </div>
        ))}

        {/* Stats Row */}
        <div className="grid grid-cols-3 pt-4 mt-2 border-t border-slate-100">
          {[["0.2s", "Search Response"], ["92%", "Match Accuracy"], ["24/7", "AI Assistance"]].map(([v, l], i) => (
            <div key={l} className={`text-center ${i > 0 ? "border-l border-slate-100" : ""}`}>
              <p className="text-xl font-bold text-slate-900">{v}</p>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -bottom-8 left-8 w-36 h-36 bg-blue-200/20 blur-3xl rounded-full pointer-events-none" />

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}