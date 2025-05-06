export enum Currency {
  ARS = 'ARS',
  BRL = 'BRL',
  COP = 'COP',
  MXN = 'MXN'
}

export enum Condition {
  NEW = 'NEW',
  USED = 'USED',
  REFURBISHED = 'REFURBISHED'
}

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface CategoryPath {
  link: string;
  name: string;
  position: number;
}

export interface Item {
  id: string;
  title: string;
  price: number;
  currency: Currency;
  free_shipping: boolean;
  location: Location;
  image: string;
}

export interface ItemDetail {
  id: string;
  title: string;
  price: number;
  currency: Currency;
  sold_quantity: number;
  condition: Condition;
  image?: string;
  location: Location;
  description?: string;
  category_breadcrumb?: CategoryPath[];
}

export interface SearchResponse {
  items: Item[];
  total_count: number;
  category_path: CategoryPath[];
}
