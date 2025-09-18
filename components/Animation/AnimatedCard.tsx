"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = "", 
  index = 0,
  delay = 0
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
