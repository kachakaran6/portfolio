"use client";

import { ABOUT } from "@/lib/content";
import { useEffect, useRef } from "react";
import anime from "animejs";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = containerRef.current;
    const textNode = textRef.current;
    const leftCol = leftColRef.current;
    
    if (!element || !textNode || !leftCol || !headingRef.current || !lineRef.current) return;

    // Wrap words in spans for stagger animation
    if (!textNode.hasAttribute("data-split")) {
      const words = textNode.innerText.split(" ");
      textNode.innerHTML = "";
      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "inline-block mr-[0.25em]";
        span.innerText = word;
        textNode.appendChild(span);
      });
      textNode.setAttribute("data-split", "true");
    }

    const wordSpans = textNode.querySelectorAll("span");
    const ideologyItems = document.querySelectorAll('.ideology-item');

    if (isReducedMotion) {
      leftCol.style.opacity = "1";
      headingRef.current.style.opacity = "1";
      lineRef.current.style.opacity = "1";
      wordSpans.forEach(span => span.style.opacity = "1");
      ideologyItems.forEach(item => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "none";
      });
      if (timelineLineRef.current) {
        timelineLineRef.current.style.transform = "scaleY(1)";
      }
      return;
    }

    // Set initial states
    leftCol.style.opacity = "0";
    headingRef.current.style.opacity = "0";
    headingRef.current.style.transform = "translateY(20px)";
    lineRef.current.style.opacity = "0";
    lineRef.current.style.transform = "translateY(20px)";
    
    wordSpans.forEach(span => {
      span.style.opacity = "0";
      span.style.transform = "translateY(15px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: "easeOutExpo",
            });

            tl.add({
              targets: leftCol,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
            }).add({
              targets: [headingRef.current, lineRef.current],
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              delay: anime.stagger(100),
            }, "-=600").add({
              targets: wordSpans,
              opacity: [0, 1],
              translateY: [15, 0],
              duration: 600,
              delay: anime.stagger(20),
            }, "-=400").add({
              targets: timelineLineRef.current,
              scaleY: [0, 1],
              duration: 1500,
              easing: "linear"
            }, "-=800").add({
              targets: '.ideology-item',
              opacity: [0, 1],
              translateX: [20, 0],
              duration: 600,
              delay: anime.stagger(300), // 1500ms / 5 items = 300ms
              easing: "easeOutExpo"
            }, "-=1500");

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
    <section id="about" className="w-full px-4 md:px-margin-desktop py-24 border-b border-grid-line bg-background relative" ref={containerRef}>
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column - About Myself & Identity */}
        <div className="w-full lg:w-[65%] flex flex-col md:flex-row gap-8 lg:gap-12" ref={leftColRef}>
          {/* Identity Card */}
          <div className="w-full md:w-[40%] max-w-sm flex flex-col gap-8 shrink-0">
            <div className="flex items-center gap-4">
              <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
                {ABOUT.eyebrow}
              </span>
              <div className="h-px bg-grid-line flex-grow"></div>
            </div>
            
            <div className="flex flex-col gap-6 p-6 border border-grid-line bg-surface-bright relative">
              {/* Subtle top-left corner accent */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-secondary"></div>
              
              <div className="w-full aspect-square bg-surface-dim flex items-center justify-center overflow-hidden mb-2 filter grayscale-0 md:grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/projects/Profile%20pic.jpg" alt="Karan Kacha" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col gap-1 border-b border-grid-line pb-4">
                <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray uppercase">Focus</span>
                <span className="font-body-md text-primary font-medium">Full Stack & AI</span>
              </div>
              
              <div className="flex flex-col gap-1 border-b border-grid-line pb-4">
                <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray uppercase">Education</span>
                <span className="font-body-md text-primary font-medium">MCA - AI Spec</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="font-label-mono-bold text-[0.625rem] text-metadata-gray uppercase">Experience</span>
                <span className="font-body-md text-primary font-medium">2+ Years Learning</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="w-full md:w-[60%] pt-2 md:pt-14 flex flex-col gap-6">
            <h3 ref={headingRef} className="font-display-xl md:font-headline-lg text-3xl md:text-5xl text-primary font-bold tracking-tight">
              Hello, I'm Karan.
            </h3>
            <div ref={lineRef} className="w-12 h-1 bg-secondary mb-2"></div>
            <p 
              ref={textRef}
              className="font-body-lg text-lg leading-relaxed text-on-surface-variant max-w-3xl"
            >
              {ABOUT.content}
            </p>
          </div>
        </div>

        {/* Right Column - Ideology Timeline */}
        <div className="w-full lg:w-[35%] pt-8 lg:pt-0 lg:pl-16 lg:border-l border-grid-line relative">
          <div className="flex flex-col gap-8 h-full justify-center">
            <span className="font-label-mono-bold text-[0.65rem] text-metadata-gray tracking-widest uppercase">
              // Ideology & Workflow
            </span>
            
            <div className="flex flex-col relative pt-2">
              {/* Continuous vertical line for the timeline */}
              <div className="absolute left-[5px] top-4 bottom-8 w-[1px] bg-grid-line">
                <div 
                  ref={timelineLineRef} 
                  className="w-full h-full bg-primary origin-top" 
                  style={{ transform: "scaleY(0)" }}
                ></div>
              </div>
              
              {ABOUT.ideology.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative pl-8 pb-6 group ideology-item"
                  style={{ opacity: 0, transform: 'translateX(20px)' }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-[2px] border-grid-line bg-background group-hover:border-secondary transition-colors duration-300"></div>
                  
                  <div className="flex flex-col gap-1 -mt-0.5">
                    <div className="flex items-center gap-3">
                      <span className="font-label-mono-bold text-[0.6rem] text-secondary tracking-wider">{item.step}</span>
                      <h4 className="font-label-mono-bold text-[0.8rem] text-primary uppercase tracking-wider">{item.title}</h4>
                    </div>
                    <p className="font-body-sm text-[0.85rem] text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
