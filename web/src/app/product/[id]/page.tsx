"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { GEMS } from "@/data/gems";
import { useCurrency } from "@/providers/CurrencyContext";
import { useCart } from "@/providers/CartContext";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const gem = GEMS.find((g) => g.id === params?.id);
  const { format } = useCurrency();
  const { add } = useCart();

  if (!gem) return notFound();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
          <Image src={gem.images[0]} alt={gem.name} fill className="object-cover" />
        </div>
        {gem.video360 && (
          <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
            <video src={gem.video360} controls className="w-full bg-black" />
          </div>
        )}
        <div className="mt-3 grid grid-cols-4 gap-3">
          {gem.images.slice(1).map((img, i) => (
            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
              <Image src={img} alt={`${gem.name} ${i + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{gem.name}</h1>
        <div className="mt-2 text-muted">{gem.type} • {gem.shape} • {gem.carat.toFixed(2)} ct</div>
        <div className="mt-4 text-2xl font-semibold text-primary">{format(gem.priceUsd)}</div>
        <div className="mt-6 flex gap-3">
          <button onClick={() => add(gem)} className="px-5 py-3 rounded-md bg-primary text-primary-contrast">Add to Cart</button>
          <a href="mailto:sales@example.com" className="px-5 py-3 rounded-md border border-white/20">Inquire</a>
        </div>
        <div className="mt-8 space-y-2 text-sm">
          <div><span className="text-muted">Origin:</span> {gem.origin}</div>
          {gem.treatment && <div><span className="text-muted">Treatment:</span> {gem.treatment}</div>}
          {gem.clarity && <div><span className="text-muted">Clarity:</span> {gem.clarity}</div>}
          <div><span className="text-muted">Dimensions:</span> {gem.dimensions.length} × {gem.dimensions.width} {gem.dimensions.unit}</div>
          {gem.isCertified && gem.certification && (
            <div>
              <span className="text-muted">Certificate:</span> {gem.certification.authority} {gem.certification.certificateId}{" "}
              {gem.certification.url && (
                <a className="text-primary underline ml-1" href={gem.certification.url} target="_blank">View</a>
              )}
            </div>
          )}
        </div>
        {gem.description && <p className="mt-6 text-muted">{gem.description}</p>}
        <div className="mt-6 text-xs text-muted">Insured international shipping via DHL/FedEx. 7-day inspection period.</div>
      </div>
    </div>
  );
}
