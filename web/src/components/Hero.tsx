import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full rounded-xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1605648916361-dc5b876ba1d2?q=80&w=1600&auto=format&fit=crop"
          alt="Ceylon sapphire on dark background"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>
      <div className="relative p-10 md:p-16 lg:p-24 min-h-[420px] flex flex-col justify-end">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-[900px]">
          The World&#39;s Finest Ceylon Sapphires, Direct from the Source
        </h1>
        <p className="mt-4 text-lg text-muted max-w-[720px]">
          Ethically sourced gemstones from Sri Lanka, certified and shipped worldwide with full insurance.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/shop" className="px-6 py-3 rounded-md bg-primary text-primary-contrast font-medium hover:opacity-95">
            Shop Gemstones
          </Link>
          <Link href="/about" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
