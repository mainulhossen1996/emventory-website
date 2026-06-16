import React from 'react';


const CartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M3 4h2l1.6 9.6a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 2-1.6L19.5 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="19" r="1.4" fill="currentColor" />
    <circle cx="16" cy="19" r="1.4" fill="currentColor" />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 14.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const BarcodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M4 5v14M8 5v14M10.5 5v14M14 5v14M16.5 5v14M20 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const VanIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M3 16V8a1 1 0 0 1 1-1h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M13 10h4.4a1 1 0 0 1 .85.47L20 13.5V16h-2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 16h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="7.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <rect x="5" y="3" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 7.5h.01M14.99 7.5H15M9 11.5h.01M14.99 11.5H15M9 15.5h.01M14.99 15.5H15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M10 21v-3.5h4V21" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M4 20V10M10 20V4M16 20v-7M20 20H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SyncIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M17.5 3.2v3.6h-3.6M6.5 20.8v-3.6h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PILLARS = [
  {
    icons: [CartIcon, CardIcon, BarcodeIcon],
    title: 'Retail & POS',
    description: 'Faster billing, smoother checkout, and real-time inventory syncing.',
  },
  {
    icons: [GlobeIcon, PhoneIcon, VanIcon],
    title: 'Ecommerce Selling',
    description: 'Sell from your website, mobile, and social platforms with one backend.',
  },
  {
    icons: [BuildingIcon, ChartIcon, SyncIcon],
    title: 'Enterprise Control',
    description: 'Centralized management for branches, stock movement, and analytics.',
  },
];

export default function UnifiedCommerceHero() {
  return (
    <section className="relative bg-black px-4 pt-24 text-white">
      <style>{`
        @keyframes pulse-travel {
          0% { left: -8%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { left: 104%; opacity: 0; }
        }
        @keyframes rise-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes icon-pop {
          from { opacity: 0; transform: translateY(6px) scale(0.85); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pillar-rise { animation: rise-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .icon-pop { animation: icon-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-6 text-center">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-6xl font-light tracking-tight leading-[1.2] text-gray-500">
            <span className="text-white">One platform for every sale</span>
            <br />
            <span className="transition-colors duration-300 hover:text-blue-500">
              online, offline &amp; across every branch
            </span>
          </h1>
        </div>

        {/* Flow Line / Connected Cards */}
        <div className="relative mt-16 hidden w-full justify-center lg:flex">
          {/* Connector track */}
          <div className="absolute left-1/2 top-10 h-[3px] w-full max-w-4xl -translate-x-1/2 overflow-hidden rounded-full bg-zinc-800/70">
            {/* Traveling pulse: a light signal sweeping left to right, restarting
                in a loop, visualizing data moving between sales channels. */}
            <span
              className="absolute top-1/2 h-[3px] w-28 -translate-y-1/2 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(96,165,250,0.9), transparent)',
                animation: 'pulse-travel 3.6s ease-in-out infinite',
              }}
            />
          </div>

          {/* Anchor dots at each pillar position on the connector */}
          <div className="absolute left-1/2 top-10 grid w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 grid-cols-3">
            {PILLARS.map((_, i) => (
              <span
                key={i}
                className="mx-auto h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-black"
              />
            ))}
          </div>

          <div className="relative z-10 grid w-full max-w-5xl grid-cols-3 gap-10">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="pillar-rise relative pt-32"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-4">
                  {pillar.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="icon-pop group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-zinc-400 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
                      style={{ animationDelay: `${idx * 150 + 250 + i * 90}ms` }}
                    >
                      <Icon />
                    </div>
                  ))}
                </div>

                <div className="group relative text-center pb-6">
                  <h3 className="text-lg font-light text-white">{pillar.title}</h3>
                  <p className="mt-1 text-md font-light leading-relaxed text-gray-500">
                    {pillar.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

  {/* Faded Hover Line (Fades in and glows on hover) */}
  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 scale-x-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100" />

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}