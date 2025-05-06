import { Request, RequestHandler, Response } from 'express';
import { Item } from '../models/items.model';
import searchResults from '../mocks/searchResults';
import { addCategoryBreadcrumb } from '../mocks/categories';
import { itemsWithBreadcrumbs } from '../mocks/itemDetail';

const findItemsByKeywords = async (req: Request, res: Response) => {
  const { keywords } = req.params;

  // Convert each term in keywords to an array
  const keywordsArray = keywords.split(' ');

  if (!keywords) {
    res.status(400).json({ message: 'Keywords are required' });
    return;
  }

  try {
    // Simulate delay of an API call to Mercado Libre API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Find given keywords in items title
    const foundItems: Item[] = searchResults.filter((item: Item) =>
      // Find if any of the keywords terms are in any item title
      keywordsArray.some(
        (keyword) => keyword.length >= 3 && item.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    // If no items are found, return 404
    if (foundItems.length === 0) {
      res.status(404).json({ items: [], message: 'No products found' });
      return;
    }

    // Pick a relevant category breadcrumb for results batch
    const firstItem = foundItems[0];
    const generalCategory = itemsWithBreadcrumbs.find(
      (item) => item.id === firstItem.id
    )?.category_breadcrumb;

    // Return the found items
    res.status(200).json({
      items: foundItems,
      total_found: foundItems.length,
      category_path: generalCategory
    });
    return;
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};

export { findItemsByKeywords };
