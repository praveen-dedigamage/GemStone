"use client";

import React from "react";

export type FiltersState = {
  type?: string;
  color?: string;
  shape?: string;
  caratMin?: number;
  caratMax?: number;
  priceMin?: number;
  priceMax?: number;
  certified?: boolean;
};

export function Filters({ value, onChange }: { value: FiltersState; onChange: (next: FiltersState) => void }) {
  return (
    <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6 bg-surface p-4 rounded-lg border border-white/10">
      <select className="bg-background border border-white/10 rounded px-2 py-2" value={value.type ?? ""} onChange={(e) => onChange({ ...value, type: e.target.value || undefined })}>
        <option value="">Gem Type</option>
        <option value="Sapphire">Sapphire</option>
        <option value="Ruby">Ruby</option>
        <option value="Spinel">Spinel</option>
        <option value="Emerald">Emerald</option>
      </select>
      <input className="bg-background border border-white/10 rounded px-3 py-2" placeholder="Color" value={value.color ?? ""} onChange={(e) => onChange({ ...value, color: e.target.value || undefined })} />
      <select className="bg-background border border-white/10 rounded px-2 py-2" value={value.shape ?? ""} onChange={(e) => onChange({ ...value, shape: e.target.value || undefined })}>
        <option value="">Shape</option>
        <option>Oval</option>
        <option>Round</option>
        <option>Cushion</option>
        <option>Pear</option>
        <option>Emerald</option>
      </select>
      <input className="bg-background border border-white/10 rounded px-3 py-2" type="number" placeholder="Carat min" value={value.caratMin ?? ""} onChange={(e) => onChange({ ...value, caratMin: e.target.value ? Number(e.target.value) : undefined })} />
      <input className="bg-background border border-white/10 rounded px-3 py-2" type="number" placeholder="Carat max" value={value.caratMax ?? ""} onChange={(e) => onChange({ ...value, caratMax: e.target.value ? Number(e.target.value) : undefined })} />
      <div className="flex gap-2">
        <input className="w-full bg-background border border-white/10 rounded px-3 py-2" type="number" placeholder="Price min (USD)" value={value.priceMin ?? ""} onChange={(e) => onChange({ ...value, priceMin: e.target.value ? Number(e.target.value) : undefined })} />
        <input className="w-full bg-background border border-white/10 rounded px-3 py-2" type="number" placeholder="Price max (USD)" value={value.priceMax ?? ""} onChange={(e) => onChange({ ...value, priceMax: e.target.value ? Number(e.target.value) : undefined })} />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={!!value.certified} onChange={(e) => onChange({ ...value, certified: e.target.checked || undefined })} />
        Certified only
      </label>
    </div>
  );
}
