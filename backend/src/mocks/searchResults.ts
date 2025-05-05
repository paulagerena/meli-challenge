import { Item, Currency, ItemDetail } from '../models/items.model';

// Mock data for search results
const items: Item[] = [
  {
    id: '1',
    title: 'iPhone 15 PRO MAX 256GB',
    price: 1450250,
    currency: Currency.ARS,
    image: '/images/iphone_15_pro_max.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: true
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra 512GB',
    price: 780999,
    currency: Currency.ARS,
    image: '/images/samsung_s23_5G_256gb.webp',
    location: {
      city: 'Rosario',
      state: 'Santa Fe',
      country: 'Argentina'
    },
    free_shipping: false
  },
  {
    id: '3',
    title: 'Motorola Edge 40 Pro 256GB Nuevo en caja sellado',
    price: 670000,
    currency: Currency.ARS,
    image: '/images/motorola_edge40.webp',
    location: {
      city: 'Mar del Plata',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: true
  },
  {
    id: '4',
    title: 'Apple iPod Touch Renovado De 16 Gb (quinta Generación) ',
    price: 332395.23,
    currency: Currency.ARS,
    image: '/images/ipod_touch_32gb_azul_7gen.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: false
  },
  {
    id: '5',
    title: 'Apple iPod Nano 16GB Usado',
    price: 139000,
    currency: Currency.ARS,
    image: '/images/ipod_nano_2gen_4gb.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: true
  },
  {
    id: '6',
    title: 'iPod touch 7th Gen 32GB',
    price: 219400.75,
    currency: Currency.ARS,
    image: '/images/ipod_touch_32gb_azul_7gen.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: false
  },
  {
    id: '7',
    title: 'Apple iPod Classic 80GB',
    price: 199290.99,
    currency: Currency.ARS,
    image: '/images/ipod_classic_80gb_usado.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: true
  },
  {
    id: '8',
    title: 'Nokia G60 5G 128GB Nuevo en caja sellado',
    price: 870000,
    currency: Currency.ARS,
    image: '/images/nokia_g60.webp',
    location: {
      city: 'CABA',
      state: 'Buenos Aires',
      country: 'Argentina'
    },
    free_shipping: false
  }
];

const searchResults = items.map((item) => ({
  id: item.id,
  title: item.title,
  price: item.price,
  currency: item.currency,
  image: item.image,
  location: item.location,
  free_shipping: item.free_shipping
}));

export default searchResults;
