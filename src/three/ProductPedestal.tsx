"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function ProductPedestal({ reduced }: { reduced: boolean }) {
  const ring = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (reduced || !ring.current) return;
    ring.current.rotation.z += delta * 0.12;
  });

  return (
    <group position={[0, -1.05, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <cylinderGeometry args={[1.05, 1.18, 0.08, 64]} />
        <meshStandardMaterial color="#161616" metalness={0.78} roughness={0.32} />
      </mesh>
      <mesh ref={ring} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.08, 0]}>
        <torusGeometry args={[1.22, 0.008, 16, 96]} />
        <meshStandardMaterial color="#c9c9c9" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.72, 0.78, 48]} />
        <meshStandardMaterial color="#8e8e8e" metalness={0.8} roughness={0.28} emissive="#222" />
      </mesh>
    </group>
  );
}
