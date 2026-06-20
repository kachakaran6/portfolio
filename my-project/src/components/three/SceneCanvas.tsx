"use client";

import { Canvas } from "@react-three/fiber";
import { NodeNetwork } from "./NodeNetwork";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function SceneCanvas() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const { resolvedTheme } = useTheme();
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]} // limit pixel ratio for performance
        gl={{ alpha: true, antialias: true }}
      >
        <NodeNetwork count={60} isReducedMotion={isReducedMotion} theme={resolvedTheme} />
      </Canvas>
    </div>
  );
}
