"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "tr";
}

/**
 * Максимально сдержанное проявление при прокрутке — только плавная
 * непрозрачность, без сдвигов. Документальный тон, минимум движения.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
