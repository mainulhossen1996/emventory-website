"use client";

import { useState } from "react";
import { FiSearch, FiBookOpen, FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { DOCUMENTATION_SECTIONS, CONTENT_DATABASE } from "./FeatureData";
import { GuideContent } from "./GuideContent";

export function FeatureGuide() {
  const [activeGuideId, setActiveGuideId] = useState("registration");
  const [searchQuery, setSearchQuery] = useState("");

  const currentGuideData = CONTENT_DATABASE[activeGuideId];

  return (
    <section className="min-h-screen max-w-7xl mx-auto pt-18 bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white flex flex-col">
      {/* Top header — logo, breadcrumb, search, live status */}
      <header className="border-y border-slate-200 sticky top-18 bg-white/80 backdrop-blur-md z-50 h-16 shrink-0">
        <div className="w-full mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">

            <span className="font-bold tracking-tight text-sm text-slate-900">
              Emventory User Guide
            </span>

          </div>

          <div className="relative w-72">
            <FiSearch
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search documentation topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-slate-400 text-slate-800 font-medium transition-all placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
              All Feature Live
            </span>
          </div>
        </div>
      </header>

      <div className="w-full flex-1 flex mx-auto">
        {/* Left sidebar nav */}
        <aside className="w-64 border-r border-slate-200 bg-slate-50 flex flex-col shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto p-4 select-none">
          <div className="space-y-6">
            {DOCUMENTATION_SECTIONS.map((group) => (
              <div key={group.id} className="space-y-1.5">
                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase px-2">
                  {group.title}
                </h4>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = activeGuideId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveGuideId(item.id)}
                        className={`w-full text-left text-xs px-2.5 py-1.5 rounded transition-all flex items-center justify-between border cursor-pointer ${
                          isActive
                            ? "bg-white text-slate-950 font-semibold border-slate-200/80 shadow-sm"
                            : "text-slate-500 border-transparent hover:bg-slate-200/40 hover:text-slate-900"
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {isActive && (
                          <FiChevronRight size={12} className="text-slate-900 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Article body — now the only other panel, so it can take the remaining width */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
          <GuideContent docData={currentGuideData} />
        </main>
      </div>
    </section>
  );
}

export default FeatureGuide;