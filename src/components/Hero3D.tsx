"use client";

import dynamic from "next/dynamic";
import { useStage } from "@/components/useStage";

const StageCanvas = dynamic(() => import("@/three/StageCanvas").then((mod) => mod.StageCanvas), {
  ssr: false,
});

export default function Hero3D() {
  const stage = useStage();

  return (
    <div id={stage.id} className="pointer-events-none absolute inset-0" aria-hidden="true">
      {stage.ready ? (
        <StageCanvas
          lite={stage.lite}
          reduced={stage.reduced}
          active={stage.visible}
          variant="hero"
        />
      ) : null}
    </div>
  );
}
