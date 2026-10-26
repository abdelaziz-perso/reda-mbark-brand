"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ShopFilterId } from "@/data/categories";

type SiteContextValue = {
  orderOpen: boolean;
  orderProductId?: string;
  quickViewId: string | null;
  menuOpen: boolean;
  shopFilter: ShopFilterId;
  openOrder: (productId?: string) => void;
  closeOrder: () => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
  setMenuOpen: (open: boolean) => void;
  setShopFilter: (filter: ShopFilterId) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderProductId, setOrderProductId] = useState<string | undefined>();
  const [quickViewId, setQuickViewId] = useState<string | null>(null);
  const [menuOpen, setMenuOpenState] = useState(false);
  const [shopFilter, setShopFilter] = useState<ShopFilterId>("all");

  const setMenuOpen = useCallback((open: boolean) => {
    setMenuOpenState(open);
    document.body.classList.toggle("nav-lock", open);
  }, []);

  const openOrder = useCallback((productId?: string) => {
    setOrderProductId(productId);
    setQuickViewId(null);
    setOrderOpen(true);
    setMenuOpen(false);
  }, [setMenuOpen]);

  const closeOrder = useCallback(() => setOrderOpen(false), []);
  const openQuickView = useCallback((productId: string) => {
    setQuickViewId(productId);
    setMenuOpen(false);
  }, [setMenuOpen]);
  const closeQuickView = useCallback(() => setQuickViewId(null), []);

  const value = useMemo(
    () => ({
      orderOpen,
      orderProductId,
      quickViewId,
      menuOpen,
      shopFilter,
      openOrder,
      closeOrder,
      openQuickView,
      closeQuickView,
      setMenuOpen,
      setShopFilter,
    }),
    [
      orderOpen,
      orderProductId,
      quickViewId,
      menuOpen,
      shopFilter,
      openOrder,
      closeOrder,
      openQuickView,
      closeQuickView,
      setMenuOpen,
    ],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteProvider");
  return context;
}
