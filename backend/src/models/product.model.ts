export interface Product {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  free_shipping: boolean;
  address: unknown;
}

export interface ProductDetail {
  id: string;
  title: string;
  price: number;
  available_quantity: number;
  condition: string;
  thumbnail: string;
  attributes: unknown[];
}
