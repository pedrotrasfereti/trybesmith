import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrderProduct } from '../utils/interfaces';
import { rowsToOrder, rowsToOrders } from '../utils/helpers';
import connection from './connection';

// query variables
const tableName = 'Trybesmith.Orders';
const attributes = '(userId)';

/**
 * Inserts a new order into the Orders table
 * 
 * @param userId - The id of the order's owner
 * @returns The order's insert id
 * 
 */
const create = async (userId: number) => {
  const [data] = await connection.execute<ResultSetHeader>(
    `INSERT INTO ${tableName} ${attributes} VALUES (?)`,
    [userId],
  );

  return data.insertId;
};

/**
 * Finds an order in the Order's table by the primary key
 * 
 * @param orderId - The order's id
 * @returns The order's data
 * 
 */
const findByPk = async (orderId: number) => {
  const [data] = await connection.execute<RowDataPacket[]>(
    `SELECT O.id, O.userId, P.id as products
    FROM ${tableName} as O
    JOIN Trybesmith.Products as P
    ON O.id = P.orderId
    WHERE O.id = ?`,
    [orderId],
  );

  const rows = data as unknown as IOrderProduct[];
  const orderData = rowsToOrder(rows);

  return orderData;
};

const findAll = async () => {
  const [data] = await connection.execute<RowDataPacket[]>(
    `SELECT O.id, O.userId, P.id as products
    FROM ${tableName} as O
    JOIN Trybesmith.Products as P
    ON O.id = P.orderId`,
  );

  const rows = data as unknown as IOrderProduct[];
  const orders = rowsToOrders(rows);

  return orders;
};

export default { create, findByPk, findAll };
