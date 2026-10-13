import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export const ScrollProgress: React.FC = () => {
  const prefersReducedMotion = useReducedMotionPreference();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="scroll-progress-container"
      role="progressbar"
      aria-hidden="true"
    >
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
};
