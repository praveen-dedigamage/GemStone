"use client";

import Link from "next/link";
import { useCurrency } from "@/providers/CurrencyContext";
import { useCart } from "@/providers/CartContext";

export function Header() {
  const { currency, setCurrency } = useCurrency();
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b border-white/10">
      <div className="container-padding mx-auto max-w-[1400px] flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-foreground">Ceylon</span>
          <span className="ml-1 text-primary">Gems</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
          <Link href="/ethics" className="hover:text-primary transition-colors">Ethical Sourcing</Link>
          <Link href="/education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as "USD" | "EUR" | "GBP")}
            aria-label="Currency"
            className="bg-surface text-foreground border border-white/10 rounded px-2 py-1 text-sm"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <Link href="/cart" className="text-sm hover:text-primary">
            Cart ({items.length})
          </Link>
        </div>
      </div>
    </header>
  );
}
