import { products } from "@/data/products";
import { shell } from "@/lib/constants";
import { ProductGrid } from "@/components/ProductGrid";

export function Collection() {
  return (
    <section id="collection" className="scroll-mt-24 bg-[#f3f3f1] py-20 text-[#111] md:py-32">
      <div className={shell}>
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] tracking-[0.28em] text-neutral-500 uppercase">R&amp;M</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-6xl">LA COLLECTION</h2>
          </div>
          <p className="max-w-sm text-base text-neutral-600">Essentiels conçus pour bouger.</p>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
