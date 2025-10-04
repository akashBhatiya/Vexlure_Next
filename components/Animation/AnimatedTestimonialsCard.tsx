"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTestimonialsCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "fade";
}

const AnimatedTestimonialsCard: React.FC<AnimatedTestimonialsCardProps> = ({ 
  children, 
  className = "", 
  index = 0,
  delay = 0,
  direction = "up"
}) => {
  const offset = 60;
  
  const cardVariants: Variants = {
    hidden:
      direction === "left"
        ? { opacity: 0, x: -offset }
        : direction === "right"
        ? { opacity: 0, x: offset }
        : direction === "up"
        ? { opacity: 0, y: 40 }
        : direction === "down"
        ? { opacity: 0, y: -40 }
        : { opacity: 0 },
    
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
        delay: index * 0.05 + delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, margin: "-100px", amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTestimonialsCard;
