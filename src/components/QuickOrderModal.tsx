"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { useDialog } from "@/components/useDialog";
import { useSite } from "@/components/SiteProvider";

export function QuickOrderModal() {
  const { orderOpen, orderProductId, closeOrder } = useSite();
  if (!orderOpen) return null;
  return <OrderSheet key={orderProductId ?? "choice"} initialProductId={orderProductId} onClose={closeOrder} />;
}

function OrderSheet({ initialProductId, onClose }: { initialProductId?: string; onClose: () => void }) {
  const ref = useDialog(true, onClose);
  const initial = products.find((product) => product.id === initialProductId) ?? products[0];
  const [productId, setProductId] = useState(initial.id);
  const [size, setSize] = useState(initial.sizes[0] ?? "Unique");
  const [color, setColor] = useState(initial.colors[0] ?? "Noir");
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.id === productId) ?? initial;

  const href = useMemo(
    () =>
      whatsappUrl(
        whatsappMessages.order({
          product: product.name,
          size,
          color,
          quantity,
        }),
      ),
    [product.name, size, color, quantity],
  );

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center bg-black/70 sm:items-center" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        tabIndex={-1}
        className="max-h-[92svh] w-full max-w-lg overflow-y-auto bg-[#f3f3f1] p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] text-[#111] outline-none sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] tracking-[0.22em] text-neutral-500 uppercase">WhatsApp</p>
            <h2 id="order-title" className="mt-2 font-display text-3xl tracking-tight">
              Commander
            </h2>
          </div>
          <button type="button" onClick={onClose} className="min-h-11 px-2 text-sm">
            Fermer
          </button>
        </div>
        <form className="mt-6 grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2 text-sm">
            Produit
            <select
              value={product.id}
              onChange={(event) => {
                const next = products.find((item) => item.id === event.target.value) ?? product;
                setProductId(next.id);
                setSize(next.sizes[0] ?? "Unique");
                setColor(next.colors[0] ?? "Noir");
              }}
              className="min-h-12 border border-black/15 bg-white px-3 text-base"
            >
              {products.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Taille
            <select value={size} onChange={(event) => setSize(event.target.value)} className="min-h-12 border border-black/15 bg-white px-3 text-base">
              {product.sizes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Couleur
            <select value={color} onChange={(event) => setColor(event.target.value)} className="min-h-12 border border-black/15 bg-white px-3 text-base">
              {product.colors.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div className="grid gap-2 text-sm">
            <span>Quantité</span>
            <div className="flex items-center gap-2">
              <button type="button" className="size-11 border border-black/15 bg-white" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Diminuer la quantité">
                −
              </button>
              <input
                inputMode="numeric"
                min={1}
                max={10}
                value={quantity}
                onChange={(event) => setQuantity(Math.min(10, Math.max(1, Number(event.target.value) || 1)))}
                className="h-11 w-16 border border-black/15 bg-white text-center text-base"
                aria-label="Quantité"
              />
              <button type="button" className="size-11 border border-black/15 bg-white" onClick={() => setQuantity((value) => Math.min(10, value + 1))} aria-label="Augmenter la quantité">
                +
              </button>
            </div>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-12 items-center justify-center bg-black px-5 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase"
          >
            Continuer sur WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
}
