export type ShippingOption = {
  carrier: "DHL" | "FedEx";
  service: string;
  insured: boolean;
  days: string; // e.g., 3-5 business days
  priceUsd: number;
};

function insuranceSurcharge(declaredValueUsd: number): number {
  if (declaredValueUsd <= 5000) return 40; // base insurance
  const extra = Math.ceil((declaredValueUsd - 5000) / 1000) * 5; // $5 per additional $1k
  return 40 + extra;
}

export function getShippingOptions(countryCode: string, declaredValueUsd: number): ShippingOption[] {
  const base = countryCode === "US" ? 60 : 85;
  const insurance = insuranceSurcharge(declaredValueUsd);
  return [
    { carrier: "DHL", service: "Express Worldwide", insured: true, days: "3-5", priceUsd: base + insurance },
    { carrier: "FedEx", service: "International Priority", insured: true, days: "3-6", priceUsd: base + 10 + insurance },
  ];
}
