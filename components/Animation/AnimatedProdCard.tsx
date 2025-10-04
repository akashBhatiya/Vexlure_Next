"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedProdCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "fade";
}

const AnimatedProdCard: React.FC<AnimatedProdCardProps> = ({
  children,
  className = "",
  index = 0,
  delay = 0,
  direction = "fade",
}) => {
  // Reduced offset for mobile/tablet, normal for desktop
  const offset = direction === "left" || direction === "right" ? 60 : 40;

  // ✅ Variants object with direction handling
  const cardVariants: Variants = {
    hidden:
      direction === "left"
        ? { opacity: 0, x: -offset }
        : direction === "right"
        ? { opacity: 0, x: offset }
        : direction === "up"
        ? { opacity: 0, y: 30 } // Much smaller y offset for mobile/tablet
        : direction === "down"
        ? { opacity: 0, y: -30 }
        : { opacity: 0 }, // Simple fade without scale

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween", // Changed from spring to tween for smoother animation
        ease: "easeOut",
        duration: 0.6,
        delay: index * 0.12 + delay, // Slightly increased stagger
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, // Changed to true - animate only once for better performance
        margin: "-50px", // Start animation when element is 50px inside viewport
        amount: 0.1 // Trigger when 10% of element is visible
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedProdCard;
