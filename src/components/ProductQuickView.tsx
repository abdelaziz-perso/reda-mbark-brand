"use client";

import { BrandImage as Image } from "@/components/BrandImage";
import { getProduct } from "@/data/products";
import { formatPrice, sizeLabel } from "@/lib/format";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { useDialog } from "@/components/useDialog";
import { useSite } from "@/components/SiteProvider";

export function ProductQuickView() {
  const { quickViewId, closeQuickView, openOrder } = useSite();
  const product = quickViewId ? getProduct(quickViewId) : undefined;
  const ref = useDialog(Boolean(product), closeQuickView);
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center bg-black/70 sm:items-center" onClick={closeQuickView}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        tabIndex={-1}
        className="grid max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-[#f3f3f1] outline-none sm:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[280px] bg-[#e7e7e4]">
          <Image src={product.images[0]} alt={product.name} fill className="object-contain p-6" sizes="(max-width: 640px) 100vw, 360px" />
        </div>
        <div className="p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:p-8">
          <p className="text-[0.68rem] tracking-[0.2em] text-neutral-500 uppercase">{product.categoryLabel}</p>
          <h2 id="quick-view-title" className="mt-2 font-display text-3xl tracking-tight">
            {product.name}
          </h2>
          <p className="mt-3 text-sm text-neutral-700">{formatPrice(product.price, product.currency)}</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">{product.description}</p>
          <p className="mt-4 text-sm text-neutral-600">Tailles : {sizeLabel(product.sizes)}</p>
          <p className="mt-1 text-sm text-neutral-600">Couleur : {product.colors.join(", ")}</p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => openOrder(product.id)}
              className="inline-flex min-h-12 items-center justify-center bg-black px-4 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Commander
            </button>
            <a
              href={whatsappUrl(whatsappMessages.product(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-black/15 px-4 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
            >
              WhatsApp
            </a>
            <button type="button" onClick={closeQuickView} className="min-h-11 text-sm text-neutral-600">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
