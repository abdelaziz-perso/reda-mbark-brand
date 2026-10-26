"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const unit = (salt: number) => {
        const raw = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
        return raw - Math.floor(raw);
      };
      const radius = 1.15 + unit(1) * 1.55;
      const angle = unit(2) * Math.PI * 2;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = (unit(3) - 0.35) * 2.1;
      values[index * 3 + 2] = Math.sin(angle) * radius * 0.55;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d7d7d7" size={0.018} sizeAttenuation transparent opacity={0.7} depthWrite={false} />
    </points>
  );
}
