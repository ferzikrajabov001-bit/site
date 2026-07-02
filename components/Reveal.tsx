"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "tr";
}

/**
 * Очень сдержанное появление при прокрутке: лёгкое проявление и минимальный
 * сдвиг. Уважает системную настройку «уменьшить движение».
 */
export function Reveal({
  children,
  delay = 0,
  y = 12,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
