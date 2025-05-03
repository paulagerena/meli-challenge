import { Condition, Currency, ItemDetail } from '../models/items.model';

// Mock details for each possible search result item
const itemDetail1: ItemDetail = {
  id: '1',
  title: 'iPhone 15 PRO MAX 256GB',
  price: 1450250,
  currency: Currency.ARS,
  sold_quantity: 5,
  condition: Condition.NEW,
  image: '/images/iphone_15_pro_max.webp',
  description:
    'Cámara de 48 MP. Pantalla Super Retina XDR de 6.7 pulgadas. Wi-Fi 6E. Garantía de 1 año.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail2: ItemDetail = {
  id: '2',
  title: 'Samsung Galaxy S23 Ultra 512GB',
  price: 780999,
  currency: Currency.ARS,
  sold_quantity: 32,
  condition: Condition.NEW,
  image: '/images/samsung_s23_5G_256gb.webp',
  description:
    'Explorá el mundo con el nuevo Samsung Galaxy S23 Ultra 512GB. Con caja y accesorios originales.',
  location: {
    city: 'Rosario',
    state: 'Santa Fe',
    country: 'Argentina'
  }
};

const itemDetail3: ItemDetail = {
  id: '3',
  title: 'Motorola Edge 40 Pro 256GB Nuevo en caja sellado',
  price: 670000,
  currency: Currency.ARS,
  sold_quantity: 21,
  condition: Condition.NEW,
  image: '/images/motorola_edge40.webp',
  description:
    'No te pierdas la oportunidad de tener el nuevo Motorola Edge 40 Pro 256GB. Nuevo en caja sellado. Con caja y accesorios originales.',
  location: {
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail4: ItemDetail = {
  id: '4',
  title: 'Apple iPod Touch Renovado De 16 Gb (quinta Generación) ',
  price: 332395.23,
  currency: Currency.ARS,
  sold_quantity: 1,
  condition: Condition.NEW,
  image: '/images/ipod_touch_32gb_azul_7gen.webp',
  description:
    'NUEVO EN CAJA. iPod Touch Renovado De 16 Gb (quinta Generación). Se entrega en Argentina. Con caja y accesorios originales.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail5: ItemDetail = {
  id: '5',
  title: 'Apple iPod Nano 16GB Usado',
  price: 139000,
  currency: Currency.ARS,
  sold_quantity: 8,
  condition: Condition.USED,
  image: '/images/ipod_nano_2gen_4gb.webp',
  description:
    'El primer iPod Nano. Funcionalmente nuevo. Sin rayones ni marcas de uso. Con caja y accesorios originales.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail6: ItemDetail = {
  id: '6',
  title: 'iPod touch 7th Gen 256GB',
  price: 219400.75,
  currency: Currency.ARS,
  sold_quantity: 3,
  condition: Condition.USED,
  image: '/images/ipod_touch_32gb_azul_7gen.webp',
  description: 'No funciona. Para repuestos. Con caja y accesorios originales.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail7: ItemDetail = {
  id: '7',
  title: 'Apple iPod Classic 80GB',
  price: 199290.99,
  currency: Currency.ARS,
  sold_quantity: 0,
  condition: Condition.USED,
  image: '/images/ipod_classic_80gb_usado.webp',
  description:
    'El mejor iPod de todos los tiempos. Con pantalla Retina de 4 pulgadas, chip A10 Fusion y cámara de 8 MP. Con caja y accesorios originales.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const itemDetail8: ItemDetail = {
  id: '8',
  title: 'Apple iPod Touch 6th Generación 128GB',
  price: 199290.99,
  currency: Currency.ARS,
  sold_quantity: 0,
  condition: Condition.USED,
  image: '/images/ipod_touch_32gb_azul_7gen.webp',
  description:
    'iPod Touch 6th Generación. Funcionalmente nuevo. Sin rayones ni marcas de uso. Con caja y accesorios originales.',
  location: {
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};

const allItems: ItemDetail[] = [
  itemDetail1,
  itemDetail2,
  itemDetail3,
  itemDetail4,
  itemDetail5,
  itemDetail6,
  itemDetail7,
  itemDetail8
];

export { allItems };
