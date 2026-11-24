import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is clickable
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHoveringClickable(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, shouldReduceMotion]);

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHoveringClickable ? 24 : 16),
          y: mousePosition.y - (isHoveringClickable ? 24 : 16),
          width: isHoveringClickable ? 48 : 32,
          height: isHoveringClickable ? 48 : 32,
          borderColor: isHoveringClickable ? 'rgba(6, 182, 212, 0.8)' : 'rgba(139, 92, 246, 0.5)',
          backgroundColor: isHoveringClickable ? 'rgba(6, 182, 212, 0.15)' : 'rgba(139, 92, 246, 0.05)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          borderWidth: 1.5,
          backdropFilter: isHoveringClickable ? 'blur(2px)' : 'none',
        }}
      />

      {/* Center Precision Pin */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHoveringClickable ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
        }}
      />
    </>
  );
}
