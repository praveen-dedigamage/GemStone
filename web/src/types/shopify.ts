export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: { edges: { node: { url: string; altText?: string | null } }[] };
  variants: { edges: { node: { id: string; price: { amount: string; currencyCode: string } } }[] };
  metafields?: { edges: { node: { key: string; value: string } }[] };
};

export type ShopifyGraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};
