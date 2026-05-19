import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCreditCard,
  FiShield,
  FiZap,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";


const PaymentGateway = () => {
  const gateways = [
    {
        name: "emventoryPay",
        subtitle: "Fully Managed by Emventory",
        active: true,
      },
    {
      name: "PayStation",
      subtitle: "Enterprise Payment Gateway",
    },
    {
      name: "SSLCommerz",
      subtitle: "Local & International Payments",
    },
    {
      name: "AamarPay",
      subtitle: "Fast Checkout Experience",
    },

  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
             <MdOutlinePayment/> Payment Solutions
            </div>

          <h2 className="text-5xl font-normal text-slate-900 leading-[1.2] mb-6">
            One checkout system <br />
            for every payment.
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Accept payments from cards, mobile banking, and online gateways.
            Connect your preferred provider or start instantly with EmventoryPay
            — managed completely by our team.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-6 gap-10 items-stretch">

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {gateways.map((item, i) => (
              <div
                key={i}
                className={`rounded-[32px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  item.active
                    ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4
                      className={`text-xl font-bold ${
                        item.active ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.name}
                    </h4>

                    <p
                      className={`text-sm leading-relaxed ${
                        item.active ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                      item.active
                        ? "bg-white/10 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.active ? <FiZap size={20} /> : <FiShield size={20} />}
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 text-sm font-bold ${
                    item.active ? "text-white" : "text-slate-700"
                  }`}
                >
                  <span>Learn More</span>

                  <FiArrowRight />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-[32px] bg-[#020617] text-white p-6 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px]" />

            {/* Top */}
            <div className="relative z-10 flex items-center justify-between mb-8">
              <div>
                <p className="text-xs  tracking-[0.1em] text-slate-500 font-bold mb-3">
                  emventoryPay
                </p>

                <h3 className="text-3xl font-medium tracking-tight ">
                  Start accepting payments <br />
                  without legal hassle.
                </h3>
              </div>

              <div className="h-16 w-16 rounded-[20px] bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <FiCreditCard size={24} />
              </div>
            </div>

            {/* Mock Checkout UI */}
            <div className="relative z-10 rounded-[24px] bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Checkout Amount</p>

                  <h4 className="text-3xl font-bold">৳ 12,480</h4>
                </div>

                <div className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                  Secure Payment
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <FiSmartphone className="text-blue-400 mb-4" size={22} />

                  <h5 className="font-medium mb-1">Mobile Banking</h5>

                  <p className="text-sm text-slate-400">bKash, Nagad, Rocket</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <FiGlobe className="text-blue-400 mb-4" size={22} />

                  <h5 className="font-medium mb-1">Card Payments</h5>

                  <p className="text-sm text-slate-400">
                    Visa, Mastercard, Amex
                  </p>
                </div>
              </div>

              {/* Action */}
              <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-3 ">
                Complete Payment
                <FiArrowRight />
              </button>
            </div>

            {/* Bottom Features */}
            <div className="relative z-10 grid md:grid-cols-3 gap-4 mt-4">
              {[
                "No documentation needed",
                "Instant activation",
                "Managed by Emventory",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-4"
                >
                  <div className="h-7 w-7 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <FiCheckCircle size={14} />
                  </div>

                  <p className="text-[12px] font-normal text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentGateway;
