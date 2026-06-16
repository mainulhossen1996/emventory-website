import React from 'react';
import { 
  FiShoppingBag, FiCreditCard, FiTruck, FiLayers, 
  FiRefreshCw, FiPieChart, FiUsers, FiAward, 
  FiTrendingUp, FiUserCheck, FiDatabase, FiMessageSquare,
  FiCpu, FiGitCommit, FiBriefcase, FiGift, FiSliders
} from 'react-icons/fi';

export default function IntegrationMatrix() {
  return (
    <section className="w-full bg-white py-24 px-0 select-none overflow-hidden relative">


      <div className="w-full max-w-screen-2xl mx-auto relative z-10">
        

        <div className="text-center max-w-3xl mx-auto  space-y-3 px-4">

          <h2 className="text-2xl sm:text-5xl font-medium text-slate-900 tracking-tight mx-auto leading-tight">
            One platform.<br/>Every operational node connected.
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate system fragmentation. Drive omnichannel POS networks, global cashflows, branch logistics, and workforce incentives through a centralized cloud engine.
          </p>
        </div>


        <div className="relative w-full [mask-image:linear-gradient(to_bottom,transparent_0%,white_12%,white_88%,transparent_100%),linear-gradient(to_right,transparent_0%,white_12%,white_88%,transparent_100%)] [mask-composite:intersect]">

          <div className="grid grid-cols-6 border-t border-l border-slate-200/70 bg-white">
            

            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />


            {/* Left Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />
            
            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiSliders className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Omni-channel POS</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Cloud storefront registers</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiGitCommit className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Product Transfers</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Inter-branch stock routing</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiCpu className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Multi-Branch Sync</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Real-time localized ledgers</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiRefreshCw className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Ledger Accounts</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Automated cashflow books</p>
              </div>
            </div>
            {/* Right Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />



            {/* Left Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />
            
            {/* E-COMMERCE CLOUD */}
            <div className="col-span-2 border-r border-b border-slate-200/70 p-6 flex flex-col justify-between relative bg-gradient-to-br from-blue-500/[0.01] to-transparent min-h-[175px]">
              <div className="flex justify-between items-start">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <FiShoppingBag size={14} />
                </div>
                <span className="text-[9px] font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Storefront</span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-slate-900">E-commerce Cloud</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed font-normal">
                  Native multi-tenant checkout environments. Sync global catalog updates, deploy dynamic pixel events, and automate web checkout funnels seamlessly.
                </p>
              </div>
            </div>

            {/* PAYMENT INFRASTRUCTURE */}
            <div className="col-span-2 border-r border-b border-slate-200/70 p-6 flex flex-col justify-between relative bg-gradient-to-br from-emerald-500/[0.01] to-transparent min-h-[175px]">
              <div className="flex justify-between items-start">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <FiCreditCard size={14} />
                </div>
                <span className="text-[9px] font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Settlements</span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-slate-900">Unified Payments</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed font-normal">
                  Direct routing architecture mapping transaction parameters across local and global digital cards with instant web reconciliation.
                </p>
              </div>
            </div>
            {/* Right Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />



            {/* Left Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />
            
            {/* LOGISTICS & FULFILLMENT */}
            <div className="col-span-2 border-r border-b border-slate-200/70 p-6 flex flex-col justify-between relative bg-gradient-to-br from-indigo-500/[0.01] to-transparent min-h-[175px]">
              <div className="flex justify-between items-start">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <FiTruck size={14} />
                </div>
                <span className="text-[9px] font-mono font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Logistics</span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-slate-900">Fulfillment Pipelines</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed font-normal">
                  Automated parcel routes linking directly to dispatch APIs. Generate shipping manifests, waybill records, and trigger localized sorting hooks.
                </p>
              </div>
            </div>

            {/* META LAYER */}
            <div className="col-span-2 border-r border-b border-slate-200/70 p-6 flex flex-col justify-between relative bg-gradient-to-br from-pink-500/[0.01] to-transparent min-h-[175px]">
              <div className="flex justify-between items-start">
                <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
                  <FiLayers size={14} />
                </div>
                <span className="text-[9px] font-mono font-medium text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-100">Marketing</span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-slate-900">Meta CAPI Marketing</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed font-normal">
                  Server-to-server tracking nodes pushing audience telemetry accurately. Bypass user-agent data blocking to optimize ad attribution metrics.
                </p>
              </div>
            </div>
            {/* Right Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />



            {/* Left Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />
            
            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiBriefcase className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Employee Logs</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Shift & access tier controls</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiGift className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Sales Incentives</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Commission tracking matrices</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiUserCheck className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Customer CRM</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Unified identity graph</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiAward className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Loyalty Tiers</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Points & retention profiles</p>
              </div>
            </div>
            {/* Right Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />



            {/* Left Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />
            
            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiUsers className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Suppliers Hub</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Sourcing & purchasing orders</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiTrendingUp className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Campaigns Info</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Cross-channel promotions</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiDatabase className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Live Inventory</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Stock thresholds alerts</p>
              </div>
            </div>

            <div className="border-r border-b border-slate-200/70 p-5 flex flex-col justify-between bg-white hover:bg-slate-50/50 transition-colors min-h-[135px]">
              <FiMessageSquare className="text-slate-400" size={16} />
              <div>
                <h4 className="text-[16px] font-medium text-slate-800">Dispatch Alerts</h4>
                <p className="text-[13px] text-slate-400 mt-0.5">Automated SMS integrations</p>
              </div>
            </div>
            {/* Right Blank */} <div className="border-r border-b border-slate-200/70 bg-slate-50/[0.02]" />



            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />
            <div className="border-r border-b border-slate-200/70 h-16 bg-slate-50/[0.02]" />

          </div>
        </div>

      </div>
    </section>
  );
}