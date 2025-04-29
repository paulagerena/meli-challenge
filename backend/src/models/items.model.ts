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
  image: string;
  description: string;
  location: Location;
}
