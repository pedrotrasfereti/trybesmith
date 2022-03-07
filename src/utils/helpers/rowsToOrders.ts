import { IOrderProduct } from '../interfaces';

/**
 * Creates an array of order groups based on the `id` property
 * 
 * @param rows - The rows returned by the SELECT query
 * @returns An array of order groups
 * 
 */
const groupByOrderId = (rows: IOrderProduct[]) => {
  const groupsObj = rows.reduce<any>((acc, currValue) => {
    if (!acc[currValue.id]) {
      acc[currValue.id] = [];
    }

    acc[currValue.id].push(currValue);
    return acc;
  }, {});

  const groups = Object.values(groupsObj);

  return groups as unknown[] as IOrderProduct[][];
};

/**
 * Reduces order groups to a single object by creating
 * a products array in each one. The end result is an array of
 * these objects, named `orders`.
 * 
 * @param groups - An array of order groups
 * @returns An array of order objects
 * 
 */
const combineGroups = (groups: IOrderProduct[][]) => {
  const orders = [];

  for (let i = 0; i < groups.length; i += 1) {
    const products = groups[i].map((group) => group.products);
    const firstOrder = groups[i][0];

    orders.push({ ...firstOrder, products });
  }

  return orders;
};

/**
 * Creates an array of orders by grouping and combining
 * rows based on the `id` property
 * 
 * @param rows - The rows returned by the SELECT query
 * @returns An array containing all orders
 * 
 */
const rowsToOrders = (rows: IOrderProduct[]) => {
  const groups = groupByOrderId(rows);
  const orders = combineGroups(groups);

  return orders;
};

export default rowsToOrders;
