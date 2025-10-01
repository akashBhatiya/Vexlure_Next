"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedFlexSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedFlexSection: React.FC<AnimatedFlexSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0
}) => {

  const sectionVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 150,
        delay: delay,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px", amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFlexSection;
