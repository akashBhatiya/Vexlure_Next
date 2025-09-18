"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const SplitText: React.FC<SplitTextProps> = ({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.05 
}) => {
  const [hasInitiallyAnimated, setHasInitiallyAnimated] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    if (!elementRef) return;

    // Check if element is in viewport on mount
    const rect = elementRef.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;

    if (isInViewport) {
      // If element is visible on page load, animate immediately
      const timer = setTimeout(() => {
        setHasInitiallyAnimated(true);
      }, 300 + delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [elementRef, delay]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: duration, 
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={setElementRef}
      className={className}
      variants={container}
      initial="hidden"
      animate={hasInitiallyAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-30px", amount: 0.05 }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
