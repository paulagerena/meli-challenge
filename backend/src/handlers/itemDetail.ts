import { Request, Response } from 'express';
import { ItemDetail } from '../models/items.model';
import { itemsWithBreadcrumbs as allItems } from '../mocks/itemDetail';

const getItemDetail = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: 'Product ID is required' });
    return;
  }

  try {
    const product = allItems.find((item: ItemDetail) => item.id === id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json(product);
    return;
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};

export { getItemDetail };
