"use client";
import React from "react";
import Plans from "./Plans";
import FAQ from "../Home/FAQ";
import PriceSticky from "./PriceSticky";

const PricingPage = () => {
  const plansData = [
    {
      name: 'Retail POS',
      price: '1000 BDT',
      period: "Monthly",
      cta: 'Get Started',
      link: "https://store.emventory.com/",
    },
    {
      name: 'E-commerce',
      price: '2500 BDT',
      period: "Monthly",
      cta: 'Get Started',
      link: "https://store.emventory.com/",
    },
    {
      name: 'Enterprise',
      price: '5000 BDT',
      period: "Monthly",
      cta: 'Get Started',
      link: "https://store.emventory.com/",
    },
  ];

  const featuresData = [
    { name: "15-Day Free Trial", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Product & Inventory Management", POS: true, Ecommerce: true, Enterprise: true },
    { name: "SKU & Barcode Management", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Multi-Store Management", POS: false, Ecommerce: false, Enterprise: true },
    { name: "Product Transfer Between Stores", POS: false, Ecommerce: false, Enterprise: true },
    { name: "Discount Management", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Product Bundles / Packages", POS: false, Ecommerce: false, Enterprise: true },
    { name: "Promotional Campaign Management", POS: false, Ecommerce: true, Enterprise: true },
    { name: "E-commerce Integration", POS: false, Ecommerce: true, Enterprise: true },
    { name: "Supplier Management", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Expense Tracking", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Sales Reports", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Inventory Reports", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Customer Reports", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Supplier Reports", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Accounting Reports", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Customer Profiles", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Due & Payment Collection", POS: true, Ecommerce: false, Enterprise: true },
    { name: "POS Product Sales", POS: true, Ecommerce: false, Enterprise: true },
    { name: "Package / Bundle Sales", POS: true, Ecommerce: false, Enterprise: true },
    { name: "Campaign Sales", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Delivery Partner Integration", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Payment Gateway Integration", POS: true, Ecommerce: true, Enterprise: true },
    { name: "Meta Integration", POS: false, Ecommerce: true, Enterprise: true },
    { name: "Role-Based Access Control", POS: false, Ecommerce: false, Enterprise: true },
  ];

  return (
    <section className="">
      <Plans />  
      <PriceSticky plans={plansData} features={featuresData} />{" "}
    </section>
  );
};

export default PricingPage;

