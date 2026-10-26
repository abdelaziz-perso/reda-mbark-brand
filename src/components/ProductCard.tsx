"use client";

import { BrandImage as Image } from "@/components/BrandImage";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice, sizeLabel } from "@/lib/format";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { useSite } from "@/components/SiteProvider";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ProductCard({ product }: { product: Product }) {
  const { openQuickView } = useSite();
  const fine = useRef(false);
  const [tilted, setTilted] = useState(false);
  const [transform, setTransform] = useState("none");

  useEffect(() => {
    fine.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  return (
    <article
      className="group flex h-full flex-col bg-[#ececea]"
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: tilted ? "transform 40ms linear" : "transform 420ms ease",
      }}
      onMouseMove={(event) => {
        if (!fine.current) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        setTilted(true);
        setTransform(`perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-4px)`);
      }}
      onMouseLeave={() => {
        setTilted(false);
        setTransform("none");
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e7e4]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 86vw, 30vw"
          className="object-contain p-4 transition duration-700 group-hover:scale-[1.04]"
        />
        {product.images[1] ? (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(max-width: 768px) 86vw, 30vw"
            className="object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          />
        ) : null}
        {product.isNew ? (
          <span className="absolute top-3 left-3 bg-black px-2 py-1 text-[0.62rem] tracking-[0.16em] text-white uppercase">
            Nouveau
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-[0.68rem] tracking-[0.18em] text-neutral-500 uppercase">{product.categoryLabel}</p>
          <h3 className="mt-1 font-display text-xl tracking-tight">{product.name}</h3>
          <p className="mt-2 text-sm text-neutral-700">{formatPrice(product.price, product.currency)}</p>
          <p className="mt-1 text-xs tracking-wide text-neutral-500">{sizeLabel(product.sizes)}</p>
        </div>
        <div className="mt-auto flex items-center gap-2 max-md:opacity-100 md:opacity-0 md:transition md:group-focus-within:opacity-100 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => openQuickView(product.id)}
            className="inline-flex min-h-11 flex-1 items-center justify-center border border-black/15 bg-white px-3 text-[0.68rem] font-semibold tracking-[0.14em] uppercase"
          >
            Voir le produit
          </button>
          <a
            href={whatsappUrl(whatsappMessages.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center bg-black text-white"
            aria-label={`Commander ${product.name} sur WhatsApp`}
          >
            <WhatsAppIcon className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
