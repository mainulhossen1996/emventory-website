"use client";
import React, { useState } from "react";
import { 
  FiSearch, FiArrowRight, FiActivity, FiCpu, 
  FiLayout, FiShield, FiSliders, FiClock 
} from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const TAG_COLOR_MAP = {
  "AI Search": "text-blue-700 bg-blue-50 border-blue-200/60",
  "Infrastructure": "text-purple-700 bg-purple-50 border-purple-200/60",
  "Storefronts": "text-emerald-700 bg-emerald-50 border-emerald-200/60",
  "Security": "text-amber-700 bg-amber-50 border-amber-200/60",
  "POS Sync": "text-pink-700 bg-pink-50 border-pink-200/60",
};

const CHANGELOG_UPDATES = [
  {
    id: "up-004",
    date: "July 12, 2026",
    title: "Neural Conversational Search Engine Framework Deployment",
    version: "v2.4.0-edge",
    tags: ["AI Search", "Infrastructure"],
    description: "We completely overhauled our core storefront search engine architecture. Instead of processing static keyword lookups, the new neural parser maps the semantic layout of natural language strings into high-dimensional concept embeddings.",
    bullets: [
      "Introduced sub-15ms edge inference mapping lines via isolated GPU clusters.",
      "Freemium rate-limiting added automatically: provides 50 complimentary operations per day, resetting at midnight UTC.",
      "Integrated spatial sub-word token metrics to parse and auto-correct heavily misspelled product names instantly."
    ],

  },
  {
    id: "up-003",
    date: "June 28, 2026",
    title: "Multi-Branch Storefront Architecture Realtime Cluster Sync",
    version: "v2.3.2",
    tags: ["Infrastructure", "POS Sync"],
    description: "Enterprise accounts managing high-volume parallel storefront branches can now allocate isolated sub-inventories. The data matrix handles incoming multi-terminal mutations simultaneously without rendering locks.",
    bullets: [
      "Optimized simultaneous transactions scaling across hundreds of concurrent branch points.",
      "Pushed automated backup validation intervals directly down to regional node networks.",
      "Synchronized physical retail store POS checkouts alongside dynamic e-commerce pipelines."
    ],
  },
  {
    id: "up-002",
    date: "June 14, 2026",
    title: "Dynamic Visual Component Customizer & SSR Pipeline",
    version: "v2.2.0",
    tags: ["Storefronts"],
    description: "Added structural section injection into the modular dashboard customizer. Web layers are parsed directly down into micro-components, maintaining perfect layout hierarchy without loading custom scripts.",
    bullets: [
      "Added direct layout node swapping including headers, banners, and feature list matrices.",
      "Optimized standard theme rendering speeds using highly aggressive edge-caching loops.",
      "Enabled automatic ANAME domain mapping with native SSL cert routing."
    ],
  }
];

export const page = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = ["All", ...Object.keys(TAG_COLOR_MAP)];

  const filteredUpdates = CHANGELOG_UPDATES.filter((item) => {
    const matchesTag = !selectedTag || selectedTag === "All" || item.tags.includes(selectedTag);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white pt-24">


      {/* Hero Headline Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 border-b border-slate-100">
        <div className="max-w-3xl">

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
            What’s new in Emventory.
          </h1>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed">
            Technical updates, neural query framework improvements, infrastructure releases, and real-time inventory cluster monitoring adjustments.
          </p>
        </div>
      </div>

      {/* Filter and Control Toolbar */}
      <div className="bg-white sticky top-16 z-40 border-b border-slate-100 shadow-sm shadow-slate-50/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Tags Filtering Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag || (tag === "All" && !selectedTag);
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === "All" ? null : tag)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors whitespace-nowrap border cursor-pointer ${
                    isSelected 
                      ? "bg-blue-600 text-white border-blue-600 font-semibold" 
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Inline Search Bar */}
          <div className="relative w-full sm:w-64">
            <FiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter deployment history..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-slate-400 text-slate-800 font-medium placeholder-slate-400 transition-all"
            />
          </div>

        </div>
      </div>

      {/* Main Timeline Stack Layout */}
      <div className="max-w-5xl mx-auto px-6 py-16 relative">
        
        {/* Core Timeline Grid Stack Loop */}
        {filteredUpdates.length > 0 ? (
          <div className="space-y-20 relative">
            
            {filteredUpdates.map((update) => (
              <div key={update.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative group">
                
                {/* Left Metadata Sticky Segment */}
                <div className="lg:col-span-3 lg:sticky lg:top-40 h-fit space-y-2 lg:pr-4">
                  <div className="text-xs font-mono text-slate-400 font-semibold tracking-wide flex items-center gap-2">
                    <FiClock size={12} className="text-slate-300" /> {update.date}
                  </div>
                  <div className="inline-block text-[10px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200/60 px-2 py-0.5 rounded">
                    {update.version}
                  </div>
                </div>

                {/* Right Interactive Card Data Frame Content */}
                <div className="lg:col-span-9 bg-white transition-colors duration-200 hover:border-slate-300">
                  
                  {/* Tag Badges Array */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {update.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 border rounded-full uppercase tracking-wider ${TAG_COLOR_MAP[tag] || "bg-slate-100 border-slate-200 text-slate-600"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-4 hover:text-black transition-colors">
                    {update.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {update.description}
                  </p>

                  {/* Bullet Infrastructure Parameters Array */}
                  <ul className="space-y-3 mb-6 pl-1">
                    {update.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-500 flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>
        ) : (
          /* Empty Search Fallback State Graphic */
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
            <div className="h-8 w-8 bg-slate-50 border border-slate-200 text-slate-400 rounded flex items-center justify-center mx-auto mb-4">
              <FiSliders size={16} />
            </div>
            <h3 className="text-xs font-bold text-slate-900">No logs found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto px-4">
              We couldn’t find any operational updates matching your search queries or active filters.
            </p>
            <button 
              onClick={() => { setSelectedTag(null); setSearchQuery(""); }}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 mt-4 inline-flex items-center gap-1 cursor-pointer"
            >
              Reset active filter parameters <FiArrowRight size={12} />
            </button>
          </div>
        )}

      </div>

      {/* Persistent Page Footer Links */}
      <footer className="border-t border-slate-100 bg-slate-50/50 py-12 text-center select-none">
        <p className="text-xs font-mono text-slate-400">
          © 2026 Emventory Operations Team.
        </p>
      </footer>

    </section>
  );
};

export default page;