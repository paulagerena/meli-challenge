import express, { Request, Response } from 'express';
import searchRoutes from './routes/search';
import productRoutes from './routes/product';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use(searchRoutes);
app.use(productRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
