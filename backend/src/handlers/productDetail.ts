import { Request, Response } from 'express';
import { Product, ProductDetail } from '../models/product.model';

const getProductDetail = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Product ID is required' });
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);

    if (!response.ok) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const data = await response.json();

    const product: ProductDetail = {
      id: data.id,
      title: data.title,
      price: data.price,
      condition: data.condition,
      thumbnail: data.thumbnail,
      available_quantity: data.available_quantity,
      attributes: data.attributes
    };

    res.json(product);
  } catch (error) {
    console.error('Error fetching product details:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getProductDetail;
