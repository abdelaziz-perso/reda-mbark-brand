"use client";

import { Menu, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { INSTAGRAM_URL, homeHash, navLinks } from "@/lib/constants";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/InstagramIcon";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { useSite } from "@/components/SiteProvider";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen, setMenuOpen, openOrder } = useSite();
  const solid = scrolled || !onHome || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-white/10 bg-black/70 backdrop-blur-md" : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <a href={homeHash("accueil")} className="shrink-0" aria-label="R&M CLOTHING, accueil">
            <Logo className="h-9 w-auto sm:h-11" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[0.72rem] font-medium tracking-[0.16em] text-white/85 uppercase"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-11 items-center justify-center text-white lg:inline-flex"
              aria-label="Instagram R&M CLOTHING"
            >
              <InstagramIcon className="size-[18px]" />
            </a>
            <a
              href={whatsappUrl(whatsappMessages.info)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center text-white"
              aria-label="Écrire sur WhatsApp"
            >
              <WhatsAppIcon className="size-[18px]" />
            </a>
            <button
              type="button"
              onClick={() => openOrder()}
              className="inline-flex size-11 items-center justify-center text-white"
              aria-label="Ouvrir la commande"
            >
              <ShoppingBag className="size-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => openOrder()}
              className="magnetic-cta ml-1 hidden min-h-11 items-center bg-white px-4 text-[0.68rem] font-semibold tracking-[0.16em] text-black uppercase lg:inline-flex"
            >
              Commander
            </button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-white lg:hidden"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
