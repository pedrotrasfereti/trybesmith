import { Router } from 'express';
import { productController } from '../controllers';
import auth from '../middlewares/auth';

const products = Router();

products.get(
  '/',
  [
    auth,
    productController.findAll,
  ],
);

products.post(
  '/',
  [
    auth,
    productController.create,
  ],
);

export default products;
