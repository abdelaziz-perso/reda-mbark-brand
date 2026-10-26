"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CameraRig({ lite, reduced }: { lite: boolean; reduced: boolean }) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (lite || reduced) return;
    const onMove = (event: PointerEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [lite, reduced]);

  useFrame((state) => {
    const still = lite || reduced;
    const targetX = still ? 0 : mouse.current.x * 0.28;
    const targetY = 0.22 + (still ? 0 : -mouse.current.y * 0.1);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0.05, 0);
  });

  return null;
}
