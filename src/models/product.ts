import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../utils/interfaces';

// query variables
const tableName = 'Trybesmith.Products';
const attributes = '(name,amount)';

/**
 * Inserts a new product into the Products table
 * 
 * @param newProduct - An object containing the product's data
 * @returns The insert id of the created product
 * 
 */
const create = async (newProduct: IProduct) => {
  const { name, amount } = newProduct;

  const [data] = await connection.execute<ResultSetHeader>(
    `INSERT INTO ${tableName} ${attributes} VALUES (?, ?)`,
    [name, amount],
  );

  return {
    item: {
      id: data.insertId,
      ...newProduct,
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
  const [data] = await connection.execute<RowDataPacket[]>(
    `SELECT * FROM ${tableName}`,
  );

  return data;
};

const sell = async (orderId: number, products: number[]) => {
  const order = products.map(async (productId) => {
    await connection.execute<ResultSetHeader>(
      `UPDATE ${tableName} SET orderId = ? WHERE id = ?`,
      [orderId, productId],
    );
  });

  await Promise.all(order);
};

export default { create, findAll, sell };
