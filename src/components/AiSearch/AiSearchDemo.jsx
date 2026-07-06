"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FiX, FiSend, FiExternalLink, FiMusic, FiWatch, FiRadio,
  FiBatteryCharging, FiCamera, FiCpu, FiMousePointer, FiHardDrive,
  FiCheckCircle, FiAlertCircle
} from "react-icons/fi";
import { searchProducts } from "/src/data/gadgetCatalog";

const ICONS = {
  music: FiMusic,
  watch: FiWatch,
  radio: FiRadio,
  battery: FiBatteryCharging,
  camera: FiCamera,
  cpu: FiCpu,
  mouse: FiMousePointer,
  drive: FiHardDrive,
};

const SUGGESTIONS = [
  "wireless earbuds under 3000 with noise cancelling",
  "waterproof bluetooth speaker",
  "gaming keyboard with rgb",
  "smartwatch with gps under 4500",
];

function ProductCard({ product }) {
  const Icon = ICONS[product.icon] || FiCpu;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-slate-100/80 transition-all duration-200">
      <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
        <Icon size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-slate-900 truncate">{product.name}</p>
        <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
          {product.features.join(" · ")}
        </p>
        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100">
          <span className="font-mono text-xs font-bold text-blue-600">৳{product.price.toLocaleString()}</span>
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            {product.store} <FiExternalLink size={9} />
          </a>
        </div>
        {!product.inStock && (
          <div className="flex items-center gap-1 mt-1.5 text-[9px] uppercase tracking-wide text-amber-600 font-bold">
            <FiAlertCircle size={10} />
            <span>Out of stock</span>
          </div>
        )}
      </div>
    </div>
  );
}

const AiSearchDemo = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      type: "text",
      text: "Hi! This is a live demo — search this 200-item gadget catalog like you'd talk to a person.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const runSearch = (query) => {
    const trimmed = query.trim();
    if (!trimmed || thinking) return;

    setMessages((prev) => [...prev, { role: "user", type: "text", text: trimmed }]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      const results = searchProducts(trimmed, { limit: 4 });
      setMessages((prev) => [
        ...prev,
        results.length
          ? { role: "ai", type: "results", text: `Found ${results.length} match${results.length > 1 ? "es" : ""}:`, results }
          : { role: "ai", type: "text", text: "Couldn't find a close match — try describing it differently." },
      ]);
      setThinking(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none ${open ? "" : ""}`}
      aria-hidden={!open}
    >
      {/* Light Overlay Scrim */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/20 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      />

      {/* Slide-out Panel container */}
      <div
        className={`absolute top-4 bottom-4 right-4 w-[92vw] max-w-sm md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:h-[80vh] transition-all duration-300 ease-out ${
          open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-8 opacity-0"
        }`}
      >
        <div className="flex flex-col h-full rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/80 overflow-hidden">
          
          {/* Header Block */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">AI Product Search</p>
                <p className="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">Live index · 200 items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="h-7 w-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close demo"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Messages Stream Container */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] ${m.role === "user" ? "" : "w-full"}`}>
                  {m.type === "text" && (
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                        m.role === "user"
                          ? "bg-blue-600 text-white font-normal shadow-sm shadow-blue-600/10 rounded-tr-sm"
                          : "bg-slate-50 border border-slate-100 text-slate-600 rounded-tl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  )}
                  {m.type === "results" && (
                    <div className="space-y-2.5">
                      <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-0.5 flex items-center gap-1.5">
                        <FiCheckCircle className="text-emerald-500" /> {m.text}
                      </p>
                      {m.results.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Neural Response Loader */}
            {thinking && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-duration:0.8s] [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-duration:0.8s] [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-duration:0.8s] [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {/* Context Suggestions Layer */}
            {messages.length === 1 && !thinking && (
              <div className="space-y-2 pt-2">
                <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400 px-0.5 font-bold">Suggested Inputs</p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => runSearch(s)}
                      className="text-left text-[11px] font-sans px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 hover:bg-blue-50/50 hover:border-blue-200 hover:text-blue-600 transition-all cursor-pointer truncate"
                    >
                      "{s}"
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-slate-100 bg-slate-50/50 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type matching requirement metrics..."
              className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors cursor-pointer shadow-sm shadow-blue-600/10"
              aria-label="Send query"
            >
              <FiSend size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiSearchDemo;