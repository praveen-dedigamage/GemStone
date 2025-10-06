export type Certification = {
  authority: "GIA" | "IGI" | "Gubelin" | "AGL" | "CGL" | "Other";
  certificateId: string;
  url?: string; // PDF or image link
};

export type Gemstone = {
  id: string;
  name: string;
  type: "Sapphire" | "Ruby" | "Spinel" | "Emerald" | "Alexandrite" | "Other";
  color: string;
  carat: number;
  dimensions: { length: number; width: number; depth?: number; unit: "mm" };
  cut: string;
  clarity?: string;
  origin: "Sri Lanka" | string;
  treatment?: string;
  shape: "Oval" | "Round" | "Cushion" | "Pear" | "Emerald" | "Princess" | "Other";
  priceUsd: number;
  currency?: "USD" | "EUR" | "GBP";
  isCertified: boolean;
  certification?: Certification;
  images: string[]; // URLs under public/
  video360?: string; // URL to 360 video
  description?: string;
  inStock: boolean;
};

export type Currency = "USD" | "EUR" | "GBP";

export type PriceRates = {
  base: Currency; // base currency for prices
  rates: Record<Currency, number>; // 1 USD -> X currency
};
