import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function GlassCard({
  children,
  className = '',
  tilt = true,
  glowColor = 'rgba(139, 92, 246, 0.3)',
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
      }}
      className={`relative rounded-2xl glass-card transition-colors duration-300 overflow-hidden ${
        isHovered ? 'border-violet-500/40 shadow-[0_10px_35px_-5px_rgba(139,92,246,0.3)]' : ''
      } ${className}`}
      {...props}
    >
      {/* Dynamic ambient hover glow orb */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at 50% 50%, ${glowColor}, transparent 50%)`,
        }}
      />

      {/* Card Content with 3D depth */}
      <div className="relative z-10 w-full h-full" style={{ transform: 'translateZ(18px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
