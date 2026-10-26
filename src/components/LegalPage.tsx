import type { ReactNode } from "react";
import { PHONE_DISPLAY, PHONE_TEL, shell } from "@/lib/constants";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="contenu" className="bg-[#f3f3f1] pt-32 pb-20 text-[#111]">
      <article className={`${shell} max-w-3xl`}>
        <p className="text-[0.68rem] tracking-[0.22em] text-neutral-500 uppercase">R&amp;M CLOTHING</p>
        <h1 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-6xl">{title}</h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-700">{children}</div>
        <p className="mt-8 text-sm text-neutral-600">
          Contact :{" "}
          <a href={PHONE_TEL} className="underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </article>
    </main>
  );
}
