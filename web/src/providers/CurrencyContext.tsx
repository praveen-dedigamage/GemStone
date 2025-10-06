"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Currency, PriceRates } from "@/types/gem";

const defaultRates: PriceRates = {
  base: "USD",
  rates: { USD: 1, EUR: 0.93, GBP: 0.80 },
};

export type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  rates: PriceRates;
  convert: (usdAmount: number, to?: Currency) => number;
  format: (usdAmount: number, to?: Currency) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [rates] = useState<PriceRates>(defaultRates);

  const convert = (usdAmount: number, to: Currency = currency) => {
    if (to === "USD") return usdAmount;
    return usdAmount * rates.rates[to];
  };

  const format = (usdAmount: number, to: Currency = currency) => {
    const value = convert(usdAmount, to);
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: to,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const value = useMemo(
    () => ({ currency, setCurrency, rates, convert, format }),
    [currency, rates, convert, format]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
