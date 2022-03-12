import { IOrderProduct } from '../utils/interfaces';
import prisma from './connection';

/**
 * Inserts a new order into the Orders table
 * 
 * @param userId - The id of the order's owner
 * @returns The order's insert id
 * 
 */
const create = async (userId: number) => {
  const order = await prisma.order.create({
    data: { userId },
  });

  return order;
};

/**
 * Finds an order in the Order's table by the primary key
 * 
 * @param orderId - The order's id
 * @returns The order's data
 * 
 */
const findByPk = async (orderId: number) => {
  const order = await prisma.order.findUnique({
    where: { id: Number(orderId) },
    include: {
      products: {
        select: { id: true },
      },
    },
  });

  return order;
};

const findAll = async () => {
  const data = await prisma.order.findMany({
    include: { products: { select: { id: true } } },
  });

  const orders = data.map((order) => ({
    ...order,
    products: order.products.map((p) => p.id),
  }));

  return orders;
};

export default { create, findByPk, findAll };
