"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/providers/CartContext";
import { useCurrency } from "@/providers/CurrencyContext";
import { getShippingOptions } from "@/utils/shipping";

export default function CheckoutPage() {
  const { totalUsd } = useCart();
  const { format } = useCurrency();
  const [country, setCountry] = useState("US");

  const options = useMemo(() => getShippingOptions(country, totalUsd), [country, totalUsd]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="text-muted">Stripe/PayPal integration will be added. For now this is a placeholder.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Shipping Details</h2>
          <div className="grid gap-3">
            <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="Full Name" />
            <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="Address" />
            <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="City" />
            <div className="grid grid-cols-2 gap-3">
              <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="Postal Code" />
              <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="Country Code (e.g., US, GB)" value={country} onChange={(e) => setCountry(e.target.value.toUpperCase())} />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-semibold mb-2">Shipping Options</div>
            <div className="space-y-2">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center justify-between bg-background/40 rounded px-3 py-2">
                  <div>
                    <div className="font-medium">{opt.carrier} — {opt.service}</div>
                    <div className="text-xs text-muted">{opt.days} business days · Insured</div>
                  </div>
                  <div className="font-medium">{format(opt.priceUsd)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Payment</h2>
          <div className="text-sm">Order total: <span className="font-semibold">{format(totalUsd)}</span></div>
          <div className="text-muted text-sm mt-1">Stripe or PayPal button here.</div>
          <button className="mt-4 px-5 py-3 rounded-md bg-primary text-primary-contrast">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
