"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { FiLayout, FiEdit3, FiGlobe, FiCheck } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import StageLayoutCustomizer from "./Stagelayoutcustomizer";
import StageThemeSelection from "./Stagethemeselection";
import StageDomainDeployment from "./Stagedomaindeployment";

const STEP_DURATION_MS = 5600;

const themeOptions = [
  {
    id: 1,
    name: "Default Minimal",
    text: "Clean and versatile layout for any store",
    bgImg: "/images/theme1.png",
  },
  {
    id: 2,
    name: "Glow Skin Care",
    text: "Elegant and soft tones for beauty brands",
    bgImg: "/images/theme2.png",
  },
  {
    id: 3,
    name: "Pulse Gadget",
    text: "High-contrast matrix built for gadget",
    bgImg: "/images/theme3.png",
  },
  {
    id: 4,
    name: "Vogue Cloth",
    text: "Tailored for apparel and fashion",
    bgImg: "/images/theme4.png",
  },
];

export const ProcessVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [activeSection, setActiveSection] = useState("Home Page");

  const elapsedRef = useRef(0);
  const lastTickRef = useRef(null);
  const rafRef = useRef(null);

  const STEPS = useMemo(
    () => [
      {
        title: "Choose a theme",
        description:
          "Pick from our library of beautiful, high-converting templates built to showcase your products.",
        icon: <FiLayout size={14} />,
      },
      {
        title: "Customize your store",
        description:
          "Easily design your layout, match your brand colors, and arrange sections with zero coding.",
        icon: <FiEdit3 size={14} />,
      },
      {
        title: "Connect your domain",
        description:
          "Link your custom web domain and launch your store instantly on our fast global network.",
        icon: <FiGlobe size={14} />,
      },
    ],
    []
  );

  const totalDuration = STEP_DURATION_MS * STEPS.length;

  useEffect(() => {
    const tick = (now) => {
      if (lastTickRef.current !== null) {
        elapsedRef.current =
          (elapsedRef.current + (now - lastTickRef.current)) % totalDuration;
      }
      lastTickRef.current = now;

      const step = Math.floor(elapsedRef.current / STEP_DURATION_MS);
      const pct =
        ((elapsedRef.current % STEP_DURATION_MS) / STEP_DURATION_MS) * 100;

      setActiveStep(step);
      setProgress(pct);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTickRef.current = null;
    };
  }, [totalDuration]);

  const handleStepClick = (i) => {
    elapsedRef.current = i * STEP_DURATION_MS;
    setActiveStep(i);
    setProgress(0);
  };

  return (
    <section className="relative py-24 bg-slate-50 antialiased overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Master Layout: 2-Column Split targeting desktop viewport canvas styles */}
        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-16 items-center min-h-[640px]">
          {/* Left Column Text & Stepper Controls Area */}
          <div className="space-y-8 z-10 relative">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-4">
                <HiOutlineShoppingBag size={13} />
                <span>Setup Pipeline</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Pick a theme, make it yours, and launch instantly.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                No developer required. Every storefront framework configuration
                is optimized, fully dynamic, and production-ready from the
                moment you select it.
              </p>
            </div>

            {/* Vertical Stepper Controls Stack */}
            <div className="space-y-3 w-[80%]">
              {STEPS.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = i < activeStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => handleStepClick(i)}
                    className={`w-full text-left relative py-3 border-b border-gray-200 transition-all duration-200 focus:outline-none flex gap-4 items-start cursor-pointer ${
                      isActive
                        ? "bg-transparent text-gray-700  "
                        : " hover:bg-slate-50 text-slate-700  border-dashed border-b border-gray-300"
                    }`}
                  >
                    <div
                      className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center transition-all duration-200 border mt-0.5 ${
                        isActive
                          ? "bg-blue-50 border-blue-200 text-blue-500"
                          : isPast
                          ? "bg-white border-slate-200 text-slate-800 font-bold"
                          : "bg-gray-100 border-slate-200 text-slate-400"
                      }`}
                    >
                      {isPast ? (
                        <FiCheck size={12} strokeWidth={3} />
                      ) : (
                        step.icon
                      )}
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <span className="text-md font-bold block truncate tracking-tight">
                        {step.title}
                      </span>
                      <p
                        className={`text-xs font-medium ${
                          isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all"
                          style={{ width: `${progress}%`, transition: "none" }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column Workspace: 70% Peeking Perspective Mockup Frame */}
          <div className="relative w-full h-[600px] lg:h-full flex items-center">
            {/* Perspective Canvas Wrapper Container */}
            <div
              className="absolute left-0 lg:left-6 w-[750px] lg:w-[900px] shrink-0 bg-white border border-slate-200/90 rounded-2xl min-h-[580px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] flex flex-col overflow-hidden origin-left transition-all duration-700 ease-out"
              style={{
                transform:
                  "perspective(1200px) rotateY(-18deg) rotateX(4deg) translateZ(0)",
              }}
            >
              {/* Top Browser URL Bar */}
              <div className="bg-slate-50 border-b border-slate-200/70 px-5 py-3 flex items-center justify-between shrink-0 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300/60" />
                </div>
                <div className="w-80 bg-white border border-slate-200/80 px-3 py-1 rounded-xl text-[11px] text-slate-400 font-mono tracking-wide text-center truncate shadow-inner">
            
                  https://ecommerce.emventory.com/
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-bold tracking-wider">
                    Sync Active
                  </span>
                </div>
              </div>

              {/* Viewspace display layers layout panels */}
              <div className="flex-1 relative bg-white flex flex-col min-h-0">
                <StageThemeSelection
                  active={activeStep === 0}
                  themeOptions={themeOptions}
                  selectedTheme={selectedTheme}
                />
                <StageLayoutCustomizer
                  active={activeStep === 1}
                  activeSection={activeSection}
                />
                <StageDomainDeployment active={activeStep === 2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualizer;