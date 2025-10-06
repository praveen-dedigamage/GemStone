import type { ShopifyGraphQLResponse, ShopifyProduct } from "@/types/shopify";
import type { Gemstone } from "@/types/gem";

const SHOP_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

async function shopifyFetch<T>(query: string, variables?: Record<string, string | number | boolean | null | undefined>): Promise<T> {
  if (!SHOP_DOMAIN || !STOREFRONT_TOKEN) throw new Error("Shopify env not set");
  const res = await fetch(`https://${SHOP_DOMAIN}/api/2024-10/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": String(STOREFRONT_TOKEN),
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  const json = (await res.json()) as ShopifyGraphQLResponse<T>;
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join("; "));
  if (!json.data) throw new Error("No data");
  return json.data;
}

export async function listProducts(): Promise<ShopifyProduct[]> {
  const query = /* GraphQL */ `
    query ListProducts($first: Int!) {
      products(first: $first) {
        edges { node { id handle title description images(first: 6) { edges { node { url altText } } } variants(first: 1) { edges { node { id price { amount currencyCode } } } } metafields(first: 20) { edges { node { key value } } } } }
      }
    }
  `;
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(query, { first: 20 });
  return data.products.edges.map((e) => e.node);
}

export function mapProductToGem(product: ShopifyProduct): Gemstone {
  const priceUsd = Number(product.variants.edges[0]?.node.price.amount || 0);
  const mf = new Map<string, string>((product.metafields?.edges.map((e) => [e.node.key, e.node.value]) as [string, string][]) || []);
  return {
    id: product.handle,
    name: product.title,
    type: (mf.get("gem_type") as Gemstone["type"]) || "Sapphire",
    color: mf.get("color") || "",
    carat: Number(mf.get("carat") || 0),
    dimensions: {
      length: Number(mf.get("length_mm") || 0),
      width: Number(mf.get("width_mm") || 0),
      depth: Number(mf.get("depth_mm") || 0),
      unit: "mm",
    },
    cut: mf.get("cut") || "",
    clarity: mf.get("clarity") || undefined,
    origin: (mf.get("origin") as string) || "Sri Lanka",
    treatment: mf.get("treatment") || undefined,
    shape: (mf.get("shape") as Gemstone["shape"]) || "Oval",
    priceUsd,
    isCertified: mf.get("certified") === "true",
    certification: mf.get("certificate_id")
      ? { authority: (mf.get("certificate_authority") as Gemstone["certification"] extends infer C ? C extends { authority: infer A } ? A : never : never) || "GIA", certificateId: mf.get("certificate_id")!, url: mf.get("certificate_url") || undefined }
      : undefined,
    images: product.images.edges.map((e) => e.node.url),
    description: product.description,
    inStock: true,
  };
}
