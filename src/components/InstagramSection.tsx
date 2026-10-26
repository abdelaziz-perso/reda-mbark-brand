import { BrandImage as Image } from "@/components/BrandImage";
import { instagramShots } from "@/data/categories";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, shell } from "@/lib/constants";

export function InstagramSection() {
  return (
    <section className="bg-white py-20 md:py-32" aria-labelledby="instagram-title">
      <div className={shell}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="instagram-title" className="font-display text-4xl tracking-[-0.04em] md:text-6xl">
              FOLLOW R&amp;M
            </h2>
            <p className="mt-3 text-lg text-neutral-600">{INSTAGRAM_HANDLE}</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-black px-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase"
          >
            Voir sur Instagram
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {instagramShots.map((shot) => (
            <a
              key={shot.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-[#ececea]"
              aria-label={shot.alt}
            >
              <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 50vw, 30vw" className="object-cover" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
