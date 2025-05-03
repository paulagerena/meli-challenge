import Router, { RequestHandler } from 'express';
import { getItemDetail } from '../handlers/itemDetail';

const routes = Router();

// Route to get product details by product ID
routes.get('/api/products/detail/:id', getItemDetail);

export default routes;
