"use client";

import { useEffect, useRef } from "react";
import { HERO } from "@/lib/content";
import anime from "animejs";
import { NeuralBlueprint } from "./NeuralBlueprint";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctasesRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) {
      if (containerRef.current) containerRef.current.style.opacity = "1";
      return;
    }

    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });

    tl.add({
      targets: eyebrowRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    })
    .add({
      targets: headlineRef.current?.children,
      opacity: [0, 1],
      translateY: [40, 0],
      rotateZ: [2, 0],
      delay: anime.stagger(150),
    }, "-=400")
    .add({
      targets: subcopyRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
    }, "-=600")
    .add({
      targets: ctasesRef.current?.children,
      opacity: [0, 1],
      scale: [0.95, 1],
      delay: anime.stagger(100),
    }, "-=600")
    .add({
      targets: socialsRef.current?.children,
      opacity: [0, 1],
      translateY: [10, 0],
      delay: anime.stagger(100),
    }, "-=600");

  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[100dvh] flex flex-col md:flex-row pt-24 md:pt-20"
      ref={containerRef}
    >
      <div className="w-full md:w-[60%] flex flex-col justify-center px-4 md:px-margin-desktop z-10 relative border-r border-grid-line">
        <div className="mb-6" ref={eyebrowRef} style={{ opacity: 0 }}>
          <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
            {HERO.eyebrow}
          </span>
        </div>

        <h1 
          className="font-display-xl-mobile md:font-display-xl text-5xl md:text-[7.5rem] mb-8 leading-[1.1] md:leading-[0.9] tracking-tight"
          ref={headlineRef}
        >
          <div style={{ opacity: 0 }} className="font-bold">{HERO.headline.line1}</div>
          <div style={{ opacity: 0 }} className="text-secondary italic font-serif font-medium">{HERO.headline.line2}</div>
          <div style={{ opacity: 0 }} className="font-bold">{HERO.headline.line3}</div>
        </h1>

        <p 
          className="font-body-lg text-lg md:text-xl max-w-xl mb-12 text-on-surface-variant leading-relaxed"
          ref={subcopyRef}
          style={{ opacity: 0 }}
        >
          {HERO.subcopy}
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full md:w-auto" ref={ctasesRef}>
          <a href="#projects" style={{ opacity: 0 }} className="bg-primary text-on-primary font-label-mono-bold text-sm uppercase px-8 py-4 transition-all hover:bg-secondary w-full text-center md:w-auto active:translate-y-1 inline-block">
            View Selected Work
          </a>
          <a href={HERO.resumeLink} target="_blank" rel="noopener noreferrer" style={{ opacity: 0 }} className="border border-primary text-primary font-label-mono-bold text-sm uppercase px-8 py-4 hover:bg-primary hover:text-on-primary w-full text-center md:w-auto transition-all active:translate-y-1 inline-block">
            Download Resume
          </a>
        </div>

        <div className="flex gap-6" ref={socialsRef}>
          {Object.entries(HERO.socials).map(([key, value]) => (
            <a 
              key={key}
              href={value} 
              style={{ opacity: 0 }}
              className="font-label-mono-sm text-xs text-metadata-gray hover:text-secondary transition-colors underline decoration-grid-line underline-offset-4 uppercase"
            >
              {key}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-[40%] items-center justify-center relative z-20">
        <NeuralBlueprint />
      </div>
    </section>
  );
}
