"use client";

import { PROJECTS } from "@/lib/content";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = containerRef.current;
    const gridItems = gridRef.current?.children;
    
    if (!element || !gridItems) return;

    if (isReducedMotion) {
      Array.from(gridItems).forEach(item => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "scale(1)";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: gridItems,
              opacity: [0, 1],
              scale: [0.95, 1],
              translateY: [20, 0],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    anime({
      targets: e.currentTarget,
      translateY: -6,
      boxShadow: "4px 8px 0px var(--color-secondary)",
      borderColor: "var(--color-secondary)",
      duration: 300,
      easing: "easeOutExpo"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    anime({
      targets: e.currentTarget,
      translateY: 0,
      boxShadow: "0px 0px 0px transparent",
      borderColor: "var(--color-grid-line)",
      duration: 300,
      easing: "easeOutExpo"
    });
  };

  return (
    <section id="projects" className="w-full px-4 md:px-margin-desktop py-24 border-b border-grid-line bg-surface relative" ref={containerRef}>
      <div className="mb-16 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
          {PROJECTS.eyebrow}
        </span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
        {PROJECTS.items.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col border border-grid-line bg-paper-white transition-colors duration-300 block group"
          >
            {/* Project Image */}
            <div className="w-full aspect-video bg-surface-dim border-b border-grid-line flex items-center justify-center overflow-hidden relative group-hover:bg-surface transition-colors">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              ) : (
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(45deg, transparent 45%, var(--color-grid-line) 45%, var(--color-grid-line) 55%, transparent 55%)", backgroundSize: "10px 10px" }}></div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-bold group-hover:text-secondary transition-colors">{project.title}</h3>
                <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray opacity-50">0{index + 1}</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 border border-grid-line font-label-mono-sm text-[0.625rem] uppercase text-primary bg-surface-bright">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
