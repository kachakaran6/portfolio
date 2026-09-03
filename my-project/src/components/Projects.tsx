"use client";

import { PROJECTS } from "@/lib/content";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { Lock, ExternalLink } from "lucide-react";

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

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
            {/* Browser Header Bar */}
            <div className="w-full h-7 bg-surface-bright/95 border-b border-grid-line px-3 flex items-center justify-between text-[10px] font-label-mono-sm text-metadata-gray">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/85 border border-[#E0443E]/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/85 border border-[#DEA123]/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/85 border border-[#1AAB29]/60 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-dim/80 border border-grid-line/60 max-w-[65%] truncate">
                <Lock className="w-2.5 h-2.5 text-secondary shrink-0" />
                <span className="truncate">{getDomain(project.link)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-surface-dim text-metadata-gray font-semibold border border-grid-line/40">HD</span>
              </div>
            </div>

            {/* Project Image Showcase */}
            <div className="w-full aspect-[16/10] relative flex items-center justify-center bg-surface-dim border-b border-grid-line overflow-hidden">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(45deg, transparent 45%, var(--color-grid-line) 45%, var(--color-grid-line) 55%, transparent 55%)", backgroundSize: "10px 10px" }}></div>
              )}
            </div>
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-bold group-hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray opacity-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
