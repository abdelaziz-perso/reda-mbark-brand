"use client";

import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { shopFilters, type ShopFilterId } from "@/data/categories";
import { shell } from "@/lib/constants";
import { ProductCard } from "@/components/ProductCard";
import { useSite } from "@/components/SiteProvider";

function matches(product: Product, filter: ShopFilterId) {
  if (filter === "all") return true;
  if (filter === "joggers") return product.id === "jogger-noir";
  if (filter === "shorts") return product.id === "short-training";
  if (filter === "caps") return product.id === "casquette";
  if (filter === "bags") return product.id === "sac-sport";
  return product.category === filter;
}

export function ShopByProduct() {
  const { shopFilter, setShopFilter } = useSite();
  const visible = products.filter((product) => matches(product, shopFilter));

  return (
    <section id="boutique" className="scroll-mt-24 bg-[#f3f3f1] py-20 md:py-32">
      <div className={shell}>
        <div className="mb-8 flex flex-col gap-4 md:mb-10">
          <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">SHOP BY PRODUCT</h2>
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filtrer par produit">
            {shopFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={shopFilter === filter.id}
                onClick={() => setShopFilter(filter.id)}
                className={`min-h-11 shrink-0 px-4 text-[0.68rem] tracking-[0.14em] uppercase ${
                  shopFilter === filter.id ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {visible.map((product) => (
            <div key={product.id} className="w-[82vw] shrink-0 snap-start sm:w-[46vw] md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
