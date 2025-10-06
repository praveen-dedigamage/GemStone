"use client";

import Image from "next/image";
import Link from "next/link";
import type { Gemstone } from "@/types/gem";
import { useCurrency } from "@/providers/CurrencyContext";

export function GemCard({ gem }: { gem: Gemstone }) {
  const { format } = useCurrency();
  return (
    <div className="group rounded-lg border border-white/10 overflow-hidden bg-surface">
      <div className="relative aspect-[4/3]">
        <Image src={gem.images[0]} alt={gem.name} fill className="object-cover" />
        {gem.isCertified && (
          <div className="absolute top-2 left-2 text-[11px] bg-black/60 text-white px-2 py-1 rounded">
            Certified
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted">{gem.type} • {gem.shape}</div>
          <div className="text-sm text-muted">{gem.carat.toFixed(2)} ct</div>
        </div>
        <h3 className="mt-1 font-semibold text-lg">
          <Link href={`/product/${gem.id}`} className="hover:text-primary">
            {gem.name}
          </Link>
        </h3>
        <div className="mt-2 text-primary font-medium">{format(gem.priceUsd)}</div>
      </div>
    </div>
  );
}
