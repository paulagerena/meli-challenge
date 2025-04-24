import { Request, Response } from 'express';
import { Product } from '../models/product.model';

const searchByKeywords = async (req: Request, res: Response) => {
  const { keywords } = req.query;

  if (!keywords) {
    return res.status(400).json({ message: 'Keywords are required' });
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${keywords}`);

    if (!response.ok) {
      return res.status(404).json({ message: 'No products found' });
    }

    const data = await response.json();
    const products: Product[] = data.results.map((item: Product) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      condition: item.condition,
      thumbnail: item.thumbnail
    }));

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default searchByKeywords;
