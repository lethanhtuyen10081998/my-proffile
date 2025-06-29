"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 bg-blue-400/20 rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 0.3,
      }}
    />
  );
}
