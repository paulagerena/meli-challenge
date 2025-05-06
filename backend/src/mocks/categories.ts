import { CategoryPath, ItemDetail } from '../models/items.model';

// Create an interface for the mapping of item IDs to category breadcrumb arrays
interface CategoryBreadcrumbMap {
  [itemId: string]: CategoryPath[];
}

// Mock category breadcrumbs for each item detail
const mockCategoryBreadcrumbs: CategoryBreadcrumbMap = {
  // Item 1: iPhone 15 PRO MAX 256GB
  '1': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Celulares y Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones',
      position: 2
    },
    {
      name: 'Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones',
      position: 3
    },
    {
      name: 'Apple',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/apple',
      position: 4
    },
    {
      name: 'iPhone 15',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/apple/iphone-15',
      position: 5
    }
  ],

  // Item 2: Samsung Galaxy S23 Ultra 512GB
  '2': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Celulares y Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones',
      position: 2
    },
    {
      name: 'Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones',
      position: 3
    },
    {
      name: 'Samsung',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/samsung',
      position: 4
    },
    {
      name: 'Galaxy S',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/samsung/galaxy-s',
      position: 5
    }
  ],

  // Item 3: Motorola Edge 40 Pro 256GB
  '3': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Celulares y Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones',
      position: 2
    },
    {
      name: 'Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones',
      position: 3
    },
    {
      name: 'Motorola',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/motorola',
      position: 4
    },
    {
      name: 'Edge',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/motorola/edge',
      position: 5
    }
  ],

  // Item 4: Apple iPod Touch Renovado De 16 Gb
  '4': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Audio',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio',
      position: 2
    },
    {
      name: 'Audio Portátil y Accesorios',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios',
      position: 3
    },
    {
      name: 'Reproductores Portátiles',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles',
      position: 4
    },
    {
      name: 'iPod Touch',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles/ipod-touch',
      position: 5
    }
  ],

  // Item 5: Apple iPod Nano 16GB Usado
  '5': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Audio',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio',
      position: 2
    },
    {
      name: 'Audio Portátil y Accesorios',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios',
      position: 3
    },
    {
      name: 'Reproductores Portátiles',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles',
      position: 4
    },
    {
      name: 'iPod Nano',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles/ipod-nano',
      position: 5
    }
  ],

  // Item 6: iPod touch 7th Gen 32GB
  '6': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Audio',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio',
      position: 2
    },
    {
      name: 'Audio Portátil y Accesorios',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios',
      position: 3
    },
    {
      name: 'Reproductores Portátiles',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles',
      position: 4
    },
    {
      name: 'iPod Touch',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles/ipod-touch',
      position: 5
    }
  ],

  // Item 7: Apple iPod Classic 80GB
  '7': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Audio',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio',
      position: 2
    },
    {
      name: 'Audio Portátil y Accesorios',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios',
      position: 3
    },
    {
      name: 'Reproductores Portátiles',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles',
      position: 4
    },
    {
      name: 'iPod Classic',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/audio/audio-portatil-y-accesorios/reproductores-portatiles/ipod-classic',
      position: 5
    }
  ],

  // Item 8: Nokia G60 5G 128GB
  '8': [
    {
      name: 'Electrónica, Audio y Video',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video',
      position: 1
    },
    {
      name: 'Celulares y Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones',
      position: 2
    },
    {
      name: 'Smartphones',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones',
      position: 3
    },
    {
      name: 'Nokia',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/nokia',
      position: 4
    },
    {
      name: 'Serie G',
      link: 'https://www.mercadolibre.com.ar/c/electronica-audio-y-video/celulares-y-smartphones/smartphones/nokia/serie-g',
      position: 5
    }
  ]
};

// Function to add breadcrumbs to an item
export const addCategoryBreadcrumb = (item: ItemDetail) => {
  const breadcrumbs: CategoryPath[] = mockCategoryBreadcrumbs[item.id];
  return {
    ...item,
    category_breadcrumb: breadcrumbs || []
  };
};
