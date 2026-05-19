"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Search,
  Clock3,
} from "lucide-react";

const blogData = [
  {
    tag: "E-COMMERCE",
    title:
      "How to Turn Your Physical Store into an Online Shop in Just One Day",
    date: "Aug 30, 2024",
    read: "5 min read",
    subtitle:
      "Discover the step-by-step process of transforming your brick-and-mortar business into a fully functional eCommerce store using Emventory.",
    image: "/images/placeholder.png",
    link: "#",
  },
  {
    tag: "POS",
    title:
      "5 Ways Smart POS Systems Increase Retail Efficiency",
    date: "Sep 12, 2024",
    read: "4 min read",
    subtitle:
      "Learn how modern POS tools automate billing, inventory syncing, and customer management in real time.",
    image: "/images/placeholder.png",
    link: "#",
  },
  {
    tag: "INVENTORY",
    title:
      "Manage Multi-Branch Stock Without Spreadsheet Chaos",
    date: "Oct 02, 2024",
    read: "6 min read",
    subtitle:
      "Track inventory, transfers, and warehouse movements from one centralized dashboard.",
    image: "/images/placeholder.png",
    link: "#",
  },
  {
    tag: "AI AUTOMATION",
    title:
      "Using AI Search to Improve Customer Experience",
    date: "Nov 18, 2024",
    read: "3 min read",
    subtitle:
      "Enable intelligent product discovery with AI-powered search and recommendations.",
    image: "/images/placeholder.png",
    link: "#",
  },
];

const Bloglist = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#020617] text-white overflow-hidden">
      
      {/* HERO */}
      <div className="relative border-b border-white/5">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          
          <div className="max-w-4xl text-center mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs uppercase tracking-[0.25em] font-semibold mb-8">
              Emventory Journal
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Insights for modern <br />
              retail businesses.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Explore practical guides, retail strategies, eCommerce trends,
              automation workflows, and business growth tips powered by
              Emventory.
            </p>
          </div>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="bg-[#f8fafc] text-slate-900 rounded-t-[50px] relative -mt-10 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Featured Article */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            
            <div className="relative overflow-hidden rounded-[40px]">
              <Image
                src={blogData[0].image}
                alt={blogData[0].title}
                width={1200}
                height={900}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-blue-600">
                Featured Article
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mt-5 mb-6">
                {blogData[0].title}
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {blogData[0].subtitle}
              </p>

              <div className="flex items-center gap-5 text-sm text-slate-500 mb-10">
                <span>{blogData[0].date}</span>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {blogData[0].read}
                </div>
              </div>

              <button className="group flex items-center gap-3 bg-slate-900 hover:bg-blue-600 transition-all text-white px-8 py-4 rounded-2xl font-semibold">
                Read Article
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredData.slice(1).map((blog, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
              >
                
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={600}
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xl text-[11px] font-bold tracking-wide text-blue-600 uppercase">
                    {blog.tag}
                  </div>
                </div>

                <div className="p-8">
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                    <span>{blog.date}</span>

                    <div className="flex items-center gap-1">
                      <Clock3 size={14} />
                      {blog.read}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {blog.subtitle}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Read More
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bloglist;