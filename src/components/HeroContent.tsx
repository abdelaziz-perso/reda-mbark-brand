"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroContent() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <div className="relative z-10 flex flex-col justify-end px-5 pt-6 pb-28 sm:px-8 lg:justify-center lg:px-14 lg:py-28 xl:px-20">
      <motion.p {...rise(0.55)} className="text-[0.68rem] font-medium tracking-[0.34em] text-white/70">
        R&amp;M CLOTHING
      </motion.p>
      <h1 className="mt-4 font-display text-[clamp(2.7rem,7vw,6.1rem)] leading-[0.9] font-medium tracking-[-0.045em] text-white">
        <motion.span className="block" {...rise(1)}>
          BUILT FOR
        </motion.span>
        <motion.span className="block" {...rise(1.18)}>
          YOUR LIMITS.
        </motion.span>
      </h1>
      <motion.p {...rise(1.45)} className="mt-5 text-sm tracking-[0.22em] text-white/75 uppercase">
        Performance. Style. Discipline.
      </motion.p>
      <motion.p {...rise(1.65)} className="mt-4 max-w-md text-base leading-relaxed text-white/80">
        Des essentiels sportswear conçus pour l&apos;entraînement, le mouvement et le quotidien.
      </motion.p>
      <motion.div {...rise(2.5)} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#collection"
          className="group inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-black uppercase"
        >
          Découvrir la collection
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={whatsappUrl(whatsappMessages.collection)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center border border-white/35 px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase hover:border-white"
        >
          Commander sur WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
