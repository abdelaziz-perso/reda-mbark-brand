import { shell } from "@/lib/constants";

export function BrandStory() {
  return (
    <section id="apropos" className="scroll-mt-24 overflow-hidden bg-white py-20 text-[#111] md:py-32">
      <div className={shell}>
        <p className="text-[0.68rem] tracking-[0.28em] text-neutral-500 uppercase">La marque</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
          MORE THAN CLOTHING.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-700">
          R&amp;M CLOTHING associe performance, confort et style dans une collection pensée pour les hommes qui avancent avec discipline.
        </p>
        <div className="mt-16 grid gap-2 font-display leading-[0.82] tracking-[-0.06em] text-[#111] md:mt-24">
          <p className="text-[clamp(4.5rem,16vw,11rem)]">R&amp;M</p>
          <p className="text-[clamp(3.2rem,11vw,7.5rem)] text-neutral-400">CLOTHING</p>
        </div>
      </div>
    </section>
  );
}
