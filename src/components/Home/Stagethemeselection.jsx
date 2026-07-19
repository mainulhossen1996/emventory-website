import React from "react";
import {
  FiCheck,
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
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiPhoneCall,
  FiUploadCloud,
} from "react-icons/fi";

// Stage 0 of the ProcessVisualizer: pick a theme, preview it live, and set brand assets.
export const StageThemeSelection = ({ active, themeOptions, selectedTheme }) => {
  return (
    <div
      className={`absolute inset-0 p-6 pb-0 flex flex-col transition-all duration-300 ease-in-out ${
        active
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="mb-2 pb-2 shrink-0">
        <h3 className="text-xs font-semibold text-slate-800">
          Ecommerce Theme
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Choose a design layout that perfectly matches your brand.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-5 shrink-0">
        {themeOptions.map((theme) => {
          const isSelected = selectedTheme === theme.id;
          return (
            <div
              key={theme.id}
              className={`rounded-xl border p-2 transition-all duration-200 bg-white relative border-slate-200/80 ${
                isSelected
                  ? "border-blue-600 bg-slate-50/30 ring-1 ring-blue-600"
                  : ""
              }`}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 z-10 h-4 w-4 rounded-full bg-slate-900 text-white flex items-center justify-center">
                  <FiCheck size={9} strokeWidth={4} />
                </span>
              )}
              <div className="rounded-lg border border-slate-100 h-24 mb-3 bg-slate-50 overflow-hidden relative">
                <img
                  src={theme.bgImg}
                  alt={theme.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xs font-bold text-slate-900 truncate">
                {theme.name}
              </h4>
              <p className="text-[9px] text-slate-400 truncate mt-0.5">
                {theme.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-4 w-full gap-4">
        <div className="col-span-3">
          <p className="text-xs font-semibold pb-2">
            Selected Theme
          </p>
          <div className="border border-gray-200 rounded-2xl max-w-[1100px] mx-auto bg-white">
            <div className="border-b border-gray-100 p-4 py-2 flex justify-between items-center">
              <div>
                <p className="font-semibold text-[10px]">
                  Default Minimal
                </p>
                <p className="text-[8px] text-gray-400">
                  Updated 20th July, 2026
                </p>
              </div>

              <button className="bg-slate-900 hover:bg-black text-white px-2 py-1.5 rounded-md font-semibold text-[9px] transition-colors cursor-pointer shadow-sm">
                View Live
              </button>
            </div>
            <div className="w-full overflow-hidden font-sans text-slate-800">
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
              <div className="m-6 p-10 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/40 relative overflow-hidden flex items-center min-h-[260px]">
                <div className="z-10 max-w-[400px]">
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                    Everything you need, <br />
                    all in one place
                  </h1>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    Discover amazing products at great prices.
                    <br />
                    Fast delivery, easy returns.
                  </p>
                  <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/10 transition-all cursor-pointer">
                    <span>Shop Now</span>
                    <FiArrowRight size={13} />
                  </button>
                </div>

                {/* Simulated Illustration Vector Graphic (Right Side) */}
                <div className="absolute right-5 bottom-8 w-60 h-full flex items-end justify-center pointer-events-none select-none">
                  <img src="/images/herocart.png" />
                </div>

                {/* Carousel Pagination Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
              </div>

              {/* 3. CATEGORIES ROW */}
              <div className="px-6 grid grid-cols-7 gap-3">
                {[
                  { icon: <FiSmartphone />, label: "Electronics" },
                  { icon: <FiTv />, label: "Fashion" },
                  { icon: <FiHome />, label: "Home & Living" },
                  { icon: <FiSmile />, label: "Toys & Games" },
                  { icon: <FiVolume2 />, label: "Books" },
                  { icon: <FiBookOpen />, label: "Home Decor" },
                  { icon: <FiPackage />, label: "Fitness" },
                ].map((cat, i) => (
                  <div
                    key={i}
                    className="border border-slate-100/80 hover:border-slate-200 hover:shadow-sm rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all bg-white group"
                  >
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-medium text-slate-600 tracking-tight">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 4. FEATURED PRODUCTS SECTION */}
              <div className="px-6 mt-8">
                <div className="flex justify-between items-baseline mb-4">
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

              {/* 5. VALUES & TRUST FOOTER BANNER */}
              <div className="mx-6 my-7 p-4 rounded-xl bg-slate-50/80 border border-slate-100 grid grid-cols-4 gap-4 divide-x divide-slate-200/60">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                    <FiTruck size={14} />
                  </div>
                  <div>
                    <h6 className="text-[11px] font-bold text-slate-800 leading-none">
                      Free Shipping
                    </h6>
                    <p className="text-[9px] text-slate-400 mt-1">
                      On orders over $50
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center pl-4">
                  <div className="w-8 h-8 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                    <FiShield size={14} />
                  </div>
                  <div>
                    <h6 className="text-[11px] font-bold text-slate-800 leading-none">
                      Secure Payment
                    </h6>
                    <p className="text-[9px] text-slate-400 mt-1">
                      100% of safe payment
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center pl-4">
                  <div className="w-8 h-8 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                    <FiRotateCcw size={14} />
                  </div>
                  <div>
                    <h6 className="text-[11px] font-bold text-slate-800 leading-none">
                      Easy Returns
                    </h6>
                    <p className="text-[9px] text-slate-400 mt-1">
                      30 days return policy
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center pl-4">
                  <div className="w-8 h-8 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                    <FiPhoneCall size={14} />
                  </div>
                  <div>
                    <h6 className="text-[11px] font-bold text-slate-800 leading-none">
                      24/7 Support
                    </h6>
                    <p className="text-[9px] text-slate-400 mt-1">
                      We're here to help
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-xs font-semibold pb-2">
            Theme Settings
          </p>
          <div className="border border-gray-200 rounded-2xl mx-auto bg-white p-3">
            <p className="font-semibold text-[10px] mb-2">Brand Logo</p>

            {/* Upload Box */}
            <label className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center h-20 cursor-pointer hover:bg-slate-50 transition-all group mb-4">
              <div className="flex flex-col items-center text-slate-400 group-hover:text-blue-600 transition-colors">
                <FiUploadCloud size={24} className="mb-2" />
                <span className="text-[8px] font-medium">Click to upload or drag and drop</span>
                <span className="text-[7px] text-slate-400">PNG, JPG up to 2MB</span>
              </div>
              <input type="file" className="hidden" accept="image/*" />
            </label>

            <p className="font-semibold text-[10px] mb-2">Favicon</p>

            {/* Upload Box */}
            <label className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center h-20 cursor-pointer hover:bg-slate-50 transition-all group mb-4">
              <div className="flex flex-col items-center text-slate-400 group-hover:text-blue-600 transition-colors">
                <FiUploadCloud size={24} className="mb-2" />
                <span className="text-[8px] font-medium">Click to upload or drag and drop</span>
                <span className="text-[7px] text-slate-400">PNG, JPG up to 2MB</span>
              </div>
              <input type="file" className="hidden" accept="image/*" />
            </label>

            <p className="font-semibold text-[10px] mb-2">Color Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageThemeSelection;