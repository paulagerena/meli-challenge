import Router, { RequestHandler } from 'express';
import { findItemsByKeywords } from '../handlers/search';

const routes = Router();

// Route to search products by keywords
routes.get('/api/search/:keywords', findItemsByKeywords);

export default routes;
