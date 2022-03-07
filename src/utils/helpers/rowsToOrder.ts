import { IOrderProduct } from '../interfaces';

/**
 * Combines rows of one particular order by creating a products
 * array
 * 
 * @param rows - The rows returned by the SELECT query
 * @returns An object with the order's data
 * 
 */
const rowsToOrder = (rows: IOrderProduct[]) => {
  const products = rows.map((order) => order.products);

  const [orderData] = rows;

  return { ...orderData, products };
};

export default rowsToOrder;
