"use client";

import type { ReactNode } from "react";
import { CameraRig } from "@/three/CameraRig";
import { Lighting } from "@/three/Lighting";
import { Particles } from "@/three/Particles";
import { ProductPedestal } from "@/three/ProductPedestal";

export function Scene({
  children,
  lite,
  reduced,
  variant,
}: {
  children?: ReactNode;
  lite: boolean;
  reduced: boolean;
  variant: "hero" | "product";
}) {
  return (
    <>
      <Lighting lite={lite} />
      <ProductPedestal reduced={reduced} />
      {reduced ? null : <Particles count={lite ? 22 : 64} reduced={reduced} />}
      <CameraRig lite={lite} reduced={reduced} />
      <group position={variant === "hero" ? [-1.05, 0.45, -0.15] : [0, 0.2, 0]}>{children}</group>
    </>
  );
}
