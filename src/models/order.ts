import prisma from './prisma';

/**
 * Inserts a new order into the Orders table
 * 
 * @param userId - The id of the order's owner
 * @returns The order's insert id
 * 
 */
const create = async (userId: number) => prisma.order.create({
  data: { userId },
});


/**
 * Finds an order in the Order's table by the primary key
 * 
 * @param orderId - The order's id
 * @returns The order's data
 * 
 */
const findByPk = async (orderId: number) => prisma.order.findUnique({
  where: { id: Number(orderId) },
  include: {
    products: {
      select: { id: true },
    },
  },
});

const findAll = async () => {
  const data = await prisma.order.findMany({
    include: { products: { select: { id: true } } },
  });

  return data.map((order) => ({
    ...order,
    products: order.products.map((p) => p.id),
  }));
};

export default { create, findByPk, findAll };
