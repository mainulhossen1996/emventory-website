import React from "react";
import {
  FiArrowRight,
  FiPackage,
  FiCheck,
  FiNavigation,
  FiClock,
  FiLink,
} from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryIntegration = () => {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Block - Centered & Clean */}
        <div className="flex flex-col items-center mb-12 gap-6">
          <div className="max-w-screen-lg text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
             <TbTruckDelivery/> Product Delivery
            </div>

            <h3 className="text-5xl font-normal text-slate-900 tracking-tighter leading-tight">
              Automated Logistics. Zero manual entry.
            </h3>
          </div>

          <p className="text-lg text-slate-500 leading-relaxed max-w-screen-lg text-center">
            Experience native integration with Pathao and Steadfast. Direct API
            tunneling ensures your customer data flows securely from checkout to
            consignment in a single click.
          </p>
        </div>

        {/* The Pipeline Visual */}
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200/50 -translate-y-1/2 z-0 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1: New Order */}
            <div className="group bg-white p-6 rounded-[24px] border border-slate-200 transition-all hover:-translate-y-2">
              <div className="h-14 w-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FiPackage size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Sync Order</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Emventory grabs the order data from your sales channel.
              </p>
            </div>

            {/* Step 2: One-Click Booking */}
            <div className="group bg-white p-6 rounded-[24px] border border-slate-200 transition-all hover:-translate-y-2">
              <div className="h-14 w-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FiClock size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Book Courier</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                One click sends address & phone details to the courier.
              </p>
            </div>

            {/* Step 3: Logistics Hub (THE LOGO CARD) */}
            <div className="group bg-[#020617] p-6 rounded-[24px] shadow-2xl scale-105 border border-white/10 relative overflow-hidden">
              {/* Logo Container */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className="h-14 w-full bg-white rounded-2xl flex items-center justify-center p-3">
                  <img
                    src="https://pathao.com/wp-content/uploads/2019/02/Pathao-logo.svg"
                    alt="Pathao"
                    className="max-h-full"
                  />
                </div>
                <div className="h-14 w-full bg-white rounded-2xl flex items-center justify-center p-4">
                  <img
                    src="https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg"
                    alt="Steadfast"
                    className="max-h-full"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium text-blue-400 uppercase tracking-widest">
                <FiLink className="animate-pulse" /> Direct API Tunnel
              </div>
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
            </div>

            {/* Step 4: Final Tracking */}
            <div className="group bg-white p-6 rounded-[24px] border border-slate-200 transition-all hover:-translate-y-2">
              <div className="h-14 w-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <FiNavigation size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Track & Notify</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Status updates are pushed back to your dashboard live.
              </p>
            </div>
          </div>
        </div>

        {/* Feature List + CTA */}
        <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {["Bulk Consignment", "SMS Notification", "Weight Sync"].map(
              (f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center">
                    <FiCheck
                      className="text-blue-600"
                      size={12}
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-600 tracking-widest">
                    {f}
                  </span>
                </div>
              )
            )}
          </div>

          <button className="w-full md:w-auto px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-3 ">
            Connect Courier <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryIntegration;
