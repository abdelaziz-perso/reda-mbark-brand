"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function GlbModel({ url }: { url: string }) {
  const gltf = useGLTF(url);
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]);
  return <primitive object={scene} position={[0, -0.15, 0]} />;
}
