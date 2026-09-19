"use client";

import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-dvh flex items-center pt-24 pb-20 md:pt-20 md:pb-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-margin-desktop z-10 relative">
        <div className="mb-6">
          <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-widest">
            {HERO.eyebrow}
          </span>
        </div>

        <h1 className="font-display-xl-mobile md:font-display-xl text-5xl md:text-[clamp(5rem,8vw,7.5rem)] mb-8 leading-[1.05] md:leading-[0.9] tracking-tight">
          <div className="font-bold">{HERO.headline.line1}</div>
          <div className="text-secondary italic font-serif font-medium">
            {HERO.headline.line2}
          </div>
          <div className="font-bold text-[clamp(2.75rem,5.2vw,5.5rem)] leading-none md:whitespace-nowrap">
            {HERO.headline.line3}
          </div>
        </h1>

        <p className="font-body-lg text-lg md:text-xl max-w-2xl mb-12 text-on-surface-variant leading-relaxed">
          {HERO.subcopy}
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full md:w-auto">
          <a
            href="#projects"
            className="bg-primary text-on-primary font-label-mono-bold text-sm uppercase px-8 py-4 transition-all hover:bg-secondary w-full text-center md:w-auto active:translate-y-1 inline-block"
          >
            View Selected Work
          </a>
          <a
            href={HERO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary font-label-mono-bold text-sm uppercase px-8 py-4 hover:bg-primary hover:text-on-primary w-full text-center md:w-auto transition-all active:translate-y-1 inline-block"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6">
          {Object.entries(HERO.socials).map(([key, value]) => (
            <a
              key={key}
              href={value}
              className="font-label-mono-sm text-xs text-metadata-gray hover:text-secondary transition-colors underline decoration-grid-line underline-offset-4 uppercase"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
