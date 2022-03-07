import { Router } from 'express';
import { orderController } from '../controllers';
import auth from '../middlewares/auth';

const orders = Router();

orders.post(
  '/',
  [
    auth,
    orderController.create,
  ],
);

orders.get(
  '/:id',
  [
    auth,
    orderController.findByPk,
  ],
);

orders.get(
  '/',
  [
    auth,
    orderController.findAll,
  ],
);

export default orders;
