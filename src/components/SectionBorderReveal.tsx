import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

type SectionBorderRevealProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

const lineTransition = {
  duration: 1,
  ease: 'easeInOut',
};

const SectionBorderReveal = ({ children, className = '', innerClassName = '' }: SectionBorderRevealProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });

  return (
    <div ref={containerRef} className={`relative isolate overflow-visible rounded-3xl ${className}`}>
      <div className={`relative z-20 rounded-[inherit] p-6 md:p-8 ${innerClassName}`}>
        {children}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]">
        <div className="absolute inset-1.5 rounded-[inherit] overflow-hidden">
        {/* Top: phase 1 */}
        <motion.span
          className="absolute left-0 top-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={lineTransition}
        />
        {/* Left: phase 1 */}
        <motion.span
          className="absolute left-0 top-0 h-full w-[2px] origin-top rounded-full bg-gradient-to-b from-brand-purple via-brand-blue to-brand-green shadow-[0_0_12px_rgba(139,92,246,0.5)]"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={lineTransition}
        />
        {/* Right: phase 2 */}
        <motion.span
          className="absolute right-0 top-0 h-full w-[2px] origin-top rounded-full bg-gradient-to-b from-brand-purple via-brand-blue to-brand-green shadow-[0_0_12px_rgba(16,185,129,0.5)]"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ ...lineTransition, delay: isInView ? 1 : 0 }}
        />
        {/* Bottom: phase 2 */}
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ ...lineTransition, delay: isInView ? 1 : 0 }}
        />
        </div>
      </div>
    </div>
  );
};

export default SectionBorderReveal;
