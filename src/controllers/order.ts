import rescue from 'express-rescue';
import { RequestHandler } from 'express';
import { orderService } from '../services';
import { validateOrder } from '../utils/joi';
import StatusCode from '../utils/statusCode';

const create: RequestHandler = rescue(async (req, res) => {
  const { userId } = req;
  const { products } = req.body;

  validateOrder(req.body);

  const insertData = await orderService.create(userId, products);

  res.status(StatusCode.CREATED).json(insertData);
});

const findByPk: RequestHandler = rescue(async (req, res) => {
  const { id: orderId } = req.params;

  const orderData = await orderService.findByPk(Number(orderId));

  res.status(StatusCode.OK).json(orderData);
});

const findAll: RequestHandler = rescue(async (_req, res) => {
  const orders = await orderService.findAll();

  res.status(StatusCode.OK).json(orders);
});

export default { create, findByPk, findAll };
