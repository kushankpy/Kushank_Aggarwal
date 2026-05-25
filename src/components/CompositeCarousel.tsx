"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/composite1.png",
  "/assets/composite2.png",
  "/assets/composite4.png",
  "/assets/composite6.jpeg",
  "/assets/composite5.png",
];

export default function CompositeCarousel() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center h-[550px] w-full overflow-hidden">

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-[999] pointer-events-auto
           h-12 w-12 rounded-full
           bg-black/50 backdrop-blur-md
           border border-white/20
           text-white
           hover:bg-black/70
           transition"
      >
        ←
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 z-[999] pointer-events-auto
           h-12 w-12 rounded-full
           bg-black/50 backdrop-blur-md
           border border-white/20
           text-white
           hover:bg-black/70
           transition"
      >
        →
      </button>

      {images.map((image, index) => {
        const offset = index - active;

        return (
          <motion.div
            key={index}
            animate={{
              x: offset * 220,
              scale: offset === 0 ? 1 : 0.82,
              rotateY: offset === 0 ? 0 : offset > 0 ? -25 : 25,
              zIndex: 100 - Math.abs(offset),
              opacity: Math.abs(offset) > 2 ? 0 : 1,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="absolute cursor-pointer select-none"
            onClick={() => setActive(index)}
          >
            <img
              src={image}
              alt=""
              className={`
                rounded-3xl object-cover shadow-2xl transition-all duration-300
                ${
                  offset === 0
                    ? "w-[420px]"
                    : "w-[260px] brightness-75"
                }
              `}
            />
          </motion.div>
        );
      })}
    </div>
  );
}