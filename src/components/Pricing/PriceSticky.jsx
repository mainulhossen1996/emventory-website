"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PriceSticky = ({ plans, features, onStickyChange }) => {


  return (
    <div className="relative">

    {/* Sticky Header */}
    <div className="bg-black/90 backdrop-blur-xs sticky top-16 z-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 py-6 px-6 items-center">
  
        <div>
          <h1 className="text-3xl text-white">
            Plan Comparison
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Discover the ideal plan for your business growth.
          </p>
        </div>
  
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
          >
            <h3 className="text-lg text-white">
              {plan.name}
            </h3>
  
            <p className="text-2xl font-bold text-white mt-2">
              {plan.price}
            </p>
  
            <span className="text-xs text-gray-400">
              {plan.period || "per month"}
            </span>
  
            <button className="mt-4 w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition cursor-pointer"
              onClick={() => window.open(plan.link, "_blank")}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  
  
    {/* Feature rows */}
    <div className="max-w-7xl mx-auto px-6 pb-16">
  
      {features.map((feature, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-8 py-6 border-b border-dashed items-center hover:bg-white/5 transition"
        >
  
          {/* Feature name */}
          <div className="text-gray-800 text-lg font-semibold">
            {feature.name}
          </div>
  
  
          {/* Basic */}
          <div className="flex justify-center">
            {feature.POS ? (
              <span className="text-green-600 text-xl">✓</span>
            ) : (
              <span className="text-gray-600 text-lg">—</span>
            )}
          </div>
  
          {/* Essential */}
          <div className="flex justify-center">
            {feature.Ecommerce ? (
              <span className="text-green-600 text-xl">✓</span>
            ) : (
              <span className="text-gray-600 text-lg">—</span>
            )}
          </div>
  
          {/* Professional */}
          <div className="flex justify-center">
            {feature.Enterprise ? (
              <span className="text-green-600 text-xl">✓</span>
            ) : (
              <span className="text-gray-600 text-lg">—</span>
            )}
          </div>
  
        </div>
      ))}
  
    </div>
  
  </div>
  );
};

export default PriceSticky;
