"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  stagger?: number;
  translateY?: number;
  duration?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = ref.current;
    
    if (!element) return;

    if (isReducedMotion) {
      element.style.opacity = "1";
      return;
    }

    // Set initial state
    element.style.opacity = "0";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: element,
              opacity: [0, 1],
              translateY: [options.translateY || 40, 0],
              duration: options.duration || 800,
              delay: options.delay || 0,
              easing: "easeOutExpo",
            });
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.delay, options.duration, options.threshold, options.translateY]);

  return ref;
}
