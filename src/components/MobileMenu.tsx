"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { INSTAGRAM_URL, PHONE_TEL, navLinks } from "@/lib/constants";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/InstagramIcon";
import { useSite } from "@/components/SiteProvider";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function MobileMenu() {
  const { menuOpen, setMenuOpen, openOrder } = useSite();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  return (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[#070707] px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-white lg:hidden"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl tracking-[-0.04em]"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => openOrder()}
              className="inline-flex min-h-12 items-center justify-center bg-white text-[0.72rem] font-semibold tracking-[0.16em] text-black uppercase"
            >
              Commander
            </button>
            <div className="flex gap-3">
              <a
                href={whatsappUrl(whatsappMessages.info)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-white/25 text-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <a href={PHONE_TEL} className="inline-flex min-h-12 flex-1 items-center justify-center border border-white/25 text-sm">
                Appeler
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-12 items-center justify-center border border-white/25"
                aria-label="Instagram R&M CLOTHING"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
