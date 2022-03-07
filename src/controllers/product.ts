import rescue from 'express-rescue';
import { RequestHandler } from 'express';
import { productService } from '../services';

import { IProduct } from '../utils/interfaces';
import { validateProduct } from '../utils/joi';
import StatusCode from '../utils/statusCode';

const create: RequestHandler = rescue(async (req, res) => {
  const newProduct: IProduct = req.body;

  validateProduct(newProduct);

  const insertData = await productService.create(newProduct);

  res.status(StatusCode.CREATED).json(insertData);
});

const findAll: RequestHandler = rescue(async (_req, res) => {
  const products = await productService.findAll();

  res.status(StatusCode.OK).json(products);
});

export default { create, findAll };
