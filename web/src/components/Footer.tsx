import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-padding mx-auto max-w-[1400px] py-10 grid gap-8 md:grid-cols-4 text-sm text-muted">
        <div>
          <div className="text-foreground font-semibold mb-2">Ceylon Gems</div>
          <p className="text-muted">Premier Sri Lankan gemstones, ethically sourced and certified.</p>
        </div>
        <div>
          <div className="text-foreground font-semibold mb-2">Shop</div>
          <ul className="space-y-1">
            <li><Link className="hover:text-primary" href="/shop">All Gemstones</Link></li>
            <li><Link className="hover:text-primary" href="/shop?type=Sapphire">Sapphires</Link></li>
            <li><Link className="hover:text-primary" href="/shop?type=Ruby">Rubies</Link></li>
            <li><Link className="hover:text-primary" href="/shop?type=Spinel">Spinels</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-foreground font-semibold mb-2">About</div>
          <ul className="space-y-1">
            <li><Link className="hover:text-primary" href="/about">Our Story</Link></li>
            <li><Link className="hover:text-primary" href="/ethics">Ethical Sourcing</Link></li>
            <li><Link className="hover:text-primary" href="/education">Education</Link></li>
            <li><Link className="hover:text-primary" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-foreground font-semibold mb-2">Policies</div>
          <ul className="space-y-1">
            <li><Link className="hover:text-primary" href="#">Shipping & Insurance</Link></li>
            <li><Link className="hover:text-primary" href="#">Returns</Link></li>
            <li><Link className="hover:text-primary" href="#">Privacy</Link></li>
            <li><Link className="hover:text-primary" href="#">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-padding mx-auto max-w-[1400px] py-6 text-xs text-muted border-t border-white/10">
        © {new Date().getFullYear()} Ceylon Gems. All rights reserved.
      </div>
    </footer>
  );
}
