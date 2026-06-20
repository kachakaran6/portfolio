"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface NodeNetworkProps {
  count?: number;
  isReducedMotion?: boolean;
  theme?: string;
}

export function NodeNetwork({ count = 50, isReducedMotion = false, theme = "light" }: NodeNetworkProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { viewport, mouse } = useThree();

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPrimary = new THREE.Color(theme === "dark" ? "#F2F1EC" : "#0E0F12");
    const colorAccent = new THREE.Color(theme === "dark" ? "#E0314A" : "#C8102E");

    for (let i = 0; i < count; i++) {
      // distribute in a larger volume
      positions[i * 3] = (Math.random() - 0.5) * viewport.width * 1.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;

      // 10% chance to be accent color
      const color = Math.random() > 0.9 ? colorAccent : colorPrimary;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, [count, viewport, theme]);

  const { linePositions, lineColors } = useMemo(() => {
    const maxDistance = 3.5;
    const lPos = [];
    const lCol = [];

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          lPos.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          
          // Interpolate alpha or just use a solid low-opacity line
          // The line material handles global opacity, but we can set vertex colors if we want
          const isDark = theme === "dark";
          lCol.push(
            isDark ? 0.95 : 0.05, 
            isDark ? 0.95 : 0.05, 
            isDark ? 0.95 : 0.05, 
            isDark ? 0.95 : 0.05, 
            isDark ? 0.95 : 0.05, 
            isDark ? 0.95 : 0.05
          ); // light or dark lines
        }
      }
    }
    return { 
      linePositions: new Float32Array(lPos),
      lineColors: new Float32Array(lCol)
    };
  }, [positions, count, theme]);

  const groupRef = useRef<THREE.Group>(null);
  
  // Target rotation for smooth interpolation
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (isReducedMotion || !groupRef.current) return;

    // Slow autonomous drift
    groupRef.current.rotation.y += 0.02 * delta;
    groupRef.current.rotation.x += 0.01 * delta;

    // Parallax effect based on mouse position
    targetRotation.current.x = (mouse.y * viewport.height) * 0.02;
    targetRotation.current.y = (mouse.x * viewport.width) * 0.02;

    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
