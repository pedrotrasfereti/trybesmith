import prisma from './connection';
import { IProduct } from '../utils/interfaces';

/**
 * Inserts a new product into the Products table
 * 
 * @param newProduct - An object containing the product's data
 * @returns The insert id of the created product
 * 
 */
const create = async (newProduct: IProduct) => {
  const product = await prisma.product.create({
    data: newProduct,
  });

  return {
    item: {
      product,
    },
  };
};

/**
 * Finds all products in the Product's table
 * 
 * @returns All products in the Product's table
 * 
 */
const findAll = async () => {
  const data = await prisma.product.findMany();

  return data;
};

const sell = async (orderId: number, products: number[]) => {
  const order = products.map(async (productId) => {
    await prisma.product.update({
      data: { orderId },
      where: { id: productId },
    });
  });

  await Promise.all(order);
};

export default { create, findAll, sell };
