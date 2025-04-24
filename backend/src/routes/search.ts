import Router, { RequestHandler } from 'express';
import searchByKeywords from '../handlers/search';

const routes = Router();

// Route to search products by keywords
routes.get('/products/search/:keywords', searchByKeywords as RequestHandler);

export default routes;
