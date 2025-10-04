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
  // Use scale and fade instead of horizontal movement to prevent overflow
  const cardVariants: Variants = {
    hidden:
      direction === "left" || direction === "right"
        ? { opacity: 0, scale: 0.95 } // Use scale instead of x-offset
        : direction === "up"
        ? { opacity: 0, y: 20, scale: 0.98 } // Reduced y offset
        : direction === "down"
        ? { opacity: 0, y: -20, scale: 0.98 }
        : { opacity: 0, scale: 0.95 }, // Simple fade with scale

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
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
