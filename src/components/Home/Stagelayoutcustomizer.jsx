import React from "react";
import {
  FiEye,
  FiLayers,
  FiLayout,
  FiGrid,
  FiMenu,
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiHeart,
  FiArrowRight,
  FiSmartphone,
  FiTv,
  FiHome,
  FiSmile,
  FiVolume2,
  FiBookOpen,
  FiPackage,
  FiImage,
} from "react-icons/fi";

const SECTION_PANELS = [
  { id: "Header", icon: FiLayers },
  { id: "Hero Banner", icon: FiLayout },
  { id: "Products", icon: FiGrid },
  { id: "Footer", icon: FiMenu },
];

export const StageLayoutCustomizer = ({ active, activeSection }) => {
  return (
    <div
      className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out ${
        active
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200/70 bg-slate-50/40 shrink-0">
        <span className="text-[11px] font-semibold text-gray-800 flex items-center gap-1.5">
          <FiEye size={13} className="text-slate-400" /> Page
          Editor:{" "}
          <span className="font-mono text-slate-500">
            {activeSection}
          </span>
        </span>
        <button className="bg-slate-900 hover:bg-black text-white px-2 py-1.5 rounded-md font-semibold text-[9px] transition-colors cursor-pointer shadow-sm">
          Publish Theme
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden bg-gray-100">
        {/* Interior Left Nodes Column */}
        <div className=" bg-white w-[170px] border-r border-slate-200 bg-slate-50/40 p-2 flex flex-col gap-1 shrink-0">
          <span className="text-[9px] font-bold text-gray-600 mb-1 block">
            Section
          </span>
          {SECTION_PANELS.map((panel) => {
            const isEditing = activeSection === panel.id;
            return (
              <div
                key={panel.id}
                className={`w-full rounded-xl py-2 text-left transition-all border ${
                  isEditing
                    ? "bg-white text-slate-900 font-bold border-slate-200 shadow-sm"
                    : "text-gray-700 border-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <panel.icon
                    size={12}
                    className={
                      isEditing
                        ? "text-slate-900"
                        : "text-slate-400"
                    }
                  />
                  <span className="text-[10px]">{panel.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Canvas Render */}
        <div className="w-full overflow-hidden font-sans text-slate-800 bg-white m-4 mb-0">
          {/* 1. NAVBAR */}
          <nav className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
            {/* Logo */}
            <div className="flex items-center gap-1 font-semibold text-xs text-slate-900 cursor-pointer">
              <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white shadow-sm">
                <FiShoppingCart size={12} />
              </div>
              <span>DemoStore</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-3 text-[8px] font-medium text-slate-600">
              <a
                href="#"
                className="text-blue-600 border-b-1 border-blue-600 pb-0.5 font-semibold"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-slate-900 border-b-1 border-white transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="hover:text-slate-900 border-b-1 border-white transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="hover:text-slate-900 border-b-1 border-white transition-colors"
              >
                Deals
              </a>
              <a
                href="#"
                className="hover:text-slate-900 border-b-1 border-white transition-colors"
              >
                About Us
              </a>
            </div>

            {/* Search Bar & Actions */}
            <div className="flex items-center gap-4">
              <div className="relative w-36">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-slate-100/80 border-none rounded-full pl-4 pr-9 py-1.5 text-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 placeholder-slate-400"
                />
                <FiSearch
                  className="absolute right-3 top-2.5 text-slate-400"
                  size={12}
                />
              </div>

              <div className="flex items-center gap-3.5 text-slate-600">
                <button className="hover:text-slate-900 transition-colors">
                  <FiUser size={12} />
                </button>
                <button className="hover:text-slate-900 transition-colors">
                  <FiHeart size={12} />
                </button>
                <button className="relative hover:text-slate-900 transition-colors">
                  <FiShoppingCart size={12} />
                  <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[6px] font-bold w-3 h-3 rounded-full flex items-center justify-center scale-90">
                    2
                  </span>
                </button>
              </div>
            </div>
          </nav>

          {/* 2. HERO BANNER */}
          <div className="m-6 mb-4 h-54 rounded-2xl bg-slate-100 border border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden">
            {/* The core image representation icon */}
            <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
              <FiImage size={64} className="stroke-[1]" />
            </div>

            {/* Subtly dynamic placeholder label */}
            <div className="absolute bottom-10 left-4 right-4 text-center">
              <p className="text-base font-mono font-medium text-slate-400">
                Hero Banner
              </p>
            </div>
          </div>

          {/* 3. CATEGORIES ROW */}
          <div className="px-6 grid grid-cols-6 gap-3">
            {[
              { icon: <FiSmartphone />, label: "Electronics" },
              { icon: <FiTv />, label: "Fashion" },
              { icon: <FiHome />, label: "Home & Living" },
              { icon: <FiSmile />, label: "Toys & Games" },
              { icon: <FiVolume2 />, label: "Books" },
              { icon: <FiBookOpen />, label: "Home Decor" },
            ].map((cat, i) => (
              <div
                key={i}
                className="border border-slate-100/80 hover:border-slate-100 hover:border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all bg-white group"
              >
                <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-medium text-slate-600 tracking-tight">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 4. FEATURED PRODUCTS SECTION */}
          <div className="px-6 mt-4">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">
                Featured Products
              </h3>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-0.5"
              >
                <span>View All</span>
                <FiArrowRight size={11} />
              </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-6 gap-3.5">
              {[
                { name: "Smart Watch", price: "$149.99" },
                { name: "Wireless Headphone", price: "$36.99" },
                { name: "Backpack", price: "$24.99" },
                { name: "Ceramic Mug", price: "$12.99" },
                { name: "Desk Plant", price: "$14.99" },
                { name: "Sneakers", price: "$49.99" },
              ].map((prod, i) => (
                <div
                  key={i}
                  className="border border-slate-100/70 rounded-xl p-3 bg-white flex flex-col justify-between hover:shadow-md hover:shadow-slate-100 transition-shadow group relative"
                >
                  {/* Product Visual Area */}
                  <div className="h-24 w-full bg-slate-50 rounded-lg flex items-center justify-center relative overflow-hidden mb-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
                      <FiPackage size={20} />
                    </div>
                  </div>

                  {/* Text Meta Info */}
                  <div>
                    <h5 className="text-[11px] font-medium text-slate-700 truncate">
                      {prod.name}
                    </h5>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-bold text-slate-900">
                        {prod.price}
                      </span>
                      <button className="w-5 h-5 rounded bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                        <FiShoppingCart size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageLayoutCustomizer;