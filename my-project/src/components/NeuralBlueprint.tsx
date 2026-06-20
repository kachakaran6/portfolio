"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export function NeuralBlueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dataBoxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    // Subtle pulsing animation for the data points
    anime({
      targets: '.blueprint-node',
      opacity: [0.3, 1],
      scale: [0.9, 1.1],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: () => anime.random(1500, 3000),
      delay: () => anime.random(0, 1000)
    });

    // Slow continuous rotation for the outer ring
    anime({
      targets: ringRef.current,
      rotateZ: [0, 360],
      duration: 40000,
      easing: 'linear',
      loop: true
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !dataBoxRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePos({ x, y });

      anime({
        targets: dataBoxRef.current,
        rotateX: -y * 15,
        rotateY: x * 15,
        translateX: x * 20,
        translateY: y * 20,
        duration: 800,
        easing: 'easeOutExpo'
      });
    };

    const handleMouseLeave = () => {
      if (!dataBoxRef.current) return;
      
      setMousePos({ x: 0, y: 0 });
      anime({
        targets: dataBoxRef.current,
        rotateX: 0,
        rotateY: 0,
        translateX: 0,
        translateY: 0,
        duration: 1000,
        easing: 'easeOutElastic(1, 0.5)'
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(180px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center justify-center relative perspective-[1200px]"
      >
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(var(--color-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px)",
             backgroundSize: "40px 40px",
             transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
           }} 
      />

      {/* Main Interactive Assembly */}
      <div 
        ref={dataBoxRef}
        className="relative w-80 h-80 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Outer Rotating Measurement Ring */}
        <div 
          ref={ringRef}
          className="absolute inset-0 border border-grid-line rounded-full opacity-30"
          style={{ transform: 'translateZ(-20px)' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-px bg-primary top-1/2 left-0 origin-[160px_0]"
              style={{ transform: `rotate(${i * 30}deg) translateY(-0.5px)` }}
            />
          ))}
        </div>

        {/* Central Core */}
        <div 
          className="relative w-48 h-48 bg-surface-dim border border-grid-line flex flex-col justify-between p-4 overflow-hidden backdrop-blur-sm"
          style={{ transform: 'translateZ(30px)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        >
          {/* Scanning Line Effect */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-50 blur-[1px] animate-[scan_4s_ease-in-out_infinite]" />

          {/* Top Metadata */}
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col">
              <span className="font-label-mono-bold text-[0.6rem] text-primary tracking-widest">SYS.ARCH</span>
              <span className="font-label-mono-sm text-[0.5rem] text-on-surface-variant">v2.0.4</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E53935] blueprint-node shadow-[0_0_8px_#E53935]" />
              <span className="font-label-mono-bold text-[0.5rem] text-[#E53935] tracking-widest uppercase">Live</span>
            </div>
          </div>

          {/* Center Graphic */}
          <div className="flex-grow flex items-center justify-center relative">
            <div className="absolute w-24 h-24 border border-primary opacity-20 rotate-45 transition-transform duration-1000 group-hover:rotate-90" />
            <div className="absolute w-16 h-16 border border-primary opacity-40 rotate-[22.5deg]" />
            <div className="w-8 h-8 bg-primary opacity-10 blueprint-node" />
            <div className="absolute w-1 h-1 bg-primary blueprint-node" />
          </div>

          {/* Bottom Metadata */}
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between items-center w-full border-t border-grid-line pt-2">
              <span className="font-label-mono-sm text-[0.5rem] text-on-surface-variant">LOC:</span>
              <span className="font-label-mono-bold text-[0.55rem] text-primary tracking-wider">23.02°N, 72.57°E</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="font-label-mono-sm text-[0.5rem] text-on-surface-variant">PROTOCOL:</span>
              <span className="font-label-mono-bold text-[0.55rem] text-primary tracking-wider">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Floating Abstract Nodes */}
        <div className="absolute -top-4 -right-4 w-12 h-12 border border-grid-line bg-surface flex items-center justify-center" style={{ transform: 'translateZ(60px)' }}>
          <span className="font-label-mono-bold text-[0.5rem] text-primary">0x1A</span>
        </div>
        <div className="absolute -bottom-8 -left-2 w-16 h-6 border border-grid-line bg-surface flex items-center justify-center" style={{ transform: 'translateZ(40px)' }}>
          <div className="w-full h-1/2 bg-primary opacity-20" style={{ width: '70%' }} />
        </div>
      </div>
    </div>
    </>
  );
}
