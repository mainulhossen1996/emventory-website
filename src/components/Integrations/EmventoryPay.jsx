"use client"
import React from 'react';
import { FiShield, FiCheck, FiArrowRight, FiActivity, FiArrowUpRight, FiUnlock } from 'react-icons/fi';

const EmventoryPay = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto">

      <h1 className="text-5xl text-center leading-tight pb-6">
  Struggling to get a payment gateway? <br />
  No worries — <span className='text-blue-600 font-bold'>emventoryPay</span> has you covered.
</h1>

<p className="max-w-screen-lg mx-auto text-center text-xl leading-relaxed text-slate-600 font-light">
  Accept payments easily without complex gateway setup or legal hassle. 
  Start receiving payments from bKash, Nagad, and cards directly through Emventory Pay.
</p>
        
        <div className="relative bg-[#020617] rounded-[60px] p-10 md:p-20 mt-6 overflow-hidden shadow-2xl">
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <FiUnlock /> Ready-to-use Gateway
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[0.95]">
                emventory 
                <span className="text-blue-500">Pay</span>
              </h3>
              
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                No merchant account? No problem. Emventory Pay is your all-in-one bridge to accept <span className="text-white font-bold">bKash, Nagad, and Cards</span> without the paperwork.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  "Instant Activation",
                  "Low Transaction Fees",
                  "Secure Escrow Logic",
                  "Next-Day Settlement"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                    <FiCheck className="text-blue-500" strokeWidth={4} />
                    {item}
                  </div>
                ))}
              </div>

              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-normal transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer">
                Learn More <FiArrowRight />
              </button>
            </div>

            {/* Right Side: The "Attractive" Glass Dashboard */}
            <div className="relative h-[450px] flex items-center justify-center">
              
              {/* 1. The Main Analytics Layer (Back) */}
              <div className="absolute top-0 right-0 w-full max-w-[340px] bg-white/5 border border-white/10 backdrop-blur-md rounded-[40px] p-8 -rotate-6 transform translate-x-10 translate-y-4">
                 <div className="flex justify-between items-center mb-8">
                    <div className="h-2 w-12 bg-white/10 rounded-full" />
                    <FiActivity className="text-slate-500" />
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 w-full bg-white/5 rounded-full" />
                    <div className="h-4 w-2/3 bg-white/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                 </div>
              </div>

              {/* 2. The Transaction Card (Middle) */}
              <div className="absolute z-20 w-full max-w-[320px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)]">
                <div className="flex justify-between items-start mb-12">
                   <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <FiShield size={20} />
                   </div>
                   <span className="text-[10px] font-bold tracking-widest text-blue-100 opacity-60">Verified Gateway</span>
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-200 tracking-widest mb-1">Weekly Payout</p>
                <h4 className="text-3xl font-bold text-white tracking-tight">৳ 84,250.00</h4>
                <div className="mt-8 flex justify-between items-center text-[10px] font-bold text-blue-100 uppercase tracking-widest">
                   <span>Merchant ID: 4402</span>
                   <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full bg-white/20" />
                      <div className="w-4 h-4 rounded-full bg-white/40" />
                   </div>
                </div>
              </div>

              {/* 3. The "Live Feed" Element (Front) */}
              <div className="absolute bottom-4 -left-4 z-30 w-[240px] bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 flex items-center gap-4 animate-float">
                 <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <FiArrowUpRight size={24} strokeWidth={3} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Order</p>
                    <p className="text-sm font-bold text-slate-900 tracking-tight">+ ৳ 4,500.00</p>
                 </div>
              </div>

            </div>

          </div>
        </div>

        {/* Brand Logos (Payment Icons) */}
        <div className="flex justify-center items-center gap-10 mt-12 opacity-30 grayscale contrast-125">
           <span className="text-lg font-bold tracking-tighter text-slate-900">bKash</span>
           <span className="text-lg font-bold tracking-tighter text-slate-900">Nagad</span>
           <span className="text-lg font-bold tracking-tighter text-slate-900">VISA</span>
           <span className="text-lg font-bold tracking-tighter text-slate-900">MASTERCARD</span>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EmventoryPay;