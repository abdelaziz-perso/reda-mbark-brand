"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BrandImage as Image } from "@/components/BrandImage";
import { useEffect, useRef, useState } from "react";
import { lookbook } from "@/data/categories";
import { shell } from "@/lib/constants";
import { useDialog } from "@/components/useDialog";

export function Lookbook() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [18, -18]);
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const dialogRef = useDialog(active !== null, close);
  const shot = active === null ? null : lookbook[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setActive((current) => (current === null ? current : (current + 1) % lookbook.length));
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + lookbook.length) % lookbook.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32" aria-labelledby="lookbook-title">
      <div className={shell}>
        <h2 id="lookbook-title" className="font-display text-4xl tracking-[-0.04em] md:text-6xl">
          R&amp;M LOOKBOOK
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {lookbook.map((item, index) => (
            <motion.button
              key={item.src + item.alt}
              type="button"
              style={{ y: index % 2 === 0 ? shift : undefined }}
              onClick={() => setActive(index)}
              aria-label={item.alt}
              className={`relative overflow-hidden text-left ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={item.contain ? "object-contain p-6" : "object-cover"}
              />
            </motion.button>
          ))}
        </div>
      </div>
      {shot ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4" onClick={close}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={shot.alt}
            tabIndex={-1}
            className="relative flex h-full max-h-[92svh] w-full max-w-5xl items-center justify-center outline-none"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={shot.src} alt={shot.alt} fill className="object-contain" sizes="100vw" />
            <button
              type="button"
              onClick={close}
              className="absolute top-2 right-2 min-h-11 bg-white px-4 text-[0.68rem] font-semibold tracking-[0.14em] text-black uppercase"
            >
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
