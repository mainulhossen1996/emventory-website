import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Plans = () => {
  const plans = [
    {
      name: 'Retail POS',
      price: '1000 BDT',
      description: 'Built for modern retail stores',
      cta: 'Get Started',
      link: "https://store.emventory.com/",
      popular: false,
      features: [
        'Powerful Retail POS System',
    'Product & Inventory Management',
    'Barcode Generation & Printing',
    'Customer & Due Management',
    'Sales Reports & Analytics',
    'Basic Staff Access Control'
      ]
    },
    {
      name: 'E-commerce',
      price: '2500 BDT',
      description: 'Designed for online sellers & entrepreneurs.',
      cta: 'Get Started',
      link: "https://store.emventory.com/",
      popular: false,
      features: [
        'Ecommerce Integration',
    'Subdoamin & Own Domain',
    'Order & Customer Management',
    'Payment Gateway Integration',
    'Delivery Partner Integration',
    'Meta Integration',
      ]
    },
    {
      name: 'Enterprise',
      price: '5000 BDT',
      description: 'Enginered for lage-scale operations.',
      cta: 'Get Started',
      link: "https://store.emventory.com/",
      popular: true,
      features: [
        'Multi-Store & Branch Management',
        'Advanced Inventory & Stock Transfer',
        'Employee Roles & Permissions',
        'Supplier & Expense Management',
        'Delivery & Payment Integrations',
        'Advanced Business Reports & Analytics'
      ]
    },
    
  ];

  return (
<div className="bg-black pricing-plan py-32 relative">

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90"></div>

<div className="max-w-7xl mx-auto relative z-10">
        <div className='mb-16 text-center'>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
      <FaBangladeshiTakaSign />
     Subscription Plane
    </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] text-white mb-8">
    Choose the best plans<br/>for your business.
  </h1>
  <p className='text-lg text-slate-400 text-normal'>We believe emventory should be accessible to all store, no matter size.</p>

        </div>
  
  <div className="grid md:grid-cols-3 gap-8">

    {plans.map((plan, index) => (
      <div
        key={index}
        className={`relative rounded-2xl p-8 transition-all duration-300
        backdrop-blur-xl
        border
        hover:-translate-y-2
        hover:shadow-2xl
        
        ${
          plan.popular
            ? "bg-gradient-to-b from-blue-500/20 to-blue-500/5 border-blue-400 shadow-xl shadow-blue-500/10 scale-[1.03]"
            : "bg-white/5 border-white/10"
        }
        `}
      >

        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2
          bg-blue-600 text-white text-xs font-semibold
          px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
        )}

        <div className="text-center">

          <h3 className="text-xl font-semibold text-white">
            {plan.name}
          </h3>

          <p className="mt-4 text-4xl text-white">
            {plan.price}<span className='text-lg'>/ month</span>
          </p>

          <p className="text-gray-400 mt-2 text-sm">
            {plan.description}
          </p>

          <button
  onClick={() => window.open(plan.link, "_blank")}
  className={`mt-6 w-full flex items-center justify-center gap-2
  py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
  ${
    plan.popular
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-white/10 hover:bg-blue-600 text-white"
  }`}
>
  {plan.cta}
</button>

        </div>

        <ul className="mt-8 space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-gray-300">
              <svg
                className="h-5 w-5 text-green-400 mr-3 mt-[2px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>

              {feature}
            </li>
          ))}
        </ul>

      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Plans;