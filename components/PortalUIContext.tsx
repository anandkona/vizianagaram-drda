"use client";

import CartDrawer, {
  CART_CHANGE_EVENT,
  CART_STORAGE_KEY,
  readStoredCart,
} from "@/components/CartDrawer";
import ConcernModal from "@/components/ConcernModal";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PortalUIContextValue = {
  concernOpen: boolean;
  cartOpen: boolean;
  openConcern: () => void;
  closeConcern: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartCount: number;
  wishlistCount: number;
};

const PortalUIContext = createContext<PortalUIContextValue | null>(null);

export function PortalUIProvider({ children }: { children: ReactNode }) {
  const [concernOpen, setConcernOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const syncWishlistCount = useCallback(() => {
    try {
      const raw = window.localStorage.getItem("vizianagaram-wishlist");
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      setWishlistCount(Array.isArray(parsed) ? parsed.length : 0);
    } catch {
      setWishlistCount(0);
    }
  }, []);

  const syncCartCount = useCallback(() => {
    const nextCount = readStoredCart().reduce(
      (total, item) => total + item.quantity,
      0,
    );
    setCartCount(nextCount);
  }, []);

  useEffect(() => {
    syncCartCount();
    syncWishlistCount();
    const handleStorage = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY) syncCartCount();
      if (event.key === "vizianagaram-wishlist") syncWishlistCount();
    };
    const handleWishlistChange = () => syncWishlistCount();

    window.addEventListener(CART_CHANGE_EVENT, syncCartCount);
    window.addEventListener("vizianagaram-wishlist-change", handleWishlistChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(CART_CHANGE_EVENT, syncCartCount);
      window.removeEventListener("vizianagaram-wishlist-change", handleWishlistChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, [syncCartCount, syncWishlistCount]);

  const openConcern = useCallback(() => setConcernOpen(true), []);
  const closeConcern = useCallback(() => setConcernOpen(false), []);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const contextValue = useMemo<PortalUIContextValue>(
    () => ({
      concernOpen,
      cartOpen,
      openConcern,
      closeConcern,
      openCart,
      closeCart,
      cartCount,
      wishlistCount,
    }),
    [
      cartCount,
      cartOpen,
      closeCart,
      closeConcern,
      concernOpen,
      openCart,
      openConcern,
      wishlistCount,
    ],
  );

  return (
    <PortalUIContext.Provider value={contextValue}>
      {children}
      <ConcernModal open={concernOpen} onClose={closeConcern} />
      <CartDrawer open={cartOpen} onClose={closeCart} />
    </PortalUIContext.Provider>
  );
}

export function usePortalUI(): PortalUIContextValue {
  const context = useContext(PortalUIContext);
  if (!context) {
    throw new Error("usePortalUI must be used within a PortalUIProvider.");
  }
  return context;
}
