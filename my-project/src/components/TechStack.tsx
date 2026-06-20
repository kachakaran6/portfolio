"use client";

import { TECH_STACK } from "@/lib/content";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import LogoLoop from "./LogoLoop";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiPostgresql, 
  SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, 
  SiPython, SiFlutter
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";

// Map names from content to icons
const getIconForTech = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react": return <SiReact className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "next.js": return <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "node.js": return <SiNodedotjs className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "mysql": return <SiMysql className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "postgresql": return <SiPostgresql className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "mongodb": return <SiMongodb className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "javascript": return <SiJavascript className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "typescript": return <SiTypescript className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "tailwind css": return <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "java": return <FaJava className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "python": return <SiPython className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "flutter": return <SiFlutter className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    case "ai/ml basics": return <FaBrain className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60 group-hover:opacity-100 group-hover:text-secondary transition-all" />;
    default: return <div className="w-8 h-8 md:w-10 md:h-10 bg-surface-dim rounded opacity-60 group-hover:opacity-100 transition-all" />;
  }
};

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heatMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = containerRef.current;
    const gridContainer = gridRef.current;
    const heatMap = heatMapRef.current;
    
    if (!element || !gridContainer || !heatMap) return;

    if (isReducedMotion) {
      gridContainer.style.opacity = "1";
      gridContainer.style.transform = "scale(1)";
      heatMap.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: "easeOutElastic(1, .8)",
            });
            
            tl.add({
              targets: gridContainer,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
            }).add({
              targets: heatMap,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: "easeOutExpo",
            }, "-=400");
            
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    anime({
      targets: e.currentTarget,
      translateY: -4,
      boxShadow: "2px 4px 0px var(--color-secondary)",
      borderColor: "var(--color-secondary)",
      duration: 300,
      easing: "easeOutExpo"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const logos = TECH_STACK.technologies.map(tech => ({ title: tech, node: getIconForTech(tech) }));

  // Handle hydration mismatch for GitHubCalendar
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="stack" className="w-full px-4 md:px-margin-desktop py-24 border-b border-grid-line bg-paper-white relative" ref={containerRef}>
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
          {TECH_STACK.eyebrow}
        </span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>
      
      <div className="w-full mb-16 overflow-hidden relative" ref={gridRef} style={{ opacity: 0 }}>
        {/* @ts-ignore - LogoLoop is in JSX and lacks TS types */}
        <LogoLoop
          logos={logos}
          speed={40}
          direction="left"
          gap={16}
          logoHeight={200}
          hoverSpeed={10}
          renderItem={(item) => (
            <div 
              className="bg-background border border-grid-line w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center gap-4 relative group cursor-pointer transition-colors duration-300 hover:bg-surface-bright"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.node}
              <span className="font-label-mono-bold text-[0.6875rem] uppercase tracking-wider text-primary opacity-80 group-hover:opacity-100 group-hover:text-secondary transition-all text-center">
                {item.title}
              </span>
            </div>
          )}
        />
      </div>

      {/* GitHub Heatmap */}
      <div className="w-full flex flex-col gap-6" ref={heatMapRef} style={{ opacity: 0 }}>
        <div className="flex items-center gap-4">
          <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray uppercase tracking-widest">
            GITHUB ACTIVITY
          </span>
          <div className="h-px bg-grid-line flex-grow"></div>
        </div>
        <div className="w-full overflow-x-auto p-6 border border-grid-line bg-surface-bright custom-scrollbar">
          {mounted && (
            <GitHubCalendar 
              username="kachakaran6" 
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={{
                light: ['var(--color-surface-dim)', 'rgba(200, 16, 46, 0.4)', 'rgba(200, 16, 46, 0.6)', 'rgba(200, 16, 46, 0.8)', 'var(--color-secondary)'],
                dark: ['var(--color-surface-dim)', 'rgba(224, 49, 74, 0.4)', 'rgba(224, 49, 74, 0.6)', 'rgba(224, 49, 74, 0.8)', 'var(--color-secondary)'],
              }}
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
