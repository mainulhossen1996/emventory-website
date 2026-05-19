import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMessageCircle,
  FiSend,
  FiBarChart2,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";
import { FaMeta } from "react-icons/fa6";

const MetaIntegration = () => {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT VISUAL */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />

            {/* Main Card */}
            <div className="relative z-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-2">
                    Meta Integration
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Manage Everything
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100">
                    <FiFacebook size={22} />
                  </div>

                  <div className="h-12 w-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-100">
                    <FiInstagram size={22} />
                  </div>
                </div>
              </div>

              {/* Flow UI */}
              <div className="space-y-4">

                {/* Product Sync */}
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <FiLayers size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        Product Catalog Sync
                      </h4>
                      <p className="text-sm text-slate-500">
                        Auto-update products & stock
                      </p>
                    </div>
                  </div>

                  <FiCheckCircle className="text-emerald-500" size={20} />
                </div>

                {/* Ads */}
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
                      <FiTrendingUp size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        Ad Campaign Manager
                      </h4>
                      <p className="text-sm text-slate-500">
                        Launch & track Meta ads
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Running
                  </div>
                </div>

                {/* Chat */}
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-start gap-4">

                    <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                      <FiMessageCircle size={22} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-slate-900">
                            Customer Chat Inbox
                          </h4>
                          <p className="text-sm text-slate-500">
                            Messenger & Instagram DM
                          </p>
                        </div>

                        <div className="text-xs font-bold text-blue-600">
                          12 New
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white border border-slate-100 rounded-2xl p-3 text-sm text-slate-600 flex items-center justify-between">
                          Product available in black?
                          <FiSend className="text-slate-400" />
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-3 text-sm text-slate-600 flex items-center justify-between">
                          Delivery charge for Dhaka?
                          <FiSend className="text-slate-400" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="rounded-2xl bg-blue-600 p-5 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <FiBarChart2 size={20} />
                    <span className="text-xs font-semibold opacity-70">
                      THIS MONTH
                    </span>
                  </div>

                  <h4 className="text-3xl font-bold mb-1">
                    4.8M
                  </h4>

                  <p className="text-sm text-blue-100">
                    Total Ad Reach
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <FiUsers size={20} />
                    <span className="text-xs font-semibold opacity-70">
                      ACTIVE
                    </span>
                  </div>

                  <h4 className="text-3xl font-bold mb-1">
                    2,340
                  </h4>

                  <p className="text-sm text-slate-400">
                    Customer Conversations
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            
             
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
               <FaMeta/> Meta Business Suite
              </div>
           

            <h2 className="text-5xl font-normal text-slate-900 leading-[1.2] mb-6">
              Run your entire <br />
              Meta business from Emventory.
            </h2>

            <p className="text-lg text-slate-500 font-normal leading-relaxed mb-10 max-w-xl">
              Manage Facebook & Instagram shops, launch ad campaigns,
              sync products automatically, and reply to customer messages —
              all from one connected dashboard inside Emventory.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">

              {[
                "Auto product sync",
                "Facebook & Instagram shop",
                "Customer inbox management",
                "Campaign analytics",
                "Real-time inventory updates",
                "Boost posts & ads instantly",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-5 py-4"
                >
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <FiCheckCircle size={14} />
                  </div>

                  <p className="text-sm font-semibold text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <button className="w-full md:w-auto px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-3 ">
              Connect Meta Business
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MetaIntegration;