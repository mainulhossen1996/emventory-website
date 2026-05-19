"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SideScroll() {
  const containerRef = useRef(null);
  const cardCount = 3; // number of cards

  // total horizontal movement (100vw per card after the first)
  const totalX = `-${(cardCount - 1) * 100}vw`;

  // Observe vertical scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal translate
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", totalX]);

  const cards = [
    {
      title: "Built for Every Business — Scale with us",
      image: "/images/demo2.png",
      description: "From small shops.",
    },
    {
      title: "Built for Every Business — Scale with us",
      image: "/public/images/demo1.png",
      description: "To enterprise.",
    },
    {
      title: "Built for Every Business — Scale with us",
      image: "/images/demo2.png",
      description: "We scale with you.",
    },
  ];

  return (
    // The scroll container — determines how long the effect lasts
    <section
      ref={containerRef}
      className={`relative h-[${cardCount * 100}vh] bg-gray-100`}
    >
      {/* Sticky viewport that stays fixed while scroll happens */}
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-screen h-full flex flex-col bg-[#000540] text-white p-14 shrink-0"
            >
              <div>
                <h2 className="w-4/7 text-5xl font-extrabold pt-20">
                  {card.title}
                </h2>
              </div>

              <div className="w-full h-full flex flex-col justify-start items-end">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1200}
                  height={1000}
                  className="object-cover rounded-xl mb-8 w-[55%] h-[75%]"
                />
                <p className="text-4xl font-extrabold">{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
