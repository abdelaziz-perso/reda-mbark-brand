"use client";

import { BrandImage as Image } from "@/components/BrandImage";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";
import type { ShopFilterId } from "@/data/categories";
import { useSite } from "@/components/SiteProvider";

const filterForCategory: Record<Category["id"], ShopFilterId> = {
  tshirts: "tshirts",
  hoodies: "hoodies",
  bottoms: "joggers",
  accessories: "bags",
};

export function CategoryCard({ category }: { category: Category }) {
  const { setShopFilter } = useSite();

  return (
    <a
      href="#boutique"
      onClick={() => setShopFilter(filterForCategory[category.id])}
      className="group relative block min-h-[280px] overflow-hidden bg-[#111] sm:min-h-[420px]"
    >
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`transition duration-700 group-hover:scale-105 ${
          category.fit === "contain" ? "object-contain p-10" : "object-cover"
        }`}
      />
      <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-7">
        <div>
          <p className="text-[0.68rem] tracking-[0.2em] text-white/70 uppercase">{category.caption}</p>
          <h3 className="mt-2 font-display text-3xl tracking-[-0.04em] transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
            {category.name}
          </h3>
        </div>
        <ArrowUpRight className="size-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </a>
  );
}
