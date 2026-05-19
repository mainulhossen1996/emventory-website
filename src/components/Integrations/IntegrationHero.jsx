import React from 'react';
import { FiPlus, FiBox, FiMessageCircle, FiCreditCard, FiTruck } from 'react-icons/fi';

const IntegrationHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] pt-32 pb-24 text-white">
  
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    
    <div className="absolute top-[-120px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
    
    <div className="absolute bottom-[-200px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </div>

  <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
    
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
      <FiPlus />Integration Ecosystem
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] text-white mb-8">
      Integrate Everything. <br />
        Manage from One Platform.
    </h1>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-slate-400 mb-16">
      Connect Meta Ads, payment gateways, delivery partners, AI tools,
      accounting systems, and more — all inside Emventory.
      Automate operations, sync your business data, and manage everything
      from one intelligent dashboard.
    </p>

    {/* Integration Cards */}
    <div className="flex flex-wrap justify-center items-center gap-5">

      {/* Meta */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-[#1877F2]">
            <FiMessageCircle size={28} />
          </div>

          <div className="text-left">
            <p className="text-sm text-slate-400">
              Marketing
            </p>

            <h4 className="text-lg font-semibold text-white">
              Meta Business
            </h4>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <FiCreditCard size={28} />
          </div>

          <div className="text-left">
            <p className="text-sm text-slate-400">
              Payment
            </p>

            <h4 className="text-lg font-semibold text-white">
              Payment Gateway
            </h4>
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.05]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <FiTruck size={28} />
          </div>

          <div className="text-left">
            <p className="text-sm text-slate-400">
              Logistics
            </p>

            <h4 className="text-lg font-semibold text-white">
              Delivery Partner
            </h4>
          </div>
        </div>
      </div>

      {/* AI */}
      <div className="group rounded-3xl border border-white/10 bg-blue-600 px-6 py-5 shadow-2xl shadow-blue-600/20 transition-all duration-500 hover:scale-[1.03]">
        <div className="flex items-center gap-4">
          
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <FiBox size={28} />
          </div>

          <div className="text-left">
            <p className="text-sm text-blue-100">
              AI Powered
            </p>

            <h4 className="text-lg font-semibold text-white">
              Smart Product Search
            </h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
export default IntegrationHero;