"use client";
import React, { useState } from "react";
import {
  FiMail, FiPhone, FiClock, FiChevronDown, FiHelpCircle, FiSend,
} from "react-icons/fi";

// ── CORE DATA SETS ──
const HELP_FAQ = [
  {
    q: "Do you offer a free trial?",
    a: "Yes — every new workspace gets a 14-day trial with full access to your chosen plan's features. No card required to start.",
  },
  {
    q: "Can I get invoices for my accounting team?",
    a: "Every invoice is available as a PDF in your billing portal, and you can add a standing CC so they land in a shared inbox automatically.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data stays intact for 30 days after cancellation, so you can export anything you need or reactivate without starting over.",
  },
];

// ── COMPONENT 1: CONTACT + FORM ──
const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm shadow-slate-100/60 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Contact info panel */}
        <div className="md:col-span-2 bg-slate-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight">
            Contact support
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
            Reach us directly, or send a message and we'll get back to you.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex gap-2.5 items-start">
              <FiMail size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">
                  Email
                </span>

                <a href="mailto:support@emventory.com"
                  className="text-xs font-semibold text-slate-800 hover:text-slate-950 hover:underline transition-colors"
                >
                  support@emventory.com
                </a>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <FiPhone size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">
                  Phone
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  +880 1521488497
                </span>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <FiClock size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">
                  Hours
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  24/7 monitored response
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Email form panel */}
        <div className="md:col-span-3 p-6 md:p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3">
                <FiSend size={15} className="text-emerald-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Message sent</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Thanks — we'll reply to {form.email || "your email"} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Jane Cooper"
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-800 placeholder-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="jane@company.com"
                    className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-800 placeholder-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="How can we help?"
                  className="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-800 placeholder-slate-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// ── COMPONENT 2: SHORT FAQ ACCORDION ──
const HelpFAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div>
      <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
        Frequently asked
      </h2>
      <div className="border border-slate-200 bg-white rounded-xl overflow-hidden divide-y divide-slate-100 shadow-sm shadow-slate-100/40">
        {HELP_FAQ.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left px-4 py-4 flex items-center justify-between text-xs font-bold text-slate-900 hover:bg-slate-50 focus:outline-none transition-colors cursor-pointer"
              >
                <span>{item.q}</span>
                <FiChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                    isOpen ? "rotate-180 text-slate-900" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 bg-slate-50/30">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── GRAIN OVERLAY ──
// A single reusable noise texture, layered over a soft gradient. Kept as an
// inline SVG data-URI so no extra image asset or CDN request is needed.
const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(%23n)'/>
    </svg>
  `);

// ── MAIN CORE CONTAINER ──
export const HelpCenter = () => {
  return (
    <section className="relative min-h-screen pt-32 text-slate-800 antialiased selection:bg-slate-900 selection:text-white px-4 sm:px-6 overflow-hidden">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-white" />
      {/* Grain layer on top of the gradient */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />

      <div className="relative max-w-3xl w-full mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            How can we help?
          </h1>
        </div>

        <ContactSection />
        <HelpFAQ />
      </div>
    </section>
  );
};

export default HelpCenter;