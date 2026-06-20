"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function HeroBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    // Continuous rotation for the text ring
    anime({
      targets: '.spin-ring',
      rotateZ: 360,
      duration: 15000,
      easing: 'linear',
      loop: true
    });

    const container = containerRef.current;
    const badge = badgeRef.current;

    if (!container || !badge) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Calculate mouse position relative to container center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic pull effect
      anime({
        targets: badge,
        translateX: x * 0.3,
        translateY: y * 0.3,
        rotateX: -y * 0.05,
        rotateY: x * 0.05,
        duration: 800,
        easing: 'easeOutElastic(1, .5)'
      });
    };

    const handleMouseLeave = () => {
      anime({
        targets: badge,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1000,
        easing: 'easeOutElastic(1, .5)'
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative cursor-crosshair perspective-[1000px]"
    >
      <div 
        ref={badgeRef}
        className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* The rotating SVG text ring */}
        <div className="absolute inset-0 spin-ring opacity-80 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full text-secondary fill-current origin-center">
            <path
              id="textPath"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              fill="none"
            />
            <text className="font-label-mono-bold text-[0.8rem] uppercase tracking-[0.2em]">
              <textPath href="#textPath" startOffset="0%">
                FULL STACK & AI • PROBLEM SOLVER •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Inner static icon / geometry */}
        <div className="absolute flex items-center justify-center w-24 h-24 bg-surface-dim border border-secondary rounded-full overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
          <div className="absolute w-full h-full opacity-20" style={{ backgroundImage: "linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
          <span className="font-display-xl font-bold text-4xl text-primary relative z-10">K</span>
        </div>
        
        {/* Accent lines */}
        <div className="absolute w-[120%] h-px bg-secondary opacity-20 rotate-45" style={{ transform: 'translateZ(-10px)' }}></div>
        <div className="absolute w-[120%] h-px bg-secondary opacity-20 -rotate-45" style={{ transform: 'translateZ(-10px)' }}></div>
      </div>
    </div>
  );
}
