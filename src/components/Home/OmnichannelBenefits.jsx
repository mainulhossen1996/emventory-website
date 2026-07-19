import React from 'react';
import Image from "next/image";

export default function OmnichannelBenefits() {
  return (
    <section className="bg-black py-24 pt-0 px-6 sm:px-8 lg:px-16 text-white overflow-hidden selection:bg-blue-700 selection:text-white">
      {/* Interactive Automation Timeline Engine */}
      <style>{`
        /* Global 8-Second Timing Cycle for the entire workflow */
        :root {
          --cycle-duration: 8s;
        }

        /* Sequential Card Highlighting */
        @keyframes stepHighlight {
          0%, 15% { border-color: rgb(29 78 216); background-color: rgba(29, 78, 216, 0.06); opacity: 1; transform: scale(1.01); }
          20%, 100% { border-color: rgb(39 39 42); background-color: rgba(24, 24, 27, 0.2); opacity: 0.4; transform: scale(1); }
        }

        /* Continuous Spine Laser Tracking */
        @keyframes laserFlow {
          0% { top: 0%; bottom: 100%; opacity: 0; }
          10% { top: 0%; bottom: 75%; opacity: 1; }
          35% { top: 25%; bottom: 50%; opacity: 1; }
          60% { top: 50%; bottom: 25%; opacity: 1; }
          85% { top: 75%; bottom: 0%; opacity: 1; }
          100% { top: 100%; bottom: 0%; opacity: 0; }
        }

        /* Simulated Cursor Click Ripple */
        @keyframes clickRipple {
          0% { transform: scale(0.5); opacity: 0; }
          5% { opacity: 0.5; }
          20% { transform: scale(2.2); opacity: 0; }
          100% { opacity: 0; }
        }

        /* Dynamic Typing Reveal */
        @keyframes typeText {
          0%, 45% { max-width: 0%; opacity: 0; }
          50%, 75% { max-width: 100%; opacity: 1; }
          80%, 100% { max-width: 0%; opacity: 0; }
        }

        /* Utility Class Bindings */
        .animate-laser {
          animation: laserFlow var(--cycle-duration) linear infinite;
        }
        .workflow-card {
          transition: all 0.5s ease-in-out;
          animation: stepHighlight var(--cycle-duration) infinite;
        }
        .animate-click {
          animation: clickRipple var(--cycle-duration) ease-out infinite;
        }
        .typing-container {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          animation: typeText var(--cycle-duration) steps(40, end) infinite;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT SIDE: VALUE PROPOSITION TEXT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
            <Image
                  src="/images/amplify-white.png"
                  width={400}
                  height={400}
                  className="h-auto w-40"
                  alt="amplify"
                  priority
                />
              {/* <h2 className="text-2xl font-normal text-zinc-100">
                One unified sync.<br />Massive customer loyalty.
              </h2> */}
              <p className="text-zinc-100 text-md light leading-relaxed pt-2">
                By linking Meta, SMS, and Email under a single behavior layer, you turn fragmented storefront interactions into a high-converting growth cycle.
              </p>
            </div>
{/* Core Benefits List */}
<div className="space-y-6 border-t border-zinc-800 pt-8">
  {[
    {
      title: "Maximize Ad ROI",
      description: "Instantly halt Meta retargeting ads the moment a customer completes a purchase. Stop burning ad budget on people who have already bought."
    },
    {
      title: "Recover Abandoned Revenue",
      description: "Deploy automated SMS nudges the second an online cart is dropped, with a dynamic email fallback if they don't convert within 24 hours."
    },
    {
      title: "Unified Customer Profiles",
      description: "Bridge the gap between your physical storefront and digital channels to track accurate lifetime value and build precision lookalike audiences."
    }
  ].map((benefit, index) => (
    <div key={index} className="flex gap-4 group">
      {/* Dynamic Icon Wrapper - subtle scale on parent hover */}
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-zinc-200 text-base transition-colors duration-300 group-hover:text-blue-400">
          {benefit.title}
        </h3>
        <p className="text-[13px] text-zinc-400 mt-1 font-light leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* RIGHT SIDE: FIXED LIVE AUTOMATION TIMELINE */}
          <div className="lg:col-span-7 flex flex-col justify-center relative bg-zinc-950/40 backdrop-blur-md p-8 min-h-[540px]">
            
            {/* Background Ambient Glow Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.04),transparent_50%)] pointer-events-none" />


            <div className="space-y-6 relative z-10">
              
              {/* STEP 1: TRIGGER / AUDIENCE SELECTION (WITH CLICK EVENT) */}
              <div 
                className="workflow-card flex items-start gap-6 rounded-xl border p-4"
                style={{ animationDelay: '0s' }}
              >
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-blue-500 shadow-lg">
                  {/* Click Button Ripple Layer */}
                  <div className="animate-click absolute inset-0 rounded-lg bg-blue-500/40 pointer-events-none" />
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 relative z-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Step 1 • Segment Trigger</span>
                  <h4 className="text-sm font-semibold text-zinc-200 flex items-center gap-2">
                    Audience Selected 
                    <span className="text-[10px] bg-zinc-800 text-zinc-400 font-mono px-1.5 py-0.2 rounded font-normal animate-pulse">Click Action</span>
                  </h4>
                  <p className="text-xs text-zinc-400">Cart abandoned over $150 threshold values.</p>
                </div>
              </div>

              {/* STEP 2: FACEBOOK / META AD CAMPAIGN DISPATCH */}
              <div 
                className="workflow-card flex items-start gap-6 rounded-xl border p-4 sm:ml-6"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-blue-500 shadow-lg">
                  <svg viewBox="0 0 48 48" className="h-5 w-5" fill="none">
                    <path d="M13.75 30.5c-4.28 0-7.75-3.36-7.75-7.5s3.47-7.5 7.75-7.5c3.12 0 6.13 2.1 8.71 4.96l1.29 1.43 1.29-1.43c2.58-2.86 5.59-4.96 8.71-4.96 4.28 0 7.75 3.36 7.75 7.5s-3.47 7.5-7.75 7.5c-3.12 0-6.13-2.1-8.71-4.96l-1.29-1.43-1.29 1.43c-2.58 2.86-5.59 4.96-8.71 4.96Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Step 2 • Ad Platforms</span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-zinc-200">Meta Feed Automation</h4>
                  </div>
                  <p className="text-xs text-zinc-400">Deploying lookalike custom banners natively to profiles.</p>
                  
                  {/* Mini Mock Ad Preview */}
                  <div className="mt-2 border border-zinc-900 bg-zinc-950/80 p-2.5 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-12 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-[9px] text-zinc-600 font-bold">AD IMAGE</div>
                    <div className="space-y-1 flex-1">
                      <div className="h-1.5 w-20 bg-zinc-800 rounded" />
                      <div className="h-1 w-28 bg-zinc-900 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3: CONTEXTUAL SMS INTERACTION (WITH TYPING EFFECT) */}
              <div 
                className="workflow-card flex items-start gap-6 rounded-xl border p-4 sm:ml-12"
                style={{ animationDelay: '4s' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-blue-500 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Step 3 • SMS Engine</span>
                  <h4 className="text-sm font-semibold text-zinc-200">Instant Push Blast</h4>
                  
                  {/* Automated Dynamic Typing Bubble Container */}
                  <div className="mt-2 text-xs border border-blue-950/40 bg-blue-950/30 text-blue-100 p-3 rounded-xl rounded-tl-none min-h-[42px] flex items-center">
                    <span className="typing-container font-mono text-[11px] leading-relaxed tracking-tight text-blue-300">
                      Hi Sarah! Complete your checkout now for 10% off...
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 4: RETENTION EMAIL ROUTING */}
              <div 
                className="workflow-card flex items-start gap-6 rounded-xl border p-4 sm:ml-18"
                style={{ animationDelay: '6s' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-blue-500 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Step 4 • Retention Fallback</span>
                  <h4 className="text-sm font-semibold text-zinc-200">Email Pipeline Nudge</h4>
                  <p className="text-xs text-zinc-400">Triggered dynamically after 24 hours if checkout targets remain unfulfilled.</p>
                </div>
              </div>

            </div>
          </div>

   

        </div>
      </div>
    </section>
  );
}