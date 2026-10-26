"use client";

import dynamic from "next/dynamic";
import { BrandImage as Image } from "@/components/BrandImage";
import { useMemo, useState } from "react";
import { products, type Product } from "@/data/products";
import { shell } from "@/lib/constants";
import { formatPrice } from "@/lib/format";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { useSite } from "@/components/SiteProvider";
import { useStage } from "@/components/useStage";

const StageCanvas = dynamic(() => import("@/three/StageCanvas").then((mod) => mod.StageCanvas), {
  ssr: false,
});

export function Product3DShowcase() {
  const showcase = useMemo(() => products.filter((product) => product.featured), []);
  const [activeId, setActiveId] = useState(showcase[2]?.id ?? showcase[0]?.id ?? products[0].id);
  const product = showcase.find((item) => item.id === activeId) ?? showcase[0];
  const stage = useStage();
  const { openOrder } = useSite();
  if (!product) return null;
  const lifestyle = product.images.find((image) => image.includes("lifestyle")) ?? product.images[0];

  return (
    <section id="nouveautes" className="scroll-mt-24 bg-[#070707] py-20 text-white md:py-32">
      <div className={`${shell} grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`}>
        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-white/55 uppercase">Nouveautés</p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.045em] md:text-6xl">DESIGNED TO MOVE</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            {product.description}
          </p>
          <p className="mt-6 font-display text-2xl">{product.name}</p>
          <p className="mt-1 text-sm text-white/60">{formatPrice(product.price, product.currency)}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {showcase.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`min-h-11 border px-3 text-[0.68rem] tracking-[0.14em] uppercase ${
                  item.id === product.id ? "border-white bg-white text-black" : "border-white/25 text-white"
                }`}
                aria-pressed={item.id === product.id}
              >
                {item.name.replace(" R&M", "")}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openOrder(product.id)}
              className="inline-flex min-h-12 items-center justify-center bg-white px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-black uppercase"
            >
              Commander
            </button>
            <a
              href={whatsappUrl(whatsappMessages.product(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-white/30 px-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <ShowcaseStage product={product} lifestyle={lifestyle} stage={stage} />
      </div>
    </section>
  );
}

function ShowcaseStage({
  product,
  lifestyle,
  stage,
}: {
  product: Product;
  lifestyle: string;
  stage: ReturnType<typeof useStage>;
}) {
  return (
    <div id={stage.id} className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
      {stage.ready ? (
        <div className="absolute inset-0" aria-hidden="true">
          <StageCanvas
            lite={stage.lite}
            reduced={stage.reduced}
            active={stage.visible}
            variant="product"
            modelUrl={product.modelUrl}
          />
        </div>
      ) : null}
      {product.modelUrl ? null : (
        <div className="relative z-10 flex h-full items-end justify-center px-6 pb-10">
          <div className="relative h-[78%] w-[86%]">
            <Image
              src={lifestyle}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 86vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="pedestal-glow pointer-events-none absolute bottom-6 left-1/2 h-14 w-[70%] -translate-x-1/2" />
        </div>
      )}
    </div>
  );
}
