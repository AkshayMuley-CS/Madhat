"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 1500 }) => {
  const mesh = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  // Generate particles position and colors
  const { positions } = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    return { positions: posArray };
  }, [count]);

  // Create circular texture
  const texture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Track mouse movement
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    // Rotate particles slowly
    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x += 0.0005;

    // Interaction rotation
    mesh.current.rotation.y += 0.05 * (mouse.current.x * 0.5 - mesh.current.rotation.y);
    mesh.current.rotation.x += 0.05 * (mouse.current.y * 0.5 - mesh.current.rotation.x);

    // Color shifting logic between Violet (#8b5cf6) and Cyan (#06b6d4)
    const material = mesh.current.material as THREE.PointsMaterial;
    const timeColor = (Math.sin(time * 0.5) + 1) * 0.5;
    const r = 6 + (139 - 6) * timeColor;
    const g = 182 + (92 - 182) * timeColor;
    const b = 212 + (246 - 212) * timeColor;
    material.color.setRGB(r / 255, g / 255, b / 255);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={texture || undefined}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color="#8b5cf6"
      />
    </points>
  );
};

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <Particles count={1500} />
      </Canvas>
    </div>
  );
}
