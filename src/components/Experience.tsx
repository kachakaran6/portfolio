"use client";

import { EXPERIENCE } from "@/lib/content";
import { useEffect, useRef } from "react";
import anime from "animejs";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = containerRef.current;
    const line = lineRef.current;
    const items = itemsRef.current?.children;
    
    if (!element || !line || !items) return;

    if (isReducedMotion) {
      line.style.transform = "scaleY(1)";
      Array.from(items).forEach(item => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: "easeOutSine",
            });

            tl.add({
              targets: line,
              scaleY: [0, 1],
              duration: 1500,
            }).add({
              targets: items,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: anime.stagger(400),
            }, "-=1000");

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="w-full px-4 md:px-margin-desktop py-24 border-b border-grid-line bg-background relative" ref={containerRef}>
      <div className="mb-16 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
          {EXPERIENCE.eyebrow}
        </span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto pl-8 md:pl-12">
        {/* Animated Timeline Line */}
        <div className="absolute left-0 top-10 bottom-4 w-[2px] bg-grid-line">
          <div className="w-full h-full bg-primary origin-top" style={{ transform: "scaleY(0)" }} ref={lineRef}></div>
        </div>

        <div className="flex flex-col gap-12 w-full py-4" ref={itemsRef}>
          {EXPERIENCE.items.map((item, index) => (
            <div key={index} style={{ opacity: 0 }} className="relative group">
              {/* Node Dot aligned to the line */}
              <div className="absolute top-[28px] -left-[37px] md:-left-[53px] w-3 h-3 bg-paper-white border-[2px] border-primary rounded-full z-10 transition-colors group-hover:border-secondary group-hover:bg-secondary"></div>
              
              {/* Card */}
              <div className="bg-paper-white border border-grid-line p-6 md:p-8 transition-shadow duration-300 hover:shadow-[4px_4px_0px_var(--color-secondary)] hover:border-secondary relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-col">
                    <h3 className="font-headline-md text-xl md:text-2xl font-bold text-primary">
                      {item.role}
                    </h3>
                    <h4 className="font-headline-sm text-lg font-semibold text-secondary">
                      {item.company}
                    </h4>
                  </div>
                  <span className="font-label-mono-bold text-sm text-secondary bg-surface-dim px-3 py-1 whitespace-nowrap md:self-start">
                    {item.year}
                  </span>
                </div>
                
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-grid-line font-label-mono-sm text-[0.625rem] uppercase text-primary bg-surface-bright">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
