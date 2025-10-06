import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CurrencyProvider } from "@/providers/CurrencyContext";
import { CartProvider } from "@/providers/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Lankan Gemstones | Premier Ceylon Sapphires",
    template: "%s | Ceylon Gems",
  },
  description:
    "Ethically sourced, certified Sri Lankan gemstones. Shop premium Ceylon sapphires, rubies, spinels and more with secure international shipping.",
  metadataBase: new URL("https://www.example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Sri Lankan Gemstones | Premier Ceylon Sapphires",
    description:
      "Ethically sourced, certified Sri Lankan gemstones. Shop premium Ceylon sapphires with global shipping.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lankan Gemstones | Premier Ceylon Sapphires",
    description:
      "Ethically sourced, certified Sri Lankan gemstones with secure international checkout.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-dvh bg-background text-foreground`}
        suppressHydrationWarning>
        <CurrencyProvider>
          <CartProvider>
            <Header />
            <main className="container-padding mx-auto w-full max-w-[1400px] py-8">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
