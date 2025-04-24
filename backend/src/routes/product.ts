import Router, { RequestHandler } from 'express';
import getProductDetail from '../handlers/productDetail';

const routes = Router();

// Route to get product details by product ID
routes.get('/products/detail/:id', getProductDetail as RequestHandler);

export default routes;
