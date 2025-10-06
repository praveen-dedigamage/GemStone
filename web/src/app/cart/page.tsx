"use client";

import { useCart } from "@/providers/CartContext";
import { useCurrency } from "@/providers/CurrencyContext";
import Link from "next/link";

export default function CartPage() {
  const { items, remove, clear, totalUsd } = useCart();
  const { format } = useCurrency();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-muted">Your cart is empty. <Link className="text-primary underline" href="/shop">Continue shopping</Link>.</div>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((it) => (
              <div key={it.gem.id} className="flex items-center justify-between bg-surface rounded-lg border border-white/10 p-4">
                <div>
                  <div className="font-medium">{it.gem.name}</div>
                  <div className="text-sm text-muted">Qty {it.quantity}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium">{format(it.gem.priceUsd * it.quantity)}</div>
                  <button className="text-sm text-danger underline" onClick={() => remove(it.gem.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-muted">Total (USD)</div>
            <div className="text-xl font-semibold">{format(totalUsd)}</div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-md bg-primary text-primary-contrast">Checkout (Stripe)</button>
            <button className="px-5 py-3 rounded-md border border-white/20" onClick={clear}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
