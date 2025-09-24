"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCardMobileProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  delay?: number;
}

const AnimatedCardMobile: React.FC<AnimatedCardMobileProps> = ({ 
  children, 
  className = "", 
  index = 0,
  delay = 0
}) => {
  const [hasInitiallyAnimated, setHasInitiallyAnimated] = useState(false);

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setHasInitiallyAnimated(true);
    }, 300 + (index * 100));
    return () => clearTimeout(timer);
  }, [index]);

  const cardVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
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
      animate={hasInitiallyAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: false, margin: "0px", amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardMobile;
