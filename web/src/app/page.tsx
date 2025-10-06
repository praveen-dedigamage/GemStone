import { Hero } from "@/components/Hero";
import { GEMS } from "@/data/gems";
// Force client boundary for cards using currency context
import ClientOnly from "@/components/ClientOnly";
import { GemCard } from "@/components/GemCard";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <section>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured Gems</h2>
        </div>
        <ClientOnly>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GEMS.map((g) => (
              <GemCard key={g.id} gem={g} />
            ))}
          </div>
        </ClientOnly>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold">Certified Quality</h3>
          <p className="text-muted mt-1">GIA, Gübelin, AGL and more available on select stones.</p>
        </div>
        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold">Ethically Sourced</h3>
          <p className="text-muted mt-1">Supporting responsible mining communities across Sri Lanka.</p>
        </div>
        <div className="glass rounded-lg p-6">
          <h3 className="font-semibold">Insured Worldwide Shipping</h3>
          <p className="text-muted mt-1">Secure delivery with full insurance via DHL/FedEx.</p>
        </div>
      </section>
    </div>
  );
}
