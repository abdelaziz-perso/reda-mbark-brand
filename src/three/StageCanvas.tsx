"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Logo3D } from "@/components/Logo3D";
import { Scene } from "@/three/Scene";
import { GlbModel } from "@/three/GlbModel";
import { publicPath } from "@/lib/constants";

export function StageCanvas({
  lite,
  reduced,
  active,
  variant,
  modelUrl,
}: {
  lite: boolean;
  reduced: boolean;
  active: boolean;
  variant: "hero" | "product";
  modelUrl?: string;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={reduced ? "demand" : active ? "always" : "never"}
      gl={{
        antialias: !lite,
        alpha: true,
        powerPreference: lite ? "low-power" : "high-performance",
      }}
      camera={{ position: [0, 0.25, 4.5], fov: 32 }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <Suspense fallback={null}>
        <Scene lite={lite} reduced={reduced} variant={variant}>
          {variant === "hero" ? <Logo3D reduced={reduced} /> : null}
          {modelUrl ? <GlbModel url={publicPath(modelUrl)} /> : null}
        </Scene>
      </Suspense>
    </Canvas>
  );
}
