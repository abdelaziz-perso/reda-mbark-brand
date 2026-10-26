"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { BrandImage as Image } from "@/components/BrandImage";
import { useEffect, useState } from "react";
import { HeroContent } from "@/components/HeroContent";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export function Hero() {
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 30 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFine(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <section id="accueil" className="relative overflow-hidden bg-[#070707] text-white">
      {reduced ? null : (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-[#070707]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <div className="mx-auto grid min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div
          className="relative order-first h-[48svh] min-h-[250px] lg:order-none lg:h-auto lg:min-h-[100svh]"
          onMouseMove={(event) => {
            if (!fine) return;
            const rect = event.currentTarget.getBoundingClientRect();
            setPointer({
              x: ((event.clientX - rect.left) / rect.width) * 100,
              y: ((event.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <Hero3D />
          <div className="relative z-10 flex h-full items-end justify-center px-5 pt-24 pb-2 lg:items-center lg:px-10 lg:pt-28">
            <div className="relative aspect-[3/4] w-[88%] max-w-[460px]">
              <Image
                src="/images/rm/lifestyle-tee-black.webp"
                alt="Athlète en t-shirt noir et casquette R&M CLOTHING"
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 460px"
                className="object-cover"
              />
              <div className="pedestal-glow pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[78%] -translate-x-1/2" />
            </div>
          </div>
          {fine ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[5]"
              style={{
                background: `radial-gradient(420px circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.14), transparent 42%)`,
              }}
            />
          ) : null}
        </div>
        <HeroContent />
      </div>
    </section>
  );
}
