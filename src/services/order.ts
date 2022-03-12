import { orderModel, productModel } from '../models';
import { order } from '../utils/messages';
import StatusCode from '../utils/statusCode';
import CodeError from './error/CodeError';

const create = async (userId: number, products: number[]) => {
  const { id: orderId } = await orderModel.create(userId);

  await productModel.sell(orderId, products);

  return {
    order: {
      userId,
      products,
    },
  };
};

const findByPk = async (orderId: number) => {
  const orderData = await orderModel.findByPk(orderId);

  if (!orderData) {
    throw Object.assign(new CodeError(
      order.notFound,
      StatusCode.NOT_FOUND,
    ));
  }

  return {
    ...orderData,
    products: orderData.products.map((p) => p.id),
  };
};

const findAll = async () => {
  const orders = await orderModel.findAll();
  return orders;
};

export default { create, findByPk, findAll };

/*
-> line 22-27 <-
https://stackoverflow.com/questions/53080948/
generic-throw-giving-expected-an-object-to-be-thrown-lint-error
*/
