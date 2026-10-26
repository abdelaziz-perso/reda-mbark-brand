import { shell } from "@/lib/constants";

const points = [
  {
    title: "STYLE",
    text: "Une identité sportive, minimaliste et moderne.",
  },
  {
    title: "CONFORT",
    text: "Des pièces pensées pour accompagner le mouvement.",
  },
  {
    title: "POLYVALENCE",
    text: "Du training au quotidien.",
  },
];

export function WhyRM() {
  return (
    <section className="bg-[#070707] py-20 text-white md:py-32">
      <div className={shell}>
        <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">WHY R&amp;M</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {points.map((point, index) => (
            <article key={point.title} className="border-t border-white/15 pt-6">
              <p className="text-[0.68rem] tracking-[0.22em] text-white/45">0{index + 1}</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em]">{point.title}</h3>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-white/75">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
