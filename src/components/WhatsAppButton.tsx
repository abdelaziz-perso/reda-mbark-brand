"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [visible, setVisible] = useState(!onHome);

  useEffect(() => {
    const onScroll = () => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      setVisible(!onHome || !mobile || window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  if (!visible) return null;

  return (
    <a
      href={whatsappUrl(whatsappMessages.info)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter R&M CLOTHING sur WhatsApp"
      className={`fixed right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#111] text-white shadow-lg ${
        onHome ? "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-6" : "bottom-[calc(1rem+env(safe-area-inset-bottom))]"
      }`}
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
