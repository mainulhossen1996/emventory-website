"use client";
import React, { useState, useEffect } from "react";
import { FiArrowRight, FiActivity, FiMic, FiGlobe, FiCpu, FiCornerDownLeft } from "react-icons/fi";
import AiSearchDemo from "/src/components/AiSearch/AiSearchDemo";

// Multi-lingual query sequences showing natural phrases instead of stiff keywords
const PIPELINE_DEMOS = [
  { text: "Good soundproof headphones under 2000 Taka", lang: "EN", type: "text" },
  { text: "২০০০ টাকার মধ্যে ভালো সাউন্ডপ্রুফ হেডফোন", lang: "BN", type: "text" },
  { text: "voice_stream_input_mod_0x4412", lang: "AUDIO_STREAM", type: "voice" }
];

const AiHero = ({ onCtaClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [simulatedText, setSimulatedText] = useState("");
  const [demoOpen, setDemoOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let textTimer;
    let transitionTimer;
    const currentPayload = PIPELINE_DEMOS[currentIdx];

    if (currentPayload.type === "text") {
      setIsTyping(true);

      // Show the first character immediately instead of waiting for the
      // interval's first tick — that's what was letting the first
      // character (sometimes the whole first word) get dropped.
      let charIndex = 1;
      setSimulatedText(currentPayload.text.slice(0, 1));

      textTimer = setInterval(() => {
        if (charIndex < currentPayload.text.length) {
          charIndex++;
          // Slice from the source string rather than `prev + char` —
          // removes any dependency on potentially stale prior state.
          setSimulatedText(currentPayload.text.slice(0, charIndex));
        } else {
          clearInterval(textTimer);
          setIsTyping(false);

          // Wait 2.5 seconds before moving to the next language variation
          transitionTimer = setTimeout(() => {
            setCurrentIdx((prev) => (prev + 1) % PIPELINE_DEMOS.length);
          }, 2500);
        }
      }, 50);
    } else {
      // Audio stream visualization state configuration
      setIsTyping(false);
      setSimulatedText("");
      transitionTimer = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % PIPELINE_DEMOS.length);
      }, 4000);
    }

    return () => {
      clearInterval(textTimer);
      clearTimeout(transitionTimer);
    };
  }, [currentIdx]);

  const handleTryLive = () => {
    onCtaClick?.();
    setDemoOpen(true);
  };

  // ...rest of component unchanged

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#0B0A12] via-[#0F1229] to-[#0B0A12] pt-24 pb-24 sm:pt-32 sm:pb-28 border-b border-white/5">
      {/* Structural Micro-Mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      
      {/* Symmetrical High-Luminance Blur Highlights */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#4C7EFF]/15 rounded-full blur-3xl animate-[float-a_9s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#0FB5AE]/15 rounded-full blur-3xl animate-[float-b_11s_ease-in-out_infinite] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Context Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#A9C6FF] text-[11px] font-mono tracking-wider mb-8 backdrop-blur-md shadow-2xl">
          <FiActivity className="text-[#2DD4BF] animate-pulse" size={12} />
          <span className="uppercase text-[10px] tracking-widest text-white">Find with anything.</span>
        </div>

        {/* Typographic Anchor */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Type It Like You'd
          <span className="bg-gradient-to-r from-[#4C7EFF] via-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent block mt-2">
            Say It Out Loud
          </span>
        </h1>

        <p className="text-base sm:text-lg font-light text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Customers don't talk in exact match parameters. Our system transforms conversational phrases, voice streams, and regional accents into instantly mapped vector arrays.
        </p>

        {/* KINETIC CONSOLE INPUT DISPLAY BLOCK */}
        <div className="w-full max-w-xl relative mx-auto mb-14">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#4C7EFF]/20 to-[#2DD4BF]/20 blur-xl opacity-70" />
          
          <div className="relative rounded-2xl border border-white/10 bg-[#0e0b1a]/90 px-4 py-4 text-left shadow-2xl shadow-black/80 backdrop-blur-xl flex items-center justify-between gap-4 min-h-[68px]">
            
            {/* Input Context Icon Indicator */}
            <div className="flex items-center gap-3 overflow-hidden flex-1">
              {PIPELINE_DEMOS[currentIdx].type === "voice" ? (
                <FiMic className="text-[#2DD4BF] animate-pulse shrink-0" size={18} />
              ) : (
                <FiGlobe className="text-[#4C7EFF] animate-spin [animation-duration:8s] shrink-0" size={18} />
              )}
              
              {/* Context Render Container */}
              <div className="w-full truncate flex items-center min-h-[24px]">
                {PIPELINE_DEMOS[currentIdx].type === "voice" ? (
                  /* Audio Waves Integration Layout */
                  <div className="flex items-end gap-[4px] h-5 px-1">
                    {[0.6, 0.3, 0.9, 0.4, 0.8, 0.2, 0.7, 0.4, 0.9, 0.5, 0.3, 0.6].map((val, idx) => (
                      <span 
                        key={idx} 
                        className="w-[3px] bg-gradient-to-t from-[#4C7EFF] to-[#2DD4BF] rounded-full origin-bottom"
                        style={{
                          height: `${val * 100}%`,
                          animation: 'audioBounce 0.8s ease-in-out infinite alternate',
                          animationDelay: `${idx * 0.08}s`
                        }}
                      />
                    ))}
                    <span className="text-[11px] font-mono text-[#2DD4BF] ml-3 tracking-widest uppercase animate-pulse">Streaming Audio Context...</span>
                  </div>
                ) : (
                  /* Typographic Context Terminal Line */
                  <p className="font-sans text-sm sm:text-base text-slate-200 tracking-wide truncate pl-2">
                    {simulatedText}
                    <span className={`inline-block w-1.5 h-4 bg-[#4C7EFF] ml-1 select-none ${isTyping ? "opacity-100" : "animate-pulse"}`}>|</span>
                  </p>
                )}
              </div>
            </div>

            {/* Static Simulated Input Enter Anchor */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 uppercase tracking-widest font-bold">
                {PIPELINE_DEMOS[currentIdx].lang}
              </span>
              <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
                <FiCornerDownLeft size={12} />
              </div>
            </div>

          </div>
        </div>

        {/* Primary Action Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleTryLive}
            className="group w-full sm:w-auto bg-[#4C7EFF] hover:bg-[#3D6EF0] text-white px-8 py-4 rounded-full font-normal transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#4C7EFF]/20 hover:shadow-[#4C7EFF]/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>See Live Demo</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

        </div>

        {/* Runtime Network Latency Footer */}
        <div className="mt-14 inline-flex items-center gap-2.5 text-xs font-semibold text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
          </span>
          <FiActivity size={12} className="text-slate-600" />
          <span className="tracking-wide font-mono text-[10px] text-slate-400">ARRAY COGNITION RUNTIME &lt; 18MS</span>
        </div>
      </div>

      <AiSearchDemo open={demoOpen} onClose={() => setDemoOpen(false)} />

      <style jsx global>{`
        @keyframes audioBounce {
          0% { transform: scaleY(0.2); }
          100% { transform: scaleY(1.1); }
        }
        @keyframes float-a { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(15px, -20px); } }
        @keyframes float-b { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-20px, 15px); } }
      `}</style>
    </header>
  );
};

export default AiHero;