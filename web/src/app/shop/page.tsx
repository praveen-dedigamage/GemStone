"use client";

import React, { useMemo, useState } from "react";
import { GEMS } from "@/data/gems";
import { GemCard } from "@/components/GemCard";
import { Filters, type FiltersState } from "@/components/Filters";

export default function ShopPage() {
  const [filters, setFilters] = useState<FiltersState>({});

  const filtered = useMemo(() => {
    return GEMS.filter((g) => {
      if (filters.type && g.type !== filters.type) return false;
      if (filters.color && !g.color.toLowerCase().includes(filters.color.toLowerCase())) return false;
      if (filters.shape && g.shape !== filters.shape) return false;
      if (filters.caratMin != null && g.carat < filters.caratMin) return false;
      if (filters.caratMax != null && g.carat > filters.caratMax) return false;
      if (filters.priceMin != null && g.priceUsd < filters.priceMin) return false;
      if (filters.priceMax != null && g.priceUsd > filters.priceMax) return false;
      if (filters.certified && !g.isCertified) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Gemstone Gallery</h1>
      <Filters value={filters} onChange={setFilters} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((g) => (
          <GemCard key={g.id} gem={g} />
        ))}
        {filtered.length === 0 && <div className="text-muted">No gemstones match these filters.</div>}
      </div>
    </div>
  );
}
