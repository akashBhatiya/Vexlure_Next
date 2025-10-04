"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardOnViewProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  staggerDelay?: number;
}

const AnimatedCardOnView: React.FC<AnimatedCardOnViewProps> = ({ 
  children, 
  className = "", 
  index = 0,
  delay = 0,
  staggerDelay = 0.15
}) => {
  // Calculate stagger based on grid position
  const getStaggerDelay = () => {
    if (index === 0) return delay; // First card (full width)
    if (index === 5) return delay + (staggerDelay * 2.5); // Last card (full width)
    
    // For grid cards (1-4), create a wave pattern
    const gridIndex = index - 1;
    const row = Math.floor(gridIndex / 2);
    const col = gridIndex % 2;
    
    return delay + (row * staggerDelay * 1.5) + (col * staggerDelay * 0.7);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 80,
        delay: getStaggerDelay(),
        duration: 1,
      },
    },
    hover: {
      // y: -8,
      // scale: 1.02,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 300,
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ 
        once: false, // Animate only once when entering viewport
        margin: "-100px", // Start animation 100px before entering viewport
        amount: 0.01 // Trigger when 10% of component is visible for earlier start
      }}
      style={{ perspective: 1000 }} // Add 3D perspective for rotateX
    >
      {children}
    </motion.div>
  );
};
export default AnimatedCardOnView;
