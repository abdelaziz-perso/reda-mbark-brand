"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { publicPath } from "@/lib/constants";

export function Logo3D({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  const texture = useTexture(publicPath("/images/rm/logo-mark.png"));
  const image = texture.image as { width?: number; height?: number };
  const aspect = (image.width ?? 1) / Math.max(1, image.height ?? 1);
  const height = 0.78;

  useFrame((_, delta) => {
    if (reduced || !group.current) return;
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <planeGeometry args={[height * aspect, height]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} depthWrite={false} />
      </mesh>
    </group>
  );
}
