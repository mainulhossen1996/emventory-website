import React from 'react';
import { BiSolidMegaphone } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const EmailIcon = () => (
  <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
    {/* Envelope Body */}
    <rect 
      x="6" 
      y="14" 
      width="36" 
      height="24" 
      rx="3" 
      stroke="currentColor" 
      strokeWidth="1.6" 
    />
    {/* Envelope Flap */}
    <path
      d="M7 16L21.4 26.2c1.5 1.18 3.6 1.18 5.2 0L41 16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Floating Dots Group (Appears and floats upward on hover) */}
    <g className="opacity-0 transition-all duration-500 ease-out transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
      {/* Left Dot */}
      <circle 
        cx="29" 
        cy="7" 
        r="1.5" 
        fill="currentColor" 
        className="transition-transform duration-700 delay-75 group-hover:-translate-y-1"
      />
      {/* Center Dot */}
      <circle 
        cx="34" 
        cy="5" 
        r="1.5" 
        fill="currentColor" 
        className="transition-transform duration-700 delay-0 group-hover:-translate-y-2"
      />
      {/* Right Dot */}
      <circle 
        cx="39" 
        cy="8" 
        r="1.5" 
        fill="currentColor" 
        className="transition-transform duration-700 delay-150 group-hover:-translate-y-1.5"
      />
    </g>
  </svg>
);

const MetaAdsIcon = () => (
  <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
    {/* SVG Gradient definition for a smooth, premium glow on hover */}
    <defs>
      <linearGradient id="metaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

    {/* The Official Meta Infinity-Loop Geometry */}
    <path
      d="M13.75 30.5c-4.28 0-7.75-3.36-7.75-7.5s3.47-7.5 7.75-7.5c3.12 0 6.13 2.1 8.71 4.96l1.29 1.43 1.29-1.43c2.58-2.86 5.59-4.96 8.71-4.96 4.28 0 7.75 3.36 7.75 7.5s-3.47 7.5-7.75 7.5c-3.12 0-6.13-2.1-8.71-4.96l-1.29-1.43-1.29 1.43c-2.58 2.86-5.59 4.96-8.71 4.96Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="origin-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:stroke-[url(#metaGlow)]"
    />
  </svg>
);

const SmsIcon = () => (
  <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
    <path
      d="M6 13a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H21l-8 7v-7h-3a4 4 0 0 1-4-4V13Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="15.5" cy="20.5" r="1.7" fill="currentColor" className="transition-opacity duration-300 [animation:none] group-hover:[animation:sms-blink_1.1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
    <circle cx="22" cy="20.5" r="1.7" fill="currentColor" className="transition-opacity duration-300 group-hover:[animation:sms-blink_1.1s_ease-in-out_infinite]" style={{ animationDelay: '160ms' }} />
    <circle cx="28.5" cy="20.5" r="1.7" fill="currentColor" className="transition-opacity duration-300 group-hover:[animation:sms-blink_1.1s_ease-in-out_infinite]" style={{ animationDelay: '320ms' }} />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
    <path
      d="M24 6C14.06 6 6 14.06 6 24c0 3.36.91 6.5 2.5 9.2L6 42l9.1-2.4A17.9 17.9 0 0 0 24 42c9.94 0 18-8.06 18-18S33.94 6 24 6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="origin-center transition-transform duration-300 ease-out group-hover:[animation:wa-ring_0.6s_ease-in-out_1]"
    />
    <path
      d="M17 19c0-1 .8-2.6 1.7-2.6.8 0 1.6 1.9 1.9 2.6.2.5.3 1-.1 1.5-.3.4-.8.8-.6 1.4.5 1.7 2.6 3.8 4.3 4.3.6.2 1-.3 1.4-.6.5-.4 1-.3 1.5-.1.7.3 2.6 1.1 2.6 1.9 0 .9-1.6 1.7-2.6 1.7-2 0-4.9-1.1-7-3.2-2.1-2.1-3.2-5-3.2-7Z"
      fill="currentColor"
    />
  </svg>
);

const ChannelCard = ({ title, description, accent, children }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border-1 border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[0_0_30px_rgba(198,0,0,0.15)]"
    >
      {/* Faint corner index, encodes channel order in the lineup */}
      <span className="absolute right-5 top-5 font-mono text-[11px] text-zinc-700 transition-colors duration-300 group-hover:text-blue-600">
        {accent}
      </span>

      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border-1 border-zinc-800 text-zinc-500 transition-all duration-300 group-hover:border-blue-700 group-hover:text-blue-600 group-hover:bg-blue-700/5">
        {children}
      </div>

      <h3 className="mb-2 text-sm font-medium text-zinc-100 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-[13px] font-light leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
};

export default function MarketingChannels() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#0B1120] to-black py-24 px-6 sm:px-8 lg:px-16 text-white selection:bg-blue-700 selection:text-white">
  
  {/* Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
  </div>
      {/* Keyframes for icon micro-interactions */}
      <style>{`
        @keyframes sms-blink {
          0%, 100% { opacity: 0.25; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes wa-ring {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(7deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(3deg); }
        }
        @keyframes bell-ring {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-12deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-6deg); }
          80% { transform: rotate(4deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
              <BiSolidMegaphone/> Omnichannel Marketing
              </div>
          <h2 className="text-4xl font-normal sm:text-5xl text-white">
  Connect, engage, and convert customers across every channel.
</h2>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <ChannelCard
            title="Email"
            description="Delivered straight to where critical purchasing decisions happen."
            accent="01"
          >
            <EmailIcon />
          </ChannelCard>

          <ChannelCard
            title="Meta Ads"
            description="Target smart lookalikes and recapture high-value store buyers."
            accent="02"
          >
            <MetaAdsIcon />
          </ChannelCard>

          <ChannelCard
            title="SMS"
            description="Instant notifications and urgent broadcasts they will actually see."
            accent="03"
          >
            <SmsIcon />
          </ChannelCard>

          <ChannelCard
            title="WhatsApp"
            description="Meet customers exactly where they chat with friends every day."
            accent="04"
          >
            <WhatsAppIcon />
          </ChannelCard>

        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-4xl text-sm font-light leading-relaxed text-zinc-400">
            <span className="font-medium text-zinc-200">Amplify</span> features a built-in
            behavioral engine. It intelligently syncs with your ecosystem data to capture how
            your online store and retail visitors behave. Reach the right individual, via the
            ideal channel, precisely when they are ready to purchase.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">

  <div className="flex flex-col sm:flex-row items-center gap-4">
    
    {/* Primary CTA */}
    {/* <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue-700 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_15px_40px_rgba(29,78,216,0.45)] cursor-pointer">
      <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

      <span className="relative z-10">
        Start Amplify Now
      </span>

      <svg
        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 5l7 7-7 7M5 12h15"
        />
      </svg>
    </button> */}

    {/* Secondary CTA */}
    <button className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-100  px-8 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer">
      <span>Learn More</span>
      <FiChevronDown 
  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
/>

    </button>

  </div>
</div>
        {/* Footer Descriptive Text */}
        
      </div>
    </section>
  );
}