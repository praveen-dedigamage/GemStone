"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Gemstone } from "@/types/gem";

export type CartItem = {
  gem: Gemstone;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  add: (gem: Gemstone, quantity?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  totalUsd: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (gem: Gemstone, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.gem.id === gem.id);
      if (existing) {
        return prev.map((it) =>
          it.gem.id === gem.id ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [...prev, { gem, quantity }];
    });
  };

  const remove = (id: string) => setItems((prev) => prev.filter((it) => it.gem.id !== id));
  const clear = () => setItems([]);

  const totalUsd = useMemo(
    () => items.reduce((sum, it) => sum + it.gem.priceUsd * it.quantity, 0),
    [items]
  );

  const value = useMemo(() => ({ items, add, remove, clear, totalUsd }), [items, totalUsd]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
